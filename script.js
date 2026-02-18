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
            "organization": "Edinburgh Steiner School",
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
            "organization": "Edinburgh Steiner School",
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
            "organization": "Edinburgh Steiner School",
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
            "organization": "Edinburgh Steiner School",
            "title": "Early Years Parent Education Evening: Rhythm, Repetition, Reverence",
            "date": "2025-09-18",
            "time": "19:00 - 21:00",
            "location": "Edinburgh Steiner School Campus",
            "description": "An evening for parents focusing on rhythm, repetition, and reverence in early years education.",
            "link": "https://www.edinburghsteinerschool.org.uk/event/early-years-parent-education-evening-rhythm-repetition-reverence/"
        },
        {
            "id": 46, // New ID
            "organization": "Edinburgh Steiner School",
            "title": "El Mercado Market",
            "date": "2025-10-04", // Corrected date format
            "time": "11:00 - 16:00", // Corrected time
            "location": "Edinburgh Steiner School Campus",
            "description": "A vibrant market featuring various stalls.",
            "link": "https://www.edinburghsteinerschool.org.uk/event/el-mercado-market/"
        },
        {
            "id": 73, // New ID for Christmas Market
            "organization": "Edinburgh Steiner School",
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
            "organization": "Edinburgh Steiner School",
            "title": "Edinburgh Steiner Education Course. More information", // Sentence removed as requested
            "date": "2025-09-12",
            "time": "Starts",
            "location": "Edinburgh Steiner School",
            "description": null, // Description is now null as the relevant sentence was removed from the title
            "link": "https://www.edinburghsteinerschool.org.uk/teacher-development/"
        },
        {
            "id": 74,
            "organization": "Edinburgh Steiner School",
            "title": "Class 9 Comedy & Tragedy Performance",
            "date": "2025-09-19",
            "time": "18:00 - 19:00",
            "location": "Edinburgh Steiner School Campus",
            "description": "",
            "link": "https://www.edinburghsteinerschool.org.uk/"
        },
        {
            "id": 75,
            "organization": "Edinburgh Steiner School",
            "title": "Classes 1 - 3 Michaelmas Play",
            "date": "2025-09-30",
            "time": "To be confirmed",
            "location": "Edinburgh Steiner School Campus",
            "description": "",
            "link": "https://www.edinburghsteinerschool.org.uk/"
        },
        {
            "id": 76,
            "organization": "Edinburgh Steiner School",
            "title": "Open Tour",
            "date": "2025-10-03",
            "time": "To be confirmed",
            "location": "Edinburgh Steiner School Campus",
            "description": "To book email admissions@edinburghsteinerschool.org.uk",
            "link": "mailto:admissions@edinburghsteinerschool.org.uk"
        },
        {
            "id": 77,
            "organization": "Edinburgh Steiner School",
            "title": "Christmas Concert",
            "date": "2025-12-10",
            "time": "13:20",
            "location": "Polwarth Church",
            "description": "",
            "link": "https://www.edinburghsteinerschool.org.uk/"
        },
        {
            "id": 78,
            "organization": "Edinburgh Steiner School",
            "title": "Oberufer Play 1: Paradise Play (Classes 3+)",
            "date": "2025-12-16",
            "time": "14:00",
            "location": "Edinburgh Steiner School Campus",
            "description": "",
            "link": "https://www.edinburghsteinerschool.org.uk/"
        },
        {
            "id": 79,
            "organization": "Edinburgh Steiner School",
            "title": "Oberufer Play 2: Shepherds' Play",
            "date": "2025-12-17",
            "time": "14:00",
            "location": "Edinburgh Steiner School Campus",
            "description": "",
            "link": "https://www.edinburghsteinerschool.org.uk/"
        },
        {
            "id": 80,
            "organization": "Edinburgh Steiner School",
            "title": "Oberufer Plays: Paradise & Shepherds' Plays",
            "date": "2025-12-17",
            "time": "19:00",
            "location": "Edinburgh Steiner School Campus",
            "description": "",
            "link": "https://www.edinburghsteinerschool.org.uk/"
        },
        {
            "id": 81,
            "organization": "Edinburgh Steiner School",
            "title": "Oberufer Play 3: Three Kings' Play (Classes 6+)",
            "date": "2026-01-22",
            "time": "14:15",
            "location": "Edinburgh Steiner School Campus",
            "description": "",
            "link": "https://www.edinburghsteinerschool.org.uk/"
        },
        // --- Edinburgh Christian Community (Facebook link) ---
        {
            "id": 4,
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man",
            "date": "2025-07-06",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 8,
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man",
            "date": "2025-07-13",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 11,
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man",
            "date": "2025-07-20",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 16, // New ID
            "organization": "Edinburgh Christian Community",
            "title": "Devotional Gathering",
            "date": "2025-07-27",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Devotional Gathering.",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 17, // New ID
            "organization": "Edinburgh Christian Community",
            "title": "Tom Ravetz's Visit and Congregational Meeting",
            "date": "2025-08-02",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Act of Consecration of Man at 10am followed by a short break and the congregational meeting.",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 47, // New ID
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man",
            "date": "2025-08-03",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 48, // New ID
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man",
            "date": "2025-08-10",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 49, // New ID
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man",
            "date": "2025-08-17",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 50, // New ID
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man",
            "date": "2025-08-24",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 51, // New ID
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man",
            "date": "2025-08-31",
            "time": "10:00",
            "location": "Edinburgh Christian Community Church",
            "description": "Weekly service.",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 101,
            "organization": "Edinburgh Christian Community",
            "title": "Children's Service",
            "date": "2025-09-07",
            "time": "09:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 102,
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man (Luke 10)",
            "date": "2025-09-07",
            "time": "10:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 103,
            "organization": "Edinburgh Christian Community",
            "title": "Devotional Gathering (Luke 17, v 11-19)",
            "date": "2025-09-14",
            "time": "10:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 104,
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration followed by Gospel Study",
            "date": "2025-09-18",
            "time": "10:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "And each Thursday at least until November",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 105,
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man (Matt 6, v 19-34)",
            "date": "2025-09-21",
            "time": "10:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 106,
            "organization": "Edinburgh Christian Community",
            "title": "Talk by Paul Corman: The Sacraments as Contemporary Mystery Dramas I",
            "date": "2025-09-21",
            "time": "11:30",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 107,
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man (Luke 7, v 11-17)",
            "date": "2025-09-28",
            "time": "10:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 108,
            "organization": "Edinburgh Christian Community",
            "title": "The Sacraments as Contemporary Mystery Dramas II",
            "date": "2025-09-28",
            "time": "11:30",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 109,
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man for Michaelmas Day",
            "date": "2025-09-29",
            "time": "10:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 110,
            "organization": "Edinburgh Christian Community",
            "title": "Children's Service with Story",
            "date": "2025-10-05",
            "time": "09:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 111,
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man (Matthew 22, v 1-14)",
            "date": "2025-10-05",
            "time": "10:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 112,
            "organization": "Edinburgh Christian Community",
            "title": "Michael's Countenance, Clear Shining, Solemn Introduction, conversation, artistic exercise with Paul",
            "date": "2025-10-05",
            "time": "11:30",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 113,
            "organization": "Edinburgh Christian Community",
            "title": "Die Menschenweihehandlung, German service",
            "date": "2025-10-11",
            "time": "10:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 114,
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man (Rev 12)",
            "date": "2025-10-12",
            "time": "10:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 115,
            "organization": "Edinburgh Christian Community",
            "title": "Michael's Feet, Free of Earth's Weight. Introduction, conversation, artistic exercise with Paul",
            "date": "2025-10-12",
            "time": "11:30",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 116,
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man (Rev 19, v 11-16)",
            "date": "2025-10-19",
            "time": "10:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 117,
            "organization": "Edinburgh Christian Community",
            "title": "Michaelmas Festival for Adults and Children",
            "date": "2025-10-19",
            "time": "11:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 118,
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man (Ephesians 6, v 10-19)",
            "date": "2025-10-26",
            "time": "10:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 119,
            "organization": "Edinburgh Christian Community",
            "title": "Michael Then and Now. Introduction and conversation",
            "date": "2025-10-26",
            "time": "11:30",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 120,
            "organization": "Edinburgh Christian Community",
            "title": "Children's Service with Story",
            "date": "2025-11-02",
            "time": "09:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 121,
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man (Rev 1)",
            "date": "2025-11-02",
            "time": "10:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 122,
            "organization": "Edinburgh Christian Community",
            "title": "The Sacraments as Contemporary Mystery Dramas III",
            "date": "2025-11-02",
            "time": "11:30",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 123,
            "organization": "Edinburgh Christian Community",
            "title": "The Act of Consecration of Man (Rev 3, v 1-6)",
            "date": "2025-11-09",
            "time": "10:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 124,
            "organization": "Edinburgh Christian Community",
            "title": "Congregational Meeting with Tom Ravetz",
            "date": "2025-11-09",
            "time": "11:30",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 125,
            "organization": "Edinburgh Christian Community",
            "title": "The Act of Consecration of Man (Rev 7, v 9-17)",
            "date": "2025-11-16",
            "time": "10:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 126,
            "organization": "Edinburgh Christian Community",
            "title": "How the Dead can help us. Introduction and Conversation with Peter",
            "date": "2025-11-16",
            "time": "11:30",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 127,
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man (Rev 14)",
            "date": "2025-11-23",
            "time": "10:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 128,
            "organization": "Edinburgh Christian Community",
            "title": "Children's Service with short Story",
            "date": "2025-11-30",
            "time": "09:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 129,
            "organization": "Edinburgh Christian Community",
            "title": "The Act of Consecration of Man (Advent Sunday)",
            "date": "2025-11-30",
            "time": "10:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 130,
            "organization": "Edinburgh Christian Community",
            "title": "Advent Garden",
            "date": "2025-11-30",
            "time": "16:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2501,
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man (Luke 1, 26-38)",
            "date": "2025-12-21",
            "time": "10:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2502,
            "organization": "Edinburgh Christian Community",
            "title": "Talk by Paul: The Act of Consecration of Man is Born Anew Each Christmas as Revealed in the Trinity of Epistles in the 3 Christmas Services",
            "date": "2025-12-21",
            "time": "11:30",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2503,
            "organization": "Edinburgh Christian Community",
            "title": "Christmas Midnight Service with Choir (Matthew 1)",
            "date": "2025-12-24",
            "time": "24:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2504,
            "organization": "Edinburgh Christian Community",
            "title": "Dawn Service (Luke 2, 1-20)",
            "date": "2025-12-25",
            "time": "08:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2505,
            "organization": "Edinburgh Christian Community",
            "title": "Christmas Children's Service",
            "date": "2025-12-25",
            "time": "09:15",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2506,
            "organization": "Edinburgh Christian Community",
            "title": "Daytime Service (John 21, 15-25)",
            "date": "2025-12-25",
            "time": "10:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2507,
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man",
            "date": "2025-12-26",
            "time": "10:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2508,
            "organization": "Edinburgh Christian Community",
            "title": "Daily Course with Paul and Peter: Essence of Christianity 1 - The Nature and Creation of the Human Being",
            "date": "2025-12-26",
            "time": "11:15",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2509,
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man",
            "date": "2025-12-27",
            "time": "10:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2510,
            "organization": "Edinburgh Christian Community",
            "title": "Daily Course with Paul and Peter: Essence of Christianity 2 - Paradise Lost",
            "date": "2025-12-27",
            "time": "11:15",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2511,
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man (Luke 2, 21-40)",
            "date": "2025-12-28",
            "time": "10:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2512,
            "organization": "Edinburgh Christian Community",
            "title": "Talk by Christian Maclean: The Stars of 2026. The expanding universe and the role of the human being",
            "date": "2025-12-28",
            "time": "11:30",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2513,
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man",
            "date": "2025-12-29",
            "time": "10:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2514,
            "organization": "Edinburgh Christian Community",
            "title": "Daily Course with Paul and Peter: Essence of Christianity 3 - A World without God",
            "date": "2025-12-29",
            "time": "11:15",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2515,
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man",
            "date": "2025-12-30",
            "time": "10:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2516,
            "organization": "Edinburgh Christian Community",
            "title": "Daily Course with Paul and Peter: Essence of Christianity 4 - In the Fullness of Time",
            "date": "2025-12-30",
            "time": "11:15",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2517,
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man",
            "date": "2025-12-31",
            "time": "10:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2518,
            "organization": "Edinburgh Christian Community",
            "title": "Daily Course with Paul and Peter: Essence of Christianity 5 - Son of God and Son of Man",
            "date": "2025-12-31",
            "time": "11:15",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2519,
            "organization": "Edinburgh Christian Community",
            "title": "Family Gathering with games, singing, food & Close of Day at the altar",
            "date": "2025-12-31",
            "time": "17:00-20:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2520,
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man with New Year Sermon",
            "date": "2026-01-01",
            "time": "10:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2521,
            "organization": "Edinburgh Christian Community",
            "title": "Daily Course with Paul and Peter: Essence of Christianity 6 - The Mystery of the Powerless God",
            "date": "2026-01-01",
            "time": "11:15",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2522,
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man",
            "date": "2026-01-02",
            "time": "10:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2523,
            "organization": "Edinburgh Christian Community",
            "title": "Daily Course with Paul and Peter: Essence of Christianity 7 - The Healing Power of Christ",
            "date": "2026-01-02",
            "time": "11:15",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2524,
            "organization": "Edinburgh Christian Community",
            "title": "German Service: Menschenweihehandlung",
            "date": "2026-01-03",
            "time": "10:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2525,
            "organization": "Edinburgh Christian Community",
            "title": "Daily Course with Paul and Peter: Essence of Christianity 8 - Christendom",
            "date": "2026-01-03",
            "time": "11:15",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2526,
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man (John 1, 1-18)",
            "date": "2026-01-04",
            "time": "10:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2527,
            "organization": "Edinburgh Christian Community",
            "title": "Daily Course with Paul and Peter: Essence of Christianity 9 - History and Mysticism",
            "date": "2026-01-04",
            "time": "11:30",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2528,
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man",
            "date": "2026-01-05",
            "time": "10:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2529,
            "organization": "Edinburgh Christian Community",
            "title": "Daily Course with Paul and Peter: Essence of Christianity 10 - Apocalyptic Outlook",
            "date": "2026-01-05",
            "time": "11:15",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2530,
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man (Epiphany)",
            "date": "2026-01-06",
            "time": "10:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2531,
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man (Matthew 2, 1-12)",
            "date": "2026-01-11",
            "time": "10:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2532,
            "organization": "Edinburgh Christian Community",
            "title": "Farewell for Paul and Fredy over Coffee",
            "date": "2026-01-11",
            "time": "11:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2533,
            "organization": "Edinburgh Christian Community",
            "title": "Follow the Star - input and conversation about an exciting new year and seeking our own star",
            "date": "2026-01-11",
            "time": "11:30",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2534,
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man (Luke 2, 41-52)",
            "date": "2026-01-18",
            "time": "10:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2535,
            "organization": "Edinburgh Christian Community",
            "title": "Development Group meet",
            "date": "2026-01-18",
            "time": "11:30",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2536,
            "organization": "Edinburgh Christian Community",
            "title": "Act of Consecration of Man (John 2, 1-11)",
            "date": "2026-01-25",
            "time": "10:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2537,
            "organization": "Edinburgh Christian Community",
            "title": "Meeting with Johannes (main architect) - to be confirmed",
            "date": "2026-01-25",
            "time": "11:30",
            "location": "21 Napier Road, Edinburgh",
            "description": "Possible date - to be confirmed",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        // --- Camphill Blair Drummond (from recent Google Search tool results) ---
        {
            "id": 62, // New ID for the generic link
            "organization": "Camphill Blair Drummond",
            "title": "For current information, please click here",
            "date": null,
            "time": null,
            "location": null,
            "description": null,
            "link": "https://camphillblairdrummond.org.uk/news",
            "isOrganizationDetail": true // Custom property to signify it's for org view only
        },
        {
            "id": 18,
            "organization": "Camphill Blair Drummond",
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
            "organization": "Camphill Corbenic",
            "title": "For current information, please click here",
            "date": null,
            "time": null,
            "location": null,
            "description": null,
            "link": "https://www.corbeniccamphill.co.uk/newsletter",
            "isOrganizationDetail": true // Custom property to signify it's for org view only
        },
        {
            "id": 61, // New ID for Corbenic Community Shop & Café
            "organization": "Camphill Corbenic",
            "title": "Corbenic Community Shop & Café",
            "date": null, // This does not go in Diary view
            "time": "Monday – Sunday, 9:30 AM – 4:00 PM",
            "location": "Corbenic Camphill Community",
            "description": "Visit our community shop and café for local produce and a warm welcome.",
            "link": "https://www.corbeniccamphill.co.uk/corbenic-shop",
            "isOrganizationDetail": true // Custom property to signify it's for org view only
        },


        // --- Tiphereth Edinburgh (No specific upcoming events found via search) ---
        {
            "id": 64, // New ID for the generic link
            "organization": "Tiphereth",
            "title": "For current information, please click here",
            "date": null,
            "time": null,
            "location": null,
            "description": null,
            "link": "https://www.facebook.com/tiphereth.camphilledinburgh",
            "isOrganizationDetail": true // Custom property to signify it's for org view only
        },
        {
            "id": 21,
            "organization": "Tiphereth",
            "title": "Open Morning",
            "date": "2025-07-30",
            "time": "10:00 - 13:00", // Updated time
            "location": "Tiphereth Community",
            "description": "Open Morning at Tiphereth. To book your place, please contact Lucy.Robertson@tiphereth.org.uk", // Updated description
            "link": "https://www.tiphereth.org.uk/"
        },
        // ADDITION 1.1: Tiphereth Etsy Shop for Organization view
        {
            "id": 54, // New ID for Etsy shop
            "organization": "Tiphereth",
            "title": "Tiphereth Etsy Shop",
            "date": null, // This does not go in Diary view, so no specific date
            "time": null,
            "location": "Online",
            "description": "Browse and purchase handcrafted items made in Tiphereth workshops.",
            "link": "https://www.etsy.com/uk/shop/printstudiotiphereth",
            "isOrganizationDetail": true // Custom property to signify it's for org view only
        },
        // ADDITION 1.2: Tiphereth Pop-up Shop
        {
            "id": 55, // New ID for pop-up shop
            "organization": "Tiphereth",
            "title": "New Pop-up Shop Opening",
            "date": "2025-07-11",
            "time": "To be confirmed", // Assuming time not specified, or can be added if known
            "location": "37-39 Torphin Road, Edinburgh, EH13 0PG",
            "description": "Tiphereth is opening a new pop-up shop offering a variety of handcrafted items made in their workshops, including print studio products.",
            "link": "https://www.tiphereth.org.uk/" // Link to Tiphereth's main site for general info
        },
        {
            "id": 201,
            "organization": "Tiphereth",
            "title": "Open Morning",
            "date": "2025-09-11",
            "time": "10:00 - 13:00",
            "location": "55 Torphin Road, Edinburgh, EH13 0PQ",
            "description": "Join us for our Open Morning! If you are looking for a Day Service or transition alternatives following your school years, come along to our next Open Morning. Confirm your attendance with our Day Service Manager - Lucy Robertson on Lucy.Robertson@tiphereth.org.uk. Phone: 0131-4412055.",
            "link": "https://www.tiphereth.org.uk/"
        },
        {
            "id": 202,
            "organization": "Tiphereth",
            "title": "Tiphereth stall at Alpaca Day in aid of Marie Curie",
            "date": "2025-08-31",
            "time": "10:00 - 16:00",
            "location": "BobCat Alpacas, Bonaly, EH13 0PB",
            "description": "Tiphereth stall at Alpaca Day in aid of Marie Curie. Live music, spinning, face painting, stalls, refreshments. Tickets from £5 per person. Tickets: search ‘Alpaca Gala Day’ on Eventbrite.",
            "link": "https://www.eventbrite.co.uk/"
        },

        // --- Garvald West Linton (from recent Google Search tool results) ---
        // Garvald West Linton: Christmas Fair (kept for both Diary and Org views)
        {
            "id": 31,
            "organization": "Garvald West Linton",
            "title": "Garvald West Linton Christmas Fair",
            "date": "2025-12-06",
            "time": "10:30 - 13:00",
            "location": "Garvald West Linton",
            "description": "Various stalls. Hot food, teas & coffees. Crafts activities.",
            "poster": "images/garvald-west-linton-christmas-fair-2025.jpg",
            "link": "https://garvaldwestlinton.org.uk/event/christmas-fair/"
        },

        // --- Fairhill Rise (Was Ruskin Mill, now updated name and added events) ---
        {
            "id": 66, // New ID for the generic link
            "organization": "Fairhill Rise",
            "title": "For current information, please click here",
            "date": null,
            "time": null,
            "location": null,
            "description": null,
            "link": "https://rmt.org/post-education/fairhillrise/",
            "isOrganizationDetail": true // Custom property to signify it's for org view only
        },
        {
            "id": 35,
            "organization": "Fairhill Rise", // Updated from Ruskin Mill
            "title": "Open Day",
            "date": "2025-07-31",
            "time": "To be confirmed",
            "location": "Fairhill Rise, East Lothian",
            "description": "An opportunity to visit Fairhill Rise and learn about their work.",
            "link": "https://rmt.org/post-education/fairhillrise/"
        },
        {
            "id": 36,
            "organization": "Fairhill Rise", // Updated from Ruskin Mill
            "title": "Open Day",
            "date": "2025-08-25",
            "time": "To be confirmed",
            "location": "Fairhill Rise, East Lothian",
            "description": "An opportunity to visit Fairhill Rise and learn about their work.",
            "link": "https://rmt.org/post-education/fairhillrise/"
        },
        {
            "id": 37,
            "organization": "Fairhill Rise", // Updated from Ruskin Mill
            "title": "Open Day",
            "date": "2025-09-29",
            "time": "To be confirmed",
            "location": "Fairhill Rise, East Lothian",
            "description": "An opportunity to visit Fairhill Rise and learn about their work.",
            "link": "https://rmt.org/post-education/fairhillrise/"
        },
        {
            "id": 38,
            "organization": "Fairhill Rise", // Was Ruskin Mill, John Ruskin Prize related event
            "title": "John Ruskin Prize 2026: Call for Entries",
            "date": "2025-12-02", // Deadline for entries
            "time": "17:00 GMT",
            "location": "Online",
            "description": "Call for entries for the prestigious John Ruskin Prize 2026, theme 'Patience in Looking, Truth in Making'. Exhibition Jan 29 – Feb 8, 2026.",
            "link": "https://www.ruskinprize.co.uk/" // Corrected link
        },
        {
            "id": 39,
            "organization": "Fairhill Rise", // Was Ruskin Mill, John Ruskin Prize related event
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
            "organization": "Garvald Edinburgh",
            "title": "For current information, please click here",
            "date": null,
            "time": null,
            "location": null,
            "description": null,
            "link": "https://www.garvaldedinburgh.org.uk/news-and-events",
            "isOrganizationDetail": true // Custom property to signify it's for org view only
        },
        {
            "id": 68, // New ID for the second generic link
            "organization": "Garvald Edinburgh",
            "title": "Visit our Facebook page for more ", // Added space here
            "date": null,
            "time": null,
            "location": null,
            "description": null,
            "link": "https://www.facebook.com/GarvaldEdinburgh",
            "isOrganizationDetail": true // Custom property to signify it's for org view only
        },
        {
            "id": 40,
            "organization": "Garvald Edinburgh",
            "title": "Grant's Robot Faces Exhibition",
            "date": "2025-06-02", // Start date in the past
            "endDate": "2025-07-31", // End date in the future
            "time": "Varies (check link)",
            "location": "Garvald Makers, Edinburgh",
            "description": "An exhibition of unique robot faces created by artist Grant. Continues through July.",
            "link": "https://www.garvaldedinburgh.org.uk/events" // Found on general events page previously
        },
            {
                "id": 2101,
                "organization": "Garvald Edinburgh",
                "title": "HARVEST: Contemporary Craft Fair (City Art Centre)",
                "date": "2025-10-11",
                "endDate": "2025-10-19",
                "time": "See event programme",
                "location": "City Art Centre, Edinburgh",
                "description": "We are delighted our Garvald Woodworkers and Textiles makers have had work selected to be part of HARVEST. HARVEST: Contemporary Craft Fair is coming to Edinburgh’s City Art Centre 11–19 Oct 2025. Presented by @craftscotland and curated by @stacey___hunter, the Fair will immerse audiences in the work of Scotland-based makers, complemented by a rich programme of workshops and events.",
                "link": "https://www.craftscotland.org/about/projects/harvest-contemporary-craft-fair-2025/makers; https://cultureedinburgh.com/our-venues/city-art-centre"
            },
                {
                    "id": 2110,
                    "organization": "Garvald Edinburgh",
                    "title": "Orwell Arts Open Day",
                    "date": "2025-11-29",
                    "time": "10:30-13:30",
                    "location": "Orwell Arts, 17 Orwell Place, Edinburgh, EH11 2AA",
                    "description": "Open Day at Orwell Arts — drop in to see work from Garvald makers and learn about our workshops.",
                    "link": "https://www.garvaldedinburgh.org.uk/events/orwell-arts-open-day"
                },
                {
                    "id": 2111,
                    "organization": "Garvald Edinburgh",
                    "title": "Life Is Weird — exhibition of work from Mayfield House staff",
                    "date": "2025-11-29",
                    "time": "13:00-17:00",
                    "location": "Phoenix Centre, 1 Harrison Place, Edinburgh, EH11 1SF",
                    "description": "Exhibition of artwork from Mayfield House staff. More info via the event link.",
                    "link": "https://fb.me/e/56ClqSu1C"
                },
                {
                    "id": 2112,
                    "organization": "Garvald Edinburgh",
                    "title": "Life Is Weird — exhibition of work from Mayfield House staff",
                    "date": "2025-11-30",
                    "time": "11:00-15:00",
                    "location": "Phoenix Centre, 1 Harrison Place, Edinburgh, EH11 1SF",
                    "description": "Exhibition of artwork from Mayfield House staff. More info via the event link.",
                    "link": "https://fb.me/e/56ClqSu1C"
                },
                {
                    "id": 2120,
                    "organization": "Garvald Edinburgh",
                    "title": "Life Is Weird — exhibition of work from Mayfield House staff (29–30 Nov 2025)",
                    "date": "2025-11-29",
                    "endDate": "2025-11-30",
                    "time": "See programme (29 Nov: 13:00-17:00; 30 Nov: 11:00-15:00)",
                    "location": "Phoenix Centre, 1 Harrison Place, Edinburgh, EH11 1SF",
                    "description": "Exhibition of artwork from Mayfield House staff across 29–30 Nov 2025.",
                    "link": "https://fb.me/e/56ClqSu1C",
                    "isOrganizationDetail": true
                },
           {
            "id": 3,
            "organization": "Garvald Edinburgh",
            "title": "Garvald Artists at Edinburgh Printmakers",
            "date": "2025-07-31",
            "endDate": "2025-08-31",
            "time": "Tuesday - Sunday, 10am-6pm (Tuesday entry via 2 Gilmore Park, ring buzzer for access)",
            "location": "KUBA Cafe, Edinburgh Printmakers, Castle Mills, 1 Dundee St, EH3 9FP",
            "description": "A Creative Scotland funded project showcasing the work of Kwok Kin Chan, Alison Edward, and David Lorimer, who explored a variety of printmaking techniques.",
            "link": "https://www.garvaldedinburgh.org.uk/events/garvald-artists-at-edinburgh-printmakers"
        },
        {
            "id": 41,
            "organization": "Garvald Edinburgh",
            "title": "Garvald Makers Shop Exhibition",
            "date": "2025-07-31",
            "endDate": "2025-10-31",
            "time": "Monday - Saturday, 9.30am-5pm",
            "location": "Garvald Makers, 356 Morningside Road, EH11 2A",
            "description": "A selection of prints by Garvald artists are on show and for sale.",
            "link": "https://www.garvaldedinburgh.org.uk/shop"
        },
        {
            "id": 42,
            "organization": "Garvald Edinburgh",
            "title": "ASSEMBLAGE - Visual Arts Scotland Artists and Makers Market",
            "date": "2025-08-15",
            "endDate": "2025-08-17",
            "time": "10.30am - 4.30pm daily",
            "location": "Dalkeith Palace and Country Park, Dalkeith, EH22 2NA",
            "description": "Garvald Edinburgh will show a curated selection of abstract artwork by John Black alongside a collection of hand carved vessels.",
            "link": "https://www.garvaldedinburgh.org.uk/events/visual-arts-scotland-artists-and-makers-market"
        },
        {
            "id": 43,
            "organization": "Garvald Edinburgh",
            "title": "Garvald Puppetry Ensemble Performance",
            "date": "2025-08-15",
            "time": "11:30 AM",
            "location": "Garvald Edinburgh Exhibition room on the ground floor, Dalkeith Palace",
            "description": "A vibrant, immersive experience centering around expressive dance and movement.",
            "link": "https://www.garvaldedinburgh.org.uk/events/visual-arts-scotland-artists-and-makers-market#:~:text=Garvald%20Woodwork%20Makers.%20The%20Garvald%20Puppetry%20ensemble,offer%20a%20vibrant%2C%20immersive%20experience%20centring%20around"
        },
        {
            "id": 58,
            "organization": "Garvald Edinburgh",
            "title": "Garvald at the Edinburgh Art Fair",
            "date": "2025-09-19",
            "endDate": "2025-09-21",
            "time": "Friday to Sunday, 11am-6pm",
            "location": "O2 Academy, Newmarket Road, Edinburgh, EH14 1RJ",
            "description": "Garvald Edinburgh returns as a Charity Partner, presenting the work of John Black, David Lorimer, Angela Ramsay, Nicole Tait and Joseph Whales.",
            "link": "https://www.artedinburgh.com/garvald-edinburgh"
        },
//
        // --- Camphill (Loch Arthur) (No specific upcoming events found via search) ---
        {
            "id": 69, // New ID for the generic link
            "organization": "Camphill (Loch Arthur)",
            "title": "For current information, please click here",
            "date": null,
            "time": null,
            "location": null,
            "description": null,
            "link": "https://locharthur.org.uk/news-and-events/calendar/",
            "isOrganizationDetail": true // Custom property to signify it's for org view only
        },
        {
            "id": 53, // New ID
            "organization": "Camphill (Loch Arthur)",
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
            "organization": "Anthroposophy in Edinburgh",
            "title": "For current information, please click here or sign up for the local newsletter", // Modified title
            "date": null,
            "time": null,
            "location": null,
            "description": null,
            "link": "https://www.facebook.com/anthroposophyscotland", // Existing link
            "secondaryLink": "https://forms.gle/8jWbkYaGNq76kscE7", // New secondary link for newsletter
            "isOrganizationDetail": true // Custom property to signify it's for org view only
        },
        // NEW CONSOLIDATED ITEM: Forum Meetings for Organization View
        {
            "id": 98, // New unique ID for the consolidated forum event
            "organization": "Anthroposophy in Edinburgh",
            "title": "Forum Meetings (Letters to Members, Anthroposophical Leading Thoughts & Michaelmas)",
            "date": "2026: 1 Feb, 8 Mar, 12 Apr (Introduction to membership of the Society), 3 May, 14 Jun, 5 Jul.",
            "time": "2-3:15pm (for Forum Meetings)",
            "location": "Eurythmy Room, Edinburgh Steiner School",
            "description": "Regular forum meetings, AGM, and Michaelmas.",
            "link": "Contact :ioberski[at]gmail.com",
            "isOrganizationDetail": true
        },
        // Individual Forum Meeting events (for Diary View)
        {
            "id": 86, // Existing ID
            "organization": "Anthroposophy in Edinburgh",
            "title": "Forum Meeting (Letters to Members and Anthroposophical Leading Thoughts)",
            "date": "2025-09-07",
            "time": "14:00-15:15",
            "location": "Eurythmy Room, Edinburgh Steiner School",
            "description": "Forum meeting.",
            "link": "Contact :ioberski[at]gmail.com"
        },
        {
            "id": 87, // Existing ID
            "organization": "Anthroposophy in Edinburgh",
            "title": "CANCELLED - Forum Meeting (Letters to Members and Anthroposophical Leading Thoughts)",
            "date": "2025-12-14",
            "time": "14:00-15:15",
            "location": "Eurythmy Room, Edinburgh Steiner School",
            "description": "Forum meeting - Cancelled.",
            "link": "Contact :ioberski[at]gmail.com"
        },
        {
            "id": 88, // Existing ID
            "organization": "Anthroposophy in Edinburgh",
            "title": "Forum Meeting (Letters to Members and Anthroposophical Leading Thoughts)",
            "date": "2026-01-11",
            "time": "14:00-15:15",
            "location": "Eurythmy Room, Edinburgh Steiner School",
            "description": "Forum meeting.",
            "link": "Contact :ioberski[at]gmail.com"
        },
        {
            "id": 89, // Existing ID
            "organization": "Anthroposophy in Edinburgh",
            "title": "Forum Meeting (Letters to Members and Anthroposophical Leading Thoughts)",
            "date": "2026-02-01",
            "time": "14:00-15:15",
            "location": "Eurythmy Room, Edinburgh Steiner School",
            "description": "Forum meeting.",
            "link": "Contact :ioberski[at]gmail.com"
        },
        {
            "id": 2539,
            "organization": "Edinburgh Christian Community",
            "title": "Devotional Gathering (Matthew 4, 1-11)",
            "date": "2026-02-22",
            "time": "10:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2548,
            "organization": "Edinburgh Steiner School",
            "title": "Class 8 present Shakespeare's The Comedy of Errors",
            "date": "2026-02-26",
            "time": "19:00",
            "location": "Edinburgh Steiner School Campus",
            "description": "Table audience & refreshments. Book Your Table For Shakespeare's Funniest Play.",
            "link": "https://www.zeffy.com/en-GB/ticketing/comedy-of-errors-3",
            "hideFromOrganizationView": true
        },
        {
            "id": 2549,
            "organization": "Edinburgh Steiner School",
            "title": "Class 8 present Shakespeare's The Comedy of Errors",
            "date": "2026-02-27",
            "time": "18:30",
            "location": "Edinburgh Steiner School Campus",
            "description": "Table audience & refreshments. Book Your Table For Shakespeare's Funniest Play.",
            "link": "https://www.zeffy.com/en-GB/ticketing/comedy-of-errors-3",
            "hideFromOrganizationView": true
        },
        {
            "id": 2550,
            "organization": "Edinburgh Steiner School",
            "title": "Class 8 present Shakespeare's The Comedy of Errors",
            "date": "2026-02-26",
            "time": "Thursday 26 Feb 7pm, Friday 27 Feb 6:30pm",
            "location": "Edinburgh Steiner School Campus",
            "description": "Table audience & refreshments. Book Your Table For Shakespeare's Funniest Play.",
            "link": "https://www.zeffy.com/en-GB/ticketing/comedy-of-errors-3",
            "isOrganizationDetail": true
        },
        {
            "id": 2540,
            "organization": "Edinburgh Christian Community",
            "title": "Devotional Gathering (Matthew 17, 1-9)",
            "date": "2026-03-01",
            "time": "10:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 90, // Existing ID
            "organization": "Anthroposophy in Edinburgh",
            "title": "Forum Meeting (Letters to Members and Anthroposophical Leading Thoughts)",
            "date": "2026-03-08",
            "time": "14:00-15:15",
            "location": "Eurythmy Room, Edinburgh Steiner School",
            "description": "Forum meeting.",
            "link": "Contact :ioberski[at]gmail.com"
        },
        {
            "id": 2541,
            "organization": "Edinburgh Christian Community",
            "title": "Children's Service with Story",
            "date": "2026-03-08",
            "time": "09:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2542,
            "organization": "Edinburgh Christian Community",
            "title": "The Act of Consecration of Man (Luke 11, 14-36)",
            "date": "2026-03-08",
            "time": "10:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2543,
            "organization": "Edinburgh Christian Community",
            "title": "Project Development Group meeting",
            "date": "2026-03-08",
            "time": "11:30",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2544,
            "organization": "Edinburgh Christian Community",
            "title": "The Act of Consecration of Man (John 6)",
            "date": "2026-03-15",
            "time": "10:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2545,
            "organization": "Edinburgh Christian Community",
            "title": "Secrets of the Sounding Bowl - Talk and demonstration by Anne Byrne",
            "date": "2026-03-15",
            "time": "11:30",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2546,
            "organization": "Edinburgh Christian Community",
            "title": "The Act of Consecration of Man (John 8)",
            "date": "2026-03-22",
            "time": "10:00",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 2547,
            "organization": "Edinburgh Christian Community",
            "title": "Synod sharing, news from the Region",
            "date": "2026-03-22",
            "time": "11:30",
            "location": "21 Napier Road, Edinburgh",
            "description": "",
            "link": "https://www.thechristiancommunity.co.uk/the-christian-community-in-edinburgh/"
        },
        {
            "id": 91, // Existing ID
            "organization": "Anthroposophy in Edinburgh",
            "title": "Introduction to membership of the Society",
            "date": "2026-04-12",
            "time": "14:00-15:15",
            "location": "Eurythmy Room, Edinburgh Steiner School",
            "description": "Introduction to membership of the Society.",
            "link": "Contact :ioberski[at]gmail.com"
        },
        {
            "id": 92, // Existing ID
            "organization": "Anthroposophy in Edinburgh",
            "title": "Forum Meeting (Letters to Members and Anthroposophical Leading Thoughts)",
            "date": "2026-05-03",
            "time": "14:00-15:15",
            "location": "Eurythmy Room, Edinburgh Steiner School",
            "description": "Forum meeting.",
            "link": "Contact :ioberski[at]gmail.com"
        },
        {
            "id": 93, // Existing ID
            "organization": "Anthroposophy in Edinburgh",
            "title": "Forum Meeting (Letters to Members and Anthroposophical Leading Thoughts)",
            "date": "2026-06-14",
            "time": "14:00-15:15",
            "location": "Eurythmy Room, Edinburgh Steiner School",
            "description": "Forum meeting.",
            "link": "Contact :ioberski[at]gmail.com"
        },
        {
            "id": 94, // Existing ID
            "organization": "Anthroposophy in Edinburgh",
            "title": "Forum Meeting (Letters to Members and Anthroposophical Leading Thoughts)",
            "date": "2026-07-05",
            "time": "14:00-15:15",
            "location": "Eurythmy Room, Edinburgh Steiner School",
            "description": "Forum meeting.",
            "link": "Contact :ioberski[at]gmail.com"
        },
        // NEW ITEM: Forum on 5 October: Michaelmas
        {
            "id": 95, // Existing ID
            "organization": "Anthroposophy in Edinburgh",
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
            "organization": "Anthroposophy in Edinburgh",
            "title": "Easter Preparation event",
            "date": "2026-03-14",
            "time": "To be confirmed",
            "location": "To be confirmed",
            "description": "Details to be confirmed.",
            "link": "Contact :ioberski[at]gmail.com"
        },
        {
            "id": 2538,
            "organization": "Edinburgh Steiner School",
            "title": "Steiner Waldorf Education Taster Day",
            "date": "2026-03-14",
            "time": "09:00 - 17:00",
            "location": "Edinburgh Steiner School, 60 - 64 Spylaw Road, Edinburgh South EH10 5BR",
            "description": "£45. <a href='https://edinburghsteinerschool.org.uk/steiner-education/teachercpd/' target='_blank'>Website</a> | <a href='https://www.facebook.com/EdSteinerSchool' target='_blank'>Facebook</a> | <a href='https://www.instagram.com/edinburghsteiner.school' target='_blank'>Instagram</a>",
            "link": "https://edinburghsteinerschool.org.uk/steiner-education/teachercpd/"
        },
                // Removed duplicate Tuesday study group event for 16 September (id 56)
        {
            "id": 57, // Existing ID
            "organization": "Anthroposophy in Edinburgh",
            "title": "Fire in the Temple: A Staged Reading",
            "date": "2025-11-09",
            "time": "14:00-16:30",
            "location": "Edinburgh Steiner School",
            "description": "A staged reading of the play by Glen Williamson.",
            "link": "https://www.eventbrite.co.uk/e/fire-in-the-temple-tickets-1488785109339?aff=oddtdtcreator"
        },
        {
            "id": 2300,
            "organization": "Anthroposophy in Edinburgh",
            "title": "Apocalypse - The Revelation of John. A Creative Speech Performance",
            "date": "2026-01-25",
            "time": "14:00-15:30",
            "location": "Columcille",
            "description": "A creative speech performance of the Apocalypse - The Revelation of John.",
            "link": "https://www.eventbrite.co.uk/e/apocalypse-the-reveleation-of-john-tickets-1976765067530?aff=oddtdtcreator"
        },
        // --- Balancing in Freedom performances ---
        {
            "id": 2310,
            "organization": "Iddo Oberski",
            "title": "Balancing in Freedom",
            "date": "2026-01-29",
            "time": "19:30-21:00",
            "location": "Scottish Storytelling Centre, Edinburgh",
            "description": "Drawing on his family's Holocaust history, his own experience of disability, and Rudolf Steiner's Philosophy of Freedom, Iddo Oberski weaves a deeply personal journey with his onstage puppet counterpart, Svjetlana, a dialogue that constantly surprises and reveals new layers of understanding.",
            "link": "https://scottishstorytellingcentre.online.red61.co.uk/event/913:6368/"
        },
        {
            "id": 2311,
            "organization": "Iddo Oberski",
            "title": "Balancing in Freedom",
            "date": "2026-03-15",
            "time": "14:00-15:30",
            "location": "Scottish Storytelling Centre, Edinburgh",
            "description": "Drawing on his family's Holocaust history, his own experience of disability, and Rudolf Steiner's Philosophy of Freedom, Iddo Oberski weaves a deeply personal journey with his onstage puppet counterpart, Svjetlana, a dialogue that constantly surprises and reveals new layers of understanding.",
            "link": "https://scottishstorytellingcentre.online.red61.co.uk/event/913:6368/"
        },
        {
            "id": 2312,
            "organization": "Iddo Oberski",
            "title": "Balancing in Freedom",
            "date": "2026-04-18",
            "time": "14:00-15:30",
            "location": "Cumbernauld Theatre at Lanternhouse",
            "description": "Drawing on his family's Holocaust history, his own experience of disability, and Rudolf Steiner's Philosophy of Freedom, Iddo Oberski weaves a deeply personal journey with his onstage puppet counterpart, Svjetlana, a dialogue that constantly surprises and reveals new layers of understanding.",
            "link": "https://lanternhousearts.org/events/balancing-in-freedom/"
        },
        {
            "id": 2313,
            "organization": "Iddo Oberski",
            "title": "Balancing in Freedom",
            "date": "2026-06-13",
            "time": "14:00-15:30",
            "location": "Scottish Storytelling Centre, Edinburgh",
            "description": "Drawing on his family's Holocaust history, his own experience of disability, and Rudolf Steiner's Philosophy of Freedom, Iddo Oberski weaves a deeply personal journey with his onstage puppet counterpart, Svjetlana, a dialogue that constantly surprises and reveals new layers of understanding.",
            "link": "https://scottishstorytellingcentre.online.red61.co.uk/event/913:6368/"
        },
        {
            "id": 2314,
            "organization": "Iddo Oberski",
            "title": "Balancing in Freedom",
            "date": "2026-07-31",
            "time": "19:30-21:00",
            "location": "Cumbernauld Theatre at Lanternhouse",
            "description": "Drawing on his family's Holocaust history, his own experience of disability, and Rudolf Steiner's Philosophy of Freedom, Iddo Oberski weaves a deeply personal journey with his onstage puppet counterpart, Svjetlana, a dialogue that constantly surprises and reveals new layers of understanding.",
            "link": "https://lanternhousearts.org/events/balancing-in-freedom/"
        },
        {
            "id": 2315,
            "organization": "Iddo Oberski",
            "title": "Balancing in Freedom",
            "date": "2026-09-10",
            "time": "19:30-21:00",
            "location": "Cumbernauld Theatre at Lanternhouse",
            "description": "Drawing on his family's Holocaust history, his own experience of disability, and Rudolf Steiner's Philosophy of Freedom, Iddo Oberski weaves a deeply personal journey with his onstage puppet counterpart, Svjetlana, a dialogue that constantly surprises and reveals new layers of understanding.",
            "link": "https://lanternhousearts.org/events/balancing-in-freedom/"
        },
        {
            "id": 2316,
            "organization": "Iddo Oberski",
            "title": "Balancing in Freedom",
            "date": "2026-10-11",
            "time": "14:00-15:30",
            "location": "Cumbernauld Theatre at Lanternhouse",
            "description": "Drawing on his family's Holocaust history, his own experience of disability, and Rudolf Steiner's Philosophy of Freedom, Iddo Oberski weaves a deeply personal journey with his onstage puppet counterpart, Svjetlana, a dialogue that constantly surprises and reveals new layers of understanding.",
            "link": "https://lanternhousearts.org/events/balancing-in-freedom/"
        },
        {
            "id": 2317,
            "organization": "Iddo Oberski",
            "title": "Balancing in Freedom",
            "date": "2026-11-20",
            "time": "19:30-21:00",
            "location": "Scottish Storytelling Centre, Edinburgh",
            "description": "Drawing on his family's Holocaust history, his own experience of disability, and Rudolf Steiner's Philosophy of Freedom, Iddo Oberski weaves a deeply personal journey with his onstage puppet counterpart, Svjetlana, a dialogue that constantly surprises and reveals new layers of understanding.",
            "link": "https://scottishstorytellingcentre.online.red61.co.uk/event/913:6368/"
        },
        // --- Edinburgh Steiner School (generic link for organization view) ---
        {
            "id": 71, // New ID for the generic link
            "organization": "Edinburgh Steiner School",
            "title": "For current information, please click here",
            "date": null,
            "time": null,
            "location": null,
            "description": null,
            "link": "https://www.edinburghsteinerschool.org.uk/community/events/",
            "isOrganizationDetail": true // Custom property to signify it's for org view only
        },
        // --- Garvald Home Farm (new organization) ---
        {
            "id": 72, // New ID for Garvald Home Farm generic link
            "organization": "Garvald Home Farm",
            "title": "For current information, please click here",
            "date": null,
            "time": null,
            "location": null,
            "description": null,
            "link": "https://www.facebook.com/GarvaldHomeFarm/?locale=en_GB",
            "isOrganizationDetail": true // Custom property to signify it's for org view only
        },
        {
            "id": 1001,
            "organization": "Camphill (Loch Arthur)",
            "title": "Loch Arthur Farm Shop and Cafe",
            "date": null,
            "time": "Monday–Saturday: 9:00am–5:00pm; Sunday: 10:00am–4:00pm",
            "location": "Loch Arthur Camphill Community",
            "description": "Visit our Farm Shop and Cafe for fresh organic produce, artisan bread, cheese, and more. Or order <a href=\"https://www.locharthurshop.co.uk/\" target=\"_blank\">online</a>.",
            "link": "https://locharthur.org.uk/farm-shop-cafe/",
            "isOrganizationDetail": true
        },
        {
            "id": 2001,
            "organization": "Columcille",
            "title": "Autumn Fair",
            "date": "2025-09-27",
            "time": "10:30 – 14:00",
            "location": "Columcille",
            "description": "",
            "link": "https://columcille.org.uk/"
        },
        {
            "id": 2002,
            "organization": "Columcille",
            "title": "Christmas Play",
            "date": "2025-12-16",
            "time": "14:00",
            "location": "Columcille",
            "description": "",
            "link": "https://columcille.org.uk/"
        },
        {
            "id": 2003,
            "organization": "Anthroposophy in Edinburgh",
            "title": "Sophia - The Goddess of Wisdom and Guardian of the Earth - Book launch & talk by Karsten Massei",
            "date": "2025-10-31",
            "time": "19:30 - 21:00 (Doors at 19:15)",
            "location": "Columcille Centre, 2 Newbattle Terrace, Edinburgh EH10 4RT",
            "description": "Book launch & talk by Karsten Massei.",
            "link": "https://www.eventbrite.com/e/sophia-the-goddess-of-wisdom-and-the-guardian-of-earth-tickets-1671983249909?aff=oddtdtcreator"
        }
    ];

    // Generate fortnightly Monday Reading Group events for Diary View
    const mondayReadingGroupEvents = [];
    // Start on Monday, January 12, 2026
    let currentMonday = new Date(2026, 0, 12); // Month is 0-indexed, so 0 is January
    currentMonday.setHours(0, 0, 0, 0); // Normalize to start of the day
    const endDateForFortnightly = new Date(2026, 11, 31); // Through end of 2026
    endDateForFortnightly.setHours(23, 59, 59, 999); // Normalize to end of the day

    let newIdCounter = 100; // Starting new IDs for these events

    while (currentMonday <= endDateForFortnightly) {
        // Ensure the date string is correctly formatted as YYYY-MM-DD for logic,
        // but display as DD-MM-YYYY in the UI
        const year = currentMonday.getFullYear();
        const month = (currentMonday.getMonth() + 1).toString().padStart(2, '0');
        const day = currentMonday.getDate().toString().padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`; // Use this for event.date

        mondayReadingGroupEvents.push({
            "id": newIdCounter++,
            "organization": "Anthroposophy in Edinburgh",
            "title": "Monday Study group: Riddles of Philosophy by Rudolf Steiner",
            "date": formattedDate, // Use YYYY-MM-DD for correct logic
            "time": "1:45-3:15pm",
            "location": "Library at 21 Napier Road",
            "description": "Fortnightly meeting. We'll study Rudolf Steiner's 'Riddles of Philosophy'.",
            "link": "Contact :ioberski[at]gmail.com"
        });
        currentMonday.setDate(currentMonday.getDate() + 14); // Add 14 days for fortnightly
    }

    // Add the newly generated fortnightly events to allEvents
    allEvents.push(...mondayReadingGroupEvents);

    // Add the consolidated event for Organization View
    allEvents.push({
        "id": 1000, // Unique ID for the consolidated event
        "organization": "Anthroposophy in Edinburgh",
        "title": "Monday Study group: Riddles of Philosophy by Rudolf Steiner (Fortnightly)",
        "date": "2026-01-12", // Start date for sorting in org view
        "endDate": "2026-12-31", // End date for sorting in org view
        "time": "1:45-3:15pm (fortnightly)",
        "location": "Library at 21 Napier Road",
        "description": "Study group resumes on 12 January 2026 and meets fortnightly. We'll study Rudolf Steiner's 'Riddles of Philosophy'.",
        "link": "Contact :ioberski[at]gmail.com",
        "isOrganizationDetail": true // Mark as organization detail
    });
    // Add the consolidated event for Thursday Online Study Group Organization View
    allEvents.push({
    "id": 1002,
    "organization": "Anthroposophy in Edinburgh",
    "title": "Thursday Online Study Group of the Leading Thoughts (Ongoing, Thursdays 7–8pm)",
    "date": "ongoing",
    "time": "Thursdays, 19:00–20:00",
    "location": "Online",
    "description": "Ongoing weekly online study group of the Leading Thoughts. Resumes 15 January 2026, meets every Thursday 7–8pm.",
    "link": "Contact :ioberski[at]gmail.com",
    "isOrganizationDetail": true
    });
    // Add individual Diary events for each session
    allEvents.push({
    // Removed special 16 Sep event (old time)
    });
    allEvents.push({
    // Removed 23 Sep (no meeting)
    });
    allEvents.push({
    // Removed 30 Sep (no meeting)
    });
    allEvents.push({
    // Removed 7 Oct (handled by loop)
    });
    // Add weekly Thursday events from 15 January 2026 onwards
    (() => {
        let id = 2008;
        let date = new Date(2026, 0, 15); // 15 January 2026 (Thursday)
        const endDate = new Date(2026, 11, 31); // 31 December 2026
        // List of public holidays to skip (UK/Scotland, 2026):
        const skipDates = [
            "2026-01-29" // CANCELLED
        ];
        while (date <= endDate) {
            const year = date.getFullYear();
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const day = date.getDate().toString().padStart(2, '0');
            const dateStr = `${year}-${month}-${day}`;
            if (!skipDates.includes(dateStr)) {
                allEvents.push({
                    "id": id++,
                    "organization": "Anthroposophy in Edinburgh",
                    "title": "Thursday Online Study Group of the Leading Thoughts",
                    "date": dateStr,
                    "time": "19:00-20:00",
                    "location": "Online",
                    "description": "Weekly meeting.",
                    "link": "Contact :ioberski[at]gmail.com"
                });
            }
            date.setDate(date.getDate() + 7);
        }
    })();

    // CANCELLED Thursday Online Study Group event
    allEvents.push({
        "id": 2301,
        "organization": "Anthroposophy in Edinburgh",
        "title": "Thursday Online Study Group of the Leading Thoughts - CANCELLED",
        "date": "2026-01-29",
        "time": "19:00-20:00",
        "location": "Online",
        "description": "This week's meeting is cancelled.",
        "link": "Contact :ioberski[at]gmail.com"
    });

    // --- Organization Images (Paths Confirmed and Fairhill Rise) ---
    const organizationImages = {
        "Anthroposophy in Edinburgh": "images/Anthroposophy in Edinburgh Logo.jpg",
        "Camphill Blair Drummond": "images/Camphill Blair Drummond Logo.png",
        "Camphill Corbenic": "images/Camphill Corbenic Logo.avif",
        "Tiphereth": "images/Camphill Tiphereth Logo.png",
        "Edinburgh Christian Community": "images/Christian Community Logo.jpg",
        "Edinburgh Steiner School": "images/Edinburgh Steiner School Logo.png",
        "Fairhill Rise": "images/Ruskin Mill Logo.png",
        "Garvald Edinburgh": "images/Garvald Edinburgh Logo.png",
        "Garvald West Linton": "images/Garvald West Linton Logo.jpg",
        "Camphill (Loch Arthur)": "images/Camphill Loch Arthur.jpg",
        "Garvald Home Farm": "images/Garvald Home Farm Logo.jpg",
        "Columcille": "https://columcille.org.uk/wp-content/uploads/2024/05/columcille_logo_web.svg" // Added Columcille logo
    };
    // --- End of Data Definitions ---

    // --- Organization Details (for home page links and potentially other org-specific info) ---
    // Added a dedicated object for organization homepages to ensure correct linking for logos.
    const organizationDetails = {
        "Edinburgh Steiner School": { homepage: "https://www.edinburghsteinerschool.org.uk/community/events/" }, // Updated link
        "Edinburgh Christian Community": { homepage: "https://www.thechristiancommunity.co.uk/topic/congregations/north/edinburgh/" }, // Updated link
        "Camphill Blair Drummond": { homepage: "https://camphillblairdrummond.org.uk/" },
        "Camphill Corbenic": { homepage: "https://www.corbeniccamphill.co.uk/" },
        "Tiphereth": { homepage: "https://www.tiphereth.org.uk/" },
        "Garvald West Linton": { homepage: "https://garvaldwestlinton.org.uk/" },
    "Fairhill Rise": { homepage: "https://rmt.org/post-education/fairhillrise/" },
        "Garvald Edinburgh": { homepage: "https://www.garvaldedinburgh.org.uk/" },
        "Camphill (Loch Arthur)": { homepage: "https://locharthur.org.uk/" },
        "Anthroposophy in Edinburgh": { homepage: "https://www.facebook.com/anthroposophyscotland" }, // Updated to the Facebook link as the primary homepage
        "Garvald Home Farm": { homepage: "https://www.facebook.com/GarvaldHomeFarm/?locale=en_GB" }, // New organization homepage
        "Columcille": { homepage: "https://columcille.org.uk/" }
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
            '--link-color': '#b41f0bff', /* Golden orange */
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
            '--diary-day-header-color': '#cf4f1cff', /* Golden orange */
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
    const organizationViewBtn = document.getElementById('organizationViewBtn');

    // Filter out past events, including events that started in the past but are ongoing
    const filterUpcomingEvents = (eventsArray) => {
        const now = new Date();
        now.setHours(0, 0, 0, 0); // Set to start of today for comparison in local time

        return eventsArray.filter(event => {
            // Events marked as 'isOrganizationDetail' are for the organization view only and should not appear in Diary
            if (event.isOrganizationDetail) {
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
        // Use 'Monday, 04-08-2025' format for UK
        const options = { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' };
        if (!dateString) {
            return '';
        }
        const startDate = new Date(dateString).toLocaleDateString('en-GB', options).replace(/\//g, '-');

        if (endDateString && dateString !== endDateString) {
            const endDate = new Date(endDateString).toLocaleDateString('en-GB', options).replace(/\//g, '-');
            return `${startDate} - ${endDate}`;
        }
        return startDate;
    };

    // Helper to format dates for Organization View: DD-MMM-YYYY or range
    const formatOrgDate = (dateString, endDateString = null) => {
        if (!dateString) return '';
        // If date is a list (Forum Meetings), or 'ongoing', just return as is
        if (dateString === 'ongoing' || dateString.match(/\d{4}:/) || dateString.includes(',')) {
            return dateString;
        }
        // Format: DD-MM-YYYY (e.g., 31-07-2025)
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        const startDate = new Date(dateString).toLocaleDateString('en-GB', options).replace(/\//g, '-');
        if (endDateString && dateString !== endDateString) {
            const endDate = new Date(endDateString).toLocaleDateString('en-GB', options).replace(/\//g, '-');
            return `${startDate} to ${endDate}`;
        }
        return startDate;
    };

    // Helper to generate CSS class from organization name for color coding
    const getOrgClass = (orgName) => {
        // Ensure the class name is valid (lowercase, replace non-alphanumeric with hyphen)
        return `title-${orgName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
    };

    // --- Render Diary View ---
    const renderDiaryView = (eventsToDisplay) => {
        eventContainer.innerHTML = '';
        eventContainer.className = 'diary-layout'; // Set class for diary layout

        // Filter out events that are specifically marked for organization view only
        const diaryEvents = eventsToDisplay.filter(event => !event.isOrganizationDetail);

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
                    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
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

        let firstUpcomingDayCard = null; // To store the element for the first upcoming day

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

            // Identify the first upcoming day card (today or the first future day)
            if (!firstUpcomingDayCard && (dateKey === todayKey || new Date(dateKey) > today)) {
                firstUpcomingDayCard = dayCard;
            }

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
                        <p class="event-org-name-diary ${getOrgClass(event.organization)}">${event.organization}</p>
                        <h4 class="${getOrgClass(event.organization)}">${event.title}</h4>
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

        // --- FIX: Only scroll if user has navigated to Diary View, not on initial page load ---
        if (firstUpcomingDayCard && !window.__initialDiaryScrollDone) {
            // Do NOT scroll on initial page load
            window.__initialDiaryScrollDone = true;
        } else if (firstUpcomingDayCard) {
            // If user switches to Diary View after initial load, scroll as before
            firstUpcomingDayCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // --- Render Organization View ---
    const renderOrganizationView = () => {
        eventContainer.innerHTML = '';
        eventContainer.className = 'organization-layout';

        // Group ALL events by organisation, including those for organisation details
        const groupedEvents = allEvents.reduce((acc, event) => {
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
            <div class="header-org-name">Organisation</div>
            <div class="header-events">Upcoming Events</div>
        `;
        eventContainer.appendChild(headerRow);

        // Sort organizations alphabetically for consistent display
        const sortedOrgNames = Object.keys(groupedEvents).sort();

        sortedOrgNames.forEach(orgName => {
            const organizationRow = document.createElement('div');
            organizationRow.className = 'organization-row';

            const orgImageSrc = organizationImages[orgName] || 'https://placehold.co/110x110/cccccc/333333?text=Logo'; // Fallback to a placeholder

            // Find the primary link for the organization's homepage
            let orgHomePageLink = organizationDetails[orgName]?.homepage || '#';

            const organizationNameColumn = document.createElement('div');
            organizationNameColumn.className = `organization-name-column ${getOrgClass(orgName)}`;
            // Add a CSS class for top alignment
            organizationNameColumn.style.display = "flex";
            organizationNameColumn.style.flexDirection = "column";
            organizationNameColumn.style.justifyContent = "flex-start"; // Align content to top
            organizationNameColumn.innerHTML = `
                <a href="${orgHomePageLink}" target="_blank" class="org-link-wrapper">
                    <img src="${orgImageSrc}" alt="${orgName} Logo" class="organization-logo-fixed-size">
                    <h2 class="${getOrgClass(orgName)}">${orgName}</h2>
                </a>
            `;
            organizationRow.appendChild(organizationNameColumn);

            const organizationEventsColumn = document.createElement('div');
            organizationEventsColumn.className = 'organization-events-column';

            // Separate events into two categories for this organization
            let orgSpecificDetails = groupedEvents[orgName].filter(event => event.isOrganizationDetail);
            let regularUpcomingEvents = groupedEvents[orgName].filter(event =>
                !event.isOrganizationDetail && !event.hideFromOrganizationView && filterUpcomingEvents([event]).length > 0
            );

            // Handle consolidation for "Anthroposophy in Edinburgh" Forum events
            const consolidatedForumEvent = orgSpecificDetails.find(event => event.id === 98);
            const consolidatedMondayStudyGroupEvent = orgSpecificDetails.find(event => event.id === 1000); // Find the consolidated Monday Study Group event

            if (orgName === "Anthroposophy in Edinburgh") {
                // IDs of individual forum events that should be excluded from regularUpcomingEvents
                const individualForumIds = [86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96];
                regularUpcomingEvents = regularUpcomingEvents.filter(event => !individualForumIds.includes(event.id));

                // Exclude individual Monday Study Group events from regularUpcomingEvents if the consolidated one exists
                if (consolidatedMondayStudyGroupEvent) {
                    regularUpcomingEvents = regularUpcomingEvents.filter(event =>
                        !(event.organization === "Anthroposophy in Edinburgh" &&
                          event.title.startsWith("Monday Study group: Riddles of Philosophy by Rudolf Steiner") &&
                          event.id >= 100 && event.id < 1000)
                    );
                }

                                // Exclude all individual Thursday study group events from organization view
                                regularUpcomingEvents = regularUpcomingEvents.filter(event =>
                                        !(event.organization === "Anthroposophy in Edinburgh" &&
                                            event.title === "Thursday Online Study Group of the Leading Thoughts" &&
                                            (event.id === 56 || (event.id >= 2004 && event.id <= 2100)))
                                );
            }

            if (orgName === "Garvald Edinburgh") {
                // Exclude individual 'Life Is Weird' daily entries from organization view
                const lifeIsWeirdIds = [2111, 2112];
                regularUpcomingEvents = regularUpcomingEvents.filter(event => !lifeIsWeirdIds.includes(event.id));
            }

            if (orgName === "Iddo Oberski") {
                // Exclude all "Balancing in Freedom" events from organization view
                regularUpcomingEvents = regularUpcomingEvents.filter(event => 
                    !(event.title === "Balancing in Freedom")
                );
            }

            // Combine them, with organization-specific details first
            let eventsToDisplayInColumn = [...orgSpecificDetails, ...regularUpcomingEvents];

            // Specific sorting for Corbenic to ensure generic link comes first
            if (orgName === "Camphill Corbenic") {
                eventsToDisplayInColumn.sort((a, b) => {
                    if (a.id === 63) return -1; // Ensure id 63 (generic link) is first
                    if (b.id === 63) return 1;
                    return 0; // Maintain existing order for others
                });
            } else {
                // Default sort: Keep isOrganizationDetail events at the top, then sort by date
                eventsToDisplayInColumn.sort((a, b) => {
                    if (a.isOrganizationDetail && !b.isOrganizationDetail) return -1;
                    if (!a.isOrganizationDetail && b.isOrganizationDetail) return 1;

                    if (a.date && b.date) {
                        return new Date(a.date) - new Date(b.date);
                    }
                    if (a.date && !b.date) return 1; // Event with date comes before event without date
                    if (!a.date && !b.date) return 0; // Both no date, maintain relative order
                    return 0; // Maintain order if both have no date or dates are equal
                });
            }

            if (eventsToDisplayInColumn.length > 0) {
                const eventList = document.createElement('ul');
                eventList.className = 'organization-event-list';

                eventsToDisplayInColumn.forEach(event => { // Use eventsToDisplayInColumn
                    const listItem = document.createElement('li');
                    let linkContent = event.link;

                    // Special handling for the "For current information, please click here or sign up for the local newsletter" title
                    if (event.id === 70 && event.organization === "Anthroposophy in Edinburgh") {
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
                        // Use formatOrgDate for date display
                        const eventDateHtml = event.date ? `<p><strong>Date:</strong> ${formatOrgDate(event.date, event.endDate)}</p>` : '';
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
                organizationEventsColumn.appendChild(eventList);
            } else {
                organizationEventsColumn.innerHTML = '<p class="no-events-message">No upcoming events listed at this time.</p>';
            }
            organizationRow.appendChild(organizationEventsColumn);
            eventContainer.appendChild(organizationRow);
        });
    };


    // --- View Mode Management ---
    let currentView = 'diary'; // Default view

    // Store scroll positions for each view
    let diaryScrollY = 0;
    let organizationScrollY = 0;

    const setView = (view) => {
        // Save current scroll position before switching
        if (currentView === 'diary') {
            diaryScrollY = window.scrollY;
        } else if (currentView === 'organization') {
            organizationScrollY = window.scrollY;
        }

        currentView = view;
        diaryViewBtn.classList.remove('active');
        organizationViewBtn.classList.remove('active');

        if (view === 'diary') {
            renderDiaryView(upcomingEvents);
            diaryViewBtn.classList.add('active');
            // Restore previous scroll position for Diary view
            setTimeout(() => {
                window.scrollTo({ top: diaryScrollY, behavior: 'auto' });
            }, 0);
        } else if (view === 'organization') {
            renderOrganizationView();
            organizationViewBtn.classList.add('active');
            // Restore previous scroll position for Organization view
            setTimeout(() => {
                window.scrollTo({ top: organizationScrollY, behavior: 'auto' });
            }, 0);
        }
    };

    // Event Listeners for view buttons
    diaryViewBtn.addEventListener('click', () => setView('diary'));
    organizationViewBtn.addEventListener('click', () => setView('organization'));

    // Initial render based on default view
    window.__initialDiaryScrollDone = false; // Track if initial load has happened
    setView(currentView);
});