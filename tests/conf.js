exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework : 'jasmine',
	allScriptsTimeout : 25000,
    jasmineNodeOpts : {
		defaultTimeoutInterval : 300000,
	},
    capabilities : {
		'browserName' : 'chrome'
	},
    directConnect : true,
    specs : [ './spec.js' ]
}