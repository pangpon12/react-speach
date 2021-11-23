import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();


  if (!browserSupportsSpeechRecognition) {
    return <span>Browser ไม่ซัพพอร์ต.</span>;
  }
  
  SpeechRecognition.startListening
  
  
  return (
    <div>
      <p>Microphone: {listening ? 'เปิด' : 'ปิด'}</p>
      <button onClick={SpeechRecognition.startListening}>เริ่ม</button>
      <button onClick={SpeechRecognition.stopListening}>หยุด</button>
      <button onClick={resetTranscript}>รีเซ็ท</button>
      <p>{transcript}</p>
    </div>
  );
};
export default Dictaphone;
