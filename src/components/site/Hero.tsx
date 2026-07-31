import { CircleCheckBig, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { PHONE, TEL_URL, WHATSAPP_URL } from "./constants";

const benefits = [
  "Preço Justo e com Garantia",
  "Profissionais Especializados",
  "Atendimento 24h",
  "Produtos de Alta Qualidade",
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-surface-gradient"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Serviços de Dedetização e Limpeza"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-in-up space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold leading-tight lg:text-6xl">
                <span className="text-foreground">Procurando </span>
                <span className="bg-hero-gradient bg-clip-text text-transparent">
                  dedetização, desentupidora
                </span>
                <span className="text-foreground"> ou serviço de </span>
                <span className="bg-hero-gradient bg-clip-text text-transparent">limpeza?</span>
              </h1>
              <p className="max-w-lg text-xl leading-relaxed text-muted-foreground">
                Serviços especializados para residências, condomínios e empresas. Soluções eficazes
                contra pragas e problemas de saneamento.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {benefits.map((b) => (
                <div key={b} className="flex items-center space-x-2">
                  <CircleCheckBig className="h-5 w-5 text-secondary" />
                  <span className="font-medium text-foreground">{b}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="hero" size="xl" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Chamar no WhatsApp
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href={TEL_URL}>
                  <Phone className="h-5 w-5" />
                  {PHONE}
                </a>
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>📍 Alto Tietê - São Paulo</p>
              <p>Atendemos pequeno, médio e grande porte</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-20 top-20 hidden h-20 w-20 animate-float rounded-full bg-primary/10 lg:block" />
      <div className="animation-delay-1000 absolute bottom-32 right-32 hidden h-12 w-12 animate-float rounded-full bg-secondary/20 lg:block" />
    </section>
  );
}