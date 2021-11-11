


chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if (msg.name == "message") {
        response({text: "Response sent from Background.js"});
    }
});