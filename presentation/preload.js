const {contextBridge, ipcRenderer} = require('electron');
contextBridge.exposeInMainWorld('presentationAPI', {
    passPresentationData: _0x4059a6 => ipcRenderer.on('PASS_PRESENTATION_DATA', _0x4059a6),
    passPresentationSetup: _0x597fb7 => ipcRenderer.on('PASS_PRESENTATION_SETUP', _0x597fb7),
    passPresentationControl: _0x1253de => ipcRenderer.on('PASS_PRESENTATION_CONTROL', _0x1253de),
    presentationControl: _0x4dafd6 => ipcRenderer.send('PRESENTATION_CONTROL', _0x4dafd6)
});