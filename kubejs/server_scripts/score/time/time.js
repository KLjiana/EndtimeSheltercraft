ItemEvents.rightClicked('kubejs:backtrack_of_bottle', event => {
    if(Math.floor(event.level.getDayTime() / 24000) - 1 > 2) {
        event.level.runCommand(`gamerule sendCommandFeedback false`);
        let i = `bettertime set ${(Math.floor(event.level.getDayTime() / 24000) - 1).toString()} day`;
        event.level.runCommand(i);
        event.level.getPlayers().forEach(player => {
        player.sendSystemMessage(event.getPlayer().getUsername() + " 使时间倒退了一天!(现在是第" + Math.floor(event.level.getDayTime() / 24000) + "天)");
        })
        let c = `clear ${event.getPlayer().getUsername()} kubejs:backtrack_of_bottle 1`;
        event.level.runCommand(c);
    } else {
        event.cancel(false);
    }
})

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