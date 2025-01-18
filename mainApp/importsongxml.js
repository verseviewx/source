const fse = require('fs-extra');
const {selectfile} = require('./selectfile');
const {fileacess} = require('./fileaccess');
const {songdbObj} = require('./songs/songconnect');
const vvFileAccess = new fileacess();
function importsongxml() {
    this.add = _0x9227fa;
    async function _0x9227fa() {
        let _0x22cdc2 = await selectfile(2);
        if (_0x22cdc2 != null) {
            const _0x1143e7 = fse.readFileSync(_0x22cdc2, { encoding: 'utf-8' });
            const _0x1dcec2 = await songdbObj.importSongXML(_0x1143e7);
            return _0x1dcec2;
        } else {
            return false;
        }
    }
}
module.exports = { importsongxml: importsongxml };