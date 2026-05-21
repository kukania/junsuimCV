import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type Patent = (typeof RESUME_DATA)["patents"][number];

interface PatentItemProps {
  patent: Patent;
}

function highlightAuthor(authors: string) {
  return authors.replace(
    /J\.\s*Im/g,
    "**J. Im**"
  );
}

function PatentItem({ patent }: PatentItemProps) {
  const { title, authors, patentNumber, year } = patent;

  return (
    <li className="text-xs text-foreground/80 print:text-[10px]">
      <span
        dangerouslySetInnerHTML={{
          __html: highlightAuthor(authors).replace(
            /\*\*(.*?)\*\*/g,
            '<span class="font-semibold underline">$1</span>'
          ),
        }}
      />
      , {title}, <span className="font-medium">{patentNumber}</span>
      {year && `, ${year}`}
    </li>
  );
}

interface PatentsProps {
  patents: (typeof RESUME_DATA)["patents"];
}

export function Patents({ patents }: PatentsProps) {
  if (patents.length === 0) return null;

  return (
    <Section>
      <h2 className="text-xl font-bold" id="patents-section">
        Patents
      </h2>
      <ul
        className="list-disc list-inside space-y-1.5 print:space-y-0.5"
        aria-labelledby="patents-section"
      >
        {patents.map((patent) => (
          <PatentItem key={patent.patentNumber} patent={patent} />
        ))}
      </ul>
    </Section>
  );
}
