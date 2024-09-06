BlockEvents.rightClicked(event=>{
    if (event.block.id != "minecraft:chest" || event.block.entityData.get("LootTable")==null) return
    let dataServer = event.server.persistentData
    let score = dataServer.getInt("loot_score")
    dataServer.putInt("loot_score", ++score)
    //console.info(score)
})