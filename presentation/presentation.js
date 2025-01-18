var presentationData = {};
const PRESENTATION_VERSE = 0;
const PRESENTATION_LYRICS = 1;
const PRESENTATION_BLANK = 2;
const PRESENTATION_LOGO = 3;
const PRESENTATION_PLAYBACK = 4;
const PRESENTATION_STILLPLAY = 5;
let isMuted = false;
let isPaused = false;
const CONTROL_PAUSE = 1;
const CONTROL_BACKWARD = 3;
const CONTROL_FORWARD = 2;
const CONTROL_MUTE_UNMUTE = 4;
window.presentationAPI.passPresentationData((_0x211455, _0x125730) => {
    processLower3rdResponse(_0x125730);
});
window.presentationAPI.passPresentationControl((_0x297f3c, _0x59e7f0) => {
    if (_0x59e7f0.iscontrol) {
        switch (_0x59e7f0.command) {
        case CONTROL_PAUSE:
            isPaused ? (videoPlay(), isPaused = false) : (videoPause(), isPaused = true);
            break;
        case CONTROL_BACKWARD:
            videoBackward(15);
            break;
        case CONTROL_FORWARD:
            videoForward(15);
            break;
        case CONTROL_MUTE_UNMUTE:
            isMuted ? (videoUnMute(), isMuted = false) : (videoMute(), isMuted = true);
            break;
        default:
            break;
        }
    }
});
window.presentationAPI.passPresentationSetup((_0x2d0d9e, _0x2d63c9) => {
    presentationData = _0x2d63c9;
    disableEvent();
    setupEvent();
    if (presentationData.presentationType == PRESENTATION_PLAYBACK) {
        return presentationInit(), $('.showcase').show(), $('.text').hide(), $('.blackbackground').show(), $('.overlay').hide(), true;
    }
    if (presentationData.presentationType == PRESENTATION_STILLPLAY) {
        $('.showcase').hide();
        let _0x5d5616 = presentationData.jpegBackgroundFile.replace(/\\/g, '/');
        return _0x5d5616 = _0x5d5616.replace(/ /g, '%20'), $('.blackbackground').css('background-position', 'center center'), $('.blackbackground').css('background', 'url(' + _0x5d5616 + ') no-repeat fixed center, #000000'), $('.blackbackground').css('background-size', 'contain'), $('.blackbackground').show(), $('.overlay').hide(), true;
    }
    if (presentationData.presentationType == PRESENTATION_LOGO) {
        $('.showcase').hide();
        let _0x573e1 = presentationData.logoBackgroundFile.replace(/\\/g, '/');
        _0x573e1 = _0x573e1.replace(/ /g, '%20');
        $('.blackbackground').css('background-position', 'center');
        $('.blackbackground').css('background', 'url(' + _0x573e1 + ') no-repeat fixed center, #000000');
        $('.blackbackground').css('background-size', 'cover');
        $('.blackbackground').show();
    } else {
        $('.blackbackground').css('background-image', 'none');
        presentationData.presentationType == PRESENTATION_BLANK ? ($('.showcase').hide(), $('.blackbackground').css('background', '#000000'), $('.blackbackground').show()) : ($('.showcase').show(), $('.text').show(), presentationData.isColorLayer ? $('.overlay').show() : $('.overlay').hide(), $('.blackbackground').hide(), presentationData.updateAll && presentationInit(), presentationData.presentationType == 1 ? presentationData.EnableLineWrap ? textMultiLine = true : textMultiLine = false : textMultiLine = true, processLower3rdResponse(presentationData));
    }
});
function setupEvent() {
    $('.theme1').on('keyup', function (_0x492936) {
        mainWindowKey(_0x492936);
    });
}
function disableEvent() {
    $('.theme1').off('keyup');
}
function presentationInit() {
    backgroundFilename = presentationData.jpegBackgroundFile.replace(/\\/g, '/');
    $('.stillbackground').hide();
    presentationData.isVideoBackground ? ($('.stillbackground').css('background-image', 'none'), $('#presentVideoID').attr('width', '100%'), $('#presentVideoID').attr('overflow', 'hidden'), presentationData.presentationType == 4 ? (document.getElementById('presentVideoID').muted = false, $('#presentVideoID').attr('src', presentationData.mediaPlaybackFile)) : (document.getElementById('presentVideoID').muted = true, $('#presentVideoID').attr('src', presentationData.videoBackgroundFile)), $('#presentVideoID').show()) : ($('#presentVideoID').attr('src', ''), $('#presentVideoID').hide(), backgroundImage ? (backgroundFilename = backgroundFilename.replace(/ /g, '%20'), $('.stillbackground').css('background', 'url(' + backgroundFilename + ') no-repeat'), $('.stillbackground').css('background-size', 'cover')) : $('.stillbackground').css('background-image', 'none'));
    $('.stillbackground').show();
    vv_top = presentationData.marginTop;
    vv_left = presentationData.marginLeft;
    vv_width = screenResolutionHorizontal - presentationData.marginLeft - presentationData.marginRight;
    vv_height = screenResolutionVertical - presentationData.marginTop - presentationData.marginBottom - 200;
    maxfont = parseInt(presentationData.maxFontSize);
    text1_style.color = presentationData.content1TextColor;
    text2_style.color = presentationData.content2TextColor;
    $('#ovelayid').css('background-color', presentationData.LayerColor);
    presentationData.isColorLayer ? $('#ovelayid').show() : $('#ovelayid').hide();
    text1_style['text-align'] = presentationData.JustificationValue;
    text2_style['text-align'] = presentationData.JustificationValue;
    text1_style['line-height'] = presentationData.LineHeight;
    text2_style['line-height'] = presentationData.LineHeight;
    presentationData.EnableShadow ? (text1_style['text-shadow'] = '5px 5px 5px black', text2_style['text-shadow'] = '5px 5px 5px black') : (text1_style['text-shadow'] = '0px 0px 0px black', text2_style['text-shadow'] = '0px 0px 0px black');
    presentationData.EnableOutline ? textOutline = '2px black' : textOutline = '0px black';
    presentationData.presentationType == 1 ? presentationData.EnableLineWrap ? textMultiLine = true : textMultiLine = false : textMultiLine = true;
}