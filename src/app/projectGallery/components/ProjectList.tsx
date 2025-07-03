import { ProjectModel } from '@/types';
import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import Image from 'next/image';

import { Skeleton } from 'primereact/skeleton';

interface ProjectListProps {
    projects: ProjectModel[];
}

interface AccordionHeaderProps {
    title: string;
    iconUrl: string;
}

const AccordionHeader = ({ title, iconUrl }: AccordionHeaderProps) => {
    return (
        <div className='flex align-items-center gap-3 p-2'>
            {iconUrl && (
                <Image
                    src={iconUrl}
                    alt={title}
                    width={48}
                    height={48}
                    className='border-circle'
                />
            )}
            <h5 className='m-0'>{title}</h5>
        </div>
    );
};

interface ProjectListItemProps {
    imgSrc: string;
    alt: string;
    width?: number;
    height?: number;
}

const ProjectListItem = ({
    imgSrc,
    alt,
    width = 200,
    height = 120,
}: ProjectListItemProps) => {
    const [loading, setLoading] = useState(true);
    return (
        <div style={{ position: 'relative', width, height }}>
            {loading && (
                <Skeleton
                    width={width + 'px'}
                    height={height + 'px'}
                    borderRadius='12px'
                />
            )}
            <Image
                src={imgSrc}
                alt={alt}
                width={width}
                height={height}
                style={{
                    display: loading ? 'none' : 'block',
                    borderRadius: 12,
                }}
                onLoad={() => setLoading(false)}
            />
        </div>
    );
};

const ProjectList = ({ projects }: ProjectListProps) => {
    const fillerImage = require('../../../../public/Primary.png');

    return (
        <div className='flex justify-content-center'>
            <div style={{ width: '80%' }}>
                <Accordion
                    className='shadow-2 border-round'
                    multiple
                    //transitionOptions={{ easing: 'ease', duration: 300 }}
                >
                    {projects.map((project) => {
                        const imageSource = project?.imgSrc
                            ? project.imgSrc
                            : fillerImage;
                        return (
                            <AccordionTab
                                key={project.id}
                                className=''
                                header={
                                    <AccordionHeader
                                        title={project.title}
                                        iconUrl={imageSource}
                                    />
                                }
                            >
                                <div className='p-3'>
                                    <div className='flex flex-column md:flex-row align-items-start gap-4'>
                                        <ProjectListItem
                                            imgSrc={imageSource}
                                            alt={project.title}
                                        />
                                        <div>
                                            <h6 className='mb-2'>
                                                {project.title}
                                            </h6>
                                            <p className='text-justify'>
                                                {project.description}
                                            </p>
                                            <a
                                                href={project.url}
                                                className='text-primary font-medium'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                View Project
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </AccordionTab>
                        );
                    })}
                </Accordion>
            </div>
        </div>
    );
};

export default ProjectList;
