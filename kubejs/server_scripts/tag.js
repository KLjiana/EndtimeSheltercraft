ServerEvents.tags('block', event => {
    const mm_i_id = ['mini', 'small']
    mm_i_id.forEach(id =>  {
        event.add('kubejs:mm_i_input', 'mm:' + id + '_item_input')
    })
    mm_i_id.forEach(id =>  {
        event.add('kubejs:mm_i_output', 'mm:' + id + '_item_output')
    })
})