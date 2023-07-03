enum TurnEnum {
    X = '❌',
    O = '🔵'
}

export class Turn {
    turn: TurnEnum;
    constructor() {
        this.turn = TurnEnum.X;
    }
    changeTurn() {
        this.turn = (this.turn === TurnEnum.X) ? TurnEnum.O : TurnEnum.X;
    }
}