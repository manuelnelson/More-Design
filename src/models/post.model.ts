import {PostCategory} from './postCategory.model';
export interface Post{
    title: string;
    slug: string;
    image: {
        url:string;
    };
    date: Date;
    categories: Array<PostCategory>;
    hide: Boolean;
}
