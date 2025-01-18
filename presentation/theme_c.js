function processLower3rdResponse(_0x5d22be) {
    _0x5d22be.EnableBorder ? (text1_style.border = '2px solid white', text2_style.border = '2px solid white') : (text1_style.border = '0px solid white', text2_style.border = '0px solid white');
    _0x5d22be.EnableBlackBox ? (text1_style['background-color'] = 'rgba(0, 0, 0, 0.7)', text2_style['background-color'] = 'rgba(0, 0, 0, 0.7)') : (text1_style['background-color'] = 'rgba(0, 0, 0, 0)', text2_style['background-color'] = 'rgba(0, 0, 0, 0)');
    p_text1 = _0x5d22be.content1;
    p_text2 = _0x5d22be.content2;
    p_font1 = _0x5d22be.content1Font;
    p_font2 = _0x5d22be.content2Font;
    var _0x65922f = $.trim(p_text1).length;
    var _0x1b4bb8 = $.trim(p_text2).length;
    _0x65922f < 2 || _0x1b4bb8 < 2 ? showBothTranslations = false : showBothTranslations = true;
    showBothTranslations && _0x5d22be.SwapTranslations && (p_text1 = _0x5d22be.content2, p_text2 = _0x5d22be.content1, p_font1 = _0x5d22be.content2Font, p_font2 = _0x5d22be.content1Font);
    p_title = _0x5d22be.title;
    showBothTranslations = showBothTranslations && !_0x5d22be.ShowPrimaryLang;
    $('.textStyle').css('text-align', textAlign);
    $('.textStyle').css('text-shadow', textShadow);
    $('.textStyle').css('-webkit-text-stroke', textOutline);
    enableUpperCase = _0x5d22be.EnableUppercase;
    enableUpperCase && (p_text1 = p_text1.toUpperCase(), p_text2 = p_text2.toUpperCase());
    var _0x5afe4d = '';
    if (_0x5d22be.presentationType == 0) {
        if (p_title != '') {
            _0x5afe4d = p_text1.split(' ')[0];
            p_text1 = p_text1.substr(p_text1.indexOf(' ') + 1);
            p_text2 = p_text2.substr(p_text2.indexOf(' ') + 1);
        }
        showBothTranslations = showBothTranslations && _0x5d22be.showBothContent;
    } else {
    }
    if (showBothTranslations) {
    }
    if (p_text1 == '') {
    }
    var _0x184b02 = $(window).width();
    var _0x1bc6e5 = $(window).height();
    var _0x3c3fad = _0x184b02 / _0x5d22be.canvasWidth;
    var _0x5db1ec = _0x1bc6e5 / _0x5d22be.canvasHeight;
    var _0x21fbe3 = _0x5d22be.content1Top * _0x5db1ec;
    var _0x5c8df9 = _0x5d22be.content1Left * _0x3c3fad;
    var _0x44b4b6 = (_0x5d22be.content1Right - _0x5d22be.content1Left) * _0x3c3fad;
    var _0x2babc1 = (_0x5d22be.content1Bottom - _0x5d22be.content1Top) * _0x5db1ec;
    var _0x3d115a = (_0x5d22be.content2Bottom - _0x5d22be.content1Top) * _0x5db1ec;
    var _0x51c5a8 = _0x5d22be.content2Top * _0x5db1ec;
    var _0x56b2e2 = _0x5d22be.content2Left * _0x3c3fad;
    var _0x210615 = (_0x5d22be.content2Right - _0x5d22be.content2Left) * _0x3c3fad;
    var _0x2cc27f = (_0x5d22be.content2Bottom - _0x5d22be.content2Top) * _0x5db1ec;
    var _0x244532 = _0x5d22be.titleTop * _0x5db1ec;
    var _0x3aa36e = _0x5d22be.titleLeft * _0x3c3fad;
    var _0x352df3 = (_0x5d22be.titleRight - _0x5d22be.titleLeft) * _0x3c3fad;
    var _0x29f150 = (_0x5d22be.titleBottom - _0x5d22be.titleTop) * _0x5db1ec;
    var _0x5eb8e3 = _0x5d22be.dateTop * _0x5db1ec;
    var _0x192583 = _0x5d22be.dateLeft * _0x3c3fad;
    var _0x18d3fb = (_0x5d22be.dateRight - _0x5d22be.dateLeft) * _0x3c3fad;
    var _0xe7d848 = (_0x5d22be.dateBottom - _0x5d22be.dateTop) * _0x5db1ec;
    var _0x484267 = _0x5d22be.copyrightTop * _0x5db1ec;
    var _0x1b548a = _0x5d22be.copyrightLeft * _0x3c3fad;
    var _0x413090 = (_0x5d22be.copyrightRight - _0x5d22be.copyrightLeft) * _0x3c3fad;
    var _0x536d82 = (_0x5d22be.copyrightBottom - _0x5d22be.copyrightTop) * _0x5db1ec;
    var _0x20ff0e = _0x5d22be.logoTop * _0x5db1ec;
    var _0x1bed2b = _0x5d22be.logoLeft * _0x3c3fad;
    var _0x55e434 = (_0x5d22be.logoRight - _0x5d22be.logoLeft) * _0x3c3fad;
    var _0xc4398d = (_0x5d22be.logoBottom - _0x5d22be.logoTop) * _0x5db1ec;
    if (p_title != '') {
        p_title = p_title + ' : ' + _0x5afe4d;
        $('#resultIDRef').css('top', _0x244532);
        $('#resultIDRef').css('left', _0x3aa36e);
        $('#resultIDRef').css('width', _0x352df3);
        $('#resultIDRef').css('height', _0x29f150);
        _0x5d22be.EnableHeaderBox ? ($('#resultIDRef').css('background-color', 'white'), $('#resultIDRef').css('color', 'black')) : ($('#resultIDRef').css('background-color', 'transparent'), $('#resultIDRef').css('color', _0x5d22be.content1TextColor));
    }
    showBothTranslations ? ($('#resultID2').show(), showHorizontal ? (setSplitRatio(), $('#resultID1').css('top', _0x21fbe3), $('#resultID1').css('left', _0x5c8df9), $('#resultID1').css('width', _0x44b4b6), $('#resultID1').css('height', _0x2babc1), $('#resultID2').css('top', _0x51c5a8), $('#resultID2').css('left', _0x56b2e2), $('#resultID2').css('width', _0x210615), $('#resultID2').css('height', _0x2cc27f)) : ($('#resultID1').css('top', new_vv_top), $('#resultID1').css('left', new_vv_left), $('#resultID1').css('width', new_vv_width / 2 - new_spaceBetweenTranslations), $('#resultID1').css('height', new_vv_height), $('#resultID2').css('top', new_vv_top), $('#resultID2').css('left', new_vv_left + new_vv_width / 2 + new_spaceBetweenTranslations * 2), $('#resultID2').css('width', new_vv_width / 2 - new_spaceBetweenTranslations), $('#resultID2').css('height', new_vv_height))) : ($('#resultID1').css('top', _0x21fbe3), $('#resultID1').css('left', _0x5c8df9), $('#resultID1').css('width', _0x44b4b6), $('#resultID1').css('height', _0x3d115a), $('#resultID2').hide());
    $('.titletext').css('opacity', 0);
    $('#dateid').css('top', _0x5eb8e3);
    $('#dateid').css('left', _0x192583);
    $('#dateid').css('width', _0x18d3fb);
    $('#dateid').css('height', _0xe7d848);
    $('#copyrightid').css('top', _0x484267);
    $('#copyrightid').css('left', _0x1b548a);
    $('#copyrightid').css('width', _0x413090);
    $('#copyrightid').css('height', _0x536d82);
    $('#logoid').css('top', _0x20ff0e);
    $('#logoid').css('left', _0x1bed2b);
    $('#logoid').css('width', _0x55e434);
    $('#logoid').css('height', _0xc4398d);
    if (_0x5d22be.ShowVVLogo) {
        const _0x43d597 = '<div>VerseVIEW<br>www.verseview.info</div>';
        $('#logoid').html(_0x43d597);
    } else {
        if (_0x5d22be.ShowCustomLogo) {
            const _0x1cafd4 = '<div>' + _0x5d22be.LogoLine1 + '<br>' + _0x5d22be.LogoLine2 + '</div>';
            $('#logoid').html(_0x1cafd4);
        }
    }
    _0x5d22be.ShowDate ? (getDate(), $('#dateid').show()) : $('#dateid').hide();
    $('#copyrightid').html(_0x5d22be.contentCopyright);
    var _0x2ca022 = p_font1;
    newFont1 != '' && (_0x2ca022 = newFont1);
    _0x5d22be.EnableTransition && ($('#resultID_DIV').addClass('elementToFadeOut'), $('#resultID_DIV').removeClass('elementToFadeIn'));
    $('#resultID1').css('font-family', _0x2ca022);
    _0x5d22be.content1direction ? $('#resultID1').css('direction', 'ltr') : $('#resultID1').css('direction', 'rtl');
    $('#resultID1').css(text1_style);
    $('#resultID1').html(p_text1);
    $('#footerID_DIV').css(footer_style);
    _0x5d22be.presentationType == 0 ? p_title != '' ? ($('#resultIDRef').css('font-family', _0x2ca022), $('#resultIDRef').css(ref_border), $('#resultIDRef').html(p_title), $('#resultIDRef').show()) : $('#resultIDRef').hide() : $('#resultIDRef').hide();
    if (showBothTranslations && p_text2.length > 2) {
        var _0x2ca022 = p_font2;
        newFont2 != '' && (_0x2ca022 = newFont2);
        $('#resultID2').css('font-family', _0x2ca022);
        _0x5d22be.content2direction ? $('#resultID2').css('direction', 'ltr') : $('#resultID2').css('direction', 'rtl');
        $('#resultID2').css(text2_style);
        $('#resultID2').html(p_text2);
    }
    _0x5d22be.presentationType == 0 && (p_title != '' && textFit(document.getElementsByClassName('box0')[0], {
        minFontSize: minfont,
        maxFontSize: maxfont,
        alignVert: true,
        multiLine: textMultiLine,
        widthOnly: false,
        detectMultiLine: false
    }));
    textFit(document.getElementsByClassName('box1')[0], {
        minFontSize: minfont,
        maxFontSize: maxfont,
        alignVert: true,
        multiLine: textMultiLine,
        widthOnly: false,
        detectMultiLine: false
    });
    showBothTranslations && p_text2.length > 2 && textFit(document.getElementsByClassName('box2')[0], {
        minFontSize: minfont,
        maxFontSize: maxfont,
        alignVert: true,
        multiLine: textMultiLine,
        widthOnly: false,
        detectMultiLine: false
    });
    _0x5d22be.EnableTransition && ($('#resultID_DIV').addClass('elementToFadeIn'), $('#resultID_DIV').removeClass('elementToFadeOut'));
}
var t1_ratio = 0.5;
var t2_ratio = 0.5;
function setSplitRatio() {
    var _0x2eac03 = p_text1.length;
    var _0x3a9ca3 = p_text2.length;
    t1_ratio = _0x2eac03 / (_0x2eac03 + _0x3a9ca3);
    t2_ratio = 1 - t1_ratio;
}
function getDate() {
    var _0x1b033d = new Date();
    var _0x11b5d3 = _0x1b033d.getHours();
    var _0x239755 = '';
    var _0x1b9639 = ' AM';
    _0x11b5d3 == 0 ? _0x239755 = 12 : _0x11b5d3 <= 11 ? _0x239755 = _0x11b5d3 : _0x11b5d3 == 12 ? (_0x239755 = 12, _0x1b9639 = ' PM') : (_0x239755 = _0x11b5d3 - 12, _0x1b9639 = ' PM');
    var _0x5665aa = _0x1b033d.getMinutes();
    _0x5665aa < 10 && (_0x5665aa = '0' + _0x5665aa);
    $('#dateid').html(_0x1b033d.toDateString() + ' &nbsp;&nbsp; ' + _0x239755 + ':' + _0x5665aa + _0x1b9639);
    var _0x5f54b4 = setTimeout(getDate, 5000);
}