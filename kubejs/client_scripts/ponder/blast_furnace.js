Ponder.registry((event) => {
  event
    .create("mm:blast_furnace_controller")
    .scene("kubejs:blast_furnace_1", "高炉: 结构", "kubejs:blast_furnace_plate", (scene, utils) => {
      scene.idleSeconds(0.5);
      scene.showBasePlate();
      for (let i = 3; i <= 5; i++) {
        for (let j = 3; j <= 5; j++) {
          scene.world.setBlocks([i, 1, j], "minecraft:nether_bricks");
          scene.world.showSection([i, 1, j], Direction.DOWN);
          scene.idle(5);
        }
      }
      scene.addKeyframe();
      for (let i = 3; i <= 5; i++) {
        for (let j = 3; j <= 5; j++) {
          if(j == 4){
            continue;
          }
          if(i == 4 && j ==3){
            continue;
          }
          scene.world.setBlocks([i, 2, j], "create:cut_crimsite_bricks");
          scene.world.showSection([i, 2, j], Direction.DOWN);
          scene.idle(5);
        }
      }
      scene.addKeyframe();
      for (let i = 3; i <= 5; i++) {
        for (let j = 3; j <= 5; j++) {
          if (i == 4 && j == 4) {
            continue;
          } else if((i == 4 && j == 3) || (i == 4 && j == 5) ||
          (i == 3 && j == 4) || (i == 5 && j == 4)){
            scene.world.setBlocks([i, 3, j], "create:cut_crimsite_bricks");
          } else {
            scene.world.setBlocks([i, 3, j], "minecraft:nether_bricks");
          }
          scene.world.showSection([i, 3, j], Direction.DOWN);
          scene.idle(5);
        }
      }
      scene.addKeyframe();
      for (let i = 3; i <= 5; i++) {
        for (let j = 3; j <= 5; j++) {
          scene.world.setBlocks([i, 4, j], "minecraft:nether_bricks");
          scene.world.showSection([i, 4, j], Direction.DOWN);
          scene.idle(5);
        }
      }
      scene.addKeyframe();
    }
    )
    .scene("kubejs:blast_furnace_2", "高炉: 部件", "kubejs:blast_furnace_plate", (scene, utils) => {
      scene.idleSeconds(0.5);
      scene.showBasePlate();
      scene.world.setBlocks([4, 1, 4], "mm:blast_furnace_controller");
      scene.world.showSection([4, 1, 4], Direction.DOWN);
      scene.text(20, "这是高炉的控制器", [4.5, 1.5, 4]);
      scene.idle(20);
      scene.rotateCameraY(180)
      scene.idle(20);
      scene.text(20, "也是高炉结构的重要组成部分", [4.5, 1.5, 4]);
      scene.idle(20);
      scene.text(10, "还有...");
      scene.idle(20);
      scene.world.setBlocks([3, 1, 4], "mm:small_item_input", true);
      scene.world.showSection([3, 1, 4], Direction.DOWN);
      scene.text(20, "输入", [3.5, 1.5, 4]);
      scene.idle(20);
      scene.world.setBlocks([5, 1, 4], "mm:mini_item_output", true);
      scene.world.showSection([5, 1, 4], Direction.DOWN);
      scene.text(20, "和输出!", [5.5, 1.5, 4]);
      scene.idle(20);
      scene.text(20, "§4高炉结构的输入端口至少需要为小型!");
      scene.overlay.showOutline("red", {}, [3, 1, 4, 3, 1, 4], 20);
      scene.idle(60);
      scene.addLazyKeyframe();
      scene.world.setBlocks([4, 1, 4], "minecraft:air", false);
      scene.world.setBlocks([4, 1, 5], "mm:blast_furnace_controller");
      scene.world.showSection([4, 1, 5], Direction.SOUTH);
      scene.world.setBlocks([5, 1, 5], "create:cut_crimsite_bricks");
      scene.world.showSection([5, 1, 5], Direction.DOWN);
      scene.idle(5);
      scene.world.setBlocks([3, 1, 5], "create:cut_crimsite_bricks");
      scene.world.showSection([3, 1, 5], Direction.DOWN);
      scene.idle(5);
      for (let i = 3; i <= 5; i++) {
        scene.world.setBlocks([i, 1, 3], "create:cut_crimsite_bricks");
        scene.world.showSection([i, 1, 3], Direction.DOWN);
        scene.idle(5);
      }
      scene.addLazyKeyframe();
      scene.text(20, "这就是第二层的完整结构了!");
      scene.idle(20);
    }
    )
    .scene("kubejs:blast_furnace_3", "高炉", "kubejs:blast_furnace_plate", (scene, utils) => {
      scene.idleSeconds(0.5);
      scene.showBasePlate();
      for (let i = 3; i <= 5; i++) {
        for (let j = 3; j <= 5; j++) {
          scene.world.setBlocks([i, 1, j], "minecraft:nether_bricks");
          scene.world.showSection([i, 1, j], Direction.DOWN);
          scene.idle(5);
        }
      }
      scene.addKeyframe();
      scene.world.setBlocks([3, 2, 3], "create:cut_crimsite_bricks");
      scene.world.showSection([3, 2, 3], Direction.DOWN);
      scene.idle(5);
      scene.world.setBlocks([5, 2, 3], "create:cut_crimsite_bricks");
      scene.world.showSection([5, 2, 3], Direction.DOWN);
      scene.idle(5);
      scene.world.setBlocks([4, 2, 3], "mm:blast_furnace_controller");
      scene.world.modifyBlocks([4, 2, 3], (curState) => curState.with("facing", "south"), true);
      scene.world.showSection([4, 2, 3], Direction.DOWN);
      scene.idle(5);
      scene.world.setBlocks([3, 2, 4], "mm:mini_item_output");
      scene.world.showSection([3, 2, 4], Direction.DOWN);
      scene.idle(5);
      scene.world.setBlocks([5, 2, 4], "mm:small_item_input");
      scene.world.showSection([5, 2, 4], Direction.DOWN);
      scene.idle(5);
      for (let i = 3; i <= 5; i++) {
        scene.world.setBlocks([i, 2, 5], "create:cut_crimsite_bricks");
        scene.world.showSection([i, 2, 5], Direction.DOWN);
        scene.idle(5);
      }
      scene.addKeyframe();
      for (let i = 3; i <= 5; i++) {
        for (let j = 3; j <= 5; j++) {
          if (i == 4 && j == 4) {
            continue;
          } else if((i == 4 && j == 3) || (i == 4 && j == 5) ||
          (i == 3 && j == 4) || (i == 5 && j == 4)){
            scene.world.setBlocks([i, 3, j], "create:cut_crimsite_bricks");
          } else {
            scene.world.setBlocks([i, 3, j], "minecraft:nether_bricks");
          }
          scene.world.showSection([i, 3, j], Direction.DOWN);
          scene.idle(5);
        }
      }
      scene.addKeyframe();
      for (let i = 3; i <= 5; i++) {
        for (let j = 3; j <= 5; j++) {
          scene.world.setBlocks([i, 4, j], "minecraft:nether_bricks");
          scene.world.showSection([i, 4, j], Direction.DOWN);
          scene.idle(5);
        }
      }
      scene.addKeyframe();
      scene.text(40, "此时打开控制器,若显示Formed As: Blast Furnace,即为搭建成功!")
      scene.idle(40);
      scene.addLazyKeyframe();
      scene.rotateCameraY(90);
      scene.idle(30);
      scene.world.createItemEntity([6.5, 2, 4.5], Direction.SOUTH, "kubejs:coke_coal");
      scene.idle(5);
      scene.world.createItemEntity([6.5, 2, 4.5], Direction.DOWN, "createbigcannons:cast_iron_ingot");
      scene.idle(15);
      scene.text(10, "放入焦煤与§a铸铁锭§r", [6.5, 1, 4.5]);
      scene.idle(10);
      scene.text(10, "放入焦煤与§a铸铁锭§r.", [6.5, 1, 4.5]);
      scene.idle(10);
      scene.text(10, "放入焦煤与§a铸铁锭§r..", [6.5, 1, 4.5]);
      scene.idle(10);
      scene.text(10, "放入焦煤与§a铸铁锭§r...", [6.5, 1, 4.5]);
      scene.idle(10);
      scene.rotateCameraY(-90);
      scene.world.createItemEntity([2.5, 2, 4.5], Direction.WEST, "kubejs:steel_ingot");
      scene.text(10, "输出钢锭!", [2.5, 1, 4.5]);
    }
    )
});