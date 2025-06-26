// This file contains the events data for the Edinburgh Anthroposophical Events Calendar.
// Data last updated by AI using targeted Google Search queries and user feedback on June 26, 2025.
// Please note: While AI attempted to find specific event URLs, some may be generic
// or point to the main events page if a dedicated link was not clearly identifiable
// through search. Always verify with the source.

const events = [
    {
        id: 1,
        title: "Steiner Waldorf Olympic Games",
        date: "25 - 28 June 2025",
        time: "Not specified",
        location: "Edinburgh Steiner School",
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
        location: "Edinburgh Steiner School",
        cost: "Not specified",
        registration: "Not specified",
        contact: "Ruth",
        description: "Ruth will be hosting a Waldorf Stationery Stall on the last Friday of the term for parents to buy next year's materials in-person, including Stockmar's giant pencils and beeswax block & stick crayons used in Classes 1-6, and Caran D'Ache watercolours and pastels from Classes 5 – 12. Full class sets, top-ups and replenishment items are available. Kindergarten families are also invited to purchase a 'home set' of beewax crayons.",
        eventUrl: "https://edinburghsteinerschool.org.uk/event/waldorf-stationery-stall/"
    },
    {
        id: 3,
        title: "Black Coffee – Class 12 Play",
        date: "29 - 30 June 2025",
        time: "3:00 PM / 7:00 PM",
        location: "Edinburgh Steiner School",
        cost: "Not specified",
        registration: "Not specified",
        contact: "Not specified",
        description: "Class 12 will put on three performances of their final year play.",
        eventUrl: "https://edinburghsteinerschool.org.uk/event/black-coffee-class-12-play/"
    },
    {
        id: 7, // Consolidated ID
        title: "Summer Circus & Crafts Camps (Age 6+)",
        date: "Multiple sessions: July 2 - August 8, 2025 (Check event page for specific dates and times)",
        time: "Varies",
        location: "Edinburgh Steiner School",
        cost: "Not specified",
        registration: "summer.camp@edinburghsteinerschool.org.uk (email)",
        contact: "Peter Sheen and Yifat Leibner",
        description: "Summer camps focusing on circus activities and crafts for children aged 6+. Delivered independently of the School by Steiner Waldorf Teachers Peter Sheen and Yifat Leibner, on campus. Includes Games, Circus Arts, and Crafts. Book via email.",
        eventUrl: "https://edinburghsteinerschool.org.uk/event/summer-camp/"
    },
    {
        id: 9,
        title: "Kindergarten Summer Camps",
        date: "4 - 15 August 2025",
        time: "9:00 AM - 1:00 PM",
        location: "Edinburgh Steiner School",
        cost: "Not specified",
        registration: "Not specified",
        contact: "Not specified",
        description: "Summer camps specifically for Kindergarten age children. A week of play and summertime fun, with a gentle rhythm of stories, songs, crafts, and free play inside and out.",
        eventUrl: "https://www.edinburghsteinerschool.org.uk/event/kindergarten-summer-camps/"
    }
];

// --- END OF EVENTS DATA ---

// Existing JavaScript functions to display events
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
            <p class="event-school-name">Edinburgh Steiner School</p>
            <h3>
                ${event.eventUrl ? `<a href="${event.eventUrl}" target="_blank" rel="noopener noreferrer">${event.title}</a>` : event.title}
            </h3>
            <p><strong>Date:</strong> ${event.date}</p>
            ${event.time && event.time !== "Not specified" ? `<p><strong>Time:</strong> ${event.time}</p>` : ''}
            ${event.cost && event.cost !== "Not specified" ? `<p><strong>Cost:</strong> ${event.cost}</p>` : ''}
            ${event.registration && event.registration !== "Not specified" ? `<p><strong>Registration:</strong> ${event.registration}</p>` : ''}
            ${event.contact && event.contact !== "Not specified" ? `<p><strong>Contact:</strong> ${event.contact}</p>` : ''}
            ${event.description ? `<p class="event-description">${event.description}</p>` : ''}
            ${event.eventUrl ? `<p class="more-info"><a href="${event.eventUrl}" target="_blank" rel="noopener noreferrer">More Information</a></p>` : ''}
        `;
        eventsContainer.appendChild(eventCard);
    });
});
