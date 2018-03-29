var dojoConfig = {
    isDebug: true,
    async: 0,
    baseUrl: "./arcgis/4.6",
    hasCache: {
        "config-selectorEngine": "acme",
        "config-tlmSiblingOfDojo": 1,
        "dojo-built": 1,
        "dojo-has-api": 1,
        "dojo-loader": 1,
        "dojo-undef-api": 0,
        "dom": 1,
        "extend-esri": 1,
        "host-browser": 1
    },
    packages: [
        {
            location: "./moment",
            name: "moment"
        }, {
            location: "./dojox",
            name: "dojox"
        }, {
            location: "./dstore",
            main: "Store",
            name: "dstore"
        }, {
            location: "./esri",
            name: "esri"
        }, {
            location: "./dijit",
            name: "dijit"
        }, {
            location: "./dgrid",
            main: "OnDemandGrid",
            name: "dgrid"
        }, {
            location: "./dojo",
            name: "dojo"
        }]
};