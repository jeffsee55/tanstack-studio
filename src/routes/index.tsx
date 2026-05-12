import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Zap, RefreshCw, ShieldCheck } from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TanQuery — State management for the high-performance web" },
      {
        name: "description",
        content:
          "Query, cache, and sync your asynchronous data without touching global state. Built for teams who prioritize speed and reliability.",
      },
      { property: "og:title", content: "TanQuery — High-performance state management" },
      {
        property: "og:description",
        content:
          "Query, cache, and sync your asynchronous data without touching global state.",
      },
    ],
  }),
  component: Index,
});

const features = [
  {
    icon: Zap,
    title: "Instant hydration",
    body: "Prefetch data on the server and dehydrate it to the client for immediate rendering without layout shifts.",
  },
  {
    icon: RefreshCw,
    title: "Auto-refetching",
    body: "Smart window focus and network reconnect tracking ensures your UI always reflects the latest backend state.",
  },
  {
    icon: ShieldCheck,
    title: "Type safety",
    body: "Deeply integrated TypeScript support with inference that follows your data from the network to the component.",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="py-6 px-6 lg:px-12 max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <span className="text-sm font-semibold tracking-tight">TanQuery</span>
          <div className="hidden md:flex gap-6">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Platform</a>
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Documentation</a>
            <a href="#cta" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          </div>
        </div>
        <button className="text-sm bg-foreground text-background py-2 px-4 rounded-md ring-1 ring-foreground hover:opacity-90 transition-opacity">
          Get Started
        </button>
      </nav>

      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-[56ch]">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-balance mb-8">
              State management for the high-performance web.
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-10 text-pretty max-w-[48ch]">
              Query, cache, and sync your asynchronous data without touching global state. Built for teams who prioritize speed and reliability.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="group flex items-center bg-foreground text-background py-2 pr-4 pl-3 rounded-md ring-1 ring-foreground hover:opacity-90 transition-opacity">
                <ArrowRight className="size-4 shrink-0 mr-1.5 transition-transform group-hover:translate-x-0.5" />
                <span className="text-sm font-medium">Start integration</span>
              </button>
              <button className="text-sm text-foreground py-2 px-4 rounded-md ring-1 ring-black/10 bg-secondary hover:bg-accent transition-colors">
                Read documentation
              </button>
            </div>
          </div>

          <div className="mt-20">
            <img
              src={dashboardPreview}
              alt="TanQuery dashboard preview"
              width={1280}
              height={704}
              className="w-full aspect-[21/9] object-cover ring-1 ring-black/5 rounded-xl"
            />
          </div>
        </div>
      </section>

      <section className="py-12 px-6 lg:px-12 border-y border-border bg-secondary/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            Trusted by technical teams at
          </p>
          <div className="flex flex-wrap justify-center gap-12 opacity-60">
            {["VECTRA", "SYNAPSE", "COREUI", "ORBIT"].map((b) => (
              <span key={b} className="text-xl font-semibold tracking-tighter">{b}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="p-8 bg-secondary/30 ring-1 ring-black/5 rounded-2xl">
                <div className="size-9 bg-foreground rounded-lg mb-6 grid place-items-center text-background">
                  <f.icon className="size-4" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-foreground text-background rounded-[32px] p-12 lg:p-20 text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-balance mb-6 max-w-[20ch]">
              Ready to ship faster code?
            </h2>
            <p className="text-background/70 text-base md:text-lg mb-10 max-w-[48ch] text-pretty">
              Join the community of developers building the next generation of resilient web applications.
            </p>
            <button className="bg-background text-foreground py-3 px-8 rounded-full font-medium ring-4 ring-background/10 hover:opacity-95 transition-opacity">
              Create free account
            </button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 lg:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="size-5 bg-foreground rounded-sm" />
            <span className="text-sm font-semibold tracking-tight">TanQuery</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-muted-foreground uppercase tracking-widest hover:text-foreground">GitHub</a>
            <a href="#" className="text-xs text-muted-foreground uppercase tracking-widest hover:text-foreground">Twitter</a>
            <a href="#" className="text-xs text-muted-foreground uppercase tracking-widest hover:text-foreground">Discord</a>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 TanQuery Lab. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
