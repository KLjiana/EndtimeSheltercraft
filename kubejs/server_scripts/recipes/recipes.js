ServerEvents.recipes(event => {
    event.remove({ output: 'tacz:gun_smith_table' })
    event.remove({ output: 'tacz:ammo_box' })
    event.remove({ output: 'create:mechanical_crafter' })
    event.remove({ output: 'create:industrial_iron_block' })
    event.remove({ output: 'silence_s_defense_tower:core_upgrade_table' })


    event.stonecutting("create:industrial_iron_block","kubejs:steel_ingot")

    event.custom({
        type: 'create:mechanical_crafting',
        "acceptMirrored": false,
        "key": {
            "C": {
                "item": "create:andesite_casing"
            },
            "W": {
                "item": "minecraft:lightning_rod"
            },
            "S": {
                "tag": "forge:stone"
            },
            "I": {
                "item": "minecraft:iron_block"
            },
            "A": {
                "item": "minecraft:iron_axe"
            },
            "L": {
                "tag": "minecraft:logs"
            },
            "H": {
                "item": "silence_s_defense_tower:hammer"
            },
            "P": {
                "item": "minecraft:paper"
            }
        },
        "pattern": [
            "PP HAW",
            "CCCISS",
            "LL  LL",
            "L    L"
        ],
        "result": {
            "count": 1,
            "item": "tacz:gun_smith_table"
        }
    })

    // event.custom({
    //     type: 'create:mechanical_crafting',
    //     "acceptMirrored": false,
    //     "key": {
    //         "M": {
    //             "item": "kubejs:military_casing"
    //         },
    //         "I": {
    //             "item": "minecraft:iron_block"
    //         },
    //         "P": {
    //             "tag": "minecraft:planks"
    //         }
    //     },
    //     "pattern": [
    //         "MMMMM",
    //         "IPPPI",
    //         "IP PI",
    //         "MPPPM",
    //         "MMMMM"
    //     ],
    //     "result": {
    //         "count": 1,
    //         "item": "tacz:ammo_box",
    //         "nbt": {
    //             "Level": 0
    //         }
    //     }
    // })

    event.recipes.create.mechanical_crafting(Item.of('tacz:ammo_box', '{Level:0}').weakNBT(), [
        "MMMMM",
        "GPPPG",
        "GP PG",
        "MPPPM",
        "MMMMM"
    ], {
        M: 'kubejs:military_casing',
        G: 'minecraft:iron_block',
        P: '#minecraft:planks'
    })

    event.recipes.create.mechanical_crafting(Item.of('tacz:ammo_box', "{Level:1}").weakNBT(), [
        "MMMMM",
        "GPAPG",
        "GP PG",
        "MPPPM",
        "MMMMM"
    ], {
        M: 'kubejs:military_casing',
        G: 'minecraft:gold_block',
        P: '#minecraft:planks',
        A: Item.of('tacz:ammo_box', "{Level:0}").weakNBT()
    })

    event.recipes.create.mechanical_crafting('2x kubejs:backtrack_of_bottle', [
        "  N  ",
        " NSN ",
        "NSBSN",
        " NSN ",
        "  N  "
    ], {
        B: "minecraft:glass_bottle",
        N: "minecraft:netherite_ingot",
        S: "minecraft:nether_star"
    })

    event.recipes.create.mechanical_crafting(Item.of('tacz:ammo_box', '{Level:2}').weakNBT(), [
        "MMMMM",
        "GPAPG",
        "GP PG",
        "MPPPM",
        "MMMMM"
    ], {
        M: 'kubejs:military_casing',
        G: 'minecraft:diamond',
        P: '#minecraft:planks',
        A: Item.of('tacz:ammo_box', '{Level:1}').weakNBT()
    })
    event.custom({
        "type": "create:compacting",
        "heatRequirement": "heated",
        "ingredients": [
            {
                "item": "create:industrial_iron_block"
            },
            {
                "item": "minecraft:green_dye"
            },
            {
                "item": "minecraft:black_dye"
            },
            {
                "amount": 1000,
                "fluid": "kubejs:resin",
                "nbt": {}
            },
            {
                "amount": 10,
                "fluid": "minecraft:lava",
                "nbt": {}
            }
        ],
        "results": [
            {
                "item": "kubejs:military_casing",
                "count": 4
            }
        ]
    })

    event.custom({
        "type": "create:compacting",
        "heatRequirement": "heated",
        "ingredients": [
            {
                "item": "kubejs:coke_coal"
            },
            {
                "item": "createbigcannons:cast_iron_ingot"
            },
            {
                "amount": 50,
                "fluid": "minecraft:lava",
                "nbt": {}
            }
        ],
        "results": [
            {
                "item": "kubejs:steel_ingot",
                "count": 1
            }
        ]
    })


    event.shaped('kubejs:steel_block', [
        'SSS',
        'SSS',
        'SSS'
    ], {
        S: 'kubejs:steel_ingot'
    })

    event.shapeless('9x kubejs:steel_ingot', [
        'kubejs:steel_block'
    ])

    
    event.recipes.create.mixing([Fluid.of("kubejs:resin")], ["#minecraft:logs"])
    
    event.shaped('3x create:mechanical_crafter', [
        'C  ',
        'S  ',
        'T  '
    ], {
        C: 'create:cogwheel',
        S: 'create:copper_casing',
        T: 'minecraft:crafting_table'
    })
    event.campfireCooking('kubejs:coke_coal', 'minecraft:coal');

    for(let i = 2; i <= 4; i++){
        event.recipes.create.mechanical_crafting((6-i) + "x silence_s_defense_tower:driving_core_" + i.toString(), [
            "  N  ",
            " NSN ",
            "NSBSN",
            " NSN ",
            "  N  "
        ], {
            B: "silence_s_defense_tower:driving_core_" + (i - 1).toString(),
            N: "farmersdelight:bacon_sandwich",
            S: "minecraft:diamond"
        })

        event.recipes.create.mechanical_crafting((6-i) + "x silence_s_defense_tower:hell_core_" + i.toString(), [
            "  N  ",
            " NSN ",
            "NSBSN",
            " NSN ",
            "  N  "
        ], {
            B: "silence_s_defense_tower:hell_core_" + (i - 1).toString(),
            N: "nethersdelight:strider_slice",
            S: "minecraft:netherite_ingot"
        })

        if(i != 4){
            event.recipes.create.mechanical_crafting((6-i) + "x silence_s_defense_tower:acid_core_" + i.toString(), [
                "  N  ",
                " NSN ",
                "NSBSN",
                " NSN ",
                "  N  "
            ], {
                B: "silence_s_defense_tower:acid_core_" + (i - 1).toString(),
                N: "oceansdelight:cut_tentacles",
                S: "minetraps:toxin_bottle"
            })
        }
    }
    // event.recipes.create.mechanical_crafting('mm:assembly_room_controller', [
    //     "CCCCC",
    //     "CCACC",
    //     "CANAC",
    //     "CCACC",
    //     "CCCCC"
    // ], {
    //     C: 'create:copper_casing',
    //     A: 'create:industrial_iron_block',
    //     N: 'minecraft:netherite_block'
    // })

    
    // event.shaped('mm:mini_item_input', [
    //     ' L ',
    //     'LHL',
    //     ' L '
    // ], {
    //     L: '#minecraft:logs',
    //     H: 'minecraft:hopper'
    // })

    // event.shaped('mm:mini_item_output', [
    //     ' L ',
    //     'LDL',
    //     ' L '
    // ], {
    //     L: '#minecraft:logs',
    //     D: 'minecraft:dropper'
    // })

    
    // event.recipes.create.mechanical_crafting('mm:small_item_input', [
    //     " LL ",
    //     "LMML",
    //     "LMML",
    //     " LL "
    // ], {
    //     L: '#minecraft:logs',
    //     M: 'mm:mini_item_input'
    // })

    // event.recipes.create.mechanical_crafting('mm:small_item_output', [
    //     " LL ",
    //     "LMML",
    //     "LMML",
    //     " LL "
    // ], {
    //     L: '#minecraft:logs',
    //     M: 'mm:mini_item_output'
    // })

    // event.shaped('mm:cokery_controller', [
    //     'APA',
    //     'BSB',
    //     'ARA'
    // ], {
    //     A: 'create:andesite_alloy_block',
    //     R: 'minecraft:comparator',
    //     P: 'minecraft:piston',
    //     B: 'minecraft:iron_bars',
    //     S: 'create:small_scoria_bricks'
    // })

    
    // const inter = "mm:cokery_controller"
    // event.recipes.create.sequenced_assembly([
    //     Item.of("mm:blast_furnace_controller").withChance(9),
    //     Item.of("mm:cokery_controller").withChance(1)
    // ], inter, [
    //     event.recipes.createFilling(inter, [inter, Fluid.lava(500)]),
    //     event.recipes.createDeploying(inter, [inter, "minecraft:blaze_powder"]),
    //     event.recipes.createDeploying(inter, [inter, "minecraft:magma_cream"]),
    //     event.recipes.createDeploying(inter, [inter, "minecraft:nether_brick"])
    // ]).transitionalItem(inter).loops(4)
}) 