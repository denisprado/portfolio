import {createClient}from '@supabase/supabase-js'
import { Database } from '@/types/supabase'
import { createClient as createClientSupabase } from "@refinedev/supabase";

export default createClient<Database>(
	process.env.NEXT_PUBLIC_SUPABASE_URL!,
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
	{auth: {
		persistSession: false,
	},}
)

export const supabaseClient = createClientSupabase(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    db: {
        schema: "public",
    },
    auth: {
        persistSession: false,
    },
});