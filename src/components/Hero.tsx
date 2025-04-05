export function Hero() {
  return (
    <section id="home" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container flex flex-col items-center justify-center gap-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Welcome to Our Modern Website
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            A beautiful React application with light and dark theme support
            powered by Tailwind CSS.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <a
            href="#features"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Get Started
          </a>
          <a
            href="#about"
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Learn More
          </a>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold">Feature {i}</h3>
              <p className="text-sm text-muted-foreground">
                This is a brief description of feature {i}. It showcases the
                capabilities of our application.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
