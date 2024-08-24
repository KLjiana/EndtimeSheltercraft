//packmode: debug
let dumpList = []
PlayerEvents.chestClosed(event => {
    dumpList = []
    event.inventory.allItems.forEach(item => {
        item = item.id.replace("_spawn_egg", "")

        dumpList.push(`event.add('esc:type_1','${item}')`)
    })
    let copyText = Component.literal("已导出箱子中的实体id：点击复制").green().hover("快来复制我ヾ(≧▽≦*)o").clickCopy(dumpList)
    event.server.tell(copyText)
})