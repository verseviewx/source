function valsonachanTransliteration() {
    this.init = _0x458359;
    this.munglishWord = _0x4b22b4;
    this.munglishLine = _0x58eed9;
    var _0x1ccc1c = new Array('ക', 'ഖ', 'ഗ', 'ഘ', 'ങ', 'ച', 'ച്ച', 'ജ', 'ഝ', 'ഞ', 'ട', 'ഠ', 'ഡ', 'ഢ', 'ണ', 'ത', 'ഥ', 'ദ', 'ധ', 'ന', 'പ', 'ഫ', 'ബ', 'ഭ', 'മ', 'യ', 'ര', 'ല', 'വ', 'ശ', 'ഷ', 'ഹ', 'ള', 'റ', 'ഴ', 'ൽ', 'ച്ച', 'സ', 'ൻ', 'ൺ', 'അ', 'ആ', 'ൾ', 'ഛ');
    var _0x3a6faa = new Array('്', 'ാ', 'ി', 'ീ', 'ു', 'ൂ', '്ര', 'െ', 'േ', 'ൈ', 'ൊ', 'ോ', 'ൗ', 'ം', 'ഃ', 'ൃ', 'എ', 'ർ', 'ഇ', 'ഒ', 'ഉ', 'ഏ', 'ഓ', 'ഔ', 'ഐ', 'ഊ', 'ഈ', 'ൌ', 'ഋ');
    var _0x7bf69a = new Array('k', 'kh', 'g', 'gh', 'ng', 'ch', 'cch', 'j', 'jh', 'nj', 'd', 'dt', 'd', 'dh', 'n', 'th', 'thh', 'd', 'dh', 'n', 'p', 'ph', 'b', 'bh', 'm', 'y', 'r', 'l', 'v', 'sh', 'sh', 'h', 'l', 'r', 'zh', 'l', 'cch', 's', 'n', 'n', '', 'a', 'l', 'chh');
    var _0x1a6c90 = new Array('', 'aa', 'i', 'ee', 'u', 'oo', 'ra', 'e', 'e', 'ai', 'o', 'o', 'au', 'm', '', 'ri', 'e', 'r', 'e', 'o', 'u', 'e', 'or', 'ou', 'ai', 'uu', 'ee', 'ou', 'ri');
    var _0x12c4f3 = false;
    function _0x458359() {
    }
    function _0x58eed9(_0x4792b1) {
        var _0x51c234 = _0x4792b1.split(' ');
        var _0x129f8c = _0x51c234.length;
        var _0x89fc7d = '';
        for (var _0x1b530f = 0; _0x1b530f < _0x129f8c; _0x1b530f++) {
            _0x51c234[_0x1b530f] != '' ? _0x89fc7d += _0x4b22b4(_0x51c234[_0x1b530f]) + ' ' : _0x89fc7d += '';
        }
        return _0x89fc7d;
    }
    function _0x4b22b4(_0x3f6b0a) {
        var _0x14b87c = '';
        var _0x5a1665 = _0x163be0(_0x3f6b0a);
        var _0x360195 = _0x5a1665.split('');
        var _0x28a391 = _0x360195.length;
        var _0x59e982 = false;
        var _0x527d35 = '';
        var _0x587cf5 = false;
        for (var _0x20b30d = 0; _0x20b30d < _0x28a391; _0x20b30d++) {
            var _0x592e17 = _0x1ccc1c.indexOf(_0x360195[_0x20b30d]);
            if (_0x592e17 != -1) {
                _0x59e982 && (_0x14b87c += 'a');
                _0x59e982 = true;
                _0x14b87c += _0x7bf69a[_0x592e17];
                _0x360195[_0x20b30d] == 'ൽ' && (_0x59e982 = false);
                _0x360195[_0x20b30d] == 'ൾ' && (_0x59e982 = false);
            } else {
                _0x59e982 && (_0x360195[_0x20b30d] == 'ം' || _0x360195[_0x20b30d] == 'ർ') && (_0x14b87c += 'a');
                var _0x919873 = _0x3a6faa.indexOf(_0x360195[_0x20b30d]);
                _0x919873 != -1 ? (_0x59e982 = false, _0x14b87c += _0x1a6c90[_0x919873]) : (_0x14b87c += _0x360195[_0x20b30d], _0x587cf5 = true);
            }
            _0x527d35 = _0x360195[_0x20b30d];
        }
        return _0x59e982 && (_0x527d35 != 'ൻ' && _0x527d35 != 'ൺ' && (!_0x53bdb2(_0x527d35) && (_0x14b87c += 'a'))), _0x14b87c = _0x14b87c.replace('chch', 'cch'), _0x14b87c = _0x14b87c.replace('ria', 'ri'), _0x14b87c = _0x14b87c.replace('thth', 'tth'), _0x587cf5 && _0x7aa419('Found unknow character: ' + _0x14b87c), _0x14b87c;
    }
    function _0x163be0(_0x91405f) {
        var _0x5a3670 = _0x91405f.replace('റ്റ', 'tt');
        return _0x5a3670 = _0x5a3670.replace('ട്ട', 'tt'), _0x5a3670 = _0x5a3670.replace('ങ്ങ', 'ng'), _0x5a3670 = _0x5a3670.replace('ട്ന്റ', 'nt'), _0x5a3670 = _0x5a3670.replace('റെ', 'te'), _0x5a3670 = _0x5a3670.replace('സ്വർ', 'swar'), _0x5a3670;
    }
    function _0x53bdb2(_0x2b7976) {
        var _0x5bd14b = _0x1ccc1c.indexOf(_0x2b7976);
        var _0xa58ee2 = _0x3a6faa.indexOf(_0x2b7976);
        if (_0x5bd14b == -1 && _0xa58ee2 == -1) {
            return true;
        }
        return false;
    }
    function _0x7aa419(_0x4baf1e) {
        _0x12c4f3 && console.log('[Transliteraton Engine]....' + _0x4baf1e);
    }
}