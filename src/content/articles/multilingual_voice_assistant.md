# How I built a multilingual voice assistant in a weekend

*Published: October 24, 2025*

Building an end-to-end voice AI pipeline that operates with **zero form-based interaction** was an incredible challenge. In this article, I want to walk through the architecture, the hurdles I faced, and how I structured the final solution to support multiple Indian languages seamlessly.

## The Problem

Traditional digital public services are built around long, complex forms. They assume a high level of digital literacy. To fix this, I wanted to build an interface where the user only needs to *speak* their problem, in their native language, and the system handles the rest.

## Architecture

The pipeline consists of four main stages:

1. **Speech Capture (Frontend):** React components using the Web Audio API to handle cross-browser microphone access.
2. **Speech-to-Text (STT):** Transcribing the vernacular audio into text.
3. **LLM Orchestration:** Processing the transcribed intent using Llama models.
4. **Text-to-Speech (TTS):** Delivering the response back to the user out loud.

Here is a simplified view of the FastApi backend endpoint handling this chain:

```python
@app.post("/api/v1/voice/process")
async def process_voice(audio_file: UploadFile = File(...), language: str = Form(...)):
    # 1. Convert Speech to Text (Sarvam AI API)
    transcript = await stt_service.transcribe(audio_file, language)
    
    # 2. Process Intent via LLM
    llm_response = await llm_service.generate_response(transcript.text, system_prompt)
    
    # 3. Convert LLM Response to Speech
    audio_response = await tts_service.synthesize(llm_response, language)
    
    return Response(content=audio_response, media_type="audio/wav")
```

## Hurdles Overcome

### Browser Audio Inconsistencies
The hardest part was managing the `MediaRecorder` API across Safari and Chrome. Safari, for instance, records in `audio/mp4` while Chrome defaults to `audio/webm`. The backend required a standardized format (usually `wav` or `ogg`), which meant we needed strict frontend downsampling or server-side FFMPEG conversion before passing it to the STT layer.

### Latency Optimization
Chaining three heavy AI models (STT → LLM → TTS) is inherently slow. 
To achieve "real-time" interaction speeds:
* We switched to streaming LLM tokens.
* The TTS engine was configured to map chunks of text as soon as the first sentence boundary was detected from the LLM, instead of waiting for the full generation.

> [!TIP]
> If you are building voice UI, time-to-first-byte (TTFB) is everything. Users will tolerate a slow LLM if the audio *starts* playing quickly.

## Conclusion

The result is **BhashaCare**, a platform that proves we can build deeply accessible tech if we rethink the standard input paradigms. You can check out the source code on [my GitHub](https://github.com/BeleRohit/voice-public-service-navigator) or find me on LinkedIn to chat more about voice AI architecture!
