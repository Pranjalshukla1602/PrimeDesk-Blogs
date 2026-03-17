'use client';

import './blogs.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type Blog = {
  id: number;
  title: string;
  description: string;
  date: string;
  readTime: string;
  author: string;
  tag: string;
  href: string;
  image: string;
};

const TAGS = [
  'All',
  'Workspace Strategy',
  'GCC',
  'Hyderabad',
  'Cost Optimization',
  'Culture & Experience',
  'Remote & Hybrid',
  'Expansion',
];

export default function BlogsClient({ blogs }: { blogs: Blog[] }) {
  const [query, setQuery] = useState('');

  const filteredBlogs = blogs.filter((post) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      post.title.toLowerCase().includes(q) ||
      post.description.toLowerCase().includes(q) ||
      post.tag.toLowerCase().includes(q)
    );
  });

  return (
    <main className="blog-shell">
      {/* Hero header */}
      <section className="blog-hero">
        <div className="blog-wrap">
          <div className="blog-hero-text">
            <p className="blog-kicker">Insights · Playbooks · Stories</p>
            <h1>
              Explore Our <span>Blog</span>
            </h1>
            <p className="blog-hero-sub">
              Fresh insights, expert tips, and comprehensive guides to help you design
              better workspaces and plan your next GCC move.
            </p>
          </div>

          {/* Search */}
          <div className="blog-search">
            <input
              type="text"
              placeholder="Search articles..."
              className="blog-search-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="button"
              className="blog-search-btn"
              onClick={() => {
                // no-op for now – search updates live as you type
              }}
            >
              Search
            </button>
          </div>

          {/* Tags */}
          {/* <div className="blog-tags-row">
            {TAGS.map((tag, index) => (
              <button
                key={tag}
                type="button"
                className={`blog-tag-pill ${index === 0 ? 'blog-tag-pill--active' : ''}`}
              >
                {tag}
              </button>
            ))}
          </div> */}
        </div>
      </section>

      {/* Cards */}
      <section className="blog-list-section">
        <div className="blog-wrap">
          <div className="blog-list-header">
            <p className="blog-count">Showing {filteredBlogs.length} articles</p>
            <div className="blog-sort">
              <span>Latest First</span>
            </div>
          </div>
          <div className="blog-grid">
            {filteredBlogs.map((post) => (
              <article key={post.id} className="blog-card">
                {/* Like toggle temporarily disabled */}
                <Link href={post.href} className="blog-card-inner">
                  <div className="blog-card-image">
                    <span className="blog-card-tag-top">{post.tag}</span>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="blog-card-content">
                    <div className="blog-card-body">
                      <h3>{post.title}</h3>
                      <p>{post.description}</p>
                    </div>
                    <div className="blog-card-meta">
                      <div className="blog-card-meta-left">
                        <span>{post.date}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                        <span>·</span>
                        <span>{post.author}</span>
                      </div>
                      <span className="blog-card-link">Read Article →</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

