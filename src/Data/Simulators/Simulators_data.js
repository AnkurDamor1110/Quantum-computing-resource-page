// data.js
const simulatorsByLanguage = [
    {
      language: 'C/C++',
      simulators: [
        {
          name: 'Intel Quantum Simulator',
          url: 'https://github.com/iqusoft/intel-qs',
        },
        {
          name: 'QuEST',
          url: 'https://quest.qtechtheory.org/',
        },
        {
          name: 'Scaffold/ScaffCC',
          url: 'https://www.cs.princeton.edu/research/techreps/TR-934-12',
        },
        {
          name: 'Qrack',
          url: 'https://vm6502q.readthedocs.io/',
        },
        {
          name: 'staq',
          url: 'https://github.com/softwareqinc/staq',
        },
        {
          name: 'QX Simulator',
          url: 'http://quantum-studio.net/]',
        },
        {
          name: 'Quantum++',
          url: 'https://github.com/softwareQinc/qpp',
        },
        {
          name: 'QMDD',
          url: 'http://www.informatik.uni-bremen.de/agra/eng/qmdd.php',
        },
        {
          name: 'CHP',
          url: 'http://www.scottaaronson.com/chp/',
        },
        {
          name: 'Eqcs',
          url: 'http://home.snafu.de/pbelkner/eqcs/',
        },
        {
          name: 'LanQ',
          url: 'http://lanq.sourceforge.net/',
        },
        {
          name: 'libquantum (C)',
          url: 'http://www.enyo.de/libquantum/',
        },
        {
          name: 'libquantum (C++)',
          url: 'http://w3-phystheo.ups-tlse.fr/~bettelli/',
        },
        {
          name: 'Q++',
          url: 'http://sourceforge.net/projects/qplusplus/',
        },
        {
          name: 'QCLib',
          url: 'http://www.quantware.ups-tlse.fr/QWLIB/',
        },
        {
          name: 'QCSim',
          url: 'http://hissa.nist.gov/~black/Quantum/qcsim.html',
        },
        {
          name: ' QDD',
          url: 'http://thegreves.com/david/QDD/qdd.html',
        },
        {
          name: 'QGAME',
          url: 'http://hampshire.edu/lspector/qgame.html',
        },
        {
          name: 'qsims',
          url: 'http://qsims.sourceforge.net/',
        },
        {
          name: 'QTM simulator',
          url: 'http://web.archive.org/web/20050923134721/http://www.lri.fr/~durr/Attic/qtm/',
        },
        {
          name: 'Quantum Computer Language',
          url: 'http://tph.tuwien.ac.at/~oemer/qcl.html',
        },
        {
          name: 'Quantum Computer Simulator',
          url: 'http://www-imai.is.s.u-tokyo.ac.jp/~tokunaga/QCS/simulator.html',
        },
        {
          name: 'Quantum Construct (qC++)',
          url: 'http://sourceforge.net/projects/qcplusplus/',
        },
        {
          name: 'Quantum Information Matrix Toolkit',
          url: 'http://www.physics.uq.edu.au/people/dawson/matrix/doc/',
        },
        {
          name: 'Quantum Network Computing',
          url: 'http://sourceforge.net/projects/qnc/',
        },
        {
          name: 'Quantum Computer Simulator',
          url: 'http://www-imai.is.s.u-tokyo.ac.jp/~tokunaga/QCS/simulator.html',
        },
        {
          name: 'Quantum Construct (qC++)',
          url: 'http://sourceforge.net/projects/qcplusplus/',
        },
        {
          name: 'Quantum Information Matrix Toolkit',
          url: 'http://www.physics.uq.edu.au/people/dawson/matrix/doc/',
        },
        {
          name: 'Quantum Network Computing',
          url: 'http://sourceforge.net/projects/qnc/',
        },
        {
          name: 'QuBit',
          url: 'http://www.bluedust.com/qubit/',
        },
        {
          name: 'Qubiter',
          url: 'http://www.ar-tiste.com/qubiter.html',
        },
        {
          name: 'QuCoSi',
          url: 'http://qucosi.sourceforge.net/',
        },
        {
          name: 'QuIDDPro',
          url: 'http://vlsicad.eecs.umich.edu/Quantum/qp/',
        },
        {
          name: 'QWalk',
          url: 'http://www.cos.ufrj.br/~franklin/qwalk/',
        },
        {
          name: 'Shor\'s Algorithm Simulation',
          url: 'http://alumni.imsa.edu/~matth/quant/',
        },
        {
          name: 'SpinDec',
          url: 'http://bitbucket.org/sbalian/spindec',
        },
        {
          name: 'sqct - Single qubit circuit toolkit',
          url: 'http://code.google.com/p/sqct/ and http://arxiv.org/abs/1206.5236',
        },
        {
          name: 'MQT-DDSIM',
          url: 'https://www.cda.cit.tum.de/research/quantum_simulation/',
        },
      ],
    },
    {
      language: 'CaML',
      simulators: [
        {
          name: 'Q-gol',
          url: 'http://www.ifost.org.au/~gregb/q-gol/',
        },

      ],
    },
    {
      language: 'OCal',
      simulators: [
        {
          name: 'QOCS',
          url: 'https://github.com/dillanchang/QOCS',
        },
      
      ],
    },
    {
      language: 'Coq',
      simulators: [
        {
          name: 'QWIRE', 
          url: 'https://github.com/inQWIRE/QWIRE',
        },
      ],
    },
    {
      language: 'F#',
      simulators: [
        {
          name: 'LIQUiD', 
          url: 'http://research.microsoft.com/en-us/projects/liquid/',
        },
      ],
    },
    {
      language: 'GUI based',
      simulators: [
        {
          name: 'Quantum Programming Studio', 
          url: 'https://quantum-circuit.com',
        },
        {
          name: 'Qubit Workbench', 
          url: 'https://elyah.io/product',
        },
        {
          name: 'Bloch Sphere Simulator of Quantum-Mechanical gates and Spintronics', 
          url: 'http://www.ece.uc.edu/~mcahay/blochsphere/',
        },
        {
          name: 'DEKOMPMAT', 
          url: 'http://www.quniverse.sk/people/sedlak/',
        },
        {
          name: 'Linear Al', 
          url: 'http://linearal.sourceforge.net/',
        },
        {
          name: 'Optical Simulator', 
          url: 'http://strc.herts.ac.uk/tp/info/qucomp/',
        },
        {
          name: 'QCAD', 
          url: 'http://qcad.sourceforge.jp/',
        },
        {
          name: 'QSim', 
          url: 'http://www.bpc.lu.se/QSim/',
        },
        {
          name: 'Qdns', 
          url: 'http://www.hit.bme.hu/people/imre/pages/QDNS/',
        },
        {
          name: 'Q-Kit', 
          url: 'https://sites.google.com/view/quantum-kit/home',
        },
        {
          name: '', 
          url: '',
        },
        
      ],
    },
    {
      language: 'Java',
      simulators: [
        {
          name: 'Bloch Sphere Simulator of Quantum-Mechanical gates and Spintronics', 
          url: 'http://www.ece.uc.edu/~mcahay/blochsphere/',
        },
        {
          name: 'jaQuzzi', 
          url: 'http://www.eng.buffalo.edu/~phygons/jaQuzzi/',
        },
        {
          name: 'jQuantum - Quantum Computer Simulator', 
          url: 'http://jquantum.sourceforge.net/',
        },
        {
          name: 'qsim', 
          url: 'http://www.dennisweyland.de/qsim/',
        },
        {
          name: 'jSQ- Java Quantique Simulator', 
          url: 'http://sourceforge.net/projects/simu-quantique/',
        },
        {
          name: 'LibQuantumJava (LQJ)', 
          url: 'https://github.com/gbanegas/libQuantumJava',
        },
        {
          name: 'QuanSuite', 
          url: 'http://www.ar-tiste.com/QuanSuite.html',
        },
        {
          name: 'Quantum Algorithm Designer', 
          url: 'http://www-users.cs.york.ac.uk/~sok/QAD/',
        },
        {
          name: 'Quantum Search Applet', 
          url: 'http://www.cit.gu.edu.au/~s55086/qucomp/qucompApplet.html',
        },
        {
          name: 'QuaSi 1 / 2', 
          url: 'http://iaks-www.ira.uka.de/QIV/QuaSi/aboutquasi.html',
        },
        {
          name: 'qMIPS101', 
          url: 'http://institucional.us.es/qmipsmaster/',
        },
        {
          name: 'QuSAnn', 
          url: 'http://www.ar-tiste.com/qusann.html',
        },
        {
          name: 'Squankum', 
          url: 'http://jeffwass.github.com/Squankum/',
        },
        {
          name: 'Strange', 
          url: 'https://github.com/qcjava/strange',
        },
        {
          name: 'Virtual quantum mechanics', 
          url: 'http://www.pha.jhu.edu/~javalab/qubit/qubit.html',
        },
        {
          name: 'Zeno', 
          url: 'http://dsc.ufcg.edu.br/~iquanta/zeno/index_en.html',
        },
      ],
    },
    {
      language: 'Javascript',
      simulators: [
        {
          name: 'Quantum Computer Simulator', 
          url: 'https://backupbrain.github.io/quantum-compiler-simulator/',
        },
        {
          name: 'Quantum circuit simulator', 
          url: 'https://www.npmjs.com/package/quantum-circuit',
        },
        {
          name: 'Javascript Quantum Information Simulator', 
          url: 'https://github.com/garrison/jsqis',
        },
      
      ],
    },
    {
      language: 'Julia',
      simulators: [
        {
          name: 'QSWalk.jl', 
          url: 'https://github.com/QuantumWalks/QSWalk.jl',
        },
        {
          name: 'QuantumOptics.jl', 
          url: 'https://qojulia.org/',
        },
        {
          name: 'QuantumWalk', 
          url: 'https://github.com/QuantumWalks/QuantumWalk.jl',
        },
        {
          name: 'Yao.jl', 
          url: 'https://github.com/QuantumBFS/Yao.jl',
        },
      ],
    },
    {
      language: 'Maple',
      simulators: [
        {
          name: 'FEYNMAN', 
          url: 'http://cpc.cs.qub.ac.uk/summaries/ADWE',
        },
        {
          name: 'OpenQUACS', 
          url: 'http://web.archive.org/web/20060116174553/http://userpages.umbc.edu/~cmccub1/quacs/quacs.html',
        },
        {
          name: 'Quantavo', 
          url: 'http://www3.imperial.ac.uk/quantuminformation/research/downloads',
        },
      ],
    },
    {
      language: 'Mathematica',
      simulators: [
        {
          name: 'QDENSITY', 
          url: 'http://www.pitt.edu/~tabakin/QDENSITY/',
        },
        {
          name: 'qmatrix', 
          url: 'http://library.wolfram.com/infocenter/MathSource/1893/',
        },
        {
          name: 'Quantum', 
          url: 'http://homepage.cem.itesm.mx/lgomez/quantum/index.htm',
        },
        {
          name: 'QuantumUtils', 
          url: 'https://github.com/QuantumUtils/quantum-utils-mathematica',
        },
        {
          name: 'Quantum Information Programs in Mathematica', 
          url: 'http://quantum.phys.cmu.edu/QPM/',
        },
        {
          name: 'Quantum Turing Machine Simulator', 
          url: 'http://library.wolfram.com/infocenter/Articles/3893/',
        },
        {
          name: 'QuCalc', 
          url: 'http://crypto.cs.mcgill.ca/QuCalc/',
        },
        {
          name: 'QI', 
          url: 'https://github.com/jmiszczak/qi',
        },
        {
          name: 'TRQS', 
          url: 'https://github.com/jmiszczak/trqs',
        },
        {
          name: 'Wolfram QuantumFramework', 
          url: 'https://resources.wolframcloud.com/PacletRepository/resources/Wolfram/QuantumFramework/',
        },
      ],
    },
    {
      language: 'MATLAB/Octave',
      simulators: [
        {
          name: 'CS 596 Quantum Computing', 
          url: 'http://www.sci.sdsu.edu/Faculty/Don.Short/QuantumC/cs662.htm',
        },
        {
          name: 'drqubit', 
          url: 'http://www.dr-qubit.org/matlab.php',
        },
        {
          name: 'M-fun for QC Progs', 
          url: 'http://www.ar-tiste.com/m-fun/m-fun-index.html',
        },
        {
          name: 'QC simulator', 
          url: 'http://www-m3.ma.tum.de/twiki/bin/view/Software/QCWebHome',
        },
        {
          name: 'QCTOOLS', 
          url: 'http://physics.berkeley.edu/research/haeffner/teaching/exp-quant-info/exp-quant-info',
        },
        {
          name: 'QLib', 
          url: 'http://www.tau.ac.il/~quantum/qlib/qlib.html',
        },
        {
          name: 'qotoolbox', 
          url: 'http://www.qo.phy.auckland.ac.nz/qotoolbox.html',
        },
        {
          name: 'Quack!', 
          url: 'http://www.physics.uq.edu.au/people/rohde/blog/?page_id=20',
        },
        {
          name: 'Quantum Computing Functions for Matlab (QFC)', 
          url: 'http://www.robots.ox.ac.uk/~charles/',
        },
        {
          name: 'Quantum Octave', 
          url: 'http://quantum-octave.sf.net/',
        },
        {
          name: 'Qubit4matlab', 
          url: 'http://bird.szfki.kfki.hu/~toth/qubit4matlab.html',
        },
       
      ],
    },
    {
      language: 'Maxima',
      simulators: [
        {
          name: 'Qinf', 
          url: 'http://www.johnlapeyre.com/qinf/index.html',
        },
      ],
    },
    {
      language: '.NET',
      simulators: [
        {
          name: 'QuIDE', 
          url: 'http://www.quide.eu/',
        },
        {
          name: 'Cove', 
          url: 'https://cove.purkeypile.com/trac/',
        },
        {
          name: 'Quantum.NET', 
          url: 'https://github.com/phbaudin/quantum-computing',
        },
        {
          name: 'Quantum Information Suite', 
          url: 'http://dotqcf.sourceforge.net/',
        },
      ],
    },
    {
      language: 'Online Services',
      simulators: [
        {
          name: 'Factor 15 Circuit', 
          url: 'http://web.archive.org/web/20060203095655/http://www.isi.edu/acal/quantum/quantum_intro.html',
        },
        {
          name: 'Fraunhofer Quantum Computing Simulator', 
          url: 'http://www.qc.fraunhofer.de/',
        },
        {
          name: 'GQC', 
          url: 'http://www.physics.uq.edu.au/gqc/',
        },
        {
          name: 'Quantum eXpress', 
          url: 'https://www.research.ge.com/quantum/',
        },
        {
          name: 'Quantum Walks', 
          url: 'http://www.quantumplayground.net/',
        },
        {
          name: 'Quantum Computing Playground', 
          url: 'http://www.quantumplayground.net/',
        },
        {
          name: 'Quantum Computer Simulator', 
          url: 'http://www.wcl.ece.upatras.gr/ai/resources/demo-quantum-simulation',
        },
        {
          name: 'Quantum Circuit Simulator (Davy Wybiral)', 
          url: 'http://www.davyw.com/quantum/',
        },
        {
          name: 'Qubit Workbench', 
          url: 'https://elyah.io/product',
        },
        {
          name: 'Quirk', 
          url: 'http://algorithmicassertions.com/quirk',
        },
        {
          name: 'QRBGS', 
          url: 'http://random.irb.hr/',
        },
        {
          name: 'VirtualQC', 
          url: 'http://demo.riverlane.io/',
        },

      ],
    },
    {
      language: 'Perl/PHP',
      simulators: [
        {
          name: 'Quantum::Entanglement', 
          url: 'http://search.cpan.org/~ajgough/Quantum-Entanglement-0.32/',
        },
        {
          name: 'Quantum::Entanglement', 
          url: 'http://grobner.it.nuigalway.ie/ent/start.php',
        },
        {
          name: 'Quantum::Superpositions', 
          url: 'http://search.cpan.org/~lembark/Quantum-Superpositions-2.02/',
        },
      ],
    },
    {
      language: 'Python',
      simulators: [
        {
          name: 'Cirq', 
          url: 'https://github.com/quantumlib/Cirq',
        },
        {
          name: 'Forest', 
          url: 'http://forest.rigetti.com/',
        },
        {
          name: 'ProjectQ', 
          url: 'https://projectq.ch/',
        },
        {
          name: 'PyQu', 
          url: 'http://code.google.com/p/pyqu',
        },
        {
          name: 'QCircuits', 
          url: 'http://www.awebb.info/qcircuits/index.html',
        },
        {
          name: 'QISKit', 
          url: 'https://qiskit.org/',
        },
        {
          name: 'qitensor', 
          url: 'http://www.stahlke.org/dan/qitensor',
        },
        {
          name: 'QuaEC', 
          url: 'http://www.cgranade.com/python-quaec/',
        },
        {
          name: 'Quantum Fog', 
          url: 'https://github.com/artiste-qb-net/quantum-fog',
        },
        {
          name: 'Qubiter', 
          url: 'https://github.com/artiste-qb-net/qubiter',
        },
        {
          name: 'QuTiP', 
          url: 'http://qutip.org/',
        },
        {
          name: 'sparse_pauli', 
          url: 'https://github.com/bcriger/sparse_pauli',
        },
        {
          name: 'toqito', 
          url: 'https://vprusso.github.io/toqito/',
        },
        {
          name: 'SymQC', 
          url: 'https://gitee.com/quingo/SymQC',
        },
        {
          name: 'Quantum Emulation Engine', 
          url: 'https://github.com/comp-phys-marc/distributed-emulator',
        },
      ],
    },
    {
      language: 'Q#',
      simulators: [
        {
          name: 'Microsoft Quantum Development Kit', 
          url: 'https://docs.microsoft.com/en-us/quantum/',
        },
      ],
    },
    {
      language: 'QASM',
      simulators: [
        {
          name: 'OpenQASM', 
          url: 'https://github.com/Qiskit/openqasm',
        },
        {
          name: 'QMASM', 
          url: 'https://github.com/lanl/qmasm',
        },
        {
          name: 'Blackbird', 
          url: 'https://github.com/XanaduAI/blackbird',
        },
        {
          name: 'qasm (rust crate)', 
          url: 'https://crates.io/crates/qasm',
        },
        {
          name: 'QASM-TS', 
          url: 'https://github.com/comp-phys-marc/qasm-ts',
        },
        {
          name: 'QMASM-TS', 
          url: 'https://github.com/comp-phys-marc/qmasm-ts',
        },
        {
          name: 'BLACKBIRD-TS', 
          url: 'https://github.com/comp-phys-marc/blackbird-ts',
        },
        
      ],
    },
    {
      language: 'Rust',
      simulators: [
        {
          name: 'QCGPU', 
          url: 'https://qcgpu.github.io/',
        },
       
        
      ],
    },
    {
      language: 'Scala',
      simulators: [
        {
          name: 'VQS - Visual Quantum Simulator', 
          url: 'https://github.com/gmenier/VisualQuantumSimulator/wiki/Introduction',
        },
       
        
      ],
    },
     {
      language: 'Scheme/Haskell/LISP/ML',
      simulators: [
        {
          name: 'Quacee', 
          url: 'https://github.com/kat31416/quacee',
        },
        {
          name: 'CS 20c Project', 
          url: 'http://web.archive.org/web/20011207175140/www.cs.caltech.edu/~thoth/code.html',
        },
        {
          name: 'Haskell Simulator of Quantum Computer', 
          url: 'http://web.archive.org/web/20010803034527/http://www.numeric-quest.com/haskell/QuantumComputer.html',
        },
        {
          name: 'QIO', 
          url: 'http://hackage.haskell.org/package/QIO',
        },
        {
          name: 'qlambda', 
          url: 'http://www.het.brown.edu/people/andre/qlambda/',
        },
        {
          name: 'QML', 
          url: 'http://sneezy.cs.nott.ac.uk/qml/',
        },
        {
          name: 'Quipper', 
          url: 'http://www.mathstat.dal.ca/~selinger/quipper/',
        },
        {
          name: 'Simulating Quantum Circuits on a parallel machine', 
          url: 'http://www.themilkyway.com/quantum/',
        },
        {
          name: 'qchas', 
          url: 'https://hackage.haskell.org/package/qchas',
        },
       
       
        
      ],
    }
  ];
  
  export default simulatorsByLanguage;
  