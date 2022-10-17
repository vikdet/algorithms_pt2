import {Graph} from "../src/structures/graph";
import {getGraph} from "./testbag/data";
import {Dfs} from "../src/algorithms/dfs";
import {Bfs} from "../src/algorithms/bfs";

it('BFS algorithm ', function () {
    let graph = getGraph();
    let bfs = new Bfs(graph, 0);
    console.log(`path from 0 to 3: ${bfs.pathTo(3)}, distance: ${bfs.distanceTo[3]}`);
});