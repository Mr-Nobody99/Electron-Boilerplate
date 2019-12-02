import { BrowserWindow } from 'electron';

export class Windows{
    static _main: BrowserWindow | null = null;
    static _worker: BrowserWindow | null = null;
    static get Main() { return (this._main as BrowserWindow); }
    static get Worker() { return (this._worker as BrowserWindow); }
}