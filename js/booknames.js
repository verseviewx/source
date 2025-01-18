function booknamesClass() {
    this.getbooknamesForList = _0x40a04a;
    this.getbooknamesForPresent = _0x8953bd;
    const _0x49f39b = true;
    function _0x40a04a() {
        const _0x5943b0 = configJSON.configuration[0].BibleBookSelectionInEnglish;
        let _0x805146;
        let _0x4e9daf = null;
        return _0x5943b0 ? default_booknames : _0x3753d2();
    }
    function _0x8953bd(_0x1e13bd) {
        return _0x3753d2()[_0x1e13bd];
    }
    function _0x3753d2() {
        const _0x32b5fa = configJSON.configuration[0].BibleBookNameStyleIndex;
        switch (_0x32b5fa) {
        case '0':
            return default_booknames;
            break;
        case '1':
            return bibleVersionJSON.version[configJSON.configuration[0].version1].booknames;
            break;
        case '2':
            pri = bibleVersionJSON.version[configJSON.configuration[0].version1].booknames;
            if (pri[0] == default_booknames[0]) {
                return default_booknames;
            } else {
                let _0xb07714 = new Array();
                for (var _0x56f58e = 0; _0x56f58e < 66; _0x56f58e++) {
                    var _0x597923 = pri[_0x56f58e] + ' (' + default_booknames[_0x56f58e] + ')';
                    _0xb07714.push(_0x597923);
                }
                return _0xb07714;
            }
            break;
        case '3':
            pri = bibleVersionJSON.version[configJSON.configuration[0].version1].booknames, sec = bibleVersionJSON.version[configJSON.configuration[0].version2].booknames;
            if (pri[0] == sec[0]) {
                return pri;
            } else {
                let _0x5a67a8 = new Array();
                for (var _0x56f58e = 0; _0x56f58e < 66; _0x56f58e++) {
                    var _0x597923 = pri[_0x56f58e] + ' (' + sec[_0x56f58e] + ')';
                    _0x5a67a8.push(_0x597923);
                }
                return _0x5a67a8;
            }
            break;
        default:
            return default_booknames;
        }
    }
    function _0xbde8c7(_0x5de17e) {
        _0x49f39b && console.log('[booknames.js] ' + _0x5de17e);
    }
}