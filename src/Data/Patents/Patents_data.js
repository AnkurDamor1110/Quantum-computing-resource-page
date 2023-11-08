const patents = [
  {
      Title: 'Method and apparatus for quantum information processing',
      Investor: 'Neil Gershenfeld,Isaac Chuang',
      URL: 'https://patents.google.com/patent/US5917322A/en'
    },
    {
      Title: 'Quantum computer',
      Investor: 'Paul Cain,Andrew Ferguson,David Williams',
      URL: 'https://patents.google.com/patent/EP1286303A1/en'
    },
    {
      Title: 'Error corrected quantum computer',
      Investor: 'Lloyd Hollenberg,Ashley Stephens,Andrew Greentree,Austin Fowler,Cameron Wellard',
      URL: 'https://patents.google.com/patent/US20080185576'
    },
    {
      Title: 'Methods and systems for quantum computing',
      Investor: 'Majid Dadashikelayeh,Arman ZARIBAFIYAN,Sahar Karimi,Pooya RONAGH',
      URL: 'https://patents.google.com/patent/US10044638B2/en'
    },
    {
      Title: 'Universal quantum gate',
      Investor: 'Doyeol Ahn',
      URL: 'https://patents.google.com/patent/US7655850'
    },
    {
      Title: 'Error correction in quantum computing system',
      Investor: 'Aaron A. Pesetski,James E. Baumgardner',
      URL: 'https://patents.google.com/patent/US8510618'
    },
    {
      Title: 'Quantum cryptography',
      Investor: 'Adrian Kent,William Munro,Timothy Spiller,Raymond Beausoleil',
      URL: 'https://patents.google.com/patent/US20050036624'
    },
    {
      Title: 'Simulating materials using quantum computation',
      Investor: 'Ryan BABBUSH,Hartmut Neven',
      URL: 'https://patents.google.com/patent/WO2018080553A1/en'
    },
    {
      Title: 'Quantum-Annealing Computer Method for Financial Portfolio Optimization',
      Investor: 'Matthew C. Johnson,Randall R. Correll,Kay GieseckePeter L. McMahon,Vincent P. Su',
      URL: 'https://patents.google.com/patent/US20170372427A1/en'
    },
    {
      Title: 'Quantum computing machine learning module',
      Investor: 'Carl Matthew Dukatz,Daniel Garrison,Lascelles Forrester,Corey Hollenbeck',
      URL: 'https://patents.google.com/patent/US10275721B2/en'
    },
    {
      Title: 'Quantum communication system',
      Investor: 'Zhiliang Yuan,Andrew James Shields',
      URL: 'https://patents.google.com/patent/US8238556'
    },
    {
      Title: 'Universal quantum computing',
      Investor: 'Jiri Vala,Birgitta Whaley',
      URL: 'https://patents.google.com/patent/US20060179029A1/en'
    },
    {
      Title: 'A quantum processor',
      URL: 'https://patents.google.com/patent/AU2015252051B2/en'
    },
    {
      Title: 'Simulating materials using quantum computation',
      URL: 'https://patents.google.com/patent/AU2016427834C1/en'
    },
    {
      Title: 'Simulating errors of a quantum device using variational quantum channels',
      Investor: 'Katabarwa AMARA',
      URL: 'https://patents.google.com/patent/CA3133917C/en?q=(CA+quantum+computing)&oq=CA+quantum+computing'
    },
    {
      Title: 'Systems and methods for problem solving, useful for example in quantum computing',
      Investor: 'Firas HamzeAndrew Douglas KingJack RaymondAidan Patrick RoyRobert IsraelEvgeny AndriyashCatherine McGeochMani Ranjbar',
      URL: 'https://patents.google.com/patent/US9881256B2/en?q=(IN+quantum+computing)&oq=IN+quantum+computing'
    },
    {
      Title: 'Multi-photon, multi-dimensional hyper-entanglement using higher-order radix qudits with applications to quantum computing, QKD and quantum teleportation',
      Investor: 'Solyman Ashrafi',
      URL: 'https://patents.google.com/patent/US11170318B2/en?q=(IN+quantum+computing)&oq=IN+quantum+computing'
    },
    {
      Title: 'Anti-quantum computing alliance chain transaction method and system based on public key pool',
      Investor: 'Fu Yao Zhong Yimin Yang Yucheng',
      URL: 'https://patents.google.com/patent/CN109687963B/en?q=(CA+quantum+computing)&oq=CA+quantum+computing'
    },
    {
      Title: 'Quantum computers having partial interferometric quantum gates',
      Investor: 'Parsa Bonderson,Michael H. Freedman',
      URL: 'https://patents.google.com/patent/US9256834B2/en?q=(US+quantum+computing)&oq=US+quantum+computing'
    },
    {
      Title: 'Analog processor comprising quantum devices',
      Investor: 'Alexander Maassen van den Brink,Peter Love,Mohammad H. S. Amin,Geordie Rose,David Grant,Miles F. H. Steininger,Paul Bunyk,Andrew J. Berkley',
      URL: 'https://patents.google.com/patent/US8283943B2/en?q=(US+quantum+computing)&oq=US+quantum+computing'
    },
    {
      Title: 'Systems, methods, and apparatus for recursive quantum computing algorithms',
      Investor: 'Geordie Rose',
      URL: 'https://patents.google.com/patent/US8244650B2/en?q=(US+quantum+computing)&oq=US+quantum+computing'
    },
    {
      Title: 'Quantum processor-based systems, methods and apparatus for solving problems as logic circuits',
      Investor: 'William G. Macready,Geordie Rose,Peter Love',
      URL: 'https://patents.google.com/patent/US8560282B2/en?q=(US+quantum+computing)&oq=US+quantum+computing'
    },
    {
      Title: 'Reprogrammable quantum processor architecture incorporating quantum error correction',
      Investor: 'Dirk Robert Walter Leipold,George Adrian MaximMichael Albert Asker',
      URL: 'https://patents.google.com/patent/US11635642B2/en?q=(US+quantum+computing)&oq=US+quantum+computing'
    },
    {
      Title: 'Systems and methods for interacting with a quantum computing system',
      Investor: 'Colin P. Williams',
      URL: 'https://patents.google.com/patent/US9471880B2/en?q=(US+quantum+computing)&oq=US+quantum+computing'
    },
    {
      Title: 'Physical realizations of a universal adiabatic quantum computer',
      Investor: 'Jacob Daniel Biamonte,Andrew J. BerkleyMohammad H.S. Amin',
      URL: 'https://patents.google.com/patent/US20210374590A1/en?q=(US+quantum+computing)&oq=US+quantum+computing'
    },
    {
      Title: 'Embedding electronic structure in controllable quantum systems',
      Investor: 'Ryan BabbushPeter Love,Alan Aspuru-Guzik',
      URL: 'https://patents.google.com/patent/US10922617B2/en?q=(US+quantum+computing)&oq=US+quantum+computing'
    },
    {
      Title: 'Quantum and digital processor hybrid systems and methods to solve problems',
      Investor: 'Mohammad Amin',
      URL: 'https://patents.google.com/patent/US8175995B2/en?q=(US+quantum+computing)&oq=US+quantum+computing&page=1'       
    },
    {
      Title: 'Quantum processor',
      Investor: 'Paul Bunyk,Felix Maibaum',
      URL: 'https://patents.google.com/patent/US9779360B2/en?q=(US+quantum+computing)&oq=US+quantum+computing&page=1'       
    },
    {
      Title: 'Systems and methods for real-time quantum computer-based control of mobile systems',
      Investor: 'Colin P. Williams,Jeremy P. Hilton',
      URL: 'https://patents.google.com/patent/US9400499B2/en?q=(US+quantum+computing)&oq=US+quantum+computing&page=1'       
    },
    {
      Title: 'Quantum processor based systems and methods that minimize an objective function',
      Investor: 'Firas HAMZE,William G. Macready,Geordie Rose,Suzanne GILDERT,Mani RANJBAR',
      URL: 'https://patents.google.com/patent/EP2729903B1/en?q=(US+quantum+computing)&oq=US+quantum+computing&page=1'       
    },
    {
      Title: 'Methods for solving computational problems using a quantum processor',
      Investor: 'William G. Macready',
      URL: 'https://patents.google.com/patent/US8977576B2/en?q=(US+quantum+computing)&oq=US+quantum+computing&page=1'       
    },
    {
      Title: 'Authentication using key distribution through segmented quantum computing environments',
      Investor: 'Benjamin Glen McCarty,Ellie Marie Daw',
      URL: 'https://patents.google.com/patent/US11736298B2/en?q=(Quantum+Computing)&oq=Quantum+Computing'
    },
    {
      Title: 'Development environment for programming quantum computing resources',
      Investor: 'David R. Richardson,Marc John Brooker,James Michael Thompson',
      URL: 'https://patents.google.com/patent/US10592216B1/en?q=(Quantum+Computing)&oq=Quantum+Computing'
    },
    {
      Title: 'Solving computational tasks using quantum computing',
      Investor: 'Andrew E. Fano,Jurgen Albert Weichenberger',
      URL: 'https://patents.google.com/patent/EP3392808B1/en?q=(Quantum+Computing)&oq=Quantum+Computing'
    },
    {
      Title: 'System and method for controlling a quantum computing emulation device',
      Investor: 'Brian R. La Cour,Michael J. STARKEY,Corey I. Ostrove',
      URL: 'https://patents.google.com/patent/US20180046933A1/en?q=(Quantum+Computing)&oq=Quantum+Computing'
    },
    {
      Title: 'Distributed quantum computing system',
      Investor: 'Robert Stanley Smith,William J. Zeng',
      URL: 'https://patents.google.com/patent/US11727299B2/en?q=(Quantum+Computing)&oq=Quantum+Computing'
    },
    {
      Title: 'Processing signals in a quantum computing system',
      Investor: 'Chad Tyler RIGETTI,Dane Christoffer THOMPSON',
      URL: 'https://patents.google.com/patent/EP3111380B1/en?q=(Quantum+Computing)&oq=Quantum+Computing'
    },
    {
      Title: 'Optimization recommendation services for quantum computing',
      Investor: 'Leigh Griffin,Luigi Zuccarelli',
      URL: 'https://patents.google.com/patent/US11295226B2/en?q=(Quantum+Computing)&oq=Quantum+Computing&page=1'
    },
    {
      Title: 'Quantum computing assemblies',
      Investor: 'Adel A. Elsherbini,Shawna M. Liff,Jeanette M. Roberts,James S. Clarke',
      URL: 'https://patents.google.com/patent/US11494682B2/en?q=(Quantum+Computing)&oq=Quantum+Computing&page=1'
    },
    {
      Title: 'Method for adiabatic quantum computing comprising of Hamiltonian scaling',
      Investor: 'Mohammad H. Amin',
      URL: 'https://patents.google.com/patent/US7788192B2/en?q=(Quantum+Computing)&oq=Quantum+Computing&page=1'
    },
    {
      Title: 'Performing a calibration process in a quantum computing system',
      Investor: 'Benjamin Jacob Bloom,Shane Arthur Caldwell,Michael James Curtis,Matthew J. Reagor,Chad Tyler Rigetti,Eyob A. Sete,William J. Zeng,Peter Jonathan Karalekas,Nikolas Anton Tezak,Nasser Alidoust',
      URL: 'https://patents.google.com/patent/US11593698B2/en?q=(Quantum+Computing)&oq=Quantum+Computing&page=1'
    },
    {
      Title: 'Chips including classical and quantum computing processors',
      Investor: 'Masoud MOHSENI,Hartmut Neven',
      URL: 'https://patents.google.com/patent/US11238000B2/en?q=(Quantum+Computing)&oq=Quantum+Computing&page=1'
    },
    {
      Title: 'Quantum mechanical framework for interaction of OAM with matter and applications in solid states, biosciences and quantum computing',
      Investor: 'Solyman Ashrafi',
      URL: 'https://patents.google.com/patent/US11164104B2/en?q=(Quantum+Computing)&oq=Quantum+Computing&page=1'
    },
    {
      Title: 'Quantum computing in a three-dimensional device lattice',
      Investor: 'William J. Zeng,Chad Tyler Rigetti',
      URL: 'https://patents.google.com/patent/US11379751B1/en?q=(Quantum+Computing)&oq=Quantum+Computing&page=1'
    },
    {
      Title: 'Modular Control in a Quantum Computing System',
      Investor: 'Matthew J. Reago,rWilliam J. Zeng,Michael Justin Gerchick Scheer,Benjamin Jacob Bloom,Nikolas Anton Tezak,Nicolas Didier,Christopher Butler Osborn,Chad Tyler Rigetti',
      URL: 'https://patents.google.com/patent/US20220366288A1/en?q=(Quantum+Computing)&oq=Quantum+Computing&page=2'
    },
    {
      Title: 'Integrating circuit elements in a stacked quantum computing device',
      Investor: 'Julian Shaw Kelly,Joshua Yousouf Mutus',
      URL: 'https://patents.google.com/patent/US20230004847A1/en?q=(Quantum+Computing)&oq=Quantum+Computing&page=2'
    },
    {
      Title: 'Quantum computing for combinatorial optimization problems using programmable atom arrays',
      Investor: 'Hannes Pichler,Shengtao Wang,Leo Xiangyu Zhou,Soonwon CHOI,Mikhail D. Lukin',
      URL: 'https://patents.google.com/patent/US20210279631A1/en?q=(Quantum+Computing)&oq=Quantum+Computing&page=2'
    },
    {
      Title: 'Fidelity estimation for quantum computing systems',
      Investor: 'John Martinis,Nan Ding,Ryan Babbush,Sergei V. Isakov,Hartmut Neven,Vadim Smelyanskiy,Sergio Boixo Castrillo',
      URL: 'https://patents.google.com/patent/US20220138610A1/en?q=(Quantum+Computing)&oq=Quantum+Computing&page=2'
    },
    {
      Title: 'Universal adiabatic quantum computing with superconducting qubits',
      Investor: 'Richard G. Harris,Mohammad H. Amin,Anatoly Smirnov',
      URL: 'https://patents.google.com/patent/US11348024B2/en?q=(Quantum+Computing)&oq=Quantum+Computing&page=2'
    },
    {
      Title: 'Solving mixed integer optimization problems on a hybrid classical-quantum computing system',
      Investor: 'Stefan Woerner,Giacomo Nannicini,Panagiotis Barkoutsos,Ivano Tavernelli',
      URL: 'https://patents.google.com/patent/US10902085B2/en?q=(Quantum+Computing)&oq=Quantum+Computing&page=3'
    },
    {
      Title: 'Hardware-efficient variational quantum eigenvalue solver for quantum computing machines',
      Investor: 'Antonio Mezzacapo,Jay M. Gambetta,Abhinav Kandala,Maika Takita,Paul K. Temme',
      URL: 'https://patents.google.com/patent/US10839306B2/en?q=(Quantum+Computing)&oq=Quantum+Computing&page=3'
    },
    {
      Title: 'Quantum computing device spin transfer torque magnetic memory',
      Investor: 'Dmytro Apalkov,Matthew J. Carey,Mohamad Towfik Krounbi,Alexey Vasilyevitch Khvalkovskiy',
      URL: 'https://patents.google.com/patent/US9460397B2/en?q=(Quantum+Computing)&oq=Quantum+Computing&page=3'
    },
    {
      Title: 'Quantum computing method and a quantum computer',
      Investor: 'Hayato Goto,Kouichi Ichimura',
      URL: 'https://patents.google.com/patent/US8386899B2/en?q=(Quantum+Computing)&oq=Quantum+Computing&page=3'
    },
    {
      Title: 'Apparatus and method for error reduction using symmetry in a quantum computing system',
      Investor: 'Anne Matsuura,Sonika Johri',
      URL: 'https://patents.google.com/patent/EP3564872A1/en?q=(Quantum+Computing)&oq=Quantum+Computing&page=3'
    },
    {
      Title: 'Cloud-based access to quantum computing resources',
      Investor: 'David R. Richardson,Marc John Brooker,James Michael Thompson',
      URL: 'https://patents.google.com/patent/US10817337B1/en?q=(Quantum+Computing)&oq=Quantum+Computing&page=3'
    },
    {
      Title: 'Retargetable compilation for quantum computing systems',
      Investor: 'Robert Stanley Smith,Eric Christopher Peterson',
      URL: 'https://patents.google.com/patent/US11010145B1/en?q=(Quantum+Computing)&oq=Quantum+Computing&page=4'
    },
    {
      Title: 'Scheduling services for quantum computing',
      Investor: 'Leigh Griffin,Luigi Zuccarelli',
      URL: 'https://patents.google.com/patent/US11086665B2/en?q=(Quantum+Computing)&oq=Quantum+Computing&page=4'
    },
    {
      Title: 'Methods and systems for unified quantum computing frameworks',
      Investor: 'Arman ZARIBAFIYAN,Ehsan ZAHEDINEJAD',
      URL: 'https://patents.google.com/patent/US20180246851A1/en?q=(Quantum+Computing)&oq=Quantum+Computing&page=4'
    },
    {
      Title: 'Development and analysis of quantum computing programs',
      Investor: 'Sanjana Arun Sharma,Anna Obikane,Francisco José Cabrera Hernández,Jay M. Gambetta',
      URL: 'https://patents.google.com/patent/US11586966B2/en?q=(Quantum+Computing)&oq=Quantum+Computing&page=4'
    },
    {
      Title: 'Superconducting shielding for use with an intergrated circuit for quantum computing',
      Investor: 'Paul Bunyk,Mark W. Johnson,Jeremy Patterson Hilton',
      URL: 'https://patents.google.com/patent/CA2667640C/en?q=(Quantum+Computing)&oq=Quantum+Computing&page=4'
    },
    {
      Title: 'Operating a quantum processor in a heterogeneous computing architecture',
      Investor: 'Chad Tyler Rigetti,William J. Zeng,Dane Christoffer THOMPSON',
      URL: 'https://patents.google.com/patent/US10956830B1/en?q=(Quantum+Computing)&oq=Quantum+Computing&page=4'
    },
    {
      Title: 'Testing hardware in a quantum computing system',
      Investor: 'Nikolas Anton Tezak,Matthew J. Reagor,Christopher Butler Osborn,Alexa Nitzan Staley',
      URL: 'https://patents.google.com/patent/US11740984B1/en?q=(Quantum+Computing)&oq=Quantum+Computing&page=5'
    },
    {
      Title: 'Quantum computing improvements to transportation',
      Investor: 'Carl Matthew Dukatz,Lascelles Forrester,Sonali Parthasarathy,Srinivas Yelisetty',
      URL: 'https://patents.google.com/patent/AU2019202916B2/en?q=(Quantum+Computing)&oq=Quantum+Computing&page=5'
    },
    {
      Title: 'Conditional Rabi oscillation readout for quantum computing',
      Investor: 'Jeremy P. Hilton,Geordie Rose,Brock Wilson,Anatoly Yu. Smirnov',
      URL: 'https://patents.google.com/patent/US7230266B2/en?q=(Quantum+Computing)&oq=Quantum+Computing&page=5'
    },
    {
      Title: 'Methods for general stabilizer-based quantum computing simulation',
      Investor: 'Hector J. Garcia-Ramirez,Igor L. Markov',
      URL: 'https://patents.google.com/patent/US9477796B2/en?q=(Quantum+Computing)&oq=Quantum+Computing&page=5'
    },
    {
      Title: 'Implementation of error mitigation for quantum computing machines',
      Investor: 'Abhinav Kandala,Paul Kristan Temme,Jay M. Gambetta',
      URL: 'https://patents.google.com/patent/US10755193B2/en?q=(Quantum+Computing)&oq=Quantum+Computing&page=5'
    },
    {
      Title: 'Fusion based quantum computing',
      Investor: 'Mercedes GIMENO-SEGOVIA,Terence Rudolph,Naomi Nickerson',
      URL: 'https://patents.google.com/patent/US20210232963A1/en?q=(Quantum+Computing)&oq=Quantum+Computing&page=5'
    },
    {
      Title: 'Automatic generation of Ising Hamiltonians for solving optimization problems in quantum computing',
      Investor: 'Atsushi Matsuo,Takashi Imamichi,Marco Pistoia',
      URL: 'https://patents.google.com/patent/US11620534B2/en?q=(Quantum+Computing)&oq=Quantum+Computing&page=6'
    },
    {
      Title: 'Quantum computing with photonic/ionic tuning of entanglement',
      Investor: 'Charles Newton,Osama Nayfeh,Kenneth Simonsen',
      URL: 'https://patents.google.com/patent/US10133986B1/en?q=(Quantum+Computing)&oq=Quantum+Computing&page=6'
    },
    {
      Title: 'Quantum computing device and method including qubit arrays of entangled states using negative refractive index lenses',        
      Investor: 'Delmar L. Barker,William R. Owens,Ross D. Rosenwald',
      URL: 'https://patents.google.com/patent/US7985965B2/en?q=(Quantum+Computing)&oq=Quantum+Computing&page=6'
    },
    {
      Title: 'Josephson quantum computing device and integrated circuit using such devices',
      Investor: 'Sadamichi Maekawa,Taro Yamashita,Saburo Takahashi',
      URL: 'https://patents.google.com/patent/US8437168B2/en?q=(Quantum+Computing)&oq=Quantum+Computing&page=6'
    }
];
export default patents;