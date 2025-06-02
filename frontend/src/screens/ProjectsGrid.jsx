import React, { useContext, useState } from 'react';
import { UserContext } from '../context/user.context';
import { useNavigate } from 'react-router-dom';

const ProjectsGrid = () => {
  const { user } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  // ... your existing createProject and useEffect logic

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Your Projects</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white"
        >
          New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div 
            key={project._id}
            onClick={() => navigate('/project', { state: { project } })}
            className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all cursor-pointer hover:scale-[1.02]"
          >
            <h2 className="text-xl font-semibold text-white mb-2">{project.name}</h2>
            <div className="flex items-center text-gray-400">
              <i className="ri-user-line mr-2"></i>
              <span>{project.users.length} Collaborators</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal remains the same */}
    </div>
  );
};

export default ProjectsGrid;