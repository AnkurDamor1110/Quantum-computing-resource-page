// data.js
const peopleData = [
    {
      name: 'Scott Aaronson',
      institute: 'University of Texas/Quantum Computing',
      link: 'http://www.scottaaronson.com/  ', 
    },
    {
        name: 'Chris Adami',
        institute: 'Michigan State University',
        link: 'https://en.wikipedia.org/wiki/Chris_Adami', 
      },
      {
        name: 'Gerardo Adesso',
        institute: 'University of Nottingham',
        link: 'https://quantingham.wordpress.com/', 
      },
      {
        name: 'John Rarity',
        institute: 'University of Bristol',
        link: 'https://en.wikipedia.org/wiki/John_Rarity',  

      },
      {
        name: 'Samuel Braunstein',
        institute: 'University of York',
        link: 'http://www-users.cs.york.ac.uk/~schmuel/mybio.html',  

      },
      {
        name: 'Pieter Kok',
        institute: 'University of Sheffield',
        link: 'https://en.wikipedia.org/wiki/Pieter_Kok',  

      },
      {
        name: 'Stefano Pirandola',
        institute: 'University of York',
        link: 'https://www.cs.york.ac.uk/people/?group=Academic%20and%20Teaching%20Staff&username=pirs',  

      },
      {
        name: 'Ronald de Wolf',
        institute: 'Dutch Centre for Mathematics and Computer Science',
        link: 'https://homepages.cwi.nl/~rdewolf/',  

      },
      {
        name: 'Jiannis Pachos',
        institute: 'University of Leeds',
        link: 'https://theory.leeds.ac.uk/jiannis-pachos/',  

      },
      {
        name: 'Daniel Gottesman',
        institute: 'Perimeter Institute',
        link: 'http://www.perimeterinstitute.ca/personal/dgottesman/',  

      },
      {
        name: 'David Lucas',
        institute: 'Oxford',
        link: 'https://nqit.ox.ac.uk/person/prof-david-lucas',  

      },
      {
        name: 'Daniel Gottesman',
        institute: 'Perimeter Institute',
        link: 'http://www.perimeterinstitute.ca/personal/dgottesman/',  

      },
      {
        name: 'David Cory',
        institute: 'University of Waterloo',
        link: ' https://en.wikipedia.org/wiki/David_Cory',  

      },
      {
        name: 'John Preskill',
        institute: 'California Institute of Technology',
        link: 'http://www.theory.caltech.edu/people/preskill/',  

      },
      {
        name: 'Raymond Laflamme',
        institute: 'Perimeter Institute',
        link: 'https://en.wikipedia.org/wiki/Raymond_Laflamme',  

      },
      {
        name: 'Charles Bennett',
        institute: 'IBM',
        link: 'https://www.perimeterinstitute.ca/people/Charles-Bennett',  

      },
      {
        name: 'Giles Brassard',
        institute: 'Universite de Montreal',
        link: 'https://www.perimeterinstitute.ca/people/Gilles-Brassard',  

      },
      {
        name: 'Juan Ignacio Cirac',
        institute: 'Max Planck Institute for Gravitational Physics',
        link: 'https://www.perimeterinstitute.ca/people/Ignacio-Cirac',  

      },
      {
        name: 'Richard Cleve',
        institute: 'University of Waterloo',
        link: 'https://www.perimeterinstitute.ca/people/Richard-Cleve',  

      },
      {
        name: 'Patrick Hayden',
        institute: 'Stanford University',
        link: 'https://www.cs.mcgill.ca/patrick/',  

      },
      {
        name: 'Adrian Kent',
        institute: 'University of Cambridge',
        link: 'https://www.perimeterinstitute.ca/people/Adrian-Kent',  

      },
      {
        name: 'Debbie Leung',
        institute: 'University of Waterloo',
        link: 'http://www.math.uwaterloo.ca/~wcleung/',  

      },
      {
        name: 'Hoi-K Wong Lo',
        institute: 'University of Toronto',
        link: 'https://www.perimeterinstitute.ca/people/Hoi-Kwong-Lo',  

      },
      {
        name: 'Norbert Lutkenhaus',
        institute: 'Institute for Quantum Computing (IQC)',
        link: 'https://www.perimeterinstitute.ca/people/Norbert-Lutkenhaus',  

      },
      
      {
        name: 'Michele Mosca',
        institute: 'Institute for Quantum Computing (IQC)',
        link: 'http://www.iqc.ca/~mmosca/',  

      },
      {
        name: 'Ashwin Nayak',
        institute: 'University of Waterloo',
        link: 'https://www.perimeterinstitute.ca/people/Ashwin-Nayak',  

      },
      {
        name: 'Sandu Popescu',
        institute: 'University of Bristol',
        link: ' https://www.perimeterinstitute.ca/people/Sandu-Popescu',  

      },
      {
        name: 'David Poulin',
        institute: 'Perimeter Institute',
        link: 'https://www.perimeterinstitute.ca/people/David-Poulin',  

      },
      {
        name: 'Barry Sanders',
        institute: 'University of Calgary',
        link: 'https://www.perimeterinstitute.ca/people/Barry-Sanders',  

      },
      {
        name: 'Peter Shor',
        institute: 'Massachusetts Institute of Technology (MIT)',
        link: 'https://www.perimeterinstitute.ca/people/Peter-Shor',  

      },
      {
        name: 'Dorit Aharonov',
        institute: 'Hebrew University',
        link: 'http://www.cs.huji.ac.il/~doria/',  

      },
      {
        name: 'Christopher Altman',
        institute: 'Delft University of Technology',
        link: 'https://www.linkedin.com/in/altman/',  

      },
      {
        name: 'Maria Schuld',
        institute: 'University of KwaZulu-Natal',
        link: 'https://quantum.ukzn.ac.za/ms-m-schuld/',  

      },
      {
        name: 'Peter Wittek',
        institute: 'University of Toronto',
        link: 'https://peterwittek.com/',  

      },
      {
        name: 'Hans Christian von Baeyer',
        institute: 'College of William and Mary',
        link: 'https://en.wikipedia.org/wiki/Hans_Christian_von_Baeyer',  

      },
      {
        name: 'Chad Rigetti',
        institute: 'Rigetti Computing',
        link: 'https://www.rigetti.com/about',  

      },
      {
        name: 'Ilya Sinayskiy',
        institute: 'National Institute for Theoretical Physics',
        link: 'http://scp.ukzn.ac.za/Schoolleadershipandstaff2/IlyaSinayskiy.aspx',  

      },
      {
        name: 'Francesco Petruccione',
        institute: 'University of KwaZulu-Natal',
        link: 'https://quantum.ukzn.ac.za/prof-f-petruccione/',  

      },
      {
        name: 'Philip Ball',
        institute: 'Freelance',
        link: 'https://philipball.co.uk/bio',  

      },
      {
        name: 'Andris Ambainis',
        institute: 'University of Latvia',
        link: 'http://www.lza.lv/scientists/ambainisa.htm',  

      },
      {
        name: 'Janet Anders',
        institute: 'University of Exeter',
        link: 'http://emps.exeter.ac.uk/physics-astronomy/staff/ja343',  

      },
      {
        name: 'P.K. Aravind',
        institute: 'Worcester Polytechnic Institute',
        link: 'https://users.wpi.edu/~paravind/',  

      },
      {
        name: 'André Berthiaume',
        institute: 'DePaul University',
        link: 'https://www.cdm.depaul.edu/about/Pages/People/facultyinfo.aspx?fid=138',  

      },
      {
        name: 'Jacob Biamonte',
        institute: 'Skolkovo Institute of Science and Technology',
        link: 'https://faculty.skoltech.ru/people/jacobbiamonte',  

      },
      {
        name: 'Joshua Bienfang',
        institute: 'Quantum Measurement Division of the Physical Measurement Laboratory',
        link: 'https://www.nist.gov/people/joshua-bienfang',  

      },
      {
        name: 'Sougato Bose',
        institute: 'University College London',
        link: 'https://www.ucl.ac.uk/physics-astronomy/people/professor-sougato-bose',  

      },
      {
        name: 'Dan Browne',
        institute: 'University College London',
        link: 'https://www.ucl.ac.uk/physics-astronomy/people/professor-dan-browne',  

      },
      {
        name: 'Caslav Brukner',
        institute: 'University of Vienna',
        link: 'https://www.oeaw.ac.at/en/esq/home/research-groups/caslav-brukner/',  

      },
      {
        name: 'Harry Buhrman',
        institute: 'University of Amsterdam',
        link: 'https://homepages.cwi.nl/~buhrman/',  

      },
      {
        name: 'Daniel Burgarth',
        institute: 'Aberystwyth University',
        link: 'http://www.aqstic.net/people/daniel-burgarth',  

      },
      {
        name: 'Mark Byrd',
        institute: 'Southern Illinois University',
        link: 'http://www.physics.siu.edu/people/mark-byrd.php',  

      },
      {
        name: 'Adan Cabello',
        institute: 'Universidad de Sevilla',
        link: 'https://personal.us.es/adan/home.htm',  

      },
      
      {
        name: 'Robert Calderbank',
        institute: 'Duke University',
        link: 'https://ece.duke.edu/faculty/robert-calderbank', 
      },
      {
        name: 'John Calsamiglia',
        institute: 'Universität Autonoma de Barcelona',
        link: 'https://www.linkedin.com/in/john-calsamiglia-a361a0a7/?originalSubdomain=es', 
      },
      {
        name: 'Valerio Cappellin',
        institute: '“Abdus Salam” International Centre for Theoretical Physics',
        link: 'http://users.ictp.it/~valerio/', 
      },
      {
        name: 'Nicolas Cerf',
        institute: 'Universite Libre de Bruxelles',
        link: 'https://en.wikipedia.org/wiki/Nicolas_J._Cerf', 
      },
      {
        name: 'Andrew Childs',
        institute: 'University of Maryland',
        link: 'https://www.cs.umd.edu/~amchilds/', 
      },
      {
        name: 'Matthias Christandl',
        institute: 'University of Copenhagen',
        link: 'https://www.math.ku.dk/english/staff/?pure=en/persons/475476', 
      },
      {
        name: 'Isaac Chuang',
        institute: 'MIT',
        link: 'https://web.mit.edu/physics/people/faculty/chuang_isaac.html', 
      },
      {
        name: 'Charles W. Clark',
        institute: 'University of Maryland',
        link: 'https://jqi.umd.edu/people/charles-clark', 
      },
      {
        name: 'Richard Cleve',
        institute: 'University of Waterloo',
        link: 'https://en.wikipedia.org/wiki/Richard_Cleve', 
      },
      {
        name: 'Don Coppersmith',
        institute: 'IBM',
        link: 'https://www.ithistory.org/honor-roll/dr-don-coppersmith', 
      },
      {
        name: 'Claude Crépeau',
        institute: 'McGill University',
        link: 'https://en.wikipedia.org/wiki/Claude_Cr%C3%A9peau', 
      },
      {
        name: 'Oscar Dahlsten',
        institute: ' University of Oxford',
        link: 'https://www2.physics.ox.ac.uk/contacts/people/dahlsten', 
      },
      {
        name: 'A.R. Usha Devi',
        institute: 'Bangalore University',
        link: 'http://bangaloreuniversity.ac.in/resume/phy-dr-a-r-ushadevi/', 
      },
      {
        name: 'Wim van Dam',
        institute: 'University of California',
        link: 'https://www.cs.ucsb.edu/~vandam/', 
      },
      {
        name: 'Ivan Damgård',
        institute: 'Aarhus University',
        link: ' http://cs.au.dk/~ivan/', 
      },
      {
        name: 'David Deutsch',
        institute: 'University of Oxford',
        link: 'https://en.wikipedia.org/wiki/David_Deutsch', 
      },
      {
        name: 'Luming Duan',
        institute: 'Tsinghua University',
        link: 'https://www.perimeterinstitute.ca/people/luming-duan', 
      },
      {
        name: 'Jonathan L DuBois',
        institute: 'Lawrence Livermore National Laboratory',
        link: 'https://qsg.llnl.gov/Site/JonathanDuBois.html', 
      },
      {
        name: 'Ian Durham',
        institute: 'Saint Anselm College',
        link: 'https://www.anselm.edu/faculty-directory/ian-durham', 
      },
      {
        name: 'Jens Eisert',
        institute: 'Dahlem Center for Complex Quantum Systems',
        link: 'http://www.physik.fu-berlin.de/en/einrichtungen/ag/ag-eisert/index.html', 
      },

      {
        name: 'Artur Ekert',
        institute: 'University of Oxford',
        link: 'https://en.wikipedia.org/wiki/Artur_Ekert', 
      },
      {
        name: ' Berge Englert',
        institute: 'National University of Singapore',
        link: 'https://en.wikipedia.org/wiki/Berthold-Georg_Englert', 
      },
      {
        name: 'Steven van Enk',
        institute: 'University of Oregon',
        link: 'https://physics.uoregon.edu/profile/svanenk/', 
      },
      {
        name: 'Mark Ettinger',
        institute: 'Spoken Communications',
        link: 'https://www.linkedin.com/in/j-mark-ettinger-14966410/', 
      },
      {
        name: 'Edward Farhi',
        institute: 'MIT',
        link: 'https://web.mit.edu/physics/people/faculty/farhi_edward.html', 
      },
      {
        name: 'Stephen Fenner',
        institute: 'The University of South Carolina',
        link: 'https://cse.sc.edu/~fenner/', 
      },

      {
        name: 'Michael Fleischhauer',
        institute: 'University of Kaiserslautern',
        link: 'https://optimas.uni-kl.de/en/mitglieder/fleischhauer/', 
      },
      {
        name: 'Lance Fortnow',
        institute: 'Georgia Tech College of Computing',
        link: 'https://lance.fortnow.com/', 
      },
      {
        name: 'Michael Freedman',
        institute: 'University of California',
        link: 'https://en.wikipedia.org/wiki/Michael_Freedman', 
      },
      {
        name: 'Mark Friesen',
        institute: 'University of Wisconsin-Madison',
        link: 'http://home.physics.wisc.edu/~friesen/', 
      },
      {
        name: 'Christopher Fuchs',
        institute: 'University of Massachusetts Boston',
        link: 'http://www.physics.umb.edu/Research/QBism/chris.html', 
      },
      {
        name: 'Peter Gács',
        institute: 'Boston University',
        link: 'http://www.cs.bu.edu/fac/gacs/', 
      },
      {
        name: 'Ernesto F. Galvão',
        institute: 'Universidade Federal Fluminense',
        link: 'https://www.researchgate.net/profile/Ernesto_Galvao', 
      },
      {
        name: 'Piotr Gawron',
        institute: 'Institute of Theoretical and Applied Informatics',
        link: 'https://scholar.google.com/citations?user=YiH0ZRMAAAAJ&hl=en', 
      },
      {
        name: 'Neil Gershenfeld',
        institute: 'MIT',
        link: 'http://ng.cba.mit.edu/', 
      },
      {
        name: 'Richard Gill',
        institute: 'Leiden University',
        link: 'https://www.math.leidenuniv.nl/~gill/', 
      },
      {
        name: 'Nicolas Gisin',
        institute: 'University of Geneva',
        link: 'https://en.wikipedia.org/wiki/Nicolas_Gisin', 
      },
      {
        name: 'Vittorio Giovannetti',
        institute: 'Scuola Normale Superiore',
        link: 'https://sites.google.com/site/giovannettivittorio/home', 
      },
      {
        name: 'Jeffrey Goldstone',
        institute: 'MIT Center for Theoretical Physics',
        link: 'https://en.wikipedia.org/wiki/Jeffrey_Goldstone', 
      },
      {
        name: 'Jeroen van de Graaf',
        institute: 'Universite de Montreal',
        link: 'http://www.dcc.ufmg.br/dcc/?q=en/node/217', 
      },
      {
        name: 'Frederic Green',
        institute: 'Clark University',
        link: 'https://mathcs.clarku.edu/~fgreen/', 
      },
      {
        name: 'Lov Grover',
        institute: 'Bell Laboratories',
        link: 'https://en.wikipedia.org/wiki/Lov_Grover', 
      },
      {
        name: 'Samuel Gutmann',
        institute: 'Northeastern University',
        link: 'http://qis.mit.edu/people.php?who=4', 
      },{
        name: 'Christopher Hadley',
        institute: 'Dunnhumby',
        link: 'https://www.linkedin.com/in/hadleyc/', 
      },
      {
        name: 'Sean Hallgren',
        institute: 'The Pennsylvania State University',
        link: 'http://www.cse.psu.edu/~sjh26/', 
      },
      {
        name: 'Rasmus Hvass Hansen',
        institute: 'University of Copenhagen',
        link: 'https://www.researchgate.net/profile/Rasmus_Hansen9', 
      },
      {
        name: 'Yorick Hardy',
        institute: 'University of the Witwatersrand',
        link: 'http://yhardy.users.sourceforge.net/', 
      },
      {
        name: 'Aram Harrow',
        institute: 'MIT',
        link: 'http://web.mit.edu/aram/www/', 
      },
      {
        name: 'Nathan L. Harshman',
        institute: 'Aarhus University',
        link: 'http://phys.au.dk/en/news/item/artikel/new-visiting-associate-professor-nathan-harshman/', 
      },
      {
        name: 'Tim Havel',
        institute: 'MIT',
        link: 'http://web.mit.edu/aram/www/', 
      },
      {
        name: 'Mark Hillery',
        institute: 'Hunter College',
        link: 'http://www.hunter.cuny.edu/physics/faculty/hillery/home', 
      },
      {
        name: 'Tad Hogg',
        institute: 'Stanford University',
        link: 'http://alumnus.caltech.edu/~tad/', 
      },
      {
        name: 'Alexander Holevo',
        institute: 'Steklov Mathematical Institute',
        link: 'https://en.wikipedia.org/wiki/Alexander_Holevo', 
      },
      {
        name: 'Steve Homer',
        institute: 'Boston University',
        link: 'http://www.cs.bu.edu/fac/homer/', 
      },
      {
        name: 'Peter Høyer',
        institute: 'University of Calgary',
        link: 'http://pages.cpsc.ucalgary.ca/~hoyer/', 
      },
      {
        name: 'Richard Hughes',
        institute: 'Los Alamos National Laboratory',
        link: 'https://www.lanl.gov/science/centers/quantum/photons.shtml', 
      },
      {
        name: 'Lawrence Ip',
        institute: 'Google',
        link: 'http://www.lawrenceip.com/', 
      },
      {
        name: 'Aurelian Isar',
        institute: 'University of Bucharest',
        link: 'https://www.theory.nipne.ro/~isar/', 
      },
      {
        name: 'Jonathan Jones',
        institute: 'University of Oxford',
        link: 'https://www2.physics.ox.ac.uk/contacts/people/jjones', 
      },
      {
        name: 'Gregg Jaeger',
        institute: 'Boston University',
        link: 'http://math.bu.edu/people/jaeger/', 
      },
      {
        name: 'Iordan Kerenidis',
        institute: 'IRIF',
        link: 'https://www.irif.fr/~jkeren/jkeren/Iordanis_Kerenidis.html', 
      },
      {
        name: 'Myungshik Kim',
        institute: 'Imperial College London',
        link: 'https://www.imperial.ac.uk/people/m.kim', 
      },
      {
        name: 'Alexei Kitaev',
        institute: 'Institute for Quantum Information and Matter',
        link: 'http://iqim.caltech.edu/profile/alexei-y-kitaev/', 
      },
      {
        name: 'Peter Knight',
        institute: 'Imperial College London',
        link: 'https://en.wikipedia.org/wiki/Peter_Knight_(physicist)', 
      },
      {
        name: 'Emanuel Knill',
        institute: 'Center for Theory of Quantum Matter',
        link: 'http://ctqm.colorado.edu/people/knill', 
      },
      {
        name: 'Dennis Kretschmann',
        institute: 'Boehmert and Boehmert',
        link: 'https://www.boehmert.de/en/team/dennis-kretschmann/', 
      },
      {
        name: 'Greg Kuperberg',
        institute: 'University of California',
        link: 'https://www.math.ucdavis.edu/~greg/', 
      },
      {
        name: 'Paul Kwiat',
        institute: 'University of Illinois',
        link: 'https://physics.illinois.edu/people/directory/profile/kwiat', 
      },
      {
        name: 'Antia Lamas-Linares',
        institute: 'Texas Advanced Computing Center',
        link: 'https://www.tacc.utexas.edu/about/directory/antia-lamas-linares', 
      },
      {
        name: 'Andrew Landahl',
        institute: 'University of New Mexico',
        link: 'http://info.phys.unm.edu/~alandahl/', 
      },
      {
        name: 'Sophie Laplante',
        institute: 'Institut de Recherche en Informatique Fondamentale',
        link: 'https://www.irif.fr/~laplante/', 
      },
      {
        name: 'Troy Lee',
        institute: 'Centre for Quantum Technologies',
        link: 'https://www.quantumlah.org/about/highlight.php?id=30', 
      },
      {
        name: 'Lev Levitin',
        institute: 'Boston University',
        link: 'https://www.bu.edu/eng/profile/lev-levitin/', 
      },
      {
        name: 'Francesco Buscemi',
        institute: 'Nagoya University',
        link: 'http://www.math.cm.is.nagoya-u.ac.jp/Staff/buscemi-en.html', 
      },
      
      {
        name: 'Vladimir Buzek',
        institute: 'The Academy of Europe',
        link: 'https://www.ae-info.org/ae/Member/Bu%C5%BEek_Vladim%C3%ADr', 
      },
      {
        name: 'Carlton Caves',
        institute: 'University of New Mexico',
        link: 'https://en.wikipedia.org/wiki/Carlton_M._Caves', 
      },
      {
        name: 'David Collins',
        institute: 'Colorado Mesa University',
        link: 'https://www.coloradomesa.edu/directory/physical-environmental-sciences/david-collins.html', 
      },
      {
        name: 'Alejandro Díaz-Caro',
        institute: 'Conicet',
        link: 'https://www-2.dc.uba.ar/staff/adiazcaro/', 
      },
      {
        name: 'Christoph Dürr',
        institute: 'Université Pierre et Marie Curie',
        link: 'https://scholar.google.fr/citations?user=71NSquIAAAAJ&hl=en', 
      },
      {
        name: 'Jürgen Eschner',
        institute: 'Universität Des Saarlandes',
        link: 'https://www.uni-saarland.de/en/lehrstuhl/eschner.html', 
      },
      {
        name: 'Torsten Franz',
        institute: 'Author',
        link: 'https://arxiv.org/abs/quant-ph/0512058', 
      },
      {
        name: 'Geza Toth',
        institute: 'Ikerbasque',
        link: 'https://www.gtoth.eu/', 
      },
      
      {
        name: 'Richard Jozsa',
        institute: 'University of Cambridge',
        link: 'https://en.wikipedia.org/wiki/Richard_Jozsa', 
      },
      {
        name: 'Sabre Kais',
        institute: 'Purdue Science',
        link: 'https://www.chem.purdue.edu/activity/public/profile/chem/kais', 
      },
      {
        name: 'Anders Karlsson',
        institute: 'Elsevier',
        link: 'https://www.linkedin.com/in/anderskarlssontokyo/', 
      },
      {
        name: 'Marek Karpinski',
        institute: 'University of Bonn',
        link: 'https://en.wikipedia.org/wiki/Marek_Karpinski', 
      },
      {
        name: 'Alastair Kay',
        institute: 'University of London',
        link: 'http://www.ma.rhul.ac.uk/akay/', 
      },
      {
        name: 'Kiran Kedlaya',
        institute: 'University of California',
        link: 'https://en.wikipedia.org/wiki/Kiran_Kedlaya', 
      },
      {
        name: 'Julia Kempe',
        institute: 'Paris Diderot University',
        link: 'https://en.wikipedia.org/wiki/Julia_Kempe', 
      },
      
    


      


    
      


      

      

      
      
      
      
      

      
      
      
      


  ];
  
  export default peopleData;
  