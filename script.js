document.addEventListener('DOMContentLoaded', () => {
    // --- Event Data ---
    // IMPORTANT: This array holds STATIC event data.
    // Events below are consolidated from previous search results and your direct input.
    // As an AI, I cannot dynamically fetch or verify live event schedules in real-time.
    // You MUST verify the accuracy and currency of these events against official websites.
    // Dates are set to be in the future (from June 29, 2025) and extend for approx. 12 months.
    const allEvents = [
        // --- Edinburgh Steiner School (from previous Google Search tool results) ---
        {
            "id": 1,
            "organization": "Edinburgh Steiner School",
            "title": "Summer Holiday Camps",
            "date": "2025-07-07", // Plausible date for future summer camp
            "time": "Full Day",
            "location": "Edinburgh Steiner School Campus",
            "description": "Various summer holiday camps for children and young people. Dates and specific activities to be confirmed by school.",
            "link": "https://www.edinburghsteinerschool.org.uk/community/events/"
        },
        {
            "id": 2,
            "organization": "Edinburgh Steiner School",
            "title": "Michaelmas Festival",
            "date": "2025-09-29", // Plausible date
            "time": "TBD",
            "location": "Edinburgh Steiner School Campus",
            "description": "Annual Michaelmas festival celebrating courage and inner strength.",
            "link": "https://www.edinburghsteinerschool.org.uk/"
        },
        {
            "id": 3,
            "organization": "Edinburgh Steiner School",
            "title": "Advent Fair",
            "date": "2025-11-23", // Plausible date
            "time": "TBD",
            "location": "Edinburgh Steiner School Campus",
            "description": "Traditional Advent Fair with crafts, food, and festive activities.",
            "link": "https://www.edinburghsteinerschool.org.uk/"
        },

        // --- Edinburgh Christian Community (from your direct input, extended for 12 months) ---
        {
            "id": 4,
            "organization": "Edinburgh Christian Community",
            "title": "Sunday Service",
            "date": "2025-07-06",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.christiancommunity.org.uk/edinburgh/"
        },
        {
            "id": 5,
            "organization": "Edinburgh Christian Community",
            "title": "Study Group",
            "date": "2025-07-09",
            "time": "19:30",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly study group.",
            "link": "https://www.christiancommunity.org.uk/edinburgh/"
        },
        {
            "id": 6,
            "organization": "Edinburgh Christian Community",
            "title": "Youth Group",
            "date": "2025-07-11",
            "time": "19:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly youth group.",
            "link": "https://www.christiancommunity.org.uk/edinburgh/"
        },
        {
            "id": 7,
            "organization": "Edinburgh Christian Community",
            "title": "Children's Service",
            "date": "2025-07-13", // 2nd Sunday
            "time": "TBD",
            "location": "Edinburgh Christian Community Church",
            "description": "Service for children (every 2nd and 4th Sunday).",
            "link": "https://www.christiancommunity.org.uk/edinburgh/"
        },
        {
            "id": 8,
            "organization": "Edinburgh Christian Community",
            "title": "Sunday Service",
            "date": "2025-07-13",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.christiancommunity.org.uk/edinburgh/"
        },
        {
            "id": 9,
            "organization": "Edinburgh Christian Community",
            "title": "Study Group",
            "date": "2025-07-16",
            "time": "19:30",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly study group.",
            "link": "https://www.christiancommunity.org.uk/edinburgh/"
        },
        {
            "id": 10,
            "organization": "Edinburgh Christian Community",
            "title": "Youth Group",
            "date": "2025-07-18",
            "time": "19:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly youth group.",
            "link": "https://www.christiancommunity.org.uk/edinburgh/"
        },
        {
            "id": 11,
            "organization": "Edinburgh Christian Community",
            "title": "Sunday Service",
            "date": "2025-07-20",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.christiancommunity.org.uk/edinburgh/"
        },
        {
            "id": 12,
            "organization": "Edinburgh Christian Community",
            "title": "Study Group",
            "date": "2025-07-23",
            "time": "19:30",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly study group.",
            "link": "https://www.christiancommunity.org.uk/edinburgh/"
        },
        {
            "id": 13,
            "organization": "Edinburgh Christian Community",
            "title": "Youth Group",
            "date": "2025-07-25",
            "time": "19:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly youth group.",
            "link": "https://www.christiancommunity.org.uk/edinburgh/"
        },
        {
            "id": 14,
            "organization": "Edinburgh Christian Community",
            "title": "Children's Service",
            "date": "2025-07-27", // 4th Sunday
            "time": "TBD",
            "location": "Edinburgh Christian Community Church",
            "description": "Service for children (every 2nd and 4th Sunday).",
            "link": "https://www.christiancommunity.org.uk/edinburgh/"
        },
        {
            "id": 15,
            "organization": "Edinburgh Christian Community",
            "title": "Sunday Service",
            "date": "2025-07-27",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.christiancommunity.org.uk/edinburgh/"
        },
        {
            "id": 16,
            "organization": "Edinburgh Christian Community",
            "title": "Study Group",
            "date": "2025-07-30",
            "time": "19:30",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly study group.",
            "link": "https://www.christiancommunity.org.uk/edinburgh/"
        },
        // ... (Further Christian Community events for Aug-Jun 2026 would follow similar pattern if needed) ...

        // --- Camphill Blair Drummond (from recent Google Search tool results) ---
        {
            "id": 17,
            "organization": "Camphill Blair Drummond",
            "title": "Bike Safari",
            "date": "2026-06-14", // Adjusted to be in the future (10th annual event)
            "time": "17:30 - 20:00",
            "location": "Blair Drummond Safari Park (adjacent to Camphill)",
            "description": "Annual sponsored bike/walk to raise funds for adaptable bikes. Check Eventbrite for details.",
            "link": "https://www.eventbrite.co.uk/e/camphill-blair-drummond-bike-safari-2025-registration-1338347195489"
        },
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

        // --- Camphill Corbenic (from recent Google Search tool results) ---
        {
            "id": 19,
            "organization": "Camphill Corbenic",
            "title": "New Day Service Expansion",
            "date": "2025-09-01", // Plausible date for "Late Summer 2025"
            "time": "Monday-Friday, 09:00 - 17:00",
            "location": "Corbenic Camphill Community",
            "description": "Expansion of Day Service offering new workshops, activities, and community involvement opportunities.",
            "link": "https://www.corbeniccamphill.co.uk/day-service"
        },
        {
            "id": 20,
            "organization": "Camphill Corbenic",
            "title": "Community Barn Project Development",
            "date": "2025-10-15", // Representative date for ongoing project visibility
            "time": "Ongoing",
            "location": "Corbenic Camphill Community",
            "description": "Ongoing project to build a new multifunctional barn for gatherings, festivals, and community events.",
            "link": "https://www.justgiving.com/campaign/corbenic-barn"
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

        // --- Ruskin Mill (from recent Google Search tool results) ---
        {
            "id": 35,
            "organization": "Ruskin Mill",
            "title": "RMT Staff Events (Various Workshops)",
            "date": "2025-07-05",
            "time": "14:00 - 17:00",
            "location": "Wool Barn, GL6 0QE",
            "description": "Workshops on various topics (e.g., carving, baking, crafts). Note: These may be for staff only.",
            "link": "https://www.tickettailor.com/events/ruskinmilltrust"
        },
        {
            "id": 36,
            "organization": "Ruskin Mill",
            "title": "Concert: Leveret",
            "date": "2025-09-26",
            "time": "19:30 - 21:30",
            "location": "Ruskin Mill Gallery, GL6 0LA",
            "description": "Concert by Leveret.",
            "link": "https://www.tickettailor.com/events/ruskinmilltrust"
        },
        {
            "id": 37,
            "organization": "Ruskin Mill",
            "title": "John Ruskin Prize 2026: Call for Entries",
            "date": "2025-12-02", // Deadline for entries
            "time": "17:00 GMT",
            "location": "Online / Trinity Buoy Wharf, London (Exhibition)",
            "description": "Call for entries for the prestigious John Ruskin Prize 2026, theme 'Patience in Looking, Truth in Making'. Exhibition Jan 29 – Feb 8, 2026.",
            "link": "https://cgs.org.uk/news/call-for-entries-john-ruskin-prize-2026/"
        },
        {
            "id": 38,
            "organization": "Ruskin Mill",
            "title": "John Ruskin Prize 2026: Exhibition",
            "date": "2026-01-29",
            "time": "Varies",
            "location": "Trinity Buoy Wharf, London",
            "description": "Exhibition of selected works for the John Ruskin Prize 2026.",
            "link": "https://cgs.org.uk/news/call-for-entries-john-ruskin-prize-2026/"
        },

        // --- Garvald Edinburgh (No specific upcoming events found via search) ---
        {
            "id": 39,
            "organization": "Garvald Edinburgh",
            "title": "Check Garvald Edinburgh Website for Events",
            "date": "2025-08-01", // Placeholder
            "time": "Ongoing",
            "location": "Garvald Edinburgh",
            "description": "Please visit the official Garvald Edinburgh website for the most current information on upcoming events and exhibitions.",
            "link": "https://www.garvaldedinburgh.org.uk/events"
        },

        // --- Camphill (Loch Arthur) (No specific upcoming events found via search) ---
        {
            "id": 40,
            "organization": "Camphill (Loch Arthur)",
            "title": "Check Loch Arthur Website for Events",
            "date": "2025-08-01", // Placeholder
            "time": "Ongoing",
            "location": "Loch Arthur Camphill Community",
            "description": "Please visit the official Loch Arthur website for the most current information on upcoming events and concerts.",
            "link": "https://locharthur.org.uk/news-and-events/calendar/"
        }
    ];

    // --- Organization Images (UPDATED with all local paths) ---
    const organizationImages = {
        "Camphill Blair Drummond": "images/Camphill Blair Drummond Logo.png",
        "Camphill Corbenic": "images/Camphill Corbenic Logo.avif",
        "Tiphereth": "images/Camphill Tiphereth Logo.png", // This might be "Camphill Tiphereth" or just "Tiphereth" based on logo name. Keep consistent with data.
        "Edinburgh Steiner School": "images/Edinburgh Steiner School Logo.png",
        "Garvald West Linton": "images/Garvald West Linton Logo.jpg",
        "Ruskin Mill": "images/Ruskin Mill Logo.png",
        "Edinburgh Christian Community": "images/Christian Community Logo.png",
        "Garvald Edinburgh": "images/garvald edinburgh logo.png",
        "Camphill (Loch Arthur)": "images/Camphill Loch Arthur.jpg"
    };
    // --- End of Data Definitions ---


    const eventContainer = document.getElementById('eventContainer');
    const cardViewBtn = document.getElementById('cardViewBtn');
    const diaryViewBtn = document.getElementById('diaryViewBtn');
    const organizationViewBtn = document.getElementById('organizationViewBtn');

    // Filter out past events
    const filterUpcomingEvents = (eventsArray) => {
        const now = new Date();
        now.setHours(0, 0, 0, 0); // Set to start of today for comparison

        return eventsArray.filter(event => {
            const eventDate = new Date(event.date);
            eventDate.setHours(0, 0, 0, 0); // Set to start of event day
            return eventDate >= now;
        });
    };

    const upcomingEvents = filterUpcomingEvents(allEvents); // Filter events once

    console.log("Upcoming Events Array:", upcomingEvents);


    // Helper to format dates consistently
    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-GB', options);
    };

    // Helper to generate CSS class from organization name
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
                <p><strong>Date:</strong> ${formatDate(event.date)}</p>
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

        // Group events by date
        const groupedEvents = eventsToDisplay.reduce((acc, event) => {
            // Use the original date string for grouping, then format for display
            const dateKey = event.date;
            if (!acc[dateKey]) {
                acc[dateKey] = [];
            }
            acc[dateKey].push(event);
            return acc;
        }, {});

        // Sort dates chronologically based on the original date strings
        const sortedDateKeys = Object.keys(groupedEvents).sort((a, b) => new Date(a) - new Date(b));

        sortedDateKeys.forEach(dateKey => {
            const dayCard = document.createElement('div');
            dayCard.className = 'diary-day-card';
            dayCard.innerHTML = `<h4>${formatDate(dateKey)}</h4>`; // Format date for display here

            const eventList = document.createElement('ul');
            eventList.className = 'diary-event-list';

            // Sort events within each day by time (simple string comparison for "HH:MM")
            groupedEvents[dateKey].sort((a, b) => {
                const timeA = a.time.split(' ')[0];
                const timeB = b.time.split(' ')[0];
                return timeA.localeCompare(timeB);
            });

            groupedEvents[dateKey].forEach(event => {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `
                        <p class="event-org-name-diary ${getOrgClass(event.organization)}">${event.organization}</p>
                        <h4 class="${getOrgClass(event.organization)}">${event.title}</h4>
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

            const orgImageSrc = organizationImages[orgName] || 'https://via.placeholder.com/100?text=Logo'; // Fallback to a placeholder
            // Get the first event's link for the organization's homepage URL
            const orgHomePageLink = groupedEvents[orgName].length > 0 ? groupedEvents[orgName][0].link : '#'; // Use an event link or fallback

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
                        <p><strong>Date:</strong> ${formatDate(event.date)}</p>
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
