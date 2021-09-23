export interface Profile {
    id?: string | '',
    username?: string | '';
    website?: string | '';
    avatar_url?: string | '';
    phone?: string | '';
    joinDate?: Date | null;
    acceptTerms?: boolean
  }