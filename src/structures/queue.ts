export class Queue<T> {
    private readonly items: T[] = [];

    enqueue(item: T) {
        this.items.push(item);
    }

    dequeue(): T {
        return this.items.shift();
    }

    get length() {
        return this.items.length;
    }

}