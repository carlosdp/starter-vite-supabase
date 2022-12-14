import { SupabaseClient } from '@supabase/supabase-js';
import { createContext } from 'react';

type SupabaseContextProps = {
  client: SupabaseClient;
};

const SupabaseContext = createContext<SupabaseContextProps | null>(null);

export type SupabaseProviderProps = {
  client: SupabaseClient;
  children: React.ReactNode | React.ReactNode[];
};

export const SupabaseProvider = ({ client, children }: SupabaseProviderProps) => {
  return <SupabaseContext.Provider value={{ client }}>{children}</SupabaseContext.Provider>;
};
