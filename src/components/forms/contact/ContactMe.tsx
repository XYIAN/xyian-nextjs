'use client';
import { Panel } from 'primereact/panel';
// import { XyInputText } from '@/components/Inputs/XyInputText';
import { useForm } from 'react-hook-form';
// import { XyButton } from '@/components/XyButton';
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
            {/* <form onSubmit={handleSubmit(onSubmit)} id='contact-form'>
                <div className='flex w-full flex-column align-content-center justify-content-center'>
                    <div>
                        <XyInputText
                            control={control}
                            errors={errors}
                            name='firstName'
                            label='First Name'
                            rules={{ required: true }}
                            required
                        />
                    </div>
                    <div>
                        <XyInputText
                            control={control}
                            errors={errors}
                            name='lastName'
                            label='Last Name:'
                        />
                    </div>
                </div>
                <div className='flex justify-content-center align-items-center'>
                    <XyButton
                        label='Reset Form'
                        type='reset'
                        onClick={() => reset()}
                    />
                    <XyButton type='submit' label='Submit' />
                </div>
            </form> */}
        </Panel>
    );
};
