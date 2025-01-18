function addFont(_0x3716f1) {
    isUniqueFont(_0x3716f1) && (systemFontList.push(_0x3716f1), sortFont(), updateSaveConfig('fontList', systemFontList));
}
function deleteFont(_0x9c9214) {
}
function sortFont() {
    systemFontList.sort();
}
function isUniqueFont(_0xea2d31) {
    return systemFontList.indexOf(_0xea2d31) == -1 ? true : false;
}
function updateFontLists() {
}