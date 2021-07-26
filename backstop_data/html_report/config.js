report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\uniq_id_config_Home_0_document_0_tablet.png",
        "test": "..\\bitmaps_test\\20210726-183946\\uniq_id_config_Home_0_document_0_tablet.png",
        "selector": "document",
        "fileName": "uniq_id_config_Home_0_document_0_tablet.png",
        "label": "Home",
        "misMatchThreshold": 0.5,
        "url": "https://dewalt.com/",
        "referenceUrl": "https://dewalt.com/",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 21.595120717243976,
          "misMatchPercentage": "21.60",
          "analysisTime": 54
        },
        "diffImage": "..\\bitmaps_test\\20210726-183946\\failed_diff_uniq_id_config_Home_0_document_0_tablet.png"
      },
      "status": "fail"
    }
  ],
  "id": "uniq_id_config"
});