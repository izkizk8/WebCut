# WebCut

[中文 README](README-zh.md)

This project aims to build a web-based audio and video editing tool using pure web technologies.

Currently under development (Stay tuned)...  
Early access👉🏻: [webcut.cn](https://webcut.cn)

Before that, the frontend development will use ffmpeg.wasm in limited scenarios.  
Chrome 94 introduced the WebCodecs API, which provides access to existing codecs in the browser. It can access raw video frames, audio data blocks, image decoders, audio and video encoders and decoders.

This means that JavaScript can now handle audio and video, and you no longer need to increase bandwidth to download existing codecs in the browser.  
And after simple testing, it was found that WebCodecs performs much better than ffmpeg.wasm.

🌸 Open source is not easy, star to encourage ⭐️
