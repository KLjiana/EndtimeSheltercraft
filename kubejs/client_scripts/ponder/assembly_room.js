Ponder.registry((event) => {
    event
      .create("mm:assembly_room_controller")
      .scene("kubejs:assembly_room", "装配室", "kubejs:assembly_room", (scene, utils) => {
        scene.rotateCameraY(180);
        scene.idle(40);
        for(let i = 0; i <= 5; i++){
            scene.showStructure(i);
            scene.idle(35);
        }
        scene.rotateCameraY(180);
      })
})