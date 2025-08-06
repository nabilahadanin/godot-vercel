export default async function handler(req, res) {
  const SUPABASE_URL = "https://peupxardkrcgosdfhzfw.supabase.co";
  const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBldXB4YXJka3JjZ29zZGZoemZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE2OTk1NjMsImV4cCI6MjA2NzI3NTU2M30.sAv9ouFlirdNZ--M_NBYap51pcGGpXToW2JQ8DqmQVQ"; // isi dengan anon key kamu

  const response = await fetch(`${SUPABASE_URL}/rest/v1/players?id=eq.2e6c2ee2-63f6-457e-a1d8-46e3dcb672e7`, {
    method: "GET",
    headers: {
      "apikey": ANON_KEY,
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });

  const data = await response.json();
  res.status(200).json(data);
}