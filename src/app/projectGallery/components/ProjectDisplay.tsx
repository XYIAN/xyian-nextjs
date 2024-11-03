import { ProjectModel } from '@/common';
import Image from 'next/image';
interface ProjectDisplayProps {
    projects: ProjectModel[];
}

export const ProjectDisplay = ({ projects }: ProjectDisplayProps) => {
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
                        <Image
                            src={proj.imgSrc ? proj.imgSrc : ''}
                            alt={`Gallery image ${index + 1}`}
                            width={500}
                            height={500}
                        />
                    </a>
                </span>
            ))}
        </div>
    );
};
