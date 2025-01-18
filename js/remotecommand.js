const PRESENT_CLOSE = 4;
const PRESENT_LOGO = 14;
const PRESENT_BLANK = 15;
const PRESENT_NEXT = 2;
const PRESENT_PREV = 3;
const GET_CONFIG_DATA = 40;
let remotecommand = {
    command: PRESENT_BLANK,
    value1: '',
    value2: ''
};
window.api.vvremoteCall((_0x371841, _0xc7883b) => {
    switch (parseInt(_0xc7883b.command)) {
    case PRESENT_BLANK:
        blankPresentation();
        break;
    case PRESENT_LOGO:
        logoPresentation();
        break;
    case PRESENT_CLOSE:
        window.api.closePresentation();
        break;
    case PRESENT_NEXT:
        call_nextSlide();
        break;
    case PRESENT_PREV:
        call_prevSlide();
        break;
    case 22:
        addSong2ScheduleFromRemote(_0xc7883b.value1, 'test');
        break;
    case '7':
        break;
    case 8:
        bibleremote_getVerseReference(_0xc7883b.value1);
        break;
    case 17:
        songremote_present(_0xc7883b.value1, _0xc7883b.value2);
        break;
    case GET_CONFIG_DATA:
        console.log('Get some config data and pass back');
        break;
    default:
        _0x371841.sender.send('forwebserver', 'Value for web server');
    }
});