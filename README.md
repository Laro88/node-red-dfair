# node-red-dfair
node-red Danfoss Air driver

This is a node-red front end for my Danfoss Air IO driver (in progress, look here: https://github.com/Laro88/dfair)

I am just playing around with it for
- personal fun
- i need the frost protection output to enable an electrical extra heating surface :-)

The progress is miserably slow but something is running and I hope to have things sorted out before Winter 2022,2023,2024.


Basically it will allow you to get readings of:
## Statics:
- Serial                        []
- HW info                       []

## Dynamics:
- Thermal sensors               []
- Fans                          [x]
- Boost (on/off)                []
- Frost protection (on/off)     []
- Total time running (minutes)  [x]

And (perhaps) allow you to control Boost (on/off)

# Usage
Trigger the input from a sensible timer, say 5 seconds (with danfoss air you most likely wont need that sort of time, so go with a couple of minutes once you are satisfied)
The output is a JSON blob of the data that has been read out and some timing stuff

Let me know if you need anything else (except for me doing the development - just need time)

# Todos:
Too many as of now

