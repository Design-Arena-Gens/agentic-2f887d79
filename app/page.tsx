import { maritimeCompanies } from "@/data/companies";
import { DirectoryExplorer } from "@/components/DirectoryExplorer";

export default function Page() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-24 pt-16"> 
      <header className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-10 text-slate-800 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Organisations maritimes & côtières en Algérie
          </h1>
          <span className="rounded-full bg-primary-100 px-4 py-1 text-sm font-semibold text-primary-700">
            {maritimeCompanies.length} fiches référencées
          </span>
        </div>
        <p className="max-w-3xl text-base leading-relaxed text-slate-600">
          Ce répertoire exploratoire regroupe des entreprises et institutions actives sur le littoral
          algérien : gestion portuaire, transport maritime, services offshore, pêche, recherche et
          protection environnementale. Il ne prétend pas être exhaustif et doit être vérifié avec des
          sources officielles (ministères, bulletins des annonces légales, registres du commerce).
        </p>
        <div className="rounded-xl border border-primary-200 bg-primary-50 p-4 text-sm text-primary-900">
          <strong className="font-semibold">Transparence :</strong> informations compilées à partir de
          sources publiques (communiqués institutionnels, sites officiels, presse économique). Certaines
          entités peuvent avoir changé de statut ou de dénomination — signaler les mises à jour escomptées
          aux autorités compétentes et au registre national du commerce (CNRC).
        </div>
      </header>
      <DirectoryExplorer companies={maritimeCompanies} />
      <section className="grid gap-4 rounded-2xl border border-slate-200 bg-slate-900 p-8 text-slate-100">
        <h2 className="text-2xl font-semibold">Limites &amp; conseils d&apos;utilisation</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-200">
          <li>La liste ne remplace pas le registre national du commerce (CNRC) ni les publications officielles.</li>
          <li>Bon nombre d&apos;entreprises portuaires et maritimes sont des filiales de groupes publics (SERPORT, Sonatrach).</li>
          <li>Vérifier les licences de pêche, certificats ISM/ISPS et agréments avant toute relation commerciale.</li>
          <li>Pour des données actualisées, consulter les avis du ministère des Transports et de la Pêche.</li>
        </ul>
      </section>
    </main>
  );
}
