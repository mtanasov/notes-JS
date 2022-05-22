import { CreateElementsFromNote } from "./createElement.js";
import { buffer, jsonDataLocal, objArr } from "./data.js";
import { drawSaveNote } from "./drawSaveNote.js";
export { dataFilling }

//заполняем данные из буфера в массив объектов хранения заметок
function dataFilling() {
   new CreateElementsFromNote(
      buffer.dataCreatedSavedNote(),
      buffer.titleSavedNote(),
      buffer.textSavedNote(),
      dateFormatChanges.stringDate(),
      buffer.timeEvent(),
      buffer.locationEvent(),
      buffer.id(),
      buffer.top(),
   );
   let obj = {
      dataCreatedSavedNote: buffer.dataCreatedSavedNote(),
      // fixedSavedNote: buffer.fixedSavedNote(),
      statusSavedNote: buffer.statusSavedNote,
      titleSavedNote: buffer.titleSavedNote(),
      textSavedNote: buffer.textSavedNote(),
      // dateEvent: buffer.dateEvent(),
      dateEvent: dateFormatChanges.stringDate(),
      timeEvent: buffer.timeEvent(),
      locationEvent: buffer.locationEvent(),
      id: buffer.id(),
      num: buffer.num(),
      y: String(buffer.y() + "px"),
      top: buffer.top(),
      // selfCall: new CreateElementsFromNote(
      //    this.dataCreatedSavedNote(),
      //    this.titleSavedNote(),
      //    this.textSavedNote(),
      //    this.dateEvent(),
      //    this.timeEvent(),
      //    this.locationEvent(),
      //    this.id(),
      //    this.top()
      // )
   }

   //получить json c сохраненными заметками
   if (Boolean(localStorage.getItem("savedNotesJSON")) === false) {
      jsonDataLocal();
   }
   let getJSON = localStorage.getItem("savedNotesJSON");
   objArr.dataSavedNotes = JSON.parse(getJSON);
   objArr.dataSavedNotes.push(obj);
   localStorage.setItem("savedNotesJSON", JSON.stringify(objArr.dataSavedNotes));
}