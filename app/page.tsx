import ButterflyBackground from "@/components/ui/ButterflyBackground";

export default function Home(){
  return(
    <main className="relative min-h-screen bg-white dark:bg-slate-950 transition-colors">
      <ButterflyBackground/>

      <section className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-7xl font-bold">
            Infinite Fashions
          </h1>

          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
            Style Beyond Imagination
          </p>
        </div>
      </section>
    </main>
  );
}