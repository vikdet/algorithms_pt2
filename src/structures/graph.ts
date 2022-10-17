export class Graph {
    readonly adj: number[][] = [];

    constructor(readonly v: number) {
        for (let i = 0; i < v; i++) {
            this.adj[i] = [];
        }
    }

    addEdge(v: number, w: number): void {
        this.adj[v].push(w);
        this.adj[w].push(v);
    }

    adjacentTo(v: number): number[]{
        return this.adj[v];
    }

}