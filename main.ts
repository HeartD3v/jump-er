scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
    mySprite2.vy = -300
})
info.onCountdownEnd(function () {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.oceanDepths4, function (sprite, location) {
    game.gameOver(true)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite, effects.spray, 500)
})
let mySprite2: Sprite = null
scene.setBackgroundColor(0)
tiles.setCurrentTilemap(tilemap`Mapa`)
info.setLife(4)
mySprite2 = sprites.create(assets.image`Player`, SpriteKind.Player)
controller.moveSprite(mySprite2, 100, 0)
mySprite2.ay = 800
scene.cameraFollowSprite(mySprite2)
tiles.placeOnRandomTile(mySprite2, assets.tile`Punto de inicio`)
let mySprite3 = sprites.create(assets.image`Enemigo`, SpriteKind.Enemy)
tiles.placeOnRandomTile(mySprite3, assets.tile`Spawnenemigo`)
mySprite3.follow(mySprite2, 80)
info.changeCountdownBy(50)
