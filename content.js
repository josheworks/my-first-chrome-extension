chrome.storage.local.get(["focusMode", "customMessage"], (data) => {
  if (data.focusMode) {
    document.body.innerHTML = `
      <div style="
        display:flex;
        justify-content:center;
        align-items:center;
        height:100vh;
        font-size:24px;
        background:#111;
        color:#fff;
        flex-direction:column;
      ">
        🚫 ${data.customMessage || "Blocked!"}
      </div>
    `;
  }
});