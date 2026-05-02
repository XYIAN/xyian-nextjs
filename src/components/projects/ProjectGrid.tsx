'use client';

import { useState, useEffect, useRef } from 'react';
import { PROJECT_LIST } from '@/constants/projectList';
import ProjectCard from './ProjectCard';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { FloatLabel } from 'primereact/floatlabel';
import { Panel, PanelHeaderTemplateOptions } from 'primereact/panel';

/**
 * ProjectGrid component displays a responsive, animated grid of ProjectCard components.
 * Supports filtering, searching, and smooth transitions for a modern project gallery experience.
 *
 * @component
 */
const ProjectGrid = () => {
    const [filteredProjects, setFilteredProjects] = useState(PROJECT_LIST);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        null
    );
    const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation after component mounts
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    useEffect(() => {
        let filtered = PROJECT_LIST;

        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter(
                (project) =>
                    project.title
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    project.description
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    project.technologies.some((tech) =>
                        tech.toLowerCase().includes(searchTerm.toLowerCase())
                    )
            );
        }

        // Filter by category
        if (selectedCategory) {
            filtered = filtered.filter(
                (project) => project.category === selectedCategory
            );
        }

        // Filter by status
        if (selectedStatus) {
            filtered = filtered.filter(
                (project) => project.status === selectedStatus
            );
        }

        setFilteredProjects(filtered);
    }, [searchTerm, selectedCategory, selectedStatus]);

    const categories = [
        { label: 'All Categories', value: null },
        { label: 'Web Development', value: 'web' },
        { label: 'Mobile Apps', value: 'mobile' },
        { label: 'AI & Machine Learning', value: 'ai' },
        { label: 'Portfolio', value: 'portfolio' },
        { label: 'Business', value: 'business' },
    ];

    const statuses = [
        { label: 'All Status', value: null },
        { label: 'Completed', value: 'completed' },
        { label: 'In Progress', value: 'in-progress' },
        { label: 'Coming Soon', value: 'coming-soon' },
    ];

    const clearFilters = () => {
        setSearchTerm('');
        setSelectedCategory(null);
        setSelectedStatus(null);
    };

    const headerTemplate = (options: PanelHeaderTemplateOptions) => {
        const className = `${options.className} justify-content-space-between`;

        return (
            <div className={className}>
                <div className='flex align-items-center gap-2'>
                    <span className='font-bold text-white'>Filter List</span>
                </div>
                <div>{options.togglerElement}</div>
            </div>
        );
    };

    return (
        <div
            className={`transition-all duration-1000 ease-out ${
                isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
            }`}
        >
            {/* Header */}
            <div className='text-center mb-12'>
                <h1 className='text-4xl font-bold text-white mb-4'>
                    Our Projects
                </h1>
                <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
                    Explore our diverse portfolio of innovative projects, from
                    web applications to AI solutions
                </p>
            </div>

            {/* Filter Panel */}
            <div className='mb-8'>
                <Panel
                    headerTemplate={headerTemplate}
                    toggleable
                    collapsed={true}
                    className='filter-panel'
                >
                    <div className='p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm'>
                        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 items-center'>
                            <div className='w-full'>
                                <FloatLabel className='w-full'>
                                    <InputText
                                        id='search'
                                        value={searchTerm}
                                        onChange={(e) =>
                                            setSearchTerm(e.target.value)
                                        }
                                        className='w-full'
                                    />
                                    <label htmlFor='search'>
                                        Search projects
                                    </label>
                                </FloatLabel>
                            </div>
                            <div className='w-full'>
                                <label className='block text-white text-sm font-medium mb-2'>
                                    Category
                                </label>
                                <Dropdown
                                    value={selectedCategory}
                                    onChange={(e) =>
                                        setSelectedCategory(e.value)
                                    }
                                    options={categories}
                                    optionLabel='label'
                                    optionValue='value'
                                    placeholder='Select category'
                                    className='w-full'
                                />
                            </div>
                            <div className='w-full'>
                                <label className='block text-white text-sm font-medium mb-2'>
                                    Status
                                </label>
                                <Dropdown
                                    value={selectedStatus}
                                    onChange={(e) => setSelectedStatus(e.value)}
                                    options={statuses}
                                    optionLabel='label'
                                    optionValue='value'
                                    placeholder='Select status'
                                    className='w-full'
                                />
                            </div>
                            <div className='w-full'>
                                <Button
                                    label='Clear Filters'
                                    icon='pi pi-refresh'
                                    className='p-button-outlined w-full'
                                    onClick={clearFilters}
                                    loading={false}
                                />
                            </div>
                        </div>
                    </div>
                </Panel>
            </div>

            {/* Results count */}
            <div className='mb-6 text-center'>
                <p className='text-gray-400'>
                    Showing {filteredProjects.length} of {PROJECT_LIST.length}{' '}
                    projects
                </p>
            </div>

            {/* Projects Grid */}
            {filteredProjects.length > 0 ? (
                <div className='projects-grid'>
                    <div className='grid-container'>
                        {filteredProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`w-full transition-all duration-700 ease-out ${
                                    isVisible
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-10'
                                }`}
                                style={{
                                    animationDelay: `${index * 150}ms`,
                                }}
                            >
                                <ProjectCard project={project} index={index} />
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className='text-center py-12'>
                    <div className='text-gray-400 text-lg mb-4'>
                        No projects found
                    </div>
                    <Button
                        label='Clear Filters'
                        icon='pi pi-refresh'
                        className='p-button-outlined'
                        onClick={clearFilters}
                    />
                </div>
            )}
        </div>
    );
};

export default ProjectGrid;
