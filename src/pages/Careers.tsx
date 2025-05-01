import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const jobRoles = [
  {
    title: 'Software Engineer',
    department: 'Engineering',
    location: 'Remote or In-Person',
    description: 'Lead the development of our AI-powered documentation generation platform.',
    responsibilities: [
      'Design and implement scalable backend systems',
      'Collaborate with AI/ML team on advanced documentation parsing',
      'Mentor junior engineers and drive technical innovation',
    ],
    requirements: [
      '5+ years of full-stack development experience',
      'Expertise in TypeScript, React, and Node.js',
      'Strong understanding of AI and machine learning concepts',
    ],
  },
  {
    title: 'Sales Rep',
    department: 'Research & Development',
    location: 'Remote or In-Person',
    description: 'Drive cutting-edge research in AI-powered documentation generation.',
    responsibilities: [
      'Develop advanced NLP models for code understanding',
      'Research novel approaches to automated documentation',
      'Collaborate with engineering team to implement research findings',
    ],
    requirements: [
      'PhD in Computer Science, Machine Learning, or related field',
      'Extensive experience in NLP and machine learning',
      'Published research in AI and documentation technologies',
    ],
  }
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <div className="relative py-36 bg-background">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-foreground mb-4">
              Join Devscribe and Shape the Future of API Documentation
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're building the next generation of AI-powered documentation tools. 
              If you're a top-tier engineer or sales rep, passionate about transforming how developers work, we want to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {jobRoles.map((role, index) => (
              <div 
                key={index} 
                className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
              >
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-primary mb-2">{role.title}</h2>
                  <div className="flex justify-between text-muted-foreground mb-4">
                    <span>{role.department}</span>
                    <span>{role.location}</span>
                  </div>
                  <p className="mb-4 text-foreground">{role.description}</p>
                  
                  <div className="mb-4">
                    <h3 className="font-semibold text-lg mb-2">Responsibilities:</h3>
                    <ul className="list-disc list-inside text-muted-foreground">
                      {role.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Requirements:</h3>
                    <ul className="list-disc list-inside text-muted-foreground">
                      {role.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <button 
                  className="mt-6 w-full bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Careers; 