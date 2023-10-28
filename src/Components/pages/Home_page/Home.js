import React from 'react';
import './home.css';
const Home = () => {
  return (
    <div className="company">
    <div className="card">
      <div className="card-header">
        <h3>Quantum Computing</h3>
      </div>
      <div className="card-body">
        <p>
          Quantum computing is an exciting and revolutionary field at the intersection of computer science and quantum physics. Unlike classical computers, which use bits as the fundamental unit of information (either 0 or 1), quantum computers use quantum bits, or qubits, which can exist in multiple states simultaneously. This unique property, known as superposition, enables quantum computers to perform complex calculations exponentially faster than traditional computers.
        </p>
        <p>
          In addition to superposition, quantum computers leverage another fundamental principle called entanglement. This phenomenon allows qubits to be interconnected in such a way that the state of one qubit is instantly correlated with the state of another, regardless of the distance between them. This property provides quantum computers with a remarkable advantage in solving problems involving massive datasets and complex simulations.
        </p>
        <p>
          Quantum computing has the potential to revolutionize various industries, from cryptography to drug discovery, by addressing problems that were once considered intractable. It promises to unlock new frontiers in fields such as optimization, machine learning, and materials science, offering solutions that were previously beyond the reach of classical computing.
        </p>
        
      </div>
      
    </div>
    <div className="additional-section">
        <h4>Explore Quantum Computing Resources</h4>
        <p>
          On our resources page, you'll find a curated collection of articles, videos, tutorials, and tools to help you explore the fascinating world of quantum computing. Whether you're a beginner looking to grasp the basics or a seasoned researcher seeking the latest breakthroughs, our resources aim to cater to your interests and knowledge level. Dive into this transformative field and discover the limitless possibilities of quantum computing.
        </p>
      </div>
    </div>
  );
};

export default Home;
