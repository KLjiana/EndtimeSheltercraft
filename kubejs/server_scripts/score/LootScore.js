BlockEvents.rightClicked(event=>{
    if (event.block.id != "minecraft:chest" || event.block.entityData.get("LootTable")==null) return
    let data = event.server.persistentData
    let score = data.getInt("loot_score")
    data.putInt("loot_score", ++score)
    //console.info(score)
})