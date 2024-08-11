MMEvents.createStructures(event => {
    event.create("mm:cokery")
        .controllerId("mm:cokery_controller")
        .name("Cokery")
        .layout(a => {
            a.layer([
                "SSS",
                "SSS",
                "SSS"
            ]).layer([
                "BSB",
                "B B",
                "BBB"
            ]).layer([
                "BCB",
                "O I",
                "SSS",
            ]).layer([
                "SSS",
                "SSS",
                "SSS"
            ]).key("S", {
                block: "create:cut_scorchia_bricks"
            }).key("B", {
                block: "create:small_scoria_bricks"
            }).key("I", {
                tag: "kubejs:mm_i_input"
            }).key("O", {
                tag: "kubejs:mm_i_output"
            })
        })
})