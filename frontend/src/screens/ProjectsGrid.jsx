import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../context/user.context'
import axios from "../config/axios"
import { useNavigate } from 'react-router-dom'
import BackgroundVideo from '../components/other/BackgroundVideo'

const ProjectGrid = () => {
    const { user } = useContext(UserContext)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [projectName, setProjectName] = useState('')
    const [projects, setProjects] = useState([])

    const navigate = useNavigate()

    function createProject(e) {
        e.preventDefault()
        axios.post('/projects/create', {
            name: projectName,
        })
            .then((res) => {
                console.log(res)
                setIsModalOpen(false)
                // Refresh projects after creation
                fetchProjects()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const fetchProjects = () => {
        axios.get('/projects/all').then((res) => {
            setProjects(res.data.projects)
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchProjects()
    }, [])

    return (
        <div className="relative min-h-screen bg-gray-900 text-white">
            <BackgroundVideo />
            <div className="relative z-10 p-8 max-w-7xl mx-auto">
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
                            onClick={() => {
                                navigate(`/project`, {
                                    state: { project }
                                })
                            }}
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

                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-gray-800 p-6 rounded-md shadow-md w-full max-w-md">
                            <h2 className="text-xl mb-4 text-white">Create New Project</h2>
                            <form onSubmit={createProject}>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Project Name</label>
                                    <input
                                        onChange={(e) => setProjectName(e.target.value)}
                                        value={projectName}
                                        type="text" 
                                        className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white" 
                                        required 
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <button 
                                        type="button" 
                                        className="mr-2 px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded-md text-white"
                                        onClick={() => setIsModalOpen(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button 
                                        type="submit" 
                                        className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md"
                                    >
                                        Create
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProjectGrid;