def on_button_pressed_a():
    global data, array, i
    data = "20|1030|40"
    array = data.split("|")
    i = 0
    for index in range(len(array)):
        basic.show_string("" + (array[i]))
        i += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def toon_gegevens(gegevens: str):
    global array, i
    array = gegevens.split("|")
    i = 0
    for index2 in range(len(array)):
        basic.show_string("" + (array[i]))
        i += 1

def on_received_string(receivedString):
    global data
    data = receivedString
    toon_gegevens(data)
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    toon_gegevens(data)
input.on_button_pressed(Button.B, on_button_pressed_b)

i = 0
array: List[str] = []
data = ""
radio.set_group(10)
basic.show_leds("""
    . . # . .
        . # # # .
        # . # . #
        # . . . #
        . # # # .
""")