"use client";

import { useMemo, useState } from "react";
import type { MaritimeCategory, MaritimeCompany } from "@/data/companies";
import { CompanyCard } from "./CompanyCard";

interface DirectoryExplorerProps {
  companies: MaritimeCompany[];
}

const categoryLabels: Record<MaritimeCategory, string> = {
  Portuaire: "Portuaire",
  "Transport maritime": "Transport maritime",
  Logistique: "Logistique & consignation",
  "Construction navale": "Construction et réparation",
  "Pêche et aquaculture": "Pêche & aquaculture",
  "Services offshore": "Services offshore",
  "Recherche et environnement": "Recherche & environnement"
};

export function DirectoryExplorer({ companies }: DirectoryExplorerProps) {
  const [query, setQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<MaritimeCategory[]>([]);

  const headquartersOptions = useMemo(
    () =>
      Array.from(new Set(companies.map((company) => company.headquarters))).sort(
        (a, b) => a.localeCompare(b, "fr")
      ),
    [companies]
  );
  const [selectedHeadquarters, setSelectedHeadquarters] = useState<string>("");

  const filtered = useMemo(() => {
    return companies.filter((company) => {
      const matchesQuery = [company.name, company.description, company.headquarters]
        .join(" ")
        .toLowerCase()
        .includes(query.trim().toLowerCase());

      const matchesCategories =
        selectedCategories.length === 0 ||
        selectedCategories.every((category) => company.categories.includes(category));

      const matchesHeadquarters =
        selectedHeadquarters === "" || company.headquarters === selectedHeadquarters;

      return matchesQuery && matchesCategories && matchesHeadquarters;
    });
  }, [companies, query, selectedCategories, selectedHeadquarters]);

  const toggleCategory = (category: MaritimeCategory) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((item) => item !== category) : [...prev, category]
    );
  };

  return (
    <section className="grid gap-8">
      <div className="grid gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <label className="text-sm font-medium text-slate-700" htmlFor="query">
          Rechercher par nom, description ou ville
        </label>
        <input
          id="query"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-full rounded-lg border border-slate-200 px-4 py-2 text-sm shadow-inner focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
          placeholder="Ex. transport, Oran, ferries..."
        />
        <div className="grid gap-3">
          <span className="text-sm font-medium text-slate-700">Catégories</span>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(categoryLabels) as MaritimeCategory[]).map((category) => {
              const active = selectedCategories.includes(category);
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => toggleCategory(category)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                    active
                      ? "bg-primary-600 text-white shadow"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {categoryLabels[category]}
                </button>
              );
            })}
          </div>
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-medium text-slate-700" htmlFor="headquarters">
            Ville du siège
          </label>
          <select
            id="headquarters"
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
            value={selectedHeadquarters}
            onChange={(event) => setSelectedHeadquarters(event.target.value)}
          >
            <option value="">Toutes les villes</option>
            {headquartersOptions.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div className="text-xs text-slate-500">
          {filtered.length} organisation{filtered.length > 1 ? "s" : ""} sur {companies.length} listées
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {filtered.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
        {filtered.length === 0 ? (
          <div className="col-span-full rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-500">
            Aucun résultat ne correspond à ces critères. Essayez d&apos;élargir votre recherche.
          </div>
        ) : null}
      </div>
    </section>
  );
}
