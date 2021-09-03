import { Provider, Session, User } from "@supabase/supabase-js";

export interface ISession {
    session: Session | null;
    user: User | null;
    provider?: Provider | undefined;
    url?: string | null | undefined;
    error: Error | null;
    data: Session | null;
  }