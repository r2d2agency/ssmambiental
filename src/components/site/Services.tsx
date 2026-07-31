import { Bug, Droplets, MessageCircle, Shield, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import dedetizacao from "@/assets/dedetizacao.jpg";
import desentupimento from "@/assets/desentupimento.jpg";
import limpezaCaixa from "@/assets/limpeza-caixa.jpg";
import { WHATSAPP_URL } from "./constants";

const services = [
  {
    icon: Bug,
    image: dedetizacao,
    title: "Dedetização",
    description: "Eliminação de pragas como baratas, formigas, cupins, ratos e camundongos",
    items: [
      "Dedetização de Insetos Rasteiros",
      "Dedetização de Insetos Voadores",
      "Dedetização de Animais Peçonhentos",
      "Controle de Roedores",
      "Dedetização de Parasitários",
    ],
  },
  {
    icon: Waves,
    image: desentupimento,
    title: "Desentupimento",
    description:
      "Desentupimentos em geral, pias, ralos, tanques, redes de esgotos e águas pluviais",
    items: [
      "Desentupimento de rede de esgoto",
      "Sanitários e sistemas industriais",
      "Trabalho rápido e seguro",
      "Equipamentos modernos",
      "Garantia do serviço",
    ],
  },
  {
    icon: Droplets,
    image: limpezaCaixa,
    title: "Limpeza de Caixa d'Água",
    description: "Limpeza especializada com produtos de alta qualidade para maior eficiência",
    items: [
      "Produtos de alta qualidade",
      "Maior eficiência e durabilidade",
      "Procedimentos seguros",
      "Certificação sanitária",
      "Manutenção preventiva",
    ],
  },
];

export function Services() {
  return (
    <section id="servicos" className="bg-surface-gradient py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 space-y-4 text-center">
          <div className="mb-4 flex items-center justify-center space-x-2 text-primary">
            <Shield className="h-8 w-8" />
            <span className="text-lg font-semibold">Nossos Serviços</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground lg:text-5xl">
            Soluções Ambientais Completas
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Oferecemos serviços especializados com garantia de qualidade. Somos especialistas e
            garantimos o resultado dos serviços.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group overflow-hidden border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-custom-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="rounded-lg bg-primary-gradient p-2">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start space-x-2">
                      <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="whatsapp" className="w-full" asChild>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    Solicitar Orçamento
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="mx-auto max-w-2xl space-y-4 rounded-2xl bg-primary-gradient p-8 shadow-custom-xl">
            <h3 className="text-2xl font-bold text-primary-foreground">Precisa de um Orçamento?</h3>
            <p className="text-primary-foreground/90">
              Entre em contato conosco para receber um orçamento personalizado
            </p>
            <Button variant="whatsapp" size="xl" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Chamar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}