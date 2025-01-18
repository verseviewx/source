let bibleVersionSelectPanel = {
    AvailableBibleList: '',
    PrimaryBibleIndex: 0,
    SecondaryBibleIndex: 0,
    DisplayOnlyPrimary: false,
    Display2VersesPerSlide: false,
    BookNameStyleIndex: 0,
    BookSelectionInEnglish: false,
    DualLanguageForNavigation: false,
    NavigationFontSize: 20
};
function bibleVersionSelect_init() {
    bibleVersionSelect_setValues();
    bibleVersionSelect_setui();
    bibleVersionSelect_setevents();
}
function bibleVersionSelect_setValues() {
    let _0x579b95 = bibleVersion_getInstalledBibleNames();
    bibleVersionSelectPanel.AvailableBibleList = _0x579b95;
    bibleVersionSelectPanel.PrimaryBibleIndex = configJSON.configuration[0].version1;
    bibleVersionSelectPanel.SecondaryBibleIndex = configJSON.configuration[0].version2;
    bibleVersionSelectPanel.DisplayOnlyPrimary = configJSON.configuration[0].BibleDisplayOnlyPrimary;
    bibleVersionSelectPanel.Display2VersesPerSlide = configJSON.configuration[0].BibleDisplay2VersesPerSlide;
    bibleVersionSelectPanel.BookNameStyleIndex = configJSON.configuration[0].BibleBookNameStyleIndex;
    bibleVersionSelectPanel.BookSelectionInEnglish = configJSON.configuration[0].BibleBookSelectionInEnglish;
    bibleVersionSelectPanel.DualLanguageForNavigation = configJSON.configuration[0].BibleDualLanguageForNavigation;
    bibleVersionSelectPanel.NavigationFontSize = configJSON.configuration[0].BibleNavigationFontSize;
    const _0x39ee34 = $('#version1Menu');
    const _0x458126 = $('#version2Menu');
    let _0x5129a4 = '';
    clearSelectList('version1Menu');
    clearSelectList('version2Menu');
    let _0x5dd96c = 0;
    _0x579b95.forEach(function (_0x3eb7f6) {
        _0x5129a4 += '<option value=' + _0x5dd96c + '>' + _0x3eb7f6 + '</option>';
        _0x5dd96c++;
    });
    _0x39ee34.append(_0x5129a4);
    _0x39ee34.val(bibleVersionSelectPanel.PrimaryBibleIndex);
    _0x458126.append(_0x5129a4);
    _0x458126.val(bibleVersionSelectPanel.SecondaryBibleIndex);
}
function bibleVersionSelect_setui() {
    $('#singleVersionBoxID').prop('checked', bibleVersionSelectPanel.DisplayOnlyPrimary);
    $('#multipleVerseID').prop('checked', bibleVersionSelectPanel.Display2VersesPerSlide);
    $('#englishList').prop('checked', bibleVersionSelectPanel.BookSelectionInEnglish);
    $('#navDualLanguageID').prop('checked', bibleVersionSelectPanel.DualLanguageForNavigation);
    $('#booknameStyle').val(bibleVersionSelectPanel.BookNameStyleIndex);
}
function bibleVersionSelect_setevents() {
    $('#version1Menu').on('change', function () {
        bibleVersionSelectPanel.PrimaryBibleIndex = $('#version1Menu option:selected').val();
        const _0x3b65db = {
            versionnum: 1,
            versionfname: bibleVersionJSON.version[bibleVersionSelectPanel.PrimaryBibleIndex].file
        };
        window.api.setBibleVersion(_0x3b65db);
        bibletab_fillverseText();
        updateSaveConfig('version1', bibleVersionSelectPanel.PrimaryBibleIndex);
        booknames = booknameObj.getbooknamesForList();
        bibletab_fillBooksList();
    });
    $('#version2Menu').on('change', function () {
        bibleVersionSelectPanel.SecondaryBibleIndex = $('#version2Menu option:selected').val();
        const _0x573b0c = {
            versionnum: 2,
            versionfname: bibleVersionJSON.version[bibleVersionSelectPanel.SecondaryBibleIndex].file
        };
        window.api.setBibleVersion(_0x573b0c);
        bibletab_fillverseText();
        updateSaveConfig('version2', bibleVersionSelectPanel.SecondaryBibleIndex);
        booknames = booknameObj.getbooknamesForList();
        bibletab_fillBooksList();
    });
    $('#booknameStyle').on('change', function () {
        bibleVersionSelectPanel.BookNameStyleIndex = $('#booknameStyle option:selected').val();
        updateSaveConfig('BibleBookNameStyleIndex', bibleVersionSelectPanel.BookNameStyleIndex);
        booknames = booknameObj.getbooknamesForList();
        bibletab_fillBooksList();
    });
    $('#singleVersionBoxID').on('click', function () {
        bibleVersionSelectPanel.DisplayOnlyPrimary = $(this).is(':checked');
        updateSaveConfig('BibleDisplayOnlyPrimary', bibleVersionSelectPanel.DisplayOnlyPrimary);
    });
    $('#multipleVerseID').on('click', function () {
        bibleVersionSelectPanel.Display2VersesPerSlide = $(this).is(':checked');
        updateSaveConfig('BibleDisplay2VersesPerSlide', bibleVersionSelectPanel.Display2VersesPerSlide);
    });
    $('#englishList').on('click', function () {
        bibleVersionSelectPanel.BookSelectionInEnglish = $(this).is(':checked');
        updateSaveConfig('BibleBookSelectionInEnglish', bibleVersionSelectPanel.BookSelectionInEnglish);
        booknames = booknameObj.getbooknamesForList();
        bibletab_fillBooksList();
    });
    $('#navDualLanguageID').on('click', function () {
        bibleVersionSelectPanel.DualLanguageForNavigation = $(this).is(':checked');
        updateSaveConfig('BibleDualLanguageForNavigation', bibleVersionSelectPanel.DualLanguageForNavigation);
        bibletab_fillverseText();
    });
    $('#sliderNavFontSize').on('change', function () {
        bibleVersionSelectPanel.NavigationFontSize = $(this).val();
        updateSaveConfig('BibleNavigationFontSize', bibleVersionSelectPanel.NavigationFontSize);
    });
}