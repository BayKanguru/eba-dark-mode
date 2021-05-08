function save_options() {
  var notification = document.getElementById("notify").checked;
  chrome.storage.sync.set(
    {
      ebaDarkModeNotify: notification,
    },
    function () {
      // Update status to let user know options were saved.
      var status = document.getElementById("status");
      status.textContent = "Ayarlar Kaydedildi";
    }
  );
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
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
