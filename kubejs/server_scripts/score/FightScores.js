EntityEvents.hurt(event => {
    if (event.source.getActual() == null) return

    let tower = event.source.getActual().type.indexOf('silence_s_defense_tower')
    if (event.source.player==null && tower == -1) return

    let data = event.server.persistentData
    let score = data.getInt("fight_score")
    
    score += event.damage.toFixed(1).length
    data.putInt("fight_score", score)
}) 