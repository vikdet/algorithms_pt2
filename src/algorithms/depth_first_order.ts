import {Graph} from "../structures/graph";
import {Digraph} from "../structures/digraph";

export class DepthFirstOrder {
    visited: boolean[] = [];
    postOrder: number[] = [];
    stackVertices: number[] = [];
    hasCycle = false;

    constructor(
        readonly graph: Digraph,
    ) {
        for (let v = 0; v < graph.v; v++) {
            if (!this.visited[v]) {
                this.dfs(graph, v);
            }
        }
    }

    private dfs(g: Digraph, v: number) {
        this.visited[v] = true;
        this.stackVertices.push(v);
        console.log(`v: ${v}, stackVertices: ${this.stackVertices}, adj: ${ g.adjacentTo(v)}`);
        for (const w of g.adjacentTo(v)) {
            if (this.stackVertices.find((x)=> x === w) !== undefined ){
                this.hasCycle = true;
            }
            if (!this.visited[w]) {
                this.dfs(g, w);
            }
        }
        this.stackVertices.pop();
        this.postOrder.push(v);
    }

    hasPathTo(v: number): boolean {
        return this.visited[v];
    }

}