import { environment } from "src/environments/environment";

export const GlobalConfig = {
    superbase: {
        api: {
            auth: {
                signUpPhone: {
                    url: `${environment.supabaseUrl}.supabase.co/auth/v1/signup`
                },
                verfifyPin: {
                    url: `${environment.supabaseUrl}/auth/v1/verify`
                },
                signUpEmail: {
                    url: `${environment.supabaseUrl}/auth/v1/signup`
                },
                signInEmail: {
                    url:`${environment.supabaseUrl}/auth/v1/token?grant_type=password`
                },
                magicLinkViaEmail: {
                    url: `${environment.supabaseUrl}/auth/v1/magiclink`
                }
            },
            profiles:{
                getUserByUUID: `${environment.supabaseUrl}/rest/v1/profiles?`
            }
        }
    }
}