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
    ToonGegevens(data)
})
input.onButtonPressed(Button.B, function () {
    ToonGegevens(data)
})
function ToonGegevens (gegegens: string) {
    array = gegegens.split("|")
    i = 0
    for (let index = 0; index < array.length; index++) {
        basic.showString("" + (array[i]))
        i += 1
    }
}
let i = 0
let array: string[] = []
let data = ""
radio.setGroup(10)
basic.showLeds(`
    . . # . .
    . # # # .
    # . # . #
    # . . . #
    . # # # .
    `)
