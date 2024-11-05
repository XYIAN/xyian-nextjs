'use client';
import { ProjectDisplay } from './components/ProjectDisplay';
import { MenuModel } from '@/common/Menu/MenuModel';
import { PROJECT_LIST } from './constants/projectList';
import ProjectList from './components/ProjectList';

export default function ProjectGallery() {
    return (
        <main>
            <MenuModel />
            <div className='flex flex-column justify-content-center w-full align-items-center w-screen h-screen'>
                <h1 className='mb-6'>Project Gallery</h1>
                <div>
                    <ProjectDisplay projects={PROJECT_LIST} />
                </div>
            </div>
            <div>
                <ProjectList projects={PROJECT_LIST} />
            </div>
        </main>
    );
}
