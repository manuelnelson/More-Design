export interface Slide{
    prev: boolean;
    next: boolean;
    name: { type: String, required: true },
    subTitle: string,
    title: string,
    image: {
        url: string
    },
    active: boolean;
    left: boolean;
    right: boolean;
}
