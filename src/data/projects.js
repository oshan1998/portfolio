export const projects = [
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
