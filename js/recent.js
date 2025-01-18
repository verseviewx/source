recent = {
    maxNumofElements: 30,
    numofElements: 0,
    startIndex: 0,
    nextIndex: 0,
    bArray: [],
    cArray: [],
    vArray: [],
    init: function () {
        recent.numofElements = 0;
        recent.startIndex = 0;
        recent.nextIndex = 0;
        recent.bArray = new Array();
        recent.cArray = new Array();
        recent.vArray = new Array();
        recent.dispSelection();
    },
    addSelection: function (_0x1b64e1, _0x32b9fb, _0x443657) {
        if (recent.nextIndex != 0) {
            var _0x151751 = recent.bArray[recent.nextIndex - 1];
            var _0x41067a = recent.cArray[recent.nextIndex - 1];
            var _0x527679 = recent.vArray[recent.nextIndex - 1];
            (_0x151751 != _0x1b64e1 || _0x41067a != _0x32b9fb || _0x527679 != _0x443657) && (recent.bArray[recent.nextIndex] = _0x1b64e1, recent.cArray[recent.nextIndex] = _0x32b9fb, recent.vArray[recent.nextIndex] = _0x443657, recent.updateIndex(), recent.dispSelection());
        } else {
            recent.bArray[recent.nextIndex] = _0x1b64e1;
            recent.cArray[recent.nextIndex] = _0x32b9fb;
            recent.vArray[recent.nextIndex] = _0x443657;
            recent.updateIndex();
            recent.dispSelection();
        }
    },
    updateIndex: function () {
        recent.nextIndex++;
        recent.numofElements++;
    },
    dispSelection: function () {
        var _0x4ba509 = new Array();
        for (i = 0; i < recent.numofElements; i++) {
            _0x4ba509[i] = booknames[recent.bArray[i]] + ' ' + (recent.cArray[i] + 1) + ':' + (recent.vArray[i] + 1);
        }
        clearSelectList('recentSel');
        var _0x354ce3 = recent.numofElements - 1;
        for (i = 0; i < recent.numofElements; i++) {
            document.getElementById('recentSel').options[i] = new Option(_0x4ba509[_0x354ce3], _0x354ce3);
            _0x354ce3--;
        }
        document.getElementById('recentSel').selectedIndex = 0;
        document.getElementById('recentSel').addEventListener('click', recent.presentFromRecent, false);
    },
    presentFromRecent: function (_0x167d5a) {
        var _0x361292 = document.getElementById('recentSel').selectedIndex;
        if (_0x361292 != -1) {
            var _0x5680c0 = document.getElementById('recentSel').options[document.getElementById('recentSel').selectedIndex].value;
            bookIndex = recent.bArray[_0x5680c0];
            chapterIndex = recent.cArray[_0x5680c0];
            verseIndex = recent.vArray[_0x5680c0];
            scroll_to_view = true;
            setVerseReference(bookIndex * 1 + 1, chapterIndex * 1 + 1, verseIndex * 1 + 1);
        }
    },
    data2string: function () {
        var _0x3b9246 = '';
        for (i = 0; i < recent.numofElements; i++) {
            _0x3b9246 = _0x3b9246 + booknames[recent.bArray[i]] + ' ' + (recent.cArray[i] + 1) + ':' + (recent.vArray[i] + 1) + '|';
        }
        return _0x3b9246;
    }
};