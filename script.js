document.addEventListener('DOMContentLoaded', () => {
    // --- Event Data ---
    // IMPORTANT: This array holds STATIC event data.
    // Events below are consolidated from previous search results and your direct input,
    // filtered and adjusted based on all your feedback.
    // As an AI, I cannot dynamically fetch or verify live event schedules in real-time.
    // You MUST verify the accuracy and currency of these events against official websites.
    // Dates are set to be in the future (from current date July 03, 2025) or ongoing.
    const allEvents = [
        // --- Camphill Blair Drummond ---
        {
            "id": 18,
            "organization": "Camphill Blair Drummond",
            "title": "Vocal Recital: Un-Ravel-ing the Source Material",
            "date": "2025-07-19",
            "time": "TBD",
            "location": "Camphill Blair Drummond, Stirling",
            "description": "Vocal recital by Claire Haslin and Phil Gault. Check Ticketsource for details.",
            "link": "https://www.ticketsource.co.uk/whats-on/stirling/camphill-blair-drummond"
        },

        // --- Camphill Corbenic ---
        {
            "id": 19,
            "organization": "Camphill Corbenic",
            "title": "Check Corbenic Website for Events",
            "date": "2025-08-01",
            "time": "Ongoing",
            "location": "Corbenic Camphill Community",
            "description": "Please visit the official Corbenic website for current information on events and activities.",
            "link": "https://www.corbeniccamphill.co.uk/"
        },

        // --- Camphill Loch Arthur ---
        {
            "id": 40,
            "organization": "Camphill Loch Arthur",
            "title": "Check Loch Arthur Website for Events",
            "date": "2025-08-01",
            "time": "Ongoing",
            "location": "Camphill Loch Arthur",
            "description": "Please visit the official Loch Arthur website for current information on events and activities.",
            "link": "https://www.locharthur.org.uk/"
        },

        // --- Edinburgh Christian Community (Updated events) ---
        {
            "id": 4,
            "organization": "Edinburgh Christian Community",
            "title": "Sunday Service",
            "date": "2025-07-06",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.facebook.com/CCEdinburgh"
        },
        {
            "id": 7,
            "organization": "Edinburgh Christian Community",
            "title": "Children's Service",
            "date": "2025-07-13",
            "time": "TBD",
            "location": "Edinburgh Christian Community Church",
            "description": "Service for children (every 2nd and 4th Sunday).",
            "link": "https://www.facebook.com/CCEdinburgh"
        },
        {
            "id": 8,
            "organization": "Edinburgh Christian Community",
            "title": "Sunday Service",
            "date": "2025-07-13",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.facebook.com/CCEdinburgh"
        },
        {
            "id": 10,
            "organization": "Edinburgh Christian Community",
            "title": "Youth Group",
            "date": "2025-07-18",
            "time": "19:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly youth group.",
            "link": "https://www.facebook.com/CCEdinburgh"
        },
        {
            "id": 11,
            "organization": "Edinburgh Christian Community",
            "title": "Sunday Service",
            "date": "2025-07-20",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.facebook.com/CCEdinburgh"
        },
        {
            "id": 16, // NEW
            "organization": "Edinburgh Christian Community",
            "title": "Devotional Gathering",
            "date": "2025-07-27",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "A devotional gathering for the community.",
            "link": "https://www.facebook.com/CCEdinburgh"
        },
        {
            "id": 13,
            "organization": "Edinburgh Christian Community",
            "title": "Youth Group",
            "date": "2025-07-25",
            "time": "19:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly youth group.",
            "link": "https://www.facebook.com/CCEdinburgh"
        },
        {
            "id": 14,
            "organization": "Edinburgh Christian Community",
            "title": "Children's Service",
            "date": "2025-07-27",
            "time": "TBD",
            "location": "Edinburgh Christian Community Church",
            "description": "Service for children (every 2nd and 4th Sunday).",
            "link": "https://www.facebook.com/CCEdinburgh"
        },
        {
            "id": 15,
            "organization": "Edinburgh Christian Community",
            "title": "Sunday Service",
            "date": "2025-07-27",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.facebook.com/CCEdinburgh"
        },
        {
            "id": 17, // NEW
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man",
            "date": "2025-08-02",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "A special service with Tom Revetz.",
            "link": "https://www.facebook.com/CCEdinburgh"
        },
        {
            "id": 20, // NEW
            "organization": "Edinburgh Christian Community",
            "title": "Congregational Meeting",
            "date": "2025-08-02",
            "time": "11:15",
            "location": "Edinburgh Christian Community Church",
            "description": "A meeting for all members of the congregation.",
            "link": "https://www.facebook.com/CCEdinburgh"
        },


        // --- Edinburgh Steiner School ---
        {
            "id": 1,
            "organization": "Edinburgh Steiner School",
            "title": "Summer Circus and Craft Camp",
            "date": "2025-07-07",
            "endDate": "2025-07-11",
            "time": "Full Day",
            "location": "Edinburgh Steiner School Campus",
            "description": "Engaging camp with circus skills and creative crafts.",
            "link": "https://www.edinburghsteinerschool.org.uk/event/summer-camp/"
        },
        {
            "id": 2,
            "organization": "Edinburgh Steiner School",
            "title": "Kindergarten Summer Camp",
            "date": "2025-07-14",
            "endDate": "2025-07-18",
            "time": "Full Day",
            "location": "Edinburgh Steiner School Campus",
            "description": "Gentle summer camp for younger children.",
            "link": "https://www.edinburghsteinerschool.org.uk/event/kindergarten-summer-camps/"
        },
        {
            "id": 3,
            "organization": "Edinburgh Steiner School",
            "title": "Summer Holiday Camps (General)",
            "date": "2025-07-21",
            "time": "Full Day",
            "location": "Edinburgh Steiner School Campus",
            "description": "Various summer holiday camps for children and young people.",
            "link": "https://www.edinburghsteinerschool.org.uk/community/events/"
        },

        // --- Fairhill Rise (Was Ruskin Mill) ---
        {
            "id": 35,
            "organization": "Fairhill Rise",
            "title": "Open Day",
            "date": "2025-07-31",
            "time": "TBD",
            "location": "Fairhill Rise, Gloucestershire",
            "description": "An opportunity to visit Fairhill Rise and learn about their work.",
            "link": "https://rmt.org/rise/fairhill-rise/"
        },
        {
            "id": 36,
            "organization": "Fairhill Rise",
            "title": "Open Day",
            "date": "2025-08-25",
            "time": "TBD",
            "location": "Fairhill Rise, Gloucestershire",
            "description": "An opportunity to visit Fairhill Rise and learn about their work.",
            "link": "https://rmt.org/rise/fairhill-rise/"
        },
        {
            "id": 37,
            "organization": "Fairhill Rise",
            "title": "Open Day",
            "date": "2025-09-29",
            "time": "TBD",
            "location": "Fairhill Rise, Gloucestershire",
            "description": "An opportunity to visit Fairhill Rise and learn about their work.",
            "link": "https://rmt.org/rise/fairhill-rise/"
        },
        {
            "id": 38,
            "organization": "Fairhill Rise",
            "title": "John Ruskin Prize 2026: Call for Entries",
            "date": "2025-12-02",
            "time": "17:00 GMT",
            "location": "Online",
            "description": "Call for entries for the prestigious John Ruskin Prize 2026, theme 'Patience in a World of Noise'.",
            "link": "https://www.ruskinprize.co.uk/"
        },

        // --- Garvald Edinburgh ---
        {
            "id": 39,
            "organization": "Garvald Edinburgh",
            "title": "Check Garvald Edinburgh Website for Events",
            "date": "2025-08-01",
            "time": "Ongoing",
            "location": "Garvald Edinburgh",
            "description": "Please visit the official Garvald Edinburgh website for current information on events and activities.",
            "link": "https://www.garvaldedinburgh.org.uk/"
        },

        // --- Garvald West Linton ---
        {
            "id": 22,
            "organization": "Garvald West Linton",
            "title": "Community Gathering & Project",
            "date": "2025-07-04",
            "time": "09:45 - 12:30",
            "location": "Garvald West Linton Hall",
            "description": "Regular community gathering and project work.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 23,
            "organization": "Garvald West Linton",
            "title": "Community Gathering & Project",
            "date": "2025-07-18",
            "time": "09:45 - 12:30",
            "location": "Garvald West Linton Hall",
            "description": "Regular community gathering and project work.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 24,
            "organization": "Garvald West Linton",
            "title": "Community Gathering & Project",
            "date": "2025-08-01",
            "time": "09:45 - 12:30",
            "location": "Garvald West Linton Hall",
            "description": "Regular community gathering and project work.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 25,
            "organization": "Garvald West Linton",
            "title": "Michaelmas/Harvest Lunch & Event",
            "date": "2025-09-29",
            "time": "Afternoon",
            "location": "Garvald West Linton",
            "description": "Annual Michaelmas/Harvest celebration.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 26,
            "organization": "Garvald West Linton",
            "title": "Halloween Party",
            "date": "2025-10-31",
            "time": "TBD",
            "location": "Garvald West Linton",
            "description": "Residents and staff to dress up for Halloween.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 27,
            "organization": "Garvald West Linton",
            "title": "Guy Fawkes Fireworks",
            "date": "2025-11-05",
            "time": "TBD",
            "location": "Garvald West Linton",
            "description": "Fireworks display with hot chocolate.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 28,
            "organization": "Garvald West Linton",
            "title": "St Martin – Lantern Walk",
            "date": "2025-11-11",
            "time": "TBD",
            "location": "Garvald West Linton",
            "description": "Lantern walk with a story about St Martin and the Beggar.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 29,
            "organization": "Garvald West Linton",
            "title": "Advent Wreath Making",
            "date": "2025-11-28",
            "time": "TBD",
            "location": "Garvald West Linton Dining Room",
            "description": "Advent wreath making for all.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 30,
            "organization": "Garvald West Linton",
            "title": "1st Advent Celebration",
            "date": "2025-11-30",
            "time": "TBD",
            "location": "Garvald West Linton Main House",
            "description": "Advent celebration with lighting candles, bell ringing, singing, hot chocolate.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 31,
            "organization": "Garvald West Linton",
            "title": "Christmas Fair",
            "date": "2025-12-06",
            "time": "10:30 - 13:00",
            "location": "Garvald West Linton Workshops",
            "description": "Workshops selling handmade items.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 32,
            "organization": "Garvald West Linton",
            "title": "Santa Lucia Event",
            "date": "2025-12-13",
            "time": "PM",
            "location": "Garvald West Linton",
            "description": "Celebration of Santa Lucia.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 33,
            "organization": "Garvald West Linton",
            "title": "Christmas Eve Celebrations",
            "date": "2025-12-24",
            "time": "TBD",
            "location": "Garvald West Linton",
            "description": "Gathering around Christmas tree, singing, gospel reading, candlelit dinner.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 34,
            "organization": "Garvald West Linton",
            "title": "Christmas Day Lunch",
            "date": "2025-12-25",
            "time": "TBD",
            "location": "Garvald West Linton",
            "description": "Christmas Day festive lunch.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },

        // --- Tiphereth Edinburgh (Updated event) ---
        {
            "id": 21,
            "organization": "Tiphereth",
            "title": "Pop Up Shop",
            "date": "2025-07-11", // First Friday
            "endDate": "2025-12-26", // Assuming it runs weekly till end of year for now
            "time": "09:30 - 16:00",
            "location": "Tiphereth Community",
            "description": "Weekly Pop Up Shop offering various items.",
            "link": "https://www.tiphereth.org.uk/" // General link, if specific page for shop doesn't exist
        },
        {
            "id": 210, // Additional entry for future Fridays, to be dynamic ideally
            "organization": "Tiphereth",
            "title": "Pop Up Shop",
            "date": "2025-07-18",
            "time": "09:30 - 16:00",
            "location": "Tiphereth Community",
            "description": "Weekly Pop Up Shop offering various items.",
            "link": "https://www.tiphereth.org.uk/"
        },
        {
            "id": 211,
            "organization": "Tiphereth",
            "title": "Pop Up Shop",
            "date": "2025-07-25",
            "time": "09:30 - 16:00",
            "location": "Tiphereth Community",
            "description": "Weekly Pop Up Shop offering various items.",
            "link": "https://www.tiphereth.org.uk/"
        }
    ];

    // --- Organization Data ---
    // This array defines the organizations and their associated logos/links.
    // The 'name' must EXACTLY match the 'organization' field in the allEvents array.
    // This array is now sorted alphabetically by name.
    const allOrganizations = [
        { name: "Camphill Blair Drummond", logo: "Camphill Blair Drummond Logo.jpeg", link: "https://www.camphillblairdrummond.org.uk/" },
        { name: "Camphill Corbenic", logo: "Camphill Corbenic Logo.jpeg", link: "https://www.corbeniccamphill.co.uk/" },
        { name: "Camphill Loch Arthur", logo: "Camphill Loch Arthur Logo.jpeg", link: "https://www.locharthur.org.uk/" },
        { name: "Edinburgh Christian Community", logo: "Edinburgh Christian Community Logo.jpeg", link: "https://www.facebook.com/CCEdinburgh" },
        { name: "Edinburgh Steiner School", logo: "Edinburgh Steiner School Logo.jpeg", link: "https://www.edinburghsteinerschool.org.uk/" },
        { name: "Fairhill Rise", logo: "Fairhill Rise Logo.jpeg", link: "https://rmt.org/rise/fairhill-rise/" },
        { name: "Garvald Edinburgh", logo: "Garvald Edinburgh Logo.jpeg", link: "https://www.garvaldedinburgh.org.uk/" },
        { name: "Garvald West Linton", logo: "Garvald West Linton Logo.jpeg", link: "https://garvaldwestlinton.org.uk/" },
        { name: "Tiphereth", logo: "Tiphereth Logo.jpeg", link: "https://www.tiphereth.org.uk/" }
    ].sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically by name


    // --- Global Variables ---
    let currentView = 'card'; // Default view
    let currentFilter = 'all'; // Default filter

    // --- DOM Elements ---
    const eventsContainer = document.getElementById('events-container');
    const cardViewBtn = document.getElementById('card-view-btn');
    const diaryViewBtn = document.getElementById('diary-view-btn');
    const organizationViewBtn = document.getElementById('organization-view-btn');
    const filterButtonsContainer = document.getElementById('filter-buttons');
    const noEventsMessage = document.getElementById('no-events-message');


    // --- Utility Functions ---

    // Function to format date for display
    function formatDate(dateString) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-GB', options);
    }

    // Function to generate a slug from organization name for CSS classes
    function slugify(text) {
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/[^\w-]+/g, '')       // Remove all non-word chars
            .replace(/--+/g, '-')          // Replace multiple - with single -
            .replace(/^-+/, '')            // Trim - from start of text
            .replace(/-+$/, '');           // Trim - from end of text
    }

    // --- Rendering Functions ---

    // Renders event cards for 'card' view
    function renderCardView(events) {
        eventsContainer.className = 'card-layout'; // Set grid layout
        eventsContainer.innerHTML = ''; // Clear previous content

        if (events.length === 0) {
            noEventsMessage.style.display = 'block';
            return;
        } else {
            noEventsMessage.style.display = 'none';
        }

        events.forEach(event => {
            const orgSlug = slugify(event.organization);
            const card = document.createElement('div');
            card.className = `event-card`;
            card.innerHTML = `
                <div class="event-org-name title-${orgSlug}">${event.organization}</div>
                <h3>${event.title}</h3>
                <p><strong>Date:</strong> ${formatDate(event.date)} ${event.endDate ? ` - ${formatDate(event.endDate)}` : ''}</p>
                <p><strong>Time:</strong> ${event.time}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                <p class="event-description">${event.description}</p>
                <p class="more-info"><a href="${event.link}" target="_blank">More Info</a></p>
            `;
            eventsContainer.appendChild(card);
        });
    }

    // Renders events for 'diary' view
    function renderDiaryView(events) {
        eventsContainer.className = 'diary-layout'; // Set diary layout
        eventsContainer.innerHTML = ''; // Clear previous content

        if (events.length === 0) {
            noEventsMessage.style.display = 'block';
            return;
        } else {
            noEventsMessage.style.display = 'none';
        }

        // Group events by date
        const eventsByDate = {};
        events.sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort all events by date
        events.forEach(event => {
            const date = formatDate(event.date); // Use formatted date as key
            if (!eventsByDate[date]) {
                eventsByDate[date] = [];
            }
            eventsByDate[date].push(event);
        });

        // Render each day's card
        for (const date in eventsByDate) {
            const dayCard = document.createElement('div');
            dayCard.className = 'diary-day-card';
            dayCard.innerHTML = `<h4>${date}</h4><ul class="diary-event-list"></ul>`;

            const eventList = dayCard.querySelector('.diary-event-list');
            eventsByDate[date].forEach(event => {
                const orgSlug = slugify(event.organization);
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <div class="event-org-name-diary title-${orgSlug}">${event.organization}</div>
                    <h4>${event.title}</h4>
                    <p><strong>Time:</strong> ${event.time}</p>
                    <p><strong>Location:</strong> ${event.location}</p>
                    <p class="event-description-diary">${event.description}</p>
                    <p class="more-info-diary"><a href="${event.link}" target="_blank">More Info</a></p>
                `;
                eventList.appendChild(listItem);
            });
            eventsContainer.appendChild(dayCard);
        }
    }

    // Renders events for 'organization' view
    function renderOrganizationView(events) {
        eventsContainer.className = 'organization-layout';
        eventsContainer.innerHTML = ''; // Clear previous content

        if (allOrganizations.length === 0) {
            noEventsMessage.textContent = 'No organizations available.';
            noEventsMessage.style.display = 'block';
            return;
        } else {
            noEventsMessage.style.display = 'none';
        }

        // Add the fixed header for organization view
        const header = document.createElement('div');
        header.className = 'organization-header';
        header.innerHTML = `
            <div class="header-org-name">Organization</div>
            <div class="header-events">Upcoming Events</div>
        `;
        eventsContainer.appendChild(header);


        allOrganizations.forEach(org => {
            const orgEvents = events.filter(event => event.organization === org.name)
                                    .sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort events for each org

            const orgSlug = slugify(org.name);

            const row = document.createElement('div');
            row.className = 'organization-row';
            row.innerHTML = `
                <div class="organization-name-column">
                    <a href="${org.link}" target="_blank" class="org-link-wrapper">
                        <img src="images/${org.logo}" alt="${org.name} Logo">
                        <h2 class="title-${orgSlug}">${org.name}</h2>
                    </a>
                </div>
                <div class="organization-events-column"></div>
            `;

            const eventsColumn = row.querySelector('.organization-events-column');

            if (orgEvents.length === 0) {
                const noEventsDiv = document.createElement('div');
                noEventsDiv.className = 'no-events-on-day';
                noEventsDiv.textContent = 'No upcoming events listed.';
                eventsColumn.appendChild(noEventsDiv);
            } else {
                orgEvents.forEach(event => {
                    const card = document.createElement('div');
                    card.className = `event-card`; // Re-use event-card styling
                    card.innerHTML = `
                        <h3>${event.title}</h3>
                        <p><strong>Date:</strong> ${formatDate(event.date)} ${event.endDate ? ` - ${formatDate(event.endDate)}` : ''}</p>
                        <p><strong>Time:</strong> ${event.time}</p>
                        <p><strong>Location:</strong> ${event.location}</p>
                        <p class="event-description">${event.description}</p>
                        <p class="more-info"><a href="${event.link}" target="_blank">More Info</a></p>
                    `;
                    eventsColumn.appendChild(card);
                });
            }
            eventsContainer.appendChild(row);
        });
    }

    // --- Filtering and Display Logic ---

    // Filters events based on the current filter and current date
    function getFilteredEvents() {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Normalize to start of day for comparison

        return allEvents.filter(event => {
            const eventDate = new Date(event.date);
            eventDate.setHours(0, 0, 0, 0); // Normalize event date

            // Filter by date: only show events today or in the future
            if (eventDate < today) {
                return false;
            }

            // Filter by organization if a specific filter is active
            if (currentFilter === 'all') {
                return true;
            } else {
                return slugify(event.organization) === currentFilter;
            }
        });
    }

    // Main function to update the display
    function updateDisplay() {
        const filteredEvents = getFilteredEvents();
        if (currentView === 'card') {
            renderCardView(filteredEvents);
        } else if (currentView === 'diary') {
            renderDiaryView(filteredEvents);
        } else if (currentView === 'organization') {
            // Organization view filters events *within* each organization's row
            renderOrganizationView(filteredEvents); // Pass all filtered upcoming events to organization view
        }
    }

    // --- Event Listeners for View Buttons ---
    cardViewBtn.addEventListener('click', () => {
        currentView = 'card';
document.addEventListener('DOMContentLoaded', () => {
    // --- Event Data ---
    // IMPORTANT: This array holds STATIC event data.
    // Events below are consolidated from previous search results and your direct input,
    // filtered and adjusted based on all your feedback.
    // As an AI, I cannot dynamically fetch or verify live event schedules in real-time.
    // You MUST verify the accuracy and currency of these events against official websites.
    // Dates are set to be in the future (from current date June 30, 2025) or ongoing.
    const allEvents = [
        // --- Edinburgh Steiner School (from previous Google Search tool results) ---
        {
            "id": 1,
            "organization": "Edinburgh Steiner School",
            "title": "Summer Circus and Craft Camp",
            "date": "2025-07-07",
            "endDate": "2025-07-11", // Example duration
            "time": "Full Day",
            "location": "Edinburgh Steiner School Campus",
            "description": "Engaging camp with circus skills and creative crafts.",
            "link": "https://www.edinburghsteinerschool.org.uk/event/summer-camp/"
        },
        {
            "id": 2,
            "organization": "Edinburgh Steiner School",
            "title": "Kindergarten Summer Camp",
            "date": "2025-07-14",
            "endDate": "2025-07-18", // Example duration
            "time": "Full Day",
            "location": "Edinburgh Steiner School Campus",
            "description": "Gentle summer camp for younger children.",
            "link": "https://www.edinburghsteinerschool.org.uk/event/kindergarten-summer-camps/"
        },
        {
            "id": 3,
            "organization": "Edinburgh Steiner School",
            "title": "Summer Holiday Camps (General)",
            "date": "2025-07-21", // Placeholder, subsequent week
            "time": "Full Day",
            "location": "Edinburgh Steiner School Campus",
            "description": "Various summer holiday camps for children and young people.",
            "link": "https://www.edinburghsteinerschool.org.uk/community/events/" // General events page
        },

        // --- Edinburgh Christian Community (Facebook link) ---
        // Removed Study Group events. Link changed to Facebook.
        {
            "id": 4,
            "organization": "Edinburgh Christian Community",
            "title": "Sunday Service",
            "date": "2025-07-06",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.facebook.com/CCEdinburgh"
        },
        {
            "id": 7,
            "organization": "Edinburgh Christian Community",
            "title": "Children's Service",
            "date": "2025-07-13", // 2nd Sunday
            "time": "TBD",
            "location": "Edinburgh Christian Community Church",
            "description": "Service for children (every 2nd and 4th Sunday).",
            "link": "https://www.facebook.com/CCEdinburgh"
        },
        {
            "id": 8,
            "organization": "Edinburgh Christian Community",
            "title": "Sunday Service",
            "date": "2025-07-13",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.facebook.com/CCEdinburgh"
        },
        {
            "id": 10,
            "organization": "Edinburgh Christian Community",
            "title": "Youth Group",
            "date": "2025-07-18",
            "time": "19:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly youth group.",
            "link": "https://www.facebook.com/CCEdinburgh"
        },
        {
            "id": 11,
            "organization": "Edinburgh Christian Community",
            "title": "Sunday Service",
            "date": "2025-07-20",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.facebook.com/CCEdinburgh"
        },
        {
            "id": 13,
            "organization": "Edinburgh Christian Community",
            "title": "Youth Group",
            "date": "2025-07-25",
            "time": "19:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly youth group.",
            "link": "https://www.facebook.com/CCEdinburgh"
        },
        {
            "id": 14,
            "organization": "Edinburgh Christian Community",
            "title": "Children's Service",
            "date": "2025-07-27", // 4th Sunday
            "time": "TBD",
            "location": "Edinburgh Christian Community Church",
            "description": "Service for children (every 2nd and 4th Sunday).",
            "link": "https://www.facebook.com/CCEdinburgh"
        },
        {
            "id": 15,
            "organization": "Edinburgh Christian Community",
            "title": "Sunday Service",
            "date": "2025-07-27",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.facebook.com/CCEdinburgh"
        },
        // Placeholder for future weekly events up to June 2026. These would typically be dynamically generated for a real calendar.
        // For now, these few examples are hardcoded. You can add more as needed following this pattern.

        // --- Camphill Blair Drummond (from recent Google Search tool results) ---
        // Bike Safari (2025-06-14) removed as it was a past event.
        {
            "id": 18,
            "organization": "Camphill Blair Drummond",
            "title": "Vocal Recital: Un-Ravel-ing the Source Material",
            "date": "2025-07-19",
            "time": "TBD",
            "location": "Camphill Blair Drummond, Stirling",
            "description": "Vocal recital by Claire Haslin and Phil Gault. Check Ticketsource for details.",
            "link": "https://www.ticketsource.co.uk/whats-on/stirling/camphill-blair-drummond"
        },

        // --- Camphill Corbenic (removed "New Day Service" and "Community Barn Project") ---
        {
            "id": 19, // Re-using ID for a placeholder if needed
            "organization": "Camphill Corbenic",
            "title": "Check Corbenic Website for Events",
            "date": "2025-08-01", // Placeholder date
            "time": "Ongoing",
            "location": "Corbenic Camphill Community",
            "description": "Please visit the official Corbenic website for current information on events and activities.",
            "link": "https://www.corbeniccamphill.co.uk/"
        },

        // --- Tiphereth Edinburgh (No specific upcoming events found via search) ---
        {
            "id": 21,
            "organization": "Tiphereth",
            "title": "Check Tiphereth Website for Events",
            "date": "2025-08-01", // Placeholder
            "time": "Ongoing",
            "location": "Tiphereth Community",
            "description": "Please visit the official Tiphereth website for the most current information on upcoming events and activities.",
            "link": "https://www.tiphereth.org.uk/"
        },

        // --- Garvald West Linton (from recent Google Search tool results) ---
        {
            "id": 22,
            "organization": "Garvald West Linton",
            "title": "Community Gathering & Project",
            "date": "2025-07-04",
            "time": "09:45 - 12:30",
            "location": "Garvald West Linton Hall",
            "description": "Regular community gathering and project work.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 23,
            "organization": "Garvald West Linton",
            "title": "Community Gathering & Project",
            "date": "2025-07-18",
            "time": "09:45 - 12:30",
            "location": "Garvald West Linton Hall",
            "description": "Regular community gathering and project work.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 24,
            "organization": "Garvald West Linton",
            "title": "Community Gathering & Project",
            "date": "2025-08-01",
            "time": "09:45 - 12:30",
            "location": "Garvald West Linton Hall",
            "description": "Regular community gathering and project work.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 25,
            "organization": "Garvald West Linton",
            "title": "Michaelmas/Harvest Lunch & Event",
            "date": "2025-09-29",
            "time": "Afternoon",
            "location": "Garvald West Linton",
            "description": "Annual Michaelmas/Harvest celebration.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 26,
            "organization": "Garvald West Linton",
            "title": "Halloween Party",
            "date": "2025-10-31",
            "time": "TBD",
            "location": "Garvald West Linton",
            "description": "Residents and staff to dress up for Halloween.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 27,
            "organization": "Garvald West Linton",
            "title": "Guy Fawkes Fireworks",
            "date": "2025-11-05",
            "time": "TBD",
            "location": "Garvald West Linton",
            "description": "Fireworks display with hot chocolate.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 28,
            "organization": "Garvald West Linton",
            "title": "St Martin – Lantern Walk",
            "date": "2025-11-11",
            "time": "TBD",
            "location": "Garvald West Linton",
            "description": "Lantern walk with a story about St Martin and the Beggar.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 29,
            "organization": "Garvald West Linton",
            "title": "Advent Wreath Making",
            "date": "2025-11-28",
            "time": "TBD",
            "location": "Garvald West Linton Dining Room",
            "description": "Advent wreath making for all.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 30,
            "organization": "Garvald West Linton",
            "title": "1st Advent Celebration",
            "date": "2025-11-30",
            "time": "TBD",
            "location": "Garvald West Linton Main House",
            "description": "Advent celebration with lighting candles, bell ringing, singing, hot chocolate.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 31,
            "organization": "Garvald West Linton",
            "title": "Christmas Fair",
            "date": "2025-12-06",
            "time": "10:30 - 13:00",
            "location": "Garvald West Linton Workshops",
            "description": "Workshops selling handmade items.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 32,
            "organization": "Garvald West Linton",
            "title": "Santa Lucia Event",
            "date": "2025-12-13",
            "time": "PM",
            "location": "Garvald West Linton",
            "description": "Celebration of Santa Lucia.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 33,
            "organization": "Garvald West Linton",
            "title": "Christmas Eve Celebrations",
            "date": "2025-12-24",
            "time": "TBD",
            "location": "Garvald West Linton",
            "description": "Gathering around Christmas tree, singing, gospel reading, candlelit dinner.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 34,
            "organization": "Garvald West Linton",
            "title": "Christmas Day Lunch",
            "date": "2025-12-25",
            "time": "TBD",
            "location": "Garvald West Linton",
            "description": "Christmas Day festive lunch.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },

        // --- Fairhill Rise (Was Ruskin Mill, now updated name and added events) ---
        {
            "id": 35,
            "organization": "Fairhill Rise", // Updated from Ruskin Mill
            "title": "Open Day",
            "date": "2025-07-31",
            "time": "TBD",
            "location": "Fairhill Rise, Gloucestershire",
            "description": "An opportunity to visit Fairhill Rise and learn about their work.",
            "link": "https://rmt.org/rise/fairhill-rise/"
        },
        {
            "id": 36,
            "organization": "Fairhill Rise", // Updated from Ruskin Mill
            "title": "Open Day",
            "date": "2025-08-25",
            "time": "TBD",
            "location": "Fairhill Rise, Gloucestershire",
            "description": "An opportunity to visit Fairhill Rise and learn about their work.",
            "link": "https://rmt.org/rise/fairhill-rise/"
        },
        {
            "id": 37,
            "organization": "Fairhill Rise", // Updated from Ruskin Mill
            "title": "Open Day",
            "date": "2025-09-29",
            "time": "TBD",
            "location": "Fairhill Rise, Gloucestershire",
            "description": "An opportunity to visit Fairhill Rise and learn about their work.",
            "link": "https://rmt.org/rise/fairhill-rise/"
        },
        {
            "id": 38,
            "organization": "Fairhill Rise", // Was Ruskin Mill, John Ruskin Prize related event
            "title": "John Ruskin Prize 2026: Call for Entries",
            "date": "2025-12-02", // Deadline for entries
            "time": "17:00 GMT",
            "location": "Online",
            "description": "Call for entries for the prestigious John Ruskin Prize 2026, theme 'Patience in Looking, Truth in Making'. Exhibition Jan 29 – Feb 8, 2026.",
            "link": "https://www.johnruskinprize.co.uk/" // Specific prize website
        },
        {
            "id": 39,
            "organization": "Fairhill Rise", // Was Ruskin Mill, John Ruskin Prize related event
            "title": "John Ruskin Prize 2026: Exhibition",
            "date": "2026-01-29",
            "endDate": "2026-02-08", // Added end date for multi-day event
            "time": "Varies",
            "location": "Trinity Buoy Wharf, London",
            "description": "Exhibition of selected works for the John Ruskin Prize 2026.",
            "link": "https://www.johnruskinprize.co.uk/" // Specific prize website
        },
        // Removing specific Ruskin Mill events like Leveret concert if not directly under Fairhill Rise

        // --- Garvald Edinburgh (Grant's Robot Faces and placeholder) ---
        {
            "id": 40,
            "organization": "Garvald Edinburgh",
            "title": "Grant's Robot Faces Exhibition",
            "date": "2025-06-02", // Start date in the past
            "endDate": "2025-07-31", // End date in the future
            "time": "Varies (check link)",
            "location": "Garvald Makers, Edinburgh",
            "description": "An exhibition of unique robot faces created by artist Grant. Continues through July.",
            "link": "https://www.garvaldedinburgh.org.uk/events" // Found on general events page previously
        },
        {
            "id": 41, // Re-using ID for a placeholder if needed
            "organization": "Garvald Edinburgh",
            "title": "Check Garvald Edinburgh Website for Events",
            "date": "2025-08-01", // Placeholder date
            "time": "Ongoing",
            "location": "Garvald Edinburgh",
            "description": "Please visit the official Garvald Edinburgh website for the most current information on upcoming events and exhibitions.",
            "link": "https://www.garvaldedinburgh.org.uk/events"
        },

        // --- Camphill (Loch Arthur) (No specific upcoming events found via search) ---
        {
            "id": 42,
            "organization": "Camphill (Loch Arthur)",
            "title": "Check Loch Arthur Website for Events",
            "date": "2025-08-01", // Placeholder
            "time": "Ongoing",
            "location": "Loch Arthur Camphill Community",
            "description": "Please visit the official Loch Arthur website for the most current information on upcoming events and concerts.",
            "link": "https://locharthur.org.uk/news-and-events/calendar/"
        }
    ];

    // --- Organization Images (Paths Confirmed and Fairhill Rise) ---
    const organizationImages = {
        "Camphill Blair Drummond": "images/Camphill Blair Drummond Logo.png",
        "Camphill Corbenic": "images/Camphill Corbenic Logo.avif",
        "Tiphereth": "images/Camphill Tiphereth Logo.png",
        "Edinburgh Steiner School": "images/Edinburgh Steiner School Logo.png",
        "Garvald West Linton": "images/Garvald West Linton Logo.jpg",
        "Fairhill Rise": "images/Ruskin Mill Logo.png", // Renamed from Ruskin Mill, keeping old logo name for now
        "Edinburgh Christian Community": "images/christian community logo.jpg", // Confirmed correct
        "Garvald Edinburgh": "images/garvald edinburgh logo.png", // Confirmed correct
        "Camphill (Loch Arthur)": "images/Camphill Loch Arthur.jpg"
    };
    // --- End of Data Definitions ---


    const eventContainer = document.getElementById('eventContainer');
    const cardViewBtn = document.getElementById('cardViewBtn');
    const diaryViewBtn = document.getElementById('diaryViewBtn');
    const organizationViewBtn = document.getElementById('organizationViewBtn');

    // Filter out past events, including events that started in the past but are ongoing
    const filterUpcomingEvents = (eventsArray) => {
        const now = new Date();
        now.setHours(0, 0, 0, 0); // Set to start of today for comparison

        return eventsArray.filter(event => {
            const startDate = new Date(event.date);
            startDate.setHours(0, 0, 0, 0);

            if (event.endDate) {
                const endDate = new Date(event.endDate);
                endDate.setHours(23, 59, 59, 999); // Set to end of end day

                // An event is upcoming/ongoing if its end date is today or in the future
                return endDate >= now;
            } else {
                // For single-day events, check if the date is today or in the future
                return startDate >= now;
            }
        });
    };

    const upcomingEvents = filterUpcomingEvents(allEvents); // Filter events once

    console.log("Upcoming Events Array:", upcomingEvents);


    // Helper to format dates consistently
    const formatDate = (dateString, endDateString = null) => {
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        const startDate = new Date(dateString).toLocaleDateString('en-GB', options);

        if (endDateString && dateString !== endDateString) {
            const endDate = new Date(endDateString).toLocaleDateString('en-GB', options);
            return `${startDate} - ${endDate}`;
        }
        return startDate;
    };

    // Helper to generate CSS class from organization name for color coding
    const getOrgClass = (orgName) => {
        // Ensure the class name is valid (lowercase, replace non-alphanumeric with hyphen)
        return `title-${orgName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
    };

    // --- Render Card View ---
    const renderCardView = (eventsToDisplay) => {
        eventContainer.innerHTML = '';
        eventContainer.className = 'card-layout'; // Set class for grid layout

        if (eventsToDisplay.length === 0) {
            eventContainer.innerHTML = '<p class="no-events-message">No upcoming events to display in Card View.</p>';
            return;
        }

        // Sort events by date for card view
        eventsToDisplay.sort((a, b) => new Date(a.date) - new Date(b.date));

        eventsToDisplay.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.className = `event-card ${getOrgClass(event.organization)}`;
            eventCard.innerHTML = `
                <p class="event-org-name ${getOrgClass(event.organization)}">${event.organization}</p>
                <h3>${event.title}</h3>
                <p><strong>Date:</strong> ${formatDate(event.date, event.endDate)}</p>
                <p><strong>Time:</strong> ${event.time}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                ${event.description ? `<p class="event-description">${event.description}</p>` : ''}
                <p class="more-info"><a href="${event.link}" target="_blank">More Information</a></p>
            `;
            eventContainer.appendChild(eventCard);
        });
    };

    // --- Render Diary View ---
    const renderDiaryView = (eventsToDisplay) => {
        eventContainer.innerHTML = '';
        eventContainer.className = 'diary-layout'; // Set class for diary layout

        if (eventsToDisplay.length === 0) {
            eventContainer.innerHTML = '<p class="no-events-message">No upcoming events to display in Diary View.</p>';
            return;
        }

        // Create a map to hold events for each day, including multi-day events on each day they span
        const dailyEventsMap = new Map();
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Start of today

        eventsToDisplay.forEach(event => {
            const startDate = new Date(event.date);
            startDate.setHours(0, 0, 0, 0);
            const endDate = event.endDate ? new Date(event.endDate) : startDate;
            endDate.setHours(23, 59, 59, 999); // End of end day

            // Iterate over each day the event is active
            let currentDate = new Date(startDate);
            while (currentDate <= endDate) {
                // Only add to map if the event date is today or in the future
                if (currentDate >= today) {
                    const dateKey = currentDate.toISOString().slice(0, 10); //YYYY-MM-DD
                    if (!dailyEventsMap.has(dateKey)) {
                        dailyEventsMap.set(dateKey, []);
                    }
                    dailyEventsMap.get(dateKey).push(event);
                }
                currentDate.setDate(currentDate.getDate() + 1); // Move to next day
            }
        });

        // Sort dates chronologically
        const sortedDateKeys = Array.from(dailyEventsMap.keys()).sort((a, b) => new Date(a) - new Date(b));

        sortedDateKeys.forEach(dateKey => {
            const dayCard = document.createElement('div');
            dayCard.className = 'diary-day-card';
            dayCard.innerHTML = `<h4>${formatDate(dateKey)}</h4>`; // Format date for day header

            const eventList = document.createElement('ul');
            eventList.className = 'diary-event-list';

            // Sort events within each day by time (simple string comparison for "HH:MM")
            dailyEventsMap.get(dateKey).sort((a, b) => {
                const timeA = a.time.split(' ')[0];
                const timeB = b.time.split(' ')[0];
                return timeA.localeCompare(timeB);
            });

            dailyEventsMap.get(dateKey).forEach(event => {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `
                        <p class="event-org-name-diary ${getOrgClass(event.organization)}">${event.organization}</p>
                        <h4 class="${getOrgClass(event.organization)}">${event.title}</h4>
                        <p><strong>Date:</strong> ${formatDate(event.date, event.endDate)}</p>
                        <p><strong>Time:</strong> ${event.time}</p>
                        <p><strong>Location:</strong> ${event.location}</p>
                        ${event.description ? `<p class="event-description-diary">${event.description}</p>` : ''}
                        <p class="more-info-diary"><a href="${event.link}" target="_blank">More Information</a></p>
                    `;
                    eventList.appendChild(listItem);
                });
            dayCard.appendChild(eventList);
            eventContainer.appendChild(dayCard);
        });
    };

    // --- Render Organization View ---
    const renderOrganizationView = (eventsToDisplay) => {
        eventContainer.innerHTML = '';
        eventContainer.className = 'organization-layout';

        // Group events by organization and store their first event's link for the homepage URL
        const groupedEvents = eventsToDisplay.reduce((acc, event) => {
            if (!acc[event.organization]) {
                acc[event.organization] = [];
            }
            acc[event.organization].push(event);
            return acc;
        }, {});

        // Add the column header
        const headerRow = document.createElement('div');
        headerRow.className = 'organization-header';
        headerRow.innerHTML = `
            <div class="header-org-name">Organization</div>
            <div class="header-events">Upcoming Events</div>
        `;
        eventContainer.appendChild(headerRow);

        // Sort organizations alphabetically for consistent display
        const sortedOrgNames = Object.keys(groupedEvents).sort();

        sortedOrgNames.forEach(orgName => {
            const organizationRow = document.createElement('div');
            organizationRow.className = 'organization-row';

            const orgImageSrc = organizationImages[orgName] || 'https://via.placeholder.com/110?text=Logo'; // Fallback to a placeholder, larger
            // Get the first event's link for the organization's homepage URL, or a general org link if events are just placeholders
            const orgHomePageLink = groupedEvents[orgName].length > 0 && groupedEvents[orgName][0].link ? groupedEvents[orgName][0].link : '#';

            const organizationNameColumn = document.createElement('div');
            organizationNameColumn.className = `organization-name-column ${getOrgClass(orgName)}`;
            organizationNameColumn.innerHTML = `
                <a href="${orgHomePageLink}" target="_blank" class="org-link-wrapper">
                    <img src="${orgImageSrc}" alt="${orgName} Logo">
                    <h2 class="${getOrgClass(orgName)}">${orgName}</h2>
                </a>
            `;
            organizationRow.appendChild(organizationNameColumn);

            const organizationEventsColumn = document.createElement('div');
            organizationEventsColumn.className = 'organization-events-column';

            if (groupedEvents[orgName].length > 0) {
                // Sort events by date within each organization
                groupedEvents[orgName].sort((a, b) => new Date(a.date) - new Date(b.date));

                groupedEvents[orgName].forEach(event => {
                    const eventCard = document.createElement('div');
                    eventCard.className = `event-card ${getOrgClass(event.organization)}`;
                    eventCard.innerHTML = `
                        <h3>${event.title}</h3>
                        <p><strong>Date:</strong> ${formatDate(event.date, event.endDate)}</p>
                        <p><strong>Time:</strong> ${event.time}</p>
                        <p><strong>Location:</strong> ${event.location}</p>
                        ${event.description ? `<p class="event-description">${event.description}</p>` : ''}
                        <p class="more-info"><a href="${event.link}" target="_blank">More Information</a></p>
                    `;
                    organizationEventsColumn.appendChild(eventCard);
                });
            } else {
                const noEvents = document.createElement('p');
                noEvents.className = 'no-events-on-day';
                noEvents.textContent = 'No upcoming events listed.';
                organizationEventsColumn.appendChild(noEvents);
            }

            organizationRow.appendChild(organizationEventsColumn);
            eventContainer.appendChild(organizationRow);
        });
    };

    // --- View Switching Logic ---
    const activateButton = (button) => {
        document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    };

    cardViewBtn.addEventListener('click', () => {
        activateButton(cardViewBtn);
        renderCardView(upcomingEvents);
    });

    diaryViewBtn.addEventListener('click', () => {
        activateButton(diaryViewBtn);
        renderDiaryView(upcomingEvents);
    });

    organizationViewBtn.addEventListener('click', () => {
        activateButton(organizationViewBtn);
        renderOrganizationView(upcomingEvents);
    });

    // Initial render on page load: Diary View as default
    activateButton(diaryViewBtn); // Highlight Diary View button
    renderDiaryView(upcomingEvents); // Render Diary View by default
});

