import { PostsProvider } from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor(private postsProvider: PostsProvider) {
        this.postsProvider = postsProvider
    }

    async getPosts() {
        this.posts = await this.postsProvider.getPosts();
        return this.posts;
    }
}