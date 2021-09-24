let speech = new webkitSpeechRecognition();
speech.lang = 'ja-JP';

let start_btn = document.getElementById('start_btn');
let stop_btn = document.getElementById('stop_btn');
let content   = document.getElementById('content');
let download_btn = document.getElementById('download_btn');
// 音声認識をスタート
start_btn.addEventListener('click' , function() {
    speech.start();
});

// 音声認識をストップ
stop_btn.addEventListener('click' , function() {
    speech.start();
});

//音声自動文字起こし機能
speech.onresult = function(e) {
     speech.stop();
     if(e.results[0].isFinal){
         var autotext =  e.results[0][0].transcript
         console.log(e);
         console.log(autotext);
         content.innerHTML += autotext + "\n";
      }
 }  
 speech.onend = () => { 
    speech.start() 
 };


//文字起こしした内容をダウンロードする
download_btn.addEventListener('click', function() {

    let content_value = document.getElementById('content').value;
    let blob = new Blob([content_value]);
    let blobURL = window.URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.href = blobURL;
    a.download = 'kiroku.txt';
    document.body.appendChild(a);
    a.click();
    a.parentNode.removeChild(a);
});