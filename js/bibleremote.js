function bibleremote_getVerseReference(_0xb9dc64) {
    const _0x433de2 = _0xb9dc64.split(':');
    bibleremote_setVerseReference(_0x433de2[0], _0x433de2[1], _0x433de2[2]);
}
async function bibleremote_setVerseReference(_0x5de1d1, _0x26cf09, _0x71f927) {
    bibleGetData.bookval = _0x5de1d1;
    bibleGetData.chapterval = _0x26cf09;
    bibleGetData.verseval = _0x71f927;
    bibleGetData.command = 0;
    bibleGetData.version = 1;
    const _0x41f4b3 = await window.api.getDataFromBible(bibleGetData);
    bibleGetData.version = 2;
    const _0x23c86d = await window.api.getDataFromBible(bibleGetData);
    const _0x32ea5f = _0x41f4b3.length;
    content1 = [];
    content2 = [];
    for (var _0x542704 = 0; _0x542704 < _0x32ea5f; _0x542704++) {
        content1.push(_0x542704 + 1 + ' ' + _0x41f4b3[_0x542704].word);
        content2.push(_0x542704 + 1 + ' ' + _0x23c86d[_0x542704].word);
    }
    biblePresentationLaunch(_0x71f927);
}