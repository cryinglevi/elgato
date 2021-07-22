# Elgato key light Emualtor - V0.0.1 💡

Hej! 
This repo aims to emulate a [elgato key light](https://www.elgato.com/en/key-light) and use 3rd party software/devices  with [Elgato Control Center ](https://help.elgato.com/hc/en-us/sections/360004115951-Elgato-Control-Center-Software) , my end goal is to be able to use a iot device (E.g a **ESP8266** or **ESP32**) with this software and to be able to control  lights.

# Progress 🚗
So far i've been able to get a proof of concept working using node.js, though setting up devices and automatic device discovery isnt working yet (probably due to the fact that i havent sussed out all of elgatos requirments for discovery) .

### Working Features  📗 (or controlable features)

 - Device control - e.g ON/OFF, Brightness and Temperature.
 - Device settings - e.g Device Name, Firmware Version and more.
 - More to come soon

#### Broken/Not Working 

 - Auto device discovery
 - IOS/Android app - Due to the fact that auto discovery
 - Firmware updating - beacuse this doesnt run elgatos firmware it cant update it, but im working on another way

## TO-DO 📃 
- [ ] Auto Discovery 
 - [ ] More device emulation options
 - [ ] Get IOS/Android app working - (Might be complete if Auto Discovery works)
 - [ ] Write firmware for esp8266
   > - [ ] Wifi device setup (most likley not throguh app but ill try)
   > - [ ] extra settings web menu
  - [ ]  Polishing off the NodeJs code and turning it into **npm  package**
 - [ ]  Custom Firmware updating (Over the air updates)

### How it works 💻
more will be added soon (either in wiki or here)


---
### Credits

Soon many links will be included to people whos code helps me reverse enigneer this :)


and OFC any code, trade mark and or name owned by elgato, apple or any other person or company is rightfully theirs and this project should not take away from their rights. This is mainly a proof of concept and **NO ONE** should use this could commercially or against these compaines, if u do want proper Elgato light i would reccomend buying it from  [elgato](elgato.com/key-light).
