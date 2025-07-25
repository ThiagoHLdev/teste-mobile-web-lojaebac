import { config as baseConfig } from '@wdio/sync';

export const config = {
    runner: 'local',
    path: '/wd/hub',
    specs: ['./test/specs/**/*.js'],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:platformVersion': '11.0',
        'appium:deviceName': 'Android Emulator',
        'appium:automationName': 'UiAutomator2',
        'appium:browserName': 'Chrome'
    }],
    logLevel: 'info',
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    services: ['appium'],
    appium: {
        command: 'appium'
    }
};