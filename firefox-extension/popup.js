document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('openApp').addEventListener('click', function() {
        chrome.tabs.create({ url: chrome.runtime.getURL('index.html') });
    });
});
