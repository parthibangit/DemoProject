const date: Date = new Date(); 
let currentDate = date.getDate();                   // return current date - 04
let currentDay = date.getDay();                     // Tuesday - so it will return 2
let currentMonth = date.getMonth();                 // return current month - 08
let currentYear = date.getFullYear();               // return current year - 2026
let currentTime = date.getTime();

let dateString = date.toDateString();               // Tue Aug 04 2026
let isoString = date.toISOString();                 // 2026-08-04T15:49:39.653Z
let formattedDate = isoString.substring(0, 10);     // 2026-08-04
let localTime = date.toLocaleDateString();          // 4/8/2026                                       // August, 04, 2026
let customFormattedDate = `${date.toLocaleDateString('en-In', { month: 'long' })}, ${date.getDate().toString().padStart(2, '0')}, ${date.getFullYear()}`;

console.log(`current year is ${currentDate} ${currentMonth} ${currentYear}`); 
console.log(`Current date is ${dateString}`); 
console.log(`ISO time is ${formattedDate}`);   
console.log(`Local date is ${localTime}`); 
console.log(`Custom formatted date is ${customFormattedDate}`);