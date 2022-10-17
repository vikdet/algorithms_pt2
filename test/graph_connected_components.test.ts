import {getGraph} from "./testbag/data";
import {Dfs} from "../src/algorithms/dfs";
import {DfsСС} from "../src/algorithms/dfs_сс";

it('Find connected components in undirected graph', function () {
    let graph = getGraph();
    let dfs = new DfsСС(graph);
    console.log(dfs.components);
});
