import {Graph} from "../structures/graph";

// Finds connected components in unordered graph
export class DfsСС {
    visited: boolean[] = [];
    components: number[] = [];

    constructor(
        readonly graph: Graph) {
        let num = 0;
        for (let v = 0; v < this.graph.v; v++) {
            if (!this.visited[v]) {
                this.dfs(graph, v, num);
                num++;
            }
        }
    }

    private dfs(g: Graph, v: number, component: number) {
        this.visited[v] = true;
        this.components[v] = component;
        for (const w of g.adjacentTo(v)) {
            if (!this.visited[w]) {
                this.dfs(g, w, component);
            }
        }
    }

    hasPathTo(v: number): boolean {
        return this.visited[v];
    }
}