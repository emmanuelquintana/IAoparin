var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
const synth = window.speechSynthesis;

var nombre ;
var text;

var recognition = new SpeechRecognition();
var recognition2 = new SpeechRecognition();


//pedir nombre de usuario speechsynthesis
function pedirNombre(){
    pitch = 1;
    rate = 1;
    var voices = synth.getVoices();
    var utterThis = new SpeechSynthesisUtterance("Hola... soy inteligencia artificial Oparin ,Comenzemos con una pregunta sencilla , ¿Cómo te llamas?");
    utterThis.voice = voices[1];
    utterThis.pitch = pitch;
    utterThis.rate = rate;
    synth.speak(utterThis);
    console.log(nombre);
    escucharNombre();
}

function detener() {
    recognition.onend = function() {
        recognition.stop();
        escucharTexto();
    }

}


//escuchar nombre con speechrecognition y dar bienvenida con ese nombre
function escucharNombre(){
    recognition.start();
    recognition.onresult = function(event) {
        nombre = event.results[0][0].transcript;
        var voices = synth.getVoices();
        var utterThis = new SpeechSynthesisUtterance("Hola " + nombre + "!"+"¿Qué quieres hacer?");
        var text = event.results[0][0].transcript;
        utterThis.voice = voices[1];
        utterThis.pitch = pitch;
        utterThis.rate = rate;
        synth.speak(utterThis);
       recognition.stop();

        detener(); 

    }
}

function detener() {
    recognition.onend = function() {
        recognition.stop();
        escucharTexto();
    }

}


function escucharTexto() {
    recognition.start();
    recognition.onresult = function(event) {
        text = event.results[0][0].transcript;}
        console.log(text);
        if(text == "reproducir"){
            reproducir();
            
            console.log("reproducir");
        }else if(text == "buscar"){
            buscar();
            recognition.stop();

        }else if(text == "leer"){
            leer();
            recognition.stop();

        }else if(text == "aprender"){
            aprender();
            recognition.stop();

        }else if(text == "salir"){
            salir();
            recognition.stop();

        }else{
            escucharTexto();
        }
     
    }

    function detener() {
        recognition.onend = function() {
            recognition.stop();
            reproducir();
        }
    
    }
    
    

//validar variable text



//funciones Reproducir de youtube ,buscar en google , leer mensaje ,aprender a programar 


function reproducir(){
     recognition.start();
        recognition.onresult = function(event) {
        var video =event.results[0][0].transcript;
    var voices = synth.getVoices();
    var utterThis = new SpeechSynthesisUtterance("¿Qué video quieres reproducir?");
    utterThis.voice = voices[1];
    utterThis.pitch = pitch;
    utterThis.rate = rate;
    synth.speak(utterThis);

    window.location.href="https://www.youtube.com/results?search_query=" + video;
    
}
}

//buscar en youtube.com el video que quieras


