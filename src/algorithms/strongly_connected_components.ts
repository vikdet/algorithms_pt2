import { Digraph } from "../structures/digraph";
import {Graph} from "../structures/graph";
import { DepthFirstOrder } from "./depth_first_order";

// Finds connected components in unordered graph
export class StronglyConnectedComponents {
    visited: boolean[] = [];
    components: number[] = [];
    num: number = 0;

    constructor(
        readonly graph: Digraph) {
    
        let dfsOrder = new DepthFirstOrder(graph.getReversed());

        console.log(`reversePost ${dfsOrder.postOrder}`);
        for (let v of dfsOrder.postOrder.reverse()) {
            if (!this.visited[v]) {
                this.dfs(graph, v);
                this.num++;
            }
        }
    }

    private dfs(g: Digraph, v: number) {
        this.visited[v] = true;
        this.components[v] = this.num;
        for (const w of g.adjacentTo(v)) {
            if (!this.visited[w]) {
                this.dfs(g, w);
            }
        }
    }

    hasPathTo(v: number): boolean {
        return this.visited[v];
    }
}