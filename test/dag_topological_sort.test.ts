import {Graph} from "../src/structures/graph";
import {getDirectedAcyclicGraph, getGraph} from "./testbag/data";
import {Dfs} from "../src/algorithms/dfs";
import {Bfs} from "../src/algorithms/bfs";
import {DepthFirstOrder} from "../src/algorithms/depth_first_order";

describe('Topological sort', function(){
    it('Sort in topological order', function () {
        let graph = getDirectedAcyclicGraph();
        let dfsOrder = new DepthFirstOrder(graph);
        console.log(`reversePost: ${dfsOrder.postOrder}`);
        console.log(`topological order: ${dfsOrder.postOrder.reverse()}`);
        console.log('hasCycle ' + dfsOrder.hasCycle);
    });
    
});
