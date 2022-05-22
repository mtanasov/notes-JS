//отображение даты на странице

let currentDateOnPage = {
   date(): string {
      let day = date.day();
      let dayMonth = date.dayMonth();
      let month = date.month();
      let year = date.year();
      let time =
         String(date.time.hours()).padStart(2, "0")
         + " "
         + String(date.time.minutes()).padStart(2, "0")
         + " "
         + String(date.time.seconds()).padStart(2, "0")
         ;
      let totalDate =
         String(day)
         + " "
         + String(dayMonth)
         + " "
         + String(month)
         + " "
         + String(year)
         + " "
         + time
      return totalDate
   },
   displayDateOnPage(): void {
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
}

currentDateOnPage.displayDateOnPage()