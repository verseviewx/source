const {app, Menu} = require('electron');
const isMac = process.platform === 'darwin';
const template = [
    ...isMac ? [{
            label: app.name,
            submenu: [
                { role: 'about' },
                { type: 'separator' },
                { role: 'services' },
                { type: 'separator' },
                { role: 'quit' }
            ]
        }] : [],
    {
        label: 'VerseVIEW',
        submenu: [
            {
                label: 'Remote VerseVIEW',
                click: () => {
                    app.emit('menu_remotevv');
                }
            },
            {
                label: 'Theme Builder',
                click: () => {
                    app.emit('menu_themebuilder');
                }
            },
            isMac ? { role: 'close' } : { role: 'quit' }
        ]
    },
    {
        label: 'Edit',
        submenu: [
            { role: 'copy' },
            { role: 'paste' },
            { type: 'separator' },
            { role: 'resetZoom' },
            { role: 'zoomIn' },
            {
                role: 'zoomIn',
                accelerator: 'Ctrl+=',
                visible: false
            },
            {
                role: 'zoomIn',
                accelerator: 'Ctrl+numadd',
                visible: false
            },
            { role: 'zoomOut' },
            {
                role: 'zoomOut',
                accelerator: 'Ctrl+numsub',
                visible: false
            },
            { type: 'separator' }
        ]
    },
    {
        label: 'Bible',
        submenu: [
            {
                label: 'Add Version',
                click: () => {
                    app.emit('menu_bibleaddversion');
                }
            },
            {
                label: 'Select Version',
                click: () => {
                    app.emit('menu_bibleselectversion');
                }
            },
            {
                label: 'Manage Version',
                click: () => {
                    app.emit('menu_biblemanageversion');
                }
            }
        ]
    },
    {
        label: 'Song',
        submenu: [
            {
                label: 'New',
                click: () => {
                    app.emit('menu_songadd');
                }
            },
            {
                label: 'Edit',
                click: () => {
                    app.emit('menu_songedit');
                }
            },
            {
                label: 'Delete',
                submenu: [
                    {
                        label: 'Selected Song',
                        click: () => {
                            app.emit('menu_songdeleteselected');
                        }
                    },
                    {
                        label: 'Selected Category',
                        click: () => {
                            app.emit('menu_songdeletecategory');
                        }
                    }
                ]
            },
            { type: 'separator' },
            {
                label: 'Export Lyrics',
                click: () => {
                    app.emit('menu_exportsongcat');
                }
            },
            {
                label: 'Import Lyrics',
                click: () => {
                    app.emit('menu_importsongcat');
                }
            }
        ]
    },
    {
        role: 'help',
        submenu: [{
                label: 'About',
                click: async () => {
                    const {shell: _0x56a1f3} = require('electron');
                    await _0x56a1f3.openExternal('http://verseview.info/vv/vv10/');
                }
            }]
    }
];
function renderMenu() {
    const _0x1827a1 = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(_0x1827a1);
}
module.exports = { renderMenu: renderMenu };