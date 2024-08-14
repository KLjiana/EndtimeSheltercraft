//为附魔书添加类似于Enchantment Descriptions的效果（但是有shift隐藏

let holdTime
let holdShift = false
let descLine = 0
let isShortPressAdded = false // 新增变量
const enchantedBook = Ingredient.of("minecraft:enchanted_book")
ItemEvents.tooltip(event => {
  event.addAdvanced(Ingredient.all, (item, advanced, text) => {
    if (!enchantedBook.test(item) && !item.enchanted) return
    const { enchantments } = item
    const time = Client.instance.player?.level.time
    if (!holdShift && event.shift) {
      holdShift = true
      holdTime = time
      //console.info(holdTime)
    }
    if (holdShift && !event.shift) {
      //console.info(time - holdTime)
      if (time - holdTime < 8 && isShortPressAdded) {
        if (descLine == enchantments.size() - 1) descLine = 0
        else descLine++
        //console.info('短按')
      } else if (time - holdTime >= 8) {
        if (!isShortPressAdded) isShortPressAdded = true
        else isShortPressAdded = false
        descLine = 0
        //console.info('长按')
      }
      holdShift = false
    }
    //console.info(descLine)
    if (isShortPressAdded) {
      let descriptionId = `enchantment.${enchantments.entrySet()[descLine].getKey().replace(":", ".")}`
      text.add(Text.translate(
        "tooltip.enchant_desc.embellish",
        Text.translate(descriptionId),
        Text.translate(`${descriptionId}.desc`)
      ).darkGray())
      text.add(Text.translate("tooltip.enchant_desc.unfold"))
    } else text.add(Text.translate("tooltip.enchant_desc.hold"))
  })
})