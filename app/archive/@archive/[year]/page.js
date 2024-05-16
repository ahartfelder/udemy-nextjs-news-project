import NewsList from "@/components/news/news-list";
import { getNewsForYear } from "@/lib/news";

export default function YearPage({ params }) {
  const year = params.year;
  const news = getNewsForYear(year);
  return <NewsList news={news} />;
}
