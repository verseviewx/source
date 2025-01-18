let bibleVersionJSON = {};
async function bibleVersion_readJSON() {
    bibleVersionJSON = await window.api.getBibleVersionJSON();
}
function bibleVersion_saveJSON() {
    window.api.saveBibleVersionJSON(bibleVersionJSON);
}
function bibleVersion_updateFont(_0x40eb43, _0x3a43d9) {
    bibleVersionJSON.version[_0x40eb43].selectedfont = _0x3a43d9;
    bibleVersion_saveJSON();
    updateVerseContainer_continue();
}
function bibleVersion_addRecord(_0x2d5b6a) {
    bibleVersionJSON.version.push(_0x2d5b6a);
    bibleVersion_saveJSON();
}
function bibleVersion_deleteRecord(_0x586971) {
    delete bibleVersionJSON.version[_0x586971];
    bibleVersionJSON.version.splice(_0x586971, 1);
    bibleVersion_saveJSON();
}
function bibleVersion_getVersionRecord(_0x364e32) {
    return bibleVersionJSON.version[_0x364e32];
}
function bibleVersion_getInstalledBibleNames() {
    let _0x2f36ad = new Array();
    return $.each(bibleVersionJSON.version, function (_0x545b4f, _0x24fe57) {
        _0x2f36ad.push(_0x24fe57.name);
    }), _0x2f36ad;
}