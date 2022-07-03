import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../header/Header";
import Posts from "../../components/Posts/Posts";
import "./home.css";

export default function HOME() {
  const [posts, setPosts] = useState([]);

  /**
   * When the page loads, fetch the journal data
   */
  useEffect(() => {
    const fetchPosts = async () => {
        console.log('starting the request');
      try {
        const url = 'http://localhost:3900/api/posts'
        const res = await axios.get(url);
        setPosts(res.data);
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <div className="home">
        {/* <Posts posts={posts}/> */}
        Add a new post here..
      </div>
    </>
  );
}
