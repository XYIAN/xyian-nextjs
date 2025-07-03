'use client';

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Chip } from 'primereact/chip';
import { Ripple } from 'primereact/ripple';
import { ProjectModel } from '@/types';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

/**
 * ProjectCard component displays a single project as a styled card with image, title, description, status, category, and technologies.
 * Includes animated transitions, ripple effects, and links to detail and external pages.
 *
 * @component
 * @param {Object} props - Component props
 * @param {ProjectModel} props.project - The project data to display
 * @param {number} props.index - The index of the project in the grid (for animation delay)
 */
interface ProjectCardProps {
    project: ProjectModel;
    index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed':
                return 'success';
            case 'in-progress':
                return 'warning';
            case 'coming-soon':
                return 'secondary';
            default:
                return 'info';
        }
    };

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'web':
                return 'primary';
            case 'mobile':
                return 'info';
            case 'ai':
                return 'danger';
            case 'portfolio':
                return 'success';
            case 'business':
                return 'warning';
            default:
                return 'secondary';
        }
    };

    const header = (
        <div className='relative overflow-hidden rounded-t-lg'>
            <div
                className={`transition-all duration-500 ease-out ${
                    isHovered ? 'scale-110' : 'scale-100'
                }`}
            >
                <div className='relative w-full h-48'>
                    <Image
                        src={project.imgSrc || '/images/XYIAN_BANNER.png'}
                        alt={project.title}
                        fill
                        className={`object-cover transition-opacity duration-300 ${
                            imageLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                        onLoad={() => setImageLoaded(true)}
                        onError={() => setImageLoaded(true)}
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    />
                    {!imageLoaded && (
                        <div className='absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse' />
                    )}
                </div>
            </div>
            <div className='absolute top-4 right-4 flex gap-2'>
                <Chip
                    label={project.status.replace('-', ' ')}
                    className={`text-xs font-semibold ${
                        getStatusColor(project.status) === 'success'
                            ? 'bg-green-500 text-white'
                            : getStatusColor(project.status) === 'warning'
                            ? 'bg-yellow-500 text-black'
                            : 'bg-gray-500 text-white'
                    }`}
                />
                <Chip
                    label={project.category}
                    className={`text-xs font-semibold ${
                        getCategoryColor(project.category) === 'primary'
                            ? 'bg-blue-500 text-white'
                            : getCategoryColor(project.category) === 'info'
                            ? 'bg-cyan-500 text-white'
                            : getCategoryColor(project.category) === 'danger'
                            ? 'bg-red-500 text-white'
                            : getCategoryColor(project.category) === 'success'
                            ? 'bg-green-500 text-white'
                            : 'bg-orange-500 text-white'
                    }`}
                />
            </div>
            <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4'>
                <h3 className='text-white text-lg font-bold'>
                    {project.title}
                </h3>
                <p className='text-gray-300 text-sm'>{project.year}</p>
            </div>
        </div>
    );

    const footer = (
        <div className='flex justify-between items-center gap-2'>
            <Link
                href={`/projectGallery/${project.title
                    .toLowerCase()
                    .replace(/\s+/g, '-')}`}
            >
                <Button
                    label='View Details'
                    icon='pi pi-external-link'
                    className='p-button-text p-button-sm'
                    onClick={(e) => e.stopPropagation()}
                />
            </Link>
            <Button
                label='Visit Site'
                icon='pi pi-link'
                className='p-button-outlined p-button-sm'
                onClick={() => window.open(project.url, '_blank')}
            />
        </div>
    );

    return (
        <div
            className={`transform transition-all duration-500 ease-out ${
                isHovered ? 'scale-105 -translate-y-2' : 'scale-100'
            }`}
            style={{
                animationDelay: `${index * 100}ms`,
            }}
        >
            <Card
                header={header}
                footer={footer}
                className={`project-card cursor-pointer transition-all duration-300 ${
                    isHovered ? 'shadow-2xl' : 'shadow-lg'
                } hover:shadow-2xl`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className='p-ripple'>
                    <div className='mb-4'>
                        <p className='text-gray-300 text-sm leading-relaxed'>
                            {project.description}
                        </p>
                    </div>
                    <div className='mb-4'>
                        <h4 className='text-white font-semibold mb-2'>
                            Technologies
                        </h4>
                        <div className='flex flex-wrap gap-1'>
                            {project.technologies
                                .slice(0, 3)
                                .map((tech, idx) => (
                                    <Chip
                                        key={idx}
                                        label={tech}
                                        className='text-xs bg-gray-700 text-gray-200 border-gray-600'
                                    />
                                ))}
                            {project.technologies.length > 3 && (
                                <Chip
                                    label={`+${
                                        project.technologies.length - 3
                                    } more`}
                                    className='text-xs bg-gray-600 text-gray-300'
                                />
                            )}
                        </div>
                    </div>
                    <Ripple />
                </div>
            </Card>
        </div>
    );
};

export default ProjectCard;
