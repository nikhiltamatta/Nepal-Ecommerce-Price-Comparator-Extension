// content.js

// Function to extract product information from the current page
function extractProductInfo() {
  // Implement this function based on the structure of the e-commerce websites
  // Extract product name, price, and other relevant information
  // Example:
  const productName = document.querySelector('.product-name').innerText;
  const productPrice = parseFloat(document.querySelector('.product-price').innerText.replace('Rs. ', '').replace(',', ''));
  
  return { name: productName, price: productPrice };
}

// Function to send a message to the background script with product information
function sendProductInfoToBackgroundScript(productInfo) {
  chrome.runtime.sendMessage({ productInfo: productInfo });
}

// Extract product information and send it to the background script
const productInfo = extractProductInfo();
sendProductInfoToBackgroundScript(productInfo);
