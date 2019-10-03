console.log("background");

chrome.browserAction.onClicked.addListener(buttonClicked);

chrome.tabs.getCurrent(function(tab){
    console.log(tab);
});

function buttonClicked(tab){
    console.log(tab);
    let msg={
        txt:"hello"
    }
    chrome.tabs.sendMessage(tab.id,msg);
}