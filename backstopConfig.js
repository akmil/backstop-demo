module.exports = {
    id: "uniq_id_config",
    viewports: [
        {
            label: "tablet",
            width: 1024,
            height: 768
        }
    ],
    onBeforeScript: "puppet/onBefore.js",
    onReadyScript: "puppet/onReady.js",
    scenarios: [
        {
            label: 'Home',
            misMatchThreshold : 0.5,
            referenceUrl: 'https://dewalt.com/',
            url: 'https://dewalt.com/'}
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
