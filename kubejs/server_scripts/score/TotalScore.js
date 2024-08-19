ServerEvents.loaded(event => {
    let data = event.server.persistentData
    if (data.toString().indexOf("score") == -1) {
        data.putInt("fight_score", 0.0)
        data.putInt("loot_score", 0.0)
    }
})