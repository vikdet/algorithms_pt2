import {Graph} from "../src/structures/graph";
import {getGraph} from "./testbag/data";
import {Dfs} from "../src/algorithms/dfs";
import {Bfs} from "../src/algorithms/bfs";

it('DFS algorithm ', function () {
    let graph = getGraph();
    let dfs = new Dfs(graph, 0);
    console.log(`path from 0 to 3: ${dfs.pathTo(3)}`);
});
