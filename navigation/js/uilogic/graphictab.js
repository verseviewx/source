const CONTROL_PAUSE = 1;
const CONTROL_BACKWARD = 3;
const CONTROL_FORWARD = 2;
const CONTROL_MUTE_UNMUTE = 4;
let graphicstab = {
    Text1Color: '#FFFFFF',
    Text2Color: '#FFFFFF',
    LayerColor: '#FFFFFF',
    MotionBackground: false,
    RandomBackground: false,
    ShadedBackground: true,
    TransparentBackground: false,
    BackgroundList: [
        'a.jpg',
        'c.jpg',
        'd.jpg',
        'b.jpg',
        'f.jpg',
        'b.jpg',
        'c.jpg'
    ],
    SelectedBackgroundIndex: 0,
    BackgroundImageIndex: 0,
    LogoImageIndex: 0,
    BackgroundFolder: ''
};
let colorPickerColorGlobal = '#FFFFFF';
async function graphicstab_init() {
    graphicstab.BackgroundList = await window.api.getbkgndlist();
    graphicstab.BackgroundFolder = configJSON.configuration[0].appDataFolder + 'background\\still\\';
    graphicstab_getDataFromConfig();
    graphicstab_setupBkgnd();
    graphics_setupTextColors();
    graphicstab_renderBkgnd();
    graphicstab_setEvents();
}
function graphicstab_getDataFromConfig() {
    graphicstab.MotionBackground = configJSON.configuration[0].MotionBackground;
    graphicstab.BackgroundImageIndex = configJSON.configuration[0].SelectedBackgroundIndex;
    graphicstab.LogoImageIndex = configJSON.configuration[0].LogoImageIndex;
    graphicstab.Text1Color = configJSON.configuration[0].Text1Color;
    graphicstab.Text2Color = configJSON.configuration[0].Text2Color;
    graphicstab.LayerColor = configJSON.configuration[0].LayerColor;
    graphicstab.ShadedBackground = configJSON.configuration[0].ShadedBackground;
}
function graphics_setupTextColors() {
    $('#text1color').spectrum({
        color: graphicstab.Text1Color,
        flat: true,
        showInput: false,
        showButtons: false
    });
    $('#Text1ColorBox').css('color', graphicstab.Text1Color);
    $('#Text2ColorBox').css('color', graphicstab.Text2Color);
    $('#LayerColorBox').css('color', graphicstab.LayerColor);
}
function colorSetText1() {
    graphicstab.Text1Color = colorPickerColorGlobal;
    $('#Text1ColorBox').css('color', colorPickerColorGlobal);
    updateSaveConfig('Text1Color', graphicstab.Text1Color);
}
function colorSetText2() {
    graphicstab.Text2Color = colorPickerColorGlobal;
    $('#Text2ColorBox').css('color', colorPickerColorGlobal);
    updateSaveConfig('Text2Color', graphicstab.Text2Color);
}
function colorSetLayer() {
    graphicstab.LayerColor = colorPickerColorGlobal;
    $('#LayerColorBox').css('color', colorPickerColorGlobal);
    graphicstab.ShadedBackground = true;
    updateSaveConfig('LayerColor', graphicstab.LayerColor);
    updateSaveConfig('ShadedBackground', graphicstab.ShadedBackground);
}
function graphicstab_setEvents() {
    $('#changeText1ColorButton').on('click', function () {
        var _0xbdc432 = 'Select Text 1 Color';
        var _0x6536f4 = '<div><input type="text" id="colorpicker" /></div>';
        vvColorPicker(_0xbdc432, _0x6536f4, colorSetText1);
    });
    $('#changeText2ColorButton').on('click', function () {
        var _0x5a5556 = 'Select Text 2 Color';
        var _0x22532b = '<div><input type="text" id="colorpicker" /></div>';
        vvColorPicker(_0x5a5556, _0x22532b, colorSetText2);
    });
    $('#changeLayerColorButton').on('click', function () {
        var _0x462c16 = 'Select Background Layer Color';
        var _0x4e7906 = '<div><input type="text" id="colorpicker" /></div>';
        vvColorPicker(_0x462c16, _0x4e7906, colorSetLayer);
    });
    $('#resetTextColorButton').on('click', function () {
        graphicstab.Text1Color = '#FFFFFF';
        graphicstab.Text2Color = '#FFFFFF';
        $('#Text1ColorBox').css('color', graphicstab.Text1Color);
        $('#Text2ColorBox').css('color', graphicstab.Text2Color);
        updateSaveConfig('Text1Color', graphicstab.Text1Color);
        updateSaveConfig('Text2Color', graphicstab.Text2Color);
    });
    $('#resetOverlayColorButton').on('click', function () {
        graphicstab.LayerColor = '#000000';
        graphicstab.ShadedBackground = false;
        $('#LayerColorBox').css('color', graphicstab.LayerColor);
        updateSaveConfig('LayerColor', graphicstab.LayerColor);
        updateSaveConfig('ShadedBackground', graphicstab.ShadedBackground);
    });
    $('#addStillBkgndButtonID').on('click', async function () {
        const _0x57be55 = await window.api.openFile();
        if (_0x57be55 != null) {
            graphicstab.BackgroundList = _0x57be55;
            graphicstab_renderBkgnd();
        }
    });
    $('#delStillBkgndButton').on('click', async function () {
        const _0x4f4509 = graphicstab.BackgroundList[graphicstab.SelectedBackgroundIndex];
        const _0xa4b379 = graphicstab.BackgroundFolder + graphicstab.BackgroundList[graphicstab.BackgroundImageIndex];
        if (graphicstab.SelectedBackgroundIndex == graphicstab.BackgroundImageIndex) {
            vvDialog('Graphics', 'Can not delete active background');
        } else {
            if (graphicstab.SelectedBackgroundIndex == graphicstab.LogoImageIndex) {
                vvDialog('Graphics', 'Can not delete active logo');
            } else {
                var _0x385021 = 'Delete Background';
                var _0x229ed8 = 'Are you sure you want to delete this background?';
                vvConfirm(_0x385021, _0x229ed8, _0x5b7657);
                async function _0x5b7657() {
                    !isJpgPng(_0x4f4509) && $('#selectedVideoID').attr('src', '');
                    const _0x98a281 = await window.api.deletebkgnd(_0x4f4509);
                    _0x98a281 ? (graphicstab.BackgroundList = await window.api.getbkgndlist(), graphicstab.SelectedBackgroundIndex < graphicstab.BackgroundImageIndex && (graphicstab.BackgroundImageIndex--, updateSaveConfig('SelectedBackgroundIndex', graphicstab.BackgroundImageIndex)), graphicstab.SelectedBackgroundIndex < graphicstab.LogoImageIndex && (graphicstab.LogoImageIndex--, updateSaveConfig('LogoImageIndex', graphicstab.LogoImageIndex)), graphicstab.SelectedBackgroundIndex = 0, graphicstab_setupBkgnd(), graphicstab_renderBkgnd()) : vvDialog('Graphics', 'Could not delete the background');
                }
            }
        }
    });
    $('#setAsBackgroundButtonID').on('click', function () {
        graphicstab.BackgroundImageIndex = graphicstab.SelectedBackgroundIndex;
        const _0x318d4c = graphicstab.BackgroundList[graphicstab.BackgroundImageIndex];
        const _0x385076 = graphicstab.BackgroundFolder + graphicstab.BackgroundList[graphicstab.BackgroundImageIndex];
        isJpgPng(_0x318d4c) ? ($('#selectedVideoDivID').hide(), $('#selected_still_div_id').show(), $('#selected_still_id').addClass('img-thumbnail'), $('#selected_still_id').attr('src', _0x385076), graphicstab.MotionBackground = false) : ($('#selected_still_div_id').hide(), $('#selected_still_div_id').removeClass('img-thumbnail'), $('#selectedVideoDivID').show(), $('#selectedVideoID').attr('src', _0x385076), graphicstab.MotionBackground = true);
        presentationData.updateAll = true;
        updateSaveConfig('MotionBackground', graphicstab.MotionBackground);
        updateSaveConfig('SelectedBackgroundFilename', _0x318d4c);
        updateSaveConfig('SelectedBackgroundIndex', graphicstab.BackgroundImageIndex);
    });
    $('#setAsLogoButtonID').on('click', function () {
        const _0x1c0740 = graphicstab.BackgroundList[graphicstab.SelectedBackgroundIndex];
        if (isJpgPng(_0x1c0740)) {
            graphicstab.LogoImageIndex = graphicstab.SelectedBackgroundIndex;
            const _0x50b27e = graphicstab.BackgroundFolder + graphicstab.BackgroundList[graphicstab.LogoImageIndex];
            $('#selected_logostill_id').attr('src', _0x50b27e);
            updateSaveConfig('LogoImageIndex', graphicstab.LogoImageIndex);
        } else {
            vvDialog('Graphics', 'Please select still backgrounds for Logo');
        }
    });
    $('#pauseButtonID').on('click', function () {
        let _0x4e3ac7 = {
            iscontrol: true,
            command: CONTROL_PAUSE
        };
        window.api.passPresentationSetup(_0x4e3ac7);
    });
    $('#rewind15ButtonID').on('click', function () {
        let _0x2ecb33 = {
            iscontrol: true,
            command: CONTROL_BACKWARD
        };
        window.api.passPresentationSetup(_0x2ecb33);
    });
    $('#forward15ButtonID').on('click', function () {
        let _0x59eb03 = {
            iscontrol: true,
            command: CONTROL_FORWARD
        };
        window.api.passPresentationSetup(_0x59eb03);
    });
    $('#muteButtonID').on('click', function () {
        let _0x3e0166 = {
            iscontrol: true,
            command: CONTROL_MUTE_UNMUTE
        };
        let _0xb83cba = $('#muteButtonIconID');
        _0xb83cba.attr('class') == 'bi-volume-mute' ? (_0xb83cba.removeClass('bi-volume-mute'), _0xb83cba.addClass('bi-volume-up')) : (_0xb83cba.removeClass('bi-volume-up'), _0xb83cba.addClass('bi-volume-mute'));
        window.api.passPresentationSetup(_0x3e0166);
    });
    $('#playpauseButtonID').on('click', function () {
        const _0x4b240c = graphicstab.BackgroundList[graphicstab.SelectedBackgroundIndex];
        const _0x3bdb43 = graphicstab.BackgroundFolder + graphicstab.BackgroundList[graphicstab.SelectedBackgroundIndex];
        presentationData.updateAll = true;
        let _0x1cf5bd = graphicstab.MotionBackground;
        isJpgPng(_0x4b240c) ? (graphicstab.MotionBackground = false, stillPlayback(_0x3bdb43)) : (graphicstab.MotionBackground = true, videoPlayback(_0x3bdb43));
        graphicstab.MotionBackground = _0x1cf5bd;
    });
    $('#still_animate').on('click', function () {
        $('#still_animate').is(':checked') ? graphicstab.MotionBackground = true : graphicstab.MotionBackground = false;
    });
}
function graphicstab_setupBkgnd() {
    const _0x3339ae = graphicstab.BackgroundFolder + graphicstab.BackgroundList[graphicstab.BackgroundImageIndex];
    const _0x10cefb = graphicstab.BackgroundList[graphicstab.BackgroundImageIndex];
    isJpgPng(_0x10cefb) ? ($('#selectedVideoDivID').hide(), $('#selected_still_div_id').show(), $('#selected_still_id').addClass('img-thumbnail'), $('#selected_still_id').attr('src', _0x3339ae), graphicstab.MotionBackground = false) : ($('#selected_still_div_id').hide(), $('#selected_still_div_id').removeClass('img-thumbnail'), $('#selectedVideoDivID').show(), $('#selectedVideoID').attr('src', _0x3339ae), graphicstab.MotionBackground = true);
    const _0x5224d4 = graphicstab.BackgroundFolder + graphicstab.BackgroundList[graphicstab.LogoImageIndex];
    $('#selected_logostill_id').attr('src', _0x5224d4);
    isJpgPng(_0x10cefb) ? ($('#selectedx_still_id').attr('src', _0x3339ae), $('#preview_video_id').hide(), $('#preview_still_id').show()) : ($('#setVideoID').attr('width', '100%'), $('#setVideoID').attr('overflow', 'hidden'), $('#setVideoID').attr('src', _0x3339ae), $('#preview_video_id').show(), $('#preview_still_id').hide());
}
function graphicstab_renderBkgnd() {
    let _0x151562 = new Array();
    let _0x133b0c = new Array();
    const _0x1fb4f9 = graphicstab.BackgroundList.length;
    for (let _0x209fdc = 0; _0x209fdc < _0x1fb4f9; _0x209fdc++) {
        let _0x192b7d = isJpgPng(graphicstab.BackgroundList[_0x209fdc]);
        _0x192b7d ? _0x151562.push(graphicstab.BackgroundList[_0x209fdc]) : _0x133b0c.push(graphicstab.BackgroundList[_0x209fdc]);
    }
    const _0x4fa882 = _0x151562.length;
    const _0x2f3c8d = 6;
    let _0x232cfa = 0;
    let _0x5dcdc8 = 0;
    let _0x22f3c2 = '';
    let _0x1792cb = '';
    clearSelectList('motionBkgndSelection');
    _0x22f3c2 += '<label class="form-label">STILL BACKGROUND</label>';
    _0x22f3c2 += '<div class="row py-2">';
    for (_0x5dcdc8 = 0; _0x5dcdc8 < _0x1fb4f9; _0x5dcdc8++) {
        if (isJpgPng(graphicstab.BackgroundList[_0x5dcdc8])) {
            _0x22f3c2 += '<div class="col-2"><img src="' + graphicstab.BackgroundFolder + graphicstab.BackgroundList[_0x5dcdc8] + '" class="img-thumbnail graphicsthumbnail" vv-index=' + _0x5dcdc8 + '></div>';
            _0x232cfa++;
        } else {
            let _0x55929d = graphicstab.BackgroundList[_0x5dcdc8].lastIndexOf('.mp4');
            _0x55929d = graphicstab.BackgroundList[_0x5dcdc8].slice(0, _0x55929d);
            _0x1792cb += '<option value=' + _0x5dcdc8 + '>' + _0x55929d.toUpperCase() + '</option>';
        }
        if (_0x232cfa % _0x2f3c8d == 0) {
            _0x22f3c2 += '</div>';
            _0x22f3c2 += '<div class="row py-2">';
        }
    }
    _0x232cfa % _0x2f3c8d != 0 && (_0x22f3c2 += '</div>');
    $('#still_bkgnd_grid').html(_0x22f3c2);
    $('#motionBkgndSelection').append(_0x1792cb);
    $('.graphicsthumbnail').on('click', function () {
        graphicstab.SelectedBackgroundIndex = parseInt(this.getAttribute('vv-index'));
        const _0x2dc103 = graphicstab.BackgroundFolder + graphicstab.BackgroundList[graphicstab.SelectedBackgroundIndex];
        $('#selectedx_still_id').attr('src', _0x2dc103);
        $('#preview_video_id').hide();
        $('#preview_still_id').show();
    });
    $('#motionBkgndSelection').on('focusout', function () {
        $('#motionBkgndSelection').val(-1);
    });
    $('#motionBkgndSelection').on('change', function () {
        graphicstab.SelectedBackgroundIndex = $('#motionBkgndSelection option:selected').val();
        $('#setVideoID').attr('width', '100%');
        $('#setVideoID').attr('overflow', 'hidden');
        const _0x2f7c55 = graphicstab.BackgroundFolder + graphicstab.BackgroundList[graphicstab.SelectedBackgroundIndex];
        $('#setVideoID').attr('src', _0x2f7c55);
        $('#preview_video_id').show();
        $('#preview_still_id').hide();
    });
}
function isJpgPng(_0x3be487) {
    var _0x34813f = false;
    let _0x2bf78f = _0x3be487.split('.');
    return _0x2bf78f[_0x2bf78f.length - 1] != 'mp4' && (_0x34813f = true), _0x34813f;
}