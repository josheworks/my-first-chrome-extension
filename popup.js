const toggleFocusMode = document.getElementById('toggleFocusMode');
const status = document.getElementById('status');
const message = document.getElementById('message');

chrome.storage.local.get(['focusMode', 'customMessage'], (data) => {
    toggleFocusMode.checked = data.focusMode || false;
    status.innerText = toggleFocusMode.checked ? "Focus On" : "Focus Off";
  
    if (data.customMessage) {
    message.value = data.customMessage ;
}
});

toggleFocusMode.addEventListener('change', () => {
    let  isActive = toggleFocusMode.checked;

    chrome.storage.local.set({ 
        focusMode: isActive,
        customMessage: message.value || "go study!"
    });
     status.innerText = isActive ? "Focus On" : "Focus Off";

});
