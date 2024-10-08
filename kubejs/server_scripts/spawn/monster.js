let type_1 = ["zombie_island:runner",
    "zombie_island:walker",
    "zombie_island:caustic_x_walker",
    "zombie_island:insect_swarm_walker",
    "zombie_island:riot_gear_walker",
    "zombie_island:grenadier_walker",
    "zombie_island:shambler",
    "zombie_island:firefighter_walker",
    "zombie_island:hazmat_walker",
    "zombie_island:shocking_walker",
    "zombie_island:incendiary_walker",
    "zombie_island:eat_courier"]

let type_2 = ["rotted:marine",
    "rotted:shielder",
    "rotted:flusk",
    "rotted:adventurer",
    "rotted:miner",
    "rotted:farmer",
    "rotted:doctor",
    "minecraft:vindicator",
    "minecraft:evoker",
    "minecraft:witch",
    "minecraft:wither_skeleton",
    "minecraft:blaze"]

let type_3 = ["minecraft:cave_spider",
    "tacz_npcs:terrorist_no_armor",
    "tacz_npcs:terrorist_scav_pistol_armored",
    "tacz_npcs:terrorist_scav",
    "mutantmonsters:mutant_zombie",
    "minecraft:ghast",
    "minecraft:slime",
    "minecraft:spider",
    "minecraft:ravager",
    "minecraft:silverfish",
    "minecraft:skeleton",
    "minecraft:zoglin"]

let type_4 = ["themutantmobsmod:mutantstray",
    "aqua_creepers:aqua_creeper",
    "minecraft:creeper",
    "mutantmonsters:mutant_creeper",
    "themutantmobsmod:mutant_drowned",
    "tntslimes:tnt_slime",
    "themutantmobsmod:mutant_zombified_piglin",
    "eeeabsmobs:nameless_guardian",
    "mutantmonsters:mutant_skeleton",
    "mutantmonsters:mutant_enderman",
    "themutantmobsmod:gigaillager",
    "minecraft:wither",
    "minecraft:zombie",
    "minecraft:cave_spider",
    "tacz_npcs:terrorist_no_armor",
    "tacz_npcs:terrorist_scav_pistol_armored",
    "tacz_npcs:terrorist_scav",
    "mutantmonsters:mutant_zombie",
    "minecraft:ghast",
    "minecraft:slime",
    "minecraft:spider",
    "minecraft:ravager",
    "minecraft:silverfish",
    "minecraft:skeleton",
    "minecraft:zoglin",
    "minecraft:vindicator",
    "minecraft:evoker",
    "minecraft:witch",
    "minecraft:wither_skeleton",
    "minecraft:blaze",
]

let type_5 = ["minecraft:zombified_piglin"]

let summon = "minecraft:parrot"
EntityEvents.spawned(event => {
    const { entity } = event

    let data = event.server.persistentData
    let loot = data.getInt("loot_score")
    let fight = data.getInt("fight_score")


    if (entity.monster && entity.type.indexOf('silence_s_defense_tower') == -1) {
        if (120 <= loot && 8000 < fight) {
            type_4.forEach(monster => {
                if (entity.type.indexOf(monster) != -1) {
                    if (!data.getBoolean('stage_4')) {
                        event.server.tell(Component.literal("最终变种，觉醒了！").lightPurple().color(Color.RED))
                        event.server.players.forEach(player => {
                            player.potionEffects.add("resistance", -1, 3)
                        })
                        data.putBoolean('stage_4', true)
                    }
                    if(entity.type.indexOf("aqua_creepers:aqua_creeper") == -1){   
                        summon = "minecraft:parrot" 
                        if(entity.getBlock().getId() == "minecraft:water"){
                            summon = "aqua_creepers:aqua_creeper"
                        }                    
                        let parrot = event.level.createEntity(summon)
                        parrot.setPos(entity.getX(), entity.getY(), entity.getZ())
                        parrot.persistentData.putBoolean("passenger",true)
                        parrot.spawn()
                        entity.startRiding(parrot)
                    }
                    event.exit();
                }
            })
            event.cancel()
        }

        if (100 <= loot && 4000 < fight) {
            type_3.forEach(monster => {
                if (entity.type.indexOf(monster) != -1) {
                    if (!data.getBoolean('stage_3')) {
                        event.server.tell(Component.literal("这将会是恐怖的一天，怪物变得更多种了").lightPurple().color(Color.RED))
                        event.server.players.forEach(player => {
                            player.potionEffects.add("resistance", -1, 2)
                        })
                        data.putBoolean('stage_3', true)
                    }
                    event.exit();
                }
            })
            event.cancel()
        }

        if (50 <= loot && 500 < fight) {
            type_2.forEach(monster => {
                if (entity.type.indexOf(monster) != -1) {
                    if (!data.getBoolean('stage_2')) {
                        event.server.tell(Component.literal("越来越多了，还有变种！").lightPurple().color(Color.RED))
                        event.server.players.forEach(player => {
                            player.potionEffects.add("resistance", -1, 1)
                        })
                        data.putBoolean('stage_2', true)
                    }
                    event.exit();
                }
            })
            event.cancel()
        }

        if (loot < 50) {
            type_1.forEach(monster => {
                if (entity.type.indexOf(monster) != -1) {
                    if (!data.getBoolean('stage_1')) {
                        event.server.tell(Component.literal("僵尸开始出现，小心他们").lightPurple().color(Color.RED))
                        event.server.players.forEach(player => {
                            player.potionEffects.add("resistance", -1, 0)
                        })
                        data.putBoolean('stage_1', true)
                    }
                    event.exit();
                }
            })
            event.cancel()
        }
    }
})

ServerEvents.tick(e=>{
    e.server.entities.forEach(pa=>{
        if(pa.type.indexOf("minecraft:parrot")==-1)return
        if(pa.age % 10 == 0){
            if(pa.firstPassenger==null){
                pa.discard()
            }
        }   
    })
})