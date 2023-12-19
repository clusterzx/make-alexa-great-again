
# Make Alexa great again

## Description:

Introducing "Make Alexa great again", a revolutionary Smart Voice Assistant that transcends traditional boundaries by seamlessly integrating ChatGPT and Dall-E from OpenAI. This project redefines the voice assistant paradigm, leveraging NodeJS, Python, and HTML to deliver an intelligent and visually captivating user experience. Deployed on a Raspberry Pi with integrated microphone, touchscreen, and speakers, "Make Alexa great again" brings a new era of interactive AI to your fingertips.

## Key Features:

### ChatGPT Integration:
Engage in meaningful conversations with "Make Alexa great again", powered by ChatGPT. Experience a natural and intuitive interface as ChatGPT comprehends user queries, responding with human-like interactions.

### Multi-Language Support:
Speak to "Make Alexa great again" in your preferred language, thanks to ChatGPT's language-agnostic capabilities. "Make Alexa great again" ensures a globally inclusive conversational experience, breaking language barriers.

### NodeJS, Python, and HTML Integration:
Built on a versatile tech stack, "Make Alexa great again" utilizes NodeJS for server-side operations, Python for machine learning integration, and HTML for a user-friendly interface. This modular design facilitates scalability and customization.


# Demo:
[![Video](https://github.com/clusterzx/make-alexa-great-again/blob/main/preview.png?raw=true)](https://www.youtube.com/watch?v=9FQ7zZekcu0)

# Installation

Clone repository onto your RPi 4
```bash
git clone https://github.com/clusterzx/make-alexa-great-again/tree/main
cd make-alexa-great-again
```
    
Install all NodeJS dependencies
```bash
npm install
```

Install all Python dependencies
```bash
python -m pip install -r requirements.txt
```

Change the "YOUR-API-KEY" in hotword.py to your actual OpenAI API Key.

## Hardware:
If you want to build a standalone device like in this Project:

- 1 x Raspberry Pi 4
- 1 x USB Microphone
- 1 x TFT Screen
- 1-2 x Small Speakers
- 1 x RPi 4 Audio Hat (IQaudio DigiAMP+)
- 1 x Charger 12V 2,5mm for the Audio Hat (it powers the RPi4 also)
- ... and all Cables

# Usage:

- Start NodeJS Server
```bash
node index.js
```
- Start Python Routine
```bash
python hotword.py
```
- Start Chromium in Kioskmode (optional only if you want to use on a standalone device)
```bash
chromium --kiosk http://localhost:3010
```

### To use MAGA just say "Alexa?" and wait for the pling sound. Just ask her anything. That's it! If you want her to generate an image just say "male mir ein Bild" followed by your prompt. 

# STL Files:
You can use my pre created STL files, but keep in mind these are only made for POC. I am planning to do a complete rework.


## License


[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


