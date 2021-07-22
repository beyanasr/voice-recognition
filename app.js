const btn = document.querySelector('.talk')
const content = document.querySelector('.content')


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition;

recognition.onstart = () => {
    console.log('voice is activated')
};
recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    // transcript.lang = 'ar-SA';
    content.textContent = transcript;
    readOutLoud(transcript);
};
btn.addEventListener('click', () => {
    recognition.start();
});

function readOutLoud(messege) {
    const speech=new SpeechSynthesisUtterance();
    speech.text=messege;
    speech.volume=1;
    speech.rate=1;
    // speech.lang = 'ar-SA';
window.speechSynthesis.speak(speech);
}