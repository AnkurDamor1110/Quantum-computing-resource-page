// data.js
const Articles = [
    {
      topicName: 'Timeline: A brief history of quantum computing from 1980 to 2100',
      authorName: 'Chelsea Whyte',
      link: 'https://www.newscientist.com/article/2221707-timeline-a-brief-history-of-quantum-computing-from-1980-to-2100/', 
    },

    {
      topicName: 'Quantum Computing: Current Progress and Future Directions',
      authorName: 'Triniti Dungey',
      link: 'https://er.educause.edu/articles/2022/7/quantum-computing-current-progress-and-future-directions', 
    },
    {
      topicName: 'Who invented the quantum computer?',
      authorName: 'study.com',
      link: 'https://homework.study.com/explanation/who-invented-the-quantum-computer.html', 
    },
    {
      topicName: 'Everyone is jumping on the quantum computing bandwagon, but why?',
      authorName: 'Leah crane',
      link: 'https://www.newscientist.com/article/2228455-everyone-is-jumping-on-the-quantum-computing-bandwagon-but-why/', 
    },
    {
      topicName: 'Google claims it has finally reached quantum supremacy',
      authorName: 'Chelsea Whyte',
      link: 'https://www.newscientist.com/article/2217347-google-claims-it-has-finally-reached-quantum-supremacy/', 
    },
    {
      topicName: 'Amazon enters quantum computing race with cloud quantum processors',
      authorName: 'Chelsea Whyte',
      link: 'https://www.newscientist.com/article/2225706-amazon-enters-quantum-computing-race-with-cloud-quantum-processors/', 
    },
    {
      topicName: 'Quantum computers might not offer extreme speed boost for chemistry',
      authorName: 'Alex Wilkins',
      link: 'https://www.newscientist.com/article/2333900-quantum-computers-might-not-offer-extreme-speed-boost-for-chemistry/', 
    },
    {
      topicName: 'Quantum Computers Could Solve Countless Problems And Create Lot of New Ones',
      authorName: 'CHARLIE CAMPBEL',
      link: 'https://time.com/6249784/quantum-computing-revolution/', 
    },
    {
      topicName: 'Why it might be impossible to build a practical quantum computer',
      authorName: 'Michael Brooks',
      link: 'https://www.newscientist.com/article/mg25133493-200-why-it-might-be-impossible-to-build-a-practical-quantum-computer/', 
    },
    {
      topicName: 'Quantum Computing: Definition, How Its Used, and Example',
      authorName: 'JAKE FRANKENFIELD',
      link: 'https://www.investopedia.com/terms/q/quantum-computing.asp#:~:text=Quantum%20computing%20relates%20to%20computing,solving%20extremely%20complex%20tasks%20faster.', 
    },
    {
      topicName: 'Quantum Computers Could Solve Countless Problems—And Create a Lot of New Ones ',
      authorName: 'CHARLIE CAMPBELL',
      link: 'https://time.com/6249784/quantum-computing-revolution/', 
    },
    {
      topicName: 'A decade of Physics World breakthroughs: 2009 – the first quantum computer',
      authorName: 'Michael Banks',
      link: 'https://physicsworld.com/a/a-decade-of-physics-world-breakthroughs-2009-the-first-quantum-computer/', 
    },
    {
      topicName: 'HOW QUANTUM COMPUTING WILL CHANGE THE WORLD',
      authorName: 'Dr Mark van Rijmenam, CSP',
      link: 'https://www.thedigitalspeaker.com/quantum-computing-change-world/', 
    },
    {
      topicName: 'What Makes Quantum Computing So Hard to Explain?What Makes Quantum Computing So Hard to Explain?',
      authorName: 'Scott Aaronson',
      link: 'https://www.quantamagazine.org/why-is-quantum-computing-so-hard-to-explain-20210608/', 
    },
    {
      topicName: 'Quantum Computing Is the Future, and Schools Need to Catch Up',
      authorName: 'Olivia Lanes',
      link: 'https://www.scientificamerican.com/article/quantum-computing-is-the-future-and-schools-need-to-catch-up/', 
    },
    {
      topicName: 'Quantum computing: Hype or hope?',
      authorName: 'Vivek Wadhwa',
      link: 'https://foreignpolicy.com/2022/08/21/quantum-computing-artificial-intelligence-ai-technology-regulation/', 
    }, {
      topicName: 'What is a quantum computer?',
      authorName: 'Martin Giles Archive',
      link: 'https://www.technologyreview.com/2019/01/29/66141/what-is-quantum-computing/', 
    },

    {
      topicName: 'IBM: Quantum Computers Are Already Doing Heavy Lifting Big Blue brings qubit brawn to supercomputer-confounding computations',
      authorName: 'CHARLES Q. CHOI',
      link: 'https://spectrum.ieee.org/practical-quantum-computing-ibm', 
    },
    {
      topicName: 'Microsoft Announces Azure Quantum Elements — A New Azure Service That Brings Together The Latest Cloud Innovations To Accelerate Scientific Discovery',
      authorName: 'James Dargan',
      link: 'https://thequantuminsider.com/2023/06/22/microsoft-announces-azure-quantum-elements-a-new-azure-service-that-brings-together-the-latest-cloud-innovations-to-accelerate-scientific-discovery/', 
    },

    {
      topicName: 'Quantum computing: A revolution in the making',
      authorName: 'James Dargan',
      link: 'https://thequantuminsider.com/2022/09/05/quantum-computing-companies-ultimate-list-for-2022/', 
    },
    {
      topicName: 'Pharma’s digital Rx: Quantum computing in drug research and development',
      authorName: 'Matthias Evers',
      link: 'https://www.mckinsey.com/industries/life-sciences/our-insights/pharmas-digital-rx-quantum-computing-in-drug-research-and-development', 
    },
    {
      topicName: 'Quantum computing: The future of materials science',
      authorName: 'Michael Brooks',
      link: 'https://www.technologyreview.com/2023/01/06/1066317/whats-next-for-quantum-computing/', 
    },

    {
      topicName: 'Financial IT leaders prep for a quantum-fueled future',
      authorName: 'Poornima Apte',
      link: 'https://www.cio.com/article/649903/financial-it-leaders-prep-for-a-quantum-fueled-future.html', 
    },
    {
      topicName: 'Quantum computing: The future of humanity',
      authorName: 'JAKE FRANKENFIELD',
      link: 'https://www.investopedia.com/terms/q/quantum-computing.asp', 
    },
    {
      topicName: 'The realist’s guide to quantum technology and national security',
      authorName: 'Scott Buchholz',
      link: 'https://www.deloitte.com/cbc/en/our-thinking/insights/industry/government-public-services/the-impact-of-quantum-technology-on-national-security.html', 
    },
    {
      topicName: 'Announcing the opening of the AWS Center for Quantum Computing',
      authorName: 'Nadia Carlsten',
      link: 'https://aws.amazon.com/blogs/quantum-computing/announcing-the-opening-of-the-aws-center-for-quantum-computing/', 
    },
  ];
  
  export default Articles;
  