var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.interimResults = true;
recognition.maxAlternatives = 1;

const voice = document.querySelector('.voice-control');

voice.onclick = function() {
  recognition.start();
  voice.disabled = true;
}

recognition.onresult = function(event) {
  var city = event.results[0][0].transcript;
  cityInput.value = city.replace(/[^a-zA-Zа-яёА-ЯЁ]/u, '');
  cityInputButton.click();
}

recognition.onspeechend = function() {
  recognition.stop();
  voice.disabled = false;
}