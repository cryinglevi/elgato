~~# Elgato Control Center - Reverse Engineering~~

~~Hii, im working on emulating either a elgato key light, key light air, led strip or ring light~~
------
So far ive figured out that the "Firmware_Key_Light.bin" (that i found in the elgato control center files) is bascilly the Eve Home firmawre that runs on other Eve Home devices. Information to back this up: [FCC internals of Key Light](https://fccid.io/2AAFM-LGHT001/Internal-Photos/Int-Photos-4105915) <- the board with the arrow seems to be the same as the one on this -> [FCC internals of Eve Led strip](https://fccid.io/SNE-LST-001/Internal-Photos/Internal-Photos-3903976), Aswell as any of the Elgato Lights firmware use the same custom hap(or homekit) custom [Characteristics/Services UUIDs](https://gist.github.com/simont77/3f4d4330fa55b83f8ca96388d9004e7d)~~

~~random bits of info, 
The Elgato Key Lights uses[DEXATEK DK-9169](https://2449d990-bff5-48ad-a283-8cfad4bf84e1.filesusr.com/ugd/6752fc_b86b4686fbbe4ffd94d6026b169b3a97.pdf) with REALTEK RTL8711AM~~

~~and from looking at "Firmware_Ring_light.bin" it seems to be that ot runs FREERTOS~~

