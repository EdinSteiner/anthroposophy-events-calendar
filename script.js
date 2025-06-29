// ... (rest of your script.js code) ...

function renderOrganizationView(events) {
    const eventContainer = document.getElementById('eventContainer');
    eventContainer.innerHTML = '';
    eventContainer.className = 'organization-layout';

    // Group events by organization
    const groupedEvents = events.reduce((acc, event) => {
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


    for (const orgName in groupedEvents) {
        const organizationRow = document.createElement('div');
        organizationRow.className = 'organization-row';

        const orgImageSrc = organizationImages[orgName] || 'images/default_org.jpg'; // Use a default if no image is found
        const organizationNameColumn = document.createElement('div');
        organizationNameColumn.className = `organization-name-column title-${orgName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
        organizationNameColumn.innerHTML = `
            <img src="${orgImageSrc}" alt="${orgName} Logo">
            <h2>${orgName}</h2>
        `;
        organizationRow.appendChild(organizationNameColumn);

        const organizationEventsColumn = document.createElement('div');
        organizationEventsColumn.className = 'organization-events-column';

        if (groupedEvents[orgName].length > 0) {
            groupedEvents[orgName].sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort events by date
            groupedEvents[orgName].forEach(event => {
                const eventCard = document.createElement('div');
                eventCard.className = `event-card title-${event.organization.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
                eventCard.innerHTML = `
                    <h3>${event.title}</h3>
                    <p><strong>Date:</strong> ${new Date(event.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
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
    }
}

// ... (rest of your script.js code) ...
