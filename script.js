var days;
(function (days) {
    days[days["Sunday"] = 0] = "Sunday";
    days[days["Monday"] = 1] = "Monday";
    days[days["Tuesday"] = 2] = "Tuesday";
    days[days["Wednesday"] = 3] = "Wednesday";
    days[days["Thursday"] = 4] = "Thursday";
    days[days["Friday"] = 5] = "Friday";
    days[days["Saturday"] = 6] = "Saturday";
})(days || (days = {}));
var months;
(function (months) {
    months[months["January"] = 0] = "January";
    months[months["February"] = 1] = "February";
    months[months["March"] = 2] = "March";
    months[months["April"] = 3] = "April";
    months[months["May"] = 4] = "May";
    months[months["June"] = 5] = "June";
    months[months["July"] = 6] = "July";
    months[months["August"] = 7] = "August";
    months[months["September"] = 8] = "September";
    months[months["October"] = 9] = "October";
    months[months["November"] = 10] = "November";
    months[months["December"] = 11] = "December";
})(months || (months = {}));
// enum earthPhysics {
//     gravity = 9.81,
//     c = Math.pow(3.88,8),
//     weight = 1
// }
//html elements
var pTodayDate = document.getElementById("p--today-date");
var buttonBirthday = document.getElementById("button--birthday");
var pBirthdayMessage = document.getElementById("p--birthday-message");
var inputDatePicker = document.getElementById("input--date-picker");
//today as a date
var today = new Date();
pTodayDate.innerHTML = "Today is " + days[today.getDay()] + " " + months[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear();
function makeDateString(inputDate) {
    //if today is user's birthday
    if ((inputDate.getDate() === today.getDate()) && (inputDate.getMonth() === today.getMonth())) {
        return "Happy birthday!";
    }
    //today is not their birthday
    var thisYearBirthday = new Date();
    thisYearBirthday.setDate(inputDate.getDate());
    thisYearBirthday.setFullYear(today.getFullYear());
    thisYearBirthday.setMonth(today.getMonth());
    console.log(today);
    console.log(thisYearBirthday);
    return "Your birthday is on " + days[thisYearBirthday.getDay()] + " " + months[inputDate.getMonth()] + " " + inputDate.getDate() + ", " + today.getFullYear();
}
buttonBirthday.onclick = function () {
    var userBday = inputDatePicker.value;
    var userBdayDate = new Date(userBday);
    pBirthdayMessage.innerHTML = makeDateString(userBdayDate);
    // console.log(birthday);
    // console.log(today);
    // birthdayMessage(birthday, bdMessage);
    // function birthdayMessage(date : Date, message : string) {
    //     if (date.getDate() === today.getDate()) {
    //         result.innerHTML = "Happy birthday!";
    //     } else {
    //         result.innerHTML = bdMessage + ;
    //     }
    // }
};
