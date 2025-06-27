document.addEventListener('DOMContentLoaded', () => {
    // --- Event Data (KEEP YOUR EXISTING EVENT DATA HERE) ---
    // If you've added new events for Camphill Corbenic, Garvald West Linton,
    // or Ruskin Mill, ensure they are in this array.
    const allEvents = [
        // Your existing event objects go here.
        // Example:
        {
            "id": 1,
            "organization": "Edinburgh Steiner School",
            "title": "Spring Fair",
            "date": "2025-05-18",
            "time": "10:00 - 16:00",
            "location": "Edinburgh Steiner School Campus",
            "description": "Our annual Spring Fair with crafts, food, and activities for all ages.",
            "link": "https://www.edinburghsteinerschool.org/"
        },
        {
            "id": 2,
            "organization": "Tiphereth", // Match this to your organization name in events
            "title": "Summer Festival",
            "date": "2025-06-22",
            "time": "11:00 - 15:00",
            "location": "Tiphereth Community Garden",
            "description": "A celebration of summer with music, stalls, and garden tours.",
            "link": "https://www.tiphereth.org.uk/"
        },
        // ... and so on for all your events, including any new ones
        {
            "id": 11,
            "organization": "Camphill Corbenic",
            "title": "Harvest Festival",
            "date": "2025-09-20",
            "time": "10:00 - 14:00",
            "location": "Corbenic Camphill Community",
            "description": "A day of gratitude for the harvest, with crafts and farm produce.",
            "link": "https://www.corbeniccamphill.co.uk/"
        },
        {
            "id": 12,
            "organization": "Ruskin Mill",
            "title": "Craftsmanship Showcase",
            "date": "2025-10-01",
            "time": "11:00 - 16:00",
            "location": "Ruskin Mill College",
            "description": "Exhibition of students' work in crafts and biodynamic agriculture.",
            "link": "https://www.ruskinmill.org.uk/"
        },
        {
            "id": 13,
            "organization": "Garvald West Linton",
            "title": "Winter Craft Market",
            "date": "2025-11-15",
            "time": "10:00 - 15:00",
            "location": "Garvald West Linton Workshops",
            "description": "Handmade gifts and produce from our workshops.",
            "link": "https://www.garvaldwestlinton.org.uk/" // Placeholder, please update with actual link
        }
    ];

    // --- Organization Images (UPDATED to your new local paths) ---
    const organizationImages = {
        "Camphill Blair Drummond": "images/Camphill Blair Drummond Logo.png",
        "Camphill Corbenic": "images/Camphill Corbenic Logo.avif",
        "Tiphereth": "images/Camphill Tiphereth Logo.png", // Updated based on your new name
        "Edinburgh Steiner School": "images/Edinburgh Steiner School Logo.png",
        "Garvald West Linton": "images/Garvald West Linton Logo.jpg",
        "Ruskin Mill": "images/Ruskin Mill Logo.png",
        // IMPORTANT: If "Christian Community Logo" is missing an extension, please add it (e.g., .png or .jpg)
        // For example, if it's Christian Community Logo.png, use that.
        "Edinburgh Christian Community": "images/Christian Community Logo", // ***Check filename extension***
        "Garvald Edinburgh": "images/Garvald West Linton Logo.jpg", // If Garvald Edinburgh and Garvald West Linton are the same, use this. Otherwise, upload a distinct Garvald Edinburgh logo.
        "Camphill (Loch Arthur)": "https://www.locharthur.org.uk/wp-content/uploads/2018/06/LochArthurLogo.jpg" // Keeping this external as no new local file provided
    };
    // --- End of Data Definitions ---

    // ... (rest of your script.js code remains the same) ...

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
                const timeA = a.
