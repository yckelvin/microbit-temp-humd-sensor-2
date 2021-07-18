input.onButtonPressed(Button.A, function () {
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P1,
    true,
    false,
    true
    )
    dht11_dht22.selectTempType(tempType.celsius)
    microIoT.microIoT_SendMessage(convertToText(dht11_dht22.readData(dataType.humidity)), microIoT.TOPIC.topic_1)
    microIoT.microIoT_SendMessage(convertToText(dht11_dht22.readData(dataType.temperature)), microIoT.TOPIC.topic_2)
    microIoT.microIoT_showUserText(0, wifi_name)
    microIoT.microIoT_showUserText(1, "temp: " + dht11_dht22.readData(dataType.temperature) + " oC")
    microIoT.microIoT_showUserText(2, "humd: " + dht11_dht22.readData(dataType.humidity))
})
let wifi_name = ""
microIoT.microIoT_initDisplay()
wifi_name = "DGINCB_WT6F"
microIoT.microIoT_WIFI(wifi_name, "20210601")
microIoT.microIoT_MQTT(
"vkW338gnR",
"DkZq38gnRz",
"DanDCZznR",
microIoT.SERVERS.English
)
microIoT.microIoT_add_topic(microIoT.TOPIC.topic_1, "bCGskhz7R")
microIoT.microIoT_add_topic(microIoT.TOPIC.topic_2, "CU5yz2k7R")
