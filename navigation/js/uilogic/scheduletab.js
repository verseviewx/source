function schedule() {
    this.init = _0xad2082;
    this.changeFontsizeScheduleTab = _0x49b275;
    this.processAddSong = _0x16e4be;
    this.processAddVerse = _0x41fd34;
    this.processUp = _0x2df352;
    this.processDown = _0x5921cd;
    this.processDelete = _0x424e00;
    this.processDeleteAll = _0x3f24a8;
    this.getScheduleData = _0x53c48e;
    let _0x238913 = new Array();
    let _0x5a7b7c = 0;
    function _0xad2082() {
        _0x238913 = new Array();
        _0x30c475();
        _0x325595();
    }
    async function _0x30c475() {
        _0x238913 = await window.api.getScheduleJSON();
        _0x52e252();
    }
    function _0x325595() {
        $('#sch_deleteID').on('click', function () {
            _0x424e00();
        });
        $('#sch_deleteAllID').on('click', function () {
            _0x3f24a8();
        });
        $('#sch_upID').on('click', function () {
            _0x2df352();
        });
        $('#sch_downID').on('click', function () {
            _0x5921cd();
        });
        $('#sch_selectID').on('change', function () {
            _0x17d5c7();
        });
        $('#sch_show_in_lyrics').on('click', function () {
            _0x4a9c39();
        });
    }
    function _0x53c48e() {
        return _0x238913;
    }
    function _0x16e4be(_0x177278) {
        _0x24de8c(_0x177278) && (_0x238913.push(_0x177278), saveBookmarksFlag = true, _0x52e252());
    }
    function _0x41fd34(_0x143c1c) {
        _0x238913.push(_0x143c1c);
        saveBookmarksFlag = true;
        _0x52e252();
    }
    function _0x424e00() {
        _0x5a7b7c = $('#sch_selectID  option:selected').val();
        _0x238913.splice(_0x5a7b7c, 1);
        saveBookmarksFlag = true;
        _0x52e252();
    }
    function _0x3f24a8() {
        var _0x571158 = 'SCHEDULE';
        var _0x23b7f7 = 'Are you sure you want to delete ALL schedule entries?';
        vvConfirm(_0x571158, _0x23b7f7, _0x4ec84a);
        function _0x4ec84a() {
            _0x238913 = new Array();
            saveBookmarksFlag = true;
            _0x52e252();
        }
    }
    function _0x2df352() {
        const _0x54443e = $('#sch_selectID  option:selected').val();
        if (_0x54443e != 0) {
            const _0x146b20 = _0x238913[_0x54443e - 1];
            _0x238913[_0x54443e - 1] = _0x238913[_0x54443e];
            _0x238913[_0x54443e] = _0x146b20;
            $('#sch_selectID').val(_0x54443e - 1);
            _0x52e252();
        }
    }
    function _0x5921cd() {
        _0x5a7b7c = parseInt($('#sch_selectID  option:selected').val());
        const _0x394e70 = _0x238913.length;
        if (_0x5a7b7c < _0x394e70 - 1) {
            const _0x8f8cc2 = _0x238913[_0x5a7b7c];
            _0x238913[_0x5a7b7c] = _0x238913[_0x5a7b7c + 1];
            _0x238913[_0x5a7b7c + 1] = _0x8f8cc2;
            $('#sch_selectID').val(_0x5a7b7c + 1);
            _0x52e252();
        }
    }
    function _0x49b275() {
    }
    function _0x17d5c7() {
        _0x5a7b7c = $('#sch_selectID  option:selected').val();
        let _0x54abfb = _0x238913[_0x5a7b7c];
        $('#sch_show_in_lyrics').show();
        _0x54abfb.contenttype == 0 ? (scheduletab_getSongLyrics(_0x54abfb.songid), $('#sch_show_in_lyrics').text('Show in Lyrics Tab')) : (scheduletab_getVerse(_0x54abfb.bookval, _0x54abfb.chapterval, _0x54abfb.verseval), $('#sch_show_in_lyrics').text('Show Chapter'));
    }
    function _0x4762ca() {
    }
    function _0x52e252() {
        _0x5a7b7c = $('#sch_selectID  option:selected').val();
        if (_0x238913.length == 0) {
            clearSelectList('sch_selectID');
            $('#sch_show_in_lyrics').hide();
            $('#sch_verseTextID').hide();
        } else {
            clearSelectList('sch_selectID');
            const _0x54a727 = _0x238913.length;
            for (var _0x327e2c = 0; _0x327e2c < _0x54a727; _0x327e2c++) {
                let _0x30de1a = _0x238913[_0x327e2c];
                const _0x7fc510 = _0x353787(_0x30de1a.contenttype, _0x30de1a.bookval, _0x30de1a.chapterval, _0x30de1a.verseval, _0x30de1a.id, _0x30de1a.songname);
                $('#sch_selectID').append('<option value="' + _0x327e2c + '" >' + _0x7fc510 + '</option>');
            }
            $('#sch_selectID').val(_0x5a7b7c);
        }
    }
    function _0x24de8c(_0x117288) {
        flag = true;
        const _0x20cf33 = _0x238913.length;
        for (var _0x133165 = 0; _0x133165 < _0x20cf33; _0x133165++) {
            let _0x2153c2 = _0x238913[_0x133165];
            if (_0x2153c2.contenttype == 0) {
                if (_0x2153c2.songid == _0x117288.songid) {
                    flag = false;
                    vvDialog('SCHEDULE', 'Song already in the schedule');
                    break;
                }
            }
        }
        return flag;
    }
    function _0x353787(_0x1c2a2f, _0x3bff9e, _0x4f7e9a, _0x2f5268, _0x442ba3, _0x5210bd) {
        var _0x44eda5 = null;
        if (_0x1c2a2f == 0) {
            _0x44eda5 = _0x5210bd;
        } else {
            var _0x28fc83 = booknames[_0x3bff9e - 1];
            _0x44eda5 = _0x28fc83 + ' ' + parseInt(_0x4f7e9a) + ':' + parseInt(_0x2f5268);
        }
        return _0x44eda5;
    }
    async function _0x4a9c39() {
        _0x5a7b7c = $('#sch_selectID  option:selected').val();
        let _0x59f9d6 = _0x238913[_0x5a7b7c];
        _0x59f9d6.contenttype == 0 ? ($('#songnav_editbox').val(_0x59f9d6.songname), sn_searchSong(false), $('#lyrics-tab').tab('show'), $('#songs-tab').tab('show')) : ($('#bibleTabSearchRef').val(booknames[_0x59f9d6.bookval - 1] + ' ' + _0x59f9d6.chapterval + ' ' + _0x59f9d6.verseval), await bibletab_searchReference(), $('#verses-tab').tab('show'), $('#bible-tab').tab('show'));
    }
}
let sch_songGetData = {
    command: 0,
    category: 'ALL',
    tag: '',
    songid: 1,
    keyword: '',
    searchType: 0
};
async function scheduletab_getSongLyrics(_0x1bea72) {
    sch_songGetData.command = 3;
    sch_songGetData.songid = _0x1bea72;
    const _0x148d91 = await window.api.getDataFromSong(sch_songGetData);
    scheduletab_fillSongLyrics(_0x148d91);
}
function scheduletab_fillSongLyrics(_0x589a2a) {
    const _0x4512ca = string2array(_0x589a2a[0].lyrics);
    let _0x23d544 = _0x589a2a[0].lyrics2;
    _0x23d544 != null ? _0x23d544 = string2array(_0x589a2a[0].lyrics2) : _0x23d544 = new Array();
    _0x23d544 = makeSlidesSameSize(_0x4512ca, _0x23d544);
    var _0x3a275c = _0x4512ca.length;
    var _0x4e3f78 = '';
    _0x4e3f78 += '<div class="col-6"><label>' + _0x589a2a[0].name + '</label>' + '</div>';
    _0x4e3f78 += '<div class="row py-2">';
    for (var _0x456a7c = 0; _0x456a7c < _0x3a275c; _0x456a7c++) {
        _0x4e3f78 += '<div class="col-4 schlyricsSlideClass pointer" index=' + _0x456a7c + '>';
        _0x4e3f78 += '<div class="card">';
        _0x4e3f78 += '<div class="card-header">' + (_0x456a7c + 1) + '</div>';
        _0x4e3f78 += '<div class="card-body">';
        _0x4e3f78 += '<p class="card-text schprimarytext">' + _0x4512ca[_0x456a7c] + '</p>';
        _0x4e3f78 += '<p class="card-text schsecondarytext">' + _0x23d544[_0x456a7c] + '</p>';
        _0x4e3f78 += '</div>';
        _0x4e3f78 += '</div>';
        _0x4e3f78 += '</div>';
    }
    _0x4e3f78 += '</div>';
    $('#sch_verseTextID').html(_0x4e3f78);
    $('#sch_verseTextID').show();
    $('.schprimarytext').css('font-family', _0x589a2a[0].font);
    $('.schsecondarytext').css('font-family', _0x589a2a[0].font2);
    $('.schlyricsSlideClass').on('click', function () {
        presentationData.contentIndex = $(this).attr('index');
        presentationData.content1 = _0x4512ca[$(this).attr('index')];
        presentationData.content2 = _0x23d544[$(this).attr('index')];
        presentationData.content1next = getNextVerseSlideContent(_0x4512ca, $(this).attr('index'));
        presentationData.content2next = getNextVerseSlideContent(_0x23d544, $(this).attr('index'));
        presentationData.content1Font = _0x589a2a[0].font;
        presentationData.content2Font = _0x589a2a[0].font2;
        presentationData.contentCopyright = _0x589a2a[0].copy;
        presentationData.presentationType = PRESENTATION_LYRICS;
        presentationData.title = '';
        presentationData.EnableLineWrap = screentab.EnableLineWrap;
        setupPresentation();
        bufferPresentationSongData(_0x4512ca, _0x23d544);
    });
}
async function scheduletab_getVerse(_0x2ddcc1, _0x343d09, _0x40f345) {
    let _0x249d3f = {
        command: 0,
        version: 1,
        bookval: 1,
        chapterval: 1,
        verseval: 1,
        keyword: '',
        searchType: 0
    };
    _0x249d3f.bookval = _0x2ddcc1;
    _0x249d3f.chapterval = _0x343d09;
    _0x249d3f.verseval = _0x40f345;
    _0x249d3f.command = 0;
    _0x249d3f.version = 1;
    const _0x573b30 = await window.api.getDataFromBible(_0x249d3f);
    _0x249d3f.version = 2;
    const _0x509442 = await window.api.getDataFromBible(_0x249d3f);
    const _0x565c71 = _0x573b30.length;
    let _0x262912 = [];
    let _0x1ce702 = [];
    for (var _0x4f9881 = 0; _0x4f9881 < _0x565c71; _0x4f9881++) {
        if (_0x573b30[_0x4f9881] != null) {
            _0x262912.push(_0x4f9881 + 1 + ' ' + _0x573b30[_0x4f9881].word);
            _0x1ce702.push(_0x4f9881 + 1 + ' ' + _0x509442[_0x4f9881].word);
        }
    }
    const _0x45fe22 = booknames[_0x2ddcc1 - 1] + ' ' + _0x343d09;
    scheduletab_fillVerses(_0x262912, _0x1ce702, _0x45fe22, _0x2ddcc1, _0x343d09, _0x40f345);
}
function scheduletab_fillVerses(_0x149903, _0xb6ea81, _0x80138e, _0x318f3e, _0x11436e, _0x4f3d06) {
    const _0x58e7da = _0x149903.length;
    let _0x21f108 = '';
    _0x21f108 += '<table class="table pointer">';
    _0x21f108 += '<thead>';
    _0x21f108 += '  <tr>';
    _0x21f108 += '    <th scope="col">' + _0x80138e + '</th>';
    _0x21f108 += '    <th scope="col"></th>';
    _0x21f108 += '  </tr>';
    _0x21f108 += '</thead>';
    _0x21f108 += '<tbody>';
    for (i = _0x4f3d06 - 1; i < parseInt(_0x4f3d06) + 5; i++) {
        if (_0x149903[i] != null) {
            var _0x48068f = 'STC_' + i;
            _0x21f108 += '<tr>';
            let _0x3c1b7b = 'SVC1_' + i;
            _0x21f108 += '<td class="primaryBibleClass" id=' + _0x3c1b7b + ' index=' + i + '>' + _0x149903[i] + '</td>';
            let _0x7daffa = 'SVC2_' + i;
            _0x21f108 += '<td class="secondaryBibleClass" id=' + _0x7daffa + ' index=' + i + '>' + _0xb6ea81[i] + '</td>';
            _0x21f108 += '</tr>';
        }
    }
    _0x21f108 = _0x21f108 + '</tbody></table>';
    $('#sch_verseTextID').html(_0x21f108);
    $('#sch_verseTextID').show();
    $('.primaryBibleClass').css('font-family', bibleVersionJSON.version[configJSON.configuration[0].version1].selectedfont);
    $('.secondaryBibleClass').css('font-family', bibleVersionJSON.version[configJSON.configuration[0].version2].selectedfont);
    for (i = _0x4f3d06 - 1; i < parseInt(_0x4f3d06) + 5; i++) {
        if (_0x149903[i] != null) {
            var _0x5ae075 = '#SVC1_' + i;
            $(_0x5ae075).on('click', async function () {
                presentationData.contentIndex = $(this).attr('index');
                presentationData.content1 = _0x149903[$(this).attr('index')];
                presentationData.content2 = _0xb6ea81[$(this).attr('index')];
                presentationData.content1next = getNextVerseSlideContent(_0x149903, $(this).attr('index'));
                presentationData.content2next = getNextVerseSlideContent(_0xb6ea81, $(this).attr('index'));
                presentationData.content1Font = bibleVersionJSON.version[configJSON.configuration[0].version1].selectedfont;
                presentationData.content2Font = bibleVersionJSON.version[configJSON.configuration[0].version2].selectedfont;
                presentationData.title = booknameObj.getbooknamesForPresent(_0x318f3e - 1) + ' ' + _0x11436e;
                presentationData.presentationType = PRESENTATION_VERSE;
                presentationData.EnableLineWrap = screentab.EnableLineWrap;
                setupPresentation();
                bufferPresentationBibleData(_0x318f3e, _0x11436e, _0x4f3d06, _0x149903, _0xb6ea81);
            });
        }
    }
}