declare var MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: any;
declare var MAIN_WINDOW_WEBPACK_ENTRY: any;
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1';

import { app, BrowserWindow } from 'electron';
if (require('electron-squirrel-startup')) {
  app.quit();
}

let mainWindow: any;

const createWindow = () => {
  const windowOptions = {
    width: 800,
    height: 600,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
    }
  };
  
  mainWindow = new BrowserWindow(windowOptions);
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => { mainWindow = null; });
};

app.on('ready', createWindow);
app.on('activate', () => { mainWindow === null && createWindow(); });
app.on('window-all-closed', () => { process.platform !== 'darwin' && app.quit(); } );

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
