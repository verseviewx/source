const {app} = require('electron');
const path = require('path');
const fse = require('fs-extra');
function vvthemes() {
    this.loadVVThemes = _0x51e641;
    this.saveVVThemes = _0x4f293a;
    function _0x51e641() {
        const _0x3db7de = path.join(app.getPath('userData'), './vvdata/theme/theme.json');
        const _0x5be575 = fse.readJsonSync(_0x3db7de);
        return _0x5be575;
    }
    function _0x4f293a(_0x4efeb9) {
        const _0x278381 = path.join(app.getPath('userData'), './vvdata/theme/theme.json');
        fse.chmod(_0x278381, '777', () => {
            fse.writeJsonSync(_0x278381, _0x4efeb9);
        });
    }
}
module.exports = { vvthemes: vvthemes };