import React, { useState } from 'react';
import Image from 'next/image';
import { Skeleton } from 'primereact/skeleton';
import { ProjectModel } from '@/types';

interface ProjectDisplayProps {
    projects: ProjectModel[];
}

export const ProjectDisplay = ({ projects }: ProjectDisplayProps) => {
    const [loading, setLoading] = useState(true);
    return (
        <div className='gallery'>
            {projects.map((proj, index) => (
                <span
                    key={index}
                    style={{ '--i': index + 1 } as React.CSSProperties}
                >
                    <a
                        href={proj.url}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <div
                            style={{
                                position: 'relative',
                                width: 500,
                                height: 500,
                            }}
                        >
                            {loading && (
                                <Skeleton
                                    width={500 + 'px'}
                                    height={500 + 'px'}
                                    borderRadius='12px'
                                />
                            )}
                            <Image
                                src={proj.imgSrc ? proj.imgSrc : ''}
                                alt={`Gallery image ${index + 1}`}
                                width={500}
                                height={500}
                                style={{
                                    display: loading ? 'none' : 'block',
                                    borderRadius: 12,
                                }}
                                onLoad={() => setLoading(false)}
                            />
                        </div>
                        {/* <h1
						className='title-element absolute bottom-0 right-0 left-0 text-center'
						style={{
							transform: 'translateY(3.3rem)',
						}}
						>
						{proj.title || `Project ${index + 1}`}
					</h1> */}
                    </a>
                </span>
            ))}
        </div>
    );
};
