const {bibledb} = require('./bibledb');
let version1 = new bibledb();
let version2 = new bibledb();
function bibledbinit(_0x4a3d26, _0x36040b) {
    _0x36040b == 1 ? (version1.init(_0x4a3d26), version1.connect()) : (version2.init(_0x4a3d26), version2.connect());
}
async function biblecontent(_0x584fa2) {
    switch (_0x584fa2.command) {
    case 0:
        if (_0x584fa2.version == 1) {
            const _0xda4265 = await version1.readChapter(_0x584fa2.bookval, _0x584fa2.chapterval);
            return _0xda4265;
        } else {
            const _0x41d4a3 = await version2.readChapter(_0x584fa2.bookval, _0x584fa2.chapterval);
            return _0x41d4a3;
        }
        break;
    case 1:
        const _0x59ec02 = processKeywordArray(_0x584fa2.keyword, _0x584fa2.searchType), _0x3c2421 = _0x584fa2.bookval;
        let _0x2e5a4f = null;
        _0x584fa2.version == 1 ? _0x2e5a4f = version1.search(_0x59ec02, _0x3c2421) : _0x2e5a4f = version2.search(_0x59ec02, _0x3c2421);
        return _0x2e5a4f;
        break;
    case 2:
        break;
    default:
        break;
    }
}
function processKeywordArray(_0x6b1320, _0x4acf5a) {
    var _0x41eec3 = '';
    if (_0x4acf5a == 1) {
        var _0x53159f = _0x6b1320.split(' ');
        for (var _0x265a6a = 0; _0x265a6a < _0x53159f.length; _0x265a6a++) {
            _0x53159f[_0x265a6a] != '' && (_0x41eec3 += '%' + _0x53159f[_0x265a6a]);
        }
        _0x41eec3 += '%';
    } else {
        _0x41eec3 = '%' + _0x6b1320 + '%';
    }
    return _0x41eec3;
}
module.exports = {
    bibledbinit: bibledbinit,
    biblecontent: biblecontent
};