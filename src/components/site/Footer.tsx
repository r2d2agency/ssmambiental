import { Clock, Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LOGO, PHONE, WHATSAPP_URL } from "./constants";

export function Footer() {
  return (
    <footer id="contato" className="bg-foreground py-16 text-background">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <img src={LOGO} alt="SSM Ambiental Logo" className="h-16 w-auto brightness-0 invert" />
            <p className="text-sm leading-relaxed text-background/70">
              Especializada em serviços de dedetização, desentupimento e limpeza. Qualidade
              garantida para residências, condomínios e empresas.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Nossos Serviços</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Dedetização Completa</li>
              <li>Controle de Pragas</li>
              <li>Desentupimento</li>
              <li>Limpeza de Caixa d'Água</li>
              <li>Serviços Especiais</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-3 text-sm text-background/70">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>{PHONE}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Alto Tietê - São Paulo</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Atendimento 24h</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Entre em Contato</h4>
            <p className="text-sm text-background/70">
              Solicite seu orçamento agora mesmo pelo WhatsApp
            </p>
            <Button variant="whatsapp" className="w-full" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Chamar no WhatsApp
              </a>
            </Button>
            <div className="flex space-x-3">
              <Button variant="heroOutline" size="icon" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <MessageCircle className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="heroOutline" size="icon" asChild>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-background/20 pt-6 text-center">
          <p className="text-sm text-background/60">
            © 2024 SSM Ambiental. Todos os direitos reservados. Serviços especializados com garantia
            de qualidade.
          </p>
        </div>
      </div>
    </footer>
  );
}