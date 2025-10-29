"use client"

import { Separator } from "@/components/ui/separator";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useI18n()
  
  return (
    <footer className="mt-20 mb-8">
      <Separator className="mb-8" />
      <div className="text-center space-y-2">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Aníbal Álvarez González. {t('footer.rights')}
        </p>
        <p className="text-xs text-muted-foreground">
          {t('footer.builtWith')}
        </p>
      </div>
    </footer>
  );
}

