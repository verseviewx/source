let content1 = [
    '1 In the beginning God created the heaven and the earth.',
    'Verse 2',
    'Verse 3',
    'Verse 4'
];
let content2 = [
    '1 ആദിയിൽ ദൈവം ആകാശവും ഭൂമിയും സൃഷ്ടി',
    'mVerse 2',
    'mVerse 3',
    'mVerse 4'
];
var highlightColor = '#BAD0EF';
var scroll_to_view = false;
var previousSelVerse = 0;
function nextBibleVerse() {
    const _0x4e67be = numofch[activePresentationData.bookindex][activePresentationData.chapterindex];
    let _0x35bf69 = parseInt(activePresentationData.contentIndex) + 1;
    _0x35bf69 >= _0x4e67be && (_0x35bf69 = 0);
    presentationData.contentIndex = _0x35bf69;
    activePresentationData.contentIndex = _0x35bf69;
    presentationData.content1 = activePresentationData.content1Arr[_0x35bf69];
    presentationData.content2 = activePresentationData.content2Arr[_0x35bf69];
    presentationData.content1next = getNextVerseSlideContent(activePresentationData.content1Arr, _0x35bf69);
    presentationData.content2next = getNextVerseSlideContent(activePresentationData.content2Arr, _0x35bf69);
    presentationData.title = booknames[activePresentationData.bookindex - 1] + ' ' + activePresentationData.chapterindex;
    presentationData.presentationType = activePresentationData.presentationType;
    window.api.update(presentationData);
}
function prevBibleVerse() {
    const _0x18d8ec = numofch[activePresentationData.bookindex][activePresentationData.chapterindex];
    let _0x43aa44 = parseInt(activePresentationData.contentIndex) - 1;
    _0x43aa44 < 0 && (_0x43aa44 = _0x18d8ec - 1);
    presentationData.contentIndex = _0x43aa44;
    activePresentationData.contentIndex = _0x43aa44;
    presentationData.content1 = activePresentationData.content1Arr[_0x43aa44];
    presentationData.content2 = activePresentationData.content2Arr[_0x43aa44];
    presentationData.content1next = getNextVerseSlideContent(activePresentationData.content1Arr, _0x43aa44);
    presentationData.content2next = getNextVerseSlideContent(activePresentationData.content2Arr, _0x43aa44);
    presentationData.title = booknames[activePresentationData.bookindex - 1] + ' ' + activePresentationData.chapterindex;
    presentationData.presentationType = activePresentationData.presentationType;
    window.api.update(presentationData);
}
function getNextVerseSlideContent(_0x432fba, _0x3c3a9a) {
    let _0x1cb5b5 = '';
    const _0x263718 = _0x432fba.length;
    const _0x4be022 = parseInt(_0x3c3a9a) + 1;
    return _0x4be022 >= _0x263718 ? _0x1cb5b5 = '' : _0x1cb5b5 = _0x432fba[_0x4be022], _0x1cb5b5;
}
function updateVerseContainer_continue() {
    var _0x2939f3 = bibleVersionJSON.version[configJSON.configuration[0].version1].name;
    var _0x3e89a7 = bibleVersionJSON.version[configJSON.configuration[0].version2].name;
    var _0x5d2c04 = configJSON.configuration[0].BibleDualLanguageForNavigation;
    var _0x26d6bb = content1.length;
    var _0x434eb2 = '';
    _0x434eb2 += '<table class="table pointer">';
    _0x434eb2 += '<thead>';
    _0x434eb2 += '  <tr>';
    _0x434eb2 += '    <th scope="col"></th>';
    _0x434eb2 += '    <th scope="col">' + _0x2939f3 + '</th>';
    _0x5d2c04 && (_0x434eb2 += '    <th scope="col">' + _0x3e89a7 + '</th>');
    _0x434eb2 += '  </tr>';
    _0x434eb2 += '</thead>';
    _0x434eb2 += '<tbody>';
    for (i = 0; i < _0x26d6bb; i++) {
        var _0x107250 = 'TC_' + i;
        _0x434eb2 += '<tr class="verseHighlightColor" id=' + _0x107250 + '>';
        _0x434eb2 += '<th scope="row">';
        _0x434eb2 += '</th>';
        let _0x37a718 = 'VC1_' + i;
        _0x434eb2 += '<td class="primaryBibleClass" id=' + _0x37a718 + ' index=' + i + '>' + content1[i] + '</td>';
        if (_0x5d2c04) {
            let _0x3513f7 = 'VC2_' + i;
            _0x434eb2 += '<td class="secondaryBibleClass" id=' + _0x3513f7 + ' index=' + i + '>' + content2[i] + '</td>';
        }
        _0x434eb2 += '</tr>';
    }
    _0x434eb2 = _0x434eb2 + '</tbody></table>';
    const _0x5afd97 = document.querySelector('.verses-tab-pane');
    _0x5afd97.innerHTML = _0x434eb2;
    $('.primaryBibleClass').css('font-family', bibleVersionJSON.version[configJSON.configuration[0].version1].selectedfont);
    $('.secondaryBibleClass').css('font-family', bibleVersionJSON.version[configJSON.configuration[0].version2].selectedfont);
    bibleVersionJSON.version[configJSON.configuration[0].version1].left2right == null ? $('.primaryBibleClass').css('direction', 'ltr') : bibleVersionJSON.version[configJSON.configuration[0].version1].left2right ? $('.primaryBibleClass').css('direction', 'ltr') : $('.primaryBibleClass').css('direction', 'rtl');
    bibleVersionJSON.version[configJSON.configuration[0].version2].left2right == null ? $('.secondaryBibleClass').css('direction', 'ltr') : bibleVersionJSON.version[configJSON.configuration[0].version2].left2right ? $('.secondaryBibleClass').css('direction', 'ltr') : $('.secondaryBibleClass').css('direction', 'rtl');
    const _0x40ee21 = $('#verseList').val() - 1;
    highlightVerse(_0x40ee21);
    setTimeout(function () {
        scroll2top(_0x40ee21);
    }, 200);
    for (i = 0; i < _0x26d6bb; i++) {
        if (_0x5d2c04) {
            var _0x35b7cc = '#VC1_' + i + ',#VC2_' + i;
        } else {
            var _0x35b7cc = '#VC1_' + i;
        }
        $(_0x35b7cc).on('click', async function () {
            const _0x43f80c = $(this).attr('index');
            biblePresentationLaunch(_0x43f80c);
            highlightVerse(_0x43f80c);
        });
    }
}
function biblePresentButton() {
    const _0xda016c = $('#verseList').val() - 1;
    biblePresentationLaunch(_0xda016c);
}
function biblePresentationLaunch(_0x4dbacd) {
    presentationData.contentIndex = _0x4dbacd;
    $('#verseList').val(presentationData.contentIndex * 1 + 1);
    presentationData.content1 = content1[presentationData.contentIndex];
    presentationData.content2 = content2[presentationData.contentIndex];
    presentationData.content1next = getNextVerseSlideContent(content1, _0x4dbacd);
    presentationData.content2next = getNextVerseSlideContent(content2, _0x4dbacd);
    presentationData.title = booknameObj.getbooknamesForPresent(bibleGetData.bookval - 1) + ' ' + bibleGetData.chapterval;
    presentationData.content1Font = bibleVersionJSON.version[configJSON.configuration[0].version1].selectedfont;
    presentationData.content2Font = bibleVersionJSON.version[configJSON.configuration[0].version2].selectedfont;
    presentationData.showBothContent = !configJSON.configuration[0].BibleDisplayOnlyPrimary;
    const _0x55c088 = getFooter();
    presentationData.contentCopyright = _0x55c088;
    presentationData.presentationType = PRESENTATION_VERSE;
    presentationData.content1direction = bibleVersionJSON.version[configJSON.configuration[0].version1].left2right;
    presentationData.content2direction = bibleVersionJSON.version[configJSON.configuration[0].version2].left2right;
    setupPresentation();
    const _0x46d9e3 = bibleGetData.bookval;
    const _0x5ce955 = bibleGetData.chapterval;
    const _0x2ac6d1 = presentationData.contentIndex * 1 + 1;
    bufferPresentationBibleData(_0x46d9e3, _0x5ce955, _0x2ac6d1, content1, content2);
    recent.addSelection(_0x46d9e3 - 1, _0x5ce955 * 1 - 1, _0x2ac6d1 * 1 - 1);
}
function highlightVerse(_0x5da5e5) {
    var _0x48a3da = configJSON.configuration[0].BibleDualLanguageForNavigation;
    if (_0x48a3da) {
        var _0x2050bf = '#VC1_' + previousSelVerse + ',#VC2_' + previousSelVerse;
    } else {
        var _0x2050bf = '#VC1_' + previousSelVerse;
    }
    $(_0x2050bf).css('color', '');
    if (_0x48a3da) {
        var _0x2050bf = '#VC1_' + _0x5da5e5 + ',#VC2_' + _0x5da5e5;
    } else {
        var _0x2050bf = '#VC1_' + _0x5da5e5;
    }
    $(_0x2050bf).css('color', '#0d6efd');
    previousSelVerse = _0x5da5e5;
}
function scroll2top(_0x3d249c) {
    var _0x33ee52 = 'TC_' + _0x3d249c;
    scroll_to_view && (document.getElementById(_0x33ee52).scrollIntoView(), scroll_to_view = false);
    window.scroll(0, 0);
}
function getFooter() {
    var _0x1430e2;
    var _0xe996ee = bibleVersionJSON.version[configJSON.configuration[0].version1].copyright;
    var _0x45908d = bibleVersionJSON.version[configJSON.configuration[0].version2].copyright;
    return _0x1430e2 = _0xe996ee + ' / ' + _0x45908d, _0xe996ee == 'public' && (_0xe996ee = 'Public Domain'), _0x45908d == 'public' && (_0x45908d = 'Public Domain'), _0xe996ee == 'Public Domain' && _0x45908d == 'Public Domain' && (_0x1430e2 = ''), (_0xe996ee == 'Public Domain' || _0xe996ee == '') && _0x45908d != 'Public Domain' && (_0x1430e2 = _0x45908d), _0xe996ee != 'Public Domain' && (_0x45908d == 'Public Domain' || _0x45908d == '') && (_0x1430e2 = _0xe996ee), _0xe996ee == _0x45908d && (_0x1430e2 = _0xe996ee), _0x1430e2;
}
function bufferPresentationBibleData(_0x42c0bd, _0x3b9b0a, _0x3cee51, _0x226d92, _0x23b638) {
    activePresentationData.presentationActive = true;
    activePresentationData.presentationType = presentationData.presentationType;
    activePresentationData.bookindex = _0x42c0bd;
    activePresentationData.chapterindex = _0x3b9b0a;
    activePresentationData.verseindex = _0x3cee51;
    activePresentationData.contentIndex = presentationData.contentIndex;
    activePresentationData.title = presentationData.title;
    activePresentationData.content1Arr = _0x226d92;
    activePresentationData.content2Arr = _0x23b638;
    activePresentationData.content1Font = presentationData.content1Font;
    activePresentationData.content2Font = presentationData.content2Font;
    activePresentationData.songid = 0;
    activePresentationData.copyright = presentationData.contentCopyright;
}