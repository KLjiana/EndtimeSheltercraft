ServerEvents.recipes(event => {
    event.remove({ output: 'tacz:gun_smith_table' })
    event.remove({ output: 'tacz:ammo_box' })

    event.custom({
        type: 'create:mechanical_crafting',
        "acceptMirrored": false,
        "key": {
            "B": {
                "item": "create:brass_casing"
            },
            "W": {
                "item": "refurbished_furniture:wrench"
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
            "BBBISS",
            "LL  LL",
            "L    L"
        ],
        "result": {
            "count": 1,
            "item": "tacz:gun_smith_table"
        }
    })

    event.custom({
        type: 'create:mechanical_crafting',
        "acceptMirrored": false,
        "key": {
            "M": {
                "item": "kubejs:military_casing"
            },
            "I": {
                "item": "minecraft:iron_block"
            },
            "P": {
                "tag": "minecraft:planks"
            }
        },
        "pattern": [
            "MMMMM",
            "IPPPI",
            "IP PI",
            "MPPPM",
            "MMMMM"
        ],
        "result": {
            "count": 1,
            "item": "tacz:ammo_box",
            "nbt": {
                "Level": 0
            }
        }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        "acceptMirrored": false,
        "key": {
            "M": {
                "item": "kubejs:military_casing"
            },
            "G": {
                "item": "minecraft:gold_block"
            },
            "P": {
                "tag": "minecraft:planks"
            },
            "A": {
                "item": "tacz:ammo_box"
            }
        },
        "pattern": [
            "MMMMM",
            "GPAPG",
            "GP PG",
            "MPPPM",
            "MMMMM"
        ],
        "result": {
            "count": 1,
            "item": "tacz:ammo_box",
            "nbt": {
                "Level": 1
            }
        }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        "acceptMirrored": false,
        "key": {
            "M": {
                "item": "kubejs:military_casing"
            },
            "D": {
                "item": "minecraft:diamond"
            },
            "P": {
                "tag": "minecraft:planks"
            },
            "A": {
                "item": "tacz:ammo_box"
            }
        },
        "pattern": [
            "MMMMM",
            "DPAPD",
            "DP PD",
            "MPPPM",
            "MMMMM"
        ],
        "result": {
            "count": 1,
            "item": "tacz:ammo_box",
            "nbt": {
                "Level": 2
            }
        }
    })
    event.custom({
        "type": "create:compacting",
        "heatRequirement": "superheated",
        "ingredients": [
            {
                "item": "create:copper_casing"
            },
            {
                "item": "minecraft:green_dye"
            },
            {
                "item": "minecraft:black_dye"
            },
            {
                "amount": 9,
                "fluid": "createbigcannons:molten_nethersteel",
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

    event.shaped('mm:mini_item_input', [
        ' L ',
        'LHL',
        ' L '
    ], {
        L: '#minecraft:logs',
        H: 'minecraft:hopper'
    })

    event.shaped('mm:mini_item_output', [
        ' L ',
        'LDL',
        ' L '
    ], {
        L: '#minecraft:logs',
        D: 'minecraft:dropper'
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

    event.recipes.create.mechanical_crafting('mm:small_item_input', [
        " LL ",
        "LMML",
        "LMML",
        " LL "
    ], {
        L: '#minecraft:logs',
        M: 'mm:mini_item_input'
    })

    event.recipes.create.mechanical_crafting('mm:small_item_output', [
        " LL ",
        "LMML",
        "LMML",
        " LL "
    ], {
        L: '#minecraft:logs',
        M: 'mm:mini_item_output'
    })
}) 