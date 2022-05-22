"use strict"
//перетаскивание сохраненных заметок

import { CreateElementsFromNote } from "./createElement.js";
import { objArr } from "./data.js";

export { moveElemetns };

const moveElemetns = {
   move() {
      console.log("Hello");
      let getJSON = localStorage.getItem("savedNotesJSON");
      let arr = objArr.dataSavedNotes;
      arr = JSON.parse(getJSON);
      document.addEventListener("mousedown", (event) => {
         arr.forEach((obj, index, array) => {
            if (obj.id === event.target.parentNode.id) {
               console.log(obj.y);
               console.log(obj.num);
               console.log(obj.id);
               event.target.addEventListener("mousemove", (e) => {
                  new CreateElementsFromNote(
                     obj.dataCreatedSavedNote,
                     obj.titleSavedNote,
                     obj.textSavedNote,
                     obj.dateEvent,
                     obj.timeEvent,
                     obj.locationEvent,
                     obj.id,
                     e.clientY
                  )
               })
               event.target.addEventListener("mouseup", (e) => { })
            }
         })
      })
   }
}