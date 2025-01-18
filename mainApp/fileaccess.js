const {app} = require('electron');
const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');
function fileacess() {
    this.vvcopyFileSync = _0x581329;
    this.vvcopyFile = _0x50dbf2;
    this.vvFileExistsSync = _0x4a8b7e;
    this.vvFileReadDir = _0x2ad053;
    this.vvFileDelete = _0x1c669d;
    function _0x50dbf2(_0x190dab, _0x469c6c) {
        const _0x476c23 = path.join(app.getAppPath(), _0x190dab);
        const _0x1c885b = path.join(app.getPath('userData'), _0x469c6c);
        fse.copy(_0x476c23, _0x1c885b, _0x41c2d1 => {
            if (_0x41c2d1) {
                throw _0x41c2d1;
            }
            return true;
        });
    }
    function _0x581329(_0x4641c3, _0x4868b8, _0x3dad78, _0x5a5dd5, _0x5dc402) {
        var _0x205add = '';
        if (_0x5dc402) {
            var _0x4a4666 = _0x4641c3.lastIndexOf('\\') + 1;
            process.platform === 'darwin' && (_0x4a4666 = _0x4641c3.lastIndexOf('/') + 1);
            _0x205add = _0x4641c3.substr(_0x4a4666);
        }
        let _0x1b3777 = _0x4641c3;
        !_0x3dad78 && (_0x1b3777 = path.join(app.getAppPath(), _0x4641c3));
        let _0xe4a999 = _0x4868b8 + _0x205add;
        !_0x5a5dd5 && (_0xe4a999 = path.join(app.getPath('userData'), _0xe4a999));
        try {
            return fse.copySync(_0x1b3777, _0xe4a999), setTimeout(function () {
                try {
                    fse.chmod(_0xe4a999, '766');
                } catch (_0x588be1) {
                    console.error(_0x588be1);
                }
            }, 5000), true;
        } catch (_0x75200) {
            return console.error(_0x75200), false;
        }
    }
    function _0x4a8b7e(_0x340979) {
        const _0x21192a = path.join(app.getPath('userData'), _0x340979);
        return fs.existsSync(_0x21192a) ? true : false;
    }
    function _0x2ad053(_0x1217ad) {
        const _0x5ce791 = path.join(app.getPath('userData'), _0x1217ad);
        let _0x581ef4 = new Array();
        return fs.readdirSync(_0x5ce791).forEach(_0x4c5372 => {
            _0x581ef4.push(_0x4c5372);
        }), _0x581ef4;
    }
    async function _0x1c669d(_0x3c067c) {
        const _0x162f85 = path.join(app.getPath('userData'), _0x3c067c);
        try {
            return fs.unlinkSync(_0x162f85), true;
        } catch (_0x494909) {
            return console.log(_0x494909), false;
        }
    }
}
module.exports = { fileacess: fileacess };