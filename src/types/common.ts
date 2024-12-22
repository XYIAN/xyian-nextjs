export type XYType = 'primary' | 'secondary';
export interface XYCard {
    id: number;
    title: string;
    imgSrc: string | undefined;
    description: string;
    url: string;
}
export interface MenuItem {
    label: string;
    route: string;
}
