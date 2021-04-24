




// Weekday
let now = new Date();
let weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
let today = weekday[now.getDay()];
document.getElementById("dayOfWeek").innerHTML = today;

// Activity
let message

switch (today) {
 case "Sunday":
  message = "Prepare for the Week!";
  break;
 case "Monday":
  message = "Start Working Day!";
  break;
 case "Tuesday":
  message = "Taco Time!";
  break;
 case "Wednesday":
  message = "Journey Time";
  break;
 case "Thursday":
  message = "Football playing";
  break;
 case "Friday":
  message = "Swimming Day";
  break;
 case "Saturday":
  message = "Have a rest";
  break;

 default:



}
document.getElementById("todayActivity").innerHTML = message;
