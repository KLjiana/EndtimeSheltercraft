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
                "item": "createbigcannons:cast_iron_ingot",
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
    event.create("mm:tacz_ammo_box_recipe")
        .structureId("mm:assembly_room")
        .ticks(12000)
        .input({
            "type": "mm:input/consume",
            "ingredient": {
                "type": "mm:item",
                "item": "kubejs:military_casing",
                "count": 24
            }
        })
        .input({
            "type": "mm:input/consume",
            "ingredient": {
                "type": "mm:item",
                "tag": "minecraft:planks",
                "count": 24
            }
        })
        .input({
            "type": "mm:input/consume",
            "ingredient": {
                "type": "mm:item",
                "item": "kubejs:steel_ingot",
                "count": 12
            }
        })
        .output({
            "type": "mm:output/simple",
            "ingredient": {
                "type": "mm:item",
                "item": "tacz:ammo_box",
                "count": 1
            }
        })
    event.create("mm:core_upgrade_table_recipe")
        .structureId("mm:assembly_room")
        .ticks(6000)
        .input({
            "type": "mm:input/consume",
            "ingredient": {
                "type": "mm:item",
                "item": "create:industrial_iron_block",
                "count": 12
            }
        })
        .input({
            "type": "mm:input/consume",
            "ingredient": {
                "type": "mm:item",
                "tag": "minecraft:stone_bricks",
                "count": 24
            }
        })
        .input({
            "type": "mm:input/consume",
            "ingredient": {
                "type": "mm:item",
                "item": "silence_s_defense_tower:hammer",
                "count": 1
            }
        })
        .output({
            "type": "mm:output/simple",
            "ingredient": {
                "type": "mm:item",
                "item": "silence_s_defense_tower:core_upgrade_table",
                "count": 1
            }
        })
    event.create("mm:maintenance_station0_recipe")
        .structureId("mm:assembly_room")
        .ticks(6000)
        .input({
            "type": "mm:input/consume",
            "ingredient": {
                "type": "mm:item",
                "item": "create:industrial_iron_block",
                "count": 12
            }
        })
        .input({
            "type": "mm:input/consume",
            "ingredient": {
                "type": "mm:item",
                "tag": "minecraft:stone_bricks",
                "count": 24
            }
        })
        .input({
            "type": "mm:input/consume",
            "ingredient": {
                "type": "mm:item",
                "item": "minecraft:blast_furnace",
                "count": 1
            }
        })
        .output({
            "type": "mm:output/simple",
            "ingredient": {
                "type": "mm:item",
                "item": "silence_s_defense_tower:maintenance_station0",
                "count": 1
            }
        })
    event.create("mm:hx_1")
        .structureId("mm:assembly_room")
        .ticks(400)
        .input({
            "type": "mm:input/consume",
            "ingredient": {
                "type": "mm:item",
                "item": "kubejs:steel_ingot",
                "count": 3
            }
        })
        .input({
            "type": "mm:input/consume",
            "ingredient": {
                "type": "mm:item",
                "item": "create:sturdy_sheet",
                "count": 1
            }
        })
        .input({
            "type": "mm:input/consume",
            "ingredient": {
                "type": "mm:item",
                "item": "minecraft:comparator",
                "count": 2
            }
        })
        .output({
            "type": "mm:output/simple",
            "ingredient": {
                "type": "mm:item",
                "item": "silence_s_defense_tower:driving_core_1",
                "count": 1
            }
        })
    event.create("mm:hxdu_1")
        .structureId("mm:assembly_room")
        .ticks(400)
        .input({
            "type": "mm:input/consume",
            "ingredient": {
                "type": "mm:item",
                "item": "silence_s_defense_tower:driving_core_1",
                "count": 1
            }
        })
        .input({
            "type": "mm:input/consume",
            "ingredient": {
                "type": "mm:item",
                "item": "minetraps:toxin_bucket",
                "count": 1
            }
        })
        .output({
            "type": "mm:output/simple",
            "ingredient": {
                "type": "mm:item",
                "item": "silence_s_defense_tower:acid_core_1",
                "count": 1
            }
        })
    event.create("mm:hxdie_1")
        .structureId("mm:assembly_room")
        .ticks(1200)
        .input({
            "type": "mm:input/consume",
            "ingredient": {
                "type": "mm:item",
                "item": "silence_s_defense_tower:driving_core_1",
                "count": 3
            }
        })
        .input({
            "type": "mm:input/consume",
            "ingredient": {
                "type": "mm:item",
                "item": "nethersdelight:stuffed_hoglin",
                "count": 1
            }
        })
        .input({
            "type": "mm:input/consume",
            "ingredient": {
                "type": "mm:item",
                "item": "nethersdelight:strider_moss_stew",
                "count": 1
            }
        })
        .input({
            "type": "mm:input/consume",
            "ingredient": {
                "type": "mm:item",
                "item": "nethersdelight:magma_gelatin",
                "count": 1
            }
        })
        .output({
            "type": "mm:output/simple",
            "ingredient": {
                "type": "mm:item",
                "item": "silence_s_defense_tower:hell_core_1",
                "count": 3
            }
        })
    for (let i = 2; i <= 4; i++) {
        event.create("mm:hx_" + i)
            .structureId("mm:assembly_room")
            .ticks(400 * i)
            .input({
                "type": "mm:input/consume",
                "ingredient": {
                    "type": "mm:item",
                    "item": "minecraft:sentry_armor_trim_smithing_template",
                    "count": i - 1
                }
            })
            .input({
                "type": "mm:input/consume",
                "ingredient": {
                    "type": "mm:item",
                    "item": "silence_s_defense_tower:driving_core_" + (i - 1),
                    "count": 1
                }
            })
            .output({
                "type": "mm:output/simple",
                "ingredient": {
                    "type": "mm:item",
                    "item": "silence_s_defense_tower:driving_core_" + i,
                    "count": 1
                }
            })
    }
})