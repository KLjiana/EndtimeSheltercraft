ItemEvents.rightClicked('kubejs:backtrack_of_bottle', event => {
    if(Math.floor(event.level.getDayTime() / 24000) - 1 > 0) {
        let i = "bettertime set day " + (Math.floor(event.level.getDayTime() / 24000) - 1).toString();
        event.level.runCommand(i);
        event.level.getPlayers().forEach(player => {
        player.sendSystemMessage(event.getPlayer().getUsername() + " 使时间倒退了一天!(现在是第" + Math.floor(event.level.getDayTime() / 24000) + "天)");
        })
    } else {
        event.cancel(false);
    }
})