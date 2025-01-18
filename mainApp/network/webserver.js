const {app} = require('electron');
const {biblecontent} = require('../bible/biblecontent');
const {songdbObj} = require('../songs/songconnect');
const {vvScheduleObj} = require('../scheduleconnect');
const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;
let serverhandle = null;
let stageViewData = {};
let newdata = {};
let pdata = {
    content1: '',
    content2: '',
    content1next: '',
    content2next: '',
    font1: '',
    font2: '',
    title: ''
};
const PORT = process.env.PORT || 3500;
var command;
var value;
var value2;
const LIVESTREAM_CMD = 9;
const STAGEVIEWDATA_CMD = 10;
const GET_CONFIG_DATA = 40;
const serveFile = async (_0x8ba755, _0x20b199, _0x42306f) => {
    try {
        let _0x2257cf = !_0x20b199.includes('image') ? 'utf8' : '';
        _0x20b199 == 'font/ttf' && (_0x2257cf = '');
        const _0x448017 = await fsPromises.readFile(_0x8ba755, _0x2257cf);
        const _0x291b3e = _0x20b199 === 'application/json' ? JSON.parse(_0x448017) : _0x448017;
        _0x42306f.writeHead(_0x8ba755.includes('404.html') ? 404 : 200, { 'Content-Type': _0x20b199 });
        _0x42306f.end(_0x20b199 === 'application/json' ? JSON.stringify(_0x291b3e) : _0x291b3e);
    } catch (_0x132552) {
        console.log(_0x132552);
        _0x42306f.statusCode = 500;
        _0x42306f.end();
    }
};
const server = http.createServer(async (_0x2708e0, _0x565ca7) => {
    var _0x3c7f46 = isCmdValue(_0x2708e0.url);
    if (_0x3c7f46) {
        const _0x46a49f = await processCommandFunction(_0x2708e0.url);
        return _0x565ca7.writeHead(200, { 'Content-Type': 'text/plain' }), _0x565ca7.end(JSON.stringify(_0x46a49f)), true;
    }
    const _0x1d5bf4 = path.extname(_0x2708e0.url);
    let _0x4c8220;
    switch (_0x1d5bf4) {
    case '.css':
        _0x4c8220 = 'text/css';
        break;
    case '.js':
        _0x4c8220 = 'text/javascript';
        break;
    case '.json':
        _0x4c8220 = 'application/json';
        break;
    case '.jpg':
        _0x4c8220 = 'image/jpeg';
        break;
    case '.png':
        _0x4c8220 = 'image/png';
        break;
    case '.txt':
        _0x4c8220 = 'text/plain';
        break;
    case '.ttf':
        _0x4c8220 = 'font/ttf';
        break;
    case '.svg':
        _0x4c8220 = 'image/svg+xml';
        break;
    case '.woff':
        _0x4c8220 = 'font/woff';
        break;
    case '.woff2':
        _0x4c8220 = 'font/woff2';
        break;
    default:
        _0x4c8220 = 'text/html';
    }
    const _0x4c2d4e = app.getPath('userData');
    const _0x854def = '/vvdata/network/webroot';
    let _0x384b44 = _0x4c8220 === 'text/html' && _0x2708e0.url === '/' ? path.join(_0x4c2d4e, _0x854def, 'index.html') : _0x4c8220 === 'text/html' && _0x2708e0.url.slice(-1) === '/' ? path.join(_0x4c2d4e, _0x854def, _0x2708e0.url, 'index.html') : _0x4c8220 === 'text/html' ? path.join(_0x4c2d4e, _0x854def, _0x2708e0.url) : path.join(_0x4c2d4e, _0x854def, _0x2708e0.url);
    if (!_0x1d5bf4 && _0x2708e0.url.slice(-1) !== '/') {
        _0x384b44 += '.html';
    }
    const _0xe01389 = fs.existsSync(_0x384b44);
    _0xe01389 ? serveFile(_0x384b44, _0x4c8220, _0x565ca7) : serveFile(path.join(_0x4c2d4e, _0x854def, '404.html'), 'text/html', _0x565ca7);
});
function webserver(_0x587eb4, _0x4a9900) {
    if (_0x587eb4) {
        serverhandle = server.listen(_0x4a9900, () => {
        });
    } else {
        if (serverhandle != null) {
            serverhandle.close(_0x5d60f2);
        } else {
        }
    }
    function _0x5d60f2() {
        serverhandle = null;
    }
}
function isCmdValue(_0x43b9f4) {
    var _0x1b2d90 = false;
    var _0x32610e = _0x43b9f4.split('?');
    return _0x32610e.length > 1 ? true : false;
}
function getPathValue(_0x1258e2) {
    var _0xd240f3 = _0x1258e2.split('\n');
    _0xd240f3 = _0xd240f3[0].split('?');
    _0xd240f3 = _0xd240f3[1].split('&');
    command = _0xd240f3[0].split('=')[1];
    value = _0xd240f3[1].split('=')[1];
    value = value.replace(/%20/g, ' ');
    if (_0xd240f3[2] != null) {
        value2 = _0xd240f3[2].split('=')[1];
        value2 = value2.replace(/%20/g, ' ');
    }
}
async function processCommandFunction(_0x283df0) {
    getPathValue(_0x283df0);
    newdata.command = command;
    newdata.value1 = value;
    newdata.value2 = value2;
    if (command == 7) {
        const _0xcd55da = processRef(value);
        if (_0xcd55da == false) {
            let _0x2e1c06 = new Array({ goodref: false });
            return _0x2e1c06;
        }
        let _0x10b223 = {
            command: 0,
            version: 1,
            bookval: bValue,
            chapterval: chValue,
            verseval: verValue,
            keyword: '',
            searchType: 0
        };
        let _0x2c65fd = await biblecontent(_0x10b223);
        return _0x2c65fd[0].bValue = bValue, _0x2c65fd[0].chValue = chValue, _0x2c65fd[0].verValue = verValue, _0x2c65fd[0].goodref = true, _0x2c65fd;
    }
    if (command == 8) {
    }
    if (command == 20) {
        let _0x44cc7b = value;
        let _0x349570 = await songdbObj.search(_0x44cc7b, 1);
        return _0x349570.length == 0 && (_0x44cc7b = decodeURI(value) + '%', _0x349570 = await songdbObj.search(_0x44cc7b, 0)), _0x349570;
    }
    if (command == 22) {
    }
    if (command == 21 || command == 31) {
        let _0xa720da = await songdbObj.getSong(value);
        return _0xa720da;
    }
    if (command == 30) {
        let _0xff4197 = await vvScheduleObj.loadVVSchedule();
        return _0xff4197;
    }
    if (command == STAGEVIEWDATA_CMD) {
        return stageViewData;
    }
    if (command == GET_CONFIG_DATA) {
        return true;
    }
    return command == LIVESTREAM_CMD ? pdata : (app.emit('remote_command'), {});
}
function getRemoteData() {
    return newdata;
}
function setPresentationData(_0x49d884) {
    const _0x5e6dbf = 2;
    const _0x129659 = 3;
    const _0x89941 = 5;
    _0x49d884.presentationType != _0x5e6dbf && _0x49d884.presentationType != _0x129659 && _0x49d884.presentationType != _0x89941 ? (pdata.content1 = _0x49d884.content1, pdata.content2 = _0x49d884.content2, pdata.content1next = _0x49d884.content1next, pdata.content2next = _0x49d884.content2next, pdata.font1 = _0x49d884.content1Font, pdata.font2 = _0x49d884.content2Font, pdata.title = _0x49d884.title) : (pdata.content1 = '', pdata.content2 = '', pdata.content1next = '', pdata.content2next = '', pdata.font1 = '', pdata.font2 = '', pdata.title = '');
}
async function someAsyncFunc() {
    let _0x4f12b2 = 'Old value';
    return await new Promise(_0x1bef9e => setTimeout(() => {
        _0x4f12b2 = 'newValue';
        _0x1bef9e();
    }, 3000)), _0x4f12b2;
}
var bValue = null;
var chValue = null;
var verValue = null;
var errorMessageTxt = '';
var booknames = new Array('Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Esther', 'Job', 'Psalm', 'Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi', 'Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 'Jude', 'Revelation');
var numofch = new Array([0], [
    50,
    31,
    25,
    24,
    26,
    32,
    22,
    24,
    22,
    29,
    32,
    32,
    20,
    18,
    24,
    21,
    16,
    27,
    33,
    38,
    18,
    34,
    24,
    20,
    67,
    34,
    35,
    46,
    22,
    35,
    43,
    55,
    32,
    20,
    31,
    29,
    43,
    36,
    30,
    23,
    23,
    57,
    38,
    34,
    34,
    28,
    34,
    31,
    22,
    33,
    26
], [
    40,
    22,
    25,
    22,
    31,
    23,
    30,
    25,
    32,
    35,
    29,
    10,
    51,
    22,
    31,
    27,
    36,
    16,
    27,
    25,
    26,
    36,
    31,
    33,
    18,
    40,
    37,
    21,
    43,
    46,
    38,
    18,
    35,
    23,
    35,
    35,
    38,
    29,
    31,
    43,
    38
], [
    27,
    17,
    16,
    17,
    35,
    19,
    30,
    38,
    36,
    24,
    20,
    47,
    8,
    59,
    57,
    33,
    34,
    16,
    30,
    37,
    27,
    24,
    33,
    44,
    23,
    55,
    46,
    34
], [
    36,
    54,
    34,
    51,
    49,
    31,
    27,
    89,
    26,
    23,
    36,
    35,
    16,
    33,
    45,
    41,
    50,
    13,
    32,
    22,
    29,
    35,
    41,
    30,
    25,
    18,
    65,
    23,
    31,
    40,
    16,
    54,
    42,
    56,
    29,
    34,
    13
], [
    34,
    46,
    37,
    29,
    49,
    33,
    25,
    26,
    20,
    29,
    22,
    32,
    32,
    18,
    29,
    23,
    22,
    20,
    22,
    21,
    20,
    23,
    30,
    25,
    22,
    19,
    19,
    26,
    68,
    29,
    20,
    30,
    52,
    29,
    12
], [
    24,
    18,
    24,
    17,
    24,
    15,
    27,
    26,
    35,
    27,
    43,
    23,
    24,
    33,
    15,
    63,
    10,
    18,
    28,
    51,
    9,
    45,
    34,
    16,
    33
], [
    21,
    36,
    23,
    31,
    24,
    31,
    40,
    25,
    35,
    57,
    18,
    40,
    15,
    25,
    20,
    20,
    31,
    13,
    31,
    30,
    48,
    25
], [
    4,
    22,
    23,
    18,
    22
], [
    31,
    28,
    36,
    21,
    22,
    12,
    21,
    17,
    22,
    27,
    27,
    15,
    25,
    23,
    52,
    35,
    23,
    58,
    30,
    24,
    42,
    15,
    23,
    29,
    22,
    44,
    25,
    12,
    25,
    11,
    31,
    13
], [
    24,
    27,
    32,
    39,
    12,
    25,
    23,
    29,
    18,
    13,
    19,
    27,
    31,
    39,
    33,
    37,
    23,
    29,
    33,
    43,
    26,
    22,
    51,
    39,
    25
], [
    22,
    53,
    46,
    28,
    34,
    18,
    38,
    51,
    66,
    28,
    29,
    43,
    33,
    34,
    31,
    34,
    34,
    24,
    46,
    21,
    43,
    29,
    53
], [
    25,
    18,
    25,
    27,
    44,
    27,
    33,
    20,
    29,
    37,
    36,
    21,
    21,
    25,
    29,
    38,
    20,
    41,
    37,
    37,
    21,
    26,
    20,
    37,
    20,
    30
], [
    29,
    54,
    55,
    24,
    43,
    26,
    81,
    40,
    40,
    44,
    14,
    47,
    40,
    14,
    17,
    29,
    43,
    27,
    17,
    19,
    8,
    30,
    19,
    32,
    31,
    31,
    32,
    34,
    21,
    30
], [
    36,
    17,
    18,
    17,
    22,
    14,
    42,
    22,
    18,
    31,
    19,
    23,
    16,
    22,
    15,
    19,
    14,
    19,
    34,
    11,
    37,
    20,
    12,
    21,
    27,
    28,
    23,
    9,
    27,
    36,
    27,
    21,
    33,
    25,
    33,
    27,
    23
], [
    10,
    11,
    70,
    13,
    24,
    17,
    22,
    28,
    36,
    15,
    44
], [
    13,
    11,
    20,
    32,
    23,
    19,
    19,
    73,
    18,
    38,
    39,
    36,
    47,
    31
], [
    10,
    22,
    23,
    15,
    17,
    14,
    14,
    10,
    17,
    32,
    3
], [
    42,
    22,
    13,
    26,
    21,
    27,
    30,
    21,
    22,
    35,
    22,
    20,
    25,
    28,
    22,
    35,
    22,
    16,
    21,
    29,
    29,
    34,
    30,
    17,
    25,
    6,
    14,
    23,
    28,
    25,
    31,
    40,
    22,
    33,
    37,
    16,
    33,
    24,
    41,
    30,
    24,
    34,
    17
], [
    150,
    6,
    12,
    8,
    8,
    12,
    10,
    17,
    9,
    20,
    18,
    7,
    8,
    6,
    7,
    5,
    11,
    15,
    50,
    14,
    9,
    13,
    31,
    6,
    10,
    22,
    12,
    14,
    9,
    11,
    12,
    24,
    11,
    22,
    22,
    28,
    12,
    40,
    22,
    13,
    17,
    13,
    11,
    5,
    26,
    17,
    11,
    9,
    14,
    20,
    23,
    19,
    9,
    6,
    7,
    23,
    13,
    11,
    11,
    17,
    12,
    8,
    12,
    11,
    10,
    13,
    20,
    7,
    35,
    36,
    5,
    24,
    20,
    28,
    23,
    10,
    12,
    20,
    72,
    13,
    19,
    16,
    8,
    18,
    12,
    13,
    17,
    7,
    18,
    52,
    17,
    16,
    15,
    5,
    23,
    11,
    13,
    12,
    9,
    9,
    5,
    8,
    28,
    22,
    35,
    45,
    48,
    43,
    13,
    31,
    7,
    10,
    10,
    9,
    8,
    18,
    19,
    2,
    29,
    176,
    7,
    8,
    9,
    4,
    8,
    5,
    6,
    5,
    6,
    8,
    8,
    3,
    18,
    3,
    3,
    21,
    26,
    9,
    8,
    24,
    13,
    10,
    7,
    12,
    15,
    21,
    10,
    20,
    14,
    9,
    6
], [
    31,
    33,
    22,
    35,
    27,
    23,
    35,
    27,
    36,
    18,
    32,
    31,
    28,
    25,
    35,
    33,
    33,
    28,
    24,
    29,
    30,
    31,
    29,
    35,
    34,
    28,
    28,
    27,
    28,
    27,
    33,
    31
], [
    12,
    18,
    26,
    22,
    16,
    20,
    12,
    29,
    17,
    18,
    20,
    10,
    14
], [
    8,
    17,
    17,
    11,
    16,
    16,
    13,
    13,
    14
], [
    66,
    31,
    22,
    26,
    6,
    30,
    13,
    25,
    22,
    21,
    34,
    16,
    6,
    22,
    32,
    9,
    14,
    14,
    7,
    25,
    6,
    17,
    25,
    18,
    23,
    12,
    21,
    13,
    29,
    24,
    33,
    9,
    20,
    24,
    17,
    10,
    22,
    38,
    22,
    8,
    31,
    29,
    25,
    28,
    28,
    25,
    13,
    15,
    22,
    26,
    11,
    23,
    15,
    12,
    17,
    13,
    12,
    21,
    14,
    21,
    22,
    11,
    12,
    19,
    12,
    25,
    24
], [
    52,
    19,
    37,
    25,
    31,
    31,
    30,
    34,
    22,
    26,
    25,
    23,
    17,
    27,
    22,
    21,
    21,
    27,
    23,
    15,
    18,
    14,
    30,
    40,
    10,
    38,
    24,
    22,
    17,
    32,
    24,
    40,
    44,
    26,
    22,
    19,
    32,
    21,
    28,
    18,
    16,
    18,
    22,
    13,
    30,
    5,
    28,
    7,
    47,
    39,
    46,
    64,
    34
], [
    5,
    22,
    22,
    66,
    22,
    22
], [
    48,
    28,
    10,
    27,
    17,
    17,
    14,
    27,
    18,
    11,
    22,
    25,
    28,
    23,
    23,
    8,
    63,
    24,
    32,
    14,
    49,
    32,
    31,
    49,
    27,
    17,
    21,
    36,
    26,
    21,
    26,
    18,
    32,
    33,
    31,
    15,
    38,
    28,
    23,
    29,
    49,
    26,
    20,
    27,
    31,
    25,
    24,
    23,
    35
], [
    12,
    21,
    49,
    30,
    37,
    31,
    28,
    28,
    27,
    27,
    21,
    45,
    13
], [
    14,
    11,
    23,
    5,
    19,
    15,
    11,
    16,
    14,
    17,
    15,
    12,
    14,
    16,
    9
], [
    3,
    20,
    32,
    21
], [
    9,
    15,
    16,
    15,
    13,
    27,
    14,
    17,
    14,
    15
], [
    1,
    21
], [
    4,
    17,
    10,
    10,
    11
], [
    7,
    16,
    13,
    12,
    13,
    15,
    16,
    20
], [
    3,
    15,
    13,
    19
], [
    3,
    17,
    20,
    19
], [
    3,
    18,
    15,
    20
], [
    2,
    15,
    23
], [
    14,
    21,
    13,
    10,
    14,
    11,
    15,
    14,
    23,
    17,
    12,
    17,
    14,
    9,
    21
], [
    4,
    14,
    17,
    18,
    6
], [
    28,
    25,
    23,
    17,
    25,
    48,
    34,
    29,
    34,
    38,
    42,
    30,
    50,
    58,
    36,
    39,
    28,
    27,
    35,
    30,
    34,
    46,
    46,
    39,
    51,
    46,
    75,
    66,
    20
], [
    16,
    45,
    28,
    35,
    41,
    43,
    56,
    37,
    38,
    50,
    52,
    33,
    44,
    37,
    72,
    47,
    20
], [
    24,
    80,
    52,
    38,
    44,
    39,
    49,
    50,
    56,
    62,
    42,
    54,
    59,
    35,
    35,
    32,
    31,
    37,
    43,
    48,
    47,
    38,
    71,
    56,
    53
], [
    21,
    51,
    25,
    36,
    54,
    47,
    71,
    53,
    59,
    41,
    42,
    57,
    50,
    38,
    31,
    27,
    33,
    26,
    40,
    42,
    31,
    25
], [
    28,
    26,
    47,
    26,
    37,
    42,
    15,
    60,
    40,
    43,
    48,
    30,
    25,
    52,
    28,
    41,
    40,
    34,
    28,
    41,
    38,
    40,
    30,
    35,
    27,
    27,
    32,
    44,
    31
], [
    16,
    32,
    29,
    31,
    25,
    21,
    23,
    25,
    39,
    33,
    21,
    36,
    21,
    14,
    23,
    33,
    27
], [
    16,
    31,
    16,
    23,
    21,
    13,
    20,
    40,
    13,
    27,
    33,
    34,
    31,
    13,
    40,
    58,
    24
], [
    13,
    24,
    17,
    18,
    18,
    21,
    18,
    16,
    24,
    15,
    18,
    33,
    21,
    14
], [
    6,
    24,
    21,
    29,
    31,
    26,
    18
], [
    6,
    23,
    22,
    21,
    32,
    33,
    24
], [
    4,
    30,
    30,
    21,
    23
], [
    4,
    29,
    23,
    25,
    18
], [
    5,
    10,
    20,
    13,
    18,
    28
], [
    3,
    12,
    17,
    18
], [
    6,
    20,
    15,
    16,
    16,
    25,
    21
], [
    4,
    18,
    26,
    17,
    22
], [
    3,
    16,
    15,
    15
], [
    1,
    25
], [
    13,
    14,
    18,
    19,
    16,
    14,
    20,
    28,
    13,
    28,
    39,
    40,
    29,
    25
], [
    5,
    27,
    26,
    18,
    17,
    20
], [
    5,
    25,
    25,
    22,
    19,
    14
], [
    3,
    21,
    22,
    18
], [
    5,
    10,
    29,
    24,
    21,
    21
], [
    1,
    13
], [
    1,
    14
], [
    1,
    25
], [
    22,
    20,
    29,
    22,
    11,
    14,
    17,
    17,
    13,
    21,
    11,
    19,
    17,
    18,
    20,
    8,
    21,
    18,
    24,
    21,
    15,
    27,
    21
]);
function processRef(_0x1a1166) {
    var _0xd6e84f = true;
    var _0x5be8ce = _0x1a1166;
    chValue = 1;
    verValue = 1;
    _0x5be8ce = _0x5be8ce.replace(/^\s+|\s+$/g, '');
    _0x5be8ce = _0x5be8ce.replace(/\s\s+/g, ' ');
    var _0x41fb48 = _0x5be8ce.split(' ');
    var _0x23280e = _0x41fb48.length;
    var _0xe11917 = Number.isInteger(parseInt(_0x41fb48[0]));
    if (_0xe11917 && _0x41fb48[1] != null) {
        bName = _0x41fb48[0] + ' ' + _0x41fb48[1].toLowerCase();
        if (_0x41fb48[2] != null) {
            var _0x14aea9 = _0x41fb48[2].indexOf(':');
            _0x14aea9 != -1 ? (_0x41fb48 = _0x41fb48[2].split(':'), chValue = _0x41fb48[0], verValue = _0x41fb48[1]) : (chValue = _0x41fb48[2], _0x41fb48[3] != null && (verValue = _0x41fb48[3]));
        }
    } else {
        bName = _0x41fb48[0].toLowerCase();
        if (_0x41fb48[1] != null) {
            var _0x14aea9 = _0x41fb48[1].indexOf(':');
            _0x14aea9 != -1 ? (_0x41fb48 = _0x41fb48[1].split(':'), chValue = _0x41fb48[0], verValue = _0x41fb48[1]) : (chValue = _0x41fb48[1], _0x41fb48[2] != null && (verValue = _0x41fb48[2]));
        }
    }
    var _0x187137 = booknames.length;
    bValue = -1;
    for (var _0x44e9fd = 0; _0x44e9fd < _0x187137; _0x44e9fd++) {
        var _0x150e4f = booknames[_0x44e9fd].toLowerCase();
        var _0x5bd315 = new RegExp('^ ' + bName);
        var _0x1d7c89 = _0x5bd315.test(_0x150e4f);
        if (_0x1d7c89) {
            bFullName = booknames[_0x44e9fd];
            bValue = _0x44e9fd + 1;
            break;
        }
    }
    if (bValue == -1) {
        for (var _0x44e9fd = 0; _0x44e9fd < _0x187137; _0x44e9fd++) {
            var _0x150e4f = booknames[_0x44e9fd].toLowerCase();
            var _0x5bd315 = new RegExp('^' + bName);
            var _0x1d7c89 = _0x5bd315.test(_0x150e4f);
            if (_0x1d7c89) {
                bFullName = booknames[_0x44e9fd];
                bValue = _0x44e9fd + 1;
                break;
            }
        }
    }
    if (!Number.isInteger(parseInt(chValue))) {
        errorMessageTxt = 'Invalid chapter number.';
        _0xd6e84f = false;
    } else {
        if (!Number.isInteger(parseInt(verValue))) {
            errorMessageTxt = 'Invalid verse number.';
            _0xd6e84f = false;
        } else {
            if (bValue == -1) {
                errorMessageTxt = 'Did not find matching book name to ' + bName;
                _0xd6e84f = false;
            } else {
                var _0x4b7353 = numofch[bValue][0];
                if (chValue < 1 || chValue > _0x4b7353) {
                    errorMessageTxt = 'Invalid chapter number for the book ' + bFullName;
                    _0xd6e84f = false;
                } else {
                    var _0x35cd19 = numofch[bValue][chValue];
                    (verValue < 1 || verValue > _0x35cd19) && (errorMessageTxt = 'Invalid verse number for ' + bFullName + ' ' + chValue, _0xd6e84f = false);
                }
            }
        }
    }
    return _0xd6e84f;
}
function setStageView(_0x5b99a4) {
    stageViewData = _0x5b99a4;
}
function getStageView() {
    return stageViewData;
}
module.exports = {
    webserver: webserver,
    getRemoteData: getRemoteData,
    setPresentationData: setPresentationData,
    setStageView: setStageView,
    getStageView: getStageView
};