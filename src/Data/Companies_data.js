// data.js
const companies = [
    {
      company_type: 'Quantum Computing Giants',
      company: [
        {
          name: 'IBM',
          details: 'IBM, a tech giant since 1911, pioneers quantum computing through the IBM Quantum Lab. Their online platform, including the IBM Quantum Composer, offers public and premium access to quantum computing services, driving innovation in the field.',
          url: 'https://www.ibm.com/quantum',
        },
        {
          name: 'Google Quantum AI',
          details: 'Google Quantum AI, with partners NASA and Universities Space Research Association, leads quantum computing. Their Quantum Artificial Intelligence Lab achieved quantum supremacy in 2019. Led by Hartmut Neven, they focus on advancing quantum capabilities and developing tools for algorithms and machine learning.',
          url: 'https://quantumai.google/',
        },
        {
          name: 'Microsoft',
          details: 'Microsoft, a major player in quantum computing, offers the worlds first full-stack cloud quantum computing ecosystem through Azure. They developed Q#, a quantum programming language, as part of the Quantum Development Kit in 2017. Microsofts quantum research involves teams like QuArC in Redmond and Station Q in Santa Barbara, although there was controversy when a high-profile paper on practical quantum computing was retracted in 2018.',
          url: 'https://azure.microsoft.com/en-gb/solutions/quantum-computing/',
        },
        {
          name: 'AWS BRAKET',
          details: 'Amazon Braket, led by Simone Severini, offers a managed quantum computing service to accelerate scientific research and software development. Launched in 2020, it provides cloud access to various quantum computers, including D-Wave, IonQ, Rigetti Computing, and Xanadu. Braket simplifies quantum algorithm design, offering managed Jupyter notebooks, pre-built algorithms, and diverse simulation tools, enabling innovation while removing barriers to quantum technology exploration.',
          url: 'https://aws.amazon.com/braket/',
        },
        {
          name: 'ALIBABA GROUP',
          details: 'Alibaba Group, in collaboration with the Chinese Academy of Science, operates the Alibaba Quantum Computing Laboratory in Shanghai. Led by Yaoyun Shi, the lab focuses on open-source quantum projects and houses the Alibaba Cloud Quantum Development Platform, a simulator-driven tool for quantum algorithms and computers.',
          url: 'https://damo.alibaba.com/labs/quantum',
        },
        {
          name: 'ATOS QUANTUM',
          details: 'Quantum computing, an emerging technology, utilizes quantum mechanics to solve highly complex problems unattainable for regular computers. It significantly enhances computing power, enabling rapid simulations of intricate systems that would take supercomputers millennia. This revolution impacts fields like molecular dynamics, pharmaceuticals, finance, and cybersecurity, unlocking vast digital potential.',
          url: 'https://atos.net/en/solutions/quantum-learning-machine',
        },
        {
          name: 'BAIDU',
          details: 'Baidu, a Chinese company, has established the Baidu Quantum Computing Institute, led by Professor Duan Runyao, focusing on quantum computing software and information technology applications. Their goal is to integrate quantum technology into areas such as artificial intelligence and machine learning.',
          url: 'https://quantum.baidu.com/',
        },
        {
          name: 'INTEL',
          details: 'Intel, founded in 1968, is a key player in the semiconductor industry. Led by Director of Quantum Hardware James Clarke, Intel Labs focuses on developing hot silicon spin-qubits, smaller computing devices operating at higher temperatures. They utilize Horse Ridge II cryogenic quantum control chip and cryoprober for efficient testing, aiming to accelerate commercialization. Intel is involved in research on both superconducting and spin qubits, with a focus on spin qubits, notably in collaboration with Qutech and in-house efforts.',
          url: 'https://www.intel.com/content/www/us/en/research/quantum-computing.html',
        },
      ],
    },
    {
      company_type: 'Hardware-Focused Quantum Computing',
      company: [
        {
          name: 'ALICE & BOB',
          details: 'Alice & Bob, a French quantum computing company, focuses on creating error-corrected, fault-tolerant quantum computers. Their research centers on self-correcting superconducting quantum bits, including cat qubits. In a significant breakthrough, they solved a major error correction challenge for qubits, extending resilience to bit-flip errors from milliseconds to 2 minutes, marking a notable advancement in quantum computing technology.',
          url: 'https://alice-bob.com/',
        },
        {
          name: 'ALPINE QUANTUM TECHNOLOGIES',
          details: 'Alpine Quantum Technologies (AQT), based in Innsbruck, Austria, specializes in trapped ion quantum devices and is dedicated to constructing a complete quantum computer using this technology. Their focus extends to cutting-edge applications like factoring and simulations in fields such as high-energy physics and quantum chemistry. AQT',
          url: 'https://www.aqt.eu/',
        },
        {
          name: 'ANYON SYSTEMS',
          details: 'Anyon Systems, headquartered in Montreal, Canada, pioneers in building on-premise quantum computers using superconducting qubits. Their integrated solutions cover cryogenics, quantum electronics, and software stacks. Established in 2014, they recently sold their second quantum computer to a high-performance computing center, marking a significant advancement in gate-based quantum computing technology.',
          url: 'https://anyonsys.com/',
        },
        {
          name: 'ATLANTIC QUANTUM',
          details: '',
          url: 'https://www.atlantic-quantum.com/',
        },
        {
          name: 'ATOM COMPUTING',
          details: '',
          url: 'https://atom-computing.com/',
        },
        {
          name: 'BLEXIMO',
          details: '',
          url: 'https://bleximo.com/',
        },
        {
          name: 'C12 QUANTUM ELECTRONICS',
          details: '',
          url: 'https://www.c12qe.com/',
        },
        {
          name: 'COLDQUANTA',
          details: '',
          url: 'https://coldquanta.com/',
        },
        {
          name: 'D-WAVE',
          details: '',
          url: 'https://www.dwavesys.com/',
        },
        {
          name: 'DIRAQ',
          details: '',
          url: 'https://diraq.com/',
        },
        {
          name: 'EEROQ',
          details: '',
          url: 'https://eeroq.com/',
        },
        {
          name: 'Qilimanjaro’s',
          details: '',
          url: 'https://www.qilimanjaro.tech/',
        },
        {
          name: 'QuEra Computing',
          details: '',
          url: 'https://www.quera.com/',
        },
        {
          name: 'Quandela',
          details: '',
          url: 'https://www.quandela.com/',
        },
        {
          name: 'Quantum Circuits (QCI)',
          details: '',
          url: 'https://quantumcircuits.com/',
        },
        {
          name: 'Quantum Source',
          details: '',
          url: 'https://www.qs-labs.com/',
        },
        {
          name: 'Rigetti Computing',
          details: '',
          url: 'https://www.rigetti.com/',
        },
        {
          name: 'TuringQ',
          details: '',
          url: 'https://www.turingq.com/',
        },
        {
          name: 'Xanadu',
          details: '',
          url: 'https://www.xanadu.ai/',
        },
        {
          name: 'IQM',
          details: '',
          url: 'https://www.meetiqm.com/',
        },
        {
          name: 'IONQ',
          details: '',
          url: 'https://ionq.com/',
        },
        {
          name: 'NORD QUANTIQUE',
          details: '',
          url: 'https://www.nordquantique.ca/',
        },
        {
          name: 'ORCA Computing',
          details: '',
          url: 'https://www.orcacomputing.com/',
        },
        {
          name: 'Origin Quantum',
          details: '',
          url: 'https://qcloud.originqc.com.cn/',
        },
        {
          name: 'Oxford Ionics',
          details: '',
          url: 'https://www.oxionics.com/',
        },
        {
          name: 'Oxford Quantum Circuits’ (OQC)',
          details: '',
          url: 'https://oxfordquantumcircuits.com/',
        },
        {
          name: 'PASQAL',
          details: '',
          url: 'https://pasqal.io/',
        },
        {
          name: 'Photonic Inc',
          details: '',
          url: 'https://photonic.com/',
        },
        {
          name: 'planqc',
          details: '',
          url: 'https://www.planqc.eu/',
        },
        {
          name: 'PsiQuantum',
          details: '',
          url: 'https://psiquantum.com/',
        },
        {
          name: 'QuantWare',
          details: '',
          url: 'https://www.quantware.eu/',
        },
        {
          name: 'Quantinuum',
          details: '',
          url: 'https://www.quantinuum.com/',
        },
        {
          name: 'Quantum Brilliance (QB)',
          details: '',
          url: 'https://quantumbrilliance.com/',
        },
        {
          name: 'Quantum Motion',
          details: '',
          url: 'https://quantummotion.tech/',
        },
        {
          name: 'SEEQC',
          details: '',
          url: 'https://seeqc.com/',
        },
        {
          name: 'Silicon Quantum Computing (SQC)',
          details: '',
          url: 'https://sqc.com.au/',
        },
        {
          name: 'Universal Quantum',
          details: '',
          url: 'https://universalquantum.com/',
        },
      ],
    },
    {
      company_type: 'Software-Focused Quantum Computing',
      company: [
        {
          name: '1QBit',
          details: '',
          url: 'https://1qbit.com/',
        },
        {
          name: 'Agnostiq',
          details: '',
          url: 'https://agnostiq.ai/',
        },
        {
          name: 'A Star Quantum',
          details: '',
          url: 'https://a-star-quantum.jp/index_en.html',
        },
        {
          name: 'BEIT',
          details: '',
          url: 'https://beit.tech/',
        },
        {
          name: 'Classiq',
          details: '',
          url: 'https://www.classiq.io/',
        },
        {
          name: 'Entropica Labs',
          details: '',
          url: 'https://www.entropicalabs.com/',
        },
        {
          name: 'HQS Quantum Simulations',
          details: '',
          url: 'https://quantumsimulations.de/',
        },
        {
          name: 'Kuano',
          details: '',
          url: 'https://www.kuano.ai/',
        },
        {
          name: 'Multiverse Computing',
          details: '',
          url: 'https://multiversecomputing.com/',
        },
        {
          name: 'ProteinQure',
          details: '',
          url: 'https://www.proteinqure.com/',
        },
        {
          name: 'Q-CTRL',
          details: '',
          url: 'https://q-ctrl.com/',
        },
        {
          name: 'Quantum Benchmark',
          details: '',
          url: 'https://quantumbenchmark.com/',
        },
        {
          name: 'Quantum Generative Materials’ (GenMat)',
          details: '',
          url: 'https://www.linkedin.com/company/quantum-generative-materials-genmat/?trk=ppro_cprof',
        },
        {
          name: 'Qu & Co',
          details: '',
          url: 'https://quandco.com/',
        },
        {
          name: ' Qubit Pharmaceuticals',
          details: '',
          url: 'https://qubit-pharmaceuticals.com/',
        },
        {
          name: 'Riverlane',
          details: '',
          url: 'https://www.riverlane.com/',
        },
        {
          name: 'Strangeworks',
          details: '',
          url: 'https://strangeworks.com/',
        },
        {
          name: 'ZAPATA COMPUTING',
          details: '',
          url: 'https://zapata.ai/',
        },
        {
          name: 'Aliro Quantum',
          details: '',
          url: 'https://www.aliroquantum.com/',
        },
        {
          name: 'Algorithmiq',
          details: '',
          url: 'https://algorithmiq.fi/',
        },
        {
          name: 'Arqit',
          details: '',
          url: 'https://arqit.uk/',
        },
        {
          name: 'BosonQ Psi (BQP)',
          details: '',
          url: 'https://www.bosonqpsi.com/',
        },
        {
          name: 'Dirac',
          details: '',
          url: 'https://diracqc.com/',
        },
        {
          name: 'Horizon Quantum Computing',
          details: '',
          url: 'https://www.horizonquantum.com/',
        },
        {
          name: 'JiJ',
          details: '',
          url: 'https://www.j-ij.com/',
        },
        {
          name: 'Menten AI',
          details: '',
          url: 'https://www.menten.ai/',
        },
        {
          name: 'PolarisQb',
          details: '',
          url: 'https://polarisqb.com/',
        },
        {
          name: 'QC Ware',
          details: '',
          url: 'https://www.qcware.com/',
        },
        {
          name: ' Quantastica',
          details: '',
          url: 'https://quantastica.com/',
        },
        {
          name: 'Quantum Computing Inc (QCI)',
          details: '',
          url: 'https://www.quantumcomputinginc.com/',
        },
        {
          name: 'Quantum Machines (QM)',
          details: '',
          url: 'https://www.quantum-machines.co/platform/?gclid=Cj0KCQjw08aYBhDlARIsAA_gb0elObaYZ0DDTGJa8uv1BOZwHhCEWTVMj5rOEJ8C6zPfljU9isKdn5oaAnnzEALw_wcB',
        },
        {
          name: 'QuantrolOx',
          details: '',
          url: 'https://quantrolox.com/',
        },
        {
          name: 'Qunasys',
          details: '',
          url: 'https://qunasys.com/en/',
        },
        {
          name: 'SandboxAQ',
          details: '',
          url: 'https://www.sandboxaq.com/',
        },
        {
          name: 'Terra Quantum',
          details: '',
          url: 'https://terraquantum.swiss/',
        },
      ],
    },
   
  ];
  
  export default companies;
  