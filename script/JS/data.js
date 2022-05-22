"use strict"

import { audio } from "./audio.js";
import { message } from "./confirmationMessage.js";

export { buffer, objArr, recoveryNotSavedNote, inpLocationDisplay, clearInput, jsonDataLocal, removeNote }

//массив хранения заметок
let objArr = {
   dataSavedNotes: []
}

function jsonDataLocal() {
   localStorage.setItem("savedNotesJSON", JSON.stringify(objArr.dataSavedNotes));
}

//копирование данных с полей ввода
let buffer = {
   dataCreatedSavedNote() {
      return currentDateOnPage.date()
   },

   // fixedSavedNote() {
   //    const fix = document.getElementById("btnFixetNote");
   //    if (fix.checked === true) {
   //       console.log("Checked true");
   //       return true
   //    } else { console.log("Checked false"); return false }
   // },
   // statusSavedNote: false,

   titleSavedNote() {
      let title = document.getElementById("titleNote");
      return title.value;
   },

   textSavedNote() {
      let text = document.getElementById("valueNote")
      return text.value
   },
   dateEvent() {
      let dateEvent = document.getElementById("btnDateEvent");
      return dateEvent.value
   },
   timeEvent() {
      let time = document.getElementById("btnTimeEvent");
      let timeEvent = time.value;
      return timeEvent;
   },
   locationEvent() {
      let location = document.getElementById("inputLocation");
      let locEvent = location.value
      return locEvent
   },
   id() {
      let id = Date.now();
      let ret = "id" + String(id);
      return ret
   },
   num() {
      console.log(objArr.dataSavedNotes.length);
      return objArr.dataSavedNotes.length;
   },
   y() {
      return 5
   },
   top() {
      return String(this.num() * this.y()) + "px";
   }
}

//появление окна ввода места события

function inpLocationDisplay(param) {
   let element = document.getElementById("inputLocation");
   element.style.display = param;
   element.focus()
}

//восстановление не сохраненной заметки

let recoveryNotSavedNote = () => {
   let title = document.getElementById("titleNote");
   let text = document.getElementById("valueNote");
   let dateEvent = document.getElementById("btnDateEvent");
   let timeEvent = document.getElementById("btnTimeEvent");
   let location = document.getElementById("inputLocation");
   title.value = localStorage.getItem("noSavedNotesTitle");
   text.value = localStorage.getItem("noSavedNotesText");
   dateEvent.value = localStorage.getItem("noSavedNotesDateEvent");
   timeEvent.value = localStorage.getItem("noSavedNotesTimeEvent");
   location.value = localStorage.getItem("noSavedNotesLocationEvent");
   console.log("Восстановление работает успешно");
}

//очистка полей создаваемой заметки
let clearInput = () => {
   let title = document.getElementById("titleNote");
   let text = document.getElementById("valueNote");
   let dateEvent = document.getElementById("btnDateEvent");
   let timeEvent = document.getElementById("btnTimeEvent");
   let location = document.getElementById("inputLocation");
   let fix = document.getElementById("btnFixetNote");
   // fix.checked = false;
   title.value = "";
   text.value = "";
   dateEvent.value = "";
   timeEvent.value = "";
   location.value = "";
}

//удаление заметки

let removeNote = {
   remove(event) {
      let getJSON = localStorage.getItem("savedNotesJSON");
      let arr = objArr.dataSavedNotes;
      arr = JSON.parse(getJSON);
      if (event.target.className === "statusSavedNote") {
         audio.delete()
         console.log("нажата клавиша (Удалить заметку)");
         let index = arr.findIndex(el => el.id === event.target.id)
         arr.splice(index, 1);
         localStorage.setItem("savedNotesJSON", JSON.stringify(arr));
         event.target.parentNode.remove();
         if (arr.length > 0) {
            message.showMess(message.text[1], event.clientX, event.clientY)
            console.log("Заметка удалена, массив > 1");
            console.log(index);
            console.log(arr.length);
         }
      }
   }
}