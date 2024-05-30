import React, { useEffect, useState } from "react";
import service from "../../appwrite/config";
import PostCards from "../PostCards";
import Container from "../container/Container";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {}, []);

  service.getPosts([]).then((posts) => {
    if (posts) {
      setPosts(posts.documents);
    }
  });

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => {
            <div className="p-2 w-1" key={post.$id}>
              <PostCards post={post} />
            </div>;
          })}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
