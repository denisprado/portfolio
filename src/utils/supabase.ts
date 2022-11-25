import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mlfoassvjfdizqvcrgjx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sZm9hc3N2amZkaXpxdmNyZ2p4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg4NTA1NTYsImV4cCI6MTk4NDQyNjU1Nn0.Q-C77zaJxJn8dRzLqCJw7LJjKAk44sg8CChr1oWgq7s";
export default createClient(supabaseUrl, supabaseKey);
