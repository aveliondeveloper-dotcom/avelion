import React from "react";
import { useParams } from "react-router-dom";
import blogData from "../data/blog.json";

export default function BlogPost() {
  const { id } = useParams();
  const post = blogData.posts.find((p) => p.id === id);

  if (!post) {
    return (
      <main className="min-h-screen pt-32 text-center text-avelion-neutral-50">
        <h1 className="text-3xl">Post no encontrado.</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-avelion-neutral-900 text-avelion-neutral-50 pt-28 pb-24">
      <article className="max-w-4xl mx-auto px-6">

        {/* HERO editorial */}
        <section className="relative mb-16">
          <div className="absolute inset-0 bg-gradient-to-b from-avelion-neutral-900/20 to-avelion-neutral-900/80 rounded-2xl" />

          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[420px] object-cover rounded-2xl border border-avelion-mint shadow-2xl shadow-avelion-primary/10"
          />

          {/* Título flotante */}
          <div className="absolute bottom-6 left-6">
            <span className="text-avelion-primary text-xs uppercase tracking-widest block">
              {post.category}
            </span>

            <h1 className="text-4xl font-display font-semibold mt-2 drop-shadow-lg">
              {post.title}
            </h1>
          </div>
        </section>

        {/* Fecha */}
        <p className="text-avelion-neutral-400 text-sm mb-12">
          {post.date}
        </p>

        {/* Descripción */}
        <p className="text-avelion-neutral-200 leading-relaxed text-lg mb-14">
          {post.longDescription}
        </p>

        {/* Highlights */}
        {post.highlights?.length > 0 && (
          <section className="mb-14 border-l-2 border-avelion-primary pl-6">
            <h2 className="text-2xl font-semibold mb-4">Puntos clave</h2>
            <ul className="space-y-2 text-avelion-neutral-300">
              {post.highlights.map((item, i) => (
                <li key={i} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Insights */}
        {post.insights?.length > 0 && (
          <section className="mb-14 border-l-2 border-avelion-primary pl-6">
            <h2 className="text-2xl font-semibold mb-4">Lo que revela</h2>
            <ul className="space-y-2 text-avelion-neutral-300">
              {post.insights.map((item, i) => (
                <li key={i} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Use Cases */}
        {post.useCases?.length > 0 && (
          <section className="mb-14 border-l-2 border-avelion-primary pl-6">
            <h2 className="text-2xl font-semibold mb-4">Casos de uso</h2>
            <ul className="space-y-2 text-avelion-neutral-300">
              {post.useCases.map((item, i) => (
                <li key={i} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Por qué importa */}
        {post.whyItMatters && (
          <div className="mt-20 p-8 rounded-2xl bg-avelion-neutral-800/70 border border-avelion-neutral-700 shadow-xl shadow-avelion-primary/5 relative overflow-hidden">

            {/* Halo institucional */}
            <div className="absolute -top-20 left-1/2 w-72 h-72 bg-avelion-primary/20 blur-3xl opacity-80 -translate-x-1/2" />

            <h3 className="text-xl font-semibold mb-4 text-avelion-primary relative z-10">
              Por qué importa
            </h3>

            <p className="text-avelion-neutral-200 relative z-10 leading-relaxed">
              {post.whyItMatters}
            </p>
          </div>
        )}
      </article>
    </main>
  );
}
