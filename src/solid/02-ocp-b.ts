// Hay que agregar la dependencia de axios ```yarn add axios```
import { HttpClient } from "./02-ocp-c";

export class TodoService {
	constructor(private httpClient: HttpClient) {}

	async getTodoItems() {
		const { data, status } = await this.httpClient.get(
			"https://jsonplaceholder.typicode.com/todos"
		);
		return { data, status };
	}
}

export class PostService {
	constructor(private httpClient: HttpClient) {}

	async getPosts() {
		const { data, status } = await this.httpClient.get(
			"https://jsonplaceholder.typicode.com/posts"
		);
		return { data, status };
	}
}

export class PhotosService {
	constructor(private httpClient: HttpClient) {}

	async getPhotos() {
		const { data, status } = await this.httpClient.get(
			"https://jsonplaceholder.typicode.com/photos"
		);
		return { data, status };
	}
}
