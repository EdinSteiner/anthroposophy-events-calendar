document.addEventListener('DOMContentLoaded', () => {
    // --- Event Data ---
    // IMPORTANT: This array holds STATIC event data.
    // Events below are consolidated from previous search results and your direct input,
    // filtered and adjusted based on all your feedback.
    // As an AI, I cannot dynamically fetch or verify live event schedules in real-time.
    // You MUST verify the accuracy and currency of these events against official websites.
    // Dates are set to be in the future (from current date July 16, 2025) or ongoing.
    const allEvents = [
        // --- Edinburgh Steiner School ---
        {
            "id": 1,
            "organization": "Edinburgh Steiner School",
            "title": "Summer Circus & Crafts Camps (Age 6+)",
            "date": "2025-07-28",
            "endDate": "2025-08-08",
            "time": "Full Day",
            "location": "Edinburgh Steiner School Campus",
            "description": "Engaging camp with circus skills and creative crafts.",
            "link": "https://www.edinburghsteinerschool.org.uk/community/events/"
        },
        {
            "id": 2,
            "organization": "Edinburgh Steiner School",
            "title": "Kindergarten Summer Camps",
            "date": "2025-08-04",
            "endDate": "2025-08-15",
            "time": "9:00 - 13:00",
            "location": "Edinburgh Steiner School Campus",
            "description": "Gentle summer camp for younger children.",
            "link": "https://www.edinburghsteinerschool.org.uk/community/events/"
        },
        {
            "id": 3,
            "organization": "Edinburgh Steiner School",
            "title": "Autumn Term Starts",
            "date": "2025-08-26",
            "endDate": "2025-12-19",
            "time": "Full Term",
            "location": "Edinburgh Steiner School Campus",
            "description": "Start of the Autumn Term.",
            "link": "https://www.edinburghsteinerschool.org.uk/community/events/"
        },
        {
            "id": 4,
            "organization": "Edinburgh Steiner School",
            "title": "Early Years Parent Education Evening: Rhythm, Repetition, Reverence",
            "date": "2025-09-09",
            "time": "18:30",
            "location": "Edinburgh Steiner School Campus",
            "description": "Education evening for parents focusing on rhythm, repetition, and reverence in early years.",
            "link": "https://www.edinburghsteinerschool.org.uk/community/events/"
        },
        {
            "id": 5,
            "organization": "Edinburgh Steiner School",
            "title": "September Holiday",
            "date": "2025-09-15",
            "time": "Full Day",
            "location": "Edinburgh Steiner School Campus",
            "description": "School holiday.",
            "link": "https://www.edinburghsteinerschool.org.uk/community/events/"
        },
        {
            "id": 6,
            "organization": "Edinburgh Steiner School",
            "title": "Anniversary of first Waldorf school",
            "date": "2025-09-19",
            "time": "Full Day",
            "location": "Edinburgh Steiner School Campus",
            "description": "Celebration of the anniversary of the first Waldorf school.",
            "link": "https://www.edinburghsteinerschool.org.uk/community/events/"
        },
        {
            "id": 7,
            "organization": "Edinburgh Steiner School",
            "title": "El Mercado Market",
            "date": "2025-10-04",
            "time": "11:00 - 16:00",
            "location": "Edinburgh Steiner School Campus",
            "description": "Market event at the school.",
            "link": "https://www.edinburghsteinerschool.org.uk/community/events/"
        },
        {
            "id": 8,
            "organization": "Edinburgh Steiner School",
            "title": "World Mental Health Day",
            "date": "2025-10-10",
            "time": "Full Day",
            "location": "Edinburgh Steiner School Campus",
            "description": "Observance of World Mental Health Day.",
            "link": "https://www.edinburghsteinerschool.org.uk/community/events/"
        },
        {
            "id": 9,
            "organization": "Edinburgh Steiner School",
            "title": "Christmas Market",
            "date": "2025-11-22",
            "time": "11:00 - 16:00",
            "location": "Edinburgh Steiner School Campus",
            "description": "Annual Christmas Market.",
            "link": "https://www.edinburghsteinerschool.org.uk/community/events/"
        },
        {
            "id": 10,
            "organization": "Edinburgh Steiner School",
            "title": "Spring Start-of-Term Assembly",
            "date": "2026-01-07",
            "time": "09:00 - 09:30",
            "location": "Edinburgh Steiner School Campus",
            "description": "Assembly to mark the start of the Spring Term.",
            "link": "https://www.edinburghsteinerschool.org.uk/community/events/"
        },

        // --- Edinburgh Christian Community ---
        {
            "id": 11,
            "organization": "Edinburgh Christian Community",
            "title": "Sunday Service",
            "date": "2025-07-20",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.christiancommunity.org.uk/edinburgh/whats-on/events-calendar/"
        },
        {
            "id": 12,
            "organization": "Edinburgh Christian Community",
            "title": "Children's Service",
            "date": "2025-07-27",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Service for children (every 2nd and 4th Sunday).",
            "link": "https://www.christiancommunity.org.uk/edinburgh/whats-on/events-calendar/"
        },
        {
            "id": 13,
            "organization": "Edinburgh Christian Community",
            "title": "Sunday Service",
            "date": "2025-07-27",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.christiancommunity.org.uk/edinburgh/whats-on/events-calendar/"
        },
        {
            "id": 14,
            "organization": "Edinburgh Christian Community",
            "title": "Sunday Service",
            "date": "2025-08-03",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.christiancommunity.org.uk/edinburgh/whats-on/events-calendar/"
        },
        {
            "id": 15,
            "organization": "Edinburgh Christian Community",
            "title": "Sunday Service",
            "date": "2025-08-10",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.christiancommunity.org.uk/edinburgh/whats-on/events-calendar/"
        },
        {
            "id": 16,
            "organization": "Edinburgh Christian Community",
            "title": "Children's Service",
            "date": "2025-08-10",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Service for children (every 2nd and 4th Sunday).",
            "link": "https://www.christiancommunity.org.uk/edinburgh/whats-on/events-calendar/"
        },
        {
            "id": 17,
            "organization": "Edinburgh Christian Community",
            "title": "Sunday Service",
            "date": "2025-08-17",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.christiancommunity.org.uk/edinburgh/whats-on/events-calendar/"
        },
        {
            "id": 18,
            "organization": "Edinburgh Christian Community",
            "title": "Sunday Service",
            "date": "2025-08-24",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.christiancommunity.org.uk/edinburgh/whats-on/events-calendar/"
        },
        {
            "id": 19,
            "organization": "Edinburgh Christian Community",
            "title": "Children's Service",
            "date": "2025-08-24",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Service for children (every 2nd and 4th Sunday).",
            "link": "https://www.christiancommunity.org.uk/edinburgh/whats-on/events-calendar/"
        },
        {
            "id": 20,
            "organization": "Edinburgh Christian Community",
            "title": "Sunday Service",
            "date": "2025-08-31",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.christiancommunity.org.uk/edinburgh/whats-on/events-calendar/"
        },
        {
            "id": 21,
            "organization": "Edinburgh Christian Community",
            "title": "Sunday Service",
            "date": "2025-09-07",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.christiancommunity.org.uk/edinburgh/whats-on/events-calendar/"
        },
        {
            "id": 22,
            "organization": "Edinburgh Christian Community",
            "title": "Children's Service",
            "date": "2025-09-14",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Service for children (every 2nd and 4th Sunday).",
            "link": "https://www.christiancommunity.org.uk/edinburgh/whats-on/events-calendar/"
        },
        {
            "id": 23,
            "organization": "Edinburgh Christian Community",
            "title": "Sunday Service",
            "date": "2025-09-14",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.christiancommunity.org.uk/edinburgh/whats-on/events-calendar/"
        },
        {
            "id": 24,
            "organization": "Edinburgh Christian Community",
            "title": "Sunday Service",
            "date": "2025-09-21",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.christiancommunity.org.uk/edinburgh/whats-on/events-calendar/"
        },
        {
            "id": 25,
            "organization": "Edinburgh Christian Community",
            "title": "Sunday Service",
            "date": "2025-09-28",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.christiancommunity.org.uk/edinburgh/whats-on/events-calendar/"
        },
        {
            "id": 26,
            "organization": "Edinburgh Christian Community",
            "title": "Children's Service",
            "date": "2025-09-28",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Service for children (every 2nd and 4th Sunday).",
            "link": "https://www.christiancommunity.org.uk/edinburgh/whats-on/events-calendar/"
        },

        // --- Hope City Church Edinburgh events ---
        {
            "id": 27,
            "organization": "Hope City Church Edinburgh",
            "title": "YAP July",
            "date": "2025-07-18",
            "time": "19:00 - 23:30",
            "location": "Hope City Church Edinburgh",
            "description": "An evening of food, community, and fun, while worshiping together! (For over 18s).",
            "link": "https://hopecityedinburgh.org/whats-on"
        },
        {
            "id": 28,
            "organization": "The Corner Room at Hope City Church Edinburgh",
            "title": "The Corner Room x The Fringe: Alma / Juliette Lemoine and Chris Amer",
            "date": "2025-08-15",
            "time": "20:00 - 22:00",
            "location": "The Corner Room, Hope City Church Edinburgh",
            "description": "An evening of exceptional new Scottish music featuring Juliette Lemoine and Chris Amer, and Alma.",
            "link": "https://www.edfringe.com/tickets/whats-on/the-corner-room-at-the-fringe-alma-juliette-lemoine-and-chris-amer"
        },
        {
            "id": 29,
            "organization": "The Corner Room at Hope City Church Edinburgh",
            "title": "The Corner Room x The Fringe: The Black Denims and Quick",
            "date": "2025-08-16",
            "time": "20:00 - 22:00",
            "location": "The Corner Room, Hope City Church Edinburgh",
            "description": "Scotland's newest country supergroup, The Black Denims, and newgrass band Quick.",
            "link": "https://www.edfringe.com/tickets/whats-on/the-corner-room-at-the-fringe-the-black-denims-quick"
        },
        {
            "id": 30,
            "organization": "Hope City Church Edinburgh",
            "title": "Suffering & Lament",
            "date": "2025-09-06",
            "time": "10:00 - 12:30",
            "location": "Hope City Church Edinburgh",
            "description": "Exploring God's purpose in suffering and the grace of lament.",
            "link": "https://hopecityedinburgh.org/whats-on"
        },

        // --- Camphill Blair Drummond ---
        {
            "id": 31,
            "organization": "Camphill Blair Drummond",
            "title": "Vocal Recital: Un-Ravel-ing the Source Material",
            "date": "2025-07-19",
            "time": "19:30",
            "location": "Camphill Blair Drummond, Stirling",
            "description": "A vocal recital by Claire Haslin and Phil Gault. Tickets available on Ticketsource.",
            "link": "https://www.ticketsource.co.uk/whats-on/stirling/camphill-blair-drummond/vocal-recital-un-ravel-ing-the-source-material/e-jmryve"
        },
        {
            "id": 32,
            "organization": "Camphill Blair Drummond",
            "title": "Garden Party",
            "date": "2025-08-23",
            "time": "14:00",
            "location": "Camphill Blair Drummond, Stirling",
            "description": "Annual Garden Party featuring live music, food, and activities for all ages.",
            "link": "https://www.camphillblairdrummond.org.uk/events"
        },

        // --- Camphill Corbenic ---
        {
            "id": 33,
            "organization": "Camphill Corbenic",
            "title": "Annual Summer Fayre",
            "date": "2025-08-03",
            "time": "11:00 - 16:00",
            "location": "Corbenic Camphill Community",
            "description": "A day of crafts, food, music, and activities for the whole family.",
            "link": "https://www.corbeniccamphill.co.uk/news-events/"
        },

        // --- Tiphereth Edinburgh ---
        {
            "id": 34,
            "organization": "Tiphereth",
            "title": "Summer Festival",
            "date": "2025-08-09",
            "time": "12:00 - 17:00",
            "location": "Tiphereth Community",
            "description": "Join Tiphereth for their annual Summer Festival with stalls, music, and food.",
            "link": "https://www.tiphereth.org.uk/events/"
        },

        // --- Garvald West Linton ---
        {
            "id": 35,
            "organization": "Garvald West Linton",
            "title": "Community Gathering & Project",
            "date": "2025-07-18",
            "time": "09:45 - 12:30",
            "location": "Garvald West Linton Hall",
            "description": "Regular community gathering and project work.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 36,
            "organization": "Garvald West Linton",
            "title": "Community Gathering & Project (with BBQ lunch)",
            "date": "2025-08-01",
            "time": "09:45 - 14:00",
            "location": "Garvald West Linton Hall",
            "description": "Regular community gathering and project work followed by a BBQ lunch.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 37,
            "organization": "Garvald West Linton",
            "title": "Community Gathering & Project",
            "date": "2025-08-15",
            "time": "09:45 - 12:30",
            "location": "Garvald West Linton Hall",
            "description": "Regular community gathering and project work.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 38,
            "organization": "Garvald West Linton",
            "title": "Community Gathering & Project (with BBQ lunch)",
            "date": "2025-08-29",
            "time": "09:45 - 14:00",
            "location": "Garvald West Linton Hall",
            "description": "Regular community gathering and project work followed by a BBQ lunch.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 39,
            "organization": "Garvald West Linton",
            "title": "Michaelmas/Harvest Lunch & Event",
            "date": "2025-09-29",
            "time": "Afternoon",
            "location": "Garvald West Linton",
            "description": "Annual Michaelmas/Harvest celebration with an event/play and singing around the bonfire.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 40,
            "organization": "Garvald West Linton",
            "title": "Halloween Party",
            "date": "2025-10-31",
            "time": "TBD",
            "location": "Garvald West Linton",
            "description": "Residents and staff to dress up for Halloween.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 41,
            "organization": "Garvald West Linton",
            "title": "Guy Fawkes Fireworks",
            "date": "2025-11-05",
            "time": "TBD",
            "location": "Garvald West Linton",
            "description": "Fireworks display with hot chocolate.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 42,
            "organization": "Garvald West Linton",
            "title": "St Martin – Lantern Walk",
            "date": "2025-11-11",
            "time": "TBD",
            "location": "Garvald West Linton",
            "description": "Lantern walk with a story about St Martin and the Beggar.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 43,
            "organization": "Garvald West Linton",
            "title": "Advent Wreath Making",
            "date": "2025-11-28",
            "time": "TBD",
            "location": "Garvald West Linton Dining Room",
            "description": "Advent wreath making for all.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 44,
            "organization": "Garvald West Linton",
            "title": "1st Advent Celebration",
            "date": "2025-11-30",
            "time": "TBD",
            "location": "Garvald West Linton Main House",
            "description": "Advent celebration with lighting candles, bell ringing, singing, hot chocolate.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 45,
            "organization": "Garvald West Linton",
            "title": "Christmas Fair",
            "date": "2025-12-06",
            "time": "10:30 - 13:00",
            "location": "Garvald West Linton Workshops",
            "description": "Workshops selling handmade items.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 46,
            "organization": "Garvald West Linton",
            "title": "Santa Lucia Event",
            "date": "2025-12-13",
            "time": "PM",
            "location": "Garvald West Linton",
            "description": "Celebration of Santa Lucia.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 47,
            "organization": "Garvald West Linton",
            "title": "Christmas Eve Celebrations",
            "date": "2025-12-24",
            "time": "TBD",
            "location": "Garvald West Linton",
            "description": "Gathering around Christmas tree, singing, gospel reading, candlelit dinner.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },
        {
            "id": 48,
            "organization": "Garvald West Linton",
            "title": "Christmas Day Lunch",
            "date": "2025-12-25",
            "time": "TBD",
            "location": "Garvald West Linton",
            "description": "Christmas Day festive lunch.",
            "link": "https://garvaldwestlinton.org.uk/events/"
        },

        // --- Fairhill Rise (Part of Ruskin Mill Trust) ---
        {
            "id": 49,
            "organization": "Fairhill Rise",
            "title": "John Ruskin Prize 2026: Call for Entries",
            "date": "2025-12-02",
            "time": "17:00 GMT",
            "location": "Online",
            "description": "Call for entries for the prestigious John Ruskin Prize 2026, theme 'Patience in Looking, Truth in Making'. Exhibition Jan 29 – Feb 8, 2026.",
            "link": "https://www.johnruskinprize.co.uk/"
        },
        {
            "id": 50,
            "organization": "Fairhill Rise",
            "title": "John Ruskin Prize 2026: Exhibition",
            "date": "2026-01-29",
            "endDate": "2026-02-08",
            "time": "Varies",
            "location": "Trinity Buoy Wharf, London",
            "description": "Exhibition of selected works for the John Ruskin Prize 2026.",
            "link": "https://www.johnruskinprize.co.uk/"
        },
        {
            "id": 51,
            "organization": "Fairhill Rise",
            "title": "Ruskin Mill Trust: Summer Open Days",
            "date": "2025-07-26",
            "time": "10:00 - 16:00",
            "location": "Ruskin Mill College, Nailsworth",
            "description": "Discover life at Ruskin Mill, meet staff and students, and learn about their unique approach.",
            "link": "https://rmt.org/events/"
        },
        {
            "id": 52,
            "organization": "Fairhill Rise",
            "title": "Ruskin Mill Trust: Open Day at Glasshouse College",
            "date": "2025-10-18",
            "time": "10:00 - 16:00",
            "location": "Glasshouse College, Stourbridge",
            "description": "Explore the facilities and educational programs at Glasshouse College.",
            "link": "https://rmt.org/events/"
        },


        // --- Garvald Edinburgh ---
        {
            "id": 53,
            "organization": "Garvald Edinburgh",
            "title": "Grant's Robot Faces Exhibition",
            "date": "2025-06-02",
            "endDate": "2025-07-31",
            "time": "Varies (check link)",
            "location": "Garvald Makers, Edinburgh",
            "description": "An exhibition of unique robot faces created by artist Grant. Continues through July.",
            "link": "https://www.garvaldedinburgh.org.uk/news-and-events"
        },
        {
            "id": 54,
            "organization": "Garvald Edinburgh",
            "title": "Garvald Gorgie Workshops Open Day 2025",
            "date": "2025-08-30",
            "time": "TBD",
            "location": "Garvald Gorgie Workshops",
            "description": "Open Day at Garvald's Gorgie Workshops.",
            "link": "https://www.garvaldedinburgh.org.uk/news-and-events"
        },

        // --- Camphill (Loch Arthur) ---
        {
            "id": 55,
            "organization": "Camphill (Loch Arthur)",
            "title": "Loch Arthur Farm Tour",
            "date": "2025-07-22",
            "time": "14:00 - 16:00",
            "location": "Loch Arthur Camphill Community",
            "description": "Guided tour of the Loch Arthur farm and creamery.",
            "link": "https://locharthur.org.uk/news-and-events/calendar/"
        },
        {
            "id": 56,
            "organization": "Camphill (Loch Arthur)",
            "title": "Mid-Autumn Festival",
            "date": "2025-10-04",
            "time": "18:00",
            "location": "Loch Arthur Camphill Community",
            "description": "A community celebration with seasonal food, music, and bonfires.",
            "link": "https://locharthur.org.uk/news-and-events/calendar/"
        },

        // --- Anthroposophy in Edinburgh ---
        {
            "id": 57,
            "organization": "Anthroposophy in Edinburgh",
            "title": "Study Group Meeting",
            "date": "2025-09-10",
            "time": "19:00",
            "location": "The Salisbury Centre, Edinburgh",
            "description": "Regular study group on anthroposophical topics.",
            "link": "https://www.anthroposophyinedinburgh.org.uk/"
        }
    ];

    // --- Organization Images (Paths Confirmed and Fairhill Rise) ---
    const organizationImages = {
        "Anthroposophy in Edinburgh": "images/Anthroposophy in Edinburgh Logo.jpg",
        "Camphill Blair Drummond": "images/Camphill Blair Drummond Logo.png",
        "Camphill Corbenic": "images/Camphill Corbenic Logo.avif",
        "Tiphereth": "images/Camphill Tiphereth Logo.png",
        "Edinburgh Christian Community": "images/Christian Community Logo.jpg", // Corrected file name
        "Hope City Church Edinburgh": "images/Hope City Church Edinburgh Logo.jpg", // Added logo for Hope City
        "The Corner Room at Hope City Church Edinburgh": "images/Corner Room Hope City Logo.jpg", // Added logo for Corner Room
        "Edinburgh Steiner School": "images/Edinburgh Steiner School Logo.png",
        "Fairhill Rise": "images/Ruskin Mill Logo.png",
        "Garvald Edinburgh": "images/Garvald Edinburgh Logo.png",
        "Garvald West Linton": "images/Garvald West Linton Logo.jpg",
        "Camphill (Loch Arthur)": "images/Camphill Loch Arthur.jpg"
    };
    // --- End of Data Definitions ---


    const eventContainer = document.getElementById('eventContainer');
    const cardViewBtn = document.getElementById('cardViewBtn');
    const diaryViewBtn = document.getElementById('diaryViewBtn');
    const organizationViewBtn = document.getElementById('organizationViewBtn');

    // Filter out past events, including events that started in the past but are ongoing
    const filterUpcomingEvents = (eventsArray) => {
        const now = new Date();
        now.setHours(0, 0, 0, 0); // Set to start of today for comparison

        return eventsArray.filter(event => {
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
    };

    const upcomingEvents = filterUpcomingEvents(allEvents); // Filter events once

    console.log("Upcoming Events Array:", upcomingEvents);


    // Helper to format dates consistently
    const formatDate = (dateString, endDateString = null) => {
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
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

    // --- Render Diary View ---
    const renderDiaryView = (eventsToDisplay) => {
        eventContainer.innerHTML = '';
        eventContainer.className = 'diary-layout'; // Set class for diary layout

        if (eventsToDisplay.length === 0) {
            eventContainer.innerHTML = '<p class="no-events-message">No upcoming events to display in Diary View.</p>';
            return;
        }

        // Create a map to hold events for each day, including multi-day events on each day they span
        const dailyEventsMap = new Map();
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Start of today

        eventsToDisplay.forEach(event => {
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
                const timeA = a.time.split(' ')[0];
                const timeB = b.time.split(' ')[0];
                return timeA.localeCompare(timeB);
            });

            dailyEventsMap.get(dateKey).forEach(event => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                        <p class="event-org-name-diary ${getOrgClass(event.organization)}">${event.organization}</p>
                        <h4 class="${getOrgClass(event.organization)}">${event.title}</h4>
                        <p><strong>Date:</strong> ${formatDate(event.date, event.endDate)}</p>
                        <p><strong>Time:</strong> ${event.time}</p>
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

            const orgImageSrc = organizationImages[orgName] || 'https://via.placeholder.com/110?text=Logo'; // Fallback to a placeholder, larger
            // Get the first event's link for the organization's homepage URL, or a general org link if events are just placeholders
            const orgHomePageLink = groupedEvents[orgName].length > 0 && groupedEvents[orgName][0].link ? groupedEvents[orgName][0].link : '#';

            const organizationNameColumn = document.createElement('div');
            organizationNameColumn.className = `organization-name-column ${getOrgClass(orgName)}`;
            organizationNameColumn.innerHTML = `
                <a href="${orgHomePageLink}" target="_blank" class="org-link-wrapper">
                    <img src="${orgImageSrc}" alt="${orgName} Logo">
                    <h2 class="${getOrgClass(orgName)}">${orgName}</h2>
                </a>
            `;
            organizationNameColumn.appendChild(document.createTextNode(' ')); // Add a space
            organizationRow.appendChild(organizationNameColumn);

            const organizationEventsColumn = document.createElement('div');
            organizationEventsColumn.className = 'organization-events-column';

            if (groupedEvents[orgName].length > 0) {
                // Sort events by date for each organization
                groupedEvents[orgName].sort((a, b) => new Date(a.date) - new Date(b.date));

                const eventList = document.createElement('ul');
                eventList.className = 'organization-event-list';

                groupedEvents[orgName].forEach(event => {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `
                        <h4 class="${getOrgClass(event.organization)}">${event.title}</h4>
                        <p><strong>Date:</strong> ${formatDate(event.date, event.endDate)}</p>
                        <p><strong>Time:</strong> ${event.time}</p>
                        <p><strong>Location:</strong> ${event.location}</p>
                        ${event.description ? `<p>${event.description}</p>` : ''}
                        <p class="more-info-org"><a href="${event.link}" target="_blank">More Information</a></p>
                    `;
                    eventList.appendChild(listItem);
                });
                organizationEventsColumn.appendChild(eventList);
            } else {
                organizationEventsColumn.innerHTML = `<p class="no-events-message">No upcoming events listed for ${orgName}.</p>`;
            }
            organizationRow.appendChild(organizationEventsColumn);
            eventContainer.appendChild(organizationRow);
        });

        if (sortedOrgNames.length === 0) {
            eventContainer.innerHTML = '<p class="no-events-message">No organizations with upcoming events to display.</p>';
        }
    };


    // --- View Button Event Listeners ---
    cardViewBtn.addEventListener('click', () => {
        renderCardView(upcomingEvents);
        setActiveButton(cardViewBtn);
    });

    diaryViewBtn.addEventListener('click', () => {
        renderDiaryView(upcomingEvents);
        setActiveButton(diaryViewBtn);
    });

    organizationViewBtn.addEventListener('click', () => {
        renderOrganizationView(upcomingEvents);
        setActiveButton(organizationViewBtn);
    });

    // --- Set Active Button Function ---
    const setActiveButton = (activeButton) => {
        // Remove 'active' class from all buttons
        cardViewBtn.classList.remove('active');
        diaryViewBtn.classList.remove('active');
        organizationViewBtn.classList.remove('active');

        // Add 'active' class to the clicked button
        activeButton.classList.add('active');
    };

    // Initial render: Card View by default
    renderCardView(upcomingEvents);
    setActiveButton(cardViewBtn);
});