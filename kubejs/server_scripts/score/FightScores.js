EntityEvents.hurt(event => {
    console.info(event.source.getActual())
    if (event.source.player==null) return
    let data = event.server.persistentData
    let score = data.getInt("fight_score")
    score += event.damage.toFixed(1).length
    //console.info(event.damage.toFixed(1))
    data.putInt("fight_score", score)
})