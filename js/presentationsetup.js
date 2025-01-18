const PRESENTATION_VERSE = 0;
const PRESENTATION_LYRICS = 1;
const PRESENTATION_BLANK = 2;
const PRESENTATION_LOGO = 3;
const PRESENTATION_PLAYBACK = 4;
const PRESENTATION_STILLPLAY = 5;
let activePresentationData = {
    presentationActive: false,
    presentationType: PRESENTATION_VERSE,
    bookindex: 0,
    chapterindex: 0,
    verseindex: 0,
    contentIndex: 0,
    title: '',
    content1Arr: '',
    content2Arr: '',
    content1Font: '',
    content2Font: '',
    songid: '',
    copyright: ''
};
let presentationData = {
    presentationType: PRESENTATION_VERSE,
    updateAll: false,
    updateContentOnly: false,
    isVideoBackground: false,
    videoBackgroundFile: 'movie.mp4',
    mediaPlaybackFile: 'movie.mp4',
    isJpegBackground: true,
    jpegBackgroundFile: '',
    logoBackgroundFile: '',
    isMaskOn: false,
    maskFile: '',
    isColorLayer: false,
    LayerColor: '#FFFFFF',
    LayerColorOpacity: 1,
    mainScreenEnable: true,
    stageScreenEnable: false,
    mainPresentationScreen: 0,
    secondPresentationScreen: 0,
    mainPresentationWidth: 100,
    mainPresentationHeight: 100,
    secondPresentationWidth: 100,
    secondPresentationHeight: 100,
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 50,
    marginRight: 50,
    maxFontSize: 80,
    JustificationValue: 'center',
    PresentationOnTop: true,
    EnableTransition: true,
    EnableOutline: true,
    EnableLineWrap: false,
    EnableShadow: true,
    EnableHeaderBox: true,
    EnableUppercase: false,
    EnableBorder: false,
    EnableBlackBox: false,
    SwapTranslations: false,
    LineHeight: '',
    ShowDate: true,
    ShowVVLogo: true,
    ShowCustomLogo: false,
    LogoLine1: 'VerseVIEW',
    LogoLine2: 'www.verseview.info',
    canvasWidth: 1920,
    canvasHeight: 1080,
    titleLeft: 520,
    titleTop: 35,
    titleRight: 1400,
    titleBottom: 135,
    dateLeft: 80,
    dateTop: 990,
    dateRight: 450,
    dateBottom: 1055,
    copyrightLeft: 640,
    copyrightTop: 990,
    copyrightRight: 1290,
    copyrightBottom: 1055,
    logoLeft: 1460,
    logoTop: 990,
    logoRight: 1840,
    logoBottom: 1055,
    content1Left: 220,
    content1Top: 190,
    content1Right: 1695,
    content1Bottom: 515,
    content2Left: 220,
    content2Top: 565,
    content2Right: 1695,
    content2Bottom: 890,
    title: '',
    content1: '',
    content2: '',
    content1next: '',
    content2next: '',
    content1direction: true,
    content2direction: true,
    content1Font: 'Baloo Chettan',
    content2Font: 'Baloo Chettan',
    content1TextColor: 'white',
    content2TextColor: 'white',
    contentIndex: 0,
    contentCopyright: '',
    showBothContent: true,
    portnum: 50010,
    stageviewFile: ''
};
let presentation_previousbackground = null;
function setupPresentation() {
    presentationData.mainScreenEnable = screentab.EnableMainPresentation;
    presentationData.stageScreenEnable = screentab.EnableStagePresentation;
    presentationData.mainPresentationScreen = screentab.MainScreenSelectionValue;
    presentationData.secondPresentationScreen = screentab.StageScreenSelectionValue;
    presentationData.isVideoBackground = graphicstab.MotionBackground;
    if (presentationData.presentationType != PRESENTATION_STILLPLAY) {
        presentationData.jpegBackgroundFile = graphicstab.BackgroundFolder + graphicstab.BackgroundList[graphicstab.BackgroundImageIndex];
    } else {
    }
    presentationData.videoBackgroundFile = presentationData.jpegBackgroundFile;
    presentationData.content1Left = themeArray[screentab.mainPreset].content1Left;
    presentationData.content1Top = themeArray[screentab.mainPreset].content1Top;
    presentationData.content1Right = themeArray[screentab.mainPreset].content1Right;
    presentationData.content1Bottom = themeArray[screentab.mainPreset].content1Bottom;
    presentationData.content2Left = themeArray[screentab.mainPreset].content2Left;
    presentationData.content2Top = themeArray[screentab.mainPreset].content2Top;
    presentationData.content2Right = themeArray[screentab.mainPreset].content2Right;
    presentationData.content2Bottom = themeArray[screentab.mainPreset].content2Bottom;
    presentationData.marginTop = screentab.MainMarginTop;
    presentationData.marginBottom = screentab.MainMarginBottom;
    presentationData.marginLeft = screentab.MainMarginLeft;
    presentationData.marginRight = screentab.MainMarginRight;
    presentationData.maxFontSize = screentab.MaxFontSize;
    presentationData.LineHeight = screentab.LineHeight;
    const _0x2fc789 = [
        'left',
        'center',
        'right'
    ];
    presentationData.JustificationValue = _0x2fc789[screentab.JustificationValue];
    presentationData.PresentationOnTop = screentab.PresentationOnTop;
    presentationData.EnableTransition = screentab.EnableTransition;
    presentationData.EnableOutline = screentab.EnableOutline;
    presentationData.EnableLineWrap = screentab.EnableLineWrap;
    presentationData.EnableShadow = screentab.EnableShadow;
    presentationData.EnableHeaderBox = screentab.EnableHeaderBox;
    presentationData.EnableUppercase = screentab.EnableUppercase;
    presentationData.EnableBorder = screentab.EnableBorder;
    presentationData.EnableBlackBox = screentab.EnableBlackBox;
    presentationData.SwapTranslations = screentab.SwapTranslations;
    presentationData.ShowDate = screentab.ShowDate;
    presentationData.ShowVVLogo = screentab.ShowVVLogo;
    presentationData.ShowCustomLogo = screentab.ShowCustomLogo;
    presentationData.LogoLine1 = screentab.LogoLine1;
    presentationData.LogoLine2 = screentab.LogoLine2;
    presentationData.ShowPrimaryLang = screentab.ShowPrimaryLang;
    presentationData.content1TextColor = graphicstab.Text1Color;
    presentationData.content2TextColor = graphicstab.Text2Color;
    presentationData.LayerColor = graphicstab.LayerColor;
    presentationData.isColorLayer = graphicstab.ShadedBackground;
    presentationData.mainPresentationWidth = configJSON.vvdisplay[screentab.MainScreenSelectionValue].bounds.width;
    presentationData.mainPresentationHeight = configJSON.vvdisplay[screentab.MainScreenSelectionValue].bounds.height;
    presentationData.secondPresentationWidth = 1920;
    presentationData.secondPresentationHeight = 1080;
    presentationData.portnum = configJSON.configuration[0].remoteportnumber;
    configJSON.configuration[0].stageviewFile != null ? presentationData.stageviewFile = configJSON.configuration[0].stageviewFile : presentationData.stageviewFile = 'stage';
    presentationData.updateAll == false && ((presentationData.presentationType == PRESENTATION_VERSE || presentationData.presentationType == PRESENTATION_LYRICS) && (presentationData.jpegBackgroundFile != presentation_previousbackground && (presentationData.updateAll = true, presentation_previousbackground = presentationData.jpegBackgroundFile)));
    window.api.passPresentationSetup(presentationData);
    presentationData.updateAll = false;
}
function blankPresentation() {
    presentationData.presentationType != PRESENTATION_BLANK ? presentationData.presentationType = PRESENTATION_BLANK : presentationData.presentationType = activePresentationData.presentationType;
    presentation_previousbackground = null;
    setupPresentation();
}
function logoPresentation() {
    presentationData.presentationType = PRESENTATION_LOGO;
    presentationData.logoBackgroundFile = graphicstab.BackgroundFolder + graphicstab.BackgroundList[graphicstab.LogoImageIndex];
    presentation_previousbackground = null;
    setupPresentation();
}
function videoPlayback(_0x49bba) {
    presentationData.presentationType = PRESENTATION_PLAYBACK;
    presentationData.mediaPlaybackFile = _0x49bba;
    presentation_previousbackground = null;
    setupPresentation();
}
function stillPlayback(_0x5d7032) {
    console.log('Arried at still playback..');
    presentationData.presentationType = PRESENTATION_STILLPLAY;
    presentationData.jpegBackgroundFile = _0x5d7032;
    setupPresentation();
}