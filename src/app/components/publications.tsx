import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import type { RESUME_DATA } from "@/data/resume-data";

type Publication = (typeof RESUME_DATA)["publications"][number];

interface PublicationItemProps {
  publication: Publication;
}

function highlightAuthor(authors: string) {
  return authors.replace(
    /J\.\s*Im/g,
    "**J. Im**"
  );
}

function PublicationItem({ publication }: PublicationItemProps) {
  const { title, authors, venue, year, note } = publication;

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
      , {title}, in {venue}, {year}
      {note && (
        <Badge
          variant="secondary"
          className="ml-1 bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200 px-1 py-0 text-[10px] print:text-[8px]"
        >
          🏆 {note}
        </Badge>
      )}
    </li>
  );
}

interface PublicationsProps {
  publications: (typeof RESUME_DATA)["publications"];
  domesticPublications: (typeof RESUME_DATA)["domesticPublications"];
}

export function Publications({ publications, domesticPublications }: PublicationsProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="publications-section">
        Selected Publications
      </h2>

      <div className="space-y-3 print:space-y-1">
        <div>
          <ol
            className="list-decimal list-inside space-y-1.5 print:space-y-0.5"
            aria-labelledby="publications-section"
          >
            {publications.map((pub) => (
              <PublicationItem key={pub.title} publication={pub} />
            ))}
          </ol>
        </div>

        {domesticPublications.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold mb-1">Domestic (South Korea) Publications</h3>
            <ol
              className="list-decimal list-inside space-y-1.5 print:space-y-0.5"
            >
              {domesticPublications.map((pub) => (
                <PublicationItem key={pub.title} publication={pub} />
              ))}
            </ol>
          </div>
        )}
      </div>
    </Section>
  );
}
