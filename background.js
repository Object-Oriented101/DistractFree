
console.log("Background script is running ")

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    console.log("Button is clicked!");
    let msg = {
        txt: "hello"
    }
    chrome.tabs.sendMessage(tab.id, msg);

    //Redirects to Warning Page
    var newURL = "newtab.html";
    chrome.tabs.create({ url: newURL });

}