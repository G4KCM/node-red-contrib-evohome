const batteryInfo = require('./battery-info');
const zoneTemp = require('./zone-temp');

function externalSensor() {
    return {
        decoded: {
            type: 'EXTERNAL_SENSOR'
        }
    };
}

function zoneName() {
    return {
        decoded: {
            type: 'ZONE_NAME'
        }
    };
}

function heatDemand() {
    // This is used for two different commands
    return {
        decoded: {
            type: 'HEAT_DEMAND'
        }
    };
}

function zoneInfo() {
    return {
        decoded: {
            type: 'ZONE_INFO'
        }
    };
}

function deviceInfo() {
    return {
        decoded: {
            type: 'DEVICE_INFO'
        }
    };
}

function sysInfo() {
    return {
        decoded: {
            type: 'SYS_INFO'
        }
    };
}

function dhwTemp() {
    return {
        decoded: {
            type: 'DHW_TEMP'
        }
    };
}

function zoneWindow() {
    return {
        decoded: {
            type: 'ZONE_WINDOW'
        }
    };
}

function dhwState() {
    return {
        decoded: {
            type: 'DHW_STATE'
        }
    };
}

function binding() {
    return {
        decoded: {
            type: 'BINDING'
        }
    };
}

function setpoint() {
    return {
        decoded: {
            type: 'SETPOINT'
        }
    };
}

function setpointOverride() {
    return {
        decoded: {
            type: 'SETPOINT_OVERRIDE'
        }
    };
}

function controllerMode() {
    return {
        decoded: {
            type: 'CONTROLLER_MODE'
        }
    };
}

function actuatorCheck() {
    return {
        decoded: {
            type: 'ACTUATOR_CHECK'
        }
    };
}

function actuatorState() {
    return {
        decoded: {
            type: 'ACTUATOR_STATE'
        }
    };
}

module.exports = {
    '0002': externalSensor,
    '0004': zoneName,
    '0008': heatDemand,
    '000A': zoneInfo,
    '0418': deviceInfo,
    '1060': batteryInfo,
    '10e0': sysInfo,
    '1260': dhwTemp,
    '12B0': zoneWindow,
    '1F41': dhwState,
    '1FC9': binding,
    '2309': setpoint,
    '2349': setpointOverride,
    '2E04': controllerMode,
    '30C9': zoneTemp,
    '3150': heatDemand,
    '3B00': actuatorCheck,
    '3EF0': actuatorState
};
