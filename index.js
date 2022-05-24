const { app, BrowserWindow, ipcMain } = require("electron");


app.on("ready", () => {
   /* 
   const { app } = require('electron')
   app.on('window-all-closed', () => {
   app.quit()
   }) 
   */


   const win = new BrowserWindow({
      x: 50,
      y: 50,
      height: 800,
      width: 1100,
      frame: false,
      transparent: false,
      icon: "./img/appicon.png",
      show: false,
      autoHideMenuBar: true,
      webPreferences: {
         nodeIntegration: true,
         contextIsolation: false
      }
   });

   ipcMain.on("close", (event, param) => {
      // win.close()
      app.exit()
   })

   ipcMain.on("collapse", (event, param) => {
      win.minimize()
   })

   win.on("ready-to-show", () => { win.show() })
   win.loadFile("index.html")

})

console.log("hello");