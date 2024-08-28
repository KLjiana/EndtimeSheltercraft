PlayerEvent.LogOut(event=>{
    if(event.player.server.level.getPlayerList.size()<1) event.server.runCommandSilent("/gamerule doDayCycle false")
})
    
PlayerEvent.LogIn(event=>{
    if(event.player.server.level.getPlayerList.size()>=1) event.server.runCommandSilent("/gamerule doDayCycle true")
})