import { useState } from "react";

const initialPosts = [
  {
    id: 1,
    title: "How Xu Xin Inspired My Style",
    content: "His wide-angle forehand changed my footwork training.",
    likes: 0,
    dislikes: 0,
    removable: false,
  },
  {
    id: 2,
    title: "Favorite Match",
    content: "The Xu Xin vs Fan Zhendong rally is legendary. I've rarely seen a match could be lke this...",
    likes: 0,
    dislikes: 0,
    removable: false,
  },
  {
    id: 3,
    title: "XuXin!!!!",
    content: "He is still playing in 2025! I wish I could see more of him playing!",
    likes: 0,
    dislikes: 0,
    removable: false,
  },
  {
    id: 4,
    title: "Xuperman's paddles",
    content: "The paddles from Xuperman are so good in terms of quality! It also didn't cost me much to afford.",
    likes: 0,
    dislikes: 0,
    removable: false,
  },
];

export default function Community() {
  const [posts, setPosts] = useState(initialPosts);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState([]);

  function handleReaction(id, field) {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, [field]: post[field] + 1 } : post
      )
    );
  }

  function handleAddPost(e) {
    e.preventDefault();

    const issues = [];
    if (!title.trim()){
      issues.push("Title cannot be empty.");
    } 
    if (!content.trim()){
      issues.push("Content cannot be empty.");
    } 
    if (content.trim().length < 10){
      issues.push("Content must be at least 10 characters long.");
    }
    if (issues.length) {
      setErrors(issues);
      return;
    }

    const newPost = {
      id: Date.now(),
      title: title.trim(),
      content: content.trim(),
      likes: 0,
      dislikes: 0,
      removable: true,
    };

    setPosts((prev) => [...prev, newPost]);
    
    setTitle("");
    setContent("");
    setErrors([]);
  }

  return (
    <div id="community">
      <h2>Community</h2>

      <form className="new-post-form" onSubmit={handleAddPost}>
        <h3>Share Your Xu Xin Story</h3>
        <input
          type="text"
          placeholder="Post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="What would you like to share?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
        />
        
        {errors.length > 0 && (
          <ul className="form-errors">
            {errors.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        <button type="submit">Add Post</button>
      </form>

      <div className="posts-block">
        {posts.map((post) => (
          <article key={post.id} className="post">
            <h3>{post.title}</h3>
            <p className="content">{post.content}</p>
            <div className="reactions">
              <button onClick={() => handleReaction(post.id, "likes")} id="like-btn">
                Like ({post.likes})
              </button>
              <button onClick={() => handleReaction(post.id, "dislikes")} id="dislike-btn">
                Dislike ({post.dislikes})
              </button>
              {post.removable && (
                <button
                  className="delete-btn"
                  onClick={() => {
                    const confirmed = window.confirm("Delete this post?");
                    if (confirmed) {
                      setPosts((prev) => prev.filter((p) => p.id !== post.id));
                    }
                  }}
                >
                  Delete
                </button>
              )}
            </div>
          </article>
        ))}
      </div>

    </div>
  );
}
