
chrome.browserAction.onClicked.addListener((tab) => {
    chrome.tabs.executeScript(null, {file: "markdown_insert.js"}, ()=>{});
});

chrome.commands.onCommand.addListener(function(command) {
    chrome.tabs.executeScript(null, {file: "markdown_insert.js"}, ()=>{});
});