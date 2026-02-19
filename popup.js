document.getElementById('viewSourceBtn').addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    let url = tabs[0].url;
    chrome.tabs.create({ url: 'view-source:' + url });
  });
});

document.getElementById('copySourceBtn').addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    let url = 'view-source:' + tabs[0].url;
    navigator.clipboard.writeText(url).then(() => {
      alert('Source URL copied to clipboard!');
    }, () => {
      alert('Failed to copy.');
    });
  });
});