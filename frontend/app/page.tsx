import Link from 'next/link';

import GtmEventTracker from '@/components/GtmEventTracker';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-3xl font-semibold mb-4">
        Bienvenue sur notre site de formations
      </h1>
      <p className="text-lg mb-8">
        Découvrez notre sélection récentes de formations
      </p>

      <Link
        href="/products"
        className="bg-blue-600 text-white py-2 px-6 rounded-full transition-colors hover:bg-blue-700"
      >
        Voir nos formations
      </Link>

      <GtmEventTracker eventType="page_view" pageName="Accueil" pagePath="/" />
    </div>
  );
}
