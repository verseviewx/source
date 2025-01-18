const themeObj = new thememanager();
function thememanager() {
    const _0x1a1f85 = 480;
    const _0x4734b1 = 270;
    const _0x3007e3 = 1920;
    const _0xc8008b = 1080;
    let _0x8a25d6 = new Array(0, 0);
    let _0x5bfeae = new Array(0, 0);
    let _0x5c658c = true;
    let _0x2a2a98 = false;
    let _0x1d8886 = 0;
    this.init = _0x23da6f;
    function _0x23da6f() {
        _0x925c54(0);
        _0x133272();
    }
    function _0x133272() {
        $('#tb_presets').on('change', function () {
            _0x1d8886 = $(this).val();
            _0x52f0f7(_0x1d8886);
        });
        $('#themebuilder_save_button').on('click', function () {
            _0x21ca2e();
        });
        $('#themebuilder_delete_button').on('click', function () {
            _0x482889();
        });
        $('#tb_canvas').on('mousedown', function (_0x3e8937) {
            _0x321221(_0x3e8937);
        });
        $('#tb_maxFontSize').on('input', function (_0x5dff99) {
            $('#tb_maxFontSize_val').val($('#tb_maxFontSize').val());
        });
        $('#tb_linespace').on('input', function (_0x53ce10) {
            $('#tb_linespace_val').val($('#tb_linespace').val());
        });
    }
    function _0x925c54(_0x14ecb1) {
        const _0xcac05a = themeArray.length;
        let _0x3daaf2 = '';
        clearSelectList('tb_presets');
        for (var _0x19892a = 0; _0x19892a < _0xcac05a; _0x19892a++) {
            _0x3daaf2 += '<option value=' + _0x19892a + '>' + themeArray[_0x19892a].themeName + '</option>';
        }
        _0x3daaf2 += '<option value=' + _0xcac05a + '>' + 'New Preset' + '</option>';
        $('#tb_presets').append(_0x3daaf2);
        _0x52f0f7(_0x14ecb1);
        $('#tb_presets').val(_0x14ecb1);
    }
    function _0x52f0f7(_0x173a77) {
        if (_0x173a77 == themeArray.length) {
            return _0x2a2a98 = true, _0x2558dd(_0x173a77), true;
        } else {
            _0x2a2a98 = false;
        }
        _0x130f91();
        _0x8a25d6[0] = parseInt(themeArray[_0x173a77].content1Left / _0x3007e3 * _0x1a1f85);
        _0x5bfeae[0] = parseInt(themeArray[_0x173a77].content1Top / _0xc8008b * _0x4734b1);
        _0x8a25d6[1] = parseInt(themeArray[_0x173a77].content2Right / _0x3007e3 * _0x1a1f85);
        _0x5bfeae[1] = parseInt(themeArray[_0x173a77].content2Bottom / _0xc8008b * _0x4734b1);
        _0x2b82c8();
        $('#tb_name').val(themeArray[_0x173a77].themeName);
        $('#tb_description').val(themeArray[_0x173a77].themeDescription);
        themeArray[_0x173a77].themeMaxFontSize != null ? $('#tb_maxFontSize').val(themeArray[_0x173a77].themeMaxFontSize) : $('#tb_maxFontSize').val(80);
        $('#tb_maxFontSize_val').val($('#tb_maxFontSize').val());
        $('#tb_linespace').val(themeArray[_0x173a77].LineHeight);
        $('#tb_linespace_val').val($('#tb_linespace').val());
        themeArray[_0x173a77].EnableOutline != null ? $('#tb_enableOutline').prop('checked', themeArray[_0x173a77].EnableOutline) : $('#tb_enableOutline').prop('checked', true);
        $('#tb_enableShadow').prop('checked', themeArray[_0x173a77].EnableShadow);
        $('#tb_enableUppercase').prop('checked', themeArray[_0x173a77].EnableUppercase);
        $('#tb_enableBorder').prop('checked', themeArray[_0x173a77].EnableBorder);
        $('#tb_enableBox').prop('checked', themeArray[_0x173a77].EnableBlackBox);
        $('#tb_enableHeaderBox').prop('checked', themeArray[_0x173a77].EnableHeaderBox);
        $('#tb_enableLineWrap').prop('checked', themeArray[_0x173a77].EnableLineWrap);
        $('#tb_showOnlyPrimary').prop('checked', themeArray[_0x173a77].ShowPrimaryLang);
        $('#tb_swapTranslations').prop('checked', themeArray[_0x173a77].SwapTranslations);
        $('input[name="Orientation"]').prop('checked', false);
        themeArray[_0x173a77].content1Left == themeArray[_0x173a77].content2Left ? $('input[name="Orientation"][value="Horizontal"]').prop('checked', true) : $('input[name="Orientation"][value="Vertical"]').prop('checked', true);
    }
    function _0x2b82c8() {
        let _0x514bce = $('#tb_canvas');
        const _0x282d98 = _0x514bce[0].getContext('2d');
        _0x282d98.fillStyle = '#adb5bd';
        _0x282d98.fillRect(_0x8a25d6[0], _0x5bfeae[0], Math.abs(_0x8a25d6[1] - _0x8a25d6[0]), Math.abs(_0x5bfeae[1] - _0x5bfeae[0]));
    }
    function _0x130f91() {
        let _0x1dad4b = $('#tb_canvas');
        const _0xaa9a2e = _0x1dad4b[0].getContext('2d');
        _0xaa9a2e.fillStyle = '#0d6efd';
        _0xaa9a2e.fillRect(_0x8a25d6[0], _0x5bfeae[0], Math.abs(_0x8a25d6[1] - _0x8a25d6[0]), Math.abs(_0x5bfeae[1] - _0x5bfeae[0]));
    }
    function _0x321221(_0x1c26b1) {
        let _0x2f70de = $('#tb_canvas');
        const _0x55f2db = _0x2f70de.offset();
        const _0x526060 = parseInt(_0x1c26b1.clientX - _0x55f2db.left);
        const _0x5ad7a3 = parseInt(_0x1c26b1.clientY - _0x55f2db.top);
        _0x5c658c ? (_0x130f91(), _0x8a25d6[0] = _0x526060, _0x5bfeae[0] = _0x5ad7a3) : (_0x8a25d6[1] = _0x526060, _0x5bfeae[1] = _0x5ad7a3, _0x2b82c8());
        _0x5c658c = !_0x5c658c;
    }
    function _0x2558dd(_0x41bb8a) {
        $('#tb_name').val('');
        $('#tb_description').val('');
    }
    function _0x21ca2e() {
        const _0x362a89 = validatetext($('#tb_name').val());
        if (_0x362a89 == false) {
            return vvDialog('Theme Builder', 'Enter a valid Theme Preset Name'), false;
        }
        const _0x4d5954 = parseInt(_0x5bfeae[0] / _0x4734b1 * _0xc8008b);
        const _0x5662dd = parseInt(_0x8a25d6[0] / _0x1a1f85 * _0x3007e3);
        const _0x592db1 = parseInt(_0x5bfeae[1] / _0x4734b1 * _0xc8008b);
        const _0x49fc8a = parseInt(_0x8a25d6[1] / _0x1a1f85 * _0x3007e3);
        return _0x2a2a98 && (themeJSON.presentationthemes.push({}), _0x2a2a98 = false), $('input[name="Orientation"]:checked').val() == 'Horizontal' ? (themeJSON.presentationthemes[_0x1d8886].content1Top = _0x4d5954, themeJSON.presentationthemes[_0x1d8886].content1Left = _0x5662dd, themeJSON.presentationthemes[_0x1d8886].content1Bottom = parseInt((_0x592db1 - _0x4d5954) / 2) + _0x4d5954 - 1, themeJSON.presentationthemes[_0x1d8886].content1Right = _0x49fc8a, themeJSON.presentationthemes[_0x1d8886].content2Top = parseInt((_0x592db1 - _0x4d5954) / 2) + _0x4d5954 + 1, themeJSON.presentationthemes[_0x1d8886].content2Left = _0x5662dd, themeJSON.presentationthemes[_0x1d8886].content2Bottom = _0x592db1, themeJSON.presentationthemes[_0x1d8886].content2Right = _0x49fc8a) : (themeJSON.presentationthemes[_0x1d8886].content1Top = _0x4d5954, themeJSON.presentationthemes[_0x1d8886].content1Left = _0x5662dd, themeJSON.presentationthemes[_0x1d8886].content1Bottom = _0x592db1, themeJSON.presentationthemes[_0x1d8886].content1Right = parseInt((_0x49fc8a - _0x5662dd) / 2) + _0x5662dd - 1, themeJSON.presentationthemes[_0x1d8886].content2Top = _0x4d5954, themeJSON.presentationthemes[_0x1d8886].content2Left = parseInt((_0x49fc8a - _0x5662dd) / 2) + _0x5662dd + 1, themeJSON.presentationthemes[_0x1d8886].content2Bottom = _0x592db1, themeJSON.presentationthemes[_0x1d8886].content2Right = _0x49fc8a), themeJSON.presentationthemes[_0x1d8886].themeName = $('#tb_name').val(), themeJSON.presentationthemes[_0x1d8886].themeDescription = $('#tb_description').val(), themeJSON.presentationthemes[_0x1d8886].ShowPrimaryLang = $('#tb_showOnlyPrimary').is(':checked'), themeJSON.presentationthemes[_0x1d8886].EnableUppercase = $('#tb_enableUppercase').is(':checked'), themeJSON.presentationthemes[_0x1d8886].EnableBorder = $('#tb_enableBorder').is(':checked'), themeJSON.presentationthemes[_0x1d8886].EnableBlackBox = $('#tb_enableBox').is(':checked'), themeJSON.presentationthemes[_0x1d8886].SwapTranslations = $('#tb_swapTranslations').is(':checked'), themeJSON.presentationthemes[_0x1d8886].EnableLineWrap = $('#tb_enableLineWrap').is(':checked'), themeJSON.presentationthemes[_0x1d8886].EnableShadow = $('#tb_enableShadow').is(':checked'), themeJSON.presentationthemes[_0x1d8886].EnableHeaderBox = $('#tb_enableHeaderBox').is(':checked'), themeJSON.presentationthemes[_0x1d8886].EnableOutline = $('#tb_enableOutline').is(':checked'), themeJSON.presentationthemes[_0x1d8886].themeMaxFontSize = $('#tb_maxFontSize').val(), themeJSON.presentationthemes[_0x1d8886].LineHeight = $('#tb_linespace').val(), themeArray = themeJSON.presentationthemes, saveThemeFlag = true, screenstab_setui(), _0x925c54(_0x1d8886), _0x514ae5(), true;
    }
    function _0x482889() {
        const _0x3b41f6 = 'Are you sure you want to delete the"' + themeJSON.presentationthemes[_0x1d8886].themeName + '" theme?';
        vvConfirm('Themes', _0x3b41f6, _0x1796fe);
    }
    function _0x1796fe() {
        themeJSON.presentationthemes.splice(_0x1d8886, 1);
        themeArray = themeJSON.presentationthemes;
        saveThemeFlag = true;
        _0x1d8886 = 0;
        screenstab_setui();
        _0x925c54(_0x1d8886);
        _0x514ae5();
    }
    function _0x514ae5() {
        $('#p6').modal('hide');
    }
}