function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  const userMessage = input.value.trim();
  if (userMessage === "") return;

  // Add user message to chat
  const userDiv = document.createElement("div");
  userDiv.textContent = "🧑 You: " + userMessage;
  chatBox.appendChild(userDiv);

  // Simulate bot response
  const botDiv = document.createElement("div");
  botDiv.textContent = "🤖 Bot: " + generateBotResponse(userMessage);
  chatBox.appendChild(botDiv);

  chatBox.scrollTop = chatBox.scrollHeight;
  input.value = "";
}

function generateBotResponse(message) {
  message = message.toLowerCase();

  if (message.includes("math")) {
    return "Your Math score today was 85%. Great job!";
  } else if (message.includes("science")) {
    return "You scored 72% in Science. Keep improving!";
  } else if (message.includes("english")) {
    return "Your English performance was 90%. Excellent!";
  } else if (message.includes("summary")) {
    return "Today’s summary: Math - 85%, Science - 72%, English - 90%. Keep pushing!";
  } else {
    return "Please enter a subject like 'Math', 'Science', or 'English'.";
  }
}
