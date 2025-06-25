document.addEventListener('DOMContentLoaded', () => {
    const eventListDiv = document.getElementById('event-list');
    const lastUpdatedSpan = document.getElementById('last-updated-date');

    // --- THIS IS THE SECTION YOU WILL REPLACE WEEKLY ---
    // Copy the updated 'events' array I give you and paste it here.
    const events = [
        {
            id: 1,
            title: "Anthroposophical Study Group: 'The Philosophy of Freedom'",
            date: "Saturday, July 6, 2025",
            time: "10:00 AM - 12:00 PM",
            location: "Edinburgh Anthroposophical Centre (example address: 123 Main Street, Edinburgh EH1 2AB)",
            cost: "Donation welcome",
            registration: "No registration required, just drop in.",
            contact: "info@anthroposophyedinburgh.org",
            description: "Ongoing study group exploring Rudolf Steiner's 'The Philosophy of Freedom'. All welcome, no prior knowledge needed. This is a great opportunity to deepen your understanding of anthroposophical principles."
        },
        {
            id: 2,
            title: "Edinburgh Steiner School Summer Festival",
            date: "Saturday, July 13, 2025",
            time: "11:00 AM - 4:00 PM",
            location: "Edinburgh Steiner School, 60 Spylaw Road, Edinburgh EH10 5BR",
            cost: "Free entry, some activities may have a small charge",
            registration: "N/A",
            contact: "schooloffice@edinburghsteinerschool.org.uk",
            description: "A fun-filled day for families with crafts, games, food stalls, and performances. Enjoy live music and a vibrant community atmosphere."
        },
        {
            id: 3,
            title: "Biodynamic Gardening Workshop: 'Compost Making'",
            date: "Sunday, July 20, 2025",
            time: "1:00 PM - 4:00 PM",
            location: "Garvald Edinburgh (check website for specific location within Garvald)",
            cost: "£15 (includes materials)",
            registration: "Register by July 15th via email: workshops@garvaldedinburgh.org.uk",
            contact: "workshops@garvaldedinburgh.org.uk",
            description: "Practical workshop on creating healthy compost using biodynamic principles. Learn sustainable gardening techniques for your home or community."
        }
        // When I give you new data, you'll paste more event objects here.
    ];
    // --- END OF SECTION TO REPLACE ---


    function renderEvents() {
        eventListDiv.innerHTML = ''; // Clear existing events
        if (events.length === 0) {
            eventListDiv.innerHTML = '<p>No upcoming events found at this time. Please check back soon or contact local organizations directly for information.</p>';
        } else {
            events.forEach(event => {
                const eventCard = document.createElement('div');
                eventCard.classList.add('event-card');
                eventCard.innerHTML = `
                    <h3>${event.title}</h3>
                    <p><strong>Date:</strong> ${event.date}</p>
                    <p><strong>Time:</strong> ${event.time}</p>
                    <p><strong>Location:</strong> ${event.location}</p>
                    <a href="#" class="details-popup" data-event-id="${event.id}">View Details</a>
                `;
                eventListDiv.appendChild(eventCard);
            });
        }

        // Add event listeners for pop-ups
        document.querySelectorAll('.details-popup').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Stop the link from navigating
                const eventId = parseInt(e.target.dataset.eventId);
                const event = events.find(e => e.id === eventId);
                if (event) {
                    showEventDetails(event);
                }
            });
        });

        // Set the last updated date
        lastUpdatedSpan.textContent = new Date().toLocaleDateString('en-GB', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    function showEventDetails(event) {
        const popupOverlay = document.createElement('div');
        popupOverlay.classList.add('popup-overlay');
        popupOverlay.innerHTML = `
            <div class="popup-content">
                <span class="close-button">&times;</span>
                <h2>${event.title}</h2>
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Time:</strong> ${event.time}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                <p><strong>Cost:</strong> ${event.cost}</p>
                <p><strong>How to Register:</strong> ${event.registration}</p>
                <p><strong>Contact:</strong> ${event.contact}</p>
                <p><strong>Description:</strong> ${event.description}</p>
            </div>
        `;
        document.body.appendChild(popupOverlay);
        popupOverlay.style.display = 'flex'; // Show the popup

        // Close button functionality
        popupOverlay.querySelector('.close-button').addEventListener('click', () => {
            document.body.removeChild(popupOverlay);
        });

        // Close when clicking outside the popup content
        popupOverlay.addEventListener('click', (e) => {
            if (e.target === popupOverlay) { // Only close if clicked directly on the overlay, not the content
                document.body.removeChild(popupOverlay);
            }
        });
    }

    renderEvents(); // Initial rendering of events when the page loads
});