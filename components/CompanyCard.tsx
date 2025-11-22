import Link from "next/link";
import type { MaritimeCompany } from "@/data/companies";

interface CompanyCardProps {
  company: MaritimeCompany;
  highlight?: boolean;
}

export function CompanyCard({ company, highlight = false }: CompanyCardProps) {
  return (
    <article
      className={`flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
        highlight ? "ring-2 ring-primary-500" : ""
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold text-slate-900">{company.name}</h2>
        <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">
          {company.headquarters}
        </span>
      </div>
      <p className="text-sm text-slate-600">{company.description}</p>
      <div className="flex flex-wrap gap-2">
        {company.categories.map((category) => (
          <span
            key={category}
            className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
          >
            {category}
          </span>
        ))}
      </div>
      <div className="mt-auto flex flex-col gap-2 text-sm text-slate-500">
        {company.website ? (
          <Link
            href={company.website}
            className="text-primary-600 underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consulter le site officiel
          </Link>
        ) : (
          <span className="italic">Site officiel non communiqué</span>
        )}
        {company.notes ? <p className="text-slate-500">{company.notes}</p> : null}
      </div>
    </article>
  );
}
