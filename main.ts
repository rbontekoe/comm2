function toonGegevens (receivedData: string) {
    array = receivedData.split("|")
    i = 0
    for (let index = 0; index < array.length; index++) {
        basic.showString("" + (array[i]))
        i += 1
    }
}
input.onButtonPressed(Button.A, function () {
    data = "20|1030|40"
    array = data.split("|")
    i = 0
    for (let index = 0; index < array.length; index++) {
        basic.showString("" + (array[i]))
        i += 1
    }
})
radio.onReceivedString(function (receivedString) {
    data = receivedString
    toonGegevens(data)
})
input.onButtonPressed(Button.B, function () {
    toonGegevens(data)
})
let data = ""
let i = 0
let array: string[] = []
radio.setGroup(10)
basic.showLeds(`
    . . # . .
    . # # # .
    # . # . #
    # . . . #
    . # # # .
    `)
