import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const testimonials = [
  {
    name: "Maria Silva",
    service: "Dedetização Residencial",
    initials: "MS",
    image: "",
    text: "\"Excelente serviço de dedetização! Resolveram completamente o problema com formigas na minha casa. Profissionais muito competentes e pontuais.\"",
  },
  {
    name: "João Santos",
    service: "Desentupimento",
    initials: "JS",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    text: "\"O desentupimento foi feito rapidamente e com total eficiência. Preço justo e atendimento excepcional. Recomendo para todos!\"",
  },
  {
    name: "Ana Costa",
    service: "Limpeza de Caixa d'Água",
    initials: "AC",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    text: "\"A limpeza da caixa d'água foi impecável. Chegaram no horário, trabalharam com cuidado e deixaram tudo muito limpo. Muito satisfeita!\"",
  },
  {
    name: "Carlos Oliveira",
    service: "Serviços Condominiais",
    initials: "CO",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    text: "\"Empresa séria e confiável. Já utilizei os serviços várias vezes no meu condomínio e sempre com resultados excelentes. Atendimento 24h é um diferencial!\"",
  },
];

export function Testimonials() {
  return (
    <section className="bg-surface-gradient py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-4xl font-bold text-foreground lg:text-5xl">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Veja os depoimentos de clientes satisfeitos com nossos serviços de qualidade e
            atendimento excepcional
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-custom-xl"
            >
              <CardHeader className="items-center space-y-2 text-center">
                <Avatar className="mx-auto h-16 w-16">
                  {t.image ? <AvatarImage src={t.image} alt={t.name} /> : null}
                  <AvatarFallback className="bg-primary-gradient text-primary-foreground">
                    {t.initials}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold text-foreground">{t.name}</h3>
                <div className="flex justify-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">{t.service}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">{t.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}