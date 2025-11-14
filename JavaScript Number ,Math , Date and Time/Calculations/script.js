
// 1) TIMESTAMP BASICS


// Current timestamp (ms)
let nowMs = Date.now();

// Convert timestamp → Date
let nowDate = new Date(nowMs);

// Convert Date → timestamp
let date = new Date("2025-11-16T12:34:56");
let timestamp = date.getTime();

console.log("Timestamp:", timestamp);
console.log("Date from timestamp:", new Date(timestamp).toString());



// 2) DATE DIFFERENCE (days, hours, minutes, seconds)


let d1 = new Date("2025-11-16");
let d2 = new Date("2025-12-01");

let diffMs = d2 - d1;            // milliseconds
let diffSec = diffMs / 1000;     // seconds
let diffMin = diffSec / 60;      // minutes
let diffHours = diffMin / 60;    // hours
let diffDays = diffHours / 24;   // days

console.log("Days diff:", diffDays);


// 3) TIME BREAKDOWN FROM MILLISECONDS
// Example: 3785000 ms → 1 hr 3 min 5 sec


let ms = 3785000;

let hours = Math.floor(ms / 3600000);          // 1 hour
let minutes = Math.floor((ms % 3600000) / 60000); // 3 minutes
let seconds = Math.floor((ms % 60000) / 1000); // 5 seconds

console.log("Hours:", hours, "Minutes:", minutes, "Seconds:", seconds);


// 4) CONVERT ms → ONLY minutes + seconds (65000 example)


let ms2 = 65000; // 1 min 5 sec

let min2 = Math.floor(ms2 / 60000);               // 1 minute
let sec2 = Math.floor((ms2 % 60000) / 1000);      // 5 seconds

console.log("65000 ms =", min2, "minutes", sec2, "seconds");



// 5) CALCULATE AGE


let birth = new Date("2000-05-10");
let today = new Date();

let ageMs = today - birth;
let ageYears = Math.floor(ageMs / (365.25 * 24 * 60 * 60 * 1000));

console.log("Age:", ageYears);



// 6) NEXT MONTH + NEXT YEAR


let dt = new Date();

let nextMonth = new Date(dt);
nextMonth.setMonth(dt.getMonth() + 1);

let nextYear = new Date(dt);
nextYear.setFullYear(dt.getFullYear() + 1);

console.log("Next Month:", nextMonth.toDateString());
console.log("Next Year:", nextYear.toDateString());



// 7) Convert "hh:mm:ss" → milliseconds


let timeStr = "02:10:30"; // 2 hrs 10 min 30 sec
let [h, m, s] = timeStr.split(":").map(Number);

let totalMs = (h * 3600000) + (m * 60000) + (s * 1000);

console.log("hh:mm:ss → ms:", totalMs);


// 8) Convert milliseconds → hh:mm:ss format


function formatHMS(msValue) {
    let h = Math.floor(msValue / 3600000);
    let m = Math.floor((msValue % 3600000) / 60000);
    let s = Math.floor((msValue % 60000) / 1000);

    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

console.log("Format:", formatHMS(3785000)); // "01:03:05"
