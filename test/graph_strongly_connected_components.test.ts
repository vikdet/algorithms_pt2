import {getDirectedGraphForSCC, getGraph} from "./testbag/data";
import { StronglyConnectedComponents } from "../src/algorithms/strongly_connected_components";

it('Find strongly connected components in directed graph', function () {
    let graph = getDirectedGraphForSCC();
    let scc = new StronglyConnectedComponents(graph);
    console.log(scc.components);
});
