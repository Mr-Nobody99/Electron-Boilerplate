process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1';

declare var MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: any;
declare var MAIN_WINDOW_WEBPACK_ENTRY: any;

import { Windows } from "./Windows";
import { app, BrowserWindow } from 'electron';
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  const windowOptions = {
    width: 800,
    height: 600,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
    }
  };
  
  Windows._main = new BrowserWindow(windowOptions);
  Windows._main.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  Windows._main.webContents.openDevTools();

  Windows._main.on('closed', () => { Windows._main = null; });
};

app.on('ready', createWindow);
app.on('activate', () => { Windows._main === null && createWindow(); });
app.on('window-all-closed', () => { process.platform !== 'darwin' && app.quit(); } );

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
