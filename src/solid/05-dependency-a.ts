import { PostService } from "./05-dependency-b";
import {
	ApiPostService,
	JsonDatabaseService,
	LocalDataBaseService,
} from "./05-dependency-c";

// Main
(async () => {
	const localDBSrv1 = new LocalDataBaseService();
	const localDBSrv2 = new JsonDatabaseService();
	const localDBSrv3 = new ApiPostService(
		"https://jsonplaceholder.typicode.com/posts"
	);
	const postService = new PostService(localDBSrv3);

	const posts = await postService.getPosts();

	console.log({ posts });
})();
