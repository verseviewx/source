const CURRENT_REVISION = 11;
function addFonts2Config() {
    var _0x3facff = new Array('Alegreya Sans', 'Anek Malayalam', 'AnjaliOldLipi', 'Aruna', 'Baloo Chettan', 'Baloo Tammudu', 'Baloo Thambi', 'Bitter', 'Cabin', 'Calibri', 'Chilanka Malayalam', 'Futura', 'Garamond', 'Gayathri Malayalam', 'Gill Sans', 'Helvetica', 'Impact', 'Jomhuria Arabic', 'Kambar', 'Lalezra Arabic', 'Lohit Malayalam', 'Manjari Malayalam', 'Meera Malayalam', 'MeeraInimai Tamil', 'Montserrat', 'Myriad Pro', 'NotoSans Hindi', 'Optima', 'Palatino', 'Patua One', 'Ramabhadra Telugu', 'Rancho', 'Roboto Slab', 'Rockwell', 'Suranna Telugu', 'Tahoma', 'Tenali Telugu', 'Verdana');
    updateSaveConfig('fontList', _0x3facff);
}
function updateFrom_1() {
    const _0x58f81a = configJSON.configuration[0].revisionNumber;
    (_0x58f81a == 1 || _0x58f81a == null) && (addFonts2Config(), updateSaveConfig('revisionNumber', CURRENT_REVISION));
}
function updateData() {
    updateFrom_1();
    update_revision();
}
function update_revision() {
    const _0x55e8f9 = configJSON.configuration[0].revisionNumber;
    _0x55e8f9 != 4 && updateSaveConfig('revisionNumber', CURRENT_REVISION);
}