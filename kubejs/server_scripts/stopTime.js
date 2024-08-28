ServerEvents.tick(event=>{
    if(event.server.playerCount<1) {
        event.server.runCommandSilent("/gamerule doDaylightCycle false")
    }
})
    
ServerEvents.tick(event=>{
    if(event.server.playerCount>=1) {
        event.server.runCommandSilent("/gamerule doDaylightCycle true")
    }
})