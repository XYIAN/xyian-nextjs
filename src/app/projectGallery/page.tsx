'use client';
import ProjectGrid from '@/components/projects/ProjectGrid';
import { XYSToTop } from '@/components';

const ProjectGallery = () => {
    return (
        <main>
            <div className='pt-6 px-4'>
                <ProjectGrid />
            </div>
            <XYSToTop />
        </main>
    );
};

export default ProjectGallery;
