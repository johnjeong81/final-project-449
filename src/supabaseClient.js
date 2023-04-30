import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ulovkampryylgnbdjfur.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVsb3ZrYW1wcnl5bGduYmRqZnVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI4MzE4MTEsImV4cCI6MTk5ODQwNzgxMX0.i8lIfNdBrEouWWt511vIOcM6tC-_1B3wIxmMeXyQPz8';

export const supabase = createClient(supabaseUrl, supabaseKey)