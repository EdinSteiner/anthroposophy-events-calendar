document.addEventListener('DOMContentLoaded', () => {
    // --- Event Data ---
    const allEvents = [
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
            "organization": "Tiphereth",
            "title": "Summer Festival",
            "date": "2025-06-22",
            "time": "11:00 - 15:00",
            "location": "Tiphereth Community Garden",
            "description": "A celebration of summer with music, stalls, and garden tours.",
            "link": "https://www.tiphereth.org.uk/"
        },
        {
            "id": 3,
            "organization": "Garvald Edinburgh",
            "title": "Open Studios Exhibition",
            "date": "2025-07-05",
            "time": "14:00 - 18:00",
            "location": "Garvald Workshops, Orwell Arts Building",
            "description": "Showcasing the creative work of Garvald service users.",
            "link": "https://www.garvaldedinburgh.org.uk/"
        },
        {
            "id": 4,
            "organization": "Edinburgh Steiner School",
            "title": "Michaelmas Festival",
            "date": "2025-09-29",
            "time": "15:00 - 17:00",
            "location": "Edinburgh Steiner School Hall",
            "description": "A traditional celebration of courage and inner strength.",
            "link": "https://www.edinburghsteinerschool.org/"
        },
        {
            "id": 5,
            "organization": "Tiphereth",
            "title": "Autumn Wreath Making Workshop",
            "date": "2025-10-15",
            "time": "18:00 - 20:00",
            "location": "Tiphereth Workshop",
            "description": "Learn to create beautiful autumn wreaths with natural materials.",
            "link": "https://www.tiphereth.org.uk/"
        },
        {
            "id": 6,
            "organization": "Camphill Blair Drummond",
            "title": "Farm Open Day",
            "date": "2025-08-10",
            "time": "10:00 - 16:00",
            "location": "Camphill Blair Drummond Farm",
            "description": "Explore our biodynamic farm, meet the animals, and enjoy fresh produce.",
            "link": "https://www.camphillblairdrummond.org.uk/"
        },
         {
            "id": 7,
            "organization": "Camphill (Loch Arthur)",
            "title": "Cheese & Bread Tasting",
            "date": "2025-09-01",
            "time": "14:00 - 16:00",
            "location": "Loch Arthur Farm Shop",
            "description": "Sample our award-winning organic cheeses and artisan breads.",
            "link": "https://www.locharthur.org.uk/"
        },
        {
            "id": 8,
            "organization": "Edinburgh Christian Community",
            "title": "Advent Garden",
            "date": "2025-11-30",
            "time": "17:00 - 18:30",
            "location": "Edinburgh Christian Community Church",
            "description": "A quiet contemplative walk into the heart of Advent.",
            "link": "https://www.christiancommunity.org.uk/edinburgh/"
        },
        {
            "id": 9,
            "organization": "Edinburgh Steiner School",
            "title": "Winter Fair",
            "date": "2025-11-23",
            "time": "10:00 - 16:00",
            "location": "Edinburgh Steiner School Campus",
            "description": "Handmade gifts, festive food, and cosy winter activities.",
            "link": "https://www.edinburghsteinerschool.org/"
        },
        {
            "id": 10,
            "organization": "Garvald Edinburgh",
            "title": "Christmas Market",
            "date": "2025-12-07",
            "time": "12:00 - 17:00",
            "location": "Garvald Workshops, Orwell Arts Building",
            "description": "Unique handcrafted gifts perfect for the festive season.",
            "link": "https://www.garvaldedinburgh.org.uk/"
        },
        // --- Added example events for new organizations based on your logo list ---
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
            "link": "https://www.garvaldwestlinton.org.uk/"
        }
    ];

    // --- Organization Images (UPDATED to your latest local paths, including Garvald Edinburgh) ---
    const organizationImages = {
        "Camphill Blair Drummond": "images/Camphill Blair Drummond Logo.png",
        "Camphill Corbenic": "images/Camphill Corbenic Logo.avif",
        "Tiphereth": "images/Camphill Tiphereth Logo.png",
        "Edinburgh Steiner School": "images/Edinburgh Steiner School Logo.png",
        "Garvald West Linton": "images/Garvald West Linton Logo.jpg",
        "Ruskin Mill": "images/Ruskin Mill Logo.png",
        "Edinburgh Christian Community": "images/Christian Community Logo.png", // Assuming .png, adjust if different
        "Garvald Edinburgh": "images/garvald edinburgh logo.png", // NEW: Added this based on your input
        "Camphill (Loch Arthur)": "https://www.locharthur.org.uk/wp-content/uploads/2018/06/LochArthurLogo.jpg" // Keeping this external as no local file provided
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
                        <p class="event-time-diary"><strong>Time:</strong> ${event.time}</p>
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
            const orgHomePageLink = groupedEvents[orgName].length > 0 ? groupedEvents[orgName][0].link : '#';

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
