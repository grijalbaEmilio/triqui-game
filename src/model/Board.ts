import { WINNING_COMBOS } from '@/constants'
import { Stack } from './Stack'

type ChangeStorage = {
  boardIndex: number
  value: string
}

export class Board {
  board: Array<string | undefined>
  stackMoves: Stack<ChangeStorage>
  stackUndoMoves: Stack<ChangeStorage>
  _haveWinner: boolean = false
  _haveTie: boolean = false
  constructor() {
    this.board = new Array(9)
    this.stackMoves = new Stack<ChangeStorage>()
    this.stackUndoMoves = new Stack<ChangeStorage>()
  }
  isFull() {
    return this.board.reduce((acc, value) => (value ? acc + 1 : acc), 0) === 9
  }
  findSquare(index: number) {
    return this.board[index]
  }
  clearBoard() {
    this.board = new Array(9)
    this.stackMoves = new Stack<ChangeStorage>()
    this.stackUndoMoves = new Stack<ChangeStorage>()
    this._haveWinner = false
    this._haveTie = false
  }
  changeSquare(index: number, value: string) {
    this.board[index] = value
    this.stackMoves.push({ boardIndex: index, value })
    this.stackUndoMoves.clear()
  }
  undoAction(): boolean {
    const LastMove = this.stackMoves.pop()
    if (LastMove === null) return false

    this.stackUndoMoves.push(LastMove)
    this.board[LastMove.boardIndex] = undefined
    return true
  }
  redoAction(): boolean {
    const LastUndoMove = this.stackUndoMoves.pop()
    if (LastUndoMove === null) return false

    this.stackMoves.push(LastUndoMove)
    this.board[LastUndoMove.boardIndex] = LastUndoMove.value
    return true
  }
  haveWinner() {
    if (this._haveWinner) return true

    this._haveWinner = WINNING_COMBOS.some((combination) => {
      const [a, b, c] = combination
      return this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]
    })

    return this._haveWinner
  }

  haveTie() {
    if (this._haveTie) return true
    this._haveTie = this.isFull() && !this.haveWinner()
    return this._haveTie
  }
}
