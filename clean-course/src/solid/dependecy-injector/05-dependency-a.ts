import { PostService } from './05-dependency-b';

import { JsonDatabaseService, LocalDataBaseService, httpService} from "./05-dependency-c";

// Main
(async () => {
    // const postsProvider =  new JsonDatabaseService();
    // const postsProvider =  new LocalDataBaseService();
    const postsProvider =  new httpService();
    const postService = new PostService(postsProvider);

    const posts = await postService.getPosts();

    console.log({ posts })


})();