cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.eficid.cordova.plugin.rfidscanner/www/rfidscanner.js",
        "id": "com.eficid.cordova.plugin.rfidscanner.RfidScanner",
        "clobbers": [
            "window.rfidscanner"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.eficid.cordova.plugin.rfidscanner": "0.1.0"
}
// BOTTOM OF METADATA
});