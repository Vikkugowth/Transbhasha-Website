export function StatsSection() {
  const stats = [
    {
      number: "22+",
      label: "Indian Languages Supported",
    },
    {
      number: "10K+",
      label: "Content Creators Empowered",
    },
    {
      number: "1M+",
      label: "Hours of Content Processed",
    },
    {
      number: "99.9%",
      label: "API Uptime",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Impact in Numbers</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See how we're making a difference in multilingual communication
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl font-bold text-primary md:text-6xl lg:text-7xl">{stat.number}</div>
              <div className="text-sm font-medium text-muted-foreground md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
