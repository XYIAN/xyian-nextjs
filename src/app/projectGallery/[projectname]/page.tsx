'use client';

import { PROJECT_LIST } from '@/constants/projectList';
import { Button } from 'primereact/button';
import { Chip } from 'primereact/chip';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ProjectModel } from '@/types';
import Link from 'next/link';
import Image from 'next/image';

/**
 * ProjectDetail page displays detailed information for a single project, including image, long description,
 * features, technologies, and action buttons. Uses dynamic routing and project data from projectList.ts.
 *
 * @component
 */
export default function ProjectDetail() {
    const params = useParams();
    const router = useRouter();
    const [project, setProject] = useState<ProjectModel | null>(null);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const projectName = (params.projectname as string).replace(/-/g, ' ');
        const foundProject = PROJECT_LIST.find(
            (p) => p.title.toLowerCase() === projectName.toLowerCase()
        );

        if (foundProject) {
            setProject(foundProject);
        } else {
            // Redirect to project gallery if project not found
            router.push('/projectGallery');
        }
    }, [params.projectname, router]);

    if (!project) {
        return (
            <div className='min-h-screen flex items-center justify-center'>
                <div className='text-center'>
                    <div className='text-gray-400 text-lg mb-4'>
                        Loading project...
                    </div>
                </div>
            </div>
        );
    }

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

    return (
        <main className='min-h-screen py-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-6xl mx-auto'>
                {/* Back Button */}
                <div className='mb-8'>
                    <Link href='/projectGallery'>
                        <Button
                            label='← Back to Projects'
                            icon='pi pi-arrow-left'
                            className='p-button-text'
                        />
                    </Link>
                </div>

                {/* Project Header */}
                <div className='mb-8'>
                    <div className='flex flex-wrap items-center gap-4 mb-4'>
                        <h1 className='text-4xl font-bold text-white'>
                            {project.title}
                        </h1>
                        <Chip
                            label={project.status.replace('-', ' ')}
                            className={`text-sm font-semibold ${
                                getStatusColor(project.status) === 'success'
                                    ? 'bg-green-500 text-white'
                                    : getStatusColor(project.status) ===
                                      'warning'
                                    ? 'bg-yellow-500 text-black'
                                    : 'bg-gray-500 text-white'
                            }`}
                        />
                        <Chip
                            label={project.category}
                            className={`text-sm font-semibold ${
                                getCategoryColor(project.category) === 'primary'
                                    ? 'bg-blue-500 text-white'
                                    : getCategoryColor(project.category) ===
                                      'info'
                                    ? 'bg-cyan-500 text-white'
                                    : getCategoryColor(project.category) ===
                                      'danger'
                                    ? 'bg-red-500 text-white'
                                    : getCategoryColor(project.category) ===
                                      'success'
                                    ? 'bg-green-500 text-white'
                                    : 'bg-orange-500 text-white'
                            }`}
                        />
                    </div>
                    <p className='text-gray-400 text-lg'>{project.year}</p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    {/* Project Image */}
                    <div className='order-2 lg:order-1'>
                        <Card className='overflow-hidden'>
                            <div className='relative w-full h-96'>
                                <Image
                                    src={
                                        project.imgSrc ||
                                        '/images/XYIAN_BANNER.png'
                                    }
                                    alt={project.title}
                                    fill
                                    className={`object-cover rounded-lg transition-opacity duration-300 ${
                                        imageLoaded
                                            ? 'opacity-100'
                                            : 'opacity-0'
                                    }`}
                                    onLoad={() => setImageLoaded(true)}
                                    onError={() => setImageLoaded(true)}
                                    sizes='(max-width: 1024px) 100vw, 50vw'
                                />
                                {!imageLoaded && (
                                    <div className='absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse rounded-lg' />
                                )}
                            </div>
                        </Card>
                    </div>

                    {/* Project Details */}
                    <div className='order-1 lg:order-2'>
                        <Card className='h-fit'>
                            <div className='space-y-6'>
                                {/* Description */}
                                <div>
                                    <h3 className='text-xl font-semibold text-white mb-3'>
                                        Description
                                    </h3>
                                    <p className='text-gray-300 leading-relaxed'>
                                        {project.longDetails}
                                    </p>
                                </div>

                                <Divider />

                                {/* Technologies */}
                                <div>
                                    <h3 className='text-xl font-semibold text-white mb-3'>
                                        Technologies
                                    </h3>
                                    <div className='flex flex-wrap gap-2'>
                                        {project.technologies.map(
                                            (tech, idx) => (
                                                <Chip
                                                    key={idx}
                                                    label={tech}
                                                    className='bg-gray-700 text-gray-200 border-gray-600'
                                                />
                                            )
                                        )}
                                    </div>
                                </div>

                                <Divider />

                                {/* Features */}
                                <div>
                                    <h3 className='text-xl font-semibold text-white mb-3'>
                                        Key Features
                                    </h3>
                                    <ul className='space-y-2'>
                                        {project.features.map(
                                            (feature, idx) => (
                                                <li
                                                    key={idx}
                                                    className='flex items-center text-gray-300'
                                                >
                                                    <span className='text-green-400 mr-2'>
                                                        •
                                                    </span>
                                                    {feature}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>

                                <Divider />

                                {/* Action Buttons */}
                                <div className='flex flex-wrap gap-4'>
                                    <Button
                                        label='Visit Site'
                                        icon='pi pi-external-link'
                                        className='p-button-primary'
                                        onClick={() =>
                                            window.open(project.url, '_blank')
                                        }
                                    />
                                    {project.githubUrl && (
                                        <Button
                                            label='View Code'
                                            icon='pi pi-github'
                                            className='p-button-outlined'
                                            onClick={() =>
                                                window.open(
                                                    project.githubUrl,
                                                    '_blank'
                                                )
                                            }
                                        />
                                    )}
                                    {project.demoUrl && (
                                        <Button
                                            label='Live Demo'
                                            icon='pi pi-play'
                                            className='p-button-outlined'
                                            onClick={() =>
                                                window.open(
                                                    project.demoUrl,
                                                    '_blank'
                                                )
                                            }
                                        />
                                    )}
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </main>
    );
}
