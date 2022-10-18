(()=>{
    import axios from 'axios';

    class HttpClient {
        async get(url: string) {
            const {data, status} = await axios.get(url);
            return {data, status};
        }
    }

    class TodoService { 

        constructor(private http: HttpClient){
            this.http = http;
        }

        async getTodoItems() {
            const { data } = await this.http.get('https://jsonplaceholder.typicode.com/todos/');
            return data;
        }
    }


    class PostService {
        constructor(private http: HttpClient){
            this.http = http;
        }

        async getPosts() {
            const { data } = await this.http.get('https://jsonplaceholder.typicode.com/posts');
            return data;
        }
    }


    class PhotosService {
        constructor(private http: HttpClient){
            this.http = http;
        }

        async getPhotos() {
            const { data } = await this.http.get('https://jsonplaceholder.typicode.com/photos');
            return data;
        }

    }

    const main = async()=>{
        const http = new HttpClient();
        const todoService = new TodoService(http);
        const postService = new PostService(http);
        const photosService = new PhotosService(http);
    
        const todos = await todoService.getTodoItems();
        const posts = await postService.getPosts();
        const photos = await photosService.getPhotos();
        
        
        console.log({ todos, posts, photos });
    }

    main();
})();
