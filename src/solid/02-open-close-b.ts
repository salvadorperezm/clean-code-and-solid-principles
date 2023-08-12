import { HttpClient } from "./02-open-close-c";

export class TodoService {
  async getTodoItems() {
    return await HttpClient.get("https://jsonplaceholder.typicode.com/todos/");
  }
}

export class PostService {
  async getPosts() {
    return await HttpClient.get("https://jsonplaceholder.typicode.com/posts");
  }
}

export class PhotosService {
  async getPhotos() {
    return await HttpClient.get("https://jsonplaceholder.typicode.com/photos");
  }
}
