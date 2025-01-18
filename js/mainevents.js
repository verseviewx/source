function setupMainEvents() {
    $(window).resize(function () {
        setContainerHeight();
    });
    $('#mainbox').keyup(function (_0xfefbd7) {
        mainWindowKey(_0xfefbd7);
    });
    $('#bible-tab').on('click', function (_0x4183c1) {
        $('#verses-tab').tab('show');
    });
    $('#songs-tab').on('click', function (_0x30970b) {
        $('#lyrics-tab').tab('show');
    });
    $('#verses-tab').on('click', function (_0x55d70f) {
        $('#bible-tab').tab('show');
    });
    $('#lyrics-tab').on('click', function (_0x55f560) {
        $('#songs-tab').tab('show');
    });
    $('#bibleTabSearchButton').on('click', async function () {
        const _0x439edc = await bibletab_searchReference();
        _0x439edc && (scroll_to_view = true);
    });
    $('#bibleTabSearchRef').on('focus', function () {
        enterkeyFlag = ENTERKEY_REFSEARCH;
        cursorKeysForNav = false;
    });
    $('#bibleTabSearchRef').on('focusout', function () {
        enterkeyFlag = ENTERKEY_NOTRIGGER;
        cursorKeysForNav = true;
    });
    $('#bibleTabPresentButton').on('click', async function () {
        await bibleSearchAndPresent();
    });
    $('#bibleTabScheduleButton').on('click', function () {
        scheduleBibleVerse();
    });
    $('#bookList, #chapterList, #verseList').on('focus', function () {
        cursorKeysForNav = false;
    });
    $('#bookList, #chapterList, #verseList').on('focusout', function () {
        cursorKeysForNav = true;
    });
    $('#bookList').on('change', async function () {
        bibletab_fillchapter();
        bibletab_fillverseText();
        scroll_to_view = true;
    });
    $('#chapterList').on('change', async function () {
        bibletab_fillverse();
        bibletab_fillverseText();
        scroll_to_view = true;
    });
    $('#verseList').on('change', async function () {
        var _0x1d9911 = $('#verseList option:selected').val();
        bibleGetData.verseval = $('#verseList option:selected').val();
        scroll_to_view = true;
        highlightVerse(_0x1d9911 - 1);
        scroll2top(_0x1d9911 - 1);
    });
    $('#searchID').on('focus', function () {
        enterkeyFlag = ENTERKEY_BIBLESEARCH;
        cursorKeysForNav = false;
    });
    $('#searchID').on('focusout', function () {
        enterkeyFlag = ENTERKEY_NOTRIGGER;
        cursorKeysForNav = true;
    });
    $('#searchButtonID').on('click', async function () {
        bibleBasicSearch();
    });
    $('#adSearch').on('focus', function () {
        enterkeyFlag = ENTERKEY_BIBLEADVSEARCH;
        cursorKeysForNav = false;
    });
    $('#adSearch').on('focusout', function () {
        enterkeyFlag = ENTERKEY_NOTRIGGER;
        cursorKeysForNav = true;
    });
    $('#adSearchButton').on('click', async function () {
        bibleAdvSearch();
    });
    $('#songnav_category').on('change', async function () {
        songtab_fillTags();
        songtab_fillTitle();
    });
    $('#songnav_tags').on('change', async function () {
        songtab_fillTitle();
    });
    $('#songnav_editbox').on('keyup', function () {
        sn_searchSong(true);
    });
    $('#songnav_editbox').on('focus', function () {
        cursorKeysForNav = false;
    });
    $('#songnav_editbox').on('focusout', function () {
        cursorKeysForNav = true;
    });
    $('#songnav_searchbutton').on('click', async function () {
        sn_searchSongInLyrics();
    });
    $('#songnav_searchauthorbutton').on('click', async function () {
        sn_searchSongByAuthor();
    });
    $('#songnav_clearbutton').on('click', async function () {
        sn_clearSearch();
    });
    $('#ly_add2schedule').on('click', function () {
        addSong2Schedule();
    });
    $('#ly_youtube').on('click', function () {
        launchYT();
    });
    $('#ly_edit').on('click', function () {
        const _0x313e56 = true;
        songEditObj.editSongLyrics(_0x313e56);
    });
    $('#darmodeicon').on('click', function () {
        const _0x348ead = configJSON.configuration[0].DarkMode;
        setcolormode(!_0x348ead);
        updateSaveConfig('DarkMode', !_0x348ead);
    });
    $('#remoteicon').on('click', function () {
        var _0x58e61f = new bootstrap.Modal(document.getElementById('p1'), { keyboard: false });
        _0x58e61f.show();
    });
    $('#iconBlank').on('click', function () {
        blankPresentation();
    });
    $('#iconLogo').on('click', function () {
        logoPresentation();
    });
    $('#iconClose').on('click', function () {
        window.api.closePresentation();
    });
    $('#iconPrev').on('click', function () {
        call_prevSlide();
    });
    $('#iconNext').on('click', function () {
        call_nextSlide();
    });
}
async function bibleSearchAndPresent() {
    const _0x430e49 = await bibletab_searchReference();
    _0x430e49 && (scroll_to_view = true, biblePresentButton());
}
function bibleBasicSearch() {
    const _0x2636c9 = $('#searchID').val();
    search(_0x2636c9, 0);
}
function bibleAdvSearch() {
    const _0x43335f = $('#adSearch').val();
    search(_0x43335f, 0);
}
function refSearch() {
}
window.api.vvmessageCall((_0x191ddc, _0x4b10c5) => {
    $('#statustext').html(_0x4b10c5);
});