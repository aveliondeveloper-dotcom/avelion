import React from "react";
import { Link } from "react-router-dom";

interface Post {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
}

interface Props {
  post: Post;
}

export default function BlogCard({ post }: Props) {
  return (
    <Link to={`/blog/${post.id}`}>
      <article className="group bg-avelion-neutral-800 rounded-2xl overflow-hidden border border-avelion-neutral-700 hover:border-avelion-primary transition-all cursor-pointer">
        <div className="relative w-full aspect-square overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover transition group-hover:opacity-90"
          />
        </div>

        <div className="p-6">
          <span className="text-xs uppercase tracking-wide text-avelion-primary">
            {post.category}
          </span>

          <h3 className="mt-2 mb-3 text-xl font-display font-semibold">
            {post.title}
          </h3>

          <p className="text-avelion-neutral-300 text-sm mb-4">
            {post.excerpt}
          </p>

          <p className="text-xs text-avelion-neutral-500">{post.date}</p>
        </div>
      </article>
    </Link>
  );
}
