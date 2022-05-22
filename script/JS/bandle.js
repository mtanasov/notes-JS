let date = {
    day() {
        let days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота",];
        let newDate = new Date();
        let today = days[newDate.getDay()];
        return today;
    },
    dayMonth() {
        let newDate = new Date();
        let day = newDate.getDate();
        return day;
    },
    month() {
        let nameMonth = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
        let newDate = new Date();
        let month = nameMonth[newDate.getMonth()];
        return month;
    },
    year() {
        let newDate = new Date();
        let year = newDate.getFullYear();
        return year;
    },
    time: {
        hours() {
            let newDate = new Date();
            let hours = newDate.getHours();
            return hours;
        },
        minutes() {
            let newDate = new Date();
            let minutes = newDate.getMinutes();
            return minutes;
        },
        seconds() {
            let newDate = new Date();
            let seconds = newDate.getSeconds();
            return seconds;
        }
    }
};
let dateFormatChanges = {
    stringDate() {
        let date = document.getElementById("btnDateEvent");
        let stringValue = String(date.value);
        let arr = stringValue.split("-");
        switch (arr[1]) {
            case "01":
                return `${arr[2]} января ${arr[0]}`;
                break;
            case "02":
                return `${arr[2]} февраля" + ${arr[0]}`;
                break;
            case "03":
                return `${arr[2]} марта" + ${arr[0]}`;
                break;
            case "04":
                return `${arr[2]} апреля" + ${arr[0]}`;
                break;
            case "05":
                return `${arr[2]} мая ${arr[0]}`;
                break;
            case "06":
                return `${arr[2]} июня ${arr[0]}`;
                break;
            case "07":
                return `${arr[2]} июля ${arr[0]}`;
                break;
            case "08":
                return `${arr[2]} августа ${arr[0]}`;
                break;
            case "09":
                return `${arr[2]} сентября ${arr[0]}`;
                break;
            case "10":
                return `${arr[2]} октября ${arr[0]}`;
                break;
            case "11":
                return `${arr[2]} ноября ${arr[0]}`;
                break;
            case "12":
                return `${arr[2]} декабря ${arr[0]}`;
                break;
        }
        console.log(arr);
    }
};
let currentDateOnPage = {
    date() {
        let day = date.day();
        let dayMonth = date.dayMonth();
        let month = date.month();
        let year = date.year();
        let time = String(date.time.hours()).padStart(2, "0")
            + " "
            + String(date.time.minutes()).padStart(2, "0")
            + " "
            + String(date.time.seconds()).padStart(2, "0");
        let totalDate = String(day)
            + " "
            + String(dayMonth)
            + " "
            + String(month)
            + " "
            + String(year)
            + " "
            + time;
        return totalDate;
    },
    displayDateOnPage() {
        let todayDay = document.getElementById("todayDay");
        todayDay.textContent = date.day();
        let todayDate = document.getElementById("todayDate");
        todayDate.textContent = String(date.dayMonth());
        let todayMonth = document.getElementById("todayMonth");
        todayMonth.textContent = date.month();
        let todayYear = document.getElementById("todayYear");
        todayYear.textContent = String(date.year());
        let hours = document.getElementById("timeH");
        hours.textContent = String(date.time.hours()).padStart(2, "0");
        let minutes = document.getElementById("timeM");
        minutes.textContent = String(date.time.minutes()).padStart(2, "0");
    }
};
currentDateOnPage.displayDateOnPage();
