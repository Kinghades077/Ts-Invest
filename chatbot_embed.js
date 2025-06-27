// Replace this with your actual chatbot embed code from Chatbase or any other provider

document.addEventListener("DOMContentLoaded", function () {
  const botDiv = document.getElementById("chatbot");
  const iframe = document.createElement("iframe");
  iframe.src = "https://www.chatbase.co/chatbot-iframe/YOUR-CHATBOT-ID";
  iframe.width = "100%";
  iframe.height = "400";
  iframe.style.border = "1px solid #334155";
  botDiv.appendChild(iframe);
});
