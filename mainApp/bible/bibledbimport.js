const sqlite3 = require('sqlite3');
const {open} = require('sqlite');
const {app} = require('electron');
const path = require('path');
const fse = require('fs-extra');
const {selectfile} = require('../selectfile');
const {fileacess} = require('../fileaccess');
const {bibledb} = require('./bibledb');
const {XMLParser} = require('fast-xml-parser');
const vvFileAccess = new fileacess();
let db = null;
let dbfile = null;
function bibledbimport() {
    this.browsefile = _0x51c9b8;
    this.add = _0x3e0597;
    this.remove = _0x4045c0;
    async function _0x51c9b8() {
        let _0x177987 = await selectfile(1);
        return _0x177987;
    }
    async function _0x3e0597(_0x3c5d63, _0x589523, _0x1756a2) {
        let _0x3820ff = false;
        _0x1756a2 == null ? _0x3820ff = true : _0x3820ff = _0x1756a2;
        if (_0x589523.type == 'XML') {
            let _0x1ef4fe = await _0x11c03a(_0x589523.path);
            console.log('ADD function in bibledbimport - convertXML2DB status: ' + _0x1ef4fe);
            if (_0x1ef4fe == false) {
                return false;
            }
            if (_0x1ef4fe.toString() != 'false') {
                _0x1ef4fe = 'vvdata/bible/' + _0x1ef4fe;
                const _0x537eeb = path.join(app.getPath('userData'), _0x1ef4fe);
                let _0x205d78 = {
                    path: _0x537eeb,
                    type: 'DB'
                };
                let _0x3c9009 = await _0x3e0597(null, _0x205d78, false);
                return _0x3c9009;
            }
            let _0x557c8a = 'converted..';
            return _0x557c8a;
        } else {
            let _0x43371a = await _0x2b7155(_0x589523.path, _0x3820ff);
            return _0x43371a;
        }
    }
    function _0x1f31b5(_0x1a679b) {
        return new Promise(_0x90bc0e => setTimeout(_0x90bc0e, _0x1a679b));
    }
    function _0x1b6f12(_0x3fa9c7) {
        let _0x1e937a = '';
        return process.platform == 'darwin' ? _0x1e937a = _0x3fa9c7.split('/') : _0x1e937a = _0x3fa9c7.split('\\'), _0x1e937a = _0x1e937a[_0x1e937a.length - 1].split('.')[0], _0x1e937a;
    }
    async function _0x11c03a(_0x271312) {
        console.log('About to convert XML to DB format..' + _0x271312);
        const _0xe74111 = new XMLParser();
        const _0x108a2f = fse.readFileSync(_0x271312, { encoding: 'utf-8' });
        let _0xfb5b61 = _0x1b6f12(_0x271312) + '.db';
        console.log('DB file name line 143: ' + _0xfb5b61);
        let _0x909270 = true;
        try {
            jObj = _0xe74111.parse(_0x108a2f);
            console.log('Import function called in main..' + jObj);
        } catch (_0x283026) {
            return console.log('Error parser..' + _0x283026), false;
        }
        try {
            _0x909270 = await _0x2021ad(jObj, _0xfb5b61);
            console.log('Flag in second try..' + _0x909270);
        } catch (_0xc22641) {
            return false;
        }
        if (_0x909270 == false) {
            return false;
        }
        return _0xfb5b61;
    }
    async function _0x2021ad(_0x187383, _0x40547b) {
        let _0x53c959 = false;
        if (_0x187383 != null) {
            var _0x25b285 = null;
            try {
                _0x25b285 = _0x187383.XMLBIBLE.INFORMATION.format;
            } catch {
                _0x25b285 = null;
            }
            if (_0x25b285 != null) {
                if (_0x25b285 == 'Zefania XML Bible Markup Language') {
                    _0x53c959 = await _0x46f339(_0x187383.XMLBIBLE.BIBLEBOOK, _0x40547b);
                } else {
                }
            } else {
                console.log('type is null??');
                const _0x590164 = _0x187383.XMLBIBLE.BIBLEBOOK;
                _0x590164 != null ? _0x53c959 = await _0x46f339(_0x187383.XMLBIBLE.BIBLEBOOK, _0x40547b) : console.log('Not a supported XML file..');
            }
        } else {
        }
        return _0x53c959;
    }
    async function _0x5a9f5d(_0x1dc526) {
        const _0x2ef283 = path.join(app.getPath('userData'), './vvdata/bible/' + _0x1dc526);
        return dbfile = await open({
            filename: _0x2ef283,
            driver: sqlite3.Database
        }), dbfile != null ? true : false;
    }
    async function _0x4cc133() {
        var _0x4340ed = 'CREATE TABLE IF NOT EXISTS words (wordId INTEGER PRIMARY KEY AUTOINCREMENT, word TEXT, bookNum INTEGER, chNum INTEGER, verseNum INTEGER)';
        try {
            await dbfile.run(_0x4340ed);
        } catch (_0x58c625) {
            return console.log('Error in creating new Bible database file: ' + _0x58c625), false;
        }
    }
    async function _0x14f1cb() {
        var _0x505152 = 'CREATE TABLE `configuration` (`revision`\tINTEGER,`fonts`\tTEXT,`booknames`TEXT, `title`TEXT,`description`\tTEXT,`copyrights`\tTEXT,`sizefactor`INTEGER)';
        try {
            await dbfile.run(_0x505152);
        } catch (_0x176b29) {
            return console.log('Error in creating new config table: ' + _0x176b29), false;
        }
    }
    async function _0x301e0b(_0x2a24b7, _0x47015e, _0x57a244, _0x1009b7, _0x118f95, _0x54fe0e, _0x333717) {
        const _0x4c0cde = [
            _0x2a24b7,
            _0x47015e,
            _0x57a244,
            _0x1009b7,
            _0x118f95,
            _0x54fe0e,
            _0x333717
        ];
        var _0x438f1d = '';
        _0x438f1d += 'INSERT INTO configuration (revision, fonts,booknames, title, description, copyrights, sizefactor) SELECT ?,?,?,?,?,?,?';
        try {
            row = await dbfile.run(_0x438f1d, _0x4c0cde);
        } catch (_0x22c1fb) {
            return console.error(_0x22c1fb), _0x22c1fb;
        }
    }
    async function _0x29c46a(_0x61a8af) {
        const _0x18864e = _0x61a8af.word;
        const _0x73f60a = _0x61a8af.booknum;
        const _0x3cb920 = _0x61a8af.chapternum;
        const _0x2bf4be = _0x61a8af.versenum;
        const _0x5ae33f = [
            _0x18864e,
            _0x73f60a,
            _0x3cb920,
            _0x2bf4be
        ];
        var _0x51df78 = '';
        _0x51df78 += 'INSERT INTO words (word, bookNum, chNum, verseNum) SELECT ?,?,?,?';
        let _0x72bd9a = 0;
        try {
            _0x72bd9a = await db.run(_0x51df78, _0x5ae33f);
        } catch (_0x9567c3) {
            return _0x9567c3;
        }
        return '' + _0x72bd9a.lastID;
    }
    async function _0x577de2(_0x582bec) {
        let _0x2245e5 = 'vvdata/bible/' + _0x582bec;
        const _0x17ecdb = vvFileAccess.vvFileExistsSync(_0x2245e5);
        if (!_0x17ecdb) {
            const _0x2c65f9 = await _0x5a9f5d(_0x582bec);
            return _0x2c65f9 ? (await _0x4cc133(), await _0x14f1cb(), true) : false;
        } else {
            return false;
        }
    }
    async function _0x489524(_0x4b0d6e, _0x16dde8) {
        const _0x432712 = 1;
        const _0x77e257 = 'Baloo Chettan';
        const _0x20bbb7 = '"Genesis","Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles",  "Ezra",  "Nehemiah", "Esther", "Job", "Psalm", "Proverbs", "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi", "Matthew", "Mark", "Luke",  "John",  "Acts", "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus", "Philemon", "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John", "Jude", "Revelation"';
        let _0x451412 = '';
        let _0x333206 = '';
        const _0x2a3388 = 'Public Domain';
        const _0x4abd95 = 1;
        _0x451412 = _0x16dde8.split('.')[0];
        _0x333206 = _0x16dde8.split('.')[0];
        _0x301e0b(_0x432712, _0x77e257, _0x20bbb7, _0x451412, _0x333206, _0x2a3388, _0x4abd95);
    }
    async function _0x46f339(_0x11a854, _0x342fc8) {
        var _0x24c39a = new Array([0], [
            50,
            31,
            25,
            24,
            26,
            32,
            22,
            24,
            22,
            29,
            32,
            32,
            20,
            18,
            24,
            21,
            16,
            27,
            33,
            38,
            18,
            34,
            24,
            20,
            67,
            34,
            35,
            46,
            22,
            35,
            43,
            55,
            32,
            20,
            31,
            29,
            43,
            36,
            30,
            23,
            23,
            57,
            38,
            34,
            34,
            28,
            34,
            31,
            22,
            33,
            26
        ], [
            40,
            22,
            25,
            22,
            31,
            23,
            30,
            25,
            32,
            35,
            29,
            10,
            51,
            22,
            31,
            27,
            36,
            16,
            27,
            25,
            26,
            36,
            31,
            33,
            18,
            40,
            37,
            21,
            43,
            46,
            38,
            18,
            35,
            23,
            35,
            35,
            38,
            29,
            31,
            43,
            38
        ], [
            27,
            17,
            16,
            17,
            35,
            19,
            30,
            38,
            36,
            24,
            20,
            47,
            8,
            59,
            57,
            33,
            34,
            16,
            30,
            37,
            27,
            24,
            33,
            44,
            23,
            55,
            46,
            34
        ], [
            36,
            54,
            34,
            51,
            49,
            31,
            27,
            89,
            26,
            23,
            36,
            35,
            16,
            33,
            45,
            41,
            50,
            13,
            32,
            22,
            29,
            35,
            41,
            30,
            25,
            18,
            65,
            23,
            31,
            40,
            16,
            54,
            42,
            56,
            29,
            34,
            13
        ], [
            34,
            46,
            37,
            29,
            49,
            33,
            25,
            26,
            20,
            29,
            22,
            32,
            32,
            18,
            29,
            23,
            22,
            20,
            22,
            21,
            20,
            23,
            30,
            25,
            22,
            19,
            19,
            26,
            68,
            29,
            20,
            30,
            52,
            29,
            12
        ], [
            24,
            18,
            24,
            17,
            24,
            15,
            27,
            26,
            35,
            27,
            43,
            23,
            24,
            33,
            15,
            63,
            10,
            18,
            28,
            51,
            9,
            45,
            34,
            16,
            33
        ], [
            21,
            36,
            23,
            31,
            24,
            31,
            40,
            25,
            35,
            57,
            18,
            40,
            15,
            25,
            20,
            20,
            31,
            13,
            31,
            30,
            48,
            25
        ], [
            4,
            22,
            23,
            18,
            22
        ], [
            31,
            28,
            36,
            21,
            22,
            12,
            21,
            17,
            22,
            27,
            27,
            15,
            25,
            23,
            52,
            35,
            23,
            58,
            30,
            24,
            42,
            15,
            23,
            29,
            22,
            44,
            25,
            12,
            25,
            11,
            31,
            13
        ], [
            24,
            27,
            32,
            39,
            12,
            25,
            23,
            29,
            18,
            13,
            19,
            27,
            31,
            39,
            33,
            37,
            23,
            29,
            33,
            43,
            26,
            22,
            51,
            39,
            25
        ], [
            22,
            53,
            46,
            28,
            34,
            18,
            38,
            51,
            66,
            28,
            29,
            43,
            33,
            34,
            31,
            34,
            34,
            24,
            46,
            21,
            43,
            29,
            53
        ], [
            25,
            18,
            25,
            27,
            44,
            27,
            33,
            20,
            29,
            37,
            36,
            21,
            21,
            25,
            29,
            38,
            20,
            41,
            37,
            37,
            21,
            26,
            20,
            37,
            20,
            30
        ], [
            29,
            54,
            55,
            24,
            43,
            26,
            81,
            40,
            40,
            44,
            14,
            47,
            40,
            14,
            17,
            29,
            43,
            27,
            17,
            19,
            8,
            30,
            19,
            32,
            31,
            31,
            32,
            34,
            21,
            30
        ], [
            36,
            17,
            18,
            17,
            22,
            14,
            42,
            22,
            18,
            31,
            19,
            23,
            16,
            22,
            15,
            19,
            14,
            19,
            34,
            11,
            37,
            20,
            12,
            21,
            27,
            28,
            23,
            9,
            27,
            36,
            27,
            21,
            33,
            25,
            33,
            27,
            23
        ], [
            10,
            11,
            70,
            13,
            24,
            17,
            22,
            28,
            36,
            15,
            44
        ], [
            13,
            11,
            20,
            32,
            23,
            19,
            19,
            73,
            18,
            38,
            39,
            36,
            47,
            31
        ], [
            10,
            22,
            23,
            15,
            17,
            14,
            14,
            10,
            17,
            32,
            3
        ], [
            42,
            22,
            13,
            26,
            21,
            27,
            30,
            21,
            22,
            35,
            22,
            20,
            25,
            28,
            22,
            35,
            22,
            16,
            21,
            29,
            29,
            34,
            30,
            17,
            25,
            6,
            14,
            23,
            28,
            25,
            31,
            40,
            22,
            33,
            37,
            16,
            33,
            24,
            41,
            30,
            24,
            34,
            17
        ], [
            150,
            6,
            12,
            8,
            8,
            12,
            10,
            17,
            9,
            20,
            18,
            7,
            8,
            6,
            7,
            5,
            11,
            15,
            50,
            14,
            9,
            13,
            31,
            6,
            10,
            22,
            12,
            14,
            9,
            11,
            12,
            24,
            11,
            22,
            22,
            28,
            12,
            40,
            22,
            13,
            17,
            13,
            11,
            5,
            26,
            17,
            11,
            9,
            14,
            20,
            23,
            19,
            9,
            6,
            7,
            23,
            13,
            11,
            11,
            17,
            12,
            8,
            12,
            11,
            10,
            13,
            20,
            7,
            35,
            36,
            5,
            24,
            20,
            28,
            23,
            10,
            12,
            20,
            72,
            13,
            19,
            16,
            8,
            18,
            12,
            13,
            17,
            7,
            18,
            52,
            17,
            16,
            15,
            5,
            23,
            11,
            13,
            12,
            9,
            9,
            5,
            8,
            28,
            22,
            35,
            45,
            48,
            43,
            13,
            31,
            7,
            10,
            10,
            9,
            8,
            18,
            19,
            2,
            29,
            176,
            7,
            8,
            9,
            4,
            8,
            5,
            6,
            5,
            6,
            8,
            8,
            3,
            18,
            3,
            3,
            21,
            26,
            9,
            8,
            24,
            13,
            10,
            7,
            12,
            15,
            21,
            10,
            20,
            14,
            9,
            6
        ], [
            31,
            33,
            22,
            35,
            27,
            23,
            35,
            27,
            36,
            18,
            32,
            31,
            28,
            25,
            35,
            33,
            33,
            28,
            24,
            29,
            30,
            31,
            29,
            35,
            34,
            28,
            28,
            27,
            28,
            27,
            33,
            31
        ], [
            12,
            18,
            26,
            22,
            16,
            20,
            12,
            29,
            17,
            18,
            20,
            10,
            14
        ], [
            8,
            17,
            17,
            11,
            16,
            16,
            13,
            13,
            14
        ], [
            66,
            31,
            22,
            26,
            6,
            30,
            13,
            25,
            22,
            21,
            34,
            16,
            6,
            22,
            32,
            9,
            14,
            14,
            7,
            25,
            6,
            17,
            25,
            18,
            23,
            12,
            21,
            13,
            29,
            24,
            33,
            9,
            20,
            24,
            17,
            10,
            22,
            38,
            22,
            8,
            31,
            29,
            25,
            28,
            28,
            25,
            13,
            15,
            22,
            26,
            11,
            23,
            15,
            12,
            17,
            13,
            12,
            21,
            14,
            21,
            22,
            11,
            12,
            19,
            12,
            25,
            24
        ], [
            52,
            19,
            37,
            25,
            31,
            31,
            30,
            34,
            22,
            26,
            25,
            23,
            17,
            27,
            22,
            21,
            21,
            27,
            23,
            15,
            18,
            14,
            30,
            40,
            10,
            38,
            24,
            22,
            17,
            32,
            24,
            40,
            44,
            26,
            22,
            19,
            32,
            21,
            28,
            18,
            16,
            18,
            22,
            13,
            30,
            5,
            28,
            7,
            47,
            39,
            46,
            64,
            34
        ], [
            5,
            22,
            22,
            66,
            22,
            22
        ], [
            48,
            28,
            10,
            27,
            17,
            17,
            14,
            27,
            18,
            11,
            22,
            25,
            28,
            23,
            23,
            8,
            63,
            24,
            32,
            14,
            49,
            32,
            31,
            49,
            27,
            17,
            21,
            36,
            26,
            21,
            26,
            18,
            32,
            33,
            31,
            15,
            38,
            28,
            23,
            29,
            49,
            26,
            20,
            27,
            31,
            25,
            24,
            23,
            35
        ], [
            12,
            21,
            49,
            30,
            37,
            31,
            28,
            28,
            27,
            27,
            21,
            45,
            13
        ], [
            14,
            11,
            23,
            5,
            19,
            15,
            11,
            16,
            14,
            17,
            15,
            12,
            14,
            16,
            9
        ], [
            3,
            20,
            32,
            21
        ], [
            9,
            15,
            16,
            15,
            13,
            27,
            14,
            17,
            14,
            15
        ], [
            1,
            21
        ], [
            4,
            17,
            10,
            10,
            11
        ], [
            7,
            16,
            13,
            12,
            13,
            15,
            16,
            20
        ], [
            3,
            15,
            13,
            19
        ], [
            3,
            17,
            20,
            19
        ], [
            3,
            18,
            15,
            20
        ], [
            2,
            15,
            23
        ], [
            14,
            21,
            13,
            10,
            14,
            11,
            15,
            14,
            23,
            17,
            12,
            17,
            14,
            9,
            21
        ], [
            4,
            14,
            17,
            18,
            6
        ], [
            28,
            25,
            23,
            17,
            25,
            48,
            34,
            29,
            34,
            38,
            42,
            30,
            50,
            58,
            36,
            39,
            28,
            27,
            35,
            30,
            34,
            46,
            46,
            39,
            51,
            46,
            75,
            66,
            20
        ], [
            16,
            45,
            28,
            35,
            41,
            43,
            56,
            37,
            38,
            50,
            52,
            33,
            44,
            37,
            72,
            47,
            20
        ], [
            24,
            80,
            52,
            38,
            44,
            39,
            49,
            50,
            56,
            62,
            42,
            54,
            59,
            35,
            35,
            32,
            31,
            37,
            43,
            48,
            47,
            38,
            71,
            56,
            53
        ], [
            21,
            51,
            25,
            36,
            54,
            47,
            71,
            53,
            59,
            41,
            42,
            57,
            50,
            38,
            31,
            27,
            33,
            26,
            40,
            42,
            31,
            25
        ], [
            28,
            26,
            47,
            26,
            37,
            42,
            15,
            60,
            40,
            43,
            48,
            30,
            25,
            52,
            28,
            41,
            40,
            34,
            28,
            41,
            38,
            40,
            30,
            35,
            27,
            27,
            32,
            44,
            31
        ], [
            16,
            32,
            29,
            31,
            25,
            21,
            23,
            25,
            39,
            33,
            21,
            36,
            21,
            14,
            23,
            33,
            27
        ], [
            16,
            31,
            16,
            23,
            21,
            13,
            20,
            40,
            13,
            27,
            33,
            34,
            31,
            13,
            40,
            58,
            24
        ], [
            13,
            24,
            17,
            18,
            18,
            21,
            18,
            16,
            24,
            15,
            18,
            33,
            21,
            14
        ], [
            6,
            24,
            21,
            29,
            31,
            26,
            18
        ], [
            6,
            23,
            22,
            21,
            32,
            33,
            24
        ], [
            4,
            30,
            30,
            21,
            23
        ], [
            4,
            29,
            23,
            25,
            18
        ], [
            5,
            10,
            20,
            13,
            18,
            28
        ], [
            3,
            12,
            17,
            18
        ], [
            6,
            20,
            15,
            16,
            16,
            25,
            21
        ], [
            4,
            18,
            26,
            17,
            22
        ], [
            3,
            16,
            15,
            15
        ], [
            1,
            25
        ], [
            13,
            14,
            18,
            19,
            16,
            14,
            20,
            28,
            13,
            28,
            39,
            40,
            29,
            25
        ], [
            5,
            27,
            26,
            18,
            17,
            20
        ], [
            5,
            25,
            25,
            22,
            19,
            14
        ], [
            3,
            21,
            22,
            18
        ], [
            5,
            10,
            29,
            24,
            21,
            21
        ], [
            1,
            13
        ], [
            1,
            14
        ], [
            1,
            25
        ], [
            22,
            20,
            29,
            22,
            11,
            14,
            17,
            17,
            13,
            21,
            11,
            19,
            17,
            18,
            20,
            8,
            21,
            18,
            24,
            21,
            15,
            27,
            21
        ]);
        const _0x3a4828 = await _0x577de2(_0x342fc8);
        if (!_0x3a4828) {
            return false;
        }
        await _0x489524(_0x11a854, _0x342fc8);
        let _0x456192 = new Array();
        for (var _0x3f5390 = 1; _0x3f5390 <= 66; _0x3f5390++) {
            var _0x51ea51 = _0x24c39a[_0x3f5390][0];
            for (var _0x231bec = 1; _0x231bec <= _0x51ea51; _0x231bec++) {
                var _0x952b1d = _0x24c39a[_0x3f5390][_0x231bec];
                for (var _0x9912f9 = 1; _0x9912f9 <= _0x952b1d; _0x9912f9++) {
                    var _0x560939 = '';
                    try {
                        _0x51ea51 == 1 ? _0x560939 = _0x11a854[_0x3f5390 - 1].CHAPTER.VERS[_0x9912f9 - 1] : _0x560939 = _0x11a854[_0x3f5390 - 1].CHAPTER[_0x231bec - 1].VERS[_0x9912f9 - 1];
                    } catch (_0x18194d) {
                        _0x560939 = '';
                    }
                    if (_0x560939 != null) {
                        if (typeof _0x560939 == 'object') {
                            _0x560939 = JSON.stringify(_0x560939.STYLE);
                            _0x560939 == null && (_0x560939 = '');
                        } else {
                        }
                        _0x560939 = _0x560939.replace(/["']/g, '');
                        let _0x154630 = '\'' + _0x560939 + '\',' + _0x3f5390 + ',' + _0x231bec + ',' + _0x9912f9;
                        _0x456192.push(_0x154630);
                    }
                }
            }
        }
        let _0x4c14c7 = _0x456192.map(_0x54e710 => '(' + _0x54e710 + ')').join(',');
        let _0x1c7005 = 'INSERT INTO words (word, bookNum, chNum, verseNum) VALUES ' + _0x4c14c7;
        try {
            var _0x5cecf5 = await dbfile.run(_0x1c7005);
        } catch (_0x564e8d) {
            return console.error(_0x564e8d), false;
        }
        return true;
    }
    function _0x4045c0() {
    }
    async function _0x2b7155(_0x49d0f7, _0xe52248) {
        let _0x1142bb = new bibledb();
        _0x1142bb.init(_0x49d0f7);
        const _0x2bb40f = await _0x1142bb.connect();
        const _0x197215 = await _0x1142bb.bibledb_readconfig();
        await _0x1f31b5(500);
        const _0x44318a = true;
        const _0x11fc86 = false;
        const _0x3e00ea = true;
        return _0xe52248 && vvFileAccess.vvcopyFileSync(_0x49d0f7, './vvdata/bible/', _0x44318a, _0x11fc86, _0x3e00ea), await _0x1f31b5(500), _0x197215;
    }
}
module.exports = { bibledbimport: bibledbimport };