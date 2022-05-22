export { btnS }
const { ipcRenderer } = require("electron");

const btnS = {
   // collapse: document.getElementById("collapse"),
   // fullSize: document.getElementById("fullSize"),
   // closeWin: document.getElementById("closeWin"),
   closeFunc() {
      closeWin.addEventListener("click", () => {
         ipcRenderer.send("close", 0.5)
      }
      )
   },
   collapseFunc() {
      collapse.addEventListener("click", () => {
         ipcRenderer.send("collapse");
      })
   }
};


// const { app } = require('electron');
// export { btnS }

// const btnS = {
//    collapse: document.getElementById("collapse"),
//    fullSize: document.getElementById("fullSize"),
//    closeWin: document.getElementById("closeWin"),
//    closeFunc() {
//       app.on('window-all-closed', () => {
//          app.quit()
//       })
//    }
// };

// remote.getCurrentWindow().close()