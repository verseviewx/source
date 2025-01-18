const {songdb} = require('./songdb');
let songdbObj = new songdb();
async function songdbInit(_0x437711) {
    songdbObj.init(_0x437711);
    await songdbObj.connect();
}
module.exports = {
    songdbInit: songdbInit,
    songdbObj: songdbObj
};