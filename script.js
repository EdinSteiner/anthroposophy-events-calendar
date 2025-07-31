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
            "title": "Kindergarten Summer Camp: Week 1",
            "date": "2025-08-04",
            "endDate": "2025-08-08", // Corrected duration
            "time": "Full Day",
            "location": "Kindergarten campus",
            "description": "A fun week of play-based learning and outdoor activities.",
            "link": "https://www.edinburghsteinerschool.org.uk/event/kindergarten-summer-camp/"
        },
        {
            "id": 3,
            "organization": "Edinburgh Steiner School",
            "title": "Kindergarten Summer Camp: Week 2",
            "date": "2025-08-11",
            "endDate": "2025-08-15",
            "time": "Full Day",
            "location": "Kindergarten campus",
            "description": "A second week of engaging summer activities for young children.",
            "link": "https://www.edinburghsteinerschool.org.uk/event/kindergarten-summer-camp/"
        },
        {
            "id": 4,
            "organization": "Edinburgh Steiner School",
            "title": "Introduction to Steiner Waldorf Education",
            "date": "2025-10-15",
            "time": "7:00 PM - 9:00 PM",
            "location": "Main School Hall",
            "description": "An introductory evening for prospective parents.",
            "link": "https://www.edinburghsteinerschool.org.uk/event/introduction-evening-autumn/"
        },

        // --- Rudolf Steiner House Edinburgh (from previous tool results) ---
        {
            "id": 5,
            "organization": "Rudolf Steiner House Edinburgh",
            "title": "The Gospel of St Mark",
            "date": "2025-07-01",
            "time": "7:30 PM",
            "location": "Rudolf Steiner House",
            "description": "A series of talks on The Gospel of St Mark.",
            "link": "https://www.rsh.anthroposophy.org.uk/events/the-gospel-of-st-mark"
        },
        {
            "id": 6,
            "organization": "Rudolf Steiner House Edinburgh",
            "title": "Eurythmy Class",
            "date": "2025-07-03",
            "time": "6:00 PM",
            "location": "Rudolf Steiner House",
            "description": "Weekly eurythmy class.",
            "link": "https://www.rsh.anthroposophy.org.uk/events/eurythmy-class"
        },
        {
            "id": 7,
            "organization": "Rudolf Steiner House Edinburgh",
            "title": "Annual General Meeting",
            "date": "2025-09-25",
            "time": "7:00 PM",
            "location": "Rudolf Steiner House",
            "description": "The annual general meeting of the Anthroposophical Society.",
            "link": "https://www.rsh.anthroposophy.org.uk/events/agm"
        },

        // --- Other organizations (based on general searches and user input) ---
        {
            "id": 8,
            "organization": "The Christian Community Edinburgh",
            "title": "Summer Festival",
            "date": "2025-08-20",
            "endDate": "2025-08-22",
            "time": "Various",
            "location": "Christian Community Church, Edinburgh",
            "description": "A celebration of summer with various activities.",
            "link": "https://christiancommunity.org.uk/locations/edinburgh/"
        },
        {
            "id": 9,
            "organization": "Beeslack Steiner Initiative",
            "title": "Parent & Toddler Group",
            "date": "2025-07-02",
            "time": "10:00 AM - 12:00 PM",
            "location": "Beeslack Community High School",
            "description": "Weekly group for parents and toddlers.",
            "link": "https://www.beeslacksteiner.org.uk"
        }
    ];

    // --- DOM Elements ---
    const eventContainer = document.getElementById('eventContainer');
    const diaryViewBtn = document.getElementById('diaryViewBtn');
    const organizationViewBtn = document.getElementById('organizationViewBtn');

    // Filter out past events
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize to the start of the day for accurate comparison
    const upcomingEvents = allEvents.filter(event => {
        const eventStartDate = new Date(event.date);
        return eventStartDate >= today;
    });

    // Sort events for the diary view by date
    upcomingEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

    // --- Helper Functions ---
    const formatDate = (dateString) => {
        if (!dateString) return null;
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
    };

    // --- Render Functions ---
    const renderDiaryView = (events) => {
        eventContainer.innerHTML = '';
        const groupedByDate = events.reduce((acc, event) => {
            const dateKey = event.date; // Use the date as a key
            if (!acc[dateKey]) {
                acc[dateKey] = [];
            }
            acc[dateKey].push(event);
            return acc;
        }, {});

        const sortedDates = Object.keys(groupedByDate).sort((a, b) => new Date(a) - new Date(b));

        if (sortedDates.length === 0) {
            eventContainer.innerHTML = '<p class="no-events-message">No upcoming events listed at this time.</p>';
            return;
        }

        sortedDates.forEach(dateKey => {
            const date = new Date(dateKey);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);

            let dayHeader = '';
            if (date.toDateString() === today.toDateString()) {
                dayHeader = 'Today';
            } else if (date.toDateString() === tomorrow.toDateString()) {
                dayHeader = 'Tomorrow';
            } else {
                dayHeader = new Intl.DateTimeFormat('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(date);
            }

            const dayCard = document.createElement('div');
            dayCard.classList.add('diary-day-card');

            const dayTitle = document.createElement('h2');
            dayTitle.classList.add('diary-day-title');
            dayTitle.textContent = dayHeader;
            dayCard.appendChild(dayTitle);

            const eventList = document.createElement('ul');
            eventList.classList.add('diary-event-list');

            groupedByDate[dateKey].forEach(event => {
                const listItem = document.createElement('li');
                listItem.classList.add('diary-event-item');

                // Generate HTML for each part of the event
                const eventTitleHtml = `<h3 class="event-title">${event.title}</h3>`;
                const organizationHtml = `<p class="event-organization">${event.organization}</p>`;
                const eventTimeHtml = event.time ? `<p class="event-time"><i class="fas fa-clock"></i> ${event.time}</p>` : '';
                const eventLocationHtml = event.location ? `<p class="event-location"><i class="fas fa-map-marker-alt"></i> ${event.location}</p>` : '';
                const eventDescriptionHtml = event.description ? `<p class="event-description">${event.description}</p>` : '';
                const eventLinkHtml = event.link ? `<p class="event-link"><a href="${event.link}" target="_blank" rel="noopener noreferrer">More Info</a></p>` : '';

                listItem.innerHTML = `
                    ${eventTitleHtml}
                    ${organizationHtml}
                    ${eventTimeHtml}
                    ${eventLocationHtml}
                    ${eventDescriptionHtml}
                    ${eventLinkHtml}
                `;
                eventList.appendChild(listItem);
            });

            dayCard.appendChild(eventList);
            eventContainer.appendChild(dayCard);
        });
    };

    const renderOrganizationView = () => {
        eventContainer.innerHTML = '';
        const groupedByOrganization = allEvents.reduce((acc, event) => {
            const orgName = event.organization;
            if (!acc[orgName]) {
                acc[orgName] = [];
            }
            acc[orgName].push(event);
            return acc;
        }, {});

        Object.keys(groupedByOrganization).sort().forEach(organizationName => {
            const organizationRow = document.createElement('div');
            organizationRow.classList.add('organization-row');

            const organizationHeader = document.createElement('div');
            organizationHeader.classList.add('organization-header');
            organizationHeader.innerHTML = `<h2>${organizationName}</h2>`;
            organizationRow.appendChild(organizationHeader);

            const organizationEventsColumn = document.createElement('div');
            organizationEventsColumn.classList.add('organization-events-column');

            const organizationEvents = groupedByOrganization[organizationName];
            if (organizationEvents.length > 0) {
                // Sort events for the organization view by date
                organizationEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

                const eventList = document.createElement('ul');
                eventList.classList.add('organization-event-list');

                organizationEvents.forEach(event => {
                    const listItem = document.createElement('li');
                    listItem.classList.add('event-card');
                    
                    // --- Date Formatting Logic (UPDATED) ---
                    let eventDateHtml;
                    if (event.endDate) {
                        const startDate = formatDate(event.date);
                        const endDate = formatDate(event.endDate);
                        eventDateHtml = `<p class="event-date"><i class="fas fa-calendar-alt"></i> ${startDate} - ${endDate}</p>`;
                    } else {
                        const date = formatDate(event.date);
                        eventDateHtml = `<p class="event-date"><i class="fas fa-calendar-alt"></i> ${date}</p>`;
                    }

                    // Generate HTML for each part of the event
                    const eventTitleHtml = `<h3 class="event-title">${event.title}</h3>`;
                    const eventTimeHtml = event.time ? `<p class="event-time"><i class="fas fa-clock"></i> ${event.time}</p>` : '';
                    const eventLocationHtml = event.location ? `<p class="event-location"><i class="fas fa-map-marker-alt"></i> ${event.location}</p>` : '';
                    const eventDescriptionHtml = event.description ? `<p class="event-description">${event.description}</p>` : '';
                    const eventLinkHtml = event.link ? `<p class="event-link"><a href="${event.link}" target="_blank" rel="noopener noreferrer">More Info</a></p>` : '';

                    listItem.innerHTML = `
                        ${eventTitleHtml}
                        ${eventDateHtml}
                        ${eventTimeHtml}
                        ${eventLocationHtml}
                        ${eventDescriptionHtml}
                        ${eventLinkHtml}
                    `;
                    eventList.appendChild(listItem);
                });
                organizationEventsColumn.appendChild(eventList);
            } else {
                organizationEventsColumn.innerHTML = '<p class="no-events-message">No upcoming events listed at this time.</p>';
            }
            organizationRow.appendChild(organizationEventsColumn);
            eventContainer.appendChild(organizationRow);
        });
    };


    // --- View Mode Management ---
    let currentView = 'diary'; // Default view

    const setView = (view) => {
        currentView = view;
        diaryViewBtn.classList.remove('active');
        organizationViewBtn.classList.remove('active');

        if (view === 'diary') {
            renderDiaryView(upcomingEvents);
            diaryViewBtn.classList.add('active');
        } else if (view === 'organization') {
            renderOrganizationView(); // Call without argument to use allEvents directly
            organizationViewBtn.classList.add('active');
        }
    };

    // Event Listeners for view buttons
    diaryViewBtn.addEventListener('click', () => setView('diary'));
    organizationViewBtn.addEventListener('click', () => setView('organization'));

    // Initial render based on default view
    setView(currentView);
});
