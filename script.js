document.addEventListener('DOMContentLoaded', () => {
    // --- Event Data ---
    // IMPORTANT: This array holds STATIC event data.
    // Events below are consolidated from previous search results and your direct input,
    // filtered and adjusted based on all your feedback.
    // As an AI, I cannot dynamically fetch or verify live event schedules in real-time.
    // You MUST verify the accuracy and currency of these events against official websites.
    // Dates are set to be in the future (from current date June 29, 2025) or ongoing.
    const allEvents = [
        // --- Edinburgh Steiner School (from previous Google Search tool results) ---
        {
            "id": 1,
            "organization": "Edinburgh Steiner School",
            "title": "Summer Holiday Camps",
            "date": "2025-07-07", // Plausible start date for future summer camp
            "time": "Full Day",
            "location": "Edinburgh Steiner School Campus",
            "description": "Various summer holiday camps for children and young people.",
            "link": "https://www.edinburghsteinerschool.org.uk/community/events/" // General events page
        },

        // --- Edinburgh Christian Community (from your direct input, extended, Facebook link) ---
        // Removed Study Group events. Link changed to Facebook.
        {
            "id": 4,
            "organization": "Edinburgh Christian Community",
            "title": "Sunday Service",
            "date": "2025-07-06",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.facebook.com/christiancommunityedinburgh"
        },
        {
            "id": 7,
            "organization": "Edinburgh Christian Community",
            "title": "Children's Service",
            "date": "2025-07-13", // 2nd Sunday
            "time": "TBD",
            "location": "Edinburgh Christian Community Church",
            "description": "Service for children (every 2nd and 4th Sunday).",
            "link": "https://www.facebook.com/christiancommunityedinburgh"
        },
        {
            "id": 8,
            "organization": "Edinburgh Christian Community",
            "title": "Sunday Service",
            "date": "2025-07-13",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.facebook.com/christiancommunityedinburgh"
        },
        {
            "id": 10,
            "organization": "Edinburgh Christian Community",
            "title": "Youth Group",
            "date": "2025-07-18",
            "time": "19:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly youth group.",
            "link": "https://www.facebook.com/christiancommunityedinburgh"
        },
        {
            "id": 11,
            "organization": "Edinburgh Christian Community",
            "title": "Sunday Service",
            "date": "2025-07-20",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.facebook.com/christiancommunityedinburgh"
        },
        {
            "id": 13,
            "organization": "Edinburgh Christian Community",
            "title": "Youth Group",
            "date": "2025-07-25",
            "time": "19:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly youth group.",
            "link": "https://www.facebook.com/christiancommunityedinburgh"
        },
        {
            "id": 14,
            "organization": "Edinburgh Christian Community",
            "title": "Children's Service",
            "date": "2025-07-27", // 4th Sunday
            "time": "TBD",
            "location": "Edinburgh Christian Community Church",
            "description": "Service for children (every 2nd and 4th Sunday).",
            "link": "https://www.facebook.com/christiancommunityedinburgh"
        },
        {
            "id": 15,
            "organization": "Edinburgh Christian Community",
            "title": "Sunday Service",
            "date": "2025-07-27",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.facebook.com/christiancommunityedinburgh"
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

        // --- Ruskin Mill (from recent Google Search tool results, specific links where available) ---
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
            "link": "https://www.tickettailor.com/events/ruskinmilltrust/3006422204" // Specific event link
        },
        {
            "id": 37,
            "organization": "Ruskin Mill",
            "title": "John Ruskin Prize 2026: Call for Entries",
            "date": "2025-12-02", // Deadline for entries
            "time": "17:00 GMT",
            "location": "Online",
            "description": "Call for entries for the prestigious John Ruskin Prize 2026, theme 'Patience in Looking, Truth in Making'. Exhibition Jan 29 – Feb 8, 2026.",
            "link": "https://www.johnruskinprize.co.uk/" // Specific prize website
        },
        {
            "id": 38,
            "organization": "Ruskin Mill",
            "title": "John Ruskin Prize 2026: Exhibition",
            "date": "2026-01-29",
            "endDate": "2026-02-08", // Added end date for multi-day event
            "time": "Varies",
            "location": "Trinity Buoy Wharf, London",
            "description": "Exhibition of selected works for the John Ruskin Prize 2026.",
            "link": "https://www.johnruskinprize.co.uk/" // Specific prize website
        },

        // --- Garvald Edinburgh (Re-added Grant's Robot Faces) ---
        {
            "id": 39,
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
            "id": 40, // Re-using ID for a placeholder if needed
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
            "id": 41,
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
        "Tiphereth": "images/Camphill Tiphereth Logo.png",
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

        // Group events by date (using start date for grouping key, but displaying full range)
        const groupedEvents = eventsToDisplay.reduce((acc, event) => {
            const dateKey = event.date; // Use the original date string for grouping
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
            dayCard.innerHTML = `<h4>${formatDate(dateKey)}</h4>`; // Format date for day header

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
                        <p><strong>Date:</strong> ${formatDate(event.date, event.endDate)}</p>
                        <p
