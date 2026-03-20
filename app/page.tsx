import { Button } from '@/components/ui/button';

const appName = process.env.NEXT_PUBLIC_APP_NAME || 'Mon App';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <section className="w-full max-w-xl rounded-2xl border bg-white p-8 shadow-sm">
        <div className="space-y-4 text-center">
          <p className="text-sm font-medium text-slate-500">{appName}</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Base Next.js prête
          </h1>
          <p className="text-slate-600">
            Projet propre avec Tailwind, shadcn/ui, ESLint et Prettier.
          </p>
          <div className="pt-2">
            <Button>Démarrer</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
