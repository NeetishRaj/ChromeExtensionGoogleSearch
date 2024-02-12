document.addEventListener("DOMContentLoaded", function () {
  console.log("Popup DOM Content loaded");
  
  var searchBtn = document.getElementById("search-btn");
  var queryInput = document.getElementById("query");

  searchBtn.addEventListener("click", async function() {
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
  
    console.log(tab);
    const response = await chrome.tabs.sendMessage(tab.id, {query: queryInput.value});
    // do something with response here, not outside the function
    console.log(response);
  })
  
});
