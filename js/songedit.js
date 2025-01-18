const songEditObj = new songEditClass();
function songEditClass() {
    this.editSongLyrics = _0x159b98;
    this.deleteSong = _0x316e2d;
    this.deleteCategory = _0x3c9e5d;
    this.exportCategory = _0x54a723;
    this.importSongXML = _0x314383;
    let _0x117c2e = false;
    let _0x48f9a8 = false;
    const _0x4ab7c8 = 0;
    const _0x1d882e = 1;
    const _0x37358a = 2;
    const _0x75e9a3 = 3;
    const _0x19d02d = 4;
    let _0x3042ee = true;
    let _0x2582e2 = {
        command: _0x4ab7c8,
        song: '',
        cat: ''
    };
    let _0x3e28ba = {
        id: 0,
        title1: '',
        title2: '',
        songnumber: '',
        selectedCategory: 'ALL',
        selectedPrimaryFont: '',
        selectedSecondaryFont: '',
        key: '',
        copyright: '',
        ytLink: '',
        lyrics1: [
            'aaaa',
            'bbb',
            '111'
        ],
        lyrics2: [
            'cccc',
            'dddd',
            '222'
        ],
        notes: '',
        tags: [
            'z',
            'y'
        ],
        timestamp: '',
        bkgndfname: '',
        slideseq: '',
        rating: 0,
        usagecount: 0,
        chordsavailable: false
    };
    let _0x37a334 = new Array();
    let _0x3d4f96 = new Array();
    let _0x404b7e = '';
    let _0x31df41 = '';
    let _0x32b039 = 1;
    const _0x1a61b5 = false;
    function _0x3c9e5d() {
        const _0x33ff59 = $('#songnav_category option:selected').text();
        if (_0x33ff59 == 'ALL') {
            vvDialog('Song Category', 'Can not delete ALL Category');
        } else {
            var _0x548c5b = 'Delete Song Category';
            var _0x164d43 = 'Are you sure you want to delete "' + _0x33ff59 + '" category?';
            vvConfirm(_0x548c5b, _0x164d43, _0x2020ea);
            async function _0x2020ea() {
                _0x2582e2.command = _0x75e9a3;
                _0x2582e2.cat = _0x33ff59;
                const _0xdfe9c6 = await window.api.setDataToSong(_0x2582e2);
                await songtab_fillCategory();
                await songtab_fillTitle();
                songtab_getSongLyrics(null, true, false);
            }
        }
    }
    function _0x316e2d() {
        _0x3e28ba.id = songtab_activeSong[0].id;
        _0x3e28ba.title1 = songtab_activeSong[0].name;
        _0x486562('ID: ' + _0x3e28ba.id + ' NAME: ' + _0x3e28ba.title1);
        var _0x1752d0 = 'Delete Song';
        var _0x30812b = 'Are you sure you want to delete this song?';
        vvConfirm(_0x1752d0, _0x30812b, _0x59257f);
        async function _0x59257f() {
            _0x2582e2.command = _0x37358a;
            _0x2582e2.song = _0x3e28ba;
            _0x486562('command: ' + _0x2582e2.command);
            const _0x5a8631 = await window.api.setDataToSong(_0x2582e2);
            songtab_fillTitle();
        }
    }
    async function _0x54a723() {
        const _0x5a0f4c = $('#songnav_category option:selected').text();
        if (!_0x3a1e8b(_0x5a0f4c)) {
            _0x2582e2.command = _0x19d02d;
            _0x2582e2.cat = _0x5a0f4c;
            const _0x39c1cb = await window.api.setDataToSong(_0x2582e2);
            return _0x39c1cb ? (vvDialog('Song Database', 'Song database saved to Desktop under the "vvexport" folder'), true) : (vvDialog('Song Database', 'Export failed. Please contact verseview@gmail.com'), false);
        } else {
            return vvDialog('Song Database', 'Only user added lyrics can be exported'), false;
        }
    }
    function _0x3a1e8b(_0x6d25fe) {
        if (apple) {
            return false;
        }
        var _0x546507 = _0x6d25fe.toLowerCase();
        return _0x546507 = _0x546507.split(' '), _0x546507[0] == 'vv' || _0x546507[0] == 'all' ? true : false;
    }
    async function _0x314383() {
        const _0xf904de = await window.api.openSongXMLFile();
        _0xf904de ? (vvDialog('Song Database', 'Import Successful'), songtab_fillCategory()) : vvDialog('Song Database', 'Import Failed');
    }
    async function _0x159b98(_0x78cede) {
        _0x3042ee = _0x78cede;
        var _0x55faf5 = new bootstrap.Modal(document.getElementById('p4'), {
            backdrop: 'static',
            keyboard: false
        });
        _0x55faf5.show();
        cursorKeysForNav = false;
        _0x48f9a8 = false;
        _0xdfb0c1();
        !_0x117c2e && (_0x31ce87(), _0x117c2e = true);
        if (_0x3042ee) {
            _0x453732(songtab_activeSong);
        } else {
            var _0x244941 = await songtab_getCategories();
            _0x311c0a(_0x244941, 0);
            _0x833dd();
            _0x154f32();
        }
    }
    function _0xdfb0c1() {
        $('#songEdit_newcat_id').hide();
        $('#songEdit_addcatok_id').hide();
        $('#songEdit_newfont_id').hide();
        $('#songEdit_newfontok_id').hide();
        _0x3042ee ? ($('#songEdit_saveasnew_button_id').show(), _0x400f01(songtab_activeSong[0].cat) ? $('#songEdit_save_button_id').hide() : $('#songEdit_save_button_id').show()) : ($('#songEdit_saveasnew_button_id').hide(), $('#songEdit_save_button_id').show());
    }
    function _0x31ce87() {
        $('#songEdit_prev_button_id').on('click', function () {
            _0x8204d8();
        });
        $('#songEdit_next_button_id').on('click', function () {
            _0x5b57bf();
        });
        $('#songEdit_add_button_id').on('click', function () {
            _0x26476a();
        });
        $('#songEdit_duplicate_button_id').on('click', function () {
            _0x596454();
        });
        $('#songEdit_delete_button_id').on('click', function () {
            _0x4b5ba4();
        });
        $('#songEdit_create_button_id').on('click', function () {
            _0x4f4841();
        });
        $('#songEdit_present_button_id').on('click', function () {
            se_processPresent();
        });
        $('#songEdit_save_button_id').on('click', function () {
            _0x486562('Save button pressed..');
            _0x3cc2cc(false);
        });
        $('#songEdit_saveasnew_button_id').on('click', function () {
            _0x53dcf9();
        });
        $('#songEdit_cancel_button_id').on('click', function () {
            _0x2f298e();
        });
        $('#songEdit_addcat_id').on('click', function () {
            $('#songEdit_addcat_id').hide();
            $('#songEdit_newcat_id').show();
            $('#songEdit_addcatok_id').show();
        });
        $('#songEdit_addcatok_id').on('click', function () {
            _0x846c67();
        });
        $('#songEdit_addFont_id').on('click', function () {
            $('.addfontbuttonclass').hide();
            $('#songEdit_newfont_id').show();
            $('#songEdit_newfontok_id').show();
        });
        $('#songEdit_newfontok_id').on('click', function () {
            _0x5075f0();
        });
        $('#songEdit_title_id').on('change', function () {
            _0x48f9a8 = true;
        });
        $('#songEdit_title2_id').on('change', function () {
            _0x48f9a8 = true;
        });
        $('#songEdit_newcat_id').on('change', function () {
            _0x48f9a8 = true;
        });
        $('#songEdit_newfont_id').on('change', function () {
            _0x48f9a8 = true;
        });
        $('#songEdit_key_id').on('change', function () {
            _0x48f9a8 = true;
        });
        $('#songEdit_copyright_id').on('change', function () {
            _0x48f9a8 = true;
        });
        $('#songEdit_youtube_id').on('change', function () {
            _0x48f9a8 = true;
        });
        $('#songEdit_notes_id').on('change', function () {
            _0x48f9a8 = true;
        });
        $('#songEdit_tags_id').on('change', function () {
            _0x48f9a8 = true;
        });
        $('#songEdit_category_id').on('change', function () {
            _0x48f9a8 = true;
        });
        $('#songEdit_primaryFont_id').on('change', function () {
            _0x3e28ba.selectedPrimaryFont = _0x3d4f96[$('#songEdit_primaryFont_id').val()];
            _0x4cdd99();
            _0x48f9a8 = true;
        });
        $('#songEdit_secfont_id').on('change', function () {
            _0x3e28ba.selectedSecondaryFont = _0x3d4f96[$('#songEdit_secfont_id').val()];
            _0x5315b1();
            _0x48f9a8 = true;
        });
    }
    async function _0x453732(_0x5997cb) {
        var _0x153d7d = await songtab_getCategories();
        _0x311c0a(_0x153d7d, 0);
        _0x833dd();
        _0x3e28ba.id = _0x5997cb[0].id;
        _0x3e28ba.title1 = _0x5997cb[0].name;
        _0x3e28ba.title2 = _0x5997cb[0].title2;
        _0x3e28ba.songnumber = _0x5997cb[0].subcat;
        _0x3e28ba.selectedCategory = _0x5997cb[0].cat;
        _0x3e28ba.selectedPrimaryFont = _0x5997cb[0].font;
        _0x3e28ba.selectedSecondaryFont = _0x5997cb[0].font2;
        _0x3e28ba.key = _0x5997cb[0].key;
        _0x3e28ba.copyright = _0x5997cb[0].copy;
        _0x3e28ba.ytLink = _0x5997cb[0].yvideo;
        _0x3e28ba.lyrics1 = _0x4675ca(_0x5997cb[0].lyrics.replace(/<BR>|<br>/g, '\n'));
        var _0x1bae35 = _0x5997cb[0].lyrics2;
        _0x1bae35 != null ? _0x3e28ba.lyrics2 = _0x4675ca(_0x1bae35.replace(/<BR>|<br>/g, '\n')) : _0x3e28ba.lyrics2 = new Array();
        _0x3e28ba.lyrics2 = _0x4e3249(_0x3e28ba.lyrics1, _0x3e28ba.lyrics2);
        _0x3e28ba.notes = _0x5997cb[0].notes;
        _0x3e28ba.tags = _0x5997cb[0].tags;
        _0x3e28ba.timestamp = _0x5997cb[0].timestamp;
        _0x3e28ba.bkgndfname = _0x5997cb[0].bkgndfname;
        _0x3e28ba.slideseq = _0x5997cb[0].slideseq;
        _0x3e28ba.rating = _0x5997cb[0].rating;
        _0x3e28ba.usagecount = _0x5997cb[0].usagecount;
        _0x3e28ba.chordsavailable = _0x5997cb[0].chordsavailable;
        _0x18fd73();
    }
    function _0x18fd73() {
        $('#songEdit_title_id').val(_0x3e28ba.title1);
        _0x3e28ba.title2 != null && _0x3e28ba.title2 != 'null' ? $('#songEdit_title2_id').val(_0x3e28ba.title2) : $('#songEdit_title2_id').val('');
        _0x3e28ba.songnumber != null && _0x3e28ba.songnumber != 'undefined' ? $('#songEdit_songnumber_id').val(_0x3e28ba.songnumber) : $('#songEdit_songnumber_id').val('');
        _0x1ad335();
        _0x365e18();
        _0x2ec28a();
        $('#songEdit_key_id').val(_0x3e28ba.key);
        $('#songEdit_copyright_id').val(_0x3e28ba.copyright);
        $('#songEdit_youtube_id').val(_0x3e28ba.ytLink);
        $('#songEdit_notes_id').val(_0x3e28ba.notes);
        $('#songEdit_tags_id').val(_0x3e28ba.tags);
    }
    function _0x1ad335() {
        var _0x4ab93f = _0x1a13d5(_0x37a334, _0x3e28ba.selectedCategory);
        _0x4ab93f == -1 && (_0x4ab93f = _0x1a13d5(_0x37a334, 'My Songs'));
        $('#songEdit_category_id').val(_0x4ab93f);
    }
    function _0x365e18() {
        var _0x19587a = _0x1a13d5(_0x3d4f96, _0x3e28ba.selectedPrimaryFont);
        _0x19587a != -1 ? $('#songEdit_primaryFont_id').val(_0x19587a) : $('#songEdit_primaryFont_id').val(0);
        var _0x19587a = _0x1a13d5(_0x3d4f96, _0x3e28ba.selectedSecondaryFont);
        _0x19587a != -1 ? $('#songEdit_secfont_id').val(_0x19587a) : $('#songEdit_secfont_id').val(0);
    }
    function _0x1a13d5(_0x932bc7, _0x5cd407) {
        var _0xeba379 = _0x932bc7.length;
        for (var _0x4177d5 = 0; _0x4177d5 < _0xeba379; _0x4177d5++) {
            if (_0x932bc7[_0x4177d5] == _0x5cd407) {
                return _0x4177d5;
            }
        }
        return -1;
    }
    function _0x833dd() {
        clearSelectList('songEdit_primaryFont_id');
        clearSelectList('songEdit_secfont_id');
        var _0x269290 = document.createDocumentFragment();
        var _0x264bb4 = document.createDocumentFragment();
        var _0x1cd456 = document.getElementById('songEdit_primaryFont_id');
        var _0x3d89fc = document.getElementById('songEdit_secfont_id');
        _0x3d4f96 = new Array();
        _0x3d4f96 = systemFontList;
        var _0x33852c = _0x3d4f96.length;
        var _0x363f33 = '';
        for (var _0xe8f981 = 0; _0xe8f981 < _0x33852c; _0xe8f981++) {
            var _0x361731 = document.createElement('option');
            _0x361731.innerHTML = _0x3d4f96[_0xe8f981];
            _0x361731.value = _0xe8f981;
            _0x269290.appendChild(_0x361731);
            var _0x38eb2d = document.createElement('option');
            _0x38eb2d.innerHTML = _0x3d4f96[_0xe8f981];
            _0x38eb2d.value = _0xe8f981;
            _0x264bb4.appendChild(_0x38eb2d);
        }
        _0x1cd456.appendChild(_0x269290);
        _0x3d89fc.appendChild(_0x264bb4);
    }
    function _0x311c0a(_0x290c68, _0x148d49) {
        clearSelectList('songEdit_category_id');
        const _0x535c02 = $('#songEdit_category_id');
        var _0x175835 = '';
        if (_0x290c68 != null) {
            _0x37a334 = new Array();
            const _0x40e58d = _0x290c68.length;
            var _0x2cab00 = true;
            var _0x3ab2ea = 0;
            for (var _0x522b5c = 0; _0x522b5c < _0x40e58d; _0x522b5c++) {
                var _0x37f6b6 = _0x400f01(_0x290c68[_0x522b5c].cat);
                !_0x37f6b6 && (_0x175835 += '<option value=' + _0x3ab2ea + '>' + _0x290c68[_0x522b5c].cat + '</option>', _0x37a334.push(_0x290c68[_0x522b5c].cat), _0x290c68[_0x522b5c].cat == 'My Songs' && (_0x2cab00 = false), _0x3ab2ea++);
            }
            _0x2cab00 && (_0x175835 += '<option value=' + _0x3ab2ea + '>' + 'My Songs' + '</option>', _0x37a334.push('My Songs'));
            _0x535c02.append(_0x175835);
            _0x535c02.val(_0x148d49);
        } else {
            const _0x2df356 = _0x37a334.length;
            for (var _0x522b5c = 0; _0x522b5c < _0x2df356; _0x522b5c++) {
                _0x175835 += '<option value=' + _0x522b5c + '>' + _0x37a334[_0x522b5c] + '</option>';
            }
            _0x535c02.append(_0x175835);
            _0x535c02.val(0);
        }
    }
    function _0x400f01(_0x2b5ee8) {
        var _0x21f2ca = _0x2b5ee8.split(' ');
        return _0x21f2ca = _0x21f2ca[0].toLowerCase(), _0x21f2ca == 'vv' ? true : false;
    }
    function _0x154f32() {
        _0x3e28ba.id = 0;
        _0x3e28ba.title1 = '';
        _0x3e28ba.title2 = '';
        _0x3e28ba.songnumber = '';
        _0x3e28ba.selectedCategory = 'My Songs';
        _0x3e28ba.selectedPrimaryFont = 'Cabin';
        _0x3e28ba.selectedSecondaryFont = 'Cabin';
        _0x3e28ba.key = '';
        _0x3e28ba.copyright = '';
        _0x3e28ba.ytLink = '';
        _0x3e28ba.lyrics1 = new Array();
        _0x3e28ba.lyrics2 = new Array();
        _0x3e28ba.lyrics1.push('');
        _0x3e28ba.lyrics2.push('');
        _0x3e28ba.notes = '';
        _0x3e28ba.tags = '';
        _0x3e28ba.timestamp = '';
        _0x3e28ba.bkgndfname = '';
        _0x3e28ba.slideseq = '';
        _0x3e28ba.rating = '';
        _0x3e28ba.usagecount = '';
        _0x3e28ba.chordsavailable = false;
        _0x18fd73();
    }
    function _0x959b80() {
        var _0x3e2d24 = _0x3e28ba.lyrics1.length;
        _0x3e28ba.lyrics1 = new Array();
        _0x3e28ba.lyrics2 = new Array();
        for (var _0x3bf7aa = 1; _0x3bf7aa <= _0x3e2d24; _0x3bf7aa++) {
            var _0x380b3a = '#t' + _0x3bf7aa + '-tab-pane .primarytabs';
            var _0x13ae9c = '#t' + _0x3bf7aa + '-tab-pane .secondarytabs';
            _0x3e28ba.lyrics1.push($(_0x380b3a).val());
            _0x3e28ba.lyrics2.push($(_0x13ae9c).val());
        }
        _0x3e28ba.title1 = $('#songEdit_title_id').val();
        _0x3e28ba.title2 = $('#songEdit_title2_id').val();
        _0x3e28ba.songnumber = $('#songEdit_songnumber_id').val();
        _0x3e28ba.selectedCategory = _0x37a334[$('#songEdit_category_id').val()];
        _0x3e28ba.selectedPrimaryFont = _0x3d4f96[$('#songEdit_primaryFont_id').val()];
        _0x3e28ba.selectedSecondaryFont = _0x3d4f96[$('#songEdit_secfont_id').val()];
        _0x3e28ba.key = $('#songEdit_key_id').val();
        _0x3e28ba.copyright = $('#songEdit_copyright_id').val();
        _0x3e28ba.ytLink = $('#songEdit_youtube_id').val();
        _0x3e28ba.notes = $('#songEdit_notes_id').val();
        _0x3e28ba.tags = $('#songEdit_tags_id').val();
        _0x3e28ba.bkgndfname = '';
        _0x3e28ba.slideseq = '';
        _0x3e28ba.rating = 0;
        _0x3e28ba.usagecount = 0;
        _0x3e28ba.chordsavailable = false;
        _0x3e28ba.timestamp = _0x1f181e();
    }
    function _0x5aec27() {
        var _0xb1ac28 = _0x3e28ba.lyrics1.length;
        _0x3e28ba.lyrics1 = new Array();
        _0x3e28ba.lyrics2 = new Array();
        var _0x172cf9 = '';
        var _0x2d3a85 = '';
        for (var _0x1fd142 = 1; _0x1fd142 <= _0xb1ac28; _0x1fd142++) {
            var _0x5f2f14 = '#t' + _0x1fd142 + '-tab-pane .primarytabs';
            var _0x2b2733 = '#t' + _0x1fd142 + '-tab-pane .secondarytabs';
            let _0x37a3ca = $(_0x5f2f14).val();
            _0x172cf9 += _0x37a3ca.replace(/\n/g, '<BR>');
            let _0x3db11e = $(_0x2b2733).val();
            var _0x12fc46 = _0x3db11e.replace(/\n/g, '<BR>');
            _0x508a5d(_0x3db11e) ? _0x2d3a85 += '' : _0x2d3a85 += _0x12fc46;
            _0x172cf9 += '<slide>';
            _0x2d3a85 += '<slide>';
        }
        _0x3e28ba.lyrics1.push(_0x172cf9);
        _0x3e28ba.lyrics2.push(_0x2d3a85);
    }
    function _0x2ec28a() {
        const _0x3f72b4 = $('#songedit_lyricsrow');
        let _0x4c1149 = '<ul class="nav nav-tabs" role="tablist">';
        var _0x231eff = _0x3e28ba.lyrics1.length;
        _0x486562('Length: ' + _0x231eff);
        for (var _0x1085bd = 1; _0x1085bd <= _0x231eff; _0x1085bd++) {
            var _0x19058e = '';
            _0x1085bd == 1 && (_0x19058e = 'active');
            _0x4c1149 += '<li class="nav-item" role="presentation">';
            _0x4c1149 += '<button class="nav-link tabpills ' + _0x19058e + '" id="t' + _0x1085bd + '-tab" data-bs-toggle="tab" data-bs-target="#t' + _0x1085bd + '-tab-pane" type="button" role="tab">' + _0x1085bd + '</button>';
            _0x4c1149 += '</li>';
        }
        _0x4c1149 += '</ul>';
        _0x4c1149 += '<div class="tab-content">';
        for (var _0x1085bd = 1; _0x1085bd <= _0x231eff; _0x1085bd++) {
            var _0x19058e = '';
            _0x1085bd == 1 && (_0x19058e = 'active');
            _0x4c1149 += '<div class="tab-pane fade show ' + _0x19058e + ' t' + _0x1085bd + '-tab-pane" id="t' + _0x1085bd + '-tab-pane" role="tabpanel" aria-labelledby="t' + _0x1085bd + '-tab" tabindex="0">';
            _0x4c1149 += '<div class="row py-2">';
            _0x4c1149 += '<div class="col-6">';
            let _0xb158e8 = _0x3e28ba.lyrics1[_0x1085bd - 1];
            _0xb158e8 == null && (_0xb158e8 = '');
            _0x4c1149 += '<textarea spellcheck=\u201Dfalse\u201D class="form-control primarytabs" rows="6">' + _0xb158e8 + '</textarea>';
            _0x4c1149 += '</div>';
            _0x4c1149 += '<div class="col-6">';
            let _0x40ab33 = _0x3e28ba.lyrics2[_0x1085bd - 1];
            _0x40ab33 == null && (_0x40ab33 = '');
            _0x4c1149 += '<textarea spellcheck=\u201Dfalse\u201D class="form-control secondarytabs" rows="6">' + _0x40ab33 + '</textarea>';
            _0x4c1149 += '</div>';
            _0x4c1149 += '</div>';
            _0x4c1149 += '</div>';
        }
        _0x4c1149 += '</div>';
        document.getElementById('songedit_lyricsrow').innerHTML = _0x4c1149;
        $('.primarytabs').css('font-family', _0x3e28ba.selectedPrimaryFont);
        $('.secondarytabs').css('font-family', _0x3e28ba.selectedSecondaryFont);
        $('.tabpills').on('click', function (_0x37c292) {
            var _0x2579d1 = $(_0x37c292.target).attr('id');
            var _0x364a2b = _0x2579d1.split('-');
            _0x364a2b = _0x364a2b[0].split('t');
            _0x32b039 = _0x364a2b[1];
        });
    }
    function _0x5075f0() {
        let _0x233dd7 = $('#songEdit_newfont_id').val();
        _0x486562('New Font: ' + _0x233dd7);
        var _0x558cc9 = _0x1003ad(_0x233dd7);
        _0x558cc9 ? (addFont(_0x233dd7), _0x833dd(), _0x365e18(), $('.addfontbuttonclass').show(), $('#songEdit_newfont_id').hide(), $('#songEdit_newfontok_id').hide()) : vvDialog('Song Edit Font', 'Invalid Font name');
    }
    function _0x4cdd99() {
        $('.primarytabs').css('font-family', _0x3e28ba.selectedPrimaryFont);
    }
    function _0x5315b1() {
        $('.secondarytabs').css('font-family', _0x3e28ba.selectedSecondaryFont);
    }
    function _0x1003ad(_0x449e2b) {
        return true;
    }
    function _0x846c67() {
        let _0x95ed92 = $('#songEdit_newcat_id').val();
        _0x486562('New Category: ' + _0x95ed92);
        const _0x14733f = _0x23dee4(_0x95ed92);
        _0x14733f && (_0x37a334.push(_0x95ed92), _0x3e28ba.selectedCategory = _0x95ed92, _0x311c0a(), _0x1ad335(), $('#songEdit_addcat_id').show(), $('#songEdit_newcat_id').hide(), $('#songEdit_addcatok_id').hide());
    }
    function _0x23dee4(_0x25808c) {
        return _0x25808c != 'ALL' ? true : (vvDialog('Song Category', 'ALL is reserved Category'), false);
    }
    function _0x8204d8() {
        const _0x3531d4 = 1;
        var _0x6c143b = _0x32b039 * 1 - 1;
        if (_0x6c143b >= _0x3531d4) {
            _0x959b80();
            _0x4153d8(_0x32b039, _0x6c143b);
            _0x2ec28a();
            _0x32b039 = _0x6c143b;
            _0x369bc6(_0x6c143b);
        } else {
        }
    }
    function _0x5b57bf() {
        const _0x3d3343 = _0x3e28ba.lyrics1.length + 1;
        var _0x307188 = _0x32b039 * 1 + 1;
        if (_0x307188 < _0x3d3343) {
            _0x959b80();
            _0x4153d8(_0x32b039, _0x307188);
            _0x2ec28a();
            _0x32b039 = _0x307188;
            _0x369bc6(_0x307188);
        } else {
        }
    }
    function _0x4153d8(_0x4cfb27, _0x56aa6d) {
        let _0x3866bc = _0x3e28ba.lyrics1[_0x4cfb27 - 1];
        let _0x553e1c = _0x3e28ba.lyrics2[_0x4cfb27 - 1];
        _0x3e28ba.lyrics1[_0x4cfb27 - 1] = _0x3e28ba.lyrics1[_0x56aa6d - 1];
        _0x3e28ba.lyrics2[_0x4cfb27 - 1] = _0x3e28ba.lyrics2[_0x56aa6d - 1];
        _0x3e28ba.lyrics1[_0x56aa6d - 1] = _0x3866bc;
        _0x3e28ba.lyrics2[_0x56aa6d - 1] = _0x553e1c;
    }
    function _0x26476a() {
        const _0x5eedb0 = _0x3e28ba.lyrics1.length + 1;
        if (_0x5eedb0 > 50) {
            return vvDialog('Song Edit', 'Reached maximum number of slides'), false;
        }
        _0x959b80();
        _0x3e28ba.lyrics1.push('');
        _0x3e28ba.lyrics2.push('');
        var _0x5b0d90 = _0x32b039;
        _0x2ec28a();
        _0x32b039 = _0x5b0d90;
        _0x369bc6(_0x5b0d90);
    }
    function _0x596454() {
        const _0x3f4edb = _0x3e28ba.lyrics1.length + 1;
        _0x959b80();
        _0x3e28ba.lyrics1.push(_0x3e28ba.lyrics1[_0x32b039 - 1]);
        _0x3e28ba.lyrics2.push(_0x3e28ba.lyrics2[_0x32b039 - 1]);
        var _0x36caa6 = _0x32b039;
        _0x2ec28a();
        _0x32b039 = _0x36caa6;
        _0x369bc6(_0x36caa6);
    }
    function _0x4b5ba4() {
        _0x959b80();
        _0x3e28ba.lyrics1.splice(_0x32b039 - 1, 1);
        _0x3e28ba.lyrics2.splice(_0x32b039 - 1, 1);
        _0x32b039--;
        _0x2ec28a();
        _0x369bc6(_0x32b039);
    }
    function _0x4f4841() {
        _0x959b80();
        _0x2e7dec();
        var _0x2bbaaa = new bootstrap.Modal(document.getElementById('p5'), {
            backdrop: 'static',
            keyboard: false
        });
        _0x2bbaaa.show();
        $('#se_generateID').on('click', function () {
            _0x4c7e53();
        });
        $('#se_generateMunglishID').on('click', function () {
            _0x499469();
        });
        $('#se_generateCancelID').on('click', function () {
            _0x315f07();
        });
    }
    function _0x2e7dec() {
        var _0xa51d4f = _0x3e28ba.lyrics1.length;
        var _0x11eb61 = '';
        var _0x5b8139 = '';
        for (let _0x34727d = 0; _0x34727d < _0xa51d4f; _0x34727d++) {
            _0x11eb61 += _0x3e28ba.lyrics1[_0x34727d] + '\n\n\n';
            _0x5b8139 += _0x3e28ba.lyrics2[_0x34727d] + '\n\n\n';
        }
        _0x11eb61 = _0x11eb61.slice(0, -3);
        _0x5b8139 = _0x5b8139.slice(0, -3);
        $('#se_quickSlideID').val(_0x11eb61);
        $('#se_quickSlideID_2').val(_0x5b8139);
    }
    function _0x315f07() {
        _0x36e29a();
        $('#p5').modal('hide');
    }
    function _0x36e29a() {
        $('#se_quickSlideID').val('');
        $('#se_quickSlideID_2').val('');
        $('#se_generateID').off('click');
        $('#se_generateMunglishID').off('click');
        $('#se_generateCancelID').off('click');
    }
    function _0x4c7e53() {
        var _0x7ef682 = $('#se_quickSlideID').val();
        var _0xbb3af7 = _0x7ef682.split('\n\n\n');
        var _0x46dd5b = $('#se_quickSlideID_2').val();
        var _0x1a3b02 = _0x46dd5b.split('\n\n\n');
        _0x3e28ba.lyrics1 = new Array();
        _0x3e28ba.lyrics2 = new Array();
        _0x3e28ba.lyrics1 = _0xbb3af7;
        _0x3e28ba.lyrics2 = _0x1a3b02;
        _0x2ec28a();
        _0x32b039 = 1;
        _0x369bc6(_0x32b039);
        _0x315f07();
    }
    function _0x369bc6(_0x141d59) {
        var _0x5d37eb = '#t' + _0x141d59 + '-tab';
        $(_0x5d37eb).tab('show');
    }
    function _0x499469() {
        var _0x10e607 = document.getElementById('se_quickSlideID').value;
        var _0x5e7e06 = _0x10e607.split('\n');
        var _0x22e224 = _0x5e7e06.length;
        var _0x77637a = new valsonachanTransliteration();
        var _0x3ddc75 = '';
        for (var _0x2e9737 = 0; _0x2e9737 < _0x22e224; _0x2e9737++) {
            _0x3ddc75 += _0x77637a.munglishLine(_0x5e7e06[_0x2e9737]) + '\n';
        }
        _0x77637a = null;
        document.getElementById('se_quickSlideID_2').value = _0x3ddc75;
        vvDialog('Lyrics Transliteration', 'Transliteration is only valid for Malayalam and it is not 100% accurate.');
    }
    function _0x20162d(_0x418bb1) {
        var _0x49f703 = '';
        var _0x50763c = _0x418bb1.length;
        for (var _0xd0862c = 0; _0xd0862c < _0x50763c; _0xd0862c++) {
            _0x49f703 = _0x49f703 + _0x418bb1[_0xd0862c] + '<slide>';
        }
        return _0x49f703;
    }
    function _0x4675ca(_0x180ea8) {
        var _0x145bc1 = new Array();
        _0x145bc1 = _0x180ea8.split('<slide>');
        _0x145bc1.splice(_0x145bc1.length - 1, 1);
        var _0x1ea476 = true;
        if (_0x1ea476) {
            var _0x4ea26b = _0x145bc1.length;
            for (var _0x28c13e = 0; _0x28c13e < _0x4ea26b; _0x28c13e++) {
                _0x145bc1[_0x28c13e] = _0x145bc1[_0x28c13e].replace(/^-?[0-9]*\.?[0-9]+/, '');
            }
        }
        return _0x145bc1;
    }
    function _0x4e3249(_0x451469, _0x55cf6a) {
        var _0x1a3da3 = _0x451469.length;
        var _0x5e6eaa = new Array();
        for (var _0x15cead = 0; _0x15cead < _0x1a3da3; _0x15cead++) {
            _0x55cf6a[_0x15cead] == null ? _0x5e6eaa.push('') : _0x5e6eaa.push(_0x55cf6a[_0x15cead]);
        }
        return _0x5e6eaa;
    }
    async function _0x3cc2cc(_0x5e6b74) {
        _0x3042ee ? (_0x2582e2.command = _0x1d882e, _0x5e6b74 ? _0x2582e2.command = _0x4ab7c8 : _0x2582e2.command = _0x1d882e) : _0x2582e2.command = _0x4ab7c8;
        _0x959b80();
        const _0x30fea6 = _0x151404();
        if (_0x30fea6) {
            _0x5aec27();
            _0x2582e2.song = _0x3e28ba;
            let _0xf9bfc = 0;
            try {
                _0xf9bfc = await window.api.setDataToSong(_0x2582e2);
            } catch (_0x8ab3a0) {
                console.log('Error: ' + _0x8ab3a0);
            }
            await songtab_fillTitle();
            let _0x57774d;
            _0x2582e2.command == _0x4ab7c8 ? (_0x486562('ADD Complete: ' + _0xf9bfc), _0x57774d = _0xf9bfc) : (_0x486562('Number of rows updated: ' + _0xf9bfc + ' with ID: ' + _0x3e28ba.id), _0x57774d = _0x3e28ba.id);
            songtab_fillCategory();
            songtab_getSongLyrics(_0x57774d, true, false);
            _0x580851();
        } else {
            console.log('Error with data entry');
        }
    }
    async function _0x53dcf9() {
        _0x3cc2cc(true);
    }
    function _0x2f298e() {
        if (!_0x48f9a8) {
            _0x580851();
        } else {
            var _0x596fd0 = 'Add Edit Songs';
            var _0x908a5d = 'Are you sure you want to close without saving?';
            vvConfirm(_0x596fd0, _0x908a5d, _0x580851);
        }
    }
    function _0x580851() {
        _0x37fa70();
        $('#p4').modal('hide');
        cursorKeysForNav = true;
    }
    function _0x1f181e() {
        var _0x155cb7 = new Date();
        var _0x473f22 = parseInt(_0x155cb7.getMonth()) + 1;
        var _0x25295a = _0x155cb7.getDate();
        var _0x5ceecb = _0x155cb7.getFullYear();
        var _0x114894 = _0x155cb7.getHours();
        var _0x5a0fe8 = _0x155cb7.getMinutes();
        var _0x74a7b2 = _0x473f22 + '/' + _0x25295a + '/' + _0x5ceecb + '  ' + _0x114894 + ':' + _0x5a0fe8;
        return _0x486562('Timestamp: ' + _0x74a7b2), _0x74a7b2;
    }
    function _0x151404() {
        const _0x4e8036 = _0x340e71(_0x3e28ba.title1);
        let _0x5c3b14 = true;
        !_0x4e8036 ? (vvDialog('Add Edit Songs', 'Enter a valid Song Name'), _0x5c3b14 = false) : _0x3e28ba.title1 = _0x4e8036;
        const _0x73d1e3 = _0x340e71(_0x3e28ba.title2);
        !_0x73d1e3 ? _0x3e28ba.title2 = '' : _0x3e28ba.title2 = _0x73d1e3;
        const _0x9298c4 = _0x4dfdc7(_0x3e28ba.ytLink);
        if (_0x9298c4) {
        } else {
            vvDialog('Add Edit Songs', 'Enter valid You Tube video link.');
            _0x5c3b14 = false;
        }
        return _0x486562('Song valid: ' + _0x5c3b14), _0x5c3b14;
    }
    function _0x4dfdc7(_0x1bd188) {
        var _0x29f65c = _0x1bd188.replace(/ /gi, '');
        if (_0x29f65c == '') {
            return $('#songEdit_youtube_id').val(''), true;
        }
        var _0x7fbd9b = _0x29f65c.split('&');
        _0x29f65c = _0x7fbd9b[0];
        $('#songEdit_youtube_id').val(_0x29f65c);
        _0x7fbd9b = _0x29f65c.split('?v=');
        var _0xa25344 = 'https://www.youtube.com/watch';
        return _0x7fbd9b[0] != _0xa25344 ? false : true;
    }
    function _0x508a5d(_0x1a24b4) {
        var _0x30748f = _0x1a24b4.replace(/\s/g, '');
        return _0x30748f = _0x30748f.replace(/<BR>/g, ''), _0x30748f.length > 0 ? false : true;
    }
    function _0x340e71(_0x409120) {
        let _0x43f3ac = _0x409120.replace(/^\s+|\s+$/g, '');
        _0x43f3ac = _0x43f3ac.replace(/\s\s+/g, ' ');
        if (_0x43f3ac == '') {
            return false;
        }
        return _0x43f3ac;
    }
    function _0x37fa70() {
        $('#songEdit_newcat_id').hide();
        $('#songEdit_addcatok_id').hide();
        $('#songEdit_newfont_id').hide();
        $('#songEdit_newfontok_id').hide();
        $('#songEdit_addcat_id').show();
        $('.addfontbuttonclass').show();
    }
    function _0x486562(_0xc8de61) {
        _0x1a61b5 && console.log('SONGEDIT: ' + _0xc8de61);
    }
}