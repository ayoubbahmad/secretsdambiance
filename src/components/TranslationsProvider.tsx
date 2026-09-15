'use client';

import { createContext, useContext } from 'react';

type Messages = Record<string, unknown>;

const Ctx = createContext<Messages>({});

export function TranslationsProvider({
  messages,
  children,
}: {
  messages: Messages;
  children: React.ReactNode;
}) {
  return <Ctx.Provider value={messages}>{children}</Ctx.Provider>;
}

function get(obj: Record<string, unknown>, path: string): string {
  const parts = path.split('.');
  let cur: unknown = obj;
  for (const p of parts) {
    if (typeof cur !== 'object' || cur === null) return path;
    cur = (cur as Record<string, unknown>)[p];
  }
  return typeof cur === 'string' ? cur : path;
}

export function useT(namespace?: string) {
  const msgs = useContext(Ctx);
  return (key: string): string => get(msgs, namespace ? `${namespace}.${key}` : key);
}
