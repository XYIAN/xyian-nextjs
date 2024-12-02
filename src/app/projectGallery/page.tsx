'use client';
import { ProjectDisplay } from './components/ProjectDisplay';
import { MenuModel } from '@/common/Menu/MenuModel';
import { PROJECT_LIST } from './constants/projectList';
import ProjectList from './components/ProjectList';

export default function ProjectGallery() {
    return (
        <main>
            <MenuModel />
            <div
                className=' flex flex-column justify-content-center w-full align-items-center '
                style={{ height: '98vh !important' }}
            >
                <h1 className='mb-6 titleProjectGallery'>Project Gallery</h1>
                <div>
                    <ProjectDisplay projects={PROJECT_LIST} />
                </div>
            </div>
            {/* <div>
                <ProjectList projects={PROJECT_LIST} />
            </div> */}
            <div
                className='flex w-full p-2 justify-content-center align-items-center text-center absolute'
                style={{ transform: 'translateY(-25vh)' }}
            >
                <p
                    style={{ color: 'white', padding: '0 1.2rem' }}
                    className='bold'
                >
                    Project examples, descriptions, existing products and
                    completed client projects coming soon as we seek approval
                    from clients and remove sensitive data & functions.
                </p>
            </div>
        </main>
    );
}
