import React, { useState, useEffect } from 'react';
import { 
  Code, 
  ChevronRight, 
  Terminal, 
  Database, 
  Cpu, 
  Zap, 
  ArrowRight, 
  Github, 
  Twitter, 
  Menu, 
  X
} from 'lucide-react';
import Footer from '../Layouts/Footer';
import Navbar from '../Layouts/Navbar';



// Code Animation Component
const CodeAnimation = () => {
  return (
    <div className="bg-gray-900 rounded-lg p-4 shadow-lg border border-gray-700 font-mono text-sm text-gray-300 relative overflow-hidden">
      <div className="flex items-center mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="animate-pulse">
        <div className="text-blue-400">{"function automateTask() {"}</div>
        <div className="ml-4">{"const devinAI = new DevinAgent();"}</div>
        <div className="ml-4 text-gray-400">{"// Initialize the AI agent"}</div>
        <div className="ml-4 text-purple-400">{"await devinAI.loadContext(repository);"}</div>
        <div className="ml-4 text-green-400">{"const solution = await devinAI.solveTask({"}</div>
        <div className="ml-8 text-yellow-400">{"description: 'Fix authentication bug',"}</div>
        <div className="ml-8 text-yellow-400">{"priority: 'high',"}</div>
        <div className="ml-8 text-yellow-400">{"testCases: testSuite"}</div>
        <div className="ml-4 text-green-400">{"});"}</div>
        <div className="ml-4">{"return solution;"}</div>
        <div>{"}"}</div>
      </div>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-750 transition-all duration-300 border border-gray-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10">
      <div className="rounded-full bg-blue-600/20 w-12 h-12 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-blue-400" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

// Testimonial Component
const Testimonial = ({ content, author, position, company }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
      <p className="text-gray-300 mb-4 italic">"{content}"</p>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white font-semibold text-lg">
          {author.charAt(0)}
        </div>
        <div className="ml-3">
          <p className="text-white font-medium">{author}</p>
          <p className="text-gray-400 text-sm">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
};

// Main HomePage Component
const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className={`grid md:grid-cols-2 gap-8 items-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div>
            <div className="inline-block px-3 py-1 text-sm font-medium bg-blue-600/20 text-blue-400 rounded-full mb-4">
              Introducing Devin AI
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
              The First AI Software <span className="text-blue-500">Developer</span> Agent
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Devin understands your requirements, writes code, tests solutions, and collaborates with your team to ship software faster than ever before.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="px-6 py-3 bg-blue-600 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#" className="px-6 py-3 bg-gray-800 rounded-lg font-medium border border-gray-700 hover:bg-gray-700 transition-colors flex items-center">
                Watch Demo <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="animate-float">
              <CodeAnimation />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Devin AI?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Devin is more than just a coding assistant—it's a full-fledged AI developer that works alongside your team.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            icon={Code}
            title="Full-Stack Development"
            description="Devin can build entire applications from scratch, handling both frontend and backend tasks efficiently."
          />
          <FeatureCard 
            icon={Terminal}
            title="Autonomous Problem Solving"
            description="Identify and fix bugs in your codebase without constant human supervision or guidance."
          />
          <FeatureCard 
            icon={Database}
            title="Codebase Comprehension"
            description="Quickly understand and navigate complex codebases, even those with limited documentation."
          />
          <FeatureCard 
            icon={Cpu}
            title="Context-Aware Assistance"
            description="Maintains context across long sessions and understands the bigger picture of your project needs."
          />
          <FeatureCard 
            icon={Github}
            title="Version Control Integration"
            description="Seamlessly works with Git and other version control systems to manage code changes."
          />
          <FeatureCard 
            icon={Zap}
            title="Continuous Learning"
            description="Improves over time by learning from your team's feedback and coding patterns."
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-800/30 rounded-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How Devin Works</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From planning to execution, Devin handles the entire development lifecycle
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 rounded-full bg-blue-600/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-400">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Understand Requirements</h3>
            <p className="text-gray-300">
              Devin analyzes your project requirements and breaks them down into actionable tasks.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 rounded-full bg-blue-600/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-400">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Design & Develop</h3>
            <p className="text-gray-300">
              Creates architectural plans and writes clean, efficient code that follows best practices.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 rounded-full bg-blue-600/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-400">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Test & Refine</h3>
            <p className="text-gray-300">
              Automatically tests code, identifies issues, and improves the solution iteratively.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Developers Are Saying</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Devin is transforming how teams build software across industries
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Testimonial 
            content="Devin reduced our development time by 40%. It's like having an extra team member who never sleeps."
            author="Alex Morgan"
            position="CTO"
            company="TechFlow"
          />
          <Testimonial 
            content="The way Devin understands our codebase and adapts to our team's coding style is impressive. It feels like it's been working with us for years."
            author="Sarah Chen"
            position="Lead Developer"
            company="InnovateSoft"
          />
          <Testimonial 
            content="As a startup founder with limited dev resources, Devin has been a game-changer. We shipped our MVP in half the expected time."
            author="Ryan Garcia"
            position="Founder"
            company="LaunchPad"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your development process?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are shipping better code, faster with Devin AI.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Start Free Trial
            </a>
            <a href="#" className="px-8 py-3 bg-transparent border border-white rounded-lg font-medium hover:bg-white/10 transition-colors">
              Schedule Demo
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
   <Footer/>

      {/* Add custom keyframes for floating animation */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HomePage;