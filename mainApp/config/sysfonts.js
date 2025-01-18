const getSystemFonts = require('get-system-fonts');
async function getsysfonts() {
    const _0x1fd908 = await getSystemFonts();
    return _0x1fd908;
}
module.exports = { getsysfonts: getsysfonts };