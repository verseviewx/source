var bibleRefObj = new BibleReference();
async function bibletab_searchReference() {
    const _0x53dc8a = $('#bibleTabSearchRef').val();
    const _0x1045ff = bibleRefObj.init(_0x53dc8a);
    return !_0x1045ff ? (vvDialog('BIBLE REFERENCE', bibleRefObj.getErrorMessage()), false) : (await setVerseReference(bibleRefObj.getBook(), bibleRefObj.getChapter(), bibleRefObj.getVerse()), true);
}
function bibletab_searchPresentRef() {
}
async function setVerseReference(_0x29c914, _0x1e2a71, _0x140664) {
    $('#bookList').val(_0x29c914);
    bibletab_fillchapter(_0x1e2a71, false);
    $('#verseList').val(_0x140664);
    await bibletab_fillverseText();
}
function scheduleBibleVerse() {
    const _0x12a531 = {
        contenttype: 1,
        id: 0,
        songname: '',
        bookval: $('#bookList option:selected').val(),
        chapterval: $('#chapterList option:selected').val(),
        verseval: $('#verseList option:selected').val()
    };
    scheduleObj.processAddVerse(_0x12a531);
}
function setFontForList() {
    const _0x911591 = bibleVersionJSON.version[0].selectedfont;
    $('#bookList').css('font-family', _0x911591);
    $('#chapterList').css('font-family', _0x911591);
    $('#verseList').css('font-family', _0x911591);
    $('#recentSel').css('font-family', _0x911591);
}
function bibletab_fillBooksList() {
    var _0xa5f6ff = $('#bookList option:selected').val();
    clearSelectList('bookList');
    const _0x225dd5 = configJSON.configuration[0].BibleBookSelectionInEnglish;
    const _0x4da025 = $('#bookList');
    var _0x156aeb = '';
    var _0xe5a664 = booknames.length;
    for (var _0x3c4373 = 0; _0x3c4373 < _0xe5a664; _0x3c4373++) {
        _0x225dd5 ? _0x156aeb += '<option value=' + (_0x3c4373 + 1) + '>' + default_booknames[_0x3c4373] + '</option>' : _0x156aeb += '<option value=' + (_0x3c4373 + 1) + '>' + booknames[_0x3c4373] + '</option>';
    }
    _0x4da025.append(_0x156aeb);
    _0x4da025.val(_0xa5f6ff);
}
function bibletab_fillBooks() {
    bibletab_fillBooksList();
    setFontForList();
    bibletab_fillchapter();
}
function bibletab_fillchapter(_0x37d2b6, _0xaa8bc2) {
    clearSelectList('chapterList');
    const _0x518de1 = $('#chapterList');
    var _0x18f6eb = '';
    const _0x40d09f = $('#bookList option:selected').val();
    for (var _0x5e8f93 = 0; _0x5e8f93 < numofch[_0x40d09f][0]; _0x5e8f93++) {
        _0x18f6eb += '<option value=' + (_0x5e8f93 + 1) + '>' + (_0x5e8f93 + 1) + '</option>';
    }
    _0x518de1.append(_0x18f6eb);
    _0x37d2b6 == null ? _0x518de1.val(1) : _0x518de1.val(_0x37d2b6);
    !_0xaa8bc2 && bibletab_fillverse();
}
function bibletab_fillverse(_0x5cc3cc) {
    const _0x1aed52 = $('#bookList option:selected').val();
    const _0x280bdb = $('#chapterList  option:selected').val();
    const _0x20a3fa = $('#verseList');
    var _0x5aa815 = '';
    clearSelectList('verseList');
    for (var _0x2f9749 = 1; _0x2f9749 <= numofch[_0x1aed52][_0x280bdb]; _0x2f9749++) {
        _0x5aa815 += '<option value=' + _0x2f9749 + '>' + _0x2f9749 + '</option>';
    }
    _0x20a3fa.append(_0x5aa815);
    _0x5cc3cc == null ? _0x20a3fa.val(1) : _0x20a3fa.val(_0x5cc3cc);
}
let bibleGetData = {
    command: 0,
    version: 1,
    bookval: 1,
    chapterval: 1,
    verseval: 1,
    keyword: '',
    searchType: 0
};
async function bibletab_fillverseText() {
    bibleGetData.bookval = $('#bookList option:selected').val();
    bibleGetData.chapterval = $('#chapterList option:selected').val();
    bibleGetData.verseval = $('#verseList option:selected').val();
    bibleGetData.command = 0;
    bibleGetData.version = 1;
    const _0x3c50e0 = await window.api.getDataFromBible(bibleGetData);
    bibleGetData.version = 2;
    const _0x1b0b05 = await window.api.getDataFromBible(bibleGetData);
    const _0xd5b8d1 = _0x3c50e0.length;
    content1 = [];
    content2 = [];
    for (var _0x40623b = 0; _0x40623b < _0xd5b8d1; _0x40623b++) {
        content1.push(_0x40623b + 1 + ' ' + _0x3c50e0[_0x40623b].word);
        content2.push(_0x40623b + 1 + ' ' + _0x1b0b05[_0x40623b].word);
    }
    updateVerseContainer_continue();
}
function clearSelectList(_0x22b3bb) {
    return document.getElementById(_0x22b3bb) != null ? (document.getElementById(_0x22b3bb).innerHTML = '', true) : false;
}
function BibleReference() {
    this.init = _0x54a908;
    this.present = _0x4296af;
    this.getErrorMessage = _0x50afdf;
    this.getVerseText = _0x1cf5c6;
    this.getVerseFont = _0x590cc6;
    this.getBook = _0x55099b;
    this.getChapter = _0x32eb1c;
    this.getVerse = _0x392955;
    var _0xd70e47 = null;
    var _0x704e3f = null;
    var _0x25d3cd = null;
    var _0x33522c = null;
    var _0xb339d8 = null;
    var _0x21d224 = null;
    var _0xd33b55 = '';
    var _0x4e5068 = false;
    function _0x54a908(_0x54de01) {
        _0xd70e47 = _0x54de01;
        _0xd33b55 = '';
        var _0x8a118a = _0x430519();
        return _0x8a118a;
    }
    function _0x430519() {
        var _0x2f4a26 = true;
        var _0x2c425b = _0xd70e47;
        _0xb339d8 = 1;
        _0x21d224 = 1;
        _0x2c425b = _0x2c425b.replace(/^\s+|\s+$/g, '');
        _0x2c425b = _0x2c425b.replace(/\s\s+/g, ' ');
        var _0x2a5cec = _0x2c425b.split(' ');
        var _0x36bb90 = _0x2a5cec.length;
        var _0x1dacbe = Number.isInteger(parseInt(_0x2a5cec[0]));
        if (_0x1dacbe && _0x2a5cec[1] != null) {
            _0x704e3f = _0x2a5cec[0] + ' ' + _0x2a5cec[1].toLowerCase();
            if (_0x2a5cec[2] != null) {
                var _0x2f9338 = _0x2a5cec[2].indexOf(':');
                _0x2f9338 != -1 ? (_0x2a5cec = _0x2a5cec[2].split(':'), _0xb339d8 = _0x2a5cec[0], _0x21d224 = _0x2a5cec[1]) : (_0xb339d8 = _0x2a5cec[2], _0x2a5cec[3] != null && (_0x21d224 = _0x2a5cec[3]));
            }
        } else {
            _0x704e3f = _0x2a5cec[0].toLowerCase();
            if (_0x2a5cec[1] != null) {
                var _0x2f9338 = _0x2a5cec[1].indexOf(':');
                _0x2f9338 != -1 ? (_0x2a5cec = _0x2a5cec[1].split(':'), _0xb339d8 = _0x2a5cec[0], _0x21d224 = _0x2a5cec[1]) : (_0xb339d8 = _0x2a5cec[1], _0x2a5cec[2] != null && (_0x21d224 = _0x2a5cec[2]));
            }
        }
        var _0x6d50df = booknames.length;
        _0x33522c = -1;
        for (var _0x3ae4bf = 0; _0x3ae4bf < _0x6d50df; _0x3ae4bf++) {
            var _0x5db47b = booknames[_0x3ae4bf].toLowerCase();
            var _0x52e920 = new RegExp('^ ' + _0x704e3f);
            var _0x3e7c8b = _0x52e920.test(_0x5db47b);
            if (_0x3e7c8b) {
                _0x25d3cd = booknames[_0x3ae4bf];
                _0x33522c = _0x3ae4bf + 1;
                break;
            }
        }
        if (_0x33522c == -1) {
            for (var _0x3ae4bf = 0; _0x3ae4bf < _0x6d50df; _0x3ae4bf++) {
                var _0x5db47b = default_booknames[_0x3ae4bf].toLowerCase();
                var _0x52e920 = new RegExp('^' + _0x704e3f);
                var _0x3e7c8b = _0x52e920.test(_0x5db47b);
                if (_0x3e7c8b) {
                    _0x25d3cd = booknames[_0x3ae4bf];
                    _0x33522c = _0x3ae4bf + 1;
                    break;
                }
            }
        }
        if (!Number.isInteger(parseInt(_0xb339d8))) {
            _0xd33b55 = 'Invalid chapter number.';
            _0x2f4a26 = false;
        } else {
            if (!Number.isInteger(parseInt(_0x21d224))) {
                _0xd33b55 = 'Invalid verse number.';
                _0x2f4a26 = false;
            } else {
                if (_0x33522c == -1) {
                    _0xd33b55 = 'Did not find matching book name to ' + _0x704e3f;
                    _0x2f4a26 = false;
                } else {
                    var _0x1f98f8 = numofch[_0x33522c][0];
                    if (_0xb339d8 < 1 || _0xb339d8 > _0x1f98f8) {
                        _0xd33b55 = 'Invalid chapter number for the book ' + _0x25d3cd;
                        _0x2f4a26 = false;
                    } else {
                        var _0x5a201d = numofch[_0x33522c][_0xb339d8];
                        (_0x21d224 < 1 || _0x21d224 > _0x5a201d) && (_0xd33b55 = 'Invalid verse number for ' + _0x25d3cd + ' ' + _0xb339d8, _0x2f4a26 = false);
                    }
                }
            }
        }
        return _0x2f4a26;
    }
    function _0x4296af() {
        var _0xbe9fa5 = _0x33522c;
        var _0x4207ca = _0xb339d8 - 1;
        var _0x34c0a0 = _0x21d224 - 1;
        present_external(_0xbe9fa5, _0x4207ca, _0x34c0a0);
        return true;
        bookIndex = _0x33522c;
        chapterIndex = _0xb339d8 - 1;
        verseIndex = _0x21d224 - 1;
        recent.addSelection(bookIndex, chapterIndex, verseIndex);
        p_footer = getFooter();
        p_title = _0x25d3cd + ' ' + (chapterIndex + 1);
        launch(verseIndex);
    }
    function _0x1cf5c6() {
        var _0x1f534c = bible[vvConfigObj.get_version1()].getElementsByTagName('b')[_0x33522c].getElementsByTagName('c')[_0xb339d8 - 1].getElementsByTagName('v');
        return _0x1f534c;
    }
    function _0x590cc6() {
        var _0x5a0710 = bibleVersionArray[vvConfigObj.get_version1()][6];
        return _0x5a0710;
    }
    function _0x50afdf() {
        return _0x5c8f0f(_0xd33b55), _0xd33b55;
    }
    function _0x55099b() {
        return _0x33522c;
    }
    function _0x32eb1c() {
        return _0xb339d8;
    }
    function _0x392955() {
        return _0x21d224;
    }
    function _0x5c8f0f(_0x599ca7) {
        _0x4e5068 && console.log('[BIBLE REF]: ' + _0x599ca7);
    }
}