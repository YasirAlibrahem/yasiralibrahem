import './App.css';
import {useState, useEffect} from 'react';
import { marked } from 'marked';
import post1 from './posts/2024-01-06.md';

// BlogPosts component
const BlogPosts = () => {
  // State for our list of posts
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // list of posts
    const postList = [post1];

    // function to fetch posts and convert Markdown to HTML
    const convertPostsToHTML = async (postUrl) => {
      const response = await fetch(postUrl);
      const text = await response.text();

      // split text into lines
      const lines = text.split('\n');

      // get the title (first line), date (second line), and content (everything after 3rd line)
      const title = lines[0];
      const date = lines[1];
      const body = lines.slice(3).join('\n');

      const html = marked(body);
      return { title, date, content: html };
    }; 

    // convert posts to HTML
    const convertPosts = async () => {
      const posts = await Promise.all(postList.map(convertPostsToHTML));
      setPosts(posts)
    };

    convertPosts();
  }, [])

    // display posts
    return (
        <div>
          {posts.map(post => (
            <div className="BlogPosts">
                <h2 style={{ textAlign: 'center'}}>{post.title}</h2>
                <p style={{ color: 'gray', textAlign: 'left'}} > {post.date} </p>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          ))}
        </div>
      )
    }

export default BlogPosts;