let weather_prediction = game.askForString("what is your weather prediction? ")
game.splash("it is going to " + weather_prediction)
let weather_person = sprites.create(img`
. . . . 9 9 9 9 9 9 . . . . . . 
. . . . 9 5 9 9 5 9 . . . . . . 
. . . . 9 9 9 9 9 9 . b . . . . 
. . . . . . 9 9 . . . f . . . . 
. . 9 9 9 9 9 9 9 9 9 9 . . . . 
. . . . . . 9 9 . . . f . . . . 
. . . . . . 9 9 . . . . . . . . 
. . . . . . 9 9 . . . . . . . . 
. . 9 9 9 9 9 9 9 9 9 9 . . . . 
. . 9 9 9 9 9 9 9 9 9 9 . . . . 
. . 9 . . . . . . . . 9 . . . . 
. . 9 . . . . . . . . 9 . . . . 
. . 9 . . . . . . . . 9 . . . . 
. . 9 . . . . . . . . 9 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
let weather_effects = Math.randomRange(0, 6)
if (weather_effects == 0) {
    effects.confetti.startScreenEffect()
    weather_person.say("confetti!!!!")
} else if (weather_effects) {
    effects.hearts.startScreenEffect()
    weather_person.say("something!!!!")
} else if (weather_effects) {
    effects.smiles.startScreenEffect()
    weather_person.say("something else!!!")
} else if (false) {
	
} else if (false) {
	
} else {
	
}
