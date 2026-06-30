import { BlurFade } from "@/components/ui/blur-fade";
import WritingClient from "@/components/WritingClient";

interface Article {
  title: string;
  description: string;
  date: string;
  url: string;
  tag: string;
}

async function getSubstackArticles(): Promise<Article[]> {
  try {
    const res = await fetch("https://rishipachore.substack.com/feed", {
      next: { revalidate: 3600 }, // refresh every hour
    });

    const xml = await res.text();

    const items = Array.from(xml.matchAll(/<item>([\s\S]*?)<\/item>/g));

    return items.map((match) => {
      const block = match[1];

      const title = block.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1]
        ?? block.match(/<title>(.*?)<\/title>/)?.[1]
        ?? "Untitled";

      const url = block.match(/<link>(.*?)<\/link>/)?.[1]
        ?? block.match(/<guid[^>]*>(.*?)<\/guid>/)?.[1]
        ?? "#";

      const rawDate = block.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] ?? "";
      const date = rawDate
        ? new Date(rawDate).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        : "";

      const rawDesc = block.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/)?.[1]
        ?? block.match(/<description>([\s\S]*?)<\/description>/)?.[1]
        ?? "";
      // Strip HTML tags from description
      const description = rawDesc.replace(/<[^>]+>/g, "").slice(0, 180).trim() + "…";

      return { title, description, date, url, tag: "Strategy" };
    });
  } catch {
    return [];
  }
}

export default async function Writing() {
  const articles = await getSubstackArticles();

  return (
    <section id="writing" className="border-t border-[#1e1e1e]">
      <BlurFade delay={0.1} inView>
        <WritingClient articles={articles} />
      </BlurFade>
    </section>
  );
}
