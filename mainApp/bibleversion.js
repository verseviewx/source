const {app} = require('electron');
const path = require('path');
const fse = require('fs-extra');
function bibleVersion() {
    this.loadBibleVersionConfig = _0xc01e75;
    this.saveBibleVersionConfig = _0x39d1f6;
    function _0xc01e75() {
        const _0x58ad27 = path.join(app.getPath('userData'), './vvdata/bible/version.json');
        const _0x357e44 = fse.readJsonSync(_0x58ad27);
        return _0x357e44;
    }
    function _0x39d1f6(_0x58ac29) {
        const _0x55e5ff = path.join(app.getPath('userData'), './vvdata/bible/version.json');
        fse.chmod(_0x55e5ff, '777', () => {
            fse.writeJsonSync(_0x55e5ff, _0x58ac29);
        });
    }
}
module.exports = { bibleVersion: bibleVersion };