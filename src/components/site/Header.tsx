import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LOGO, PHONE, WHATSAPP_URL } from "./constants";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 shadow-sm backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={LOGO} alt="SSM Ambiental Logo" className="h-16 w-auto" />
          </div>
          <nav className="hidden items-center space-x-6 md:flex">
            <a href="#inicio" className="text-foreground transition-colors hover:text-primary">
              Início
            </a>
            <a href="#servicos" className="text-foreground transition-colors hover:text-primary">
              Serviços
            </a>
            <a href="#contato" className="text-foreground transition-colors hover:text-primary">
              Contato
            </a>
          </nav>
          <div className="flex items-center space-x-3">
            <div className="hidden items-center space-x-2 text-sm text-muted-foreground sm:flex">
              <Phone className="h-4 w-4" />
              <span>{PHONE}</span>
            </div>
            <Button variant="whatsapp" size="sm" className="shadow-lg" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}