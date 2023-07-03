import { WINNING_COMBOS } from "@/constants";

export class Board {
  board: Array<string | undefined>;
  constructor() {
    this.board = new Array(9);
  }
  isFull() {
    return this.board.reduce((acc) => acc + 1, 0) === 9;
  }
  findSquare(index: number) {
    return this.board[index];
  }
  clearBoard() {
    this.board = new Array(9);
  }
  changeSquare(index: number, value: string) {
    this.board[index] = value;
  }
  haveWinner() {
    return WINNING_COMBOS.some(combination => {
      const [a, b, c] = combination;
      return this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c];
    });
  }
  haveTie() {
    return this.isFull() && !this.haveWinner();
  }
}
