function setContainerHeight() {
    const _0x24e82b = parseInt($(window).height()) - 110;
    $('#verses-tab-pane').height(_0x24e82b);
    $('#lyrics-tab-pane').height(_0x24e82b);
    $('#notes-tab-pane').height(_0x24e82b);
    $('#search-tab-pane').height(_0x24e82b);
    $('#schedule-tab-pane').height(_0x24e82b);
    $('#graphics-tab-pane').height(_0x24e82b);
    $('#screens-tab-pane').height(_0x24e82b);
    if ($(window).height() < 500) {
        $('#bookList').attr('size', 1);
        $('#chapterList').attr('size', 1);
        $('#verseList').attr('size', 1);
    } else {
        var _0x1e8b84 = 0.04 * $(window).height() - 16;
        $('#bookList').attr('size', _0x1e8b84);
        $('#chapterList').attr('size', _0x1e8b84);
        $('#verseList').attr('size', _0x1e8b84);
        $('.songTitleListHeight').height(_0x24e82b - 150);
    }
}
function loadUI() {
    loadTopNavBar();
    loadMainLeftTab();
    loadMainRightTab();
    loadPanel1();
    loadThemeBuilderPanel();
    loadBibleSelectVersion();
    loadBibleManageVersion();
    loadEditSongLyricsPanel();
}
function loadTier2UI() {
    loadBibleTab();
    loadSongsTab();
}
function loadTier3UI() {
    loadBibleSearchTab();
    loadVersesTab();
    loadLyricsTab();
    loadGraphicsTab();
    loadScreensTab();
    loadScheduleTab();
}
function setcolormode(_0x55019e) {
    _0x55019e ? ($('body').attr('data-bs-theme', 'dark'), $('.form-control').removeClass('bg-light'), $('.form-control').removeClass('text-black'), $('.form-select').removeClass('bg-light'), $('.form-control').addClass('bg-dark'), $('.form-control').addClass('text-white'), $('.form-select').addClass('bg-dark')) : ($('body').attr('data-bs-theme', 'light'), $('.form-control').removeClass('bg-dark'), $('.form-control').removeClass('text-white'), $('.form-select').removeClass('bg-dark'), $('.form-control').addClass('bg-light'), $('.form-control').addClass('text-black'), $('.form-select').addClass('bg-light'));
}
function loadTopNavBar() {
    const _0x277fc0 = document.querySelector('.vv_navbar');
    fetch('./content/TopNavBar.html').then(_0x2c818a => _0x2c818a.text()).then(_0x1ba4a4 => {
        _0x277fc0.innerHTML = _0x1ba4a4;
    });
}
function loadMainLeftTab() {
    const _0x315b99 = document.querySelector('.vv_mainlefttab');
    fetch('./content/MainLeftTab.html').then(_0x54e3ca => _0x54e3ca.text()).then(_0x3097d0 => {
        _0x315b99.innerHTML = _0x3097d0;
        loadTier2UI();
    });
}
function loadMainRightTab() {
    const _0x20c83e = document.querySelector('.vv_mainrighttab');
    fetch('./content/MainRightTab.html').then(_0x256494 => _0x256494.text()).then(_0x3f1e29 => {
        _0x20c83e.innerHTML = _0x3f1e29;
    });
}
function loadBibleTab() {
    const _0x265a34 = document.querySelector('.bible-tab-pane');
    fetch('./content/BibleTab.html').then(_0x374333 => _0x374333.text()).then(_0x1912dd => {
        _0x265a34.innerHTML = _0x1912dd;
    });
}
function loadSongsTab() {
    const _0x3f28e2 = document.querySelector('.songs-tab-pane');
    fetch('./content/SongTab.html').then(_0x36c072 => _0x36c072.text()).then(_0x278832 => {
        _0x3f28e2.innerHTML = _0x278832;
        loadTier3UI();
    });
}
function loadBibleSearchTab() {
    const _0x11dfdd = document.querySelector('.search-tab-pane');
    fetch('./content/BibleSearchTab.html').then(_0x5575c9 => _0x5575c9.text()).then(_0x59ac15 => {
        _0x11dfdd.innerHTML = _0x59ac15;
        fill_searchBook();
    });
}
function loadScreensTab() {
    const _0x4e504d = document.querySelector('.screens-tab-pane');
    fetch('./content/ScreensTab.html').then(_0x3474bf => _0x3474bf.text()).then(_0x4a2143 => {
        _0x4e504d.innerHTML = _0x4a2143;
        screenstab_init();
    });
}
function loadGraphicsTab() {
    const _0x56a5a5 = document.querySelector('.graphics-tab-pane');
    fetch('./content/GraphicsTab.html').then(_0x1eb148 => _0x1eb148.text()).then(_0x46188a => {
        _0x56a5a5.innerHTML = _0x46188a;
        graphicstab_init();
    });
}
function loadScheduleTab() {
    const _0x2c0f3f = document.querySelector('.schedule-tab-pane');
    fetch('./content/ScheduleTab.html').then(_0xfd3c => _0xfd3c.text()).then(_0x224c76 => {
        _0x2c0f3f.innerHTML = _0x224c76;
    });
}
function loadVersesTab() {
    const _0x2e6139 = document.querySelector('.verses-tab-pane');
    fetch('./content/VersesTab.html').then(_0x4f8ec0 => _0x4f8ec0.text()).then(_0x405d36 => {
        _0x2e6139.innerHTML = _0x405d36;
    });
}
function loadLyricsTab() {
    const _0x43275c = document.querySelector('.lyrics-tab-pane');
    fetch('./content/SongLyricsTab.html').then(_0x457634 => _0x457634.text()).then(_0x4ec5a4 => {
        _0x43275c.innerHTML = _0x4ec5a4;
        vvinit_continue();
    });
}
function loadPanel1() {
    const _0x662ea6 = document.querySelector('#panel1');
    fetch('./content/RemoteVVPanel.html').then(_0x15b90f => _0x15b90f.text()).then(_0x22af33 => {
        _0x662ea6.innerHTML = _0x22af33;
    });
}
function loadThemeBuilderPanel() {
    const _0x1f1cce = document.querySelector('#themebuilderpanel');
    fetch('./content/ThemeBuilder.html').then(_0x3b17e3 => _0x3b17e3.text()).then(_0x4706c9 => {
        _0x1f1cce.innerHTML = _0x4706c9;
        themeObj.init();
    });
}
function loadBibleSelectVersion() {
    const _0x4b283f = document.querySelector('#bibleSelectVersionPanel');
    fetch('./content/BibleSelectVersion.html').then(_0x20196d => _0x20196d.text()).then(_0x5db602 => {
        _0x4b283f.innerHTML = _0x5db602;
    });
}
function loadBibleManageVersion() {
    const _0xaed52e = document.querySelector('#bibleManageVersionPanel');
    fetch('./content/BibleManageVersion.html').then(_0x20cff3 => _0x20cff3.text()).then(_0x10d039 => {
        _0xaed52e.innerHTML = _0x10d039;
    });
}
function loadEditSongLyricsPanel() {
    const _0x1aec52 = document.querySelector('#editSongLyricsPanel');
    fetch('./content/SongLyricsEdit.html').then(_0x78c817 => _0x78c817.text()).then(_0x1c4d2a => {
        _0x1aec52.innerHTML = _0x1c4d2a;
    });
    const _0x2f8d57 = document.querySelector('#editSongLyricsCreatePanel');
    fetch('./content/SongLyricsCreate.html').then(_0x16d195 => _0x16d195.text()).then(_0x523692 => {
        _0x2f8d57.innerHTML = _0x523692;
    });
}