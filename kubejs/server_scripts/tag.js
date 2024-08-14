ServerEvents.tags('block', event => {
    const mm_i_id = ['mini', 'small']
    mm_i_id.forEach(id =>  {
        event.add('kubejs:mm_i_input', 'mm:' + id + '_item_input')
        event.add('kubejs:mm_i_output', 'mm:' + id + '_item_output')
    })

    event.add('forge:storage_blocks/steel', 'kubejs:steel_block')
})

ServerEvents.tags('item', event => {
    event.add('forge:ingots/steel', 'kubejs:steel_ingot')
})