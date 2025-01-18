let songGetData = {
    command: 0,
    category: 'ALL',
    tag: '',
    songid: 1,
    keyword: '',
    searchType: 0
};
let YTargs = {
    playflag: false,
    link: ''
};
let lastHighlightedDiv = null;
let lyrics1;
let lyrics2;
let songtab_activeSong = null;
let tagArr = new Array();
let songListData = null;
let songListStartIndex = 0;
const SONGLIST_NUMOFELEMENTS = 500;
const SONGLIST_NUMOFOVERLAP = 10;
let songListScrollingUp = false;
let songListScrollingDown = false;
let songListScrollPosition = 0;
async function songtab_fillTags() {
    songGetData.command = 1;
    songGetData.category = $('#songnav_category option:selected').text();
    const _0x4ea835 = await window.api.getDataFromSong(songGetData);
    songtab_fillTagList(_0x4ea835);
}
function songtab_fillTagList(_0x547c19) {
    clearSelectList('songnav_tags');
    const _0x55aa73 = $('#songnav_tags');
    var _0x303721 = '';
    const _0xdce9a2 = _0x547c19.length;
    tagArr = new Array();
    for (var _0x2e5191 = 0; _0x2e5191 < _0xdce9a2; _0x2e5191++) {
        let _0x9defa6 = '';
        _0x547c19[_0x2e5191].tags != null && (_0x9defa6 = _0x547c19[_0x2e5191].tags.split(','));
        let _0x55a8be = _0x9defa6.length;
        for (var _0x7ec918 = 0; _0x7ec918 < _0x55a8be; _0x7ec918++) {
            jQuery.inArray(_0x9defa6[_0x7ec918], tagArr) == -1 && (_0x9defa6[_0x7ec918] != '' && tagArr.push(_0x9defa6[_0x7ec918]));
        }
    }
    _0x303721 += '<option value=' + 0 + '>' + 'ALL' + '</option>';
    const _0x2ddbc2 = tagArr.length;
    for (var _0x2e5191 = 0; _0x2e5191 < _0x2ddbc2; _0x2e5191++) {
        _0x303721 += '<option value=' + (_0x2e5191 + 1) + '>' + tagArr[_0x2e5191] + '</option>';
    }
    _0x55aa73.append(_0x303721);
    _0x55aa73.val(0);
}
async function songtab_fillCategory() {
    songGetData.command = 0;
    const _0x55b4e8 = await window.api.getDataFromSong(songGetData);
    songtab_fillCatList(_0x55b4e8);
}
async function songtab_getCategories() {
    songGetData.command = 0;
    const _0x1686f7 = await window.api.getDataFromSong(songGetData);
    return _0x1686f7;
}
function songtab_fillCatList(_0x4ffad6) {
    clearSelectList('songnav_category');
    const _0x18c9f0 = $('#songnav_category');
    var _0x3b15d7 = '';
    const _0x358978 = _0x4ffad6.length;
    _0x3b15d7 += '<option value=' + 0 + '>' + 'ALL' + '</option>';
    for (var _0x539e52 = 0; _0x539e52 < _0x358978; _0x539e52++) {
        _0x3b15d7 += '<option value=' + (_0x539e52 + 1) + '>' + _0x4ffad6[_0x539e52].cat + '</option>';
    }
    _0x18c9f0.append(_0x3b15d7);
    _0x18c9f0.val(0);
}
async function songtab_fillTitle() {
    songGetData.command = 2;
    songGetData.category = $('#songnav_category option:selected').text();
    songGetData.tag = $('#songnav_tags option:selected').text();
    const _0x4c1c50 = await window.api.getDataFromSong(songGetData);
    songtab_fillTitleList(_0x4c1c50, false);
}
let scrolldownallowed = true;
function songtab_fillTitleList(_0x1416d2, _0x3319b0) {
    if (_0x1416d2 != null) {
        songListData = _0x1416d2;
        songListStartIndex = 0;
    } else {
    }
    let _0x591d96 = '';
    const _0x31731d = songListData.length;
    let _0x3f0627 = songListStartIndex + SONGLIST_NUMOFELEMENTS + SONGLIST_NUMOFOVERLAP;
    _0x3f0627 >= _0x31731d && (_0x3f0627 = _0x31731d);
    if (_0x31731d != 0) {
        let _0x197a59 = songListData[0].id;
        for (var _0x42b0c5 = songListStartIndex; _0x42b0c5 < _0x3f0627; _0x42b0c5++) {
            _0x591d96 += '<button type="button" class="list-group-item list-group-item-action songlistclass" idnum=' + songListData[_0x42b0c5].id + '>';
            _0x591d96 += '<div class="ms-2 me-auto"><div class="fw-normal">' + songListData[_0x42b0c5].name + '</div>';
            songListData[_0x42b0c5].title2 != null && songListData[_0x42b0c5].title2 != '' && songListData[_0x42b0c5].title2 != 'null' && (_0x591d96 += '<div class="text-white-20 twenty_percent_smaller">' + songListData[_0x42b0c5].title2 + '</div>');
            _0x591d96 += '</div></button>';
        }
        if (_0x3f0627 > songListStartIndex) {
            $('#songtitlelist').html(_0x591d96);
        } else {
        }
        _0x1416d2 != null && songtab_getSongLyrics(_0x197a59, true, _0x3319b0);
        $('.songlistclass').on('click', function () {
            lastHighlightedDiv != null && lastHighlightedDiv.css('background-color', '');
            lastHighlightedDiv = $(this);
            $(this).css('background-color', 'grey');
            songtab_getSongLyrics($(this).attr('idnum'), true, _0x3319b0);
            $('#lyrics-tab').tab('show');
        });
    } else {
        _0x591d96 = 'No Matching Songs';
        $('#songtitlelist').html(_0x591d96);
    }
    $('#songtitlelistx').on('scroll wheel', function () {
        const _0x50e3a3 = $(this).scrollTop();
        _0x50e3a3 == songListScrollPosition ? (songListScrollingDown = false, songListScrollingUp = false, scrolldownallowed = true) : _0x50e3a3 > songListScrollPosition ? (songListScrollingDown = true, songListScrollingUp = false) : (songListScrollingUp = true, songListScrollingDown = false);
        songListScrollPosition = _0x50e3a3;
        songListScrollingDown && scrolldownallowed && ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight && (songListScrollingDown = false, songListScrollingUp = false, songListScrollPosition = 0, songListStartIndex += SONGLIST_NUMOFELEMENTS, songListStartIndex < _0x31731d ? songtab_fillTitleList(null, _0x3319b0) : (songListStartIndex -= SONGLIST_NUMOFELEMENTS, scrolldownallowed = false)));
        songListScrollingUp && ($(this).scrollTop() == 0 && (songListScrollingDown = false, songListScrollingUp = false, songListScrollPosition = _0x50e3a3, $('#songtitlelistx').scrollTop(100), songListStartIndex -= SONGLIST_NUMOFELEMENTS, songListStartIndex < 0 && (songListStartIndex = 0, $('#songtitlelistx').scrollTop(0)), songtab_fillTitleList(null, _0x3319b0)));
    });
}
async function sn_searchSong(_0x7f5fd9) {
    let _0xfa826e = $('#songnav_editbox').val();
    const _0x5652a5 = $('#songnav_category option:selected').text();
    _0xfa826e = $.trim(_0xfa826e);
    songGetData.command = 4;
    let _0x3f224a = null;
    $.isNumeric(_0xfa826e) ? (songGetData.keyword = _0xfa826e, songGetData.searchType = 1, _0x3f224a = await window.api.getDataFromSong(songGetData)) : (_0xfa826e = _0xfa826e + '%', songGetData.keyword = _0xfa826e, songGetData.searchType = 0, songGetData.category = _0x5652a5, _0x3f224a = await window.api.getDataFromSong(songGetData));
    songtab_fillTitleList(_0x3f224a, _0x7f5fd9);
}
async function sn_searchSongInLyrics() {
    let _0x10bcb2 = $('#songnav_editbox').val();
    _0x10bcb2 = $.trim(_0x10bcb2);
    songGetData.command = 4;
    let _0x40ccc7 = null;
    _0x10bcb2 = '%' + _0x10bcb2 + '%';
    songGetData.keyword = _0x10bcb2;
    songGetData.searchType = 2;
    _0x40ccc7 = await window.api.getDataFromSong(songGetData);
    songtab_fillTitleList(_0x40ccc7, true);
}
async function sn_searchSongByAuthor() {
    let _0x1b5c69 = $('#songnav_editbox').val();
    _0x1b5c69 = $.trim(_0x1b5c69);
    songGetData.command = 4;
    let _0x26b681 = null;
    _0x1b5c69 = '%' + _0x1b5c69 + '%';
    songGetData.keyword = _0x1b5c69;
    songGetData.searchType = 3;
    _0x26b681 = await window.api.getDataFromSong(songGetData);
    songtab_fillTitleList(_0x26b681, false);
}
async function sn_clearSearch() {
    $('#songnav_editbox').val('');
    songtab_fillTitle();
}
async function songtab_getSongLyrics(_0x4084dd, _0x40a830, _0xe4b4fc) {
    songGetData.command = 3;
    songGetData.songid = _0x4084dd;
    songtab_activeSong = await window.api.getDataFromSong(songGetData);
    if (_0x40a830) {
        songtab_fillSongLyrics(songtab_activeSong, _0xe4b4fc);
    } else {
    }
}
function songtab_fillSongLyrics(_0x57e42d, _0x29826c) {
    $('#ly_id').text(_0x57e42d[0].id);
    $('#ly_name').html(_0x57e42d[0].name);
    $('#ly_songnumber').html('');
    _0x57e42d[0].subcat != '' && _0x57e42d[0].subcat != null && _0x57e42d[0].subcat != 'undefined' && _0x57e42d[0].subcat != 'null' && $('#ly_songnumber').html('#' + _0x57e42d[0].subcat);
    _0x57e42d[0].title2 != null && _0x57e42d[0].title2 != '' && _0x57e42d[0].title2 != 'null' ? $('#ly_name2').html(_0x57e42d[0].title2) : $('#ly_name2').html('');
    generateTagUI(_0x57e42d[0].tags);
    $('#ly_cat').html(_0x57e42d[0].cat);
    $('#ly_key').html(_0x57e42d[0].key);
    generateCopyrightUI(_0x57e42d[0].copy);
    $('#ly_notes').html(_0x57e42d[0].notes);
    let _0x841ac7 = false;
    _0x841ac7 = checkForValidYT(_0x57e42d[0].yvideo);
    $('#ly_youtube').removeClass('d-none');
    _0x841ac7 ? (YTargs.link = _0x57e42d[0].yvideo, YTargs.playflag = true, $('#ly_youtube').removeClass('d-none')) : (YTargs.link = '', YTargs.playflag = false, $('#ly_youtube').addClass('d-none'));
    lyrics1 = string2array(_0x57e42d[0].lyrics);
    lyrics2 = _0x57e42d[0].lyrics2;
    lyrics2 != null ? lyrics2 = string2array(_0x57e42d[0].lyrics2) : lyrics2 = new Array();
    lyrics2 = makeSlidesSameSize(lyrics1, lyrics2);
    var _0x154039 = lyrics1.length;
    var _0x267390 = '';
    _0x267390 += '<div class="row py-2">';
    for (var _0x52a21e = 0; _0x52a21e < _0x154039; _0x52a21e++) {
        _0x267390 += '<div class="col-4 lyricsSlideClass pointer" index=' + _0x52a21e + '>';
        _0x267390 += '<div class="card">';
        _0x267390 += '<div class="card-header">' + (_0x52a21e + 1) + '</div>';
        _0x267390 += '<div class="card-body">';
        _0x267390 += '<p class="card-text primarytext">' + lyrics1[_0x52a21e] + '</p>';
        _0x267390 += '<p class="card-text secondarytext">' + lyrics2[_0x52a21e] + '</p>';
        _0x267390 += '</div>';
        _0x267390 += '</div>';
        _0x267390 += '</div>';
    }
    _0x267390 += '</div>';
    $('#ly_slide').html(_0x267390);
    $('.primarytext').css('font-family', _0x57e42d[0].font);
    $('.secondarytext').css('font-family', _0x57e42d[0].font2);
    let _0x4056e4 = true;
    _0x57e42d[0].cat.indexOf('Arabic') >= 0 && (_0x4056e4 = false);
    _0x57e42d[0].textDirection = _0x4056e4;
    if (_0x29826c || _0x29826c == null) {
        let _0x561685 = $('#songnav_editbox').val();
        _0x561685 = $.trim(_0x561685);
        _0x561685.length > 2 && $('.lyricsSlideClass').mark(_0x561685.toLowerCase());
    }
    $('.lyricsSlideClass').on('click', function () {
        let _0x4f5c65 = $(this).attr('index');
        processPresentationSongClick(_0x57e42d, lyrics1, lyrics2, _0x4f5c65);
    });
}
function processPresentationSongClick(_0x1eb395, _0x508243, _0x54c2a6, _0x14bd47) {
    presentationData.title = '';
    presentationData.contentIndex = _0x14bd47;
    presentationData.content1 = _0x508243[presentationData.contentIndex];
    presentationData.content2 = _0x54c2a6[presentationData.contentIndex];
    presentationData.content1next = getNextSongSlideContent(_0x508243, _0x14bd47);
    presentationData.content2next = getNextSongSlideContent(_0x54c2a6, _0x14bd47);
    presentationData.content1Font = _0x1eb395[0].font;
    presentationData.content2Font = _0x1eb395[0].font2;
    songtab_activeSong[0].cat == 'VV Malayalam 2021' || songtab_activeSong[0].cat == 'VV Hindi 2021' ? presentationData.contentCopyright = songtab_activeSong[0].copy + ' (Song #' + songtab_activeSong[0].subcat + ')' : presentationData.contentCopyright = songtab_activeSong[0].copy;
    presentationData.presentationType = PRESENTATION_LYRICS;
    _0x1eb395[0].textDirection != null ? presentationData.content1direction = _0x1eb395[0].textDirection : presentationData.content1direction = true;
    setupPresentation();
    bufferPresentationSongData(_0x508243, _0x54c2a6);
}
function bufferPresentationSongData(_0x4a788f, _0x567bf3) {
    activePresentationData.presentationActive = true;
    activePresentationData.presentationType = presentationData.presentationType;
    activePresentationData.bookindex = 0;
    activePresentationData.chapterindex = 0;
    activePresentationData.verseindex = 0;
    activePresentationData.contentIndex = presentationData.contentIndex;
    activePresentationData.title = presentationData.title;
    activePresentationData.content1Arr = _0x4a788f;
    activePresentationData.content2Arr = _0x567bf3;
    activePresentationData.content1Font = presentationData.content1Font;
    activePresentationData.content2Font = presentationData.content2Font;
    activePresentationData.songid = 0;
    activePresentationData.copyright = presentationData.contentCopyright;
}
function nextLyricsSlide() {
    const _0x2c904a = activePresentationData.content1Arr.length;
    let _0xc412cc = parseInt(activePresentationData.contentIndex) + 1;
    _0xc412cc >= _0x2c904a && (_0xc412cc = 0);
    presentationData.contentIndex = _0xc412cc;
    activePresentationData.contentIndex = _0xc412cc;
    presentationData.content1 = activePresentationData.content1Arr[_0xc412cc];
    presentationData.content2 = activePresentationData.content2Arr[_0xc412cc];
    presentationData.content1next = getNextSongSlideContent(activePresentationData.content1Arr, _0xc412cc);
    presentationData.content2next = getNextSongSlideContent(activePresentationData.content2Arr, _0xc412cc);
    presentationData.presentationType = activePresentationData.presentationType;
    window.api.update(presentationData);
}
function prevLyricsSlide() {
    const _0x471384 = activePresentationData.content1Arr.length;
    let _0x3a0e92 = parseInt(activePresentationData.contentIndex) - 1;
    _0x3a0e92 < 0 && (_0x3a0e92 = _0x471384 - 1);
    presentationData.contentIndex = _0x3a0e92;
    activePresentationData.contentIndex = _0x3a0e92;
    presentationData.content1 = activePresentationData.content1Arr[_0x3a0e92];
    presentationData.content2 = activePresentationData.content2Arr[_0x3a0e92];
    presentationData.content1next = getNextSongSlideContent(activePresentationData.content1Arr, _0x3a0e92);
    presentationData.content2next = getNextSongSlideContent(activePresentationData.content2Arr, _0x3a0e92);
    presentationData.presentationType = activePresentationData.presentationType;
    window.api.update(presentationData);
}
function getNextSongSlideContent(_0x5bc050, _0x50e898) {
    let _0x3e0754 = '';
    const _0x37a544 = _0x5bc050.length;
    const _0x42d81f = parseInt(_0x50e898) + 1;
    return _0x42d81f >= _0x37a544 ? _0x3e0754 = '' : _0x3e0754 = _0x5bc050[_0x42d81f], _0x3e0754;
}
function addSong2Schedule() {
    const _0x490c5a = {
        contenttype: 0,
        songid: $('#ly_id').text(),
        songname: $('#ly_name').text(),
        bookval: 1,
        chapterval: 1,
        verseval: 1
    };
    scheduleObj.processAddSong(_0x490c5a);
}
async function addSong2ScheduleFromRemote(_0x5754ea, _0x4865ce) {
    let _0x4ac7b2 = {
        command: 3,
        songid: _0x5754ea
    };
    const _0x2f6551 = await window.api.getDataFromSong(_0x4ac7b2);
    const _0x8c2dd0 = {
        contenttype: 0,
        songid: _0x5754ea,
        songname: _0x2f6551[0].name,
        bookval: 1,
        chapterval: 1,
        verseval: 1
    };
    scheduleObj.processAddSong(_0x8c2dd0);
}
function string2array(_0x4a19f0) {
    var _0x4a15e6 = new Array();
    _0x4a15e6 = _0x4a19f0.split('<slide>');
    _0x4a15e6.splice(_0x4a15e6.length - 1, 1);
    var _0x57b6a4 = configJSON.configuration[0].HideStanzaNumber;
    if (_0x57b6a4) {
        var _0x17b8c8 = _0x4a15e6.length;
        for (var _0x592d05 = 0; _0x592d05 < _0x17b8c8; _0x592d05++) {
            _0x4a15e6[_0x592d05] = _0x4a15e6[_0x592d05].replace(/^-?[0-9]*\.?[0-9]+/, '');
        }
    }
    var _0x57b6a4 = configJSON.configuration[0].ShowLyricsTwoLines;
    return _0x57b6a4 && (_0x4a15e6 = splitIN2(_0x4a15e6)), _0x4a15e6;
}
function isBlank(_0x4c5143) {
    var _0x5a4de7 = _0x4c5143.replace(/\s/g, '');
    return _0x5a4de7 = _0x5a4de7.replace(/<BR>/g, ''), _0x5a4de7.length > 0 ? false : true;
}
function splitIN2(_0x3f4e7b) {
    var _0x579ec8 = _0x3f4e7b.length;
    var _0x4e1b89 = new Array();
    for (var _0x473bd3 = 0; _0x473bd3 < _0x579ec8; _0x473bd3++) {
        var _0x45102f = isBlank(_0x3f4e7b[_0x473bd3]);
        var _0x2e7281 = _0x3f4e7b[_0x473bd3].split('<BR>');
        var _0x43676b = '';
        var _0x12dcbf = _0x2e7281.length;
        var _0x4f8037 = 1;
        if (!_0x45102f) {
            for (var _0x569fe5 = 0; _0x569fe5 < _0x12dcbf; _0x569fe5++) {
                _0x4f8037 == 2 ? (_0x43676b = _0x43676b + _0x2e7281[_0x569fe5], _0x4e1b89.push(_0x43676b), _0x43676b = '', _0x4f8037 = 1) : (_0x43676b = _0x43676b + _0x2e7281[_0x569fe5] + '<BR>', _0x4f8037++);
            }
            _0x4f8037 == 2 && _0x4e1b89.push(_0x43676b);
        } else {
            _0x4e1b89.push(_0x43676b);
        }
    }
    return _0x4e1b89;
}
function makeSlidesSameSize(_0x2d7f6b, _0x3f9dfb) {
    var _0x487975 = _0x2d7f6b.length;
    var _0x5ca32b = new Array();
    for (var _0x2447c5 = 0; _0x2447c5 < _0x487975; _0x2447c5++) {
        _0x3f9dfb[_0x2447c5] == null ? _0x5ca32b.push('') : _0x5ca32b.push(_0x3f9dfb[_0x2447c5]);
    }
    return _0x5ca32b;
}
function generateTagUI(_0x171806) {
    if (_0x171806 != null && _0x171806 != '') {
        var _0x286d8e = _0x171806.split(',');
        var _0x107223 = _0x286d8e.length;
        var _0x3e4a7b = '';
        for (var _0x2657f5 = 0; _0x2657f5 < _0x107223; _0x2657f5++) {
            var _0x647a8d = '<button type="button" class="btn btn-outline-secondary btn-sm tagbutton" value="' + _0x286d8e[_0x2657f5].toUpperCase() + '">' + _0x286d8e[_0x2657f5].toUpperCase() + '</button>\n';
            _0x3e4a7b += _0x647a8d;
        }
        $('#ly_tags').html(_0x3e4a7b);
        $('.tagbutton').on('click', function (_0x1d7f7e) {
            var _0x41c6e2 = $(_0x1d7f7e.target).attr('value');
            var _0x1f0eae = getTagVal(_0x41c6e2);
            $('#songnav_tags').val(_0x1f0eae).change();
        });
    } else {
        $('#ly_tags').html('');
    }
}
function getTagVal(_0x2124da) {
    const _0x23a38e = tagArr.length;
    for (var _0x27b355 = 0; _0x27b355 < _0x23a38e; _0x27b355++) {
        if (tagArr[_0x27b355] == _0x2124da) {
            return _0x27b355 + 1;
        }
    }
    return 0;
}
function generateCopyrightUI(_0x4c5a33) {
    $('#ly_copy').off('click');
    _0x4c5a33 != null && _0x4c5a33 != '' ? ($('#ly_copy').html(_0x4c5a33), $('#ly_copy').show(), $('#ly_copy').on('click', function () {
        $('#songnav_editbox').val(_0x4c5a33);
        sn_searchSongByAuthor();
    })) : ($('#ly_copy').html(''), $('#ly_copy').hide(), $('#ly_copy').off('click'));
}
function launchYT() {
    window.api.setYT(YTargs);
}
function checkForValidYT(_0x47d6bf) {
    let _0x20fbd9 = _0x47d6bf;
    return _0x20fbd9 = _0x20fbd9.split('?'), _0x20fbd9[0] == 'https://www.youtube.com/watch' ? true : false;
}