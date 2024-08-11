StartupEvents.registry("block", (event) => {
    event.create("military_casing")
    .displayName("军用外壳")
    .material("stone")
    .hardness(5.0)
    .resistance(2.0)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
    .tagBlock('minecraft:needs_stone_tool')
})
StartupEvents.registry("item", (event) => {
    event.create("coke_coal")
    .displayName("焦煤")
})