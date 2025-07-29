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
            "s": "Edinburgh Steiner School",
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
            "s": "Edinburgh Steiner School",
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
            "s": "Edinburgh Steiner School",
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
            "s": "Edinburgh Steiner School",
            "title": "Early Years Parent Education Evening: Rhythm, Repetition, Reverence",
            "date": "2025-09-18",
            "time": "19:00 - 21:00",
            "location": "Edinburgh Steiner School Campus",
            "description": "An evening for parents focusing on rhythm, repetition, and reverence in early years education.",
            "link": "https://www.edinburghsteinerschool.org.uk/event/early-years-parent-education-evening-rhythm-repetition-reverence/"
        },
        {
            "id": 46, // New ID
            "s": "Edinburgh Steiner School",
            "title": "El Mercado Market",
            "date": "2025-10-04", // Corrected date format
            "time": "11:00 - 16:00", // Corrected time
            "location": "Edinburgh Steiner School Campus",
            "description": "A vibrant market featuring various stalls.",
            "link": "https://www.edinburghsteinerschool.org.uk/event/el-mercado-market/"
        },
        {
            "id": 73, // New ID for Christmas Market
            "s": "Edinburgh Steiner School",
            "title": "Christmas Market",
            "date": "2025-11-22",
            "time": "11:00 - 16:00",
            "location": "Edinburgh Steiner School Campus",
            "description": "A vibrant market featuring various stalls.",
            "link": "https://www.edinburghsteinerschool.org.uk/event/christmas-market-2024/"
        },
        // NEW ITEM: Edinburgh Steiner Education Course
        {
            "id": 97, // New unique ID
            "s": "Edinburgh Steiner School",
            "title": "Edinburgh Steiner Education Course. More information", // Sentence removed as requested
            "date": "2025-09-12",
            "time": "Starts",
            "location": "Edinburgh Steiner School",
            "description": null, // Description is now null as the relevant sentence was removed from the title
            "link": "https://www.edinburghsteinerschool.org.uk/teacher-development/"
        },

        // --- Edinburgh Christian Community (Facebook link) ---
        {
            "id": 4,
            "s": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man",
            "date": "2025-07-06",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 8,
            "s": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man",
            "date": "2025-07-13",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 11,
            "s": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man",
            "date": "2025-07-20",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 16, // New ID
            "s": "Edinburgh Christian Community",
            "title": "Devotional Gathering",
            "date": "2025-07-27",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Devotional Gathering.",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 17, // New ID
            "s": "Edinburgh Christian Community",
            "title": "Tom Ravetz's Visit and Congregational Meeting",
            "date": "2025-08-02",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Act of Consecration of Man at 10am followed by a short break and the congregational meeting.",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 47, // New ID
            "s": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man",
            "date": "2025-08-03",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 48, // New ID
            "s": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man",
            "date": "2025-08-10",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 49, // New ID
            "s": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man",
            "date": "2025-08-17",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 50, // New ID
            "s": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man",
            "date": "2025-08-24",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 51, // New ID
            "s": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man",
            "date": "2025-08-31",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },

        // --- Camphill Blair Drummond (from recent Google Search tool results) ---
        {
            "id": 62, // New ID for the generic link
            "s": "Camphill Blair Drummond",
            "title": "For current information, please click here",
            "date": null,
            "time": null,
            "location": null,
            "description": null,
            "link": "https://camphillblairdrummond.org.uk/news",
            "issDetail": true // Custom property to signify it's for org view only
        },
        {
            "id": 18,
            "s": "Camphill Blair Drummond",
            "title": "Vocal Recital: Un-Ravel-ing the Source Material",
            "date": "2025-07-19",
            "time": "To be confirmed",
            "location": "Camphill Blair Drummond, Stirling",
            "description": "Vocal recital by Claire Haslin and Phil Gault. Check Ticketsource for details.",
            "link": "https://www.ticketsource.co.uk/whats-on/stirling/camphill-blair-drummond"
        },

        // --- Camphill Corbenic (removed "New Day Service" and "Community Barn Project") ---
        {
            "id": 63, // New ID for the generic link
            "s": "Camphill Corbenic",
            "title": "For current information, please click here",
            "date": null,
            "time": null,
            "location": null,
            "description": null,
            "link": "https://www.corbeniccamphill.co.uk/newsletter",
            "issDetail": true // Custom property to signify it's for org view only
        },
        {
            "id": 61, // New ID for Corbenic Community Shop & Café
            "s": "Camphill Corbenic",
            "title": "Corbenic Community Shop & Café",
            "date": null, // This does not go in Diary view
            "time": "Monday – Sunday, 9:30 AM – 4:00 PM",
            "location": "Corbenic Camphill Community",
            "description": "Visit our community shop and café for local produce and a warm welcome.",
            "link": "https://www.corbeniccamphill.co.uk/corbenic-shop",
            "issDetail": true // Custom property to signify it's for org view only
        },


        // --- Tiphereth Edinburgh (No specific upcoming events found via search) ---
        {
            "id": 64, // New ID for the generic link
            "s": "Tiphereth",
            "title": "For current information, please click here",
            "date": null,
            "time": null,
            "location": null,
            "description": null,
            "link": "https://www.facebook.com/tiphereth.camphilledinburgh",
            "issDetail": true // Custom property to signify it's for org view only
        },
        {
            "id": 21,
            "s": "Tiphereth",
            "title": "Open Morning",
            "date": "2025-07-30",
            "time": "10:00 - 13:00", // Updated time
            "location": "Tiphereth Community",
            "description": "Open Morning at Tiphereth. To book your place, please contact Lucy.Robertson@tiphereth.org.uk", // Updated description
            "link": "https://www.tiphereth.org.uk/"
        },
        // ADDITION 1.1: Tiphereth Etsy Shop for s view
        {
            "id": 54, // New ID for Etsy shop
            "s": "Tiphereth",
            "title": "Tiphereth Etsy Shop",
            "date": null, // This does not go in Diary view, so no specific date
            "time": null,
            "location": "Online",
            "description": "Browse and purchase handcrafted items made in Tiphereth workshops.",
            "link": "https://www.etsy.com/uk/shop/printstudiotiphereth",
            "issDetail": true // Custom property to signify it's for org view only
        },
        // ADDITION 1.2: Tiphereth Pop-up Shop
        {
            "id": 55, // New ID for pop-up shop
            "s": "Tiphereth",
            "title": "New Pop-up Shop Opening",
            "date": "2025-07-11",
            "time": "To be confirmed", // Assuming time not specified, or can be added if known
            "location": "37-39 Torphin Road, Edinburgh, EH13 0PG",
            "description": "Tiphereth is opening a new pop-up shop offering a variety of handcrafted items made in their workshops, including print studio products.",
            "link": "https://www.tiphereth.org.uk/" // Link to Tiphereth's main site for general info
        },

        // --- Garvald West Linton (from recent Google Search tool results) ---
        {
            "id": 65, // New ID for the generic link
            "s": "Garvald West Linton",
            "title": "For current information, please click here",
            "date": null,
            "time": null,
            "location": null,
            "description": null,
            "link": "https://garvaldwestlinton.org.uk/events/",
            "issDetail": true // Custom property to signify it's for org view only
        },
        {
            "id": 22,
            "s": "Garvald West Linton",
            "title": "Community Gathering & Project",
            "date": "2025-07-04",
            "time": "09:45 - 12:30",
            "location": "Garvald West Linton Hall",
            "description": "Regular community gathering and project work.",
             "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 23,
            "s": "Garvald West Linton",
            "title": "Community Gathering & Project",
            "date": "2025-07-18",
            "time": "09:45 - 12:30",
            "location": "Garvald West Linton Hall",
            "description": "Regular community gathering and project work.",
             "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 24,
            "s": "Garvald West Linton",
            "title": "Community Gathering & Project",
            "date": "2025-08-01",
            "time": "09:45 - 12:30",
            "location": "Garvald West Linton Hall",
            "description": "Regular community gathering and project work.",
             "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 25,
            "s": "Garvald West Linton",
            "title": "Michaelmas/Harvest Lunch & Event",
            "date": "2025-09-29",
            "time": "Afternoon",
            "location": "Garvald West Linton",
            "description": "Annual Michaelmas/Harvest celebration.",
             "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 26,
            "s": "Garvald West Linton",
            "title": "Halloween Party",
            "date": "2025-10-31",
            "time": "To be confirmed",
            "location": "Garvald West Linton",
            "description": "Residents and staff to dress up for Halloween.",
             "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 27,
            "s": "Garvald West Linton",
            "title": "Guy Fawkes Fireworks",
            "date": "2025-11-05",
            "time": "To be confirmed",
            "location": "Garvald West Linton",
            "description": "Fireworks display with hot chocolate.",
             "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 28,
            "s": "Garvald West Linton",
            "title": "St Martin – Lantern Walk",
            "date": "225-11-11",
            "time": "To be confirmed",
            "location": "Garvald West Linton",
            "description": "Lantern walk with a story about St Martin and the Beggar.",
             "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 29,
            "s": "Garvald West Linton",
            "title": "Advent Wreath Making",
            "date": "2025-11-28",
            "time": "To be confirmed",
            "location": "Garvald West Linton Dining Room",
            "description": "Advent wreath making for all.",
             "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 30,
            "s": "Garvald West Linton",
            "title": "1st Advent Celebration",
            "date": "2025-11-30",
            "time": "To be confirmed",
            "location": "Garvald West Linton Main House",
            "description": "Advent celebration with lighting candles, bell ringing, singing, hot chocolate.",
             "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 31,
            "s": "Garvald West Linton",
            "title": "Christmas Fair",
            "date": "2025-12-06",
            "time": "10:30 - 13:00",
            "location": "Garvald West Linton Workshops",
            "description": "Workshops selling handmade items.",
             "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 32,
            "s": "Garvald West Linton",
            "title": "Santa Lucia Event",
            "date": "2025-12-13",
            "time": "PM",
            "location": "Garvald West Linton",
            "description": "Celebration of Santa Lucia.",
             "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 33,
            "s": "Garvald West Linton",
            "title": "Christmas Eve Celebrations",
            "date": "2025-12-24",
            "time": "To be confirmed",
            "location": "Garvald West Linton",
            "description": "Gathering around Christmas tree, singing, gospel reading, candlelit dinner.",
             "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 34,
            "s": "Garvald West Linton",
            "title": "Christmas Day Lunch",
            "date": "2025-12-25",
            "time": "To be confirmed",
            "location": "Garvald West Linton",
            "description": "Christmas Day festive lunch.",
             "link": "https://garvaldwestlinton.org.uk/events/"
        },
        // New Garvald West Linton events
        {
            "id": 59, // New unique ID
            "s": "Garvald West Linton",
            "title": "Community Gathering & Project",
            "date": "2025-08-15",
            "time": "09:45 - 12:30",
            "location": "Garvald West Linton Hall",
            "description": "Regular community gathering and project work.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 60, // New unique ID
            "s": "Garvald West Linton",
            "title": "Community Gathering & Project",
            "date": "2025-08-29",
            "time": "09:45 - 12:30",
            "location": "Garvald West Linton Hall",
            "description": "Regular community gathering and project work.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },

        // --- Fairhill Rise (Was Ruskin Mill, now updated name and added events) ---
        {
            "id": 66, // New ID for the generic link
            "s": "Fairhill Rise",
            "title": "For current information, please click here",
            "date": null,
            "time": null,
            "location": null,
            "description": null,
            "link": "https://rmt.org/rise/fairhill-rise/",
            "issDetail": true // Custom property to signify it's for org view only
        },
        {
            "id": 35,
            "s": "Fairhill Rise", // Updated from Ruskin Mill
            "title": "Open Day",
            "date": "2025-07-31",
            "time": "To be confirmed",
            "location": "Fairhill Rise, East Lothian",
            "description": "An opportunity to visit Fairhill Rise and learn about their work.",
            "link": "https://rmt.org/rise/fairhill-rise/"
        },
        {
            "id": 36,
            "s": "Fairhill Rise", // Updated from Ruskin Mill
            "title": "Open Day",
            "date": "2025-08-25",
            "time": "To be confirmed",
            "location": "Fairhill Rise, East Lothian",
            "description": "An opportunity to visit Fairhill Rise and learn about their work.",
            "link": "https://rmt.org/rise/fairhill-rise/"
        },
        {
            "id": 37,
            "s": "Fairhill Rise", // Updated from Ruskin Mill
            "title": "Open Day",
            "date": "2025-09-29",
            "time": "To be confirmed",
            "location": "Fairhill Rise, East Lothian",
            "description": "An opportunity to visit Fairhill Rise and learn about their work.",
            "link": "https://rmt.org/rise/fairhill-rise/"
        },
        {
            "id": 38,
            "s": "Fairhill Rise", // Was Ruskin Mill, John Ruskin Prize related event
            "title": "John Ruskin Prize 2026: Call for Entries",
            "date": "2025-12-02", // Deadline for entries
            "time": "17:00 GMT",
            "location": "Online",
            "description": "Call for entries for the prestigious John Ruskin Prize 2026, theme 'Patience in Looking, Truth in Making'. Exhibition Jan 29 – Feb 8, 2026.",
            "link": "https://www.ruskinprize.co.uk/" // Corrected link
        },
        {
            "id": 39,
            "s": "Fairhill Rise", // Was Ruskin Mill, John Ruskin Prize related event
            "title": "John Ruskin Prize 2026: Exhibition",
            "date": "2026-01-29",
            "endDate": "2026-02-08", // Added end date for multi-day event
            "time": "Varies",
            "location": "Trinity Buoy Wharf, London",
            "description": "Exhibition of selected works for the John Ruskin Prize 2026.",
            "link": "https://www.ruskinprize.co.uk/" // Corrected link
        },

        // --- Garvald Edinburgh (Grant's Robot Faces and placeholder) ---
        {
            "id": 67, // New ID for the generic link
            "s": "Garvald Edinburgh",
            "title": "For current information, please click here",
            "date": null,
            "time": null,
            "location": null,
            "description": null,
            "link": "https://www.garvaldedinburgh.org.uk/news-and-events",
            "issDetail": true // Custom property to signify it's for org view only
        },
        {
            "id": 68, // New ID for the second generic link
            "s": "Garvald Edinburgh",
            "title": "Visit our Facebook page for more ", // Added space here
            "date": null,
            "time": null,
            "location": null,
            "description": null,
            "link": "https://www.facebook.com/GarvaldEdinburgh",
            "issDetail": true // Custom property to signify it's for org view only
        },
        {
            "id": 40,
            "s": "Garvald Edinburgh",
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
            "s": "Garvald Edinburgh",
            "title": "Garvald Gorgie Workshops Open Day",
            "date": "2025-08-30",
            "time": "10:30-13:30",
            "location": "Garvald Gorgie Workshops, Edinburgh",
            "description": "An open day at Garvald Gorgie Workshops.",
            "link": "https://www.garvaldedinburgh.org.uk/events/garvald-gorgie-workshops-open-day-2025"
        },


        // --- Camphill (Loch Arthur) (No specific upcoming events found via search) ---
        {
            "id": 69, // New ID for the generic link
            "s": "Camphill (Loch Arthur)",
            "title": "For current information, please click here",
            "date": null,
            "time": null,
            "location": null,
            "description": null,
            "link": "https://locharthur.org.uk/news-and-events/calendar/",
            "issDetail": true // Custom property to signify it's for org view only
        },
        {
            "id": 53, // New ID
            "s": "Camphill (Loch Arthur)",
            "title": "Concert: Anna Massie",
            "date": "2025-10-29",
            "time": "19:30 - 21:00",
            "location": "Loch Arthur Camphill Community",
            "description": "Concert by Anna Massie.",
            "link": "https://locharthur.org.uk/event/concert-anna-massie/"
        },
        // --- Anthroposophy in Edinburgh ---
        {
            "id": 70, // Existing ID for generic link
            "s": "Anthroposophy in Edinburgh",
            "title": "For current information, please click here or sign up for the local newsletter", // Modified title
            "date": null,
            "time": null,
            "location": null,
            "description": null,
            "link": "https://www.facebook.com/anthroposophyscotland", // Existing link
            "secondaryLink": "https://forms.gle/8jWbkYaGNq76kscE7", // New secondary link for newsletter
            "issDetail": true // Custom property to signify it's for org view only
        },
        // NEW CONSOLIDATED ITEM: Forum Meetings for s View
        {
            "id": 98, // New unique ID for the consolidated forum event
            "s": "Anthroposophy in Edinburgh",
            "title": "Forum Meetings (Letters to Members, Anthroposophical Leading Thoughts & Michaelmas)",
            "date": "2025: Sep 7, Dec 14. 2026: Jan 11, Feb 1, Mar 8, Apr 12, May 10, Jun 7, Jul 12. Forum: Michaelmas: Oct 5, 2025.", // Dates for s view
            "time": "2-3:15pm (for Forum Meetings)",
            "location": "Eurythmy Room, Edinburgh Steiner School",
            "description": "Regular forum meetings and a special Michaelmas forum. Contact :ioberski[at]gmail.com for details.",
            "link": "Contact :ioberski[at]gmail.com",
            "issDetail": true // Only for s View
        },
        // Individual Forum Meeting events (for Diary View)
        {
            "id": 86, // Existing ID
            "s": "Anthroposophy in Edinburgh",
            "title": "Forum Meeting (Letters to Members and Anthroposophical Leading Thoughts)",
            "date": "2025-09-07",
            "time": "14:00-15:15",
            "location": "Eurythmy Room, Edinburgh Steiner School",
            "description": "Forum meeting.",
            "link": "Contact :ioberski[at]gmail.com"
        },
        {
            "id": 87, // Existing ID
            "s": "Anthroposophy in Edinburgh",
            "title": "Forum Meeting (Letters to Members and Anthroposophical Leading Thoughts)",
            "date": "2025-12-14",
            "time": "14:00-15:15",
            "location": "Eurythmy Room, Edinburgh Steiner School",
            "description": "Forum meeting.",
            "link": "Contact :ioberski[at]gmail.com"
        },
        {
            "id": 88, // Existing ID
            "s": "Anthroposophy in Edinburgh",
            "title": "Forum Meeting (Letters to Members and Anthroposophical Leading Thoughts)",
            "date": "2026-01-11",
            "time": "14:00-15:15",
            "location": "Eurythmy Room, Edinburgh Steiner School",
            "description": "Forum meeting.",
            "link": "Contact :ioberski[at]gmail.com"
        },
        {
            "id": 89, // Existing ID
            "s": "Anthroposophy in Edinburgh",
            "title": "Forum Meeting (Letters to Members and Anthroposophical Leading Thoughts)",
            "date": "2026-02-01",
            "time": "14:00-15:15",
            "location": "Eurythmy Room, Edinburgh Steiner School",
            "description": "Forum meeting.",
            "link": "Contact :ioberski[at]gmail.com"
        },
        {
            "id": 90, // Existing ID
            "s": "Anthroposophy in Edinburgh",
            "title": "Forum Meeting (Letters to Members and Anthroposophical Leading Thoughts)",
            "date": "2026-03-08",
            "time": "14:00-15:15",
            "location": "Eurythmy Room, Edinburgh Steiner School",
            "description": "Forum meeting.",
            "link": "Contact :ioberski[at]gmail.com"
        },
        {
            "id": 91, // Existing ID
            "s": "Anthroposophy in Edinburgh",
            "title": "Forum Meeting (Letters to Members and Anthroposophical Leading Thoughts)",
            "date": "2026-04-12",
            "time": "14:00-15:15",
            "location": "Eurythmy Room, Edinburgh Steiner School",
            "description": "Forum meeting.",
            "link": "Contact :ioberski[at]gmail.com"
        },
        {
            "id": 92, // Existing ID
            "s": "Anthroposophy in Edinburgh",
            "title": "Forum Meeting (Letters to Members and Anthroposophical Leading Thoughts)",
            "date": "2026-05-10",
            "time": "14:00-15:15",
            "location": "Eurythmy Room, Edinburgh Steiner School",
            "description": "Forum meeting.",
            "link": "Contact :ioberski[at]gmail.com"
        },
        {
            "id": 93, // Existing ID
            "s": "Anthroposophy in Edinburgh",
            "title": "Forum Meeting (Letters to Members and Anthroposophical Leading Thoughts)",
            "date": "2026-06-07",
            "time": "14:00-15:15",
            "location": "Eurythmy Room, Edinburgh Steiner School",
            "description": "Forum meeting.",
            "link": "Contact :ioberski[at]gmail.com"
        },
        {
            "id": 94, // Existing ID
            "s": "Anthroposophy in Edinburgh",
            "title": "Forum Meeting (Letters to Members and Anthroposophical Leading Thoughts)",
            "date": "2026-07-12",
            "time": "14:00-15:15",
            "location": "Eurythmy Room, Edinburgh Steiner School",
            "description": "Forum meeting.",
            "link": "Contact :ioberski[at]gmail.com"
        },
        // NEW ITEM: Forum on 5 October: Michaelmas
        {
            "id": 95, // Existing ID
            "s": "Anthroposophy in Edinburgh",
            "title": "Forum: Michaelmas",
            "date": "2025-10-05",
            "time": "14:00-15:15",
            "location": "Eurythmy Room, Edinburgh Steiner School",
            "description": "Michaelmas Celebration",
            "link": "Contact :ioberski[at]gmail.com"
        },
        // NEW ITEM: Easter Preparation event
        {
            "id": 96, // Existing ID
            "s": "Anthroposophy in Edinburgh",
            "title": "Easter Preparation event",
            "date": "2026-03-14",
            "time": "To be confirmed",
            "location": "To be confirmed",
            "description": "Details to be confirmed.",
            "link": "Contact :ioberski[at]gmail.com"
        },
        {
            "id": 56, // Existing ID
            "s": "Anthroposophy in Edinburgh",
            "title": "Tueaday Weekly Online Study Group of the Leading Thoughts",
            "date": "2025-08-26",
            "time": "19:00-20:00",
            "location": "Online",
            "description": "Online Study Group of the Leading Thoughts resumes with Leading Thoughts 62-65.",
            "link": "Contact :ioberski[at]gmail.com"
        },
        {
            "id": 57, // Existing ID
            "s": "Anthroposophy in Edinburgh", // Primary s
            "secondarys": "Edinburgh Steiner School", // Secondary s for display if desired
            "title": "Fire in the Temple: A Staged Reading",
            "date": "2025-11-09",
            "time": "14:00-16:30",
            "location": "Edinburgh Steiner School",
            "description": "A staged reading of the play by Glen Williamson.",
            "link": "https://www.eventbrite.co.uk/e/fire-in-the-temple-tickets-1488785109339?aff=oddtdtcreator"
        },
        // --- Edinburgh Steiner School (generic link for s view) ---
        {
            "id": 71, // New ID for the generic link
            "s": "Edinburgh Steiner School",
            "title": "For current information, please click here",
            "date": null,
            "time": null,
            "location": null,
            "description": null,
            "link": "https://www.edinburghsteinerschool.org.uk/community/events/",
            "issDetail": true // Custom property to signify it's for org view only
        },
        // --- Garvald Home Farm (new s) ---
        {
            "id": 72, // New ID for Garvald Home Farm generic link
            "s": "Garvald Home Farm",
            "title": "For current information, please click here",
            "date": null,
            "time": null,
            "location": null,
            "description": null,
            "link": "https://www.facebook.com/GarvaldHomeFarm/?locale=en_GB",
            "issDetail": true // Custom property to signify it's for org view only
        }
    ];

    // --- s Images (Paths Confirmed and Fairhill Rise) ---
    const sImages = {
        "Anthroposophy in Edinburgh": "images/Anthroposophy in Edinburgh Logo.jpg",
        "Camphill Blair Drummond": "images/Camphill Blair Drummond Logo.png",
        "Camphill Corbenic": "images/Camphill Corbenic Logo.avif",
        "Tiphereth": "images/Camphill Tiphereth Logo.png",
        "Edinburgh Christian Community": "images/Christian Community Logo.jpg", // Corrected file name
        "Edinburgh Steiner School": "images/Edinburgh Steiner School Logo.png",
        "Fairhill Rise": "images/Ruskin Mill Logo.png", // Renamed from Ruskin Mill, keeping old logo name for now
        "Garvald Edinburgh": "images/Garvald Edinburgh Logo.png", // Corrected file name
        "Garvald West Linton": "images/Garvald West Linton Logo.jpg",
        "Camphill (Loch Arthur)": "images/Camphill Loch Arthur.jpg",
        "Garvald Home Farm": "images/Garvald Home Farm Logo.jpg" // Updated to the correct image file
    };
    // --- End of Data Definitions ---

    // --- s Details (for home page links and potentially other org-specific info) ---
    // Added a dedicated object for s homepages to ensure correct linking for logos.
    const sDetails = {
        "Edinburgh Steiner School": { homepage: "https://www.edinburghsteinerschool.org.uk/community/events/" }, // Updated link
        "Edinburgh Christian Community": { homepage: "https://www.thechristiancommunity.co.uk/topic/congregations/north/edinburgh/" }, // Updated link
        "Camphill Blair Drummond": { homepage: "https://camphillblairdrummond.org.uk/" },
        "Camphill Corbenic": { homepage: "https://www.corbeniccamphill.co.uk/" },
        "Tiphereth": { homepage: "https://www.tiphereth.org.uk/" },
        "Garvald West Linton": { homepage: "https://garvaldwestlinton.org.uk/" },
        "Fairhill Rise": { homepage: "https://rmt.org/rise/fairhill-rise/" },
        "Garvald Edinburgh": { homepage: "https://www.garvaldedinburgh.org.uk/" },
        "Camphill (Loch Arthur)": { homepage: "https://locharthur.org.uk/" },
        "Anthroposophy in Edinburgh": { homepage: "https://www.facebook.com/anthroposophyscotland" }, // Updated to the Facebook link as the primary homepage
        "Garvald Home Farm": { homepage: "https://www.facebook.com/GarvaldHomeFarm/?locale=en_GB" } // New s homepage
    };


    // --- Seasonal Color Palettes ---
    // Each palette defines CSS custom property values for a season
    const seasonalPalettes = {
        spring: {
            '--body-bg': '#f5f2eb', /* Soft, warm cream */
            '--text-color': '#4c4c4c',
            '--strong-text-color': '#3a3a3a',
            '--link-color': '#6b8e6b', /* Sage green */
            '--link-hover-color': '#5a7a5a',

            '--header-bg': '#6b8e6b', /* Sage green */
            '--header-text-color': '#f5f2eb',
            '--header-subtitle-opacity': '0.95',

            '--nav-bg': 'rgba(245, 242, 235, 0.95)',
            '--nav-button-bg': '#a87e5b', /* Earthy tone */
            '--nav-button-text-color': 'white',
            '--nav-button-hover-bg': '#8c6a4e',
            '--nav-button-active-bg': '#6a4a2f',

            '--main-bg': '#fff',
            '--main-shadow': 'rgba(0, 0, 0, 0.08)',

            '--card-bg': '#fcfcfc',
            '--card-border': '#e0e0e0',
            '--card-shadow': 'rgba(0, 0, 0, 0.05)',
            '--card-hover-shadow': 'rgba(0, 0, 0, 0.1)',
            '--card-title-color': '#4c4c4c',
            '--card-detail-color': '#666',
            '--card-description-color': '#777',
            '--card-org-name-color': '#999',

            '--diary-day-card-bg': '#fcfcfc',
            '--diary-day-card-border': '#e0e0e0',
            '--diary-day-card-shadow': 'rgba(0, 0, 0, 0.05)',
            '--diary-day-header-color': '#6b8e6b', /* Sage green */
            '--diary-day-header-border': '#f0f0f0',
            '--diary-event-list-item-bg': '#fff',
            '--diary-event-list-item-border': '#eee',
            '--diary-event-list-item-shadow': 'rgba(0, 0, 0, 0.03)',
            '--diary-event-list-item-hover-bg': '#f9f9f9',

            '--org-header-bg': '#e0e0e0',
            '--org-header-text-color': '#333',
            '--org-header-border': '#6b8e6b', /* Sage green */
            '--org-row-bg': '#fdfdfd',
            '--org-row-border': '#ddd',
            '--org-row-shadow': 'rgba(0, 0, 0, 0.08)',
            '--org-name-column-bg': '#f0f0f0',
            '--org-name-column-border-right': '#e0e0e0',
            '--org-logo-bg': '#fff',
            '--org-logo-border': '#ccc',
            '--org-logo-shadow': 'rgba(0, 0, 0, 0.1)',
            '--org-event-list-item-bg': '#fff',
            '--org-event-list-item-border': '#eee',
            '--org-event-list-item-shadow': 'rgba(0, 0, 0, 0.07)',
            '--org-event-list-item-title-color': '#4c4c4c',
            '--org-event-list-item-detail-color': '#666',
            '--org-event-list-item-strong-color': '#3a3a3a',
            '--org-event-list-item-link-color': '#6b8e6b', /* Sage green */
            '--org-event-list-item-link-hover-color': '#5a7a5a',
            '--org-no-events-message-color': '#777',

            '--footer-bg': '#e9e9e9',
            '--footer-text-color': '#777',
            '--footer-shadow': 'rgba(0, 0, 0, 0.05)',
        },
        summer: {
            '--body-bg': '#fcf9ed', /* Lighter, sun-kissed cream */
            '--text-color': '#403a30', /* Soft, warm brown */
            '--strong-text-color': '#302a20',
            '--link-color': '#e09a50', /* Golden orange */
            '--link-hover-color': '#c2813c',

            '--header-bg': '#e09a50', /* Golden orange */
            '--header-text-color': '#fcf9ed',
            '--header-subtitle-opacity': '0.95',

            '--nav-bg': 'rgba(252, 249, 237, 0.95)',
            '--nav-button-bg': '#85a37f', /* Muted olive green */
            '--nav-button-text-color': 'white',
            '--nav-button-hover-bg': '#6e8a6a',
            '--nav-button-active-bg': '#5a7056',

            '--main-bg': '#fff',
            '--main-shadow': 'rgba(0, 0, 0, 0.08)',

            '--card-bg': '#fcfcfc',
            '--card-border': '#e0e0e0',
            '--card-shadow': 'rgba(0, 0, 0, 0.05)',
            '--card-hover-shadow': 'rgba(0, 0, 0, 0.1)',
            '--card-title-color': '#403a30',
            '--card-detail-color': '#605a50',
            '--card-description-color': '#706a60',
            '--card-org-name-color': '#908a80',

            '--diary-day-card-bg': '#fcfcfc',
            '--diary-day-card-border': '#e0e0e0',
            '--diary-day-card-shadow': 'rgba(0, 0, 0, 0.05)',
            '--diary-day-header-color': '#e09a50', /* Golden orange */
            '--diary-day-header-border': '#f0f0f0',
            '--diary-event-list-item-bg': '#fff',
            '--diary-event-list-item-border': '#eee',
            '--diary-event-list-item-shadow': 'rgba(0, 0, 0, 0.03)',
            '--diary-event-list-item-hover-bg': '#f9f9f9',

            '--org-header-bg': '#e0e0e0',
            '--org-header-text-color': '#333',
            '--org-header-border': '#e09a50', /* Golden orange */
            '--org-row-bg': '#fdfdfd',
            '--org-row-border': '#ddd',
            '--org-row-shadow': 'rgba(0, 0, 0, 0.08)',
            '--org-name-column-bg': '#f0f0f0',
            '--org-name-column-border-right': '#e0e0e0',
            '--org-logo-bg': '#fff',
            '--org-logo-border': '#ccc',
            '--org-logo-shadow': 'rgba(0, 0, 0, 0.1)',
            '--org-event-list-item-bg': '#fff',
            '--org-event-list-item-border': '#eee',
            '--org-event-list-item-shadow': 'rgba(0, 0, 0, 0.07)',
            '--org-event-list-item-title-color': '#403a30',
            '--org-event-list-item-detail-color': '#605a50',
            '--org-event-list-item-strong-color': '#302a20',
            '--org-event-list-item-link-color': '#e09a50', /* Golden orange */
            '--org-event-list-item-link-hover-color': '#c2813c',
            '--org-no-events-message-color': '#777',

            '--footer-bg': '#e9e9e9',
            '--footer-text-color': '#777',
            '--footer-shadow': 'rgba(0, 0, 0, 0.05)',
        },
        autumn: {
            '--body-bg': '#e8d9c6', /* Muted terracotta */
            '--text-color': '#6b4e3a', /* Deep brown */
            '--strong-text-color': '#5a3e2c',
            '--link-color': '#b05a3a', /* Burnt orange/terracotta */
            '--link-hover-color': '#904a2a',

            '--header-bg': '#b05a3a', /* Burnt orange/terracotta */
            '--header-text-color': '#e8d9c6',
            '--header-subtitle-opacity': '0.95',

            '--nav-bg': 'rgba(232, 217, 198, 0.95)',
            '--nav-button-bg': '#7e6b5a', /* Muted brown */
            '--nav-button-text-color': 'white',
            '--nav-button-hover-bg': '#6a5a4a',
            '--nav-button-active-bg': '#5a4a3a',

            '--main-bg': '#fff',
            '--main-shadow': 'rgba(0, 0, 0, 0.08)',

            '--card-bg': '#fcfcfc',
            '--card-border': '#e0e0e0',
            '--card-shadow': 'rgba(0, 0, 0, 0.05)',
            '--card-hover-shadow': 'rgba(0, 0, 0, 0.1)',
            '--card-title-color': '#6b4e3a',
            '--card-detail-color': '#8a7a6a',
            '--card-description-color': '#9a8a7a',
            '--card-org-name-color': '#b0a090',

            '--diary-day-card-bg': '#fcfcfc',
            '--diary-day-card-border': '#e0e0e0',
            '--diary-day-card-shadow': 'rgba(0, 0, 0, 0.05)',
            '--diary-day-header-color': '#b05a3a', /* Burnt orange/terracotta */
            '--diary-day-header-border': '#f0f0f0',
            '--diary-event-list-item-bg': '#fff',
            '--diary-event-list-item-border': '#eee',
            '--diary-event-list-item-shadow': 'rgba(0, 0, 0, 0.03)',
            '--diary-event-list-item-hover-bg': '#f9f9f9',

            '--org-header-bg': '#e0e0e0',
            '--org-header-text-color': '#333',
            '--org-header-border': '#b05a3a', /* Burnt orange/terracotta */
            '--org-row-bg': '#fdfdfd',
            '--org-row-border': '#ddd',
            '--org-row-shadow': 'rgba(0, 0, 0, 0.08)',
            '--org-name-column-bg': '#f0f0f0',
            '--org-name-column-border-right': '#e0e0e0',
            '--org-logo-bg': '#fff',
            '--org-logo-border': '#ccc',
            '--org-logo-shadow': 'rgba(0, 0, 0, 0.1)',
            '--org-event-list-item-bg': '#fff',
            '--org-event-list-item-border': '#eee',
            '--org-event-list-item-shadow': 'rgba(0, 0, 0, 0.07)',
            '--org-event-list-item-title-color': '#6b4e3a',
            '--org-event-list-item-detail-color': '#8a7a6a',
            '--org-event-list-item-strong-color': '#5a3e2c',
            '--org-event-list-item-link-color': '#b05a3a', /* Burnt orange/terracotta */
            '--org-event-list-item-link-hover-color': '#904a2a',
            '--org-no-events-message-color': '#777',

            '--footer-bg': '#e9e9e9',
            '--footer-text-color': '#777',
            '--footer-shadow': 'rgba(0, 0, 0, 0.05)',
        },
        winter: {
            '--body-bg': '#e0e8f0', /* Soft, cool blue-grey */
            '--text-color': '#506070', /* Muted cool grey */
            '--strong-text-color': '#405060',
            '--link-color': '#6a8aab', /* Muted blue */
            '--link-hover-color': '#5a7a9a',

            '--header-bg': '#6a8aab', /* Muted blue */
            '--header-text-color': '#e0e8f0',
            '--header-subtitle-opacity': '0.95',

            '--nav-bg': 'rgba(224, 232, 240, 0.95)',
            '--nav-button-bg': '#80708a', /* Muted plum */
            '--nav-button-text-color': 'white',
            '--nav-button-hover-bg': '#6a5a7a',
            '--nav-button-active-bg': '#5a4a6a',

            '--main-bg': '#fff',
            '--main-shadow': 'rgba(0, 0, 0, 0.08)',

            '--card-bg': '#fcfcfc',
            '--card-border': '#e0e0e0',
            '--card-shadow': 'rgba(0, 0, 0, 0.05)',
            '--card-hover-shadow': 'rgba(0, 0, 0, 0.1)',
            '--card-title-color': '#506070',
            '--card-detail-color': '#708090',
            '--card-description-color': '#8090a0',
            '--card-org-name-color': '#a0b0c0',

            '--diary-day-card-bg': '#fcfcfc',
            '--diary-day-card-border': '#e0e0e0',
            '--diary-day-card-shadow': 'rgba(0, 0, 0, 0.05)',
            '--diary-day-header-color': '#6a8aab', /* Muted blue */
            '--diary-day-header-border': '#f0f0f0',
            '--diary-event-list-item-bg': '#fff',
            '--diary-event-list-item-border': '#eee',
            '--diary-event-list-item-shadow': 'rgba(0, 0, 0, 0.03)',
            '--diary-event-list-item-hover-bg': '#f9f9f9',

            '--org-header-bg': '#e0e0e0',
            '--org-header-text-color': '#333',
            '--org-header-border': '#6a8aab', /* Muted blue */
            '--org-row-bg': '#fdfdfd',
            '--org-row-border': '#ddd',
            '--org-row-shadow': 'rgba(0, 0, 0, 0.08)',
            '--org-name-column-bg': '#f0f0f0',
            '--org-name-column-border-right': '#e0e0e0',
            '--org-logo-bg': '#fff',
            '--org-logo-border': '#ccc',
            '--org-logo-shadow': 'rgba(0, 0, 0, 0.1)',
            '--org-event-list-item-bg': '#fff',
            '--org-event-list-item-border': '#eee',
            '--org-event-list-item-shadow': 'rgba(0, 0, 0, 0.07)',
            '--org-event-list-item-title-color': '#506070',
            '--org-event-list-item-detail-color': '#708090',
            '--org-event-list-item-strong-color': '#405060',
            '--org-event-list-item-link-color': '#6a8aab', /* Muted blue */
            '--org-event-list-item-link-hover-color': '#5a7a9a',
            '--org-no-events-message-color': '#777',

            '--footer-bg': '#e9e9e9',
            '--footer-text-color': '#777',
            '--footer-shadow': 'rgba(0, 0, 0, 0.05)',
        }
    };

    // Function to get the current week number (1-52/53)
    // Source: https://stackoverflow.com/questions/6117814/get-week-of-year-in-javascript-like-in-php
    Date.prototype.getWeek = function() {
        var date = new Date(this.getTime());
        date.setHours(0, 0, 0, 0);
        // Thursday in current week decides the year.
        date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
        // January 4 is always in week 1.
        var week1 = new Date(date.getFullYear(), 0, 4);
        // Adjust to Thursday in week 1 and count number of weeks from date to week1.
        return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
    }

    // Function to apply the seasonal palette
    const applySeasonalPalette = () => {
        const currentWeek = new Date().getWeek();
        let season = 'spring'; // Default to spring

        // Simple mapping of weeks to seasons (approx. 13 weeks per season)
        // Adjust these ranges based on your desired seasonal transitions
        if (currentWeek >= 10 && currentWeek < 23) { // Roughly March (week 10) to May (week 22)
            season = 'spring';
        } else if (currentWeek >= 23 && currentWeek < 36) { // Roughly June (week 23) to August (week 35)
            season = 'summer';
        } else if (currentWeek >= 36 && currentWeek < 49) { // Roughly September (week 36) to November (week 48)
            season = 'autumn';
        } else { // Roughly December (week 49) to February (week 9)
            season = 'winter';
        }

        const palette = seasonalPalettes[season];
        for (const property in palette) {
            document.documentElement.style.setProperty(property, palette[property]);
        }
        console.log(`Applying ${season} palette (Week ${currentWeek})`);
    };

    // Apply palette on page load
    applySeasonalPalette();


    const eventContainer = document.getElementById('eventContainer');
    const diaryViewBtn = document.getElementById('diaryViewBtn');
    const sViewBtn = document.getElementById('sViewBtn');

    // Filter out past events, including events that started in the past but are ongoing
    const filterUpcomingEvents = (eventsArray) => {
        const now = new Date();
        now.setHours(0, 0, 0, 0); // Set to start of today for comparison in local time

        return eventsArray.filter(event => {
            // Events marked as 'issDetail' are for the s view only and should not appear in Diary
            if (event.issDetail) {
                return false;
            }

            const startDate = new Date(event.date);
            startDate.setHours(0, 0, 0, 0); // Normalize to start of day in local time

            if (event.endDate) {
                const endDate = new Date(event.endDate);
                endDate.setHours(23, 59, 59, 999); // Normalize to end of day in local time

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

    // Helper to generate CSS class from s name for color coding
    const getOrgClass = (orgName) => {
        // Ensure the class name is valid (lowercase, replace non-alphanumeric with hyphen)
        return `title-${orgName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
    };

    // --- Render Diary View ---
    const renderDiaryView = (eventsToDisplay) => {
        eventContainer.innerHTML = '';
        eventContainer.className = 'diary-layout'; // Set class for diary layout

        // Filter out events that are specifically marked for s view only
        const diaryEvents = eventsToDisplay.filter(event => !event.issDetail);

        if (diaryEvents.length === 0) {
            eventContainer.innerHTML = '<p class="no-events-message">No upcoming events to display in Diary View.</p>';
            return;
        }

        // Create a map to hold events for each day, including multi-day events on each day they span
        const dailyEventsMap = new Map();
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Start of today in local time

        diaryEvents.forEach(event => {
            const startDate = new Date(event.date);
            startDate.setHours(0, 0, 0, 0); // Normalize to start of day in local time
            const endDate = event.endDate ? new Date(event.endDate) : startDate;
            endDate.setHours(23, 59, 59, 999); // Normalize to end of end day in local time

            // Iterate over each day the event is active
            let currentDate = new Date(startDate);
            while (currentDate <= endDate) {
                // Only add to map if the event date is today or in the future
                if (currentDate >= today) {
                    // Correctly generate dateKey in YYYY-MM-DD format based on local date
                    const year = currentDate.getFullYear();
                    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
                    const day = currentDate.getDate().toString().padStart(2, '0');
                    const dateKey = `${year}-${month}-${day}`;

                    if (!dailyEventsMap.has(dateKey)) {
                        dailyEventsMap.set(dateKey, []);
                    }
                    dailyEventsMap.get(dateKey).push(event);
                }
                currentDate.setDate(currentDate.getDate() + 1); // Move to next day
            }
        });

        // Sort dates chronologically
        const sortedDateKeys = Array.from(dailyEventsMap.keys()).sort((a, b) => new Date(a) - new Date(b));

        // Removed the automatic scroll to the first upcoming day card
        // let firstUpcomingDayCard = null; // To store the element for the first upcoming day

        // Get today's date in YYYY-MM-DD local format for accurate comparison
        const todayYear = today.getFullYear();
        const todayMonth = (today.getMonth() + 1).toString().padStart(2, '0');
        const todayDay = today.getDate().toString().padStart(2, '0');
        const todayKey = `${todayYear}-${todayMonth}-${todayDay}`;


        sortedDateKeys.forEach(dateKey => {
            const dayCard = document.createElement('div');
            dayCard.className = 'diary-day-card';
            dayCard.innerHTML = `<h4>${formatDate(dateKey)}</h4>`; // Format date for day header

            // Add a data attribute to easily find this card later
            dayCard.dataset.date = dateKey;

            // Removed the automatic scroll to the first upcoming day card
            // if (dateKey === todayKey && !firstUpcomingDayCard) {
            //     firstUpcomingDayCard = dayCard;
            // } else if (new Date(dateKey) > today && !firstUpcomingDayCard) {
            //     // This condition correctly identifies the first future day with events
            //     firstUpcomingDayCard = dayCard;
            // }

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
                        <p class="event-org-name-diary ${getOrgClass(event.s)}">${event.s}</p>
                        <h4 class="${getOrgClass(event.s)}">${event.title}</h4>
                        <p><strong>Date:</strong> ${formatDate(event.date, event.endDate)}</p>
                        <p><strong>Time:</strong> ${event.time || 'To be confirmed'}</p>
                        <p><strong>Location:</strong> ${event.location}</p>
                        ${event.description ? `<p class="event-description-diary">${event.description}</p>` : ''}
                        <p class="more-info-diary">${linkContent}</p>
                    `;
                eventList.appendChild(listItem);
            });
            dayCard.appendChild(eventList);
            eventContainer.appendChild(dayCard);
        });

        // Removed the automatic scroll to the first upcoming day card
        // if (firstUpcomingDayCard) {
        //     firstUpcomingDayCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // }
    };

    // --- Render s View ---
    const rendersView = () => {
        eventContainer.innerHTML = '';
        eventContainer.className = 's-layout';

        // Group ALL events by s, including those for s details
        const groupedEvents = allEvents.reduce((acc, event) => {
            if (!acc[event.s]) {
                acc[event.s] = [];
            }
            acc[event.s].push(event);
            return acc;
        }, {});

        // Add the column header
        const headerRow = document.createElement('div');
        headerRow.className = 's-header';
        headerRow.innerHTML = `
            <div class="header-org-name">s</div>
            <div class="header-events">Upcoming Events</div>
        `;
        eventContainer.appendChild(headerRow);

        // Sort ss alphabetically for consistent display
        const sortedOrgNames = Object.keys(groupedEvents).sort();

        sortedOrgNames.forEach(orgName => {
            const sRow = document.createElement('div');
            sRow.className = 's-row';

            const orgImageSrc = sImages[orgName] || 'https://placehold.co/110x110/cccccc/333333?text=Logo'; // Fallback to a placeholder

            // Find the primary link for the s's homepage
            let orgHomePageLink = sDetails[orgName]?.homepage || '#';

            const sNameColumn = document.createElement('div');
            sNameColumn.className = `s-name-column ${getOrgClass(orgName)}`;
            sNameColumn.innerHTML = `
                <a href="${orgHomePageLink}" target="_blank" class="org-link-wrapper">
                    <img src="${orgImageSrc}" alt="${orgName} Logo" class="s-logo-fixed-size">
                    <h2 class="${getOrgClass(orgName)}">${orgName}</h2>
                </a>
            `;
            sRow.appendChild(sNameColumn);

            const sEventsColumn = document.createElement('div');
            sEventsColumn.className = 's-events-column';

            // Separate events into two categories for this s
            let orgSpecificDetails = groupedEvents[orgName].filter(event => event.issDetail);
            let regularUpcomingEvents = groupedEvents[orgName].filter(event =>
                !event.issDetail && filterUpcomingEvents([event]).length > 0
            );

            // Handle consolidation for "Anthroposophy in Edinburgh" Forum events
            const consolidatedForumEvent = orgSpecificDetails.find(event => event.id === 98);
            if (orgName === "Anthroposophy in Edinburgh" && consolidatedForumEvent) {
                // IDs of individual forum events that should be excluded from regularUpcomingEvents
                const individualForumIds = [86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96];
                regularUpcomingEvents = regularUpcomingEvents.filter(event => !individualForumIds.includes(event.id));
            }

            // Combine them, with s-specific details first
            let eventsToDisplayInColumn = [...orgSpecificDetails, ...regularUpcomingEvents];

            // Specific sorting for Corbenic to ensure generic link comes first
            if (orgName === "Camphill Corbenic") {
                eventsToDisplayInColumn.sort((a, b) => {
                    if (a.id === 63) return -1; // Ensure id 63 (generic link) is first
                    if (b.id === 63) return 1;
                    return 0; // Maintain existing order for others
                });
            } else {
                // Default sort: Keep issDetail events at the top, then sort by date
                eventsToDisplayInColumn.sort((a, b) => {
                    if (a.issDetail && !b.issDetail) return -1;
                    if (!a.issDetail && b.issDetail) return 1;

                    if (a.date && b.date) {
                        return new Date(a.date) - new Date(b.date);
                    }
                    if (a.date && !b.date) return 1; // Event with date comes before event without date
                    if (!a.date && b.date) return -1;
                    return 0; // Maintain order if both have no date or dates are equal
                });
            }


            if (eventsToDisplayInColumn.length > 0) {
                const eventList = document.createElement('ul');
                eventList.className = 's-event-list';

                eventsToDisplayInColumn.forEach(event => { // Use eventsToDisplayInColumn
                    const listItem = document.createElement('li');
                    let linkContent = event.link;

                    // Special handling for the "For current information, please click here or sign up for the local newsletter" title
                    if (event.id === 70 && event.s === "Anthroposophy in Edinburgh") {
                        const baseText = "For current information, please click ";
                        const hereLinkHtml = `<a href="${event.link}" target="_blank">here</a>`;
                        const newsletterText = " or sign up for the local ";
                        const newsletterLinkHtml = `<a href="${event.secondaryLink}" target="_blank">newsletter</a>`;

                        listItem.innerHTML = `
                            <h4>${baseText}${hereLinkHtml}${newsletterText}${newsletterLinkHtml}</h4>
                        `;
                    } else {
                        if (event.link && event.link.startsWith('http')) {
                            linkContent = `<a href="${event.link}" target="_blank">More Information</a>`;
                        } else if (event.link && event.link.startsWith('Contact')) {
                            linkContent = event.link; // Display as is if it's contact info
                        }

                        // Conditionally add elements to remove blank lines
                        const eventDateHtml = event.date ? `<p><strong>Date:</strong> ${event.date}</p>` : ''; // Display raw date string for consolidated forum
                        const eventTimeHtml = event.time ? `<p><strong>Time:</strong> ${event.time}</p>` : '';
                        const eventLocationHtml = event.location ? `<p><strong>Location:</strong> ${event.location}</p>` : '';
                        const eventDescriptionHtml = event.description ? `<p>${event.description}</p>` : '';
                        const eventLinkHtml = linkContent ? `<p class="more-info-org">${linkContent}</p>` : '';

                        listItem.innerHTML = `
                            <h4>${event.title}</h4>
                            ${eventDateHtml}
                            ${eventTimeHtml}
                            ${eventLocationHtml}
                            ${eventDescriptionHtml}
                            ${eventLinkHtml}
                        `;
                    }
                    eventList.appendChild(listItem);
                });
                sEventsColumn.appendChild(eventList);
            } else {
                sEventsColumn.innerHTML = '<p class="no-events-message">No upcoming events listed at this time.</p>';
            }
            sRow.appendChild(sEventsColumn);
            eventContainer.appendChild(sRow);
        });
    };


    // --- View Mode Management ---
    let currentView = 'diary'; // Default view

    const setView = (view) => {
        currentView = view;
        diaryViewBtn.classList.remove('active');
        organisationViewBtn.classList.remove('active');

        if (view === 'diary') {
            renderDiaryView(upcomingEvents);
            diaryViewBtn.classList.add('active');
        } else if (view === 's') {
            rendersView(); // Call without argument to use allEvents directly
            sViewBtn.classList.add('active');
        }
    };

    // Event Listeners for view buttons
    diaryViewBtn.addEventListener('click', () => setView('diary'));
    sViewBtn.addEventListener('click', () => setView('s'));

    // Initial render based on default view
    setView(currentView);
});
