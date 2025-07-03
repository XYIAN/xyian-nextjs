import ProjectGrid from '@/components/projects/ProjectGrid';

/**
 * ProjectGallery page is the main entry for the project gallery, rendering the ProjectGrid component.
 *
 * @component
 */
export default function ProjectGallery() {
    return (
        <main className='min-h-screen py-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                <ProjectGrid />
            </div>
        </main>
    );
}
