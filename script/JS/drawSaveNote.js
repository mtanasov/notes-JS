import { CreateElementsFromNote } from "./createElement.js";
import { objArr } from "./data.js";
export { drawSaveNote }

//отрисовка заметок после загрузки страницы с данными из JSON
let drawSaveNote = {
   getLocalJson() {
      let getJSON = localStorage.getItem("savedNotesJSON");
      objArr.dataSavedNotes = JSON.parse(getJSON);
      return objArr.dataSavedNotes
   },
   drawOnPage() {
      let json = this.getLocalJson();
      for (
         let i = 0;
         i < json.length;
         i += 1
      ) {
         new CreateElementsFromNote(
            json[i].dataCreatedSavedNote,
            json[i].titleSavedNote,
            json[i].textSavedNote,
            json[i].dateEvent,
            json[i].timeEvent,
            json[i].locationEvent,
            json[i].id,
            json[i].top,
         )
      }
   },
   clear() {
      let element = document.getElementById("listSavedNotes");
      element.textContent = ""
   }
}

