const {dialog} = require('electron');
const fileFilter = {
    backgroundImageFilters: [{
            name: 'Images',
            extensions: [
                'jpg',
                'png',
                'mp4'
            ]
        }],
    bibleDbFilters: [{
            name: 'Bible Database',
            extensions: [
                'db',
                'xml'
            ]
        }],
    songXMLFilters: [{
            name: 'Song XML Database',
            extensions: ['xml']
        }]
};
async function selectfile(_0xdeb710) {
    let _0x4afd7e;
    switch (_0xdeb710) {
    case 0:
        _0x4afd7e = fileFilter.backgroundImageFilters;
        break;
    case 1:
        _0x4afd7e = fileFilter.bibleDbFilters;
        break;
    case 2:
        _0x4afd7e = fileFilter.songXMLFilters;
        break;
    default:
        _0x4afd7e = fileFilter.backgroundImageFilters;
        break;
    }
    const {
        canceled: _0x19a1c2,
        filePaths: _0x400873
    } = await dialog.showOpenDialog({
        properties: ['openFile'],
        filters: _0x4afd7e
    });
    if (_0x19a1c2) {
        return;
    } else {
        return _0x400873[0];
    }
}
module.exports = { selectfile: selectfile };