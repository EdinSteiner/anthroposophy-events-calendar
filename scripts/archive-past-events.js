const fs = require('fs');
const path = require('path');

function exit(msg) {
  console.log(msg);
  process.exit(1);
}

(async () => {
  const repoRoot = path.resolve(__dirname, '..');
  const scriptPath = path.join(repoRoot, 'script.js');
  const backupPath = path.join(repoRoot, `script.js.bak-${Date.now()}`);
  const archivePath = path.join(repoRoot, 'events-archive.json');

  if (!fs.existsSync(scriptPath)) exit(`script.js not found at ${scriptPath}`);

  // Read script.js
  const content = fs.readFileSync(scriptPath, 'utf8');

  const allEventsKey = 'const allEvents';
  const keyIdx = content.indexOf(allEventsKey);
  if (keyIdx === -1) exit('Could not find "const allEvents" in script.js');

  const arrayStart = content.indexOf('[', keyIdx);
  if (arrayStart === -1) exit('Could not find start of events array ("[")');

  // Find matching closing bracket for the array (handle nested brackets/braces)
  let depth = 0;
  let arrayEnd = -1;
  for (let i = arrayStart; i < content.length; i++) {
    const ch = content[i];
    if (ch === '[') depth++;
    else if (ch === ']') {
      depth--;
      if (depth === 0) { arrayEnd = i; break; }
    }
  }
  if (arrayEnd === -1) exit('Could not find end of events array in script.js');

  const arrayText = content.slice(arrayStart, arrayEnd + 1);

  // Safely evaluate the array text. Wrap in parentheses so object-literals parse.
  let events;
  try {
    events = eval('(' + arrayText + ')');
    if (!Array.isArray(events)) throw new Error('Parsed value is not an array');
  } catch (err) {
    exit('Failed to parse allEvents array: ' + err.message);
  }

  // Determine cutoff: default = start of today (local) -> archive events strictly before today (i.e., up to yesterday)
  const arg = process.argv[2];
  let cutoffExclusive;
  if (arg) {
    const d = new Date(arg);
    if (isNaN(d)) exit('Invalid cutoff date argument. Use YYYY-MM-DD');
    cutoffExclusive = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  } else {
    const now = new Date();
    cutoffExclusive = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  }

  function parseDateMaybe(s) {
    if (!s) return null;
    if (typeof s !== 'string') return null;
    const trimmed = s.trim();
    if (trimmed.toLowerCase() === 'ongoing') return null;
    // Try ISO parse first
    const d = new Date(trimmed);
    if (!isNaN(d)) return new Date(d.getFullYear(), d.getMonth(), d.getDate());
    // Try YYYY-MM-DD explicitly
    const m = trimmed.match(/(\d{4})-(\d{2})-(\d{2})/);
    if (m) return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
    return null;
  }

  const toArchive = [];
  const toKeep = [];

  for (const ev of events) {
    // If event has endDate, use that; else use date
    const endStr = ev.endDate || ev.date;
    const d = parseDateMaybe(endStr);
    if (!d) {
      // non-parseable or ongoing -> keep
      toKeep.push(ev);
      continue;
    }
    // Archive if end < cutoffExclusive
    if (d < cutoffExclusive) toArchive.push(ev);
    else toKeep.push(ev);
  }

  // Safety: do not allow empty events list
  if (toKeep.length === 0) exit('Aborting: operation would remove all events. Check cutoff.');

  // Backup script.js
  fs.writeFileSync(backupPath, content, 'utf8');
  console.log(`Backup written to ${backupPath}`);

  // Write archive file (append or create). We'll include metadata and merge if existing.
  const archiveEntry = {
    archivedAt: new Date().toISOString(),
    cutoffExclusive: cutoffExclusive.toISOString().slice(0,10),
    archivedCount: toArchive.length,
    ids: toArchive.map(e => e.id),
    events: toArchive
  };

  let archive = [];
  if (fs.existsSync(archivePath)) {
    try {
      archive = JSON.parse(fs.readFileSync(archivePath, 'utf8'));
      if (!Array.isArray(archive)) archive = [];
    } catch (e) { archive = []; }
  }
  archive.push(archiveEntry);
  fs.writeFileSync(archivePath, JSON.stringify(archive, null, 2), 'utf8');
  console.log(`Wrote ${toArchive.length} archived events to ${archivePath}`);

  // Replace array in script.js with the toKeep array (serialize as JS-compatible JSON)
  const newArrayText = JSON.stringify(toKeep, null, 4);

  const newContent = content.slice(0, arrayStart) + newArrayText + content.slice(arrayEnd + 1);
  fs.writeFileSync(scriptPath, newContent, 'utf8');
  console.log(`Updated script.js with ${toKeep.length} remaining events.`);

  // Summary output
  console.log('Archived IDs:', toArchive.map(e => e.id).join(', ') || '(none)');
  console.log('Done. Please run your site locally to verify rendering.');
})();
