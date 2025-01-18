const sqlite3 = require('sqlite3');
const {open} = require('sqlite');
const {app} = require('electron');
const path = require('path');
const fse = require('fs-extra');
const {XMLParser} = require('fast-xml-parser');
function songdb() {
    this.init = _0x1030d0;
    this.connect = _0x28f22c;
    this.getCategory = _0x4f1bcf;
    this.getTags = _0x19f3aa;
    this.getTitle = _0x43dd65;
    this.getSong = _0x31e78a;
    this.search = _0x504635;
    this.addSong = _0x58f018;
    this.updateSong = _0xf9f97f;
    this.deleteSong = _0x54ce9c;
    this.deleteCategory = _0x3bbc80;
    this.exportCategory = _0x5ec14c;
    this.importSongXML = _0x493e93;
    this.getProgressData = _0x3b6d64;
    let _0xa16573 = './songs_database/songs.db';
    let _0x171397 = null;
    let _0x2c0055 = null;
    let _0x44f7d7 = {
        message: '',
        value: 0
    };
    function _0x1030d0(_0x1eb6d8) {
        this.filename = _0x1eb6d8;
    }
    async function _0x28f22c() {
        _0x171397 = await open({
            filename: this.filename,
            driver: sqlite3.Database
        });
    }
    async function _0x4f1bcf() {
        const _0x5770c1 = await _0x171397.all('SELECT DISTINCT cat FROM sm ORDER BY cat ASC');
        return _0x5770c1;
    }
    async function _0x19f3aa(_0x3e0f9c) {
        let _0x422f77 = null;
        return _0x3e0f9c != null && _0x3e0f9c != 'ALL' ? _0x422f77 = await _0x171397.all('SELECT DISTINCT tags FROM sm WHERE cat LIKE \'' + _0x3e0f9c + '\' ORDER BY name ASC') : _0x422f77 = await _0x171397.all('SELECT DISTINCT tags FROM sm ORDER BY tags ASC'), _0x422f77;
    }
    async function _0x43dd65(_0x4d457f, _0x45e0d6) {
        let _0x420fbe = null;
        return _0x4d457f != null && _0x4d457f != 'ALL' ? _0x45e0d6 != null && _0x45e0d6 != 'ALL' ? _0x420fbe = await _0x171397.all('SELECT id, name, title2 FROM sm WHERE cat LIKE \'' + _0x4d457f + '\' AND tags LIKE \'%' + _0x45e0d6 + '%\' ORDER BY name ASC') : _0x420fbe = await _0x171397.all('SELECT id, name, title2 FROM sm WHERE cat LIKE \'' + _0x4d457f + '\' ORDER BY name ASC') : _0x45e0d6 != null && _0x45e0d6 != 'ALL' ? _0x420fbe = await _0x171397.all('SELECT id, name, title2 FROM sm WHERE tags LIKE \'%' + _0x45e0d6 + '%\' ORDER BY name ASC') : _0x420fbe = await _0x171397.all('SELECT id, name, title2 FROM sm ORDER BY name ASC'), _0x420fbe;
    }
    async function _0x467171(_0x474e41, _0x32601f) {
        let _0x2fdfc9 = null;
        const _0x7920aa = [
            _0x474e41,
            _0x32601f
        ];
        let _0x43a713 = 'SELECT id FROM sm WHERE cat == ? AND name == ?';
        return _0x2fdfc9 = await _0x171397.all(_0x43a713, _0x7920aa), _0x2fdfc9.length == 0 ? true : false;
    }
    async function _0x31e78a(_0x5904d2) {
        let _0x2c07ec = null;
        return _0x5904d2 != null ? _0x2c07ec = await _0x171397.all('SELECT * FROM sm WHERE id = ' + _0x5904d2) : _0x2c07ec = await _0x171397.all('SELECT * FROM sm LIMIT 1'), _0x2c07ec;
    }
    async function _0x504635(_0x3c6534, _0x4b6ad0, _0x592e9e) {
        let _0x4a59c6 = null;
        switch (_0x4b6ad0) {
        case 0:
            _0x592e9e == 'ALL' || _0x592e9e == null ? _0x4a59c6 = await _0x171397.all('SELECT * FROM sm WHERE name LIKE \'' + _0x3c6534 + '\' OR title2 LIKE \'' + _0x3c6534 + '\'') : _0x4a59c6 = await _0x171397.all('SELECT * FROM sm WHERE (name LIKE \'' + _0x3c6534 + '\' OR title2 LIKE \'' + _0x3c6534 + '\') AND cat == \'' + _0x592e9e + '\'');
            break;
        case 1:
            _0x4a59c6 = await _0x171397.all('SELECT * FROM sm WHERE subcat LIKE \'' + _0x3c6534 + '\'');
            break;
        case 3:
            _0x4a59c6 = await _0x171397.all('SELECT * FROM sm WHERE copy LIKE \'' + _0x3c6534 + '\'');
            break;
        default:
            _0x4a59c6 = await _0x171397.all('SELECT * FROM sm WHERE lyrics LIKE \'' + _0x3c6534 + '\' OR lyrics2 LIKE \'' + _0x3c6534 + '\'' + ' OR name LIKE \'' + _0x3c6534 + '\'');
            break;
        }
        return _0x4a59c6;
    }
    async function _0x58f018(_0x12e790) {
        const _0x4d55d0 = _0x12e790.song.title1;
        const _0x2d2b74 = _0x12e790.song.title2;
        const _0x3afe9a = _0x12e790.song.selectedCategory;
        const _0x533467 = _0x12e790.song.selectedPrimaryFont;
        const _0x925b34 = _0x12e790.song.selectedSecondaryFont;
        const _0x487b81 = _0x12e790.song.timestamp;
        const _0xd9deb7 = _0x12e790.song.ytLink;
        const _0x2e673b = _0x12e790.song.songnumber;
        const _0x358dfc = _0x12e790.song.key;
        const _0x2be240 = _0x12e790.song.copyright;
        const _0x4ae17d = _0x12e790.song.notes;
        const _0x33afbd = _0x12e790.song.tags;
        const _0x39f624 = _0x12e790.song.bkgndfname;
        const _0x357d90 = _0x12e790.song.lyrics1.toString();
        const _0xb30453 = _0x12e790.song.lyrics2.toString();
        const _0x1db3d3 = _0x12e790.song.slideseq;
        const _0xfcb020 = _0x12e790.song.rating;
        const _0x2974ee = _0x12e790.song.usagecount;
        const _0x482001 = _0x12e790.song.chordsavailable;
        const _0x138dee = [
            _0x4d55d0,
            _0x3afe9a,
            _0x533467,
            _0x925b34,
            _0x487b81,
            _0xd9deb7,
            _0x39f624,
            _0x358dfc,
            _0x2be240,
            _0x4ae17d,
            _0x357d90,
            _0xb30453,
            _0x2d2b74,
            _0x33afbd,
            _0x1db3d3,
            _0xfcb020,
            _0x2974ee,
            _0x482001,
            _0x2e673b
        ];
        var _0x30b45c = '';
        _0x30b45c += 'INSERT INTO sm (name, cat, font, font2, timestamp, yvideo, bkgndfname, key, copy, notes, lyrics, lyrics2, title2, tags, slideseq, rating, chordsavailable, usagecount,subcat) SELECT ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?';
        let _0x3d9476 = 0;
        try {
            _0x3d9476 = await _0x171397.run(_0x30b45c, _0x138dee);
        } catch (_0x691e73) {
            return _0x691e73;
        }
        return '' + _0x3d9476.lastID;
    }
    async function _0xf9f97f(_0x254ddc) {
        const _0x2b2a66 = _0x254ddc.song.id;
        const _0x3c4ca7 = _0x254ddc.song.title1;
        const _0x1f0014 = _0x254ddc.song.title2;
        const _0x373304 = _0x254ddc.song.selectedCategory;
        const _0xf41182 = _0x254ddc.song.selectedPrimaryFont;
        const _0x4ec895 = _0x254ddc.song.selectedSecondaryFont;
        const _0x57c5ea = _0x254ddc.song.timestamp;
        const _0x591b40 = _0x254ddc.song.ytLink;
        const _0x5ae040 = _0x254ddc.song.songnumber;
        const _0xd7f847 = _0x254ddc.song.key;
        const _0x1c801a = _0x254ddc.song.copyright;
        const _0x2d289a = _0x254ddc.song.notes;
        const _0x25c906 = _0x254ddc.song.tags;
        const _0x1c9bf7 = _0x254ddc.song.bkgndfname;
        const _0x4a64bf = _0x254ddc.song.lyrics1.toString();
        const _0x8e93d3 = _0x254ddc.song.lyrics2.toString();
        const _0x55c40a = _0x254ddc.song.slideseq;
        const _0x14fe41 = _0x254ddc.song.rating;
        const _0x2fe0b1 = _0x254ddc.song.usagecount;
        const _0x106713 = _0x254ddc.song.chordsavailable;
        const _0x5c6aec = [
            _0x3c4ca7,
            _0x373304,
            _0xf41182,
            _0x4ec895,
            _0x57c5ea,
            _0x591b40,
            _0x1c9bf7,
            _0xd7f847,
            _0x1c801a,
            _0x2d289a,
            _0x4a64bf,
            _0x8e93d3,
            _0x1f0014,
            _0x25c906,
            _0x55c40a,
            _0x14fe41,
            _0x2fe0b1,
            _0x106713,
            _0x5ae040
        ];
        var _0x5b5900 = '';
        _0x5b5900 += 'UPDATE sm SET name=?,cat=?,font=?,font2=?,timestamp=?,yvideo=?,bkgndfname=?,key=?,copy=?,notes=?, lyrics=?,lyrics2=?, title2=?, tags=?, slideseq=?, rating=?, chordsavailable=?, usagecount=?,subcat=? WHERE id=' + _0x2b2a66;
        const _0x2aa229 = await _0x171397.run(_0x5b5900, _0x5c6aec);
        return '' + _0x2aa229.changes;
    }
    async function _0x54ce9c(_0x2daca2) {
        const _0x246895 = [_0x2daca2.song.id];
        var _0x142863 = '';
        _0x142863 += 'DELETE FROM sm WHERE id=?';
        const _0x2d4ef6 = await _0x171397.run(_0x142863, _0x246895);
        return '' + _0x2d4ef6.changes;
    }
    async function _0x3bbc80(_0x5d458b) {
        const _0x4029b0 = [_0x5d458b.cat];
        var _0x370ae3 = '';
        _0x370ae3 += 'DELETE FROM sm WHERE cat=?';
        const _0x571df4 = await _0x171397.run(_0x370ae3, _0x4029b0);
        return '' + _0x571df4.changes;
    }
    async function _0x5ec14c(_0x571e75) {
        try {
            const _0x16d3f8 = await _0x171397.all('SELECT * FROM sm WHERE cat = \'' + _0x571e75 + '\'');
            const _0x99e0a4 = _0x32401e(_0x16d3f8, _0x571e75);
            return _0x99e0a4 ? _0x16d3f8 != null && _0x16d3f8.length > 0 ? true : false : false;
        } catch (_0x55db21) {
            return false;
        }
        return true;
    }
    function _0x32401e(_0x1f3993, _0x475ec6) {
        var _0x218bd5 = _0x1b4425(_0x475ec6);
        var _0x4ea305 = _0x1f3993.length;
        var _0x313328 = '<?xml version="1.0" encoding="UTF-8"?>\n';
        _0x313328 = _0x313328 + '<songDB>\n';
        _0x313328 = _0x313328 + '<type>XMLsong</type>\n';
        _0x313328 = _0x313328 + '<disclaimer>The copyrights to these songs belongs to person mentioned in the copyright tag of each song. This database has been designed and compiled for VerseVIEW only.</disclaimer>\n';
        var _0x4789c4 = {
            name: _0x330c2a,
            catIndex: _0x1f3993[_0x536d69].cat,
            font: _0x1f3993[_0x536d69].font,
            font2: _0x1f3993[_0x536d69].font2,
            timestamp: _0x1f3993[_0x536d69].timestamp,
            yvideo: _0x1f3993[_0x536d69].yvideo,
            bkgnd_fname: _0x1f3993[_0x536d69].bkgndfname,
            key: _0x1f3993[_0x536d69].key,
            copyright: _0x1f3993[_0x536d69].copy,
            notes: _0x1f3993[_0x536d69].notes,
            name2: _0x1f3993[_0x536d69].title2,
            slideseq: _0x1f3993[_0x536d69].slideseq,
            subcat: _0x1f3993[_0x536d69].subcat,
            slides: _0x4aa7c7,
            slides2: _0x4aa7c7,
            slides2: ''
        };
        for (var _0x536d69 = 0; _0x536d69 < _0x4ea305; _0x536d69++) {
            var _0x330c2a = _0x1f3993[_0x536d69].name;
            _0x330c2a = _0x330c2a.replace(/([\x00-\x08\x0B-\x0C\x0E-\x1F\x7F])/g, '');
            _0x330c2a = _0x330c2a.replace(/([\x26])/g, 'and');
            _0x1f3993[_0x536d69].tags != null ? _0x4789c4.tags = _0x1f3993[_0x536d69].tags : _0x4789c4.tags = '';
            var _0x387bd3 = _0x1f3993[_0x536d69].lyrics;
            var _0x4aa7c7 = _0x387bd3.replace(/([\x00-\x08\x0B-\x0C\x0E-\x1F\x7F])/g, '');
            var _0x387bd3 = _0x1f3993[_0x536d69].lyrics2;
            if (_0x387bd3 != null) {
                var _0x4aa7c7 = _0x387bd3.replace(/([\x00-\x08\x0B-\x0C\x0E-\x1F\x7F])/g, '');
            } else {
            }
            _0x313328 = _0x313328 + _0x176c1e(_0x4789c4);
        }
        _0x313328 = _0x313328 + '</songDB>\n';
        const _0x5b334a = _0x466f26(_0x313328, _0x218bd5);
        return _0x5b334a;
    }
    function _0x1b4425(_0x6229f3) {
        var _0x3f1008 = new Date();
        var _0x97d5e9 = _0x3f1008.toDateString();
        var _0x532435 = '';
        var _0x4bf36b = 2;
        switch (_0x4bf36b) {
        case 1:
            _0x532435 = 'vvsongs_' + _0x97d5e9 + '.xml';
            break;
        case 2:
            _0x532435 = _0x6229f3 + '_songs_' + _0x97d5e9 + '.xml';
            break;
        case 3:
            _0x532435 = 'vvsongs_' + _0x97d5e9 + '.xml';
            break;
        default:
            break;
        }
        return _0x532435;
    }
    function _0x176c1e(_0x451523) {
        var _0xd25a64 = '';
        return _0xd25a64 = _0xd25a64 + '<song>\n', _0xd25a64 = _0xd25a64 + '  <category>' + _0x451523.catIndex + '</category>\n', _0xd25a64 = _0xd25a64 + '  <name>' + _0x451523.name + '</name>\n', _0xd25a64 = _0xd25a64 + '  <font>' + _0x451523.font + '</font>\n', _0xd25a64 = _0xd25a64 + '  <font2>' + _0x451523.font2 + '</font2>\n', _0xd25a64 = _0xd25a64 + '  <timestamp>' + _0x451523.timestamp + '</timestamp>\n', _0x451523.yvideo == 'null' ? _0xd25a64 = _0xd25a64 + '  <yvideo>' + '' + '</yvideo>\n' : _0xd25a64 = _0xd25a64 + '  <yvideo>' + _0x451523.yvideo + '</yvideo>\n', _0xd25a64 = _0xd25a64 + '  <bkgnd>' + _0x451523.bkgnd_fname + '</bkgnd>\n', _0xd25a64 = _0xd25a64 + '  <key>' + _0x451523.key + '</key>\n', _0xd25a64 = _0xd25a64 + '  <copyright>' + _0x451523.copyright + '</copyright>\n', _0xd25a64 = _0xd25a64 + '  <notes>' + _0x451523.notes + '</notes>\n', _0xd25a64 = _0xd25a64 + '  <slide><![CDATA[' + _0x451523.slides + ']]></slide>\n', _0xd25a64 = _0xd25a64 + '  <slide2><![CDATA[' + _0x451523.slides2 + ']]></slide2>\n', _0xd25a64 = _0xd25a64 + '  <name2><![CDATA[' + _0x451523.name2 + ']]></name2>\n', _0xd25a64 = _0xd25a64 + '  <tags><![CDATA[' + _0x451523.tags + ']]></tags>\n', _0xd25a64 = _0xd25a64 + '  <slideseq><![CDATA[' + _0x451523.slideseq + ']]></slideseq>\n', _0xd25a64 = _0xd25a64 + '  <subcat><![CDATA[' + _0x451523.subcat + ']]></subcat>\n', _0xd25a64 = _0xd25a64 + '</song>\n', _0xd25a64;
    }
    function _0x466f26(_0x1bd477, _0x1c4224) {
        const _0x237db4 = path.join(app.getPath('desktop'), './vvexport/');
        try {
            !fse.existsSync(_0x237db4) && (console.log('Created new folder on the desktop..'), fse.mkdirSync(_0x237db4));
        } catch (_0x477077) {
            return console.log('Folder creation error..' + _0x477077), false;
        }
        const _0x19f484 = _0x237db4 + _0x1c4224;
        try {
            fse.chmod(_0x237db4, '777', () => {
                fse.writeFileSync(_0x19f484, _0x1bd477);
            });
        } catch (_0x132939) {
            return console.log('Error writing file.. ' + _0x132939), false;
        }
        return true;
    }
    async function _0x493e93(_0x414419) {
        const _0x34fe4c = new XMLParser();
        let _0x1817e9 = null;
        let _0x375fa1 = false;
        try {
            _0x1817e9 = _0x34fe4c.parse(_0x414419);
        } catch (_0x3091fa) {
            return false;
        }
        try {
            _0x375fa1 = await _0x26c368(_0x1817e9);
        } catch (_0x2ae86a) {
            return console.log('Error parser..' + _0x2ae86a), false;
        }
        return _0x375fa1;
    }
    async function _0x26c368(_0x4d0995) {
        let _0x6e9f1b = false;
        if (_0x4d0995 != null) {
            var _0x4b561a = _0x4d0995.songDB.type;
            if (_0x4b561a != null) {
                if (_0x4b561a == 'XMLsong') {
                    _0x6e9f1b = await _0x28c2c7(_0x4d0995.songDB.song);
                } else {
                }
            } else {
            }
        } else {
        }
        return _0x6e9f1b;
    }
    async function _0x28c2c7(_0x444fe3) {
        if (_0x444fe3 == null) {
            return false;
        }
        for (var _0x2e9a34 = 0; _0x2e9a34 < _0x444fe3.length; _0x2e9a34++) {
            var _0x258503 = _0x444fe3[_0x2e9a34];
            await _0x467171(_0x258503.category, _0x258503.name) && await _0x279417(_0x258503);
            if (_0x2e9a34 % 5 == 0) {
                const _0x416057 = parseInt(_0x2e9a34 / _0x444fe3.length * 100);
                _0x15e0e6('Importing', _0x416057 + '%');
                app.emit('vvmessage');
            }
        }
        return _0x15e0e6('Finished importing', ''), app.emit('vvmessage'), setTimeout(function () {
            _0x15e0e6('', '');
            app.emit('vvmessage');
        }, 3000), true;
    }
    function _0x15e0e6(_0xf20b6a, _0x2475e2) {
        _0x44f7d7.message = _0xf20b6a;
        _0x44f7d7.value = _0x2475e2;
    }
    function _0x3b6d64() {
        return _0x44f7d7;
    }
    async function _0x279417(_0x4e5e6e) {
        const _0x39efad = _0x4e5e6e.name;
        const _0x5c1a3a = _0x4e5e6e.name2;
        const _0x45adb4 = _0x4e5e6e.category;
        const _0x21632e = _0x4e5e6e.font;
        const _0x3d843e = _0x4e5e6e.font2;
        const _0x12531e = _0x4e5e6e.timestamp;
        const _0x45aa88 = _0x4e5e6e.yvideo;
        const _0x4efa21 = _0x4e5e6e.subcat;
        const _0x454167 = _0x4e5e6e.key;
        const _0x2e9d8b = _0x4e5e6e.copyright;
        const _0x483aae = _0x4e5e6e.notes;
        const _0x14d7a0 = _0x4e5e6e.tags;
        const _0x347cbd = _0x4e5e6e.bkgnd;
        const _0x37d5e0 = _0x4e5e6e.slide;
        const _0x32d080 = _0x4e5e6e.slide2;
        const _0x752943 = _0x4e5e6e.slideseq;
        const _0x221f31 = 0;
        const _0x3f873a = 0;
        const _0x50ab87 = false;
        const _0x13b364 = [
            _0x39efad,
            _0x45adb4,
            _0x21632e,
            _0x3d843e,
            _0x12531e,
            _0x45aa88,
            _0x347cbd,
            _0x454167,
            _0x2e9d8b,
            _0x483aae,
            _0x37d5e0,
            _0x32d080,
            _0x5c1a3a,
            _0x14d7a0,
            _0x752943,
            _0x221f31,
            _0x3f873a,
            _0x50ab87,
            _0x4efa21
        ];
        var _0x4edd82 = '';
        _0x4edd82 += 'INSERT INTO sm (name, cat, font, font2, timestamp, yvideo, bkgndfname, key, copy, notes, lyrics, lyrics2, title2, tags, slideseq, rating, chordsavailable, usagecount,subcat) SELECT ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?';
        const _0x166519 = await _0x171397.run(_0x4edd82, _0x13b364);
    }
    function _0x3ff96a(_0x20d53a) {
        return new Promise(_0x2de910 => {
            _0x2c0055 == null ? setTimeout(_0x2de910, _0x20d53a) : setTimeout(_0x2de910, 10);
        });
    }
}
module.exports = { songdb: songdb };