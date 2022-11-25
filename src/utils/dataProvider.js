// in dataProvider.js
import { supabaseDataProvider } from 'ra-supabase';
import supabase from 'utils/supabase';

const resources = {
    work: ['id', 'title', 'description', 'category_id'],
    category: ['id', 'name'],
};

export const dataProvider = supabaseDataProvider(supabase, resources);
