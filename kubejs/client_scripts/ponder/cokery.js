Ponder.registry((event) => {
  event
    .create("mm:cokery_controller")
    .scene("kubejs:cokery_1", "焦炉: 结构", "kubejs:cokery_plate", (scene, utils) => {
      scene.idleSeconds(0.5);
      scene.showBasePlate();
      for (let i = 3; i <= 5; i++) {
        for (let j = 3; j <= 5; j++) {
          scene.world.setBlocks([i, 1, j], "create:cut_scorchia_bricks");
          scene.world.showSection([i, 1, j], Direction.DOWN);
          scene.idle(5);
        }
      }
      scene.addKeyframe();
      scene.world.setBlocks([3, 2, 3], "create:small_scoria_bricks");
      scene.world.showSection([3, 2, 3], Direction.DOWN);
      scene.idle(5);
      scene.world.setBlocks([5, 2, 3], "create:small_scoria_bricks");
      scene.world.showSection([5, 2, 3], Direction.DOWN);
      scene.idle(5);
      for (let i = 3; i <= 5; i++) {
        scene.world.setBlocks([i, 2, 5], "create:cut_scorchia_bricks");
        scene.world.showSection([i, 2, 5], Direction.DOWN);
        scene.idle(5);
      }
      scene.addKeyframe();
      for (let i = 3; i <= 5; i++) {
        for (let j = 3; j <= 5; j++) {
          if (i == 4 && j == 3) {
            scene.world.setBlocks([4, 3, 3], "create:cut_scorchia_bricks");
          } else if (i == 4 && j == 4) {
            scene.world.setBlocks([4, 3, 4], "minecraft:air");
            continue;
          } else {
            scene.world.setBlocks([i, 3, j], "create:small_scoria_bricks");
          }
          scene.world.showSection([i, 3, j], Direction.DOWN);
          scene.idle(5);
        }
      }
      scene.addKeyframe();
      for (let i = 3; i <= 5; i++) {
        for (let j = 3; j <= 5; j++) {
          scene.world.setBlocks([i, 4, j], "create:cut_scorchia_bricks");
          scene.world.showSection([i, 4, j], Direction.DOWN);
          scene.idle(5);
        }
      }
      scene.addKeyframe();
    }
    )
    .scene("kubejs:cokery_2", "焦炉: 部件", "kubejs:cokery_plate", (scene, utils) => {
      scene.idleSeconds(0.5);
      scene.showBasePlate();
      scene.world.setBlocks([4, 1, 4], "mm:cokery_controller");
      scene.world.showSection([4, 1, 4], Direction.DOWN);
      scene.text(20, "这是焦炉的控制器", [4.5, 1.5, 4]);
      scene.idle(20);
      scene.rotateCameraY(180)
      scene.idle(20);
      scene.text(20, "也是焦炉结构的重要组成部分", [4.5, 1.5, 4]);
      scene.idle(20);
      scene.text(10, "还有...");
      scene.idle(20);
      scene.world.setBlocks([3, 1, 4], "mm:mini_item_input", true);
      scene.world.showSection([3, 1, 4], Direction.DOWN);
      scene.text(20, "输入", [3.5, 1.5, 4]);
      scene.idle(20);
      scene.world.setBlocks([5, 1, 4], "mm:mini_item_output", true);
      scene.world.showSection([5, 1, 4], Direction.DOWN);
      scene.text(20, "和输出!", [5.5, 1.5, 4]);
      scene.idle(20);
      scene.text(20, "实际上,输入和输出端口是可以升级的!");
      scene.idle(60);
      scene.addLazyKeyframe();
      scene.world.setBlocks([4, 1, 4], "minecraft:air", false);
      scene.world.setBlocks([4, 1, 5], "mm:cokery_controller");
      scene.world.showSection([4, 1, 5], Direction.SOUTH);
      scene.world.setBlocks([5, 1, 5], "create:small_scoria_bricks");
      scene.world.showSection([5, 1, 5], Direction.DOWN);
      scene.idle(5);
      scene.world.setBlocks([3, 1, 5], "create:small_scoria_bricks");
      scene.world.showSection([3, 1, 5], Direction.DOWN);
      scene.idle(5);
      for (let i = 3; i <= 5; i++) {
        scene.world.setBlocks([i, 1, 3], "create:cut_scorchia_bricks");
        scene.world.showSection([i, 1, 3], Direction.DOWN);
        scene.idle(5);
      }
      scene.addLazyKeyframe();
      scene.text(20, "这就是第二层的完整结构了!");
      scene.idle(20);
    }
    )
    .scene("kubejs:cokery_3", "焦炉", "kubejs:cokery_plate", (scene, utils) => {
      scene.idleSeconds(0.5);
      scene.showBasePlate();
      for (let i = 3; i <= 5; i++) {
        for (let j = 3; j <= 5; j++) {
          scene.world.setBlocks([i, 1, j], "create:cut_scorchia_bricks");
          scene.world.showSection([i, 1, j], Direction.DOWN);
          scene.idle(5);
        }
      }
      scene.addKeyframe();
      scene.world.setBlocks([3, 2, 3], "create:small_scoria_bricks");
      scene.world.showSection([3, 2, 3], Direction.DOWN);
      scene.idle(5);
      scene.world.setBlocks([5, 2, 3], "create:small_scoria_bricks");
      scene.world.showSection([5, 2, 3], Direction.DOWN);
      scene.idle(5);
      scene.world.setBlocks([4, 2, 3], "mm:cokery_controller");
      scene.world.modifyBlocks([4, 2, 3], (curState) => curState.with("facing", "south"), true);
      scene.world.showSection([4, 2, 3], Direction.DOWN);
      scene.idle(5);
      scene.world.setBlocks([3, 2, 4], "mm:mini_item_input");
      scene.world.showSection([3, 2, 4], Direction.DOWN);
      scene.idle(5);
      scene.world.setBlocks([5, 2, 4], "mm:mini_item_output");
      scene.world.showSection([5, 2, 4], Direction.DOWN);
      scene.idle(5);
      for (let i = 3; i <= 5; i++) {
        scene.world.setBlocks([i, 2, 5], "create:cut_scorchia_bricks");
        scene.world.showSection([i, 2, 5], Direction.DOWN);
        scene.idle(5);
      }
      scene.addKeyframe();
      for (let i = 3; i <= 5; i++) {
        for (let j = 3; j <= 5; j++) {
          if (i == 4 && j == 3) {
            scene.world.setBlocks([4, 3, 3], "create:cut_scorchia_bricks");
          } else if (i == 4 && j == 4) {
            scene.world.setBlocks([4, 3, 4], "minecraft:air");
            continue;
          } else {
            scene.world.setBlocks([i, 3, j], "create:small_scoria_bricks");
          }
          scene.world.showSection([i, 3, j], Direction.DOWN);
          scene.idle(5);
        }
      }
      scene.addKeyframe();
      for (let i = 3; i <= 5; i++) {
        for (let j = 3; j <= 5; j++) {
          scene.world.setBlocks([i, 4, j], "create:cut_scorchia_bricks");
          scene.world.showSection([i, 4, j], Direction.DOWN);
          scene.idle(5);
        }
      }
      scene.addKeyframe();
      scene.text(40, "此时打开控制器,若显示Formed As: Cokery,即为搭建成功!")
      scene.idle(40);
      scene.addLazyKeyframe();
      scene.rotateCameraY(90);
      scene.idle(30);
      scene.world.createItemEntity([6.5, 2, 4.5], Direction.EAST, "minecraft:coal");
      scene.idle(15);
      scene.text(10, "放入煤炭", [6.5, 1, 4.5]);
      scene.idle(10);
      scene.text(10, "放入煤炭.", [6.5, 1, 4.5]);
      scene.idle(10);
      scene.text(10, "放入煤炭..", [6.5, 1, 4.5]);
      scene.idle(10);
      scene.text(10, "放入煤炭...", [6.5, 1, 4.5]);
      scene.idle(10);
      scene.rotateCameraY(-90);
      scene.world.createItemEntity([2.5, 2, 4.5], Direction.WEST, "kubejs:coke_coal");
      scene.text(10, "输出焦煤!", [2.5, 1, 4.5]);
    }
    )
});