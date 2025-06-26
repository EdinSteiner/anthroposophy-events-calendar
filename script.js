// This file contains the events data for the Edinburgh Anthroposophical Events Calendar.
// Data last updated by AI using Google Search results on June 26, 2025.
// Please note: Details are based on search snippets and may not be exhaustive or
// reflect the absolute latest information. Always verify with the source.

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
        description: "An event related to the Steiner Waldorf Olympic Games."
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
        description: "Ruth will be hosting a Waldorf Stationery Stall on the last Friday of the term for parents to buy next [items for school]."
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
        description: "Class 12 will put on three performances of their final year play."
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
        description: "Class 12 will put on three performances of their final year play in the School Hall. (Duplicate entry found in search, combined description)"
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
        description: "Edinburgh Steiner PTA meet monthly. Minutes of each meeting made available to the wider PTA members."
    },
    {
        id: 6,
        title: "Whole School Field Day",
        date: "Tuesday, July 1, 2025", // Based on search snippet date sequence
        time: "4:00 PM",
        location: "Edinburgh Steiner School (Implied)",
        cost: "Not specified",
        registration: "Not specified",
        contact: "Not specified",
        description: "General school field day event."
    },
    {
        id: 7,
        title: "Summer Circus & Crafts Camps (Age 6+)",
        date: "Wednesday, July 2, 2025", // Based on search snippet date sequence
        time: "1:45 PM - 3:15 PM",
        location: "Edinburgh Steiner School (Implied)",
        cost: "Not specified",
        registration: "Not specified",
        contact: "Not specified",
        description: "Summer camps focusing on circus activities and crafts for children aged 6+."
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
        description: "Another entry for Summer Circus & Crafts Camps, possibly a different session or broader date range."
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
        description: "Summer camps specifically for Kindergarten age children."
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
        description: "The academic Autumn Term period."
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
        description: "The academic Spring Term period."
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
        description: "A school holiday in September."
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
        `;
        eventsContainer.appendChild(eventCard);
    });
});
