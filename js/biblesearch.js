async function search(_0x2d4cc3, _0x26fbe9) {
    if (_0x2d4cc3.length < 3) {
        return vvDialog('BIBLE SEARCH', 'Enter at least 3 characters to search'), false;
    }
    bibleGetData.command = 1;
    bibleGetData.bookval = $('#searchBook').val();
    bibleGetData.version = 1;
    const _0x135b94 = $('#bibleSearchSecondary').is(':checked');
    _0x135b94 && (bibleGetData.version = 2);
    bibleGetData.keyword = _0x2d4cc3;
    bibleGetData.searchType = $('#searchStyle').val();
    const _0xdf5802 = await window.api.getDataFromBible(bibleGetData);
    const _0x48267c = _0xdf5802.length;
    let _0x647916 = [];
    for (var _0xe515b6 = 0; _0xe515b6 < _0x48267c; _0xe515b6++) {
        let _0x1bfb4c = buildEachVerse(_0xdf5802[_0xe515b6], _0xe515b6);
        _0x647916.push(_0x1bfb4c);
    }
    $('#searchResultID').html(_0x647916);
    $('#searchSummaryID').html('Found ' + _0x48267c + ' results for \'' + _0x2d4cc3 + '\'');
    $('.iconDivClass').hide();
    const _0x2b562e = $('#bibleSearchHighlight').is(':checked');
    if (_0x2b562e) {
        let _0x576095 = { separateWordSearch: bibleGetData.searchType == 1 ? true : false };
        $('.bibleSearchSlideClass').mark(_0x2d4cc3, _0x576095);
    }
    _0x135b94 ? $('.bibleSearchSlideClass').css('font-family', bibleVersionJSON.version[configJSON.configuration[0].version2].selectedfont) : $('.bibleSearchSlideClass').css('font-family', bibleVersionJSON.version[configJSON.configuration[0].version1].selectedfont);
    $('.bibleSearchSlideClass').on('mouseenter', function () {
        const _0x54e666 = $(this).attr('index');
        const _0xbff95f = 'div[index=\'searchiconsgroup' + _0x54e666 + '\']';
        $(_0xbff95f).show();
    });
    $('.bibleSearchSlideClass').on('mouseleave', function () {
        const _0x2f3c27 = $(this).attr('index');
        $('.iconDivClass').hide();
    });
    $('.searchicon').on('click', function () {
        const _0x5985ee = $(this).attr('data-index');
        const _0x1b233f = $(this).attr('data-type');
        processSearchIcons(_0xdf5802[_0x5985ee], _0x1b233f);
    });
    $('#search-tab').tab('show');
}
function buildEachVerse_org(_0x33b168) {
    let _0x46528e = '';
    return _0x46528e += '<div>', _0x46528e += '<div>', _0x46528e += '<B>' + booknames[_0x33b168.bookNum - 1] + ' ' + _0x33b168.chNum + ':' + _0x33b168.verseNum + '</B> ' + _0x33b168.word, _0x46528e += '</div>', _0x46528e += '</div>', _0x46528e;
}
function buildEachVerse(_0x3c4419, _0x54ff50) {
    let _0x5a3fa9 = '';
    const _0x1c185a = '<div class="col-8">' + booknames[_0x3c4419.bookNum - 1] + ' ' + _0x3c4419.chNum + ':' + _0x3c4419.verseNum + '</div>';
    return _0x5a3fa9 += '<div class="col-4 bibleSearchSlideClass " index=' + _0x54ff50 + '>', _0x5a3fa9 += '<div class="card mb-2">', _0x5a3fa9 += '<div class="card-header">' + _0x1c185a + drawIcons(_0x54ff50) + '</div>', _0x5a3fa9 += '<div class="card-body">', _0x5a3fa9 += '<p class="card-text">' + _0x3c4419.word + '</p>', _0x5a3fa9 += '</div>', _0x5a3fa9 += '</div>', _0x5a3fa9 += '</div>', _0x5a3fa9;
}
function drawIcons(_0xc9535c) {
    let _0x20c5a6 = '';
    return _0x20c5a6 += '<div class="col-4 iconDivClass" index=searchiconsgroup' + _0xc9535c + '>', _0x20c5a6 += '<div class="btn-group">', _0x20c5a6 += '<a href="#" class="btn btn-outline-secondary btn-sm searchicon" data-type=search data-index=' + _0xc9535c + '>', _0x20c5a6 += '<i class="bi-search"></i>', _0x20c5a6 += '</a>', _0x20c5a6 += '<a href="#" class="btn btn-outline-secondary btn-sm searchicon" data-type=present data-index=' + _0xc9535c + '>', _0x20c5a6 += '<i class="bi-tv"></i>', _0x20c5a6 += '</a>', _0x20c5a6 += '<a href="#" class="btn btn-outline-secondary btn-sm searchicon" data-type=bookmark data-index=' + _0xc9535c + '>', _0x20c5a6 += '<i class="bi-bookmark-plus"></i>', _0x20c5a6 += '</a>', _0x20c5a6 += '</div>', _0x20c5a6 += '</div>', _0x20c5a6;
}
async function processSearchIcons(_0x1fcbf0, _0x3d5b66) {
    const _0x225814 = _0x1fcbf0;
    if (_0x3d5b66 == 'search') {
        $('#bibleTabSearchRef').val(booknames[_0x225814.bookNum - 1] + ' ' + _0x225814.chNum + ' ' + _0x225814.verseNum);
        scroll_to_view = true;
        await bibletab_searchReference();
        $('#verses-tab').tab('show');
        $('#bible-tab').tab('show');
    }
    _0x3d5b66 == 'present' && bibleremote_setVerseReference(_0x225814.bookNum, _0x225814.chNum, _0x225814.verseNum - 1);
    if (_0x3d5b66 == 'bookmark') {
        const _0x4393ea = {
            contenttype: 1,
            id: 0,
            songname: '',
            bookval: _0x225814.bookNum,
            chapterval: _0x225814.chNum,
            verseval: _0x225814.verseNum
        };
        scheduleObj.processAddVerse(_0x4393ea);
    }
}
function fill_searchBook() {
    const _0x350e5e = $('#searchBook');
    _0x350e5e.html('');
    let _0x5bda91 = '';
    _0x5bda91 += '<option value=' + 0 + '>' + 'All Books' + '</option>';
    for (var _0x2f3d87 = 0; _0x2f3d87 < booknames.length; _0x2f3d87++) {
        _0x5bda91 += '<option value=' + (_0x2f3d87 + 1) + '>' + booknames[_0x2f3d87] + '</option>';
    }
    _0x350e5e.append(_0x5bda91);
    _0x350e5e.val(0);
}