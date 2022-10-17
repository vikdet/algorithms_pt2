import {Graph} from "../structures/graph";

export class Dfs {
    visited: boolean[] = [];
    edgeTo: number[] = [];

    constructor(
        readonly graph: Graph,
        readonly source: number) {
        this.dfs(graph, source);
    }

    private dfs(g: Graph, v: number) {
        this.visited[v] = true;
        for (const w of g.adjacentTo(v)) {
            if (!this.visited[w]) {
                this.dfs(g, w);
                this.edgeTo[w] = v;
            }
        }
    }

    hasPathTo(v: number): boolean {
        return this.visited[v];
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