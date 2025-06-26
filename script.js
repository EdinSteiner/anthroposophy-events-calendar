// This file contains events data for various Anthroposophical organizations.
// Data last updated by AI using targeted Google Search queries and user feedback on June 26, 2025.
// Please note: While AI attempted to find specific event URLs, some may be generic
// or point to the main events page if a dedicated link was not clearly identifiable.
// Events are filtered to be generally open to the public or wider community.
// Always verify details with the source organization.

const rawEventsData = [
    // --- Edinburgh Steiner School Events ---
    {
        id: 1,
        title: "Steiner Waldorf Olympic Games",
        organization: "Edinburgh Steiner School",
        date: "25 - 28 June 2025",
        time: "Not specified",
        location: "Edinburgh Steiner School",
        cost: "Not specified",
        registration: "Not specified",
        contact: "Not specified",
        description: "An event related to the Steiner Waldorf Olympic Games.",
        eventUrl: "https://edinburghsteinerschool.org.uk/event/steiner-waldorf-olympics/",
        type: "multi-day"
    },
    {
        id: 2,
        title: "Waldorf Stationery Stall",
        organization: "Edinburgh Steiner School",
        date: "Friday, June 27, 2025",
        time: "1:00 PM - 2:00 PM",
        location: "Edinburgh Steiner School",
        cost: "Not specified",
        registration: "Not specified",
        contact: "Ruth",
        description: "Ruth will be hosting a Waldorf Stationery Stall on the last Friday of the term for parents to buy next year's materials.",
        eventUrl: "https://edinburghsteinerschool.org.uk/event/waldorf-stationery-stall/",
        type: "single-day"
    },
    {
        id: 3,
        title: "Black Coffee – Class 12 Play",
        organization: "Edinburgh Steiner School",
        date: "29 - 30 June 2025",
        time: "3:00 PM / 7:00 PM",
        location: "Edinburgh Steiner School",
        cost: "Not specified",
        registration: "Not specified",
        contact: "Not specified",
        description: "Class 12 will put on three performances of their final year play.",
        eventUrl: "https://edinburghsteinerschool.org.uk/event/black-coffee-class-12-play/",
        type: "multi-day"
    },
    {
        id: 4,
        title: "Summer Circus & Crafts Camps (Age 6+)",
        organization: "Edinburgh Steiner School",
        date: "Multiple sessions: July 2 - August 8, 2025",
        time: "Varies (check event page)",
        location: "Edinburgh Steiner School",
        cost: "Not specified",
        registration: "summer.camp@edinburghsteinerschool.org.uk",
        contact: "Peter Sheen and Yifat Leibner",
        description: "Summer camps focusing on circus activities and crafts for children aged 6+. Delivered independently of the School by Steiner Waldorf Teachers, on campus.",
        eventUrl: "https://edinburghsteinerschool.org.uk/event/summer-camp/",
        type: "multi-day" // Marking as multi-day for date range
    },
    {
        id: 5,
        title: "Kindergarten Summer Camps",
        organization: "Edinburgh Steiner School",
        date: "4 - 15 August 2025",
        time: "9:00 AM - 1:00 PM",
        location: "Edinburgh Steiner School",
        cost: "Not specified",
        registration: "Not specified",
        contact: "Not specified",
        description: "Summer camps specifically for Kindergarten age children. A week of play and summertime fun.",
        eventUrl: "https://www.edinburghsteinerschool.org.uk/event/kindergarten-summer-camps/",
        type: "multi-day"
    },

    // --- Tiphereth Events ---
    {
        id: 6,
        title: "Tiphereth Summer Fayre",
        organization: "Tiphereth",
        date: "Saturday, 21 June 2025", // This event is in the past from 26 June. It will be filtered out by default.
        time: "10:00 AM - 2:00 PM",
        location: "Tiphereth, 55 Torphin Road, Edinburgh, EH13 0PQ",
        cost: "Not specified",
        registration: "Not specified",
        contact: "Not specified",
        description: "Discover beautiful handmade goods from workshops, meet people, and enjoy a fun day out. Families and members of the public welcome.",
        eventUrl: "https://www.tiphereth.org.uk/",
        type: "single-day"
    },
    {
        id: 61,
        title: "Tiphereth Open Day",
        organization: "Tiphereth",
        date: "Saturday, 13 September 2025",
        time: "11:00 AM - 3:00 PM",
        location: "Tiphereth, 55 Torphin Road, Edinburgh, EH13 0PQ",
        cost: "Free",
        registration: "Not specified",
        contact: "Not specified",
        description: "An opportunity to explore the workshops, gardens and community life at Tiphereth.",
        eventUrl: "https://www.tiphereth.org.uk/open-day-2025",
        type: "single-day"
    },

    // --- Garvald Edinburgh Events ---
    {
        id: 7,
        title: "Grant's Robot Faces Exhibition",
        organization: "Garvald",
        date: "2 June - 31 July 2025",
        time: "Various (check link)",
        location: "Garvald Makers, 356 Morningside Road, Edinburgh, EH10 4QL",
        cost: "Not specified",
        registration: "Not specified",
        contact: "Not specified",
        description: "An exhibition featuring Grant's Robot Faces.",
        eventUrl: "https://www.garvaldedinburgh.org.uk/events",
        type: "multi-day"
    },
    {
        id: 8,
        title: "You and Me and Everyone Exhibition",
        organization: "Garvald",
        date: "31 May - 22 June 2025", // Past event
        time: "Not specified",
        location: "Summerhall, 1 Summerhall, Edinburgh, EH9 1PL",
        cost: "Not specified",
        registration: "Not specified",
        contact: "Not specified",
        description: "An exhibition of portraiture exploring identity, representation and connection.",
        eventUrl: "https://www.garvaldedinburgh.org.uk/events",
        type: "multi-day"
    },
    {
        id: 81,
        title: "Garvald Makers Christmas Open Studio",
        organization: "Garvald",
        date: "28 November - 7 December 2025",
        time: "10:00 AM - 4:00 PM",
        location: "Garvald Makers, 356 Morningside Road, Edinburgh, EH10 4QL",
        cost: "Free entry",
        registration: "Not required",
        contact: "Not specified",
        description: "Browse unique handmade gifts, crafts, and art created by Garvald artists and makers, perfect for Christmas shopping.",
        eventUrl: "https://www.garvaldedinburgh.org.uk/events",
        type: "multi-day"
    },


    // --- Camphill Events (Blair Drummond & Loch Arthur) ---
    {
        id: 9,
        title: "Bike Safari 2025",
        organization: "Camphill Blair Drummond",
        date: "Saturday, 14 June 2025", // Past Event
        time: "5:30 PM - 8:30 PM",
        location: "Blair Drummond Safari Park, Stirling (near Edinburgh)",
        cost: "Adults £14.25, Children £8.83",
        registration: "Eventbrite via link",
        contact: "Not specified",
        description: "Cycle or walk around the Safari Park at night! A fundraising event for the whole family.",
        eventUrl: "https://camphillblairdrummond.org.uk/fundraising/how-you-have-helped/bike-safari/bike-safari-2025",
        type: "single-day"
    },
    {
        id: 10,
        title: "International Youth Conference in Camphill 2025",
        organization: "Camphill (Loch Arthur)",
        date: "27 - 30 June 2025",
        time: "Fri 12:00 PM - Mon 1:00 PM",
        location: "Loch Arthur Camphill Community, Dumfries (South West Scotland)",
        cost: "Not specified (support available)",
        registration: "Via TicketSource",
        contact: "Box Office: 01387760621",
        description: "Gathering for young people with connection to, or interest in, Camphill.",
        eventUrl: "https://www.ticketsource.co.uk/whats-on/dumfries/loch-arthur-camphill-community/international-youth-conference-in-camphill-2025/e-ddapem",
        type: "multi-day"
    },
    {
        id: 101,
        title: "Loch Arthur Christmas Market",
        organization: "Camphill (Loch Arthur)",
        date: "Saturday, 23 November 2025",
        time: "10:00 AM - 4:00 PM",
        location: "Loch Arthur Camphill Community, Dumfries",
        cost: "Free entry",
        registration: "Not required",
        contact: "Not specified",
        description: "Annual Christmas Market with crafts, food, and festive atmosphere.",
        eventUrl: "https://www.locharthur.org.uk/whats-on/",
        type: "single-day"
    },


    // --- Edinburgh Christian Community Events ---
    {
        id: 11,
        title: "Sunday Service (The Act of Consecration of Man)",
        organization: "Edinburgh Christian Community",
        date: "Every Sunday",
        time: "10:30 AM",
        location: "Edinburgh Christian Community, 37 Spylaw Rd, Edinburgh, EH10 5BP",
        cost: "Free",
        registration: "None",
        contact: "Not specified",
        description: "Weekly service. All welcome.",
        eventUrl: "https://www.christiancommunity.org.uk/branches/edinburgh/",
        type: "recurring",
        recurrence: { type: "weekly", dayOfWeek: 0 } // Sunday is 0
    },
    {
        id: 12,
        title: "Children's Service",
        organization: "Edinburgh Christian Community",
        date: "Most Sundays (check schedule)",
        time: "9:30 AM",
        location: "Edinburgh Christian Community, 37 Spylaw Rd, Edinburgh, EH10 5BP",
        cost: "Free",
        registration: "None",
        contact: "Not specified",
        description: "A shorter service suitable for children, held before the main Sunday Service.",
        eventUrl: "https://www.christiancommunity.org.uk/branches/edinburgh/",
        type: "recurring",
        recurrence: { type: "weekly", dayOfWeek: 0 } // Sunday is 0
    },
    {
        id: 121,
        title: "Study Group: Meditative Path",
        organization: "Edinburgh Christian Community",
        date: "Every Tuesday",
        time: "7:00 PM",
        location: "Edinburgh Christian Community, 37 Spylaw Rd, Edinburgh, EH10 5BP",
        cost: "Free",
        registration: "None",
        contact: "Not specified",
        description: "Weekly study group exploring aspects of the meditative path. All welcome to join.",
        eventUrl: "https://www.christiancommunity.org.uk/branches/edinburgh/",
        type: "recurring",
        recurrence: { type: "weekly", dayOfWeek: 2 } // Tuesday is 2
    }
];

// --- Date Utilities ---
function parseDateRange(dateString) {
    // Handles formats like "25 - 28 June 2025", "Friday, June 27, 2025", "2 June - 31 July 2025"
    // and returns {startDate: Date, endDate: Date}
    let startDate, endDate;
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize to start of day

    if (dateString.toLowerCase().includes("every")) {
        // Handle recurring events separately, they don't have fixed start/end dates for parsing here
        return { startDate: null, endDate: null };
    }

    const yearMatch = dateString.match(/(\d{4})/);
    let year = yearMatch ? parseInt(yearMatch[1]) : today.getFullYear();

    // Try to parse as single date
    try {
        const tempDate = new Date(dateString);
        if (!isNaN(tempDate.getTime()) && tempDate.getFullYear() === year) {
             // Validate year as it defaults to current year if not specified
             if (!yearMatch && tempDate < today && (today.getFullYear() - tempDate.getFullYear() > 0)) {
                tempDate.setFullYear(today.getFullYear() + 1); // Assume next year if in past without year specified
            }
            startDate = tempDate;
            endDate = tempDate;
            return { startDate, endDate };
        }
    } catch (e) {
        // Fallback to range parsing
    }

    // Handle "DD Month - DD Month Year" or "DD - DD Month Year"
    const parts = dateString.split(' - ');
    if (parts.length === 2) {
        let startPart = parts[0].trim();
        let endPart = parts[1].trim();

        // If startPart only has day, add month and year from endPart
        if (!startPart.match(/[a-zA-Z]/) && endPart.match(/[a-zA-Z]/)) {
            const monthYearMatch = endPart.match(/[A-Za-z]+ \d{4}/);
            if (monthYearMatch) {
                startPart += ` ${monthYearMatch[0]}`;
            } else if (endPart.match(/[A-Za-z]+/)) { // just month
                startPart += ` ${endPart.match(/[A-Za-z]+/)[0]} ${year}`;
            }
        }
        startDate = new Date(`${startPart} ${year}`);
        endDate = new Date(`${endPart}`);

        // Adjust year for startDate if it's in a previous year (e.g., Dec - Jan)
        if (startDate.getTime() > endDate.getTime() && endDate.getMonth() < startDate.getMonth()) {
            startDate.setFullYear(endDate.getFullYear() - 1);
        }
        // If still invalid, try assuming current year for start date if not provided
        if (isNaN(startDate.getTime()) && !startPart.includes(year)) {
            startDate = new Date(`${startPart} ${today.getFullYear()}`);
        }

    } else {
        // Fallback for tricky cases, try parsing as-is
        startDate = new Date(dateString);
        endDate = new Date(dateString);
    }

    // Final validation and adjustment for year if date is in past without year explicitly set
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        console.warn("Could not parse date string:", dateString);
        return { startDate: null, endDate: null }; // Return null for unparseable dates
    }

    // Adjust year if date parsed is in the past, but no year was specified in string (assume next occurrence)
    if (!yearMatch && startDate < today && (today.getFullYear() - startDate.getFullYear() > 0 || (today.getFullYear() === startDate.getFullYear() && startDate.getMonth() < today.getMonth()))) {
        startDate.setFullYear(today.getFullYear() + 1);
        endDate.setFullYear(today.getFullYear() + 1);
    }


    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(23, 59, 59, 999); // End of day

    return { startDate, endDate };
}


// --- Process Raw Events Data ---
let allEvents = rawEventsData.map(event => {
    const { startDate, endDate } = parseDateRange(event.date);
    return { ...event, startDate, endDate };
}).filter(event => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize to start of day
    // Keep recurring events, or events whose start date is today or in the future
    // Or multi-day events that started in the past but end today or in the future
    return event.type === 'recurring' ||
           (event.startDate && event.startDate >= today) ||
           (event.type === 'multi-day' && event.endDate && event.endDate >= today);
});

// --- Sorting Functions ---
function sortEventsChronologically(eventsArray) {
    return [...eventsArray].sort((a, b) => {
        // Push recurring events to the end for chronological view as they don't have a fixed start date
        if (a.type === 'recurring' && b.type !== 'recurring') return 1;
        if (b.type === 'recurring' && a.type !== 'recurring') return -1;
        if (a.type === 'recurring' && b.type === 'recurring') return a.organization.localeCompare(b.organization); // Sort recurring by org if both are recurring

        const dateA = a.startDate ? a.startDate.getTime() : Infinity;
        const dateB = b.startDate ? b.startDate.getTime() : Infinity;
        return dateA - dateB;
    });
}

function sortEventsByOrganizationThenChronologically(eventsArray) {
    return [...eventsArray].sort((a, b) => {
        const orgCompare = a.organization.localeCompare(b.organization);
        if (orgCompare !== 0) {
            return orgCompare;
        }
        // Push recurring events to the end within their organization
        if (a.type === 'recurring' && b.type !== 'recurring') return 1;
        if (b.type === 'recurring' && a.type !== 'recurring') return -1;

        const dateA = a.startDate ? a.startDate.getTime() : Infinity;
        const dateB = b.startDate ? b.startDate.getTime() : Infinity;
        return dateA - dateB;
    });
}

// --- Rendering Functions ---
const eventsContainer = document.getElementById('events-container');

function getOrganizationTitleClass(organizationName) {
    switch(organizationName) {
        case "Edinburgh Steiner School": return 'title-steiner';
        case "Tiphereth": return 'title-tiphereth';
        case "Garvald": return 'title-garvald';
        case "Columcille": return 'title-columcille';
        case "Camphill Blair Drummond": return 'title-camphill-blair-drummond';
        case "Camphill (Loch Arthur)": return 'title-camphill-loch-arthur';
        case "Ruskin Mill (Fairhill Rise)": return 'title-ruskin-mill';
        case "Edinburgh Christian Community": return 'title-christian-community';
        default: return '';
    }
}

function renderCardView(eventsToDisplay) {
    eventsContainer.innerHTML = ''; // Clear previous view
    if (eventsToDisplay.length === 0) {
        eventsContainer.innerHTML = '<p class="no-events-message">No upcoming events currently listed. Please check back soon!</p>';
        return;
    }

    eventsToDisplay.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('event-card');

        const titleClass = getOrganizationTitleClass(event.organization);

        eventCard.innerHTML = `
            <p class="event-org-name">${event.organization}</p>
            <h3 class="${titleClass}">
                ${event.eventUrl ? `<a href="${event.eventUrl}" target="_blank" rel="noopener noreferrer">${event.title}</a>` : event.title}
            </h3>
            <p><strong>Date:</strong> ${event.date}</p>
            ${event.time && event.time !== "Not specified" ? `<p><strong>Time:</strong> ${event.time}</p>` : ''}
            ${event.location ? `<p><strong>Location:</strong> ${event.location}</p>` : ''}
            ${event.cost && event.cost !== "Not specified" ? `<p><strong>Cost:</b> ${event.cost}</p>` : ''}
            ${event.registration && event.registration !== "Not specified" ? `<p><strong>Registration:</strong> ${event.registration}</p>` : ''}
            ${event.contact && event.contact !== "Not specified" ? `<p><strong>Contact:</strong> ${event.contact}</p>` : ''}
            ${event.description ? `<p class="event-description">${event.description}</p>` : ''}
            ${event.eventUrl ? `<p class="more-info"><a href="${event.eventUrl}" target="_blank" rel="noopener noreferrer">More Information</a></p>` : ''}
        `;
        eventsContainer.appendChild(eventCard);
    });
    eventsContainer.classList.remove('diary-layout'); // Ensure card layout styles apply
    eventsContainer.classList.add('card-layout');
}


function renderDiaryView(eventsToDisplay) {
    eventsContainer.innerHTML = ''; // Clear previous view
    eventsContainer.classList.remove('card-layout');
    eventsContainer.classList.add('diary-layout');

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Set endDate to always be 12 months from today
    const endDate = new Date();
    endDate.setFullYear(today.getFullYear() + 1);

    let currentDay = new Date(today);
    let eventsFound = 0;

    // Filter out past events from the display list again, just to be sure
    const futureEvents = eventsToDisplay.filter(event => {
        if (event.type === 'recurring') return true; // Keep recurring for dynamic display
        return event.startDate && event.endDate && event.endDate >= today;
    });

    while (currentDay <= endDate) {
        const dayEvents = futureEvents.filter(event => {
            if (event.type === 'recurring') {
                // Check if this recurring event occurs on the currentDay
                if (event.recurrence.type === 'weekly' && event.recurrence.dayOfWeek === currentDay.getDay()) {
                    return true;
                }
                // Add more recurrence types here if needed (e.g., monthly, annually)
                return false;
            }
            // For single-day and multi-day events
            return event.startDate && event.endDate &&
                   currentDay >= event.startDate && currentDay <= event.endDate;
        });

        const dayCard = document.createElement('div');
        dayCard.classList.add('diary-day-card');

        dayCard.innerHTML = `
            <h4>${currentDay.toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h4>
        `;

        if (dayEvents.length > 0) {
            const eventList = document.createElement('ul');
            eventList.classList.add('diary-event-list');
            dayEvents.forEach(event => {
                const titleClass = getOrganizationTitleClass(event.organization);
                const eventListItem = document.createElement('li');
                eventListItem.innerHTML = `
                    <p class="event-org-name-diary">${event.organization}</p>
                    <h4 class="${titleClass}">
                        ${event.eventUrl ? `<a href="${event.eventUrl}" target="_blank" rel="noopener noreferrer">${event.title}</a>` : event.title}
                    </h4>
                    <p class="event-time-diary">${event.time && event.time !== "Not specified" ? event.time : ''}</p>
                    ${event.location ? `<p class="event-location-diary">${event.location}</p>` : ''}
                    ${event.description ? `<p class="event-description-diary">${event.description}</p>` : ''}
                    ${event.eventUrl ? `<p class="more-info-diary"><a href="${event.eventUrl}" target="_blank" rel="noopener noreferrer">More Info</a></p>` : ''}
                `;
                eventList.appendChild(eventListItem);
            });
            dayCard.appendChild(eventList);
            eventsFound += dayEvents.length;
        } else {
            dayCard.innerHTML += `<p class="no-events-on-day">No events</p>`;
        }
        eventsContainer.appendChild(dayCard);

        currentDay.setDate(currentDay.getDate() + 1); // Move to the next day
    }

    if (eventsFound === 0) {
         eventsContainer.innerHTML = '<p class="no-events-message">No upcoming events listed for the next year.</p>';
    }
}


// --- Main Render Function & Event Listeners ---
// Set 'diary' as the default view
let currentView = 'diary';
let currentSort = 'chronological'; // Diary view should always be chronological

function renderCurrentView() {
    let sorted = [];
    if (currentSort === 'chronological') {
        sorted = sortEventsChronologically(allEvents);
    } else if (currentSort === 'by_org_chrono') {
        sorted = sortEventsByOrganizationThenChronologically(allEvents);
    }

    if (currentView === 'card') {
        renderCardView(sorted);
    } else if (currentView === 'diary') {
        renderDiaryView(sorted);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Initial render
    renderCurrentView();

    // Event Listeners for view controls
    document.getElementById('card-view-btn').addEventListener('click', () => {
        currentView = 'card';
        currentSort = 'chronological'; // Reset sort for card view for simplicity
        renderCurrentView();
    });

    document.getElementById('diary-view-btn').addEventListener('click', () => {
        currentView = 'diary';
        currentSort = 'chronological'; // Diary view should always be chronological
        renderCurrentView();
    });

    document.getElementById('org-chrono-view-btn').addEventListener('click', () => {
        currentView = 'card'; // This sort only makes sense for card view
        currentSort = 'by_org_chrono';
        renderCurrentView();
    });
});
