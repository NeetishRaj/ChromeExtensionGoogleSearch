chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );

  const selector = 'textarea[title="Search"]'
  if (request.query) {
    document.querySelector(selector).value = request.query;
  } else {
    document.querySelector(selector).value = request.query;
  }
});
