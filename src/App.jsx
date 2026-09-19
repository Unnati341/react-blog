import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Button from "./components/Button";
import Form from "./components/Form";

import posts from "./data/posts.json";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(posts.map((post) => post.category))];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || post.category === category;

    return matchesSearch && matchesCategory;
  });

  const handleReadMore = (title) => {
    alert(`You selected: ${title}`);
  };

  return (
    <>
      <Header />

      <main className="container">
        <section className="hero-section">
          <h2>Explore Our Latest Articles</h2>
          <p>Learn React, JavaScript and Web Development</p>
        </section>

        <section className="controls">
          <Form search={search} setSearch={setSearch} />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </section>

        <section className="posts-grid">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Card
                key={post.id}
                title={post.title}
                category={post.category}
                author={post.author}
                date={post.date}
                content={post.content}
              >
                <Button
                  text="Read More"
                  onClick={() => handleReadMore(post.title)}
                />
              </Card>
            ))
          ) : (
            <p className="no-results">No posts found.</p>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;