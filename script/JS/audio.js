"use strict"
export { audio }

const audio = {
   click() {
      const audio = new Audio();
      audio.src = "./audio/click.mp3"
      audio.play()
   },
   delete() {
      const audio = new Audio();
      audio.src = "./audio/delete.mp3";
      audio.play()
   },
   removeAudio() {
      let song = document.querySelector("#sound");
      document.addEventListener("click", () => {
         if (song.checked === true) {
            this.click()
         }
      });
      document.addEventListener("input", () => {
         if (song.checked === true) {
            this.click()
         }
      })
   }
}