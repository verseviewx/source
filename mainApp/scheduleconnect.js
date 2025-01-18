const {vvschedule} = require('./schedule');
let vvScheduleObj = new vvschedule();
function scheduleInit() {
    let _0x29f097 = vvScheduleObj.loadVVSchedule();
    return _0x29f097;
}
module.exports = {
    scheduleInit: scheduleInit,
    vvScheduleObj: vvScheduleObj
};