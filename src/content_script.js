(async () => {
  const shareWarningModal = new tingle.modal({
    closeMethods: ["button"],
  });
  shareWarningModal.setContent("<h1>Facebook will see this</h1>");
  for (const shareButton of document.querySelectorAll(".fb-share-button")) {
    if (shareButton.addEventListener) {
      shareButton.addEventListener("click", e => {
        e.preventDefault();
        shareWarningModal.open();
      });
    }
  }
})();
