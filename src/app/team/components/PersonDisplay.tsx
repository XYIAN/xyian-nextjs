import { MemberDetail } from '@/types';
import { Image } from 'primereact/image';
import { Card } from 'primereact/card';
import '../../../styles/displayCard.scss';
import '../../../styles/displayImage.scss';
import '../../../styles/_teamPage.scss';
interface PersonDisplayProps {
    memberDetails: MemberDetail;
}

export const PersonDisplay = ({ memberDetails }: PersonDisplayProps) => {
    const { name, imageSrc, position, bio } = memberDetails;
    const CardHeaderImage = () => {
        return (
            <div className='flex justify-content-center align-content-center'>
                <Image
                    className='displayImage'
                    alt={name}
                    src={imageSrc}
                    //imageStyle={{ maxWidth: '100%', objectFit: 'cover' }}
                />
            </div>
        );
    };
    return (
        <Card
            header={<CardHeaderImage />}
            title={<h3 className='p-0 m-0'>{name}</h3>}
            subTitle={position}
            className='w-full m-3 p-3 custom-card'
        >
            <p className=' pb-1'>{bio}</p>
        </Card>
    );
};
