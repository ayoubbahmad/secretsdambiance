import fr from '@/i18n/fr.json';
import ar from '@/i18n/ar.json';

const messages = { fr, ar } as const;
type Locale = keyof typeof messages;

function get(obj: Record<string, unknown>, path: string): string {
  const parts = path.split('.');
  let cur: unknown = obj;
  for (const p of parts) {
    if (typeof cur !== 'object' || cur === null) return path;
    cur = (cur as Record<string, unknown>)[p];
  }
  return typeof cur === 'string' ? cur : path;
}

export function serverT(locale: string) {
  const msgs = (messages[(locale as Locale)] ?? messages.fr) as Record<string, unknown>;
  return (key: string): string => get(msgs, key);
}

export function getLocaleMessages(locale: string) {
  return messages[(locale as Locale)] ?? messages.fr;
}
