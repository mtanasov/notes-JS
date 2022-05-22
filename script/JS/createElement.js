"use strict"
// создание сохраненной страницы
export { CreateElementsFromNote };

class CreateElementsFromNote {
   constructor(dateCreate, title, text, dateEvent, timeEvent, locationEvent, id, topi) {
      const listSavedNotes = document.getElementById("listSavedNotes");
      const doc = document;

      const savedNote = doc.createElement("div");
      const dataCreatedSavedNote = doc.createElement("span");
      const fixedSavedNote = doc.createElement("span");
      const statusSavedNote = doc.createElement("span");
      const settingSavedNote = doc.createElement("div");
      const dateSavedNote = doc.createElement("span");
      const daySavedNote = doc.createElement("span");
      const monthSavedNote = doc.createElement("span");
      const yearSavedNote = doc.createElement("span");
      const timeSavedNote = doc.createElement("span");
      const hSavedNote = doc.createElement("span");
      const mSavedNote = doc.createElement("span");
      const locationSavedNote = doc.createElement("span");
      const titleSavedNote = doc.createElement("div");
      const textSavedNote = doc.createElement("div");

      savedNote.className = "savedNote";
      savedNote.id = id;
      dataCreatedSavedNote.className = "dataCreatedSavedNote";
      fixedSavedNote.className = "fixedSavedNote";
      statusSavedNote.className = "statusSavedNote";
      settingSavedNote.className = "settingSavedNote";
      dateSavedNote.className = "dateSavedNote";
      daySavedNote.className = "daySavedNote";
      monthSavedNote.className = "monthSavedNote";
      yearSavedNote.className = "yearSavedNote";
      timeSavedNote.className = 'timeSavedNote';
      hSavedNote.className = "hSavedNote";
      mSavedNote.className = "mSavedNote";
      locationSavedNote.className = "locationSavedNote";
      titleSavedNote.className = "titleSavedNote";
      textSavedNote.className = "textSavedNote";

      // savedNote.textContent = "savedNote";
      dataCreatedSavedNote.textContent = "дата создания:" + " " + dateCreate;
      fixedSavedNote.innerHTML = "&#xe69b";
      fixedSavedNote.id = id;
      statusSavedNote.innerHTML = "&#xe609";
      // settingSavedNote.textContent = "settingSavedNote";
      dateSavedNote.textContent = dateEvent;
      // daySavedNote.textContent = "daySavedNote";
      // monthSavedNote.textContent = "monthSavedNote";
      // yearSavedNote.textContent = "yearSavedNote";
      timeSavedNote.textContent = timeEvent;
      // hSavedNote.textContent = "hSavedNote";
      // mSavedNote.textContent = "mSavedNote";
      locationSavedNote.innerHTML = " " + locationEvent;
      titleSavedNote.textContent = title;
      textSavedNote.textContent = text;
      savedNote.style.position = "relative";
      // savedNote.style.top = topi;
      // statusSavedNote.id = id;

      listSavedNotes.append(savedNote);
      savedNote.append(dataCreatedSavedNote);
      // savedNote.append(fixedSavedNote);
      savedNote.append(statusSavedNote);
      savedNote.append(settingSavedNote);
      settingSavedNote.append(dateSavedNote);
      dateSavedNote.append(daySavedNote);
      dateSavedNote.append(monthSavedNote);
      dateSavedNote.append(yearSavedNote);
      settingSavedNote.append(timeSavedNote);
      timeSavedNote.append(hSavedNote);
      timeSavedNote.append(mSavedNote);
      settingSavedNote.append(locationSavedNote);
      savedNote.append(titleSavedNote);
      savedNote.append(textSavedNote);
   }
}
