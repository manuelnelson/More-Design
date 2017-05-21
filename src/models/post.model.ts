import {PostCategory} from './postCategory.model';
import {Image} from './image.model';
export interface Post{
    title: string;
    author: {
        name: {
            first: string;
            last: string;
        };
    }
    slug: string;
    images: Array<Image>;
    date: Date;
    categories: Array<PostCategory>;
    hide: Boolean;
}
