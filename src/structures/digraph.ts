export class Digraph {
    readonly adj: number[][] = [];

    constructor(readonly v: number) {
        for (let i = 0; i < v; i++) {
            this.adj[i] = [];
        }
    }

    addEdge(v: number, w: number): void {
        this.adj[v].push(w);
    }

    adjacentTo(v: number): number[] {
        return this.adj[v];
    }

    getReversed() : Digraph {
        let reversed = new Digraph(this.v);
        
        for (let w = 0; w < this.v; w++) {
            const adj = this.adj[w];

            for (const out of adj) {
                reversed.addEdge(out, w);
            }
            
        }
        
        return reversed;
    }

}