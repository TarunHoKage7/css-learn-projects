document.querySelector("#inpp").addEventListener('click' , fn);
 function fn(){
     const synth = window.speechSynthesis;
     let spkText = document.querySelector("#inp").innerText;
     let spekText = `${spkText}`;
     document.querySelector("#inp").innerText = spekText;
     let spekThis = new SpeechSynthesisUtterance(spekText);
     window.speechSynthesis.cancel();
     synth.speak(spekThis);
 }