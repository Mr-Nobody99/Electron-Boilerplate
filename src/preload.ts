import { IpcRenderer, ipcRenderer } from "electron";

declare global{
    interface Window {
        COM: IpcRenderer;
    }
}

window.COM = ipcRenderer;