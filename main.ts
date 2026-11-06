let ruka = 0
// Ovaj blok se aktivira čim protreseš micro:bit
input.onGesture(Gesture.Shake, function () {
    // Nasumično bira broj između 1 i 3 pomoću ispravne funkcije randint
    ruka = randint(1, 3)
    // Ako je izabran broj 1, prikaži KAMEN
    // Ako je izabran broj 2, prikaži PAPIR
    // U svakom drugom slučaju (ako je broj 3), prikaži MAKAZE
    if (ruka == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (ruka == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
basic.forever(function () {
	
})
