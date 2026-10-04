export const projects = [
  {
    id: 'axn',
    title: 'AXN - Agent Workflow Graph Platform',
    description: 'A graph-based agent workflow runtime built from scratch, enabling complex multi-agent systems to be composed and executed as reusable workflow graphs without relying on frameworks such as LangGraph or LangChain.',
    features: [
      'Configurable execution engine supporting node dependencies and context propagation',
      'Parallel execution with retries, failure handling, and workflow state persistence',
      'Agent networks implemented for ERPNext business process automation and AI content generation',
      'Tested across multi-step autonomous workflows'
    ],
    tech: ['NestJS', 'MongoDB', 'MCP', 'Vertex AI'],
    category: 'Agentic AI',
    date: 'Jun 2026 - Aug 2026',
    featured: true,
    demoUrl: 'https://lnkd.in/p/g24BYse3',
    demoPlatform: 'linkedin',
  },
  {
    id: 'agentx',
    title: 'AgentX - Hierarchical AI Agent Runtime',
    description: 'A modular hierarchical AI agent runtime where a principal agent plans tasks and delegates work to isolated sub-agents.',
    features: [
      'Parallel DAG-based task orchestrator with sandboxed sessions and scoped tool permissions',
      'Configurable iteration budgets for controlled autonomous execution',
      'Pluggable skill/tool architecture with multi-provider LLM support (Gemini, OpenAI, Ollama)',
      'Session and long-term memory, scheduling, and real-time WebSocket tracing'
    ],
    tech: ['Node.js', 'TypeScript', 'LLMs', 'Vertex AI'],
    category: 'Agentic AI',
    date: 'May 2026',
    featured: true,
    demoUrl: 'https://youtu.be/W7fxuxpZzaM',
    demoPlatform: 'youtube',
  },
  {
    id: 1,
    title: 'End to End Encrypted Chat Web Application',
    description: 'A secure real-time chat application with end-to-end encryption, supporting both private and group conversations.',
    features: [
      'Node.js and Express.js backend for scalable server-side functionality',
      'Socket.io for real-time communication between users',
      'Room-based architecture for private and group chats',
      'End-to-end encryption using Crypto-js library',
      'Secure message transmission ensuring data privacy and integrity'
    ],
    tech: ['Node.js', 'Express.js', 'Socket.io', 'React', 'Crypto-js'],
    category: 'Full-Stack',
    date: 'Jun 2024'
  },
  {
    id: 2,
    title: 'Out of Distribution Generalization [FYP]',
    description: 'A machine learning project addressing the out-of-distribution problem in classification models by extracting invariant features using image captions.',
    features: [
      'Handles covariate shift and semantic shift in classification models',
      'Teacher model trained for extracting invariant features using latent feature alignment',
      'Cross-attention mechanism for feature extraction',
      'Knowledge distillation to train image encoder for classification',
      'PyTorch implementation'
    ],
    tech: ['PyTorch', 'Knowledge Distillation', 'Cross Attention', 'Machine Learning'],
    category: 'Machine Learning',
    date: 'Apr 2024'
  },
  {
    id: 3,
    title: 'Single Cycle Processor Design [Group Project]',
    description: 'A single-cycle RISC-V 32-bit CPU with direct mapping cache and victim cache, capable of handling multiple instruction types.',
    features: [
      'Single-cycle RISC-V 32-bit CPU design',
      'Direct mapping cache with victim cache',
      'Supports R-type, I-type, S-type, SB-type, U-type, and UJ-type instructions',
      'Synthesizable System Verilog code',
      'Tested using Modelsim in Quartus FPGA design software'
    ],
    tech: ['System Verilog', 'RISC-V', 'Digital Electronics', 'FPGA'],
    category: 'Hardware Design',
    date: 'Feb 2023'
  }
]
