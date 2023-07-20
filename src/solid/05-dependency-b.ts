import { PostProvider } from "./05-dependency-c";

export interface Post {
	body: string;
	id: number;
	title: string;
	userId: number;
}

export class PostService {
	private posts: Post[] = [];

	constructor(private _localDBSrv: PostProvider) {}

	async getPosts() {
		this.posts = await this._localDBSrv.getPosts();

		return this.posts;
	}
}
