import {Slide} from './slide.model'
export interface Project{
    title: string;
    images: Array<Slide>;
    date: Date;
    location: string;
    type: string;
}
