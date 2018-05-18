enum days {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

enum months {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}

// enum earthPhysics {
//     gravity = 9.81,
//     c = Math.pow(3.88,8),
//     weight = 1
// }

//html elements
let pTodayDate = document.getElementById("p--today-date");
let buttonBirthday = document.getElementById("button--birthday");
let pBirthdayMessage = document.getElementById("p--birthday-message");
let inputDatePicker = document.getElementById("input--date-picker");


//today as a date
let today : Date = new Date();
pTodayDate.innerHTML = `Today is ${days[today.getDay()]} ${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;

function makeDateString( inputDate: Date ) : string {
    //if today is user's birthday
    if ((inputDate.getDate() === today.getDate()) && (inputDate.getMonth() === today.getMonth())) {
        return `Happy birthday!`;
    }
    //today is not their birthday
    let thisYearBirthday = new Date();
    thisYearBirthday.setDate( inputDate.getDate());
    thisYearBirthday.setFullYear(today.getFullYear());
    thisYearBirthday.setMonth(today.getMonth());
    console.log (today);
    console.log (thisYearBirthday);
    return `Your birthday is on ${days[thisYearBirthday.getDay()]} ${months[inputDate.getMonth()]} ${inputDate.getDate()}, ${today.getFullYear()}`
}

buttonBirthday.onclick = function() {
    let userBday : string = inputDatePicker.value;
    let userBdayDate = new Date(userBday);
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
}
