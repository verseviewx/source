const {app} = require('electron');
const path = require('path');
const fse = require('fs-extra');
function vvschedule() {
    this.loadVVSchedule = _0x28e099;
    this.saveVVSchedule = _0xd7a440;
    function _0x28e099() {
        const _0x360b38 = path.join(app.getPath('userData'), './vvdata/schedule/schedule.json');
        const _0x8dd107 = fse.readJsonSync(_0x360b38);
        return _0x8dd107;
    }
    function _0xd7a440(_0x151662) {
        const _0x36b7af = path.join(app.getPath('userData'), './vvdata/schedule/schedule.json');
        fse.chmod(_0x36b7af, '777', () => {
            fse.writeJsonSync(_0x36b7af, _0x151662);
        });
    }
}
module.exports = { vvschedule: vvschedule };