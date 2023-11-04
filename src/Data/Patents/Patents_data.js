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
];
export default patents;