var actionAble = true;
var tabId = null;

// Remove Reason - cant set custom shortcut
// chrome.browserAction.onClicked.addListener((tab) => {
//     if (actionAble) {
//         if (tab.url.indexOf("http:") == 0 || tab.url.indexOf("https:") == 0) {
//             chrome.tabs.executeScript(null, { file: "insert.js" });
//             console.log("insert!");
//         }
//     } else {
//         console.log("action:", actionAble);
//         return;
//     }
// });
chrome.browserAction.onClicked.addListener((tab) => {
    if (actionAble) {
        if (tab.url.indexOf("http:") == 0 || tab.url.indexOf("https:") == 0) {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
                chrome.tabs.sendMessage(tabs[0].id, {action: "copy"}, function(response) {});  
            });
        }
    } else {
        console.log("action:", actionAble);
        return;
    }
});

chrome.commands.onCommand.addListener(function(command) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {action: "copy"}, function(response) {});  
    });
});