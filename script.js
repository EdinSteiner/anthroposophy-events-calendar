body {
    font-family: Arial, sans-serif;
    margin: 20px;
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
}

header {
    text-align: center;
    margin-bottom: 30px;
    padding: 20px 0;
    background-color: #fff;
    border-bottom: 1px solid #eee;
}

h1 {
    color: #2c3e50;
    font-size: 2.5em;
}

/* Styles for the events container to make cards display side-by-side */
#events-container {
    display: flex;
    flex-wrap: wrap; /* Allows cards to wrap to the next line */
    justify-content: center; /* Centers cards when there aren't enough to fill a row */
    gap: 20px; /* Space between event cards */
    padding: 20px;
    max-width: 1200px; /* Max width for the container */
    margin: 0 auto; /* Center the container on the page */
}

.event-card {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    padding: 20px;
    flex: 1 1 calc(33.333% - 40px); /* Allows 3 cards per row, accounting for gap */
    /* flex-grow, flex-shrink, flex-basis */
    min-width: 280px; /* Minimum width before wrapping */
    max-width: 380px; /* Max width to prevent cards from becoming too wide on large screens */
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
    display: flex; /* Use flexbox for internal layout of card content */
    flex-direction: column; /* Stack content vertically */
    justify-content: space-between; /* Push "More Info" link to bottom if content varies */
}

.event-card h3 {
    margin-top: 0;
    color: #3498db; /* A blue color for headings */
    font-size: 1.4em;
    line-height: 1.3;
    margin-bottom: 10px;
}

.event-card h3 a {
    text-decoration: none;
    color: inherit; /* Inherit color from h3 */
    display: block; /* Make the whole heading area clickable */
}

.event-card h3 a:hover {
    text-decoration: underline;
}

.event-card p {
    margin: 5px 0;
    font-size: 0.95em;
}

.event-card strong {
    color: #555;
}

.event-description {
    font-size: 0.9em;
    color: #666;
    margin-top: 10px;
    flex-grow: 1; /* Allows description to take up available space */
}

.more-info {
    text-align: right;
    margin-top: 15px; /* Space above the more info link */
}

.more-info a {
    display: inline-block;
    background-color: #3498db;
    color: #fff;
    padding: 8px 15px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 0.9em;
    transition: background-color 0.3s ease;
}

.more-info a:hover {
    background-color: #2980b9;
}

.event-school-name {
    font-size: 0.85em;
    color: #888;
    text-align: right;
    margin-bottom: 5px;
}

footer {
    text-align: center;
    margin-top: 40px;
    padding: 20px 0;
    background-color: #fff;
    border-top: 1px solid #eee;
    color: #777;
    font-size: 0.85em;
}

/* Basic responsiveness for smaller screens */
@media (max-width: 768px) {
    .event-card {
        flex: 1 1 calc(50% - 30px); /* 2 cards per row on medium screens */
    }
}

@media (max-width: 480px) {
    .event-card {
        flex: 1 1 100%; /* 1 card per row on small screens */
    }
}
