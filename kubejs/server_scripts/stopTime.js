PlayerEvents.loggedOut(event=>{
    if(event.player.server.level.getPlayerList.size()<1) event.server.runCommandSilent("/gamerule doDayCycle false")
})
    
PlayerEvents.loggedIn(event=>{
    if(event.player.server.level.getPlayerList.size()>=1) event.server.runCommandSilent("/gamerule doDayCycle true")
})