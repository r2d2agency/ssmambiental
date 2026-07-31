const works = [
  {
    src: "/lovable-uploads/ab282edc-cdab-4f76-9211-92928dc9cd0f.png",
    alt: "Serviço de dedetização profissional",
    title: "Dedetização Profissional",
  },
  {
    src: "/lovable-uploads/133748df-1073-46b2-a43b-949ecff77038.png",
    alt: "Limpeza de caixa d'água externa",
    title: "Limpeza de Caixa d'Água",
  },
  {
    src: "/lovable-uploads/851752dc-74df-4c11-b679-4cce710db16e.png",
    alt: "Desentupimento de pia residencial",
    title: "Desentupimento Residencial",
  },
  {
    src: "/lovable-uploads/0fb20020-9c01-4570-9d9c-691768c07ae1.png",
    alt: "Limpeza profissional de cozinha",
    title: "Limpeza de Cozinha",
  },
  {
    src: "/lovable-uploads/b8e77849-5176-4021-8e4d-e90680b206aa.png",
    alt: "Limpeza de churrasqueira",
    title: "Limpeza de Churrasqueira",
  },
  {
    src: "/lovable-uploads/abb58a78-6b7d-483c-b1db-90cb9d3871a3.png",
    alt: "Desentupimento com mangueira profissional",
    title: "Desentupimento Especializado",
  },
  {
    src: "/lovable-uploads/c696345b-6789-402e-8ecd-44c121341140.png",
    alt: "Limpeza e higienização de caixa d'água",
    title: "Higienização de Reservatório",
  },
  {
    src: "/lovable-uploads/7ccb06d5-ce37-4633-b6c0-befce22ccf59.png",
    alt: "Dedetização industrial profissional",
    title: "Dedetização Industrial",
  },
];

export function Gallery() {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-4xl font-bold text-foreground lg:text-5xl">Nossos Trabalhos</h2>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Veja exemplos dos nossos serviços profissionais de dedetização, desentupimento e limpeza
            realizados com excelência
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {works.map((work) => (
            <div
              key={work.title}
              className="group relative overflow-hidden rounded-xl shadow-custom-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-custom-xl"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={work.src}
                  alt={work.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent">
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-background">{work.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}