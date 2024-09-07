PlayerEvents.respawned(event=>{
    const {server, player} = event
    let data = server.persistentData
    if (data.getBoolean('stage_4')){
        player.potionEffects.add("resistance",-1,3,false,false)
    } else if (data.getBoolean('stage_3')){
        player.potionEffects.add("resistance",-1,2,false,false)
    } else if (data.getBoolean('stage_2')){
        player.potionEffects.add("resistance",-1,1,false,false)
    } else if (data.getBoolean('stage_1')){
        player.potionEffects.add("resistance",-1,0,false,false)
    }
})