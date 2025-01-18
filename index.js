const {app, BrowserWindow, screen, ipcMain} = require('electron');
const {dialog} = require('electron');
const path = require('path');
const os = require('node:os');
const hostname = os.hostname();
const {bibledbinit, biblecontent} = require('./mainApp/bible/biblecontent');
const {songdbInit, songdbObj} = require('./mainApp/songs/songconnect');
const {initialSetup} = require('./mainApp/initialSetup');
const {allscreens} = require('./mainApp/allscreens');
const {background} = require('./mainApp/background');
const {bibleVersion} = require('./mainApp/bibleversion');
const {vvconfigx} = require('./mainApp/config/vvconfig');
const {vvthemes} = require('./mainApp/theme/presentationthemes');
const {scheduleInit, vvScheduleObj} = require('./mainApp/scheduleconnect');
const {renderMenu} = require('./vvmenu');
const {bibledbimport} = require('./mainApp/bible/bibledbimport');
const {webserver, getRemoteData, setPresentationData, setStageView, getStageView} = require('./mainApp/network/webserver');
const {importsongxml} = require('./mainApp/importsongxml');
let bkgnd = new background();
let importsongxmlObj = new importsongxml();
let projectorWindowLoaded = false;
let projectorWindowFirstTime = true;
let projectorWindow;
let stageviewWindow;
let mainWindow;
let splashWindow = null;
let vvscreens = null;
let displays = null;
const createSplashWindow = () => {
    splashWindow = new BrowserWindow({
        width: 500,
        height: 200,
        frame: false,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
        }
    });
    splashWindow.loadFile('splash.html');
    splashWindow.setAlwaysOnTop(true);
    setTimeout(function () {
        closeSplashWindow();
    }, 3000);
};
function closeSplashWindow() {
    splashWindow != null && setTimeout(function () {
        if (splashWindow != null) {
            splashWindow.close();
            splashWindow = null;
        }
    }, 1000);
}
const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 1600,
        height: 1000,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true,
            spellcheck: false
        }
    });
    mainWindow.loadFile('index.html');
    mainWindow.on('closed', function () {
        mainWindow = null;
        app.quit();
    });
    mainWindow.webContents.on('did-finish-load', function () {
        closeSplashWindow();
    });
};
ipcMain.on('PASS_PRESENTATION_SETUP', (_0x3b64b6, _0x4636b3) => {
    if (_0x4636b3.iscontrol) {
        passControl2Presentation(_0x4636b3);
    } else {
        createPresentationWindow2(_0x4636b3);
        createStageviewWindow(_0x4636b3);
        const _0x1bf605 = setInterval(function () {
            projectorWindowLoaded && (clearInterval(_0x1bf605), passSetup2Presentation(_0x4636b3), setPresentationData(_0x4636b3));
        }, 200);
        setPresentationData(_0x4636b3);
    }
});
function closePresentation_private() {
    projectorWindowLoaded && (projectorWindowLoaded = false, projectorWindow.close());
    stageviewWindow != null && stageviewWindow.close();
    const _0x2e5690 = {
        content1: '',
        content2: '',
        font1: '',
        font2: '',
        title: ''
    };
    setPresentationData(_0x2e5690);
}
ipcMain.on('CLOSE_PRESENTATION_WINDOW', (_0x8808ee, _0x29dae1) => {
    closePresentation_private();
});
ipcMain.on('PRESENTATION_CONTROL', (_0x4d3be8, _0x47234b) => {
    switch (_0x47234b.command) {
    case 1:
    case 2:
        mainWindow.webContents.send('PASS_PRESENTATION_DATA_2_MAIN', _0x47234b), setPresentationData(_0x47234b);
        break;
    case 0:
    default:
        closePresentation_private();
    }
});
ipcMain.on('SAVE_BIBLE_VERSION_JSON', (_0x48cbfe, _0x21f1fb) => {
    const _0x34c8f9 = new bibleVersion();
    _0x34c8f9.saveBibleVersionConfig(_0x21f1fb);
});
ipcMain.on('SET_YOU_TUBE', async (_0x49324b, _0x40991e) => {
    const _0x8f6246 = _0x40991e.link;
    const _0x49acf3 = _0x40991e.playflag;
    if (_0x8f6246 != '' && _0x49acf3) {
        const {shell: _0x5956e9} = require('electron');
        await _0x5956e9.openExternal(_0x8f6246);
    }
});
ipcMain.on('SET_BIBLE_VERSION', (_0x215f3e, _0x4134af) => {
    const _0x214dab = path.join(app.getPath('userData'), './vvdata/bible/' + _0x4134af.versionfname);
    _0x4134af.versionnum == 1 ? bibledbinit(_0x214dab, 1) : bibledbinit(_0x214dab, 2);
});
ipcMain.on('SAVE_CONFIG_JSON', (_0x28986a, _0x7a035d) => {
    const _0x453a05 = new vvconfigx();
    _0x453a05.saveVVConfig(_0x7a035d);
});
ipcMain.on('SAVE_THEME_JSON', (_0x30805e, _0x3becbd) => {
    const _0xa9c361 = new vvthemes();
    _0xa9c361.saveVVThemes(_0x3becbd);
});
ipcMain.on('SAVE_SCHEDULE_JSON', (_0x99c565, _0x57cabb) => {
    vvScheduleObj.saveVVSchedule(_0x57cabb);
});
ipcMain.on('update', (_0x50497f, _0x2e2496) => {
    updatePresentationText(_0x2e2496);
    setPresentationData(_0x2e2496);
});
ipcMain.on('forwebserver', (_0x8610a0, _0xc38d07) => {
    console.log('From Nav for web server..' + _0xc38d07);
});
ipcMain.on('SET_STAGE_VIEW', (_0x64ac5c, _0x59cd88) => {
    setStageView(_0x59cd88);
});
function handleGetSongDB(_0x41a8c5, _0x42626a) {
    let _0x42e879 = null;
    switch (_0x42626a.command) {
    case 0:
        _0x42e879 = songdbObj.getCategory();
        return _0x42e879;
        break;
    case 1:
        _0x42e879 = songdbObj.getTags();
        return _0x42e879;
        break;
    case 2:
        _0x42e879 = songdbObj.getTitle(_0x42626a.category, _0x42626a.tag);
        return _0x42e879;
        break;
    case 3:
        _0x42e879 = songdbObj.getSong(_0x42626a.songid);
        return _0x42e879;
        break;
    case 4:
        _0x42e879 = songdbObj.search(_0x42626a.keyword, _0x42626a.searchType, _0x42626a.category);
        return _0x42e879;
        break;
    default:
        return 'Invalid';
        break;
    }
}
function handleSetSongDB(_0x5a00f4, _0xa6208b) {
    let _0x4ff047 = null;
    switch (_0xa6208b.command) {
    case 0:
        _0x4ff047 = songdbObj.addSong(_0xa6208b);
        return _0x4ff047;
        break;
    case 1:
        _0x4ff047 = songdbObj.updateSong(_0xa6208b);
        return _0x4ff047;
        break;
    case 2:
        _0x4ff047 = songdbObj.deleteSong(_0xa6208b);
        return _0x4ff047;
        break;
    case 3:
        _0x4ff047 = songdbObj.deleteCategory(_0xa6208b);
        return _0x4ff047;
        break;
    case 4:
        _0x4ff047 = songdbObj.exportCategory(_0xa6208b.cat);
        return _0x4ff047;
        break;
    default:
        return 'Invalid';
        break;
    }
}
function handleDeleteBackground(_0x57836b, _0x4dbedc) {
    const _0x2fd6f9 = bkgnd.deleteBknd(_0x4dbedc);
    return _0x2fd6f9;
}
async function handleBibleDB(_0xb7ade8, _0x1f10ef) {
    let _0x57afe1 = await biblecontent(_0x1f10ef);
    return _0x57afe1;
}
function handleBibleDBAdd(_0x54fd39, _0x596910) {
}
function handleGetBibleVersionJSON() {
    const _0xc6cb22 = new bibleVersion();
    return _0xc6cb22.loadBibleVersionConfig();
}
function handleGetSystemFonts() {
    let _0x3ebc5c = getsysfonts();
    return _0x3ebc5c;
}
function handleGetConfigJSON() {
    const _0xd2c92e = new vvconfigx();
    let _0xa47165 = _0xd2c92e.loadVVConfig();
    _0xa47165.vvdisplay = displays;
    process.platform == 'darwin' ? _0xa47165.configuration[0].platform = 'mac' : _0xa47165.configuration[0].platform = 'win';
    _0xa47165.configuration[0].remotehostname = hostname;
    var _0x2ab32e = os.networkInterfaces();
    var _0x441b33 = [];
    for (var _0x53fdb5 in _0x2ab32e) {
        for (var _0x47c7bd in _0x2ab32e[_0x53fdb5]) {
            var _0x1a4942 = _0x2ab32e[_0x53fdb5][_0x47c7bd];
            _0x441b33.push(_0x1a4942.address);
        }
    }
    return _0xa47165.configuration[0].remoteIPAddrList = _0x441b33, _0xa47165;
}
function handleGetThemeJSON() {
    const _0x5e66d3 = new vvthemes();
    let _0xa0a65c = _0x5e66d3.loadVVThemes();
    return _0xa0a65c;
}
function handleGetScheduleJSON() {
    return scheduleInit();
}
function handleConfigVVRemote(_0x2ca830, _0x2e2936) {
    if (_0x2e2936.command == 1) {
        const _0x413b91 = webserver(true, _0x2e2936.portnumber);
    } else {
        const _0x48ed70 = webserver(false);
    }
}
app.whenReady().then(async () => {
    let _0x2dad0d = false;
    let _0x462ced = new Date();
    _0x462ced > 1742446800000 && (_0x2dad0d = true);
    if (_0x2dad0d) {
        const _0x577c53 = {
            type: 'info',
            buttons: ['OK'],
            defaultId: 0,
            title: 'Update Version',
            message: 'Please visit VerseVIEW website for an updated version.'
        };
        dialog.showMessageBox(null, _0x577c53, _0xd60b => {
        });
    }
    createSplashWindow();
    ipcMain.handle('dialog:openFile', bkgnd.add);
    ipcMain.handle('GET_BACKGROUND_LIST', bkgnd.getlist);
    ipcMain.handle('DELETE_BACKGROUND', handleDeleteBackground);
    ipcMain.handle('dialog:openSongXMLFile', importsongxmlObj.add);
    const _0x5228e9 = new bibledbimport();
    ipcMain.handle('BIBLEDB_BROWSE', _0x5228e9.browsefile);
    ipcMain.handle('BIBLEDB_ADD', _0x5228e9.add);
    ipcMain.handle('BIBLEDB_REMOVE', _0x5228e9.remove);
    vvscreens = new allscreens();
    vvscreens.init();
    displays = vvscreens.getScreens();
    initialSetup();
    ipcMain.handle('GET_DATA_FROM_BIBLE', handleBibleDB);
    ipcMain.handle('GET_BIBLE_VERSION_JSON', handleGetBibleVersionJSON);
    ipcMain.handle('GET_CONFIG_JSON', handleGetConfigJSON);
    ipcMain.handle('GET_THEME_JSON', handleGetThemeJSON);
    ipcMain.handle('GET_SYSTEM_FONTS', handleGetSystemFonts);
    ipcMain.handle('GET_SCHEDULE_JSON', handleGetScheduleJSON);
    const _0x250de7 = path.join(app.getPath('userData'), './vvdata/songs/songs.db');
    await songdbInit(_0x250de7);
    ipcMain.handle('GET_DATA_FROM_SONGDB', handleGetSongDB);
    ipcMain.handle('SET_DATA_TO_SONGDB', handleSetSongDB);
    ipcMain.handle('CONFIG_VV_REMOTE', handleConfigVVRemote);
    renderMenu();
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
    app.on('before-quit', () => {
        if (projectorWindowLoaded) {
            try {
                projectorWindow.close();
            } catch {
                console.error('App closing. Projector window already closed.');
            }
            stageviewWindow != null && stageviewWindow.close();
        }
    });
    app.on('menu_remotevv', () => {
        mainWindow.webContents.send('PASS_MENU_CALL_INDEX', 1);
    });
    app.on('menu_themebuilder', () => {
        mainWindow.webContents.send('PASS_MENU_CALL_INDEX', 11);
    });
    app.on('menu_bibleselectversion', () => {
        mainWindow.webContents.send('PASS_MENU_CALL_INDEX', 2);
    });
    app.on('menu_biblemanageversion', () => {
        mainWindow.webContents.send('PASS_MENU_CALL_INDEX', 3);
    });
    app.on('menu_bibleaddversion', () => {
        mainWindow.webContents.send('PASS_MENU_CALL_INDEX', 4);
    });
    app.on('menu_songadd', () => {
        mainWindow.webContents.send('PASS_MENU_CALL_INDEX', 5);
    });
    app.on('menu_songedit', () => {
        mainWindow.webContents.send('PASS_MENU_CALL_INDEX', 6);
    });
    app.on('menu_songdeleteselected', () => {
        mainWindow.webContents.send('PASS_MENU_CALL_INDEX', 7);
    });
    app.on('menu_songdeletecategory', () => {
        mainWindow.webContents.send('PASS_MENU_CALL_INDEX', 8);
    });
    app.on('menu_exportsongcat', () => {
        mainWindow.webContents.send('PASS_MENU_CALL_INDEX', 9);
    });
    app.on('menu_importsongcat', () => {
        mainWindow.webContents.send('PASS_MENU_CALL_INDEX', 10);
    });
    app.on('remote_command', () => {
        mainWindow.webContents.send('PASS_REMOTE_COMMAND', getRemoteData());
    });
    app.on('vvmessage', () => {
        mainWindow.webContents.send('PASS_MAIN_MESSAGE', passMessage());
    });
});
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
function passMessage() {
    let _0x5f579b = songdbObj.getProgressData();
    return _0x5f579b.message + ' ' + _0x5f579b.value;
}
const createStageviewWindow = _0x4dd47a => {
    const _0x124f3e = _0x4dd47a.stageScreenEnable;
    const _0x3edb5a = _0x4dd47a.secondPresentationScreen;
    if (_0x124f3e) {
        const _0x6b3812 = displays[_0x3edb5a].bounds.x;
        const _0x50a4db = displays[_0x3edb5a].bounds.y;
        let _0xe7d56d = 1;
        let _0x3b0bce = false;
        let _0x12f066 = getStageView();
        _0x12f066.StageWindowView ? (_0x3b0bce = false, _0x12f066.StageWindowSize && (_0xe7d56d = 2)) : _0x3b0bce = true;
        const _0xf5b9e6 = _0x4dd47a.secondPresentationWidth / _0xe7d56d;
        const _0x25ee05 = _0x4dd47a.secondPresentationHeight / _0xe7d56d;
        const _0xf1ede1 = false;
        const _0x200e10 = _0x4dd47a.portnum;
        const _0x5dc1d1 = _0x4dd47a.stageviewFile;
        stageviewWindow == null && startStageViewWindow(_0x6b3812, _0x50a4db, _0xf5b9e6, _0x25ee05, _0xf1ede1, _0x3b0bce, _0x200e10, _0x5dc1d1);
    } else {
        stageviewWindow = null;
    }
};
const createPresentationWindow2 = _0x418bd6 => {
    const _0x1f0733 = _0x418bd6.mainScreenEnable;
    const _0x1314e8 = _0x418bd6.mainPresentationScreen;
    if (!projectorWindowLoaded && _0x1f0733) {
        projectorWindowFirstTime = true;
        const _0x2d7a99 = displays[_0x1314e8].bounds.x;
        const _0x159510 = displays[_0x1314e8].bounds.y;
        const _0x50f6ab = displays[_0x1314e8].bounds.width;
        const _0xf3d6e5 = displays[_0x1314e8].bounds.height;
        const _0x403342 = _0x418bd6.PresentationOnTop;
        const _0x5cdab4 = true;
        projectorWindow = new BrowserWindow({
            width: _0x50f6ab,
            height: _0xf3d6e5,
            show: false,
            backgroundColor: 'black',
            x: _0x2d7a99,
            y: _0x159510,
            frame: false,
            offscreen: true,
            alwaysOnTop: _0x403342,
            kiosk: false,
            focusable: true,
            skipTaskbar: false,
            icon: path.join(__dirname, 'assets/icons/png/64x64.png'),
            webPreferences: { preload: path.join(__dirname, './presentation/preload.js') }
        });
        projectorWindow.loadFile('./presentation/presentation1.html');
        projectorWindow.once('ready-to-show', async () => {
            projectorWindowLoaded = true;
        });
        projectorWindow.webContents.on('did-finish-load', async function () {
            setTimeout(function () {
                projectorWindow.show();
                projectorWindow.setKiosk(true);
            }, 100);
        });
        projectorWindow.on('closed', function () {
            projectorWindow = null;
            projectorWindowLoaded = false;
            stageviewWindow != null && stageviewWindow.close();
        });
    } else {
        projectorWindowFirstTime = false;
    }
};
function updatePresentationText(_0x387844) {
    projectorWindowLoaded && projectorWindow.webContents.send('PASS_PRESENTATION_DATA', _0x387844);
}
function passSetup2Presentation(_0x1e99c6) {
    if (projectorWindowLoaded) {
        if (projectorWindowFirstTime) {
            _0x1e99c6.updateAll = true;
        } else {
        }
        if (projectorWindowLoaded) {
            try {
                projectorWindow.webContents.send('PASS_PRESENTATION_SETUP', _0x1e99c6);
            } catch {
                console.error('Projector Window handle is gone..');
                projectorWindowLoaded = false;
            }
        }
    }
}
function passControl2Presentation(_0x2b7936) {
    if (projectorWindowLoaded) {
        try {
            projectorWindow.webContents.send('PASS_PRESENTATION_CONTROL', _0x2b7936);
        } catch {
            console.error('Projector Window handle is gone..');
            projectorWindowLoaded = false;
        }
    }
}
function startStageViewWindow(_0x589357, _0x26ed7c, _0x4a3f74, _0x520d8e, _0x3ab2bd, _0x1e9d2a, _0x2b8f07, _0x411469) {
    stageviewWindow = new BrowserWindow({
        width: _0x4a3f74,
        height: _0x520d8e,
        x: _0x589357,
        y: _0x26ed7c,
        show: false,
        frame: true,
        offscreen: true,
        alwaysOnTop: _0x3ab2bd,
        kiosk: _0x1e9d2a,
        autoHideMenuBar: true,
        icon: path.join(__dirname, 'assets/icons/png/64x64.png')
    });
    stageviewWindow.loadURL('http://localhost:' + _0x2b8f07 + '/stageview/' + _0x411469 + '/c.html');
    stageviewWindow.once('ready-to-show', async () => {
        setTimeout(function () {
            stageviewWindow != null && stageviewWindow.show();
        }, 400);
    });
    stageviewWindow.on('closed', function () {
        stageviewWindow = null;
    });
}