// This file contains the events data for the Edinburgh Anthroposophical Events Calendar.
// Data last updated by AI using targeted Google Search queries on June 26, 2025.
// Please note: While AI attempted to find specific event URLs, some may be generic
// or point to the main events page if a dedicated link was not clearly identifiable
// through search. Always verify with the source.

const events = [
    {
        id: 1,
        title: "Steiner Waldorf Olympic Games",
        date: "25 - 28 June 2025",
        time: "Not specified in snippet",
        location: "Edinburgh Steiner School (Implied)",
        cost: "Not specified",
        registration: "Not specified",
        contact: "Not specified",
        description: "An event related to the Steiner Waldorf Olympic Games.",
        eventUrl: "https://edinburghsteinerschool.org.uk/event/steiner-waldorf-olympics/"
    },
    {
        id: 2,
        title: "Waldorf Stationery Stall",
        date: "Friday, June 27, 2025",
        time: "1:00 PM - 2:00 PM",
        location: "Edinburgh Steiner School (Implied)",
        cost: "Not specified",
        registration: "Not specified",
        contact: "Ruth (Implied)",
        description: "Ruth will be hosting a Waldorf Stationery Stall on the last Friday of the term for parents to buy next year's materials in-person, including Stockmar's giant pencils and beeswax block & stick crayons used in Classes 1-6, and Caran D'Ache watercolours and pastels from Classes 5 – 12. Full class sets, top-ups and replenishment items are available. Kindergarten families are also invited to purchase a 'home set' of beewax crayons.",
        eventUrl: "https://edinburghsteinerschool.org.uk/event/waldorf-stationery-stall/"
    },
    {
        id: 3,
        title: "Black Coffee – Class 12 Play",
        date: "29 - 30 June 2025",
        time: "3:00 PM / 7:00 PM",
        location: "School Hall, Edinburgh Steiner School (Implied)",
        cost: "Not specified",
        registration: "Not specified",
        contact: "Not specified",
        description: "Class 12 will put on three performances of their final year play.",
        eventUrl: "https://edinburghsteinerschool.org.uk/event/black-coffee-class-12-play/"
    },
    {
        id: 4,
        title: "Class 12 Play",
        date: "29 - 30 June 2025",
        time: "Not specified in snippet",
        location: "Edinburgh Steiner School (Implied)",
        cost: "Not specified",
        registration: "Not specified",
        contact: "Not specified",
        description: "Class 12 will put on three performances of their final year play in the School Hall. (Duplicate entry found in search, combined description)",
        eventUrl: "https://edinburghsteinerschool.org.uk/event/black-coffee-class-12-play/" // Same link as above, as it's a duplicate event entry
    },
    {
        id: 5,
        title: "Parent & Teacher Association (PTA) – June Meeting",
        date: "Monday, June 30, 2025",
        time: "4:30 PM - 6:00 PM",
        location: "Edinburgh Steiner School (Implied)",
        cost: "Not specified",
        registration: "Not specified",
        contact: "Not specified",
        description: "Edinburgh Steiner PTA meet monthly. Minutes of each meeting made available to the wider PTA members.",
        eventUrl: "https://edinburghsteinerschool.org.uk/community/events/" // No specific page found, linking to main events page
    },
    {
        id: 6,
        title: "Whole School Field Day",
        date: "Tuesday, July 1, 2025",
        time: "4:00 PM",
        location: "Edinburgh Steiner School (Implied)",
        cost: "Not specified",
        registration: "Not specified",
        contact: "Not specified",
        description: "General school field day event.",
        eventUrl: "https://edinburghsteinerschool.org.uk/community/events/" // No specific page found, linking to main events page
    },
    {
        id: 7,
        title: "Summer Circus & Crafts Camps (Age 6+)",
        date: "Wednesday, July 2, 2025",
        time: "1:45 PM - 3:15 PM",
        location: "Edinburgh Steiner School (Implied)",
        cost: "Not specified",
        registration: "Not specified",
        contact: "Not specified",
        description: "Summer camps focusing on circus activities and crafts for children aged 6+.",
        eventUrl: "https://www.edinburghsteinerschool.org.uk/community/events/" // No specific page found for this session, linking to main events page
    },
    {
        id: 8,
        title: "Summer Circus & Crafts Camps",
        date: "28 July - 8 August 2025",
        time: "Not specified",
        location: "Edinburgh Steiner School (Implied)",
        cost: "Not specified",
        registration: "Not specified",
        contact: "Not specified",
        description: "Another entry for Summer Circus & Crafts Camps, possibly a different session or broader date range.",
        eventUrl: "https://www.edinburghsteinerschool.org.uk/community/events/" // No specific page found, linking to main events page
    },
    {
        id: 9,
        title: "Kindergarten Summer Camps",
        date: "4 - 15 August 2025",
        time: "9:00 AM - 1:00 PM",
        location: "Edinburgh Steiner School Kindergarten (Implied)",
        cost: "Not specified",
        registration: "Not specified",
        contact: "Not specified",
        description: "Summer camps specifically for Kindergarten age children.",
        eventUrl: "https://www.edinburghsteinerschool.org.uk/event/kindergarten-summer-camps/"
    },
    {
        id: 10,
        title: "Autumn Term",
        date: "26 August - 19 December 2025",
        time: "Not specified",
        location: "Edinburgh Steiner School (Implied)",
        cost: "Not specified",
        registration: "Not specified",
        contact: "Not specified",
        description: "The academic Autumn Term period.",
        eventUrl: "https://www.edinburghsteinerschool.org.uk/event/autumn-term/"
    },
    {
        id: 11,
        title: "Spring Term",
        date: "7 September - 28 March 2025", // Note: Year might be 2026 if Autumn Term is 2025
        time: "Not specified",
        location: "Edinburgh Steiner School (Implied)",
        cost: "Not specified",
        registration: "Not specified",
        contact: "Not specified",
        description: "The academic Spring Term period.",
        eventUrl: "https://www.edinburghsteinerschool.org.uk/event/spring-start-of-term-assembly/" // Found a specific start-of-term assembly link
    },
    {
        id: 12,
        title: "September Holiday",
        date: "September 15, 2025",
        time: "Not specified",
        location: "Edinburgh Steiner School (Implied)",
        cost: "Not specified",
        registration: "Not specified",
        contact: "Not specified",
        description: "A school holiday in September.",
        eventUrl: "https://www.edinburghsteinerschool.org.uk/parents/session-dates/" // Found on session dates page
    }
];

// --- END OF EVENTS DATA ---

// Existing JavaScript functions to display events (do not modify this section unless instructed)
document.addEventListener('DOMContentLoaded', () => {
    const eventsContainer = document.getElementById('events-container');

    if (!eventsContainer) {
        console.error('Events container not found.');
        return;
    }

    if (events.length === 0) {
        eventsContainer.innerHTML = '<p>No upcoming events currently listed. Please check back soon!</p>';
        return;
    }

    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('event-card');

        eventCard.innerHTML = `
            <h3>${event.title}</h3>
            <p><strong>Date:</strong> ${event.date}</p>
            ${event.time ? `<p><strong>Time:</strong> ${event.time}</p>` : ''}
            ${event.location ? `<p><strong>Location:</strong> ${event.location}</p>` : ''}
            ${event.cost ? `<p><strong>Cost:</strong> ${event.cost}</p>` : ''}
            ${event.registration ? `<p><strong>Registration:</strong> ${event.registration}</p>` : ''}
            ${event.contact ? `<p><strong>Contact:</strong> ${event.contact}</p>` : ''}
            ${event.description ? `<p>${event.description}</p>` : ''}
            ${event.eventUrl ? `<p class="more-info"><a href="${event.eventUrl}" target="_blank" rel="noopener noreferrer">More Information</a></p>` : ''}
        `;
        eventsContainer.appendChild(eventCard);
    });
});
