import {Graph} from "../structures/graph";
import {Queue} from "../structures/queue";

export class Bfs {
    distanceTo: number[] = [];
    edgeTo: number[] = [];
    queue = new Queue<number>();

    constructor(
        readonly graph: Graph,
        readonly source: number) {

        this.bfs();
    }

    private bfs(): void {
        this.queue.enqueue(this.source);
        let length = 1;
        while (this.queue.length != 0) {
            let v = this.queue.dequeue();
            for (const w of this.graph.adjacentTo(v)) {
                if (this.distanceTo[w] === undefined) {
                    this.edgeTo[w] = v;
                    this.distanceTo[w] = length;
                    this.queue.enqueue(w);
                }
            }
            length++;
        }
    }

    hasPathTo(v: number): boolean {
        return !!this.distanceTo[v];
    }

    pathTo(v: number): number[] {
        let path = [];
        if (this.hasPathTo(v)) {
            for (let w = v; w != this.source; w = this.edgeTo[w]) {
                path.unshift(w);
            }
        }
        return path;
    }
}