const path = require('path');
const {defineConfig} = require('cypress');
const setupNodeEvents = require(`${getSynpressPath()}/plugins/index`);
const fixturesFolder = `${getSynpressPath()}/fixtures`;
const supportFile = 'tests/e2e/support.js';

module.exports = defineConfig({
	userAgent: 'synpress',
	retries: {
		runMode: process.env.CI ? 1 : 0,
		openMode: 0,
	},
	fixturesFolder,
	screenshotsFolder: 'tests/e2e/test_artifacts/screenshots',
	videosFolder: 'tests/e2e/test_artifacts/videos',
	chromeWebSecurity: true,
	viewportWidth: 1920,
	viewportHeight: 1080,
	env: {
		coverage: false,
	},
	defaultCommandTimeout: process.env.SYNDEBUG ? 120000 : 30000,
	pageLoadTimeout: process.env.SYNDEBUG ? 60000 : 60000,
	requestTimeout: process.env.SYNDEBUG ? 60000 : 60000,
	e2e: {
		setupNodeEvents,
		// baseUrl: 'https://blah',
		specPattern: 'tests/e2e/specs/**/*.{js,jsx,ts,tsx}',
		supportFile,
	},
	component: {
		setupNodeEvents,
		specPattern: './**/*spec.{js,jsx,ts,tsx}',
		supportFile,
	},
});

function getSynpressPath() {
	if (process.env.SYNPRESS_LOCAL_TEST) {
		return '.';
	} else {
		return path.dirname(require.resolve('@synthetixio/synpress'));
	}
}
