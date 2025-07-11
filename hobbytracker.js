const hobbyLog = [
  { day: "Monday", hobby: "drawing", minutes: 30, mood: "focused" },
  { day: "Tuesday", hobby: "reading", minutes: 20, mood: "relaxed" },
  { day: "Wednesday", hobby: "gaming", minutes: 45, mood: "excited" },
  { day: "Thursday", hobby: "drawing", minutes: 25, mood: "creative" },
  { day: "Friday", hobby: "reading", minutes: 35, mood: "calm" }
];

//This function calculates the total time spent on all hobby sessions
function totalTime(log) {
  return log.reduce((sum, session) => sum + session.minutes, 0); //Uses reduce() to return the total minutes from each session
}

//This function gives an array of unique hobbies from log
function uniqueHobbies(log) {
  const names = log.map(entry => entry.hobby); //creates an array of all the names of the hobbies
  return [...new Set(names)]; //removes dupliates from the set and returns array
}

//The function that returns the array of sessions longer than the given number of minutes 
function longSessions(log, minMinutes) {
  return log.filter(entry => entry.minutes > minMinutes); //filter() keeps the entries that are only longer than MinMinutes
}

function countMood(log, moodType) { //This function counts the number the sessions that had a specific mood
  return log.filter(entry => entry.mood === moodType).length; //filter keeps the entries with moodtype and the lenght counts them
}

console.log("Total time spent:", totalTime(hobbyLog), "minutes"); //calculates 155 since you add the times from top
console.log("Unique hobbies:", uniqueHobbies(hobbyLog)); //hobbies from the lines 2-6 ('drawing', 'reading', etc)
console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30)); //Wed (45) and Fri (35)
console.log("Nu	mber of relaxed sessions:", countMood(hobbyLog, "relaxed")); //1 since Tuesday is relaxed. 
