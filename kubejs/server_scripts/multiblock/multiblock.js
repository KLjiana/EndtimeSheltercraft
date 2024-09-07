// MMEvents.createStructures(event => {
//     event.create("mm:cokery")
//         .controllerId("mm:cokery_controller")
//         .name("Cokery")
//         .layout(a => {
//             a.layer([
//                 "SSS",
//                 "SSS",
//                 "SSS"
//             ]).layer([
//                 "BSB",
//                 "B B",
//                 "BBB"
//             ]).layer([
//                 "BCB",
//                 "O I",
//                 "SSS"
//             ]).layer([
//                 "SSS",
//                 "SSS",
//                 "SSS"
//             ]).key("S", {
//                 block: "create:cut_scorchia_bricks"
//             }).key("B", {
//                 block: "create:small_scoria_bricks"
//             }).key("I", {
//                 tag: "kubejs:mm_i_input"
//             }).key("O", {
//                 tag: "kubejs:mm_i_output"
//             })
//         })

//     event.create("mm:blast_furnace")
//         .controllerId("mm:blast_furnace_controller")
//         .name("Blast Furnace")
//         .layout(a => {
//             a.layer([
//                 "NNN",
//                 "NNN",
//                 "NNN"
//             ]).layer([
//                 "NDN",
//                 "D D",
//                 "NDN"
//             ]).layer([
//                 "DCD",
//                 "O I",
//                 "DDD"
//             ]).layer([
//                 "NNN",
//                 "NNN",
//                 "NNN"
//             ]).key("N", {
//                 block: "minecraft:nether_bricks"
//             }).key("D", {
//                 block: "create:cut_crimsite_bricks"
//             }).key("I", {
//                 tag: "kubejs:mm_i_input"
//             }).key("O", {
//                 tag: "kubejs:mm_i_output"
//             })
//         })
//     event.create("mm:assembly_room")
//         .controllerId("mm:assembly_room_controller")
//         .name("Assembly Room")
//         .layout(a => {
//             a.layer([
//                 "SAAAS",
//                 "AFFFA",
//                 "AFFFA",
//                 "AFLFA",
//                 "AFFFA",
//                 "AFLFA",
//                 "AFFFA",
//                 "AFLFA",
//                 "AFFFA",
//                 "AFFFA",
//                 "SAAAS"
//             ]).layer([
//                 "DFFFD",
//                 "F   F",
//                 "F   F",
//                 "F   F",
//                 "F   F",
//                 "F   F",
//                 "F   F",
//                 "F   F",
//                 "F   F",
//                 "F   F",
//                 "DSSSD"
//             ]).layer([
//                 "DFAFD",
//                 "F   F",
//                 "F   F",
//                 "F   F",
//                 "F   F",
//                 "F   F",
//                 "F   F",
//                 "F   F",
//                 "F   F",
//                 "F   F",
//                 "DNSND"
//             ]).layer([
//                 "DOCID",
//                 "N   N",
//                 "N   N",
//                 "N   N",
//                 "N   N",
//                 "N   N",
//                 "N   N",
//                 "N   N",
//                 "N   N",
//                 "N   N",
//                 "DFNFD"
//             ]).layer([
//                 "SAAAS",
//                 "ARBRA",
//                 "ARBRA",
//                 "ARBRA",
//                 "ARBRA",
//                 "ARBRA",
//                 "ARBRA",
//                 "ARBRA",
//                 "ARBRA",
//                 "ARBRA",
//                 "SAAAS"
//             ]).key("S", {
//                 block: "create:copper_casing"
//             }).key("A", {
//                 block: "create:andesite_casing"
//             }).key("R", {
//                 block: "create:rose_quartz_block"
//             }).key("B", {
//                 block: "create:belt"
//             }).key("D", {
//                 block: "create:deepslate_pillar"
//             }).key("N", {
//                 block: "create:industrial_iron_block"
//             }).key("F", {
//                 block: "create:framed_glass"
//             }).key("I", {
//                 tag: "kubejs:mm_i_input"
//             }).key("O", {
//                 tag: "kubejs:mm_i_output"
//             }).key("L", {
//                 block: "create:rose_quartz_lamp"
//             })
//         })
// })