const remotesetup = new remotesetupclass();
function remotesetupclass() {
    this.init = _0x6d3961;
    const _0x5eacbd = false;
    function _0x6d3961() {
        _0x4b0c6a();
        const _0x46237a = configJSON.configuration[0].selectedNetworkAddr;
        _0x46237a == null || _0x46237a == '' ? $('#configRemoteHostname').val(configJSON.configuration[0].remotehostname) : $('#configRemoteHostname').val(configJSON.configuration[0].selectedNetworkAddr);
        $('#configRemotePort').val(configJSON.configuration[0].remoteportnumber);
        _0x234aed(configJSON.configuration[0].remoteenable);
        $('#saveRemoteVVSettings').on('click', async function () {
            if (_0x164f5e($('#configRemotePort').val())) {
                if (configJSON.configuration[0].remoteenable) {
                    let _0x563c8e = {
                        command: 0,
                        portnumber: $('#configRemotePort').val()
                    };
                    const _0x3a337f = await window.api.configurevvremote(_0x563c8e);
                    $('#saveRemoteVVSettings').text('ENABLE REMOTE');
                    $('#configRemotePort').prop('disabled', false);
                    $('#configRemoteHostname').prop('disabled', false);
                    updateSaveConfig('remoteenable', false);
                    _0x234aed(false);
                    $('#qrcode').hide();
                    screenstab_disable_stageview();
                } else {
                    let _0x52288c = {
                        command: 1,
                        portnumber: $('#configRemotePort').val()
                    };
                    _0x55adb9('remote setup command: ' + _0x52288c.command);
                    const _0xaec845 = await window.api.configurevvremote(_0x52288c);
                    _0x55adb9('Return value from main ' + _0xaec845);
                    $('#saveRemoteVVSettings').text('DISABLE REMOTE');
                    $('#configRemotePort').prop('disabled', true);
                    $('#configRemoteHostname').prop('disabled', false);
                    updateSaveConfig('remoteenable', true);
                    updateSaveConfig('remoteportnumber', $('#configRemotePort').val());
                    _0x234aed(true);
                    _0x3d1525();
                }
            } else {
                vvDialog('Remote Setup', 'Invalid Port Number. Select value from 50000 to 51000');
            }
        });
        $('#configIPaddr').on('change', function () {
            _0x45d27f();
            _0x3d1525();
        });
        $('#remoteVVRemoteFunc').on('change', function () {
            _0x3d1525();
        });
        $('#configRemoteCopy').on('click', async function () {
            var _0x164084 = $('#configRemoteLink');
            _0x164084.select();
            await navigator.clipboard.writeText(_0x164084.val());
        });
        configJSON.configuration[0].remoteenable && _0x375d58();
    }
    function _0x4b0c6a() {
        let _0x3823cd = configJSON.configuration[0].remoteIPAddrList;
        _0x3823cd.push(configJSON.configuration[0].remotehostname);
        _0x3823cd.push('localhost');
        var _0x538f6f = _0x3823cd.length;
        let _0x18f302 = '';
        clearSelectList('configIPaddr');
        let _0x2293f3 = 0;
        let _0x44b75b;
        let _0x2054ae = -1;
        let _0x48af26 = 0;
        const _0x132787 = configJSON.configuration[0].selectedNetworkAddr;
        const _0x97a0b0 = configJSON.configuration[0].remotehostname;
        for (var _0xf4aa53 = 0; _0xf4aa53 < _0x538f6f; _0xf4aa53++) {
            if (_0x3823cd[_0xf4aa53] != '::1') {
                _0x18f302 += '<option value=' + _0xf4aa53 + '>' + _0x3823cd[_0xf4aa53] + '</option>';
                _0x97a0b0 == _0x3823cd[_0xf4aa53] && (_0x2054ae = _0xf4aa53);
                _0x132787 == _0x3823cd[_0xf4aa53] && (_0x44b75b = _0xf4aa53);
            }
        }
        _0x44b75b == -1 ? _0x48af26 = _0x2054ae : _0x48af26 = _0x44b75b;
        $('#configIPaddr').append(_0x18f302);
        $('#configIPaddr').val(_0x48af26);
    }
    async function _0x375d58() {
        let _0x3d2925 = {
            command: 1,
            portnumber: configJSON.configuration[0].remoteportnumber
        };
        _0x55adb9('remote setup command: ' + _0x3d2925.command + '|' + _0x3d2925.portnumber);
        const _0x34433c = await window.api.configurevvremote(_0x3d2925);
        $('#saveRemoteVVSettings').text('DISABLE REMOTE');
        $('#configRemotePort').val(configJSON.configuration[0].remoteportnumber);
        $('#configRemotePort').prop('disabled', true);
        _0x234aed(true);
        _0x3d1525();
    }
    function _0x234aed(_0x3d8d92) {
        _0x3d8d92 ? ($('#saveRemoteVVSettings').text('DISABLE REMOTE'), $('#remoteVVStatus').text('Remote VerseVIEW is Enabled'), $('#configRemotePort').prop('disabled', true), $('#remoteicon').addClass('text-primary'), $('#remoteicon').removeClass('text-secondary')) : ($('#saveRemoteVVSettings').text('ENABLE REMOTE'), $('#remoteVVStatus').text('Remote VerseVIEW is Disabled'), $('#configRemotePort').prop('disabled', false), $('#remoteicon').addClass('text-secondary'), $('#remoteicon').removeClass('text-primary'));
    }
    function _0x164f5e(_0x54b6c3) {
        if (IsNumeric(_0x54b6c3)) {
            if (withinRange(49152, 65535, _0x54b6c3)) {
                return true;
            }
        }
        return false;
    }
    function _0x3d1525() {
        var _0x226e76 = $('#configRemoteHostname').val();
        var _0x3f2ace = configJSON.configuration[0].remoteportnumber;
        var _0x417ab3 = '';
        var _0x38f696 = 'http://' + _0x226e76 + ':' + _0x3f2ace + '/';
        var _0x105ff2 = $('#remoteVVRemoteFunc').val();
        _0x55adb9('Selected remote func value' + _0x105ff2);
        switch (_0x105ff2) {
        case '1':
            _0x417ab3 = _0x38f696 + 'control.html';
            break;
        case '2':
            _0x417ab3 = _0x38f696 + 'stageview/fullscreen1/c.html';
            break;
        case '3':
            _0x417ab3 = _0x38f696 + 'stageview/fullscreen2/c.html';
            break;
        case '4':
            _0x417ab3 = _0x38f696 + 'stageview/fullscreen3/c.html';
            break;
        case '6':
            _0x417ab3 = _0x38f696 + 'lowerthird/theme6/a/a.html';
            break;
        case '7':
            _0x417ab3 = _0x38f696 + 'lowerthird/theme6/a2/a.html';
            break;
        case '8':
            _0x417ab3 = _0x38f696 + 'lowerthird/theme6/b/b.html';
            break;
        case '9':
            _0x417ab3 = _0x38f696 + 'lowerthird/theme6/c/c.html';
            break;
        case '10':
            _0x417ab3 = _0x38f696 + 'lowerthird/theme6/d/d.html';
            break;
        case '11':
            _0x417ab3 = _0x38f696 + 'lowerthird/theme6/d2/d.html';
            break;
        case '12':
            _0x417ab3 = _0x38f696 + 'lowerthird/theme6/e2/e.html';
            break;
        case '13':
            _0x417ab3 = _0x38f696 + 'lowerthird/theme6/g/g.html';
            break;
        case '14':
            _0x417ab3 = _0x38f696 + 'lowerthird/theme6/h1/h.html';
            break;
        case '15':
            _0x417ab3 = _0x38f696 + 'lowerthird/theme6/g2/g.html';
            break;
        case '16':
            _0x417ab3 = _0x38f696 + 'stageview/stage5/c.html';
            break;
        case '17':
            _0x417ab3 = _0x38f696 + 'stageview/stage6/c.html';
            break;
        default:
            _0x417ab3 = _0x38f696;
        }
        $('#configRemoteLink').val(_0x417ab3);
        $('#qrcode').html('');
        $('#qrcode').show();
        new QRCode(document.getElementById('qrcode'), _0x417ab3);
    }
    function _0x45d27f() {
        let _0x1ddd5a = $('#configIPaddr option:selected').text();
        $('#configRemoteHostname').val(_0x1ddd5a);
        updateSaveConfig('selectedNetworkAddr', _0x1ddd5a);
    }
    function _0x55adb9(_0xb1e932) {
        _0x5eacbd && console.log('[REMOTE SETUP] ' + _0xb1e932);
    }
}