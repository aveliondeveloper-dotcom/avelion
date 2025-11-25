import React, { useState } from "react";
import blogData from "../data/blog.json";

import BlogHero from "../sections/blog/BlogHero";
import BlogCategories from "../sections/blog/BlogCategories";
import BlogList from "../sections/blog/BlogList";
import BlogCTA from "../sections/blog/BlogCTA";

export default function Blog() {
  const { hero, categories, posts, cta } = blogData;

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPosts =
    activeCategory === "all"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-avelion-neutral-900 text-avelion-neutral-50 pt-28 pb-32">
      <BlogHero data={hero} />

      <BlogCategories
        categories={[{ id: "all", label: "Todos" }, ...categories]}
        active={activeCategory}
        onSelect={setActiveCategory}
      />

      <BlogList posts={filteredPosts} />

      <BlogCTA data={cta} />
    </main>
  );
}
