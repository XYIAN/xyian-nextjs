import { XYType } from './common';

export interface MemberDetail {
    id: number;
    name: string;
    imageSrc: string;
    position: string;
    bio: string;
}
export interface AboutUsModel {
    id: number;
    text: string;
    type: XYType;
    imageSrc : string;
}
