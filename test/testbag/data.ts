import {Graph} from "../../src/structures/graph";
import {Digraph} from "../../src/structures/digraph";

export function getGraph() {
    let graph = new Graph(13);
    graph.addEdge(0, 5);
    graph.addEdge(4, 3);
    graph.addEdge(0, 1);
    graph.addEdge(9, 12);
    graph.addEdge(6, 4);
    graph.addEdge(5, 4);
    graph.addEdge(0, 2);
    graph.addEdge(11, 12);
    graph.addEdge(9, 10);
    graph.addEdge(0, 6);
    graph.addEdge(7, 8);
    graph.addEdge(9, 11);
    graph.addEdge(5, 3);

    return graph;
}

export function getDirectedAcyclicGraph() : Digraph {
    let graph = new Digraph(7);
    graph.addEdge(0,1);
    graph.addEdge(0,5);
    graph.addEdge(0,2);
    graph.addEdge(2,6);
    graph.addEdge(3,6);
    graph.addEdge(3,5);
    graph.addEdge(3,4);
    graph.addEdge(5,2);
    graph.addEdge(6,4);
    graph.addEdge(6,0);
    graph.addEdge(3,2)
    graph.addEdge(1,4);
    return graph;
}

export function getDirectedGraphForSCC() : Digraph {
    let graph = new Digraph(13);
    graph.addEdge(0,1);
    graph.addEdge(0,5);
    graph.addEdge(2,0);
    graph.addEdge(2,3);
    graph.addEdge(3,2);
    graph.addEdge(3,5);
    graph.addEdge(4,2);
    graph.addEdge(4,3);
    graph.addEdge(5,4);
    graph.addEdge(6,4);
    graph.addEdge(6,8);
    graph.addEdge(6,9);
    graph.addEdge(7,9);
    graph.addEdge(7,6);
    graph.addEdge(8,6);
    graph.addEdge(9,10);
    graph.addEdge(9,11);
    graph.addEdge(10,12);
    graph.addEdge(11,4);
    graph.addEdge(11,12);
    graph.addEdge(12,9);
    return graph;
}