//текущая дата

let date = {
   day(): string {
      let days: string[] = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота",];
      let newDate = new Date();
      let today = days[newDate.getDay()];
      return today
   },
   dayMonth(): number {
      let newDate = new Date();
      let day = newDate.getDate();
      return day
   },
   month(): string {
      let nameMonth: string[] = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
      let newDate = new Date();
      let month = nameMonth[newDate.getMonth()]
      return month
   },
   year(): number {
      let newDate = new Date();
      let year = newDate.getFullYear();
      return year
   },
   time: {
      hours(): number {
         let newDate = new Date();
         let hours = newDate.getHours();
         return hours
      },
      minutes(): number {
         let newDate = new Date();
         let minutes = newDate.getMinutes();
         return minutes
      },
      seconds(): number {
         let newDate = new Date();
         let seconds = newDate.getSeconds();
         return seconds
      }
   }
}

// преобразование даты с "гггг-мм-чч" в "чч месяц гггг"

let dateFormatChanges: object = {
   stringDate() {
      let date = document.getElementById("btnDateEvent");
      let stringValue = String((<HTMLInputElement>date).value);
      let arr = stringValue.split("-")
      switch (arr[1]) {
         case "01": return `${arr[2]} января ${arr[0]}`; break;
         case "02": return `${arr[2]} февраля" + ${arr[0]}`; break;
         case "03": return `${arr[2]} марта" + ${arr[0]}`; break;
         case "04": return `${arr[2]} апреля" + ${arr[0]}`; break;
         case "05": return `${arr[2]} мая ${arr[0]}`; break;
         case "06": return `${arr[2]} июня ${arr[0]}`; break;
         case "07": return `${arr[2]} июля ${arr[0]}`; break;
         case "08": return `${arr[2]} августа ${arr[0]}`; break;
         case "09": return `${arr[2]} сентября ${arr[0]}`; break;
         case "10": return `${arr[2]} октября ${arr[0]}`; break;
         case "11": return `${arr[2]} ноября ${arr[0]}`; break;
         case "12": return `${arr[2]} декабря ${arr[0]}`; break;
      }
      console.log(arr);
   }
   // stringDateToArr: this.stringDate.value.split("-"),
   // newFormat: 
   // if (stringDateToArr[1] === )

}
