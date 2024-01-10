import { createClient } from '@supabase/supabase-js';

const supabaseURL = "https://qokynwdbhgrxiuswoxxu.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFva3lud2RiaGdyeGl1c3dveHh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIxOTU1NjUsImV4cCI6MjAxNzc3MTU2NX0.t7OsZnGyAZ3IRh0I3MIfL5b-OHWwFuLpgBtPndFuDe8";

export const supabases = createClient(supabaseURL, supabaseAnonKey);