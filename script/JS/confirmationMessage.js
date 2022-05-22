export { message }

let message = {
   text: [
      "Заметка сохранена",
      "Заметка удалена",
      "Тут будут сохраненные заметки",
   ],
   showMess(value, x, y) {
      let body = document.querySelector("body")
      let div = document.createElement("div");
      div.id = "messConfirm";
      div.textContent = value;
      div.style.left = x + 10 + "px";
      div.style.top = y + 10 + "px";
      body.append(div);
      setTimeout(() => { div.remove() }, 1000);
   }

}