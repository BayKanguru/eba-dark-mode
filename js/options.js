/*
 * ayarlar
 */

function save_options() {
  var notification = document.getElementById("notify").checked;
  chrome.storage.sync.set(
    {
      ebaDarkModeNotify: notification,
    },
    function () {
      var status = document.getElementById("status");
      status.textContent = "Ayarlar Kaydedildi";
    }
  );
}

function restore_options() {
  chrome.storage.sync.get(
    {
      ebaDarkModeNotify: true,
    },
    function (items) {
      document.getElementById("notify").checked = items.ebaDarkModeNotify;
    }
  );
}

document.addEventListener("DOMContentLoaded", restore_options);
document.getElementById("save").addEventListener("click", save_options);
