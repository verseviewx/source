const {selectfile} = require('./selectfile');
const {fileacess} = require('./fileaccess');
const vvFileAccess = new fileacess();
function background() {
    this.add = _0xc40b1;
    this.getlist = _0x283cb4;
    this.deleteBknd = _0x13002a;
    async function _0xc40b1() {
        let _0x1d0c5a = await selectfile(0);
        if (_0x1d0c5a != null) {
            const _0x3040a5 = true;
            const _0x4cc3f6 = false;
            const _0xc77702 = true;
            await vvFileAccess.vvcopyFileSync(_0x1d0c5a, './vvdata/background/still/', _0x3040a5, _0x4cc3f6, _0xc77702);
            const _0x588e88 = vvFileAccess.vvFileReadDir('./vvdata/background/still/');
            return _0x588e88;
        } else {
            return;
        }
    }
    function _0x283cb4() {
        const _0xd7467c = vvFileAccess.vvFileReadDir('./vvdata/background/still/');
        return _0xd7467c;
    }
    async function _0x13002a(_0x4eb2a2) {
        const _0x194a4a = './vvdata/background/still/' + _0x4eb2a2;
        const _0xcee8af = await vvFileAccess.vvFileDelete(_0x194a4a);
        return _0xcee8af;
    }
}
module.exports = { background: background };