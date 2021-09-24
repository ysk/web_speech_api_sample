let speech = new webkitSpeechRecognition();
speech.lang = 'ja-JP';

let $start_btn    = document.getElementById('start_btn');
let $stop_btn     = document.getElementById('stop_btn');
let $content      = document.getElementById('content');
let $download_btn = document.getElementById('download_btn');

let speechFlag = false;

$start_btn.addEventListener('click', () => {
    $start_btn.classList.add("active");
    $stop_btn.classList.remove("active");
    speech.start();
    speechFlag = true;
    console.log('音声認識サービスを開始します');
});

$stop_btn.addEventListener('click', () => {
    $start_btn.classList.remove("active");
    $stop_btn.classList.add("active");
    speech.stop();
    speechFlag = false;
    console.log('音声認識サービスを停止します');
});

speech.onresult = (e) => {
     if(e.results[0].isFinal){
        let autotext =  e.results[0][0].transcript
        $content.innerHTML += autotext + "\n";
      }
 }  

speech.onend = () => {
    if(speechFlag == true){
        speech.start();
    } else {
        speech.stop();
    }
};

$download_btn.addEventListener('click', function() {
    let content_value = content.value;
    let blob = new Blob([content_value]);
    let blobURL = window.URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.href = blobURL;
    a.download = 'content.txt';
    document.body.appendChild(a);
    a.click();
    a.parentNode.removeChild(a);
});

