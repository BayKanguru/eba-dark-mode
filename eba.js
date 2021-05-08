var style = document.createElement("style");
style.id = "added_by_eba-dark-mode";

fetch(chrome.extension.getURL("eba.css"))
  .then((response) => response.text())
  .then((data) => {
    style.innerHTML = data.toString();
  });

document.body.append(style);
