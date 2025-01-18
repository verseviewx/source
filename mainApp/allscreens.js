const {screen} = require('electron');
function allscreens() {
    this.init = _0x3ac00d;
    this.getScreens = _0x500e49;
    this.setScreens = _0x7a2486;
    let _0x56f562 = null;
    let _0x202de8 = new Array();
    function _0x3ac00d() {
        _0x56f562 = screen.getAllDisplays();
    }
    function _0x500e49() {
        return _0x56f562;
    }
    function _0x7a2486(_0x170a67, _0x4ed325) {
        _0x202de8[_0x170a67] = _0x4ed325;
    }
}
module.exports = { allscreens: allscreens };