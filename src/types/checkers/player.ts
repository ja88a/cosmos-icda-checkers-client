/** Red or Black player for a game session */
export type Player = "b" | "r"
/** Type for a game piece on the game board: empty or a user position */
export type GamePiece = Player | "*"

/** X,Y piece position on the 2D game board */
export interface Pos {
    x: number
    y: number
}



export interface GameMove {
    player: Player
    from: Pos
    to: Pos
}

export const completeGame: GameMove[] = [
    { player: "b", from: { x: 1, y: 2 }, to: { x: 2, y: 3 } }, // "*b*b*b*b|b*b*b*b*|***b*b*b|**b*****|********|r*r*r*r*|*r*r*r*r|r*r*r*r*"
    { player: "r", from: { x: 0, y: 5 }, to: { x: 1, y: 4 } }, // "*b*b*b*b|b*b*b*b*|***b*b*b|**b*****|*r******|**r*r*r*|*r*r*r*r|r*r*r*r*"
    { player: "b", from: { x: 2, y: 3 }, to: { x: 0, y: 5 } }, // "*b*b*b*b|b*b*b*b*|***b*b*b|********|********|b*r*r*r*|*r*r*r*r|r*r*r*r*"
    { player: "r", from: { x: 4, y: 5 }, to: { x: 3, y: 4 } }, // "*b*b*b*b|b*b*b*b*|***b*b*b|********|***r****|b*r***r*|*r*r*r*r|r*r*r*r*"
    { player: "b", from: { x: 3, y: 2 }, to: { x: 2, y: 3 } }, // "*b*b*b*b|b*b*b*b*|*****b*b|**b*****|***r****|b*r***r*|*r*r*r*r|r*r*r*r*"
    { player: "r", from: { x: 3, y: 4 }, to: { x: 1, y: 2 } }, // "*b*b*b*b|b*b*b*b*|*r***b*b|********|********|b*r***r*|*r*r*r*r|r*r*r*r*"
    { player: "b", from: { x: 0, y: 1 }, to: { x: 2, y: 3 } }, // "*b*b*b*b|**b*b*b*|*****b*b|**b*****|********|b*r***r*|*r*r*r*r|r*r*r*r*"
    { player: "r", from: { x: 2, y: 5 }, to: { x: 3, y: 4 } }, // "*b*b*b*b|**b*b*b*|*****b*b|**b*****|***r****|b*****r*|*r*r*r*r|r*r*r*r*"
    { player: "b", from: { x: 2, y: 3 }, to: { x: 4, y: 5 } }, // "*b*b*b*b|**b*b*b*|*****b*b|********|********|b***b*r*|*r*r*r*r|r*r*r*r*"
    { player: "r", from: { x: 5, y: 6 }, to: { x: 3, y: 4 } }, // "*b*b*b*b|**b*b*b*|*****b*b|********|***r****|b*****r*|*r*r***r|r*r*r*r*"
    { player: "b", from: { x: 5, y: 2 }, to: { x: 4, y: 3 } }, // "*b*b*b*b|**b*b*b*|*******b|****b***|***r****|b*****r*|*r*r***r|r*r*r*r*"
    { player: "r", from: { x: 3, y: 4 }, to: { x: 5, y: 2 } }, // "*b*b*b*b|**b*b*b*|*****r*b|********|********|b*****r*|*r*r***r|r*r*r*r*"
    { player: "b", from: { x: 6, y: 1 }, to: { x: 4, y: 3 } }, // "*b*b*b*b|**b*b***|*******b|****b***|********|b*****r*|*r*r***r|r*r*r*r*"
    { player: "r", from: { x: 6, y: 5 }, to: { x: 5, y: 4 } }, // "*b*b*b*b|**b*b***|*******b|****b***|*****r**|b*******|*r*r***r|r*r*r*r*"
    { player: "b", from: { x: 4, y: 3 }, to: { x: 6, y: 5 } }, // "*b*b*b*b|**b*b***|*******b|********|********|b*****b*|*r*r***r|r*r*r*r*"
    { player: "r", from: { x: 7, y: 6 }, to: { x: 5, y: 4 } }, // "*b*b*b*b|**b*b***|*******b|********|*****r**|b*******|*r*r****|r*r*r*r*"
    { player: "b", from: { x: 7, y: 2 }, to: { x: 6, y: 3 } }, // "*b*b*b*b|**b*b***|********|******b*|*****r**|b*******|*r*r****|r*r*r*r*"
    { player: "r", from: { x: 5, y: 4 }, to: { x: 7, y: 2 } }, // "*b*b*b*b|**b*b***|*******r|********|********|b*******|*r*r****|r*r*r*r*"
    { player: "b", from: { x: 4, y: 1 }, to: { x: 3, y: 2 } }, // "*b*b*b*b|**b*****|***b***r|********|********|b*******|*r*r****|r*r*r*r*"
    { player: "r", from: { x: 3, y: 6 }, to: { x: 4, y: 5 } }, // "*b*b*b*b|**b*****|***b***r|********|********|b***r***|*r******|r*r*r*r*"
    { player: "b", from: { x: 5, y: 0 }, to: { x: 4, y: 1 } }, // "*b*b***b|**b*b***|***b***r|********|********|b***r***|*r******|r*r*r*r*"
    { player: "r", from: { x: 2, y: 7 }, to: { x: 3, y: 6 } }, // "*b*b***b|**b*b***|***b***r|********|********|b***r***|*r*r****|r***r*r*"
    { player: "b", from: { x: 0, y: 5 }, to: { x: 2, y: 7 } }, // "*b*b***b|**b*b***|***b***r|********|********|****r***|***r****|r*B*r*r*"
    { player: "r", from: { x: 4, y: 5 }, to: { x: 3, y: 4 } }, // "*b*b***b|**b*b***|***b***r|********|***r****|********|***r****|r*B*r*r*"
    { player: "b", from: { x: 2, y: 7 }, to: { x: 4, y: 5 } }, // "*b*b***b|**b*b***|***b***r|********|***r****|****B***|********|r***r*r*"
    // player captures again
    { player: "b", from: { x: 4, y: 5 }, to: { x: 2, y: 3 } }, // "*b*b***b|**b*b***|***b***r|**B*****|********|********|********|r***r*r*"
    { player: "r", from: { x: 6, y: 7 }, to: { x: 5, y: 6 } }, // "*b*b***b|**b*b***|***b***r|**B*****|********|********|*****r**|r***r***"
    { player: "b", from: { x: 2, y: 3 }, to: { x: 3, y: 4 } }, // "*b*b***b|**b*b***|***b***r|********|***B****|********|*****r**|r***r***"
    { player: "r", from: { x: 0, y: 7 }, to: { x: 1, y: 6 } }, // "*b*b***b|**b*b***|***b***r|********|***B****|********|*r***r**|****r***"
    { player: "b", from: { x: 3, y: 2 }, to: { x: 4, y: 3 } }, // "*b*b***b|**b*b***|*******r|****b***|***B****|********|*r***r**|****r***"
    { player: "r", from: { x: 7, y: 2 }, to: { x: 6, y: 1 } }, // "*b*b***b|**b*b*r*|********|****b***|***B****|********|*r***r**|****r***"
    { player: "b", from: { x: 7, y: 0 }, to: { x: 5, y: 2 } }, // "*b*b****|**b*b***|*****b**|****b***|***B****|********|*r***r**|****r***"
    { player: "r", from: { x: 1, y: 6 }, to: { x: 2, y: 5 } }, // "*b*b****|**b*b***|*****b**|****b***|***B****|**r*****|*****r**|****r***"
    { player: "b", from: { x: 3, y: 4 }, to: { x: 1, y: 6 } }, // "*b*b****|**b*b***|*****b**|****b***|********|********|*B***r**|****r***"
    { player: "r", from: { x: 4, y: 7 }, to: { x: 3, y: 6 } }, // "*b*b****|**b*b***|*****b**|****b***|********|********|*B*r*r**|********"
    { player: "b", from: { x: 4, y: 3 }, to: { x: 3, y: 4 } }, // "*b*b****|**b*b***|*****b**|********|***b****|********|*B*r*r**|********"
    { player: "r", from: { x: 5, y: 6 }, to: { x: 4, y: 5 } }, // "*b*b****|**b*b***|*****b**|********|***b****|****r***|*B*r****|********"
    { player: "b", from: { x: 3, y: 4 }, to: { x: 5, y: 6 } }, // "*b*b****|**b*b***|*****b**|********|********|********|*B*r*b**|********"
    { player: "r", from: { x: 3, y: 6 }, to: { x: 2, y: 5 } }, // "*b*b****|**b*b***|*****b**|********|********|**r*****|*B***b**|********"
    { player: "b", from: { x: 1, y: 6 }, to: { x: 3, y: 4 } }, // "*b*b****|**b*b***|*****b**|********|***B****|********|*****b**|********"
]