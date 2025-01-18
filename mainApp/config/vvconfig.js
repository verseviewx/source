const {app} = require('electron');
const path = require('path');
const fse = require('fs-extra');
function vvconfigx() {
    this.loadVVConfig = _0x351a39;
    this.saveVVConfig = _0x2449ff;
    function _0x351a39() {
        const _0x1a7e64 = path.join(app.getPath('userData'), './vvdata/config/config.json');
        const _0x2c7fc1 = fse.readJsonSync(_0x1a7e64);
        return _0x2c7fc1.configuration[0].appDataFolder = app.getPath('appData') + '\\VerseVIEW10\\vvdata\\', _0x2c7fc1;
    }
    function _0x2449ff(_0x2d45ef) {
        const _0x25a0d0 = path.join(app.getPath('userData'), './vvdata/config/config.json');
        fse.chmod(_0x25a0d0, '777', () => {
            fse.writeJsonSync(_0x25a0d0, _0x2d45ef);
        });
    }
}
module.exports = { vvconfigx: vvconfigx };