# -*- coding: utf-8 -*-
import speech_recognition as sr

def Learning():
    r = sr.Recognizer()  
    cnt = 0
    list = []
    with sr.Microphone() as source:
        while(cnt<4):  #ここの数を増やせば、よりタフネスが上がります
            r.adjust_for_ambient_noise(source)
            print("=== 何か、話しかけてください ===")
            audio = r.listen(source)
            print("[o] ===> オーディオGET")
            print("=== CMU Sphinx音声解析中 ===")
            text = r.recognize_sphinx(audio)
            print("You said : " + text)
            list.append(text)
            cnt = cnt + 1
    print(list)
    
if __name__ == "__main__":
    Learning()