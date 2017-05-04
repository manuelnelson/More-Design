export interface Slide{
    prev: boolean;
    next: boolean;
    image:{
        url: string;
    };
    active: boolean;
    left: boolean;
    right: boolean;
}
