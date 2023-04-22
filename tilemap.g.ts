// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Mapa":
            case "nivel1":return tiles.createTilemap(hex`1000640002020202020202020202020202020202010202020202020202020202020202010100000000000000000000000000000101000000000000000000000000000001010000000000000000000000000000010100000000000000000000000000000101000000000000000000000000000001010000050000000000000000000000010100000404040404000000000000000101000008080808040400000000000001010000000000000808000000000000010100000000000000000000000000000101000000000000000000000000000001010000000000000000000000000000010100000000000000000000000000000101000000000000000000000000000001010000030000000005040404040000010100000000000000040408080800000101000000000000040408000000000001010000000000000808000000000000010100000005000000000000000000000101000005050500000000000000000001010005050505050000000000000000010105050505050505000000000000000101040404040404040000040405040401010404000000000000000804040408010104040000000000000000080808000101040405000000000000000000000001010404040404040000000000000000010108080808080800000000030000000101000000000000000007000000000001010000000000000000040404040400010100000000000000000000000004000101000000000000000000000500040001010000000000000404040404040400010100000000000008080808080808000101000000000000000000000000000001010000000000000000000000000000010100000000000000000000000000000101000000000000000000000000000001010005030005000305000000000000010100040404040404040000000000000101000808080808080800000000000001010000000000000000000000000000010100000000000000000000000000000101000000000000000000000000000001010000000000000000000000000000010100000000000000000000000000000101000000000000000404040404040401010004000000000008080808080808010100040500000000000000000000000101000404040404040400000000000001010008080808080808000000000000010100000000000000000000000000000101000000000000000000000000000001010000000000000000000000030000010100000000000000000000000000000101000000000000000000000000000001010000000000000000000000000000010100000000000000000000000000000101000000000000000000000000000001010000000000000000000000000000010100000000000000000504040400000101000000000000000004040408000001010000000003000004040808000000010100070000000000080800000000000101040400000000000000000000000001010804040500000000000000000000010100080404000000000000000000000101000008080000050000000000000001010000000000000404040700000000010100000000000008080404040400000101000000000000000008080804040401010000000000000000000000080808010100000000000000000000000000000101000000000000000000030000000001010005000700000000000000000000010100040404040400000000000000000101000808080808000000000000000001010000000000000000000000000000010100000000000000000000000000000101000000000000000005000000000001010000000000000404040404000000010100000000000008080808080000000101000000000000000000000000000001010000000300000500000000000000010100000004040404040000000000000101000000080808080800000000000001010000000000000000000000000000010100000000000000000000000000000101000000000500000000000000000001010000000404040400000000000000010100000008080808000000030000000101000000000000000000000000000001010000000000000000000000000000010100000000000000000000000000000101000000000000000000000000000001010000000000000000000000000000010100000000000006000000000000000101010101010101010101010101010101`, img`
2222222222222222
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..22222.......2
2......22......2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2........2222..2
2.......22.....2
2......22......2
2..............2
2..............2
2..............2
2..............2
2..............2
22222222..22.222
222........222.2
222............2
222............2
2222222........2
2..............2
2..............2
2........22222.2
2............2.2
2............2.2
2......2222222.2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2.2222222......2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2.......22222222
2.2............2
2.2............2
2.2222222......2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2.........222..2
2........222...2
2.......22.....2
2..............2
222............2
2.22...........2
2..22..........2
2..............2
2......222.....2
2........2222..2
2...........2222
2..............2
2..............2
2..............2
2..............2
2.22222........2
2..............2
2..............2
2..............2
2..............2
2......22222...2
2..............2
2..............2
2..............2
2...22222......2
2..............2
2..............2
2..............2
2..............2
2...2222.......2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2222222222222222
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest1,sprites.builtin.oceanDepths4,sprites.dungeon.hazardLava0,sprites.builtin.brick,sprites.dungeon.collectibleRedCrystal,myTiles.tile1,myTiles.tile2,sprites.dungeon.greenOuterNorth0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "Punto de inicio":
            case "tile1":return tile1;
            case "Spawnenemigo":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.