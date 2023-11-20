// data.js
const CoursesData =[
  {
    Title: 'Introduction to Quantum Information',
    AuthorName: 'Joonwoo Bae',
    URL: 'https://www.coursera.org/learn/introduction-to-quantum-information'
  },
  {
    Title: 'Quantum Optics 2 - Two photons and more',
    AuthorName: 'Alain Aspect and Michel Brune',
    URL: 'https://www.coursera.org/learn/quantum-optics-two-photons'
  },
  {
    Title: 'Understanding Modern Physics II: Quantum Mechanics and Atoms',
    AuthorName: 'Yi Wang',
    URL: 'https://www.coursera.org/learn/understanding-modern-physics-2-quantum-mechanics-and-atoms'
  },
  {
    Title: 'Introduction to Quantum Computing for Everyone',
    AuthorName: 'UChicagoX',
    URL: 'https://www.edx.org/learn/quantum-computing/university-of-chicago-introduction-to-quantum-computing-for-everyone?index=product&objectID=course-e08ab5d6-00e1-4cab-8e00-12d05299e906&webview=false&campaign=Introduction+to+Quantum+Computing+for+Everyone&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Flearn%2Fquantum-computing'   
  },
  {
    Title: 'THE QUANTUM INTERNET AND QUANTUM COMPUTERS: HOW WILL THEY CHANGE THE WORLD? (QUANTUM INFORMATIONAL COURSE)',  
    AuthorName: 'Stephanie Wehner, Lieven Vandersypen and Menno Veldhorst',
    URL: 'https://www.edx.org/learn/science/delft-university-of-technology-the-quantum-internet-and-quantum-computers-how-w-2'
  },
  {
    Title: 'FUTURE LEARN',
    AuthorName: 'Takahiko Satoh, Rodney Van Meter',
    URL: 'https://www.futurelearn.com/courses/intro-to-quantum-computing'
  },
  {
    Title: 'GEEKS FOR GEEKS',
    AuthorName: 'geeksforgeeks',
    URL: 'https://www.geeksforgeeks.org/introduction-quantum-computing/'
  },
  {
    Title: 'MICROSOFT’S QUANTUM COMPUTING FOR COMPUTER SCIENTISTS (PDF COURSE)',
    AuthorName: 'microsoft',
    URL: 'https://www.youtube.com/watch?v=F_Riqjdh2oM'
  },
  {
    Title: 'UDEMY QUANTUM COMPUTING — AN OVERVIEW',
    AuthorName: 'Lakshmy Subramonia Iyer',
    URL: 'https://www.udemy.com/course/quantum-computing-an-overview/'
  },
  {
    Title: 'Introduction to Quantum Computing',
    AuthorName: 'UBCx',
    URL: 'https://www.edx.org/learn/science/university-of-british-columbia-intro-to-quantum-computing?index=product&objectID=course-8d965135-2d45-484c-9987-1ffabc4074b5&webview=false&campaign=Introduction+to+Quantum+Computing&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Flearn%2Fquantum-computing'
  },
  {
    Title: 'Quantum Computation Roadmap',
    AuthorName: 'Richard Hughes,Malcolm Boshier.',
    URL: 'https://qist.lanl.gov/qcomp_map.shtml'
  },
  {
    Title: 'Concepts of Quantum Computing',
    AuthorName: 'Nikita Duggal',
    URL: 'https://www.simplilearn.com/tutorials/machine-learning-tutorial/what-is-quantum-computing#:~:text=Quantum%20computing%20is%20a%20branch,1%20at%20the%20same%20time.'
  },
  {
    Title: 'Finance & Quantitative Modeling for Analysts Specialization',
    Author: 'Michael R Roberts ',
    URL: 'https://www.coursera.org/specializations/finance-quantitative-modeling-analysts'
  },
  {
    Title: 'Boltzmann Law: Physics to Computing',
    Author: 'By Purdue University',
    URL: 'https://www.careers360.com/university/purdue-university-west-lafayette/boltzmann-law-physics-computing-certification-course'
  },
  {
    Title: 'Introduction to Quantum Computing for Everyone 2',
    Author: 'By UChicago',
    URL: 'https://www.careers360.com/university/the-university-of-chicago-chicago/introduction-quantum-computing-for-everyone-2-certification-course'
  },
  {
    Title: 'Applied Quantum Computing III Algorithm and Software',
    Author: 'By Purdue University, West Lafayette ',
    URL: 'https://www.careers360.com/university/purdue-university-west-lafayette/applied-quantum-computing-iii-algorithm-and-software-certification-course'
  },
  {
    Title: 'Understanding Quantum Computers',
    Author: 'By Keio University, Minato ',
    URL: 'https://www.careers360.com/university/keio-university-minato/understanding-quantum-computers-certification-course'
  },
  {
    Title: 'Introduction to Quantum Computing: Quantum Algorithms and Qiskit',
    Author: 'By IIT Madras   ',
    URL: 'https://www.careers360.com/university/indian-institute-of-technology-madras/introduction-quantum-computing-quantum-algorithms-and-qiskit-certification-course'
  },
  {
    Title: 'Quantum Computer Systems Design III Working with Noisy Systems',
    Author: 'By UChicago',
    URL: 'https://www.careers360.com/university/the-university-of-chicago-chicago/quantum-computer-systems-design-iii-working-noisy-systems-certification-course'
  },
  {
    Title: 'Quantum Computer Systems Design II Principles of Quantum Architecture ',
    Author: 'By UChicago',
    URL: 'https://www.careers360.com/university/the-university-of-chicago-chicago/quantum-computer-systems-design-ii-principles-of-quantum-architecture-certification-course'
  },
  {
    Title: 'Fundamentals of Quantum Information',
    Author: 'By Delft University of Technology',
    URL: 'https://www.careers360.com/university/delft-university-of-technology/fundamentals-of-quantum-information-certification-course' 
  },
  {
    Title: 'Quantum Computer Systems Design I Intro to Quantum Computation and Programming ',
    Author: 'By UChicago',
    URL: 'https://www.careers360.com/university/the-university-of-chicago-chicago/quantum-computer-systems-design-i-intro-quantum-computation-and-programming-certification-course'
  },
  {
    Title: 'Quantum Computing for Your Classroom 10-12',
    Author: 'By The University of British Columbia, Vancouver ',
    URL: 'https://www.careers360.com/university/the-university-of-british-columbia-vancouver/quantum-computing-for-your-classroom-10-12-certification-course'
  },
  {
    Title: 'QC101 Quantum Computing & Intro to Quantum Machine Learning',
    Author: 'Udemy',
    URL: 'https://www.careers360.com/courses-certifications/udemy-qc101-quantum-computing-intro-quantum-machine-learning-course'
  },
  {
    Title: 'QC051: Math Prerequisites for QC - Content moved to QC101',
    Author: 'Udemy',
    URL: 'https://www.careers360.com/courses-certifications/udemy-qc051-math-prerequisites-for-quantum-computing-course'
  },
  {
    Title: 'The Complete Quantum Computing Course',
    Author: 'Udemy',
    URL: 'https://www.careers360.com/courses-certifications/udemy-complete-quantum-computing-course'
  },
  {
    Title: 'Quantum Computing',
    Author: 'By Prof. Debabrata Goswami   |   IIT Kanpur',
    URL: 'https://www.classcentral.com/course/swayam-quantum-computing-7973'
  },
  {
    Title: 'Basics of quantum information',
    Author: 'Created by John Watrous',
    URL: 'https://learning.quantum-computing.ibm.com/course/basics-of-quantum-information'
  },
  {
    Title: 'QUANTUM COMPUTING FUNDAMENTALS',
    Author: 'BY MIT xPRO ',
    URL: 'https://learn-xpro.mit.edu/quantum-computing'
  },
  {
    Title: 'Quantum Computing',
    Author: 'Microsoft,Alphabet X',
    URL: 'https://brilliant.org/courses/quantum-computing/'
  },
  {
    Title: 'Introduction to Quantum Computing',
    Author: 'Udemy',
    URL: 'https://www.udemy.com/course/introduction-to-quantum-computing/'
  },
  {
    Title: 'Quantum Computing A-Z',
    Author: 'Udemy',
    URL: 'https://www.udemy.com/course/quantum-computing-az/'
  },
  {
    Title: 'Quantum Computing for Beginners',
    Author: 'Udemy',
    URL: 'https://www.udemy.com/course/quantum-computing-quantum-physics/'
  }
];
  
  export default CoursesData;
  