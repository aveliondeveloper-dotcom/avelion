import React from "react";
import BlogCard from "./BlogCard";

interface Post {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
}

interface Props {
  posts: Post[];
}

export default function BlogList({ posts }: Props) {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6 mb-section">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </section>
  );
}
