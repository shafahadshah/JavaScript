// Date in JavaScript

let now = new Date();  //Current Date and time

// Different valid date string formats

let d1 = new Date('2025-11-16');          // ISO (YYYY-MM-DD)
let d2 = new Date('2025/11/16');          // Slash format (YYYY/MM/DD)
let d3 = new Date('Nov 16, 2025');        // Month name format
let d4 = new Date('November 16, 2025');   // Full month name
let d5 = new Date('11-16-2025');          // MM-DD-YYYY format
let d6 = new Date('11/16/2025 12:00');    // Date + time (local)
let d7 = new Date('2025-11-16T12:00:00'); // ISO full format (recommended)
let d8 = new Date('Sun Nov 16 2025 12:00:00 GMT+0500'); // Long date string
let d9 = new Date('2025-11-16T12:00:00Z'); // UTC time (Z = UTC)
let d10 = new Date('2025-11-16 12:00:00'); // Space separator (also works in many browsers)

// Print them
console.log(d1, '\n', d2, '\n', d3, '\n', d4, '\n', d5, '\n', d6, '\n', d7, '\n', d8, '\n', d9, '\n', d10);

//  Create current date and time
const now1 = new Date(); 
console.log(now); // Example: 2025-11-13T08:30:00.000Z

//  Get date as string
console.log(now.toString()); // "Thu Nov 13 2025 13:30:00 GMT+0500 (Pakistan Standard Time)"

//  Get only date part
console.log(now.toDateString()); // "Thu Nov 13 2025"

//  Get only time part
console.log(now.toTimeString()); // "13:30:00 GMT+0500 (Pakistan Standard Time)"

//  ISO format 
console.log(now.toISOString()); // "2025-11-13T08:30:00.000Z"

//  Locale format
console.log(now.toLocaleString()); // "11/13/2025, 1:30:00 PM"

//  Only date (locale)
console.log(now.toLocaleDateString()); // "11/13/2025"

//  Only time (locale)
console.log(now.toLocaleTimeString()); // "1:30:00 PM"

//  Custom format using template
const year = now.getFullYear();     // 2025
const month = String(now.getMonth() + 1).padStart(2, '0'); // "11"
const day = String(now.getDate()).padStart(2, '0');         // "13"
console.log(`${year}-${month}-${day}`); // "2025-11-13"

//  Example: convert string to Date
const dateFromString = new Date("2025-12-01");
console.log(dateFromString.toDateString()); // "Mon Dec 01 2025"

//  Create a sample date object
let date = new Date('2025-11-16T12:34:56');

// DATE PARTS
console.log(date.getFullYear());  // 2025 → full year
console.log(date.getMonth());     // 10 → month (0 = Jan, 10 = Nov)
console.log(date.getDate());      // 16 → day of month
console.log(date.getDay());       // 0–6 → day of week (0 = Sunday)
console.log(date.getTime());      // milliseconds since Jan 1, 1970
console.log(date.getTimezoneOffset()); // difference from UTC in minutes (e.g., -300)

// TIME PARTS
console.log(date.getHours());     // 12 → hour (0–23)
console.log(date.getMinutes());   // 34 → minutes (0–59)
console.log(date.getSeconds());   // 56 → seconds (0–59)
console.log(date.getMilliseconds()); // 0 → milliseconds (0–999)

// UTC VERSIONS (same methods but in UTC time zone)
console.log(date.getUTCFullYear());  // 2025
console.log(date.getUTCMonth());     // 10 (November)
console.log(date.getUTCDate());      // 16
console.log(date.getUTCDay());       // 0 (Sunday)
console.log(date.getUTCHours());     // 7 (UTC time = local - 5 hours in PK)
console.log(date.getUTCMinutes());   // 34
console.log(date.getUTCSeconds());   // 56
console.log(date.getUTCMilliseconds()); // 0

//  Create a date object
let date1 = new Date('2025-11-16T12:34:56');
console.log("Original:", date.toString()); 
// Sun Nov 16 2025 17:34:56 GMT+0500 (Pakistan Standard Time)

//  SET DATE PARTS
date.setFullYear(2030);   // change year → 2030
date.setMonth(0);         // change month → 0 = January
date.setDate(10);         // change day → 10th
console.log("After set date parts:", date.toString());

//  SET TIME PARTS
date.setHours(8);         // set hour → 8 AM
date.setMinutes(45);      // set minutes → 45
date.setSeconds(30);      // set seconds → 30
date.setMilliseconds(500);// set milliseconds → 500
console.log("After set time parts:", date.toString());

//  SET UTC VERSIONS (set using UTC time zone)
date.setUTCFullYear(2040); // set UTC year → 2040
date.setUTCMonth(5);       // set UTC month → June
date.setUTCDate(20);       // set UTC day → 20
date.setUTCHours(10);      // set UTC hours → 10
date.setUTCMinutes(20);    // set UTC minutes → 20
date.setUTCSeconds(15);    // set UTC seconds → 15
date.setUTCMilliseconds(250); // set UTC milliseconds → 250
console.log("After set UTC parts:", date.toUTCString());

//  SET BY TIMESTAMP
date.setTime(1737043200000); // set specific time (in milliseconds)
console.log("After setTime():", date.toString());

//  Current timestamp (milliseconds)
let now2 = Date.now();
console.log(now); // Example: 1731499200000

//  Convert Date → timestamp
let date2 = new Date('2025-11-16T12:00:00');
console.log(date.getTime()); // Example: 1765886400000

//  Convert timestamp → Date
let newDate = new Date(1765886400000);
console.log(newDate.toString()); // "Sun Nov 16 2025 17:00:00 GMT+0500 (Pakistan Standard Time)"

//  Current time in seconds 
console.log(Math.floor(Date.now() / 1000)); // Example: 1731499200

//  Add 1 day (in ms → 1 day = 24*60*60*1000)
let tomorrow = new Date(date.getTime() + 24 * 60 * 60 * 1000);
console.log(tomorrow.toDateString()); // "Mon Nov 17 2025"
