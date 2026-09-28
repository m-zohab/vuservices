import {
  BrainCircuit,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  FileText,
  GraduationCap,
  LayoutDashboard,
  MessagesSquare,
} from "lucide-react";

// Maps each service's "icon" string (from siteData.js) to a component.
const ICONS = {
  FileText,
  MessagesSquare,
  ClipboardCheck,
  LayoutDashboard,
  GraduationCap,
  Code2,
  BrainCircuit,
};

// A catalogue-style row: icon, title and description on one side, what's
// included on the other, separated by a hairline rule.
export default function ServiceCard({ service }) {
  const Icon = ICONS[service.icon] ?? FileText;

  return (
    <div className="group flex flex-col gap-6 rounded-xl border-b border-line px-4 py-8 transition-colors duration-300 last:border-b-0 hover:bg-surface sm:flex-row sm:gap-10">
      <div className="flex shrink-0 items-start gap-4 sm:w-64">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand text-white transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
          <Icon size={22} strokeWidth={2} />
        </span>
        <div>
          <h3 className="text-lg font-semibold text-heading">{service.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-body">
            {service.description}
          </p>
        </div>
      </div>

      <ul className="flex-1 space-y-2.5 sm:border-l sm:border-line sm:pl-8">
        {service.features.map((feature, i) => (
          <li
            key={feature}
            className="flex items-start gap-2.5 text-sm text-body transition-transform duration-300 group-hover:translate-x-1"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-ok" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
