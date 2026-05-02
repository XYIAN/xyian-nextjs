'use client';
import { Panel } from 'primereact/panel';
import { useForm } from 'react-hook-form';

export interface ContactModel {
    firstName: string;
    lastName: string;
    phoneNumber: number;
    email: string;
    message: string;
}

export const ContactMe = () => {
    const {
        control,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm<ContactModel>();

    const onSubmit = (data: ContactModel) => {
        console.log(data);
    };

    return (
        <Panel
            header='Contact Form'
            className='w-full justify-content-center'
            toggleable
        >
            <p>Contact form coming soon.</p>
        </Panel>
    );
};
