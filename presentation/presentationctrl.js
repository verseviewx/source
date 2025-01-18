const PTR_CLOSE = 0;
const PTR_NEXT = 1;
const PTR_PREVIOUS = 2;
let presentationCtrlData = { command: PTR_CLOSE };
function call_nextSlide() {
    presentationCtrlData.command = PTR_NEXT;
    window.presentationAPI.presentationControl(presentationCtrlData);
}
function call_prevSlide() {
    presentationCtrlData.command = PTR_PREVIOUS;
    window.presentationAPI.presentationControl(presentationCtrlData);
}
function videoPause() {
    document.getElementById('presentVideoID').pause();
}
function videoStop() {
    document.getElementById('presentVideoID').stop();
}
function videoPlay() {
    document.getElementById('presentVideoID').play();
}
function videoMute() {
    document.getElementById('presentVideoID').muted = true;
}
function videoUnMute() {
    document.getElementById('presentVideoID').muted = false;
}
function videoForward(_0x466449) {
    let _0x18b43d = document.getElementById('presentVideoID');
    _0x18b43d.currentTime = _0x18b43d.currentTime + _0x466449;
}
function videoBackward(_0x466cb0) {
    let _0x4189dd = document.getElementById('presentVideoID');
    _0x4189dd.currentTime = _0x4189dd.currentTime - _0x466cb0;
}
function mainWindowKey(_0x4cf151) {
    key = _0x4cf151.keyCode;
    switch (key) {
    case 13:
        break;
    case 27:
        presentationCtrlData.command = PTR_CLOSE, window.presentationAPI.presentationControl(presentationCtrlData);
        break;
    case 33:
        call_prevSlide();
        break;
    case 34:
        call_nextSlide();
        break;
    default:
        break;
    case 39:
    case 40:
        call_nextSlide();
        break;
    case 37:
    case 38:
        call_prevSlide();
        break;
    case 84:
        call_showTheme();
        break;
    }
}