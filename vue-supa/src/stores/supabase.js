import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://okuodkgtwennhrxilnjh.supabase.co'
const supabasekey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rdW9ka2d0d2VubmhyeGlsbmpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxNDkyMzMsImV4cCI6MjAyNzcyNTIzM30.-ipk6tUTb6myES2Pphqd5b5_fX3iuCkT4fPgHrRjnN0"

export const supabase = createClient(supabaseUrl, supabasekey);