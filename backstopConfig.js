module.exports = {
    id: "uniq_id_config",
    viewports: [
        {
            label: "mobile",
            width: 380,
            height: 640
        },
        {
            label: "tablet",
            width: 1024,
            height: 768
        },
        {
            label: "desktop",
            width: 1920,
            height: 1024
        }
    ],
    onBeforeScript: "puppet/onBefore.js",
    onReadyScript: "puppet/onReady.js",
    scenarios: [
        {
            label: 'Home_en',
            misMatchThreshold : 0.5,
            referenceUrl: 'https://www.wolterskluwer.com/en/kitchen-sinks/2dot0/a-z-solution',
            url: 'https://www.wolterskluwer.com/en/kitchen-sinks/2dot0/a-z-solution',
            cookiePath: 'cookies.json'
        },
        {
            label: 'Home_nl',
            misMatchThreshold : 0.5,
            referenceUrl: 'https://www.wolterskluwer.com/nl-nl/kitchen-sinks/2dot0/a-z-solution',
            url: 'https://www.wolterskluwer.com/nl-nl/kitchen-sinks/2dot0/a-z-solution',
            cookiePath: 'cookies.json'
        },
        {
            label: 'Home_de',
            misMatchThreshold : 0.5,
            referenceUrl: 'https://www.wolterskluwer.com/de-de/kitchen-sinks/2dot0/a-z-solution',
            url: 'https://www.wolterskluwer.com/de-de/kitchen-sinks/2dot0/a-z-solution',
            cookiePath: 'cookies.json'
        }
        ],
    paths: {
        bitmaps_reference: "backstop_data/bitmaps_reference",
        bitmaps_test: "backstop_data/bitmaps_test",
        engine_scripts: "backstop_data/engine_scripts",
        html_report: "backstop_data/html_report",
        ci_report: "backstop_data/ci_report"
    },
    report: ["browser"],
    engine: "puppeteer",
    engineOptions: {
        args: ["--no-sandbox"]
    },
    asyncCaptureLimit: 5,
    asyncCompareLimit: 50,
    debug: false,
    debugWindow: false
}
