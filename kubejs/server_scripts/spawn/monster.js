let type_1 = ["zombie_island:runner",
    "zombie_island:walker",
    "zombie_island:caustic_x_walker",
    "zombie_island:insect_swarm_walker",
    "zombie_island:riot_gear_walker",
    "zombie_island:grenadier_walker",
    "zombie_island:shambler",
    "zombie_island:firefighter_walker",
    "zombie_island:hazmat_walker",
    "zombie_island:burning_walker",
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
    "minecraft:blaze",
    "minecraft:phantom"]

let type_3 = ["minecraft:cave_spider",
    "eeeabsmobs:corpse_warlock_egg",
    "tacz_npcs:terrorist_no_armor",
    "tacz_npcs:terrorist_scav_pistol_armored",
    "tacz_npcs:terrorist_scav",
    "mutantmonsters:spider_pig",
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
    "minecraft:warden",
    "eeeabsmobs:nameless_guardian_egg",
    "mutantmonsters:mutant_skeleton",
    "mutantmonsters:mutant_enderman",
    "themutantmobsmod:gigaillager",
    "minecraft:zombie"]

let type_5 = ["minecraft:zombified_piglin"]

EntityEvents.spawned(event => {
    const { entity } = event
    //console.info(entity.type + entity.monster)
    if (entity.monster) {
        type_1.forEach(monster => {
            if (entity.type.indexOf(monster) != -1) event.success();
        })
        event.cancel()
    }
})