/*
 * background scripti
 * güncelleme kontrolü ve bildirimi
 * tıklayınca seçeneklere gitme
 */
async function getTextURL(url) {
  const response = await fetch(url);
  const data = await response.text();
  console.log(data);
  return data;
}

// update notification
console.log("started");
var manifest_server = getTextURL(
  "https://raw.githubusercontent.com/BayKanguru/eba-dark-mode/main/manifest.json"
);
var manifest_local = getTextURL(chrome.extension.getURL("../manifest.json"));

var options = {
  title: "EBA Dark Mode Güncelleme!!!",
  type: "basic",
  message: "Yeni bir güncelleme var!",
  iconUrl: "../img/logo-512.png",
};
chrome.storage.sync.get(function (items) {
  if (items.ebaDarkModeNotify && manifest_local != manifest_server) {
    chrome.notifications.create("update-notification", options, callback);
    console.log("different");
  }
});

function callback() {
  console.log("Update Notified", chrome.runtime.lastError);
}

chrome.notifications.onClicked.addListener(function () {
  chrome.tabs.create({ url: "https://github.com/BayKanguru/eba-dark-mode" });
});

//click to open settings
chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.runtime.openOptionsPage();
});
