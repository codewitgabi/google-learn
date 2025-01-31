import { ReactFlow, Background, Controls } from "@xyflow/react";

const nodes = [
  {
    id: "1",
    position: { x: 500, y: 0 },
    data: { label: <div className="bg-blue-50 py-2 px-4">Coma</div> },
    type: "input",
  },
  { id: "2", position: { x: 500, y: 80 }, data: { label: "ABCs and C-Spine" } },
  {
    id: "3",
    position: { x: 500, y: 160 },
    data: { label: "Neurological Assessment" },
  },
  {
    id: "4",
    position: { x: 500, y: 240 },
    data: { label: "Assess for readily reversible conditions" },
  },
  {
    id: "5",
    position: { x: 500, y: 320 },
    data: { label: "STAT CTH consider CTA" },
  },
  {
    id: "6",
    position: { x: 500, y: 400 },
    data: { label: "Focused history/PMH" },
  },
  { id: "7", position: { x: 500, y: 480 }, data: { label: "STAT Labs" } },
  { id: "8", position: { x: 500, y: 560 }, data: { label: "Causes of Coma" } },

  // Branching nodes
  { id: "9", position: { x: 400, y: 620 }, data: { label: "Unclear" } },
  {
    id: "10",
    position: { x: 600, y: 620 },
    data: { label: "Structural (Focal Exam)" },
  },
  { id: "11", position: { x: 800, y: 620 }, data: { label: "Nonstructural" } },

  {
    id: "12",
    position: { x: 400, y: 700 },
    data: { label: "Cause Identified" },
  },
  {
    id: "13",
    position: { x: 600, y: 700 },
    data: { label: "Brain imaging confirms" },
  },
  { id: "14", position: { x: 800, y: 700 }, data: { label: "Metabolic Coma" } },

  {
    id: "15",
    position: { x: 600, y: 780 },
    data: { label: "Persisting uncertainty" },
  },
  { id: "16", position: { x: 600, y: 860 }, data: { label: "CTA/MRI/LP/EEG" } },
];

const edges = [
  { id: "1-2", source: "1", target: "2" },
  { id: "2-3", source: "2", target: "3" },
  { id: "3-4", source: "3", target: "4" },
  { id: "4-5", source: "4", target: "5" },
  { id: "5-6", source: "5", target: "6" },
  { id: "6-7", source: "6", target: "7" },
  { id: "7-8", source: "7", target: "8" },

  // Branch connections
  { id: "8-9", source: "8", target: "9" },
  { id: "8-10", source: "8", target: "10" },
  { id: "8-11", source: "8", target: "11" },

  { id: "9-12", source: "9", target: "12" },
  { id: "10-13", source: "10", target: "13" },
  { id: "11-14", source: "11", target: "14" },

  { id: "13-15", source: "13", target: "15" },
  { id: "14-15", source: "14", target: "15" },
  { id: "15-16", source: "15", target: "16" },
];

function FlowPage() {
  return (
    <div style={{ height: "100dvh" }}>
      <ReactFlow nodes={nodes} edges={edges}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default FlowPage;
