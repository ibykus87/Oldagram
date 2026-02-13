const posts = [
	{
		name: 'Vincent van Gogh',
		username: 'vincey1853',
		location: 'Zundert, Netherlands',
		avatar: 'images/avatar-vangogh.jpg',
		post: 'images/post-vangogh.jpg',
		comment: 'just took a few mushrooms lol',
		likes: 21,
	},
	{
		name: 'Gustave Courbet',
		username: 'gus1819',
		location: 'Ornans, France',
		avatar: 'images/avatar-courbet.jpg',
		post: 'images/post-courbet.jpg',
		comment: "i'm feelin a bit stressed tbh",
		likes: 4,
	},
	{
		name: 'Joseph Ducreux',
		username: 'jd1735',
		location: 'Paris, France',
		avatar: 'images/avatar-ducreux.jpg',
		post: 'images/post-ducreux.jpg',
		comment:
			'gm friends! which coin are YOU stacking up today?? post below and WAGMI!',
		likes: 152,
	},
];

const postAvatar = document.getElementById('post-avatar');
const postName = document.getElementById('post-name');
const postLocation = document.getElementById('post-location');
const postImage = document.getElementById('post-image');
const postComment = document.getElementById('post-comment');
const postLikes = document.getElementById('post-likes');
const postUsername = document.getElementById('username');
const post = document.getElementById('posts');

function renderPost(posts) {
	for (let i = 0; i < posts.length; i++) {
		post.innerHTML += `<div class="posts">
                                <div class="post-header">
                                    <img id="post-avatar" class="avatar" src="${posts[i].avatar}">
                                    <div class="post-user-info">
                                        <span id="post-name" class="name">${posts[i].name}</span>
                                        <span id="post-location" class="location">${posts[i].location}</span>
                                    </div>
                                </div>
                                <img id="post-image" class="post-image" src="${posts[i].post}" alt="${posts[i].name}'s post">                       
                                <div class="post-actions">
                                    <a href=""><img class="like icon" src="images/icon-heart.png" alt="heart icon"></a>
                                    <a href=""><img class="comment icon" src="images/icon-comment.png" alt="comment icon"></a>
                                    <a href=""><img class="share icon" src="images/icon-dm.png" alt="share icon"></a>
                                </div>
                                <div class="post-likes">
                                    <span id="post-likes-count">${posts[i].likes} likes</span>
                                </div>
                                <div class="post-comments">
                                    <span class="username" id="username">${posts[i].username}</span> <span id="post-comment" class="comments">${posts[i].comment}</span>
                                </div>
                            </div>`;
	}
}

renderPost(posts);
