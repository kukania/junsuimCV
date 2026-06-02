import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

type Skills = readonly { category: string; items: readonly string[] }[];

interface SkillsListProps {
  skills: Skills;
  className?: string;
}

/**
 * Renders a list of skills as categories
 */
function SkillsList({ skills, className }: SkillsListProps) {
  return (
    <div className={cn("flex flex-col gap-4", className)} aria-label="List of skills">
      {skills.map((skillGroup) => (
        <div key={skillGroup.category} className="flex flex-col gap-2">
          <h3 className="font-semibold text-sm">{skillGroup.category}</h3>
          <ul className="flex list-none flex-wrap gap-1 p-0">
            {skillGroup.items.map((skill) => (
              <li key={skill}>
                <Badge className="print:text-[10px]" aria-label={`Skill: ${skill}`}>
                  {skill}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

interface SkillsProps {
  skills: Skills;
  className?: string;
}

/**
 * Skills section component
 * Displays a list of professional skills as badges
 */
export function Skills({ skills, className }: SkillsProps) {
  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="skills-section">
        Technical Expertise
      </h2>
      <SkillsList skills={skills} />
    </Section>
  );
}
