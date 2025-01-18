const {fileacess} = require('./fileaccess');
const {bibleVersion} = require('./bibleversion');
const child_process = require('child_process');
const {app} = require('electron');
const path = require('path');
const {chmod} = require('fs');
const vvFileAccess = new fileacess();
function initialSetup() {
    const _0x51093d = vvFileAccess.vvFileExistsSync('./vvdata/');
    if (!_0x51093d) {
        const _0x553a54 = false;
        const _0x5d0813 = false;
        const _0x1599b3 = false;
        vvFileAccess.vvcopyFileSync('./bible_database/kjv.db', './vvdata/bible/kjv.db', _0x553a54, _0x5d0813, _0x1599b3);
        vvFileAccess.vvcopyFileSync('./bible_database/municode.db', './vvdata/bible/municode.db', _0x553a54, _0x5d0813, _0x1599b3);
        vvFileAccess.vvcopyFileSync('./bible_database/hindi_unicode.db', './vvdata/bible/hindi_unicode.db', _0x553a54, _0x5d0813, _0x1599b3);
        vvFileAccess.vvcopyFileSync('./bible_database/tamil.db', './vvdata/bible/tamil.db', _0x553a54, _0x5d0813, _0x1599b3);
        vvFileAccess.vvcopyFileSync('./bible_database/telugu.db', './vvdata/bible/telugu.db', _0x553a54, _0x5d0813, _0x1599b3);
        vvFileAccess.vvcopyFileSync('./bible_database/lbla.db', './vvdata/bible/lbla.db', _0x553a54, _0x5d0813, _0x1599b3);
        vvFileAccess.vvcopyFileSync('./bible_database/version.json', './vvdata/bible/version.json', _0x553a54, _0x5d0813, _0x1599b3);
        vvFileAccess.vvcopyFileSync('./songs_database/songs.db', './vvdata/songs/songs.db', _0x553a54, _0x5d0813, _0x1599b3);
        vvFileAccess.vvcopyFileSync('./mainApp/config/config.json', './vvdata/config/config.json', _0x553a54, _0x5d0813, _0x1599b3);
        vvFileAccess.vvcopyFileSync('./content/schedule/schedule.json', './vvdata/schedule/schedule.json', _0x553a54, _0x5d0813, _0x1599b3);
        vvFileAccess.vvcopyFileSync('./imagesrc/', './vvdata/background/still/', _0x553a54, _0x5d0813, _0x1599b3);
        vvFileAccess.vvcopyFileSync('./mainApp/network/webroot/', './vvdata/network/webroot/', _0x553a54, _0x5d0813, _0x1599b3);
        if (process.platform === 'darwin') {
            const _0x472df5 = app.getPath('userData').replace(/ /g, '\\ ');
            run_script('rudolf', [
                '-R',
                '766',
                _0x472df5
            ], null);
        }
    }
    initialSetup_2();
    initialSetup_3();
}
function initialSetup_2() {
    const _0x557d64 = vvFileAccess.vvFileExistsSync('./vvdata/network/webroot/stageview/stage3');
    if (!_0x557d64) {
        const _0x4672ee = false;
        const _0x32b7b0 = false;
        const _0x15613b = false;
        vvFileAccess.vvcopyFileSync('./mainApp/network/webroot/stageview/', './vvdata/network/webroot/stageview/', _0x4672ee, _0x32b7b0, _0x15613b);
    }
    const _0x2de5ec = vvFileAccess.vvFileExistsSync('./vvdata/network/webroot/stageview/stage5');
    if (!_0x2de5ec) {
        const _0x523ef2 = false;
        const _0x618a98 = false;
        const _0x41410f = false;
        vvFileAccess.vvcopyFileSync('./mainApp/network/webroot/stageview/stage5', './vvdata/network/webroot/stageview/stage5', _0x523ef2, _0x618a98, _0x41410f);
        vvFileAccess.vvcopyFileSync('./mainApp/network/webroot/stageview/stage6', './vvdata/network/webroot/stageview/stage6', _0x523ef2, _0x618a98, _0x41410f);
        vvFileAccess.vvcopyFileSync('./mainApp/network/webroot/stageview/stageview.js', './vvdata/network/webroot/stageview/stageview.js', _0x523ef2, _0x618a98, _0x41410f);
    }
}
function initialSetup_3() {
    const _0xaec4a3 = vvFileAccess.vvFileExistsSync('./vvdata/theme/theme.json');
    if (!_0xaec4a3) {
        const _0x16c340 = false;
        const _0xbb986c = false;
        const _0x30e4af = false;
        vvFileAccess.vvcopyFileSync('./mainApp/theme/theme.json', './vvdata/theme/theme.json', _0x16c340, _0xbb986c, _0x30e4af);
    }
}
function run_script(_0x319d40, _0x347496, _0x4ab53a) {
    let _0x196fd2 = '';
    _0x319d40 == 'rudolf' && (_0x196fd2 = 'chmod');
    var _0x163dfe = child_process.spawn(_0x196fd2, _0x347496, {
        encoding: 'utf8',
        shell: true
    });
    _0x163dfe.on('error', _0x7e6cdf => {
        console.log(_0x7e6cdf);
    });
}
module.exports = { initialSetup: initialSetup };