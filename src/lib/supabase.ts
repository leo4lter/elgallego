import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Project = {
  id: string;
  title: string;
  description: string;
  image_url: string;
  category: string;
  created_at?: string;
};

export type Client = {
  id: string;
  name: string;
  logo_url: string;
  created_at?: string;
};

export type Equipment = {
  id: string;
  name: string;
  description: string;
  image_url: string;
  created_at?: string;
};
