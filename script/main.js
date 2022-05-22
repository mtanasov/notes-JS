'use strict';
import { audio } from "./JS/audio.js";
import { btnS } from "./JS/closeWin.js";
import { message } from "./JS/confirmationMessage.js";
import { CreateElementsFromNote } from "./JS/createElement.js";
import { buffer, clearInput, inpLocationDisplay, jsonDataLocal, objArr, recoveryNotSavedNote, removeNote } from "./JS/data.js";
import { dataFilling } from "./JS/dataAcquisition.js";
import { drawSaveNote } from "./JS/drawSaveNote.js";
// import { moveElemetns } from "./JS/moveElements.js";

//события загрузки страницы
window.addEventListener("load", () => {
   btnS.closeFunc();
   btnS.collapseFunc();

   audio.removeAudio()
   recoveryNotSavedNote();
   if (Boolean(localStorage.getItem("savedNotesJSON")) === true) {
      drawSaveNote.drawOnPage();
   } else return
   console.log("страница загрузилась");
})
//события клика
document.addEventListener("click", (event) => {
   if (event.target.id === "btnSaveNote") {
      dataFilling();
      jsonDataLocal();
      localStorage.removeItem("noSavedNotesTitle");
      localStorage.removeItem("noSavedNotesText");
      localStorage.removeItem("noSavedNotesDateEvent");
      localStorage.removeItem("noSavedNotesTimeEvent");
      localStorage.removeItem("noSavedNotesLocationEvent");
      clearInput();
      message.showMess(message.text[0], event.clientX, event.clientY);
   }
   if (event.target.id === "btnLocation") {
      inpLocationDisplay("block");
   }
   if (event.target.id !== "btnLocation") {
      inpLocationDisplay("none");
   }
   if (event.target.id === "btnClearNote") {
      clearInput();
      // audio.delete()
   }
   removeNote.remove(event);
});

// события ввода
document.addEventListener("input", () => {
   // audio.click()

   buffer.titleSavedNote();
   buffer.textSavedNote();
   buffer.dateEvent();
   // buffer.fixedSavedNote();
   buffer.timeEvent();
   buffer.locationEvent();
   localStorage.setItem("noSavedNotesTitle", buffer.titleSavedNote());
   localStorage.setItem("noSavedNotesText", buffer.textSavedNote());
   localStorage.setItem("noSavedNotesDateEvent", buffer.dateEvent());
   localStorage.setItem("noSavedNotesTimeEvent", buffer.timeEvent());
   // localStorage.setItem("noSavedNotesFixet", buffer.fixedSavedNote());
   localStorage.setItem("noSavedNotesLocationEvent", buffer.locationEvent());
})