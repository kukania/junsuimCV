import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type Award = (typeof RESUME_DATA)["awards"][number];
type Grant = (typeof RESUME_DATA)["grants"][number];

interface AwardItemProps {
  item: Award | Grant;
}

function AwardItem({ item }: AwardItemProps) {
  const { title, organization, date, location } = item;

  return (
    <Card className="border-none py-0 print:py-0">
      <CardHeader className="p-0">
        <div className="flex items-center justify-between gap-x-2 text-xs">
          <div>
            <span className="font-semibold">{title}</span>
            <span className="text-foreground/80">, {organization}</span>
          </div>
          <div className="flex items-center gap-x-2 shrink-0">
            <span className="text-foreground/60">{location}</span>
            <span className="tabular-nums text-gray-500">{date}</span>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}

interface AwardsAndGrantsProps {
  awards: (typeof RESUME_DATA)["awards"];
  grants: (typeof RESUME_DATA)["grants"];
}

export function AwardsAndGrants({ awards, grants }: AwardsAndGrantsProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="awards-section">
        Awards & Grants
      </h2>

      <div className="space-y-3 print:space-y-1">
        {awards.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold mb-1.5">Awards</h3>
            <div className="space-y-1.5 print:space-y-0.5" aria-labelledby="awards-section">
              {awards.map((award) => (
                <AwardItem key={`${award.title}-${award.date}`} item={award} />
              ))}
            </div>
          </div>
        )}

        {grants.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold mb-1.5">Grants & Scholarships</h3>
            <div className="space-y-1.5 print:space-y-0.5">
              {grants.map((grant) => (
                <AwardItem key={`${grant.title}-${grant.date}`} item={grant} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
