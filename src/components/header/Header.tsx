import { useEffect, useState, ReactNode } from 'react';

interface HeaderProps {
    ExamplePropName: string;
}

export const Header = ({ ExamplePropName }: HeaderProps) => {
    const [exampleState, setExampleState] = useState<string>(ExamplePropName);
    useEffect(() => {
        console.warn('Example State Changed to:', exampleState);
    }, [exampleState]); //leave dep array empty if it should only run once on mount

    return <div> Starter code for Header</div>;
};
