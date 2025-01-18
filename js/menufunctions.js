window.api.vvmenuCall((_0x516e86, _0x137903) => {
    let _0x514572 = false;
    switch (_0x137903) {
    case 1:
        var _0xfbde01 = new bootstrap.Modal(document.getElementById('p1'), { keyboard: false });
        _0xfbde01.show();
        break;
    case 11:
        var _0x17d919 = new bootstrap.Modal(document.getElementById('p6'), { keyboard: false });
        _0x17d919.show();
        break;
    case 2:
        var _0x7a6c79 = new bootstrap.Modal(document.getElementById('p2'), { keyboard: false });
        _0x7a6c79.show();
        break;
    case 3:
        var _0x270ec9 = new bootstrap.Modal(document.getElementById('p3'), { keyboard: false });
        _0x270ec9.show();
        break;
    case 4:
        bibleVersionManage_browse();
        break;
    case 5:
        _0x514572 = false, songEditObj.editSongLyrics(_0x514572);
        break;
    case 6:
        _0x514572 = true, songEditObj.editSongLyrics(_0x514572);
        break;
    case 7:
        songEditObj.deleteSong();
        break;
    case 8:
        songEditObj.deleteCategory();
        break;
    case 9:
        songEditObj.exportCategory();
        break;
    case 10:
        songEditObj.importSongXML();
        break;
    default:
        console.log('Should not have reached here');
    }
});