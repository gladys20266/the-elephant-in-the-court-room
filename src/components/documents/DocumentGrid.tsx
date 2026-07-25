import DocumentCard from "./DocumentCard";
import { documents } from "@/data/documents";

interface DocumentGridProps {
  search: string;
  category: string;
}

export default function DocumentGrid({
  search,
  category,
}: DocumentGridProps) {
  const filteredDocuments = documents.filter((document) => {
    const matchesCategory =
      category === "All" ||
      document.category === category;

    const term = search.toLowerCase();

    const matchesSearch =
      document.title.toLowerCase().includes(term) ||
      document.description.toLowerCase().includes(term) ||
      document.category.toLowerCase().includes(term);

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {filteredDocuments.map((document) => (
        <DocumentCard
          key={document.id}
          title={document.title}
          description={document.description}
          category={document.category}
          date={document.date}
          file={document.file}
        />
      ))}
    </div>
  );
}