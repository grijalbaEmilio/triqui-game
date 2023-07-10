import cloneDeep from 'lodash/cloneDeep'

class Node<T> {
  value: T
  bottomNode: Node<T> | null

  constructor(value: T) {
    this.value = value
    this.bottomNode = null
  }

  getValue(): T {
    return this.value
  }

  getBottomNode(): Node<T> | null {
    return this.bottomNode
  }

  setBottomNode(node: Node<T> | null): void {
    this.bottomNode = node
  }
}

export class Stack<T> {
  finalNode: Node<T> | null

  constructor() {
    this.finalNode = null
  }

  push(value: T): void {
    const newNode = new Node<T>(value)

    if (this.finalNode === null) {
      this.finalNode = newNode
      return
    }

    const previousFinalNode = this.finalNode
    this.finalNode = newNode
    newNode.setBottomNode(previousFinalNode)
  }

  pop(): T | null {
    if (this.finalNode === null) return null

    const value = this.finalNode.getValue()
    this.finalNode = this.finalNode.getBottomNode()
    return value
  }

  clear(): void {
    // use garbage collector for destroy all nodes
    this.finalNode = null
  }
}
