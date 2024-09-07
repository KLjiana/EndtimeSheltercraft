ItemEvents.rightClicked('kubejs:backtrack_of_bottle', event => {
    if(Math.floor(event.level.getDayTime() / 24000) - 1 > 2) {
        let i = `bettertime set ${(Math.floor(event.level.getDayTime() / 24000) - 1).toString()} day`;
        event.level.runCommandSilent(i);
        event.level.getPlayers().forEach(player => {
        player.sendSystemMessage(event.getPlayer().getUsername() + " 使时间倒退了一天!(现在是第" + Math.floor(event.level.getDayTime() / 24000) + "天)");
        })
        --event.item.count
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