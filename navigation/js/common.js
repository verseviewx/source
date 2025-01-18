function setupTimer(_0x851358) {
    const _0x59d72c = setInterval(function () {
        saveConfigFlag && (saveConfigFlag = false, window.api.saveConfigJSON(configJSON));
        if (saveBookmarksFlag) {
            saveBookmarksFlag = false;
            const _0x271545 = scheduleObj.getScheduleData();
            window.api.saveScheduleJSON(_0x271545);
        }
        saveThemeFlag && (saveThemeFlag = false, window.api.saveThemeJSON(themeJSON));
    }, _0x851358);
}
function vvConfirmSetup() {
    $('#vvConfirm_main').modal('hide');
    $('#vvConfirm_main').css({ height: '300px' });
    $('#vvConfirm_main').css({ width: '400px' });
    $('#vvConfirm_main').css({ margin: '20px' });
}
function vvConfirm(_0x290c13, _0x50f1e3, _0x11b142, _0x5b1e50) {
    $('#vvConfirm_yes').off();
    $('#vvConfirm_no').off();
    $('#vvConfirm_yes').one('click', function () {
        _0x11b142 != null && _0x11b142();
        $('#vvConfirm_main').modal('hide');
    });
    $('#vvConfirm_no').one('click', function () {
        _0x5b1e50 != null && _0x5b1e50();
        $('#vvConfirm_main').modal('hide');
    });
    $('#vvConfirm_header').html(_0x290c13);
    $('#vvConfirm_message').html(_0x50f1e3);
    $('#vvConfirm_main').modal('show');
}
function vvDialogSetup() {
    $('#somemessage').hide();
    $('#somemessage').css({ height: '100px' });
    $('#somemessage').css({ width: '400px' });
    $('#somemessage').css({ marginTop: '-=100px' });
}
function vvDialog(_0x1bc95e, _0x2ee048) {
    $('#toast_button_close').off('click');
    $('#vvdialog_header').html(_0x1bc95e);
    $('#vvdialog_message').html(_0x2ee048);
    $('#somemessage').show();
    $('#toast_button_close').on('click', function () {
        $('#somemessage').hide();
    });
    setTimeout(function () {
        $('#somemessage').hide();
    }, 8000);
}
function IsNumeric(_0x1f3a57) {
    var _0x50c463 = '0123456789';
    var _0x5c317c = true;
    var _0x381d48;
    for (i = 0; i < _0x1f3a57.length && _0x5c317c == true; i++) {
        _0x381d48 = _0x1f3a57.charAt(i);
        _0x50c463.indexOf(_0x381d48) == -1 && (_0x5c317c = false);
    }
    return _0x5c317c;
}
function withinRange(_0x3ee98e, _0x496ecd, _0x120d29) {
    return _0x120d29 >= _0x3ee98e && _0x120d29 <= _0x496ecd ? true : false;
}
function vvColorPickerSetup() {
    $('#vvColorPicker_main').modal('hide');
    $('#vvColorPicker_main').css({ height: '500px' });
    $('#vvColorPicker_main').css({ width: '300px' });
    $('#vvColorPicker_main').css({ margin: '20px' });
}
function vvColorPicker(_0x2e9bb3, _0x568a79, _0xc0f4b4, _0x1ff69c) {
    $('#vvColorPicker_set').off();
    $('#vvColorPicker_cancel').off();
    $('#vvColorPicker_set').one('click', function () {
        colorPickerColorGlobal = $('#colorpicker').spectrum('get').toHexString();
        _0xc0f4b4 != null && _0xc0f4b4();
        $('#vvColorPicker_main').modal('hide');
    });
    $('#vvColorPicker_cancel').one('click', function () {
        _0x1ff69c != null && _0x1ff69c();
        $('#vvColorPicker_main').modal('hide');
    });
    $('#vvColorPicker_header').html(_0x2e9bb3);
    $('#vvColorPicker_message').html(_0x568a79);
    $('#colorpicker').spectrum({
        color: graphicstab.Text1Color,
        flat: true,
        showInput: false,
        showButtons: false
    });
    $('#vvColorPicker_main').modal('show');
}
function validatetext(_0x30c460) {
    let _0x3a6dd8 = _0x30c460.replace(/^\s+|\s+$/g, '');
    _0x3a6dd8 = _0x3a6dd8.replace(/\s\s+/g, ' ');
    if (_0x3a6dd8 == '') {
        return false;
    }
    return _0x3a6dd8;
}
function initToolTips() {
    var _0x1b77a5 = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var _0x780b6f = _0x1b77a5.map(function (_0x3b7112) {
        return new bootstrap.Tooltip(_0x3b7112, { trigger: 'hover' });
    });
}