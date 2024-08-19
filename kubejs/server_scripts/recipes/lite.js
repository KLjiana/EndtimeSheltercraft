ServerEvents.recipes(event=>{
    event.remove({ output: 'minecraft:string' })
    event.remove({ output: 'backpacked:backpack' })
    event.remove({ output: 'minecraft:book' })

    event.shaped('backpacked:backpack', [
        'LHL',
        'WCW',
        'ISI'
    ], {
        W: 'minecraft:white_wool',
        C: 'minecraft:copper_ingot',
        S: 'minecraft:chest_minecart',
        L: 'minecraft:leather',
        I: 'minecraft:iron_block',
        H: 'minecraft:hopper'
    })

    event.shapeless('2x minecraft:string', [
       'minecraft:white_wool','minecraft:shears'
    ]).damageIngredient("minecraft:shears", 5)

    event.campfireCooking('minecraft:leather', 'minecraft:rotten_flesh')
})