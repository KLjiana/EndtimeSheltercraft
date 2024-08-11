MMEvents.createProcesses(event => {
    event.create("mm:coke_coal_recipe")
        .structureId("mm:cokery")
        .ticks(1200)
        .input({
            "type": "mm:input/consume",
            "ingredient": {
                "type": "mm:item",
                "tag": "minecraft:coals",
                "count": 1
            }
        })
        .output({
            "type": "mm:output/simple",
            "ingredient": {
                "type": "mm:item",
                "item": "kubejs:coke_coal",
                "count": 1
            }
        })
    event.create("mm:steel_ingot_recipe")
        .structureId("mm:blast_furnace")
        .ticks(2400)
        .input({
            "type": "mm:input/consume",
            "ingredient": {
                "type": "mm:item",
                "item": "minecraft:iron_ingot",
                "count": 1
            }
        })
        .input({
            "type": "mm:input/consume",
            "ingredient": {
                "type": "mm:item",
                "item": "kubejs:coke_coal",
                "count": 1
            }
        })
        .output({
            "type": "mm:output/simple",
            "ingredient": {
                "type": "mm:item",
                "item": "kubejs:steel_ingot",
                "count": 1
            }
        })
})