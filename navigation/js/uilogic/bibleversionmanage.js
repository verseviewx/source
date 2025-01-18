let bibleVersionManagePanel = {
    AvailableBibleList: '',
    SelectedVersion: '',
    SelectedVersionIndex: 0,
    CopyrightSelectedVersion: '',
    SelectedFont: 0,
    NewAddedFont: ''
};
let allbible_allFontsFonts = new Array();
function bibleVersionManage_init() {
    bibleVersionManage_setValues();
    bibleVersionManage_setui();
    bibleVersionManage_setevents();
}
function bibleVersionManage_setValues() {
    $('#addFontVersionButton').show();
    $('#addFontVersionTextbox').hide();
    $('#addToFontListButton').hide();
    bibleVersionManage_fillInstalled();
}
function bibleVersionManage_fillInstalled() {
    let _0x59b23e = bibleVersion_getInstalledBibleNames();
    const _0x5f26ae = $('#selectVersionList');
    let _0x3e86b0 = '';
    clearSelectList('selectVersionList');
    let _0x2b8569 = 0;
    _0x59b23e.forEach(function (_0x28a002) {
        _0x3e86b0 += '<option value=' + _0x2b8569 + '>' + _0x28a002 + '</option>';
        _0x2b8569++;
    });
    _0x5f26ae.append(_0x3e86b0);
    bibleVersionManagePanel.SelectedVersionIndex = 0;
    _0x5f26ae.val(bibleVersionManagePanel.SelectedVersionIndex);
    bibleVersionManage_updateDetails();
    bibleVersionManage_fillFontList();
}
function bibleVersionManage_fillFontList(_0x127047) {
    clearSelectList('fontVersionList');
    var _0x84c92d = document.createDocumentFragment();
    var _0x1106dc = document.getElementById('fontVersionList');
    bible_allFonts = new Array();
    bible_allFonts = systemFontList;
    var _0x11560e = bible_allFonts.length;
    var _0x46792a = '';
    var _0x53f3be = 0;
    for (var _0x24d7c6 = 0; _0x24d7c6 < _0x11560e; _0x24d7c6++) {
        var _0xdb4b67 = document.createElement('option');
        _0xdb4b67.innerHTML = bible_allFonts[_0x24d7c6];
        _0xdb4b67.value = _0x24d7c6;
        _0x84c92d.appendChild(_0xdb4b67);
        _0x127047 != null && (bible_allFonts[_0x24d7c6] == _0x127047 && (_0x53f3be = _0x24d7c6));
    }
    _0x1106dc.appendChild(_0x84c92d);
    _0x127047 != null && $('#fontVersionList').val(_0x53f3be);
}
function bibleVersionManage_setui() {
}
async function bibleVersionManage_browse() {
    const _0x55885e = await window.api.browseBibleDB();
    if (_0x55885e == null) {
        return false;
    }
    let _0x22c8cc = {
        path: _0x55885e,
        type: 'XML'
    };
    let _0x3a0b32 = '';
    configJSON.configuration[0].platform === 'mac' ? _0x3a0b32 = _0x55885e.split('/') : _0x3a0b32 = _0x55885e.split('\\');
    let _0x351088 = _0x3a0b32[_0x3a0b32.length - 1];
    let _0xb7671d = _0x351088.split('.');
    _0xb7671d[_0xb7671d.length - 1] == 'db' && (_0x22c8cc.type = 'DB');
    const _0x18a66c = await window.api.addBibleDB(_0x22c8cc);
    if (_0x18a66c == false) {
        return vvDialog('BIBLE', 'Bible already added or the format is not valid with VerseVIEW'), false;
    }
    let _0x4fe657 = _0x18a66c[0].booknames.replace(/\"/g, '');
    _0x4fe657 = _0x4fe657.replace(/ , /g, ',');
    _0x4fe657 = _0x4fe657.split(',');
    let _0x319cb1 = true;
    _0x18a66c[0].title.indexOf('Arabic') >= 0 && (_0x319cb1 = false);
    _0x351088 = _0x351088.split('.')[0] + '.db';
    const _0x15a28d = {
        name: _0x18a66c[0].title,
        file: _0x351088,
        selectedfont: _0x18a66c[0].fonts.split(',')[0],
        booknames: _0x4fe657,
        copyright: _0x18a66c[0].copyrights,
        left2right: _0x319cb1
    };
    bibleVersion_addRecord(_0x15a28d);
    bibleVersionManage_fillInstalled();
    bibleVersionSelect_setValues();
    vvDialog('BIBLE', 'Added Bible');
}
function bibleVersionManage_setevents() {
    $('#selectVersionList').on('change', function () {
        bibleVersionManagePanel.SelectedVersionIndex = $('#selectVersionList option:selected').val();
        bibleVersionManage_updateDetails();
    });
    $('#fontVersionList').on('change', function () {
        bibleVersionManagePanel.SelectedFont = $('#fontVersionList option:selected').val();
    });
    $('#browseVersionButton').on('click', function () {
        bibleVersionManage_browse();
    });
    $('#deleteVersionButton').on('click', function () {
        bibleVersion_deleteRecord(bibleVersionManagePanel.SelectedVersionIndex);
        bibleVersionManage_fillInstalled();
    });
    $('#saveVersionButton').on('click', function () {
        bibleVersion_updateFont(bibleVersionManagePanel.SelectedVersionIndex, bible_allFonts[bibleVersionManagePanel.SelectedFont]);
    });
    $('#addFontVersionButton').on('click', function () {
        $('#addFontVersionButton').hide();
        $('#addFontVersionTextbox').show();
        $('#addToFontListButton').show();
    });
    $('#addToFontListButton').on('click', function () {
        let _0x277d0a = $('#addFontVersionTextbox').val();
        addFont(_0x277d0a);
        bibleVersionManage_fillFontList(_0x277d0a);
        $('#addFontVersionButton').show();
        $('#addFontVersionTextbox').hide();
        $('#addToFontListButton').hide();
    });
}
function bibleVersionManage_updateDetails() {
    const _0x29e8e0 = bibleVersion_getVersionRecord(bibleVersionManagePanel.SelectedVersionIndex);
    bibleVersionManagePanel.SelectedVersion = _0x29e8e0.name;
    bibleVersionManagePanel.CopyrightSelectedVersion = _0x29e8e0.copyright;
    $('#versionVersionTextbox').val(bibleVersionManagePanel.SelectedVersion);
    $('#copyrightVersionTextarea').val(bibleVersionManagePanel.CopyrightSelectedVersion);
}