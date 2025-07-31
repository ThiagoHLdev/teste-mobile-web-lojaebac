
exports.config = {
    runner: 'local',
    specs: [
        './tests/**/*.e2e.js'
    ],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        browserName: 'Chrome',
        automationName: 'UiAutomator2',
        deviceName: 'Android Emulator',
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://lojaebac.ebaconline.art.br/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};
