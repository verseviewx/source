const sqlite3 = require('sqlite3');
const {open} = require('sqlite');
function bibledb() {
    this.init = _0x498b91;
    this.connect = _0x444505;
    this.bibledb_readWithID = _0xb8752c;
    this.readChapter = _0x5a75b7;
    this.bibledb_readconfig = _0x780cd0;
    this.search = _0x3745e5;
    let _0x1b00a7 = './kjv.db';
    let _0x22bad0 = null;
    const _0x31c395 = 100;
    function _0x498b91(_0x492c45) {
        this.filename = _0x492c45;
        _0x22bad0 = null;
    }
    async function _0x444505() {
        return _0x22bad0 = await open({
            filename: this.filename,
            driver: sqlite3.Database
        }), true;
    }
    async function _0x780cd0() {
        await _0x1db038(_0x31c395);
        const _0xc6d032 = await _0x22bad0.all('SELECT * FROM configuration');
        return _0xc6d032;
    }
    function _0xb8752c(_0x1041d3) {
        _0x22bad0.each('SELECT * FROM words WHERE wordId=3', function (_0x5ce114, _0x11004d) {
        });
    }
    async function _0x5a75b7(_0x479392, _0x5359e8) {
        await _0x1db038(_0x31c395);
        const _0x56013e = await _0x22bad0.all('SELECT word FROM words WHERE bookNum = ' + _0x479392 + ' AND chNum = ' + _0x5359e8 + ' ORDER BY verseNum ASC');
        return _0x56013e;
    }
    async function _0x39679a(_0xaebf8f, _0xf45b12) {
        const _0x55cee0 = await _0x22bad0.get('SELECT * FROM words WHERE wordId=?', 3);
        return _0x55cee0.word;
    }
    async function _0x3745e5(_0x4bde1f, _0x28d1b8) {
        await _0x1db038(_0x31c395);
        let _0x32ebff = null;
        return _0x28d1b8 == 0 ? _0x32ebff = await _0x22bad0.all('SELECT * FROM words WHERE word LIKE \'' + _0x4bde1f + '\'') : _0x32ebff = await _0x22bad0.all('SELECT * FROM words WHERE word LIKE \'' + _0x4bde1f + '\' AND bookNum = ' + _0x28d1b8), _0x32ebff;
    }
    function _0x1db038(_0xdfd980) {
        return new Promise(_0x4422e6 => {
            _0x22bad0 == null ? setTimeout(_0x4422e6, _0xdfd980) : setTimeout(_0x4422e6, 10);
        });
    }
}
module.exports = { bibledb: bibledb };