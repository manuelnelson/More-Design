import {Slide} from './slide.model'
export interface Project{
    title: string;
    images: Array<Slide>;
    thumbnailImage: {
        url:string;
    };
    date: Date;
    location: string;
    type: {
        name:string;
    };
}
