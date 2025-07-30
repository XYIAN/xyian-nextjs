'use client';

import { useState } from 'react';
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import { Image } from 'primereact/image';
import { Skeleton } from 'primereact/skeleton';
import { useRouter } from 'next/navigation';
import { ProjectModel } from '@/types/projectGalleryTypes';

interface ProjectCardProps {
    project: ProjectModel;
    index: number;
}

/**
 * ProjectCard component displays individual project information in a modern card layout.
 * Features hover effects, image preview, technology tags, and smooth animations.
 *
 * @component
 * @param {ProjectModel} project - The project data to display
 * @param {number} index - The index of the card for animation timing
 */
const ProjectCard = ({ project, index }: ProjectCardProps) => {
    const [imageLoading, setImageLoading] = useState<boolean>(true);
    const [imageError, setImageError] = useState<boolean>(false);
    const router = useRouter();

    const handleCardClick = (): void => {
        const projectSlug = project.title.toLowerCase().replace(/\s+/g, '-');
        router.push(`/projectGallery/${projectSlug}`);
    };

    const getStatusSeverity = (
        status: string
    ): 'success' | 'warning' | 'info' | 'secondary' => {
        switch (status) {
            case 'completed':
                return 'success';
            case 'in-progress':
                return 'warning';
            case 'coming-soon':
                return 'info';
            default:
                return 'secondary';
        }
    };

    const getStatusLabel = (status: string): string => {
        switch (status) {
            case 'completed':
                return 'Completed';
            case 'in-progress':
                return 'In Progress';
            case 'coming-soon':
                return 'Coming Soon';
            default:
                return status;
        }
    };

    const header = (
        <div
            className='relative overflow-hidden rounded-t-lg cursor-pointer w-full h-64'
            onClick={handleCardClick}
        >
            {imageLoading && (
                <div className='w-full h-64 bg-gray-700 flex items-center justify-center'>
                    <Skeleton width='100%' height='100%' />
                </div>
            )}
            {!imageError && (
                <Image
                    src={project.imgSrc || '/svg-logos/XYIAN_Primary.svg'}
                    alt={project.title}
                    width='100%'
                    height='100%'
                    preview
                    className={`w-full h-64 object-contain transition-opacity duration-300 ${
                        imageLoading ? 'opacity-0' : 'opacity-100'
                    }`}
                    onLoad={() => setImageLoading(false)}
                    onError={() => {
                        setImageError(true);
                        setImageLoading(false);
                    }}
                />
            )}
            {imageError && (
                <div className='w-full h-64 bg-gray-700 flex items-center justify-center'>
                    <div className='text-gray-400 text-center'>
                        <i className='pi pi-image text-4xl mb-2'></i>
                        <p>Image not available</p>
                    </div>
                </div>
            )}
            <div className='absolute top-2 right-2 z-30'>
                <Tag
                    value={getStatusLabel(project.status)}
                    severity={getStatusSeverity(project.status)}
                    className='text-xs'
                />
            </div>
        </div>
    );

    return (
        <Card
            header={header}
            className='project-card cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl'
            onClick={handleCardClick}
        >
            {/* Title and Category */}
            <div className='mb-2'>
                <h3 className='text-lg font-bold text-white mb-1'>
                    {project.title}
                </h3>
                <p className='text-gray-400 text-sm capitalize'>
                    {project.category}
                </p>
            </div>

            {/* Description */}
            <p className='text-gray-300 text-sm mb-3 line-clamp-2'>
                {project.description}
            </p>

            {/* Technologies */}
            <div className='flex flex-wrap gap-2 mb-3'>
                {project.technologies
                    .slice(0, 3)
                    .map((tech: string, techIndex: number) => (
                        <Tag
                            key={techIndex}
                            value={tech}
                            severity='secondary'
                            className='text-xs'
                        />
                    ))}
                {project.technologies.length > 3 && (
                    <Tag
                        value={`+${project.technologies.length - 3} more`}
                        severity='info'
                        className='text-xs'
                    />
                )}
            </div>

            {/* Features */}
            {project.features && project.features.length > 0 && (
                <div>
                    <p className='text-gray-400 text-xs mb-1'>Key Features:</p>
                    <ul className='text-gray-300 text-xs space-y-1'>
                        {project.features
                            .slice(0, 2)
                            .map((feature: string, featureIndex: number) => (
                                <li
                                    key={featureIndex}
                                    className='flex items-center gap-2'
                                >
                                    <i className='pi pi-check text-green-400 text-xs'></i>
                                    {feature}
                                </li>
                            ))}
                        {project.features.length > 2 && (
                            <li className='text-gray-400'>
                                +{project.features.length - 2} more features
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </Card>
    );
};

export default ProjectCard;
