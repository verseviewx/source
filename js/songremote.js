async function songremote_present(_0x859d83, _0xc72ed8) {
    await songtab_getSongLyrics(_0x859d83, false, false);
    console.log('song present');
    songremote_passdata(songtab_activeSong, _0xc72ed8);
}
function songremote_passdata(_0x446f5c, _0x56b87c) {
    let _0x48a0f3 = string2array(_0x446f5c[0].lyrics);
    let _0x3c0d5c = _0x446f5c[0].lyrics2;
    console.log('song pass data...');
    _0x3c0d5c != null ? _0x3c0d5c = string2array(_0x446f5c[0].lyrics2) : _0x3c0d5c = new Array();
    _0x3c0d5c = makeSlidesSameSize(_0x48a0f3, _0x3c0d5c);
    processPresentationSongClick(_0x446f5c, _0x48a0f3, _0x3c0d5c, _0x56b87c);
}