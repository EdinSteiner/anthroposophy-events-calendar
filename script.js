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
            "location": "Edinburgh Steiner School Campus",
            "description": "Gentle summer camp for younger children.",
            "link": "https://www.edinburghsteinerschool.org.uk/event/kindergarten-summer-camps/"
        },
        {
            "id": 44, // New ID
            "organization": "Edinburgh Steiner School",
            "title": "Kindergarten Summer Camp: Week 2",
            "date": "2025-08-11",
            "endDate": "2025-08-15", // Corrected duration
            "time": "Full Day",
            "location": "Edinburgh Steiner School Campus",
            "description": "Gentle summer camp for younger children.",
            "link": "https://www.edinburghsteinerschool.org.uk/event/kindergarten-summer-camps/"
        },
        {
            "id": 45, // New ID
            "organization": "Edinburgh Steiner School",
            "title": "Early Years Parent Education Evening: Rhythm, Repetition, Reverence",
            "date": "2025-09-18",
            "time": "19:00 - 21:00",
            "location": "Edinburgh Steiner School Campus",
            "description": "An evening for parents focusing on rhythm, repetition, and reverence in early years education.",
            "link": "https://www.edinburghsteinerschool.org.uk/event/early-years-parent-education-evening-rhythm-repetition-reverence/"
        },
        {
            "id": 46, // New ID
            "organization": "Edinburgh Steiner School",
            "title": "El Mercado Market",
            "date": "2025-11-22",
            "time": "10:00 - 15:00",
            "location": "Edinburgh Steiner School Campus",
            "description": "A vibrant market featuring various stalls.",
            "link": "https://www.edinburghsteinerschool.org.uk/event/el-mercado-market/"
        },

        // --- Edinburgh Christian Community (Facebook link) ---
        // Removed Study Group events, Youth Group listings and Children Service listings.
        {
            "id": 4,
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man",
            "date": "2025-07-06",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.facebook.com/CCEdinburgh"
        },
        {
            "id": 8,
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man",
            "date": "2025-07-13",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.facebook.com/CCEdinburgh"
        },
        {
            "id": 11,
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man",
            "date": "2025-07-20",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.facebook.com/CCEdinburgh"
        },
        {
            "id": 16, // New ID
            "organization": "Edinburgh Christian Community",
            "title": "Devotional Gathering",
            "date": "2025-07-27",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Devotional Gathering.",
            "link": "https://www.facebook.com/CCEdinburgh"
        },
        {
            "id": 15,
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man",
            "date": "2025-07-27",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.facebook.com/CCEdinburgh"
        },
        {
            "id": 17, // New ID
            "organization": "Edinburgh Christian Community",
            "title": "Tom Ravetz's Visit and Congregational Meeting",
            "date": "2025-08-02",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Act of Consecration of Man at 10am followed by a short break and the congregational meeting.",
            "link": "https://www.facebook.com/CCEdinburgh"
        },
        {
            "id": 47, // New ID
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man",
            "date": "2025-08-03",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.facebook.com/CCEdinburgh"
        },
        {
            "id": 48, // New ID
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man",
            "date": "2025-08-10",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.facebook.com/CCEdinburgh"
        },
        {
            "id": 49, // New ID
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man",
            "date": "2025-08-17",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.facebook.com/CCEdinburgh"
        },
        {
            "id": 50, // New ID
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man",
            "date": "2025-08-24",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.facebook.com/CCEdinburgh"
        },
        {
            "id": 51, // New ID
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man",
            "date": "2025-08-31",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.facebook.com/CCEdinburgh"
        },

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
            "title": "Open Morning",
            "date": "2025-07-30",
            "time": "TBD",
            "location": "Tiphereth Community",
            "description": "Open Morning at Tiphereth.",
            "link": "https://www.tiphereth.org.uk/"
        },
        // ADDITION 1.1: Tiphereth Etsy Shop for Organization view
        {
            "id": 54, // New ID for Etsy shop
            "organization": "Tiphereth",
            "title": "Tiphereth Etsy Shop",
            "date": null, // This does not go in Diary view, so no specific date
            "time": null,
            "location": "Online",
            "description": "Browse and purchase handcrafted items made in Tiphereth workshops.",
            "link": "https://www.etsy.com/uk/shop/printstudiotiphereth",
            "isOrganizationDetail": true // Custom property to signify it's for org view only
        },
        // ADDITION 1.2: Tiphereth Pop-up Shop for Diary and Organization view
        {
            "id": 55, // New ID for pop-up shop
            "organization": "Tiphereth",
            "title": "Pop-up Shop",
            "date": "2025-07-18", // Setting an initial Friday date for the diary view
            "time": "9:00 - 16:30",
            "location": "37-39 Torphin Road, Edinburgh, EH13 0PG",
            "description": "Tiphereth's new pop-up shop offers a variety of handcrafted items made in their workshops, including print studio products. The shop is open every Friday.",
            "link": "https://www.tiphereth.org.uk/", // Link to Tiphereth's main site for general info
            "isRecurringWeekly": true, // Custom property to signify weekly recurrence
            "dayOfWeek": 5 // Friday (0=Sunday, 1=Monday... 5=Friday)
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
            "link": "" // Link removed
        },
        {
            "id": 23,
            "organization": "Garvald West Linton",
            "title": "Community Gathering & Project",
            "date": "2025-07-18",
            "time": "09:45 - 12:30",
            "location": "Garvald West Linton Hall",
            "description": "Regular community gathering and project work.",
            "link": "" // Link removed
        },
        {
            "id": 24,
            "organization": "Garvald West Linton",
            "title": "Community Gathering & Project",
            "date": "2025-08-01",
            "time": "09:45 - 12:30",
            "location": "Garvald West Linton Hall",
            "description": "Regular community gathering and project work.",
            "link": "" // Link removed
        },
        {
            "id": 25,
            "organization": "Garvald West Linton",
            "title": "Michaelmas/Harvest Lunch & Event",
            "date": "2025-09-29",
            "time": "Afternoon",
            "location": "Garvald West Linton",
            "description": "Annual Michaelmas/Harvest celebration.",
            "link": "" // Link removed
        },
        {
            "id": 26,
            "organization": "Garvald West Linton",
            "title": "Halloween Party",
            "date": "2025-10-31",
            "time": "TBD",
            "location": "Garvald West Linton",
            "description": "Residents and staff to dress up for Halloween.",
            "link": "" // Link removed
        },
        {
            "id": 27,
            "organization": "Garvald West Linton",
            "title": "Guy Fawkes Fireworks",
            "date": "2025-11-05",
            "time": "TBD",
            "location": "Garvald West Linton",
            "description": "Fireworks display with hot chocolate.",
            "link": "" // Link removed
        },
        {
            "id": 28,
            "organization": "Garvald West Linton",
            "title": "St Martin – Lantern Walk",
            "date": "2025-11-11",
            "time": "TBD",
            "location": "Garvald West Linton",
            "description": "Lantern walk with a story about St Martin and the Beggar.",
            "link": "" // Link removed
        },
        {
            "id": 29,
            "organization": "Garvald West Linton",
            "title": "Advent Wreath Making",
            "date": "2025-11-28",
            "time": "TBD",
            "location": "Garvald West Linton Dining Room",
            "description": "Advent wreath making for all.",
            "link": "" // Link removed
        },
        {
            "id": 30,
            "organization": "Garvald West Linton",
            "title": "1st Advent Celebration",
            "date": "2025-11-30",
            "time": "TBD",
            "location": "Garvald West Linton Main House",
            "description": "Advent celebration with lighting candles, bell ringing, singing, hot chocolate.",
            "link": "" // Link removed
        },
        {
            "id": 31,
            "organization": "Garvald West Linton",
            "title": "Christmas Fair",
            "date": "2025-12-06",
            "time": "10:30 - 13:00",
            "location": "Garvald West Linton Workshops",
            "description": "Workshops selling handmade items.",
            "link": "" // Link removed
        },
        {
            "id": 32,
            "organization": "Garvald West Linton",
            "title": "Santa Lucia Event",
            "date": "2025-12-13",
            "time": "PM",
            "location": "Garvald West Linton",
            "description": "Celebration of Santa Lucia.",
            "link": "" // Link removed
        },
        {
            "id": 33,
            "organization": "Garvald West Linton",
            "title": "Christmas Eve Celebrations",
            "date": "2025-12-24",
            "time": "TBD",
            "location": "Garvald West Linton",
            "description": "Gathering around Christmas tree, singing, gospel reading, candlelit dinner.",
            "link": "" // Link removed
        },
        {
            "id": 34,
            "organization": "Garvald West Linton",
            "title": "Christmas Day Lunch",
            "date": "2025-12-25",
            "time": "TBD",
            "location": "Garvald West Linton",
            "description": "Christmas Day festive lunch.",
            "link": "" // Link removed
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
            "link": "https://www.ruskinprize.co.uk/" // Corrected link
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
            "link": "https://www.ruskinprize.co.uk/" // Corrected link
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
            "id": 52, // New ID
            "organization": "Garvald Edinburgh",
            "title": "Garvald Gorgie Workshops Open Day",
            "date": "2025-08-30",
            "time": "10:30-13:30",
            "location": "Garvald Gorgie Workshops, Edinburgh",
            "description": "An open day at Garvald Gorgie Workshops.",
            "link": "https://www.garvaldedinburgh.org.uk/events/garvald-gorgie-workshops-open-day-2025"
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
        },
        {
            "id": 53, // New ID
            "organization": "Camphill (Loch Arthur)",
            "title": "Concert: Anna Massie",
            "date": "2025-10-29",
            "time": "19:30 - 21:00",
            "location": "Loch Arthur Camphill Community",
            "description": "Concert by Anna Massie.",
            "link": "https://locharthur.org.uk/event/concert-anna-massie/"
        },
        // --- Anthroposophy in Edinburgh ---
        // Removed 'Study Group Meeting' listings.
        {
            "id": 43,
            "organization": "Anthroposophy in Edinburgh",
            "title": "Monday Study Group",
            "date": "2025-08-18",
            "time": "13:45-15:15",
            "location": "The Salisbury Centre, Edinburgh",
            "description": "Monday Study Group, which resumes on 18 August 1:45-3:15pm studying Riddles of Philosophy by Rudolf Steiner. This group meets fortnightly on Mondays.",
            "link": "Contact :ioberskigmail.com" // Changed to contact info
        },
        // ADDITION 2: Anthroposophy in Edinburgh - Online Study Group
        {
            "id": 56, // New ID
            "organization": "Anthroposophy in Edinburgh",
            "title": "Online Study Group of the Leading Thoughts",
            "date": "2025-08-26",
            "time": "19:00-20:00",
            "location": "Online",
            "description": "Online Study Group of the Leading Thoughts resumes with Leading Thoughts 62-65.",
            "link": "Contact :ioberski[at]gmail.com"
        },
        // ADDITION 3: Anthroposophy in Edinburgh and Edinburgh Steiner School - Fire in the Temple
        {
            "id": 57, // New ID
            "organization": "Anthroposophy in Edinburgh", // Primary organization
            "secondaryOrganization": "Edinburgh Steiner School", // Secondary organization for display if desired
            "title": "Fire in the Temple: A Staged Reading",
            "date": "2025-11-09",
            "time": "14:00-16:30",
            "location": "Edinburgh Steiner School",
            "description": "A staged reading of the play by Glen Williamson.",
            "link": "https://www.eventbrite.co.uk/e/fire-in-the-temple-tickets-1488785109339?aff=oddtdtcreator"
        }
    ];

    // --- Organization Images (Paths Confirmed and Fairhill Rise) ---
    const organizationImages = {
        "Anthroposophy in Edinburgh": "images/Anthroposophy in Edinburgh Logo.jpg",
        "Camphill Blair Drummond": "images/Camphill Blair Drummond Logo.png",
        "Camphill Corbenic": "images/Camphill Corbenic Logo.avif",
        "Tiphereth": "images/Camphill Tiphereth Logo.png",
        "Edinburgh Christian Community": "images/Christian Community Logo.jpg", // Corrected file name
        "Edinburgh Steiner School": "images/Edinburgh Steiner School Logo.png",
        "Fairhill Rise": "images/Ruskin Mill Logo.png", // Renamed from Ruskin Mill, keeping old logo name for now
        "Garvald Edinburgh": "images/Garvald Edinburgh Logo.png", // Corrected file name
        "Garvald West Linton": "images/Garvald West Linton Logo.jpg",
        "Camphill (Loch Arthur)": "images/Camphill Loch Arthur.jpg"
    };
    // --- End of Data Definitions ---


    const eventContainer = document.getElementById('eventContainer');
    // Removed: const cardViewBtn = document.getElementById('cardViewBtn');
    const diaryViewBtn = document.getElementById('diaryViewBtn');
    const organizationViewBtn = document.getElementById('organizationViewBtn');

    // Filter out past events, including events that started in the past but are ongoing
    const filterUpcomingEvents = (eventsArray) => {
        const now = new Date();
        now.setHours(0, 0, 0, 0); // Set to start of today for comparison

        const filtered = eventsArray.filter(event => {
            // Events marked as 'isOrganizationDetail' are for the organization view only and should not appear in Diary
            if (event.isOrganizationDetail) {
                return false;
            }

            // Handle recurring weekly events
            if (event.isRecurringWeekly) {
                // If it's a recurring event, it should always be considered upcoming for diary view
                // We'll handle the specific date generation in renderDiaryView
                return true;
            }

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

        // Add recurring events for a reasonable future period (e.g., next 6 months)
        const recurringEventsToAdd = [];
        const sixMonthsFromNow = new Date();
        sixMonthsFromNow.setMonth(today.getMonth() + 6);

        eventsArray.forEach(event => {
            if (event.isRecurringWeekly && event.dayOfWeek !== undefined && event.time) {
                let currentDate = new Date(today);
                // Find the first upcoming occurrence of the recurring event
                while (currentDate.getDay() !== event.dayOfWeek) {
                    currentDate.setDate(currentDate.getDate() + 1);
                }
                // If the first occurrence is today, and the time has passed, move to next week
                const [eventHour, eventMinute] = event.time.split(':').map(Number);
                const eventTimeToday = new Date(currentDate);
                eventTimeToday.setHours(eventHour, eventMinute, 0, 0);

                if (eventTimeToday < new Date() && currentDate.toDateString() === new Date().toDateString()) {
                    currentDate.setDate(currentDate.getDate() + 7); // Move to next week
                }


                while (currentDate <= sixMonthsFromNow) {
                    const newRecurringEvent = { ...event };
                    newRecurringEvent.date = currentDate.toISOString().slice(0, 10);
                    newRecurringEvent.id = `${event.id}-${newRecurringEvent.date}`; // Unique ID for each occurrence
                    recurringEventsToAdd.push(newRecurringEvent);
                    currentDate.setDate(currentDate.getDate() + 7); // Move to next week
                }
            }
        });
        return filtered.concat(recurringEventsToAdd);
    };


    const upcomingEvents = filterUpcomingEvents(allEvents); // Filter events once

    console.log("Upcoming Events Array:", upcomingEvents);


    // Helper to format dates consistently
    const formatDate = (dateString, endDateString = null) => {
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        // Handle null dateString for events like Etsy shop that don't have a date
        if (!dateString) {
            return '';
        }
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
    // Removed: The entire renderCardView function is removed.
    /*
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
    */

    // --- Render Diary View ---
    const renderDiaryView = (eventsToDisplay) => {
        eventContainer.innerHTML = '';
        eventContainer.className = 'diary-layout'; // Set class for diary layout

        // Filter out events that are specifically marked for organization view only
        const diaryEvents = eventsToDisplay.filter(event => !event.isOrganizationDetail);

        if (diaryEvents.length === 0) {
            eventContainer.innerHTML = '<p class="no-events-message">No upcoming events to display in Diary View.</p>';
            return;
        }

        // Create a map to hold events for each day, including multi-day events on each day they span
        const dailyEventsMap = new Map();
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Start of today

        diaryEvents.forEach(event => {
            if (event.isRecurringWeekly) {
                // Recurring events have already been expanded by filterUpcomingEvents,
                // so we treat each instance as a single-day event here.
                const eventDate = new Date(event.date);
                eventDate.setHours(0, 0, 0, 0);
                if (eventDate >= today) {
                    const dateKey = eventDate.toISOString().slice(0, 10); //YYYY-MM-DD
                    if (!dailyEventsMap.has(dateKey)) {
                        dailyEventsMap.set(dateKey, []);
                    }
                    dailyEventsMap.get(dateKey).push(event);
                }
            } else {
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
                const timeA = a.time ? a.time.split(' ')[0] : 'ZZZZ'; // Handle cases with no time, push to end
                const timeB = b.time ? b.time.split(' ')[0] : 'ZZZZ';
                return timeA.localeCompare(timeB);
            });

            dailyEventsMap.get(dateKey).forEach(event => {
                const listItem = document.createElement('li');
                let linkContent = event.link;
                if (event.link && event.link.startsWith('http')) {
                    linkContent = `<a href="${event.link}" target="_blank">More Information</a>`;
                } else if (event.link && event.link.startsWith('Contact')) {
                    linkContent = event.link; // Display as is if it's contact info
                }
                listItem.innerHTML = `
                        <p class="event-org-name-diary ${getOrgClass(event.organization)}">${event.organization}</p>
                        <h4 class="${getOrgClass(event.organization)}">${event.title}</h4>
                        <p><strong>Date:</strong> ${formatDate(event.date, event.endDate)}</p>
                        <p><strong>Time:</strong> ${event.time || 'TBD'}</p>
                        <p><strong>Location:</strong> ${event.location}</p>
                        ${event.description ? `<p class="event-description-diary">${event.description}</p>` : ''}
                        <p class="more-info-diary">${linkContent}</p>
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

        // Group ALL events by organization, including those for organization details
        const groupedEvents = new Map();
        allEvents.forEach(event => { // Use allEvents here to include isOrganizationDetail events
            if (!groupedEvents.has(event.organization)) {
                groupedEvents.set(event.organization, []);
            }
            groupedEvents.get(event.organization).push(event);
        });

        // Sort organizations alphabetically
        const sortedOrganizations = Array.from(groupedEvents.keys()).sort();

        sortedOrganizations.forEach(orgName => {
            const orgSection = document.createElement('div');
            orgSection.className = 'organization-section';

            const orgImage = organizationImages[orgName];
            if (orgImage) {
                orgSection.innerHTML += `<img src="${orgImage}" alt="${orgName} Logo" class="organization-logo">`;
            }

            orgSection.innerHTML += `<h2>${orgName}</h2>`;

            const orgEventList = document.createElement('ul');
            orgEventList.className = 'organization-event-list';

            // Filter for events relevant to the organization view (not past events unless they are recurring or 'isOrganizationDetail')
            const relevantOrgEvents = groupedEvents.get(orgName).filter(event => {
                if (event.isOrganizationDetail) {
                    return true; // Always show organization details
                }
                if (event.isRecurringWeekly) {
                    return true; // Always show recurring weekly events in org view description
                }
                const now = new Date();
                now.setHours(0, 0, 0, 0);
                const startDate = new Date(event.date);
                startDate.setHours(0, 0, 0, 0);
                return event.endDate ? new Date(event.endDate).setHours(23,59,59,999) >= now : startDate >= now;
            });


            // Sort events within the organization by date
            relevantOrgEvents.sort((a, b) => {
                // Push undated events (like Etsy shop) to the end
                if (!a.date && b.date) return 1;
                if (a.date && !b.date) return -1;
                if (!a.date && !b.date) return 0;
                return new Date(a.date) - new Date(b.date);
            });

            relevantOrgEvents.forEach(event => {
                const listItem = document.createElement('li');
                let eventDetails = '';

                if (event.isOrganizationDetail) {
                    // For organization-specific details like Etsy shop
                    eventDetails = `
                        <h4 class="${getOrgClass(event.organization)}">${event.title}</h4>
                        ${event.description ? `<p>${event.description}</p>` : ''}
                    `;
                } else if (event.isRecurringWeekly) {
                    // For recurring weekly events, state it's "Every Friday" etc.
                    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                    const day = dayNames[event.dayOfWeek];
                    eventDetails = `
                        <h4 class="${getOrgClass(event.organization)}">${event.title}</h4>
                        <p><strong>Frequency:</strong> Every ${day}</p>
                        <p><strong>Time:</strong> ${event.time || 'TBD'}</p>
                        <p><strong>Location:</strong> ${event.location}</p>
                        ${event.description ? `<p>${event.description}</p>` : ''}
                    `;
                }
                else {
                    // For regular upcoming events
                    eventDetails = `
                        <h4 class="${getOrgClass(event.organization)}">${event.title}</h4>
                        <p><strong>Date:</strong> ${formatDate(event.date, event.endDate)}</p>
                        <p><strong>Time:</strong> ${event.time || 'TBD'}</p>
                        <p><strong>Location:</strong> ${event.location}</p>
                        ${event.description ? `<p>${event.description}</p>` : ''}
                    `;
                }

                let linkContent = event.link;
                if (event.link && event.link.startsWith('http')) {
                    linkContent = `<p class="more-info"><a href="${event.link}" target="_blank">More Information</a></p>`;
                } else if (event.link && event.link.startsWith('Contact')) {
                    linkContent = `<p class="more-info">${event.link}</p>`; // Display as is if it's contact info
                } else {
                    linkContent = ''; // No link provided
                }

                listItem.innerHTML = `${eventDetails}${linkContent}`;
                orgEventList.appendChild(listItem);
            });

            orgSection.appendChild(orgEventList);
            eventContainer.appendChild(orgSection);
        });
    };


    // Event Listeners for view buttons
    diaryViewBtn.addEventListener('click', () => {
        renderDiaryView(upcomingEvents);
        diaryViewBtn.classList.add('active');
        organizationViewBtn.classList.remove('active');
        // Removed: cardViewBtn.classList.remove('active');
    });

    organizationViewBtn.addEventListener('click', () => {
        renderOrganizationView(allEvents); // Organization view displays ALL relevant org data, not just upcoming events
        organizationViewBtn.classList.add('active');
        diaryViewBtn.classList.remove('active');
        // Removed: cardViewBtn.classList.remove('active');
    });

    // Initial render based on default view (e.g., Diary View)
    renderDiaryView(upcomingEvents);
    diaryViewBtn.classList.add('active'); // Set initial active state for Diary View
});