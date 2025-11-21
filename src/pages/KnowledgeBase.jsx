import { useEffect, useState } from "react";

export default function KnowledgeBase() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await fetch("/data/knowledge.json");
      const data = await res.json();
      setArticles(data);
    };
    load();
  }, []);

  return (
    <section aria-labelledby="kb-title">
      <h2 id="kb-title">Kennisbank</h2>
      {articles.length === 0 ? (
        <p>Er zijn nog geen artikelen beschikbaar.</p>
      ) : (
        <ul className="rec-list">
          {articles.map((a) => (
            <li key={a.id} className="rec-card">
              <h3>{a.title}</h3>
              <p>{a.summary}</p>
              <p className="rec-tag">{a.category}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
