import articles from "../../../data/articles.json";
import Head from "next/head";
import '../../globals.css'

export default function ArticlePage({ params }) {
  const article = articles.find(a => a.id === params.id);

  if (!article) return <p>Article not found</p>;

  return (
    <>
      <Head>
        <title>{article.title}</title>
        <meta name="citation_title" content={article.title} />
        <meta name="citation_author" content={article.author} />
        <meta name="citation_publication_date" content={article.date} />
        <meta name="citation_pdf_url" content={article.pdf} />
        <meta name="citation_doi" content={article.doi} />
        <meta name="citation_language" content="uz" />
        <meta name="citation_conference_title" content="International Philology Conference 2024" />
      </Head>

      <main style={{ padding: "20px" }}>
        <h1>{article.title}</h1>
        <p><strong>Author:</strong> {article.author}</p>
        <p><strong>Pages:</strong> {article.pages}</p>
        <p><strong>DOI:</strong> <a href={article.doi} target="_blank">{article.doi}</a></p>
        <iframe src={article.pdf} frameborder="0"></iframe>
        <p><a href={article.pdf} download >Download PDF</a></p>
      </main>
    </>
  );
}

export async function generateStaticParams() {
  return articles.map(article => ({
    id: article.id
  }));
}
