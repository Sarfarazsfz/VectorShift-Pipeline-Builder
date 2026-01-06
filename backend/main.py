from typing import List, Dict, Any

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


class Pipeline(BaseModel):
    nodes: List[Dict[str, Any]]
    edges: List[Dict[str, Any]]


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Ping": "Pong"}


def is_dag(nodes: List[Dict[str, Any]], edges: List[Dict[str, Any]]) -> bool:
    """Check if the directed graph defined by nodes and edges is acyclic."""
    if not nodes:
        return True  # Empty graph is a DAG
    
    node_ids = {n.get("id") for n in nodes if n.get("id") is not None}
    
    if not node_ids:
        return True  # No valid node IDs
    
    if not edges:
        return True  # No edges means no cycles

    # Build adjacency list and in-degree counts
    adj: Dict[str, List[str]] = {node_id: [] for node_id in node_ids}
    in_degree: Dict[str, int] = {node_id: 0 for node_id in node_ids}

    for edge in edges:
        source = edge.get("source")
        target = edge.get("target")
        # Only process edges where both source and target are valid node IDs
        if source and target and source in node_ids and target in node_ids:
            # Skip self-loops (they create cycles)
            if source == target:
                return False
            adj[source].append(target)
            in_degree[target] += 1

    # Kahn's algorithm for topological sort
    # Start with nodes that have no incoming edges
    queue = [n for n in node_ids if in_degree[n] == 0]
    visited_count = 0

    while queue:
        current = queue.pop(0)
        visited_count += 1
        # Process all neighbors of current node
        for neighbor in adj[current]:
            in_degree[neighbor] -= 1
            # If neighbor has no more incoming edges, add to queue
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

    # If we visited all nodes, the graph is acyclic (DAG)
    # If we couldn't visit all nodes, there's a cycle
    return visited_count == len(node_ids)


@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)
    dag = is_dag(pipeline.nodes, pipeline.edges)

    return {"num_nodes": num_nodes, "num_edges": num_edges, "is_dag": dag}

