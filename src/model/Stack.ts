import cloneDeep from 'lodash/cloneDeep';

class Node<T>{
    private value: T
    private bottomNode: Node<T> | null

    constructor(value: T) {
        this.value = value;
        this.bottomNode = null;
    }

    public getValue(): T { return this.value };

    public getBottomNode(): Node<T> | null { return this.bottomNode }

    public setBottomNode(node: Node<T> | null): void { this.bottomNode = node }

}

export class Stack<T>{
    private finalNode: Node<T> | null = null;

    public push(value: T): void {
        const newNode = new Node<T>(value);

        if (this.finalNode === null) {
            this.finalNode = newNode;
            return;
        }

        const previousFinalNode = this.finalNode
        this.finalNode = newNode;
        newNode.setBottomNode(previousFinalNode);
    }

    public pop(): T | null {
        if (this.finalNode === null) return null

        const value = this.finalNode.getValue();
        this.finalNode = this.finalNode.getBottomNode();
        return value;
    }
}