export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Only POST method allowed" });
  }

  const SUPABASE_URL = "https://peupxardkrcgosdfhzfw.supabase.co";
  const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBldXB4YXJka3JjZ29zZGZoemZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE2OTk1NjMsImV4cCI6MjA2NzI3NTU2M30.sAv9ouFlirdNZ--M_NBYap51pcGGpXToW2JQ8DqmQVQ";
  const TOKEN = req.headers.authorization?.split(' ')[1];
  
  console.log("🔥 Fetching player data...");
  console.log("Request body:", req.body);
  console.log("Request headers:", req.headers);
  
  try {
    const { user_id } = req.body;

    if (!user_id) {
      return res.status(400).json({ error: "Missing user_id" });
    }

    const supabaseUrl = `${SUPABASE_URL}/rest/v1/players?id=eq.${user_id}`;
    const response = await fetch(supabaseUrl, {
      method: "GET",
      headers: {
        "apikey": ANON_KEY,
        "Authorization": `Bearer ${TOKEN}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();

    res.status(200).json(data);
  } catch (err) {
    console.error("🔥 Error fetch_player:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
