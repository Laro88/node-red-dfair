# node-red-dfair
node-red Danfoss Air driver

This is a node-red front end for my Danfoss Air driver (when that eventually works stable enough)

I am just playing around with it for
- personal fun
- i need the frost protection output to enable an electrical extra heating surface :-)

The progress is miserably slow but something is running and I hope to have things sorted out before Winter 2022.

Basically it will allow you to get readings of:
## Statics:
- Serial
- HW info

## Dynamics:
- Thermal sensors
- Fans
- Boost (on/off)
- Frost protection (on/off)
- Total time running (secs)

And (perhaps) allow you to control Boost (on/off)

# Todos:
Discovery of devices (Danfoss Air supports this, seems to be a broadcast in WireShark

