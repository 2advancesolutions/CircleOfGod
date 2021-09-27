export const GlobalConfig = {
    superbase: {
        api: {
            auth: {
                signUpPhone: {
                    url: 'https://uopwsawvoaqbggzcfxip.supabase.co/auth/v1/signup'
                },
                verfifyPin: {
                    url: 'https://uopwsawvoaqbggzcfxip.supabase.co/auth/v1/verify'
                },
                signUpEmail: {
                    url: 'https://uopwsawvoaqbggzcfxip.supabase.co/auth/v1/signup'
                },
                signInEmail: {
                    url:'https://uopwsawvoaqbggzcfxip.supabase.co/auth/v1/token?grant_type=password'
                },
                magicLinkViaEmail: {
                    url: 'https://uopwsawvoaqbggzcfxip.supabase.co/auth/v1/magiclink'
                }
            },
            profiles:{
                getUserByUUID: 'https://uopwsawvoaqbggzcfxip.supabase.co/rest/v1/profiles?'
            }
        }
    }
}