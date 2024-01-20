// background.js

// Initialize an empty object to store product information from different websites
let productInfoMap = {};

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Update the product information map with the received data
  const { productInfo } = request;
  const { name, price } = productInfo;
  const website = new URL(sender.tab.url).hostname;
  
  productInfoMap[website] = { name, price };

  // Update the popup with the latest information
  chrome.browserAction.setPopup({
    popup: 'popup.html'
  });

  // Send a response to acknowledge receipt of the message
  sendResponse({ received: true });
});

// Listen for popup requests and send the product information map
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getProductInfoMap') {
    sendResponse(productInfoMap);
  }
});
