ServerEvents.loaded(event => {
    let data = event.server.persistentData
    // 初始化 fight_score，如果尚未设置
    console.info(data.getInt("fight_score"))
    if (!data.getInt("fight_score")) {
        data.putInt("fight_score", 0.0)
    }
})

EntityEvents.hurt(event => {
    let data = event.server.persistentData
    let score = data.getInt("fight_score") // 获取当前的 fight_score
    score += event.damage.toFixed(1).length
    //console.info(event.damage.toFixed(1))
    data.putInt("fight_score", score) // 将新的分数写回 persistentData
    //console.info(score)
})
