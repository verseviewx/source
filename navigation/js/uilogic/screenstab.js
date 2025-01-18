let screentab = {
    EnableMainPresentation: true,
    EnableStagePresentation: false,
    MainScreenSelectionValue: 0,
    StageScreenSelectionValue: 0,
    mainPreset: 0,
    MainMarginTop: 50,
    MainMarginLeft: 50,
    MainMarginBottom: 50,
    MainMarginRight: 50,
    MaxFontSize: 80,
    JustificationValue: 2,
    PresentationOnTop: true,
    EnableTransition: true,
    EnableOutline: true,
    ShowDate: true,
    ShowVVLogo: true,
    ShowCustomLogo: false,
    LogoLine1: 'VerseVIEW',
    LogoLine2: 'www.verseview.info',
    LyricsPresentationStyle: true,
    ShowSongTitle: false,
    ShowPrimaryLang: false,
    EnableUppercase: false,
    EnableBorder: false,
    EnableBlackBox: false,
    SwapTranslations: false,
    ShowLyricsTwoLines: false,
    HideStanzaNumber: false,
    EnableLineWrap: false,
    EnableShadow: true,
    EnableHeaderBox: true,
    VersePresenationStyle: true,
    StageWindowView: true,
    StageWindowSize: true,
    StageGreenScreen: true,
    StageOpacity: 1,
    StageLowerThridHeight: 33,
    StageMaxFontSize: 50,
    StageTextColor: 0,
    StageBackgroundColor: 30,
    StageShowPrimary: false,
    StageShowSecondary: false,
    StageAlignLeft: false,
    StageAlignCenter: false,
    StageHorizontal: true,
    StageAutoTextOutline: true,
    StageTextShadow: true,
    StageShowTime: true,
    StageAlertMessage: '',
    stageviewFile: 'stage'
};
let screentab_screen_list = new Array('xScreen 1 1920x1080', 'xScreen 2 1920x1080');
function screenstab_init() {
    screenstab_setValues();
    screenstab_setui();
    screenstab_setevents();
    screentab_getstagesettings();
}
function screenstab_setValues() {
    screentab.EnableMainPresentation = configJSON.configuration[0].mainScreenEnable;
    screentab.EnableStagePresentation = configJSON.configuration[0].stageScreenEnable;
    screentab.MainScreenSelectionValue = configJSON.configuration[0].MainScreenSelectionValue;
    screentab.StageScreenSelectionValue = configJSON.configuration[0].StageScreenSelectionValue;
    screentab_screen_list = new Array();
    const _0x6881ad = configJSON.vvdisplay.length;
    for (let _0x12c606 = 0; _0x12c606 < _0x6881ad; _0x12c606++) {
        let _0x28b6ea = 'Screen ' + (_0x12c606 + 1) + ' &rarr; ' + configJSON.vvdisplay[_0x12c606].bounds.width + 'x' + configJSON.vvdisplay[_0x12c606].bounds.height;
        screentab_screen_list.push(_0x28b6ea);
    }
    screentab.mainPreset = configJSON.configuration[0].mainPreset;
    screentab.MainMarginTop = configJSON.configuration[0].topMargin;
    screentab.MainMarginLeft = configJSON.configuration[0].leftMargin;
    screentab.MainMarginBottom = configJSON.configuration[0].bottomMargin;
    screentab.MainMarginRight = configJSON.configuration[0].rightMargin;
    screentab.MaxFontSize = configJSON.configuration[0].maxFontSize;
    screentab.JustificationValue = configJSON.configuration[0].JustificationValue;
    screentab.PresentationOnTop = configJSON.configuration[0].PresentationOnTop;
    screentab.EnableTransition = configJSON.configuration[0].EnableTransition;
    screentab.EnableOutline = configJSON.configuration[0].EnableOutline;
    screentab.ShowPrimaryLang = configJSON.configuration[0].ShowPrimaryLang;
    screentab.EnableUppercase = configJSON.configuration[0].EnableUppercase;
    screentab.EnableBorder = configJSON.configuration[0].EnableBorder;
    screentab.EnableBlackBox = configJSON.configuration[0].EnableBlackBox;
    screentab.EnableLineWrap = configJSON.configuration[0].EnableLineWrap;
    screentab.EnableShadow = configJSON.configuration[0].EnableShadow;
    screentab.EnableHeaderBox = configJSON.configuration[0].EnableHeaderBox;
    screentab.ShowDate = configJSON.configuration[0].ShowDate;
    screentab.ShowVVLogo = configJSON.configuration[0].ShowVVLogo;
    screentab.ShowCustomLogo = configJSON.configuration[0].ShowCustomLogo;
    screentab.LogoLine1 = configJSON.configuration[0].LogoLine1;
    screentab.LogoLine2 = configJSON.configuration[0].LogoLine2;
    screentab.LyricsPresentationStyle = configJSON.configuration[0].LyricsPresentationStyle;
    screentab.ShowSongTitle = configJSON.configuration[0].ShowSongTitle;
    screentab.ShowPrimaryLang = configJSON.configuration[0].ShowPrimaryLang;
    screentab.ShowLyricsTwoLines = configJSON.configuration[0].ShowLyricsTwoLines;
    screentab.HideStanzaNumber = configJSON.configuration[0].HideStanzaNumber;
    screentab.EnableLineWrap = configJSON.configuration[0].EnableLineWrap;
    screentab.EnableShadow = configJSON.configuration[0].EnableShadow;
    screentab.EnableHeaderBox = configJSON.configuration[0].EnableHeaderBox;
    screentab.VersePresenationStyle = configJSON.configuration[0].VersePresenationStyle;
    configJSON.configuration[0].stageviewFile != null ? screentab.stageviewFile = configJSON.configuration[0].stageviewFile : screentab.stageviewFile = 'stage';
    $('#screen_stageviewPreset').val(screentab.stageviewFile);
    screentab.StageWindowView = configJSON.configuration[0].StageWindowView;
    screentab.StageWindowSize = configJSON.configuration[0].StageWindowSize;
    screentab.StageGreenScreen = configJSON.configuration[0].StageGreenScreen;
    screentab.StageShowTime = configJSON.configuration[0].StageShowTime;
    screentab.StageAlertMessage = configJSON.configuration[0].StageAlertMessage;
}
function screenstab_loadThemeList() {
    const _0x6745b1 = themeArray.length;
    let _0x405d80 = '';
    clearSelectList('screen_mainPreset');
    for (var _0x34eb07 = 0; _0x34eb07 < _0x6745b1; _0x34eb07++) {
        _0x405d80 += '<option value=' + _0x34eb07 + '>' + themeArray[_0x34eb07].themeName + '</option>';
    }
    $('#screen_mainPreset').append(_0x405d80);
}
function screenstab_setui() {
    let _0x40b153 = '';
    let _0x3d9410 = $('#screen_mainScreenSelection');
    $('#screen_mainScreenSelection').html('');
    for (var _0x30b0d7 = 0; _0x30b0d7 < screentab_screen_list.length; _0x30b0d7++) {
        _0x40b153 += '<option value=' + _0x30b0d7 + '>' + screentab_screen_list[_0x30b0d7] + '</option>';
    }
    _0x3d9410.append(_0x40b153);
    screentab.MainScreenSelectionValue > screentab_screen_list.length - 1 ? (screentab.MainScreenSelectionValue = 0, _0x3d9410.val(0)) : _0x3d9410.val(screentab.MainScreenSelectionValue);
    _0x3d9410 = $('#screen_stageviewScreenSelection');
    $('#screen_stageviewScreenSelection').html('');
    _0x3d9410.append(_0x40b153);
    screentab.StageScreenSelectionValue > screentab_screen_list.length - 1 ? (screentab.StageScreenSelectionValue = 0, _0x3d9410.val(0)) : _0x3d9410.val(screentab.StageScreenSelectionValue);
    $('#screen_enableMainPresentation').prop('checked', screentab.EnableMainPresentation);
    $('#screen_enableStageviewPresentation').prop('checked', screentab.EnableStagePresentation);
    screenstab_loadThemeList();
    $('#screen_mainPreset').val(screentab.mainPreset);
    $('#screen_mainMarginTop').val(screentab.MainMarginTop);
    $('#screen_mainMarginLeft').val(screentab.MainMarginLeft);
    $('#screen_mainMarginBottom').val(screentab.MainMarginBottom);
    $('#screen_mainMarginRight').val(screentab.MainMarginRight);
    $('#screen_mainMaximumFontSizeValue').val(screentab.MaxFontSize);
    switch (screentab.JustificationValue) {
    case 0:
        $('#screen_justificationLeft').prop('checked', true);
        break;
    default:
    case 1:
        $('#screen_justificationCenter').prop('checked', true);
        break;
    case 2:
        $('#screen_justificationRight').prop('checked', true);
        break;
    }
    $('#screen_mainPresentationOnTop').prop('checked', screentab.PresentationOnTop);
    $('#screen_mainPresentationEnableTransition').prop('checked', screentab.EnableTransition);
    $('#screen_mainPresentationEnableOutline').prop('checked', screentab.EnableOutline);
    $('#screen_mainPresentationEnableUppercase').prop('checked', screentab.EnableUppercase);
    $('#screen_mainPresentationEnableBorder').prop('checked', screentab.EnableBorder);
    $('#screen_mainPresentationEnableBlackBox').prop('checked', screentab.EnableBlackBox);
    $('#screen_mainPresentationEnableLineWrap').prop('checked', screentab.EnableLineWrap);
    $('#screen_mainPresentationEnableShadow').prop('checked', screentab.EnableShadow);
    $('#screen_mainPresentationEnableHeaderBox').prop('checked', screentab.EnableHeaderBox);
    $('#screen_mainPresentationShowPrimaryLang').prop('checked', screentab.ShowPrimaryLang);
    $('#screen_mainPresentationSwapTranslations').prop('checked', screentab.SwapTranslations);
    $('#screen_mainPresentationShowDate').prop('checked', screentab.ShowDate);
    $('#screen_mainPresentationShowVVLogo').prop('checked', screentab.ShowVVLogo);
    $('#screen_mainPresentationShowCustomLogo').prop('checked', screentab.ShowCustomLogo);
    screentab.ShowCustomLogo ? ($('#screen_mainLogoLine1').show(), $('#screen_mainLogoLine2').show()) : ($('#screen_mainLogoLine1').hide(), $('#screen_mainLogoLine2').hide());
    $('#screen_mainLogoLine1').val(screentab.LogoLine1);
    $('#screen_mainLogoLine2').val(screentab.LogoLine2);
    if (screentab.LyricsPresentationStyle) {
    } else {
    }
    $('#screen_mainPresentationSong2Lines').prop('checked', screentab.ShowLyricsTwoLines);
    $('#screen_mainPresentationShowStanzaNumber').prop('checked', screentab.HideStanzaNumber);
    $('#stageviewWindow').prop('checked', screentab.StageWindowView);
    $('#stageviewMiniWindow').prop('checked', screentab.StageWindowSize);
    $('#stageviewGreenWindow').prop('checked', screentab.StageGreenScreen);
    $('#stageSettingShowTime').prop('checked', screentab.StageShowTime);
    $('#stageConfigMessage').val(configJSON.configuration[0].StageAlertMessage);
}
function screentab_setpresets() {
    screentab.ShowPrimaryLang = themeArray[screentab.mainPreset].ShowPrimaryLang;
    screentab.EnableUppercase = themeArray[screentab.mainPreset].EnableUppercase;
    screentab.EnableBorder = themeArray[screentab.mainPreset].EnableBorder;
    screentab.EnableBlackBox = themeArray[screentab.mainPreset].EnableBlackBox;
    screentab.EnableLineWrap = themeArray[screentab.mainPreset].EnableLineWrap;
    screentab.EnableShadow = themeArray[screentab.mainPreset].EnableShadow;
    screentab.EnableHeaderBox = themeArray[screentab.mainPreset].EnableHeaderBox;
    screentab.LineHeight = themeArray[screentab.mainPreset].LineHeight;
    updateSaveConfig('ShowPrimaryLang', screentab.ShowPrimaryLang);
    updateSaveConfig('EnableOutEnableUppercaseline', screentab.EnableUppercase);
    updateSaveConfig('EnableBorder', screentab.EnableBorder);
    updateSaveConfig('EnableBlackBox', screentab.EnableBlackBox);
    updateSaveConfig('EnableLineWrap', screentab.EnableLineWrap);
    updateSaveConfig('EnableShadow', screentab.EnableShadow);
    updateSaveConfig('EnableHeaderBox', screentab.EnableHeaderBox);
}
function screenstab_disable_stageview() {
    $('#screen_enableStageviewPresentation').prop('checked', false);
    screentab.EnableStagePresentation = $(this).is(':checked');
    updateSaveConfig('stageScreenEnable', screentab.EnableStagePresentation);
}
function screenstab_setevents() {
    $('#screen_enableMainPresentation').on('click', function () {
        screentab.EnableMainPresentation = $(this).is(':checked');
        updateSaveConfig('mainScreenEnable', screentab.EnableMainPresentation);
    });
    $('#screen_enableStageviewPresentation').on('click', function () {
        configJSON.configuration[0].remoteenable ? (screentab.EnableStagePresentation = $(this).is(':checked'), updateSaveConfig('stageScreenEnable', screentab.EnableStagePresentation)) : (vvDialog('STAGEVIEW', 'Enable Remote VerseVIEW for Stageview'), screenstab_disable_stageview());
    });
    $('#screen_mainScreenSelection').on('change', function () {
        screentab.MainScreenSelectionValue = $('#screen_mainScreenSelection option:selected').val();
        updateSaveConfig('MainScreenSelectionValue', screentab.MainScreenSelectionValue);
    });
    $('#screen_stageviewScreenSelection').on('change', function () {
        screentab.StageScreenSelectionValue = $('#screen_stageviewScreenSelection option:selected').val();
        updateSaveConfig('StageScreenSelectionValue', screentab.StageScreenSelectionValue);
    });
    $('#screen_mainPreset').on('change', function () {
        screentab.mainPreset = $(this).val();
        updateSaveConfig('mainPreset', screentab.mainPreset);
        screentab_setpresets();
        screenstab_setui();
    });
    $('#screen_mainMarginTop').on('change', function () {
        screentab.MainMarginTop = $(this).val();
        updateSaveConfig('topMargin', screentab.MainMarginTop);
    });
    $('#screen_mainMarginLeft').on('change', function () {
        screentab.MainMarginLeft = $(this).val();
        updateSaveConfig('leftMargin', screentab.MainMarginLeft);
    });
    $('#screen_mainMarginBottom').on('change', function () {
        screentab.MainMarginBottom = $(this).val();
        updateSaveConfig('bottomMargin', screentab.MainMarginBottom);
    });
    $('#screen_mainMarginRight').on('change', function () {
        screentab.MainMarginRight = $(this).val();
        updateSaveConfig('rightMargin', screentab.MainMarginRight);
    });
    $('#screen_mainMaximumFontSizeValue').on('change', function () {
        const _0x4b8d67 = $(this).val();
        _0x4b8d67 < 30 || _0x4b8d67 > 200 ? ($('#screen_mainMaximumFontSizeValue').val(screentab.MaxFontSize), vvDialog('Presentation', 'Please set font size between 30 and 200.')) : (screentab.MaxFontSize = $(this).val(), updateSaveConfig('maxFontSize', screentab.MaxFontSize));
    });
    $('#screen_justificationLeft').on('change', function () {
        $(this).is(':checked') && (screentab.JustificationValue = 0, updateSaveConfig('JustificationValue', screentab.JustificationValue));
    });
    $('#screen_justificationCenter').on('change', function () {
        $(this).is(':checked') && (screentab.JustificationValue = 1, updateSaveConfig('JustificationValue', screentab.JustificationValue));
    });
    $('#screen_justificationRight').on('change', function () {
        $(this).is(':checked') && (screentab.JustificationValue = 2, updateSaveConfig('JustificationValue', screentab.JustificationValue));
    });
    $('#screen_mainPresentationOnTop').on('change', function () {
        screentab.PresentationOnTop = $(this).is(':checked');
        updateSaveConfig('PresentationOnTop', screentab.PresentationOnTop);
    });
    $('#screen_mainPresentationEnableTransition').on('change', function () {
        screentab.EnableTransition = $(this).is(':checked');
        updateSaveConfig('EnableTransition', screentab.EnableTransition);
    });
    $('#screen_mainPresentationEnableOutline').on('change', function () {
        screentab.EnableOutline = $(this).is(':checked');
        updateSaveConfig('EnableOutline', screentab.EnableOutline);
    });
    $('#screen_mainPresentationEnableUppercase').on('change', function () {
        screentab.EnableUppercase = $(this).is(':checked');
        updateSaveConfig('EnableUppercase', screentab.EnableUppercase);
    });
    $('#screen_mainPresentationEnableBorder').on('change', function () {
        screentab.EnableBorder = $(this).is(':checked');
        updateSaveConfig('EnableBorder', screentab.EnableBorder);
    });
    $('#screen_mainPresentationEnableBlackBox').on('change', function () {
        screentab.EnableBlackBox = $(this).is(':checked');
        updateSaveConfig('EnableBlackBox', screentab.EnableBlackBox);
    });
    $('#screen_mainPresentationSwapTranslations').on('change', function () {
        screentab.SwapTranslations = $(this).is(':checked');
        updateSaveConfig('SwapTranslations', screentab.SwapTranslations);
    });
    $('#screen_mainPresentationShowDate').on('change', function () {
        screentab.ShowDate = $(this).is(':checked');
        updateSaveConfig('ShowDate', screentab.ShowDate);
    });
    $('#screen_mainPresentationShowVVLogo').on('change', function () {
        screentab.ShowVVLogo = $(this).is(':checked');
        updateSaveConfig('ShowVVLogo', screentab.ShowVVLogo);
        $('#screen_mainPresentationShowCustomLogo').prop('checked', false);
        screentab.ShowCustomLogo = false;
        updateSaveConfig('ShowCustomLogo', screentab.ShowCustomLogo);
    });
    $('#screen_mainPresentationShowCustomLogo').on('change', function () {
        screentab.ShowCustomLogo = $(this).is(':checked');
        updateSaveConfig('ShowCustomLogo', screentab.ShowCustomLogo);
        screentab.ShowCustomLogo ? ($('#screen_mainLogoLine1').show(), $('#screen_mainLogoLine2').show()) : ($('#screen_mainLogoLine1').hide(), $('#screen_mainLogoLine2').hide());
        $('#screen_mainPresentationShowVVLogo').prop('checked', false);
        screentab.ShowVVLogo = false;
        updateSaveConfig('ShowVVLogo', screentab.ShowVVLogo);
    });
    $('#screen_mainLogoLine1').on('change', function () {
        screentab.LogoLine1 = $(this).val();
        updateSaveConfig('LogoLine1', screentab.LogoLine1);
    });
    $('#screen_mainLogoLine2').on('change', function () {
        screentab.LogoLine2 = $(this).val();
        updateSaveConfig('LogoLine2', screentab.LogoLine2);
    });
    $('#screen_mainPresentationShowSongTitle').on('change', function () {
        screentab.ShowSongTitle = $(this).is(':checked');
        updateSaveConfig('ShowSongTitle', screentab.ShowSongTitle);
    });
    $('#screen_mainPresentationShowPrimaryLang').on('change', function () {
        screentab.ShowPrimaryLang = $(this).is(':checked');
        updateSaveConfig('ShowPrimaryLang', screentab.ShowPrimaryLang);
    });
    $('#screen_mainPresentationSong2Lines').on('change', function () {
        screentab.ShowLyricsTwoLines = $(this).is(':checked');
        updateSaveConfig('ShowLyricsTwoLines', screentab.ShowLyricsTwoLines);
        songtab_fillSongLyrics(songtab_activeSong, false);
    });
    $('#screen_mainPresentationShowStanzaNumber').on('change', function () {
        screentab.HideStanzaNumber = $(this).is(':checked');
        updateSaveConfig('HideStanzaNumber', screentab.HideStanzaNumber);
        songtab_fillSongLyrics(songtab_activeSong, false);
    });
    $('#screen_mainPresentationEnableLineWrap').on('change', function () {
        screentab.EnableLineWrap = $(this).is(':checked');
        updateSaveConfig('EnableLineWrap', screentab.EnableLineWrap);
    });
    $('#screen_mainPresentationEnableShadow').on('change', function () {
        screentab.EnableShadow = $(this).is(':checked');
        updateSaveConfig('EnableShadow', screentab.EnableShadow);
    });
    $('#screen_mainPresentationEnableHeaderBox').on('change', function () {
        screentab.EnableHeaderBox = $(this).is(':checked');
        updateSaveConfig('EnableHeaderBox', screentab.EnableHeaderBox);
    });
    $('#stageviewWindow').on('change', function () {
        screentab.StageWindowView = $(this).is(':checked');
        screentab_getstagesettings();
        updateSaveConfig('StageWindowView', screentab.StageWindowView);
        screentab.StageWindowView ? $('#stageviewMiniWindowCol').show() : $('#stageviewMiniWindowCol').hide();
    });
    $('#screen_stageviewPreset').on('change', function () {
        screentab.stageviewFile = $(this).val();
        updateSaveConfig('stageviewFile', screentab.stageviewFile);
    });
    $('#stageviewMiniWindow').on('change', function () {
        screentab.StageWindowSize = $(this).is(':checked');
        screentab_getstagesettings();
        updateSaveConfig('StageWindowSize', screentab.StageWindowSize);
    });
    $('#stageviewGreenWindow').on('change', function () {
        screentab.StageGreenScreen = $(this).is(':checked');
        screentab_getstagesettings();
        updateSaveConfig('StageGreenScreen', screentab.StageGreenScreen);
    });
    $('#stageSettingShowTime').on('change', function () {
        screentab.StageShowTime = $(this).is(':checked');
        screentab_getstagesettings();
        updateSaveConfig('StageShowTime', screentab.StageShowTime);
    });
    $('#stageMessageHide').on('click', function () {
        screentab.StageAlertMessage = '';
        screentab_getstagesettings();
        updateSaveConfig('StageAlertMessage', screentab.StageAlertMessage);
    });
    $('#stageMessageShow').on('click', function () {
        screentab.StageAlertMessage = $('#stageConfigMessage').val();
        screentab_getstagesettings();
        updateSaveConfig('StageAlertMessage', screentab.StageAlertMessage);
    });
}
function screentab_getstagesettings() {
    let _0x5b40b6 = {
        StageAlertMessage: screentab.StageAlertMessage,
        StageShowTime: screentab.StageShowTime,
        StageGreenScreen: screentab.StageGreenScreen,
        StageWindowSize: screentab.StageWindowSize,
        StageWindowView: screentab.StageWindowView
    };
    window.api.setStageView(_0x5b40b6);
}