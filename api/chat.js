module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { messages } = req.body || {};
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Invalid messages' });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'API not configured' });

  try {
    const upstream = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + apiKey,
        'Content-Type': 'application/json',
        'HTTP-Referer': req.headers.referer || 'https://ale-natura.vercel.app',
        'X-Title': 'Meredith PHN Bot',
      },
      body: JSON.stringify({ model: 'openai/gpt-4o', messages, max_tokens: 600, temperature: 0.7 }),
    });

    if (!upstream.ok) throw new Error('upstream ' + upstream.status);
    const data = await upstream.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(502).json({ error: 'API call failed' });
  }
};
