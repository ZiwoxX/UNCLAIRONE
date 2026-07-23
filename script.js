    // 1. FIREBASE INITIALIZATION
const firebaseConfig = {
  apiKey: "AIzaSyAnouQgMTahiA0R3pyKb6n_qHYFhX4tfgU",
  authDomain: "website-25711.firebaseapp.com",
  databaseURL: "https://website-25711-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "website-25711",
  storageBucket: "website-25711.appspot.com",
  messagingSenderId: "38660762483",
  appId: "1:38660762483:web:8f0fa0be46a2e901ceb306",
  measurementId: "G-6VB4PRBFYV"
};
    if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig); }
    const db = firebase.firestore();
    const ADMIN_PW = "admin123"; 

    // 2. DATA SISWA (LENGKAP)
    const students = [
      {name: "Ainun Mardiansyah", age: 16, hobby: "Gatahu", instagram: "4inunranii_", photo: "image/Ainun.jpg", religion: "Islam", organization: "Rahasia", gallery: [], birthDate: "03-13", description: "Einun", quote: "The best way to predict the future is to create it."},
      {name: "Akifa Naila", age: 16, hobby: "Minta hotspot", instagram: "akiipanaila", photo: "image/Naila.jpg", religion: "Islam", organization: "UNIONE", gallery: [], birthDate: "01-28", description: "Kipa Nela", quote: "Every moment is a fresh beginning."},
      {name: "Akil Maula S", age: 16, hobby: "Mancing", instagram: "kikiuuuz", photo: "image/Akil.jpg", religion: "Islam", organization: "SEGA", gallery: [], birthDate: "12-31", description: "Starboy, Cool, Jenius, Proplayer epep", quote: "Know yourself, and be the best of yourself."},
      {name: "Amirah Zafirah", age: 15, hobby: "Yapping", instagram: "amirahpspra", photo: "image/Amirah.jpg", religion: "Islam", organization: "Paskibra", gallery: [], birthDate: "03-22", description: "Duta Yapping", quote: "Appreciate every process, because everything has its time."},
      {name: "Andi Naurah", age: 16, hobby: "Nonton Windah", instagram: "nauurahkhalilah", photo: "image/Naura.jpg", religion: "Islam", organization: "KITS/Sega/Sanggar Seni", gallery: [], birthDate: "04-22", description: "pendek", quote: "What are you so afraid of losing when nothing in this world belongs to you."},
      {name: "Anindya Ainun", age: 15, hobby: "gatau", instagram: "_anindyainun", photo: "image/Ainun purba.jpg", religion: "Islam", organization: "Smansa Voice", gallery: [], birthDate: "03-15", description: "nindi", quote: "Love the life you live, live the life you love."},
      {name: "Annisa Maylafaiza", age: 16, hobby: "Minta Hotspots", instagram: "annisamaylaa_", photo: "image/Anisa.jpg", religion: "Islam", organization: "Sanggar Seni", gallery: [], birthDate: "05-05", description: "Nisa", quote: "Dont be afraid to try, because every small step brings you closer to your goal"},
      {name: "Aprilia Hastikasari", age: 16, hobby: "Bebeng", instagram: "liaaahyy", photo: "image/April.jpg", religion: "Islam", organization: "Pramuka", gallery: [], birthDate: "04-29", description: "Intropet", quote: "Every day is an opportunity to be the best version of yourself."},
      {name: "Clarinta Amabel", age: 15, hobby: "Gemar Makan Batagor", instagram: "claebell", photo: "image/Aring.jpeg", religion: "Protestan", organization: "KITS/Inteens/Sega/PPKS", gallery: [], birthDate: "03-29", description: "Najim hotspot 4", quote: "The future is not waited for, but is shaped from today."},
      {name: "Dhia Syarafana", age: 16, hobby: "Slowmotion", instagram: "syeradelrey", photo: "image/Dhiaa.jpeg", religion: "Islam", organization: "City City Velocity", gallery: [], birthDate: "06-06", description: "DIA", quote: "Follow your dreams, not your boyfriends."},
      {name: "Fitri", age: 15, hobby: "yapping", instagram: "ffitri1_", photo: "image/Titi.jpg", religion: "Islam", organization: "Tidak Ada", gallery: [], birthDate: "01-11", description: "Gengster", quote: "Life is a journey, Enjoy the ride."},
      {name: "Hodia", age: 16, hobby: "Nonton Windah", instagram: "odiaa_a", photo: "image/Odi.jpg", religion: "Protestan", organization: "Sega/Inteens", gallery: [], birthDate: "08-26", description: "Kakram Lovers", quote: "Speak less, listen more. React less, observe more."},
      {name: "Husnul Khatimah", age: 16, hobby: "Main sama Rasya", instagram: "hsnllkhtmh__", photo: "image/Husnul.jpg", religion: "Islam", organization: "Pramuka", gallery: [], birthDate: "03-17", description: "Misterius", quote: "..."},
      {name: "Miftahul", age: 16, hobby: "Minta Hotspot", instagram: "miftahuljannah1507_", photo: "image/Mita.jpg", religion: "Islam", organization: "Smansa Voice/Velocity", gallery: [], birthDate: "07-15", description: "Najim hotspot 5", quote: "Learning is the key to opening the door to succes."},
      {name: "Fathur Jibriel", age: 15, hobby: "Basket", instagram: "ndadapateuy", photo: "image/patur.jpg", religion: "Islam", organization: "Basket", gallery: [], birthDate: "", description: "Proplayer emel", quote: "Learn from the past, live in the present, and plan for the future"},
      {name: "Muh.Ibrahim", age: 15, hobby: "Takraw", instagram: "ibe_6610", photo: "image/Ibe.jpg", religion: "Islam", organization: "Paskibra", gallery: [], birthDate: "", description: "Pengganggu mati aja", quote: "Believe in yourself."}, 
      {name: "Muh.Tsaqiff", age: 15, hobby: "Main epep", instagram: "muhtsaqiffal", photo: "image/Tsaqif.jpg", religion: "Islam", organization: "Smansa Voice", gallery: [], birthDate: "", description: "Kul, Proplayer epep", quote: "Don't give up, keep fighting"},
      {name: "Muh.Alif Falah Jordan", age: 15, hobby: "Basket", instagram: "_alipjrdan", photo: "image/Alip.jpg", religion: "Islam", organization: "Basket", gallery: [], birthDate: "12-11", description: "Pro player basket.", quote: "No pain, no gain."},
      {name: "Muh.Faiz Aswin", age: 15, hobby: "Bewan sama Akil", instagram: "mhmmdfaizz28", photo: "image/Faiz.jpg", religion: "Islam", organization: "Tidak Ada", gallery: [], birthDate: "02-28", description: "Cool, Tampan, Berwibawa", quote: "There is always a way for those who want to try."},
      {name: "Kink Muflih", age: 15, hobby: "Nonton KINK EMYU", instagram: "muflih_zaky", photo: "image/Mupli.jpg", religion: "Islam", organization: "Volly", gallery: [], birthDate: "", description: "Rapper, Coach ML", quote: "It is obligatory to be good in the eyes of God."},
      {name: "M.Raihaan", age: 15, hobby: "Topup Dm", instagram: "rhnzki_16", photo: "image/Rehan.jpg", religion: "Islam", organization: "SEGA", gallery: [], birthDate: "", description: "Multiteleng", quote: "Character is formed in the stormy waves of the world."},
      {name: "Nagym", age: 15, hobby: "Tidur", instagram: "nagymm_", photo: "image/Nagym.jpg", religion: "Islam", organization: "KITS", gallery: [], birthDate: "06-23", description: "Tidur adalah koentji'.", quote: "Be Yourself And Never Surrender."},
      {name: "Naufal Qawwiy", age: 15, hobby: "Tektok Gn", instagram: "naufalqawiyy", photo: "image/nopal.jpg", religion: "Islam", organization: "Wasipalah", gallery: [], birthDate: "04-23", description: "Setarboy, Multiteleng, Jenius", quote: "Believe you can and you're halfway there."},
      {name: "Nur Nadya Afifah", age: 16, hobby: "Mengaji", instagram: "dyaafifah_", photo: "image/Afifah.jpg", religion: "Islam", organization: "KPM/KITS", gallery: [], birthDate: "", description: "Misterius", quote: "Succes doesn't belong to smart people, succes belongs those who always try"},
      {name: "Nurfadillah Quinsya", age: 16, hobby: "nntndramaeverytaym", instagram: "nurfdilhqsya_", photo: "image/Nyonyo.jpg", religion: "Islam", organization: "Sanggar Seni", gallery: [], birthDate: "12-24", description: "Kenalin ini Nyonyok", quote: "Always be grateful, and keep trying to be better."},
      {name: "Qonitha Cleonima", age: 16, hobby: "Silat", instagram: "qoniitataa", photo: "image/Qoni.jpeg", religion: "Islam", organization: "Paskibra", gallery: [], birthDate: "", description: "Coniii", quote: "Don't say you can't before you try."},
      {name: "Rafailah Andini", age: 16, hobby: "Nda tau", instagram: "rafailahandini", photo: "image/dini.jpg", religion: "Islam", organization: "OSIS/PMR", gallery: [], birthDate: "04-02", description: "Misterius", quote: "Brains, beauty, and books."},
      {name: "Raihanah Nadira", age: 16, hobby: "Nonton yutub", instagram: "raihanadiraa", photo: "image/Reihana.jpeg", religion: "Islam", organization: "Sega/Sanggar Seni", gallery: [], birthDate: "", description: "Misterius", quote: "Character is formed in the stormy waves of the world."},
      {name: "Rasya Az'Zahra", age: 16, hobby: "Basket", instagram: "rasya_azzahra", photo: "image/Rasyaa.jpg", religion: "Islam", organization: "Basket", gallery: [], birthDate: "", description: "Misterius", quote: "..."},
      {name: "Aulia", age: 16, hobby: "Menggambar", instagram: "auliaaa_dn", photo: "image/Aul.jpg", religion: "Islam", organization: "Paskibra", gallery: [], birthDate: "", description: "Misterius", quote: "Believe in yourself."},
      {name: "ACOK NI BOS", age: 15, hobby: "anu", instagram: "rrezxkyy30", photo: "image/Aco.jpeg", religion: "Islam", organization: "OSIS/Paskibra", gallery: [], birthDate: "01-30", description: "Cool, Keren, Gantenk, Beraura, Baik", quote: "Don't plan too much, some of the most beatiful moments in our lives are actually unplanned."},
      {name: "Syifa BTR", age: 16, hobby: "nda tau", instagram: "syfabhtr_", photo: "image/Cipa.jpg", religion: "Islam", organization: "KITS/Inteens/Sanggar/PPS", gallery: [], birthDate: "09-09", description: "#Bata Out", quote: "Always breathe until you die."},
      {name: "Vanezia", age: 15, hobby: "Menari", instagram: "vvsloav_19", photo: "image/Vanes.jpeg", religion: "Islam", organization: "Sanggar Seni", gallery: [], birthDate: "", description: "Pendek", quote: "There is no such thing as failure in this life."},
      {name: "Wilyam", age: 15, hobby: "Gigit-Gigit", instagram: "ultraawill", photo: "image/Wilyam.jpg", religion: "Katolik", organization: "Smansa Voice/KITS", gallery: [], birthDate: "", description: "Wilyemm", quote: "Stay cool, for sure"},
      {name: "Zahra Mauaja", age: 16, hobby: "Mengaji", instagram: "zhrmdkyya", photo: "image/Yayaa.jpg", religion: "Islam", organization: "Tahfidz", gallery: [], birthDate: "", description: "Zahra mau aja", quote: "Dame ungger? Ungkeh."},
      {name: "Zyqri Al Farezqhi", age: 15, hobby: "main roblox", instagram: "zyqrialfarezqhi18", photo: "image/Zyqri.jpg", religion: "Islam", organization: "KITS/PMR", gallery: [], birthDate: "01-18", description: "Teman Teka Nagym", quote: "Better to fail trying than to regret for doing nothing."},
    ];

    const quotesCollection = [
        {text: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
        {text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein"},
        {text: "Laut yang tenang tidak melahirkan pelaut yang tangguh.", author: "Unknown"},
        {text: "Masa depan adalah milik mereka yang menyiapkannya hari ini.", author: "Unknown"},
    ];

    // 3. IMPROVED CANVAS PARTICLES (BIOLUMINESCENCE BUBBLES) - OPTIMIZED
    const canvas = document.getElementById('canvas-bg');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let particlesPaused = false;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas, { passive: true });
    resizeCanvas();

    // Pre-render sprite glow SEKALI ke canvas offscreen.
    // Jauh lebih murah daripada ctx.shadowBlur yang dihitung ulang tiap frame per partikel.
    function createGlowSprite(color) {
        const size = 32;
        const off = document.createElement('canvas');
        off.width = off.height = size;
        const octx = off.getContext('2d');
        const grad = octx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
        grad.addColorStop(0, color);
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        octx.fillStyle = grad;
        octx.fillRect(0, 0, size, size);
        return off;
    }
    const glowSpriteGold = createGlowSprite('rgba(212, 175, 55, 0.9)');
    const glowSpriteCyan = createGlowSprite('rgba(0, 255, 255, 0.9)');

    // Jumlah partikel tetap sama seperti versi asli (120) — beban berat sebelumnya
    // berasal dari ctx.shadowBlur per-frame, bukan dari jumlah partikelnya.
    const PARTICLE_COUNT = 120;

    class Bubble {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height + Math.random() * 100;
            this.size = Math.random() * 2.5 + 0.5; // Ukuran bervariasi
            this.speedY = Math.random() * 1.2 + 0.3;
            this.oscillation = Math.random() * 20 + 20; 
            this.oscSpeed = Math.random() * 0.03 + 0.01;
            this.angle = Math.random() * Math.PI * 2;
            this.alpha = Math.random() * 0.5 + 0.1;
            
            // 30% kemungkinan partikel menjadi 'magic plankton' emas/cyan
            this.isMagic = Math.random() > 0.7;
            this.sprite = this.isMagic ? (Math.random() > 0.5 ? glowSpriteGold : glowSpriteCyan) : null;
            this.color = `rgba(173, 216, 230, ${this.alpha * 0.5})`;
        }
        update() {
            this.y -= this.speedY;
            this.angle += this.oscSpeed;
            this.drawX = this.x + Math.sin(this.angle) * this.oscillation; 
            
            if(this.y < -50) this.reset();
        }
        draw() {
            if (this.isMagic && this.sprite) {
                // Gambar sprite glow yang sudah jadi (drawImage jauh lebih murah dari shadowBlur)
                const s = this.size * 9;
                ctx.globalAlpha = this.alpha;
                ctx.drawImage(this.sprite, this.drawX - s / 2, this.y - s / 2, s, s);
                ctx.globalAlpha = 1;
            } else {
                ctx.beginPath();
                ctx.arc(this.drawX, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }
    }

    function initParticles() {
        particles = [];
        for(let i=0; i<PARTICLE_COUNT; i++) particles.push(new Bubble());
    }
    
    function animateParticles() {
        if (!particlesPaused) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(); p.draw(); });
        }
        requestAnimationFrame(animateParticles);
    }
    initParticles();
    animateParticles();

    // Hentikan animasi saat tab tidak aktif (hemat CPU & baterai, terutama HP)
    document.addEventListener('visibilitychange', () => {
        particlesPaused = document.hidden;
    });

    // 4. SUBTITLE ROTATOR
    const greetingWords = ["Aga Kareba?", "The Royal Family of 10 C.1", "Family, Achievement, & Solidarity"];
    let greetingIdx = 0;
    setInterval(() => {
        const sub = document.getElementById('dynamicSubtitle');
        if(sub) {
            sub.style.opacity = 0;
            setTimeout(() => {
                sub.textContent = `"${greetingWords[greetingIdx]}"`;
                sub.style.opacity = 1;
                greetingIdx = (greetingIdx + 1) % greetingWords.length;
            }, 500);
        }
    }, 4000);

    // 5. MAIN LOGIC ON LOAD
    window.addEventListener('load', () => {
        // Loader ditutup segera setelah konten utama siap (bukan menunggu waktu tetap),
        // dengan fallback timeout sebagai jaring pengaman.
        const loader = document.getElementById('loader');
        let loaderHidden = false;
        const hideLoader = () => {
             if (loaderHidden) return;
             loaderHidden = true;
             loader.style.opacity = '0';
             setTimeout(() => { loader.style.display = 'none'; }, 800);
             if (window.ScrollTrigger) ScrollTrigger.refresh();
        };

        initContent();
        // Beri 2 frame agar DOM sempat ter-render sebelum loader hilang (transisi mulus)
        requestAnimationFrame(() => requestAnimationFrame(hideLoader));
        setTimeout(hideLoader, 1500); // fallback jika sesuatu lambat
    });

    function initContent() {
        renderStudents(); renderStats(); renderDailyQuote(); renderMarquee(); renderBirthdayWidget();
        loadMenfess();
        
        // BIRTHDAY POPUP CHECK (ON LOAD)
        const today = new Date();
        const m = String(today.getMonth()+1).padStart(2,'0');
        const d = String(today.getDate()).padStart(2,'0');
        const bdayKids = students.filter(s => s.birthDate === `${m}-${d}`);
        
        if(bdayKids.length > 0) {
             const bdayDiv = document.getElementById('birthdayContent');
             bdayDiv.innerHTML = ''; 
             bdayKids.forEach(k => {
                 bdayDiv.innerHTML += `
                    <div class="bday-card-premium">
                        <img src="${k.photo}" class="bday-img">
                        <h4 style="margin-top:10px; color:var(--c-gold-1);">${k.name}</h4>
                    </div>`;
             });
             document.getElementById('birthdayModalOverlay').classList.add('active');
             startConfetti(); 
        }
        
        // UPDATE POPUP
        if (localStorage.getItem('lastUpdateSeen') !== 'RoyalOceanV2') {
            setTimeout(() => document.getElementById('update-modal').classList.add('active'), 2500);
            localStorage.setItem('lastUpdateSeen', 'RoyalOceanV2'); 
        }
    }

    function closeUpdateModal() {
        document.getElementById('update-modal').classList.remove('active');
    }

    // --- NEW: WIDGET ULTAH BULAN INI ---
    function renderBirthdayWidget() {
        const today = new Date();
        const currentMonth = String(today.getMonth() + 1).padStart(2, '0');
        
        // Filter siswa yang ultah bulan ini
        const bdayStudents = students.filter(s => s.birthDate && s.birthDate.startsWith(currentMonth));
        
        // Sortir berdasarkan tanggal (dari awal bulan ke akhir bulan)
        bdayStudents.sort((a, b) => {
            const dateA = parseInt(a.birthDate.split('-')[1]);
            const dateB = parseInt(b.birthDate.split('-')[1]);
            return dateA - dateB;
        });

        const listContainer = document.getElementById('bdayWidgetList');
        
        if (bdayStudents.length > 0) {
            let html = '';
            bdayStudents.forEach(s => {
                const dateOnly = s.birthDate.split('-')[1]; // Ambil tanggalnya saja
                // Ambil nama depan saja agar muat
                const shortName = s.name.split('    ')[0]; 
                
                html += `
                <div class="bday-item-compact">
                    <span class="bday-date-badge">${dateOnly}</span> ${shortName}
                </div>`;
            });
            listContainer.innerHTML = html;
        } else {
            listContainer.innerHTML = '<span style="font-size:0.8rem; color:#888; margin-top:10px;">Tidak ada.</span>';
        }
    }

    function renderStudents() {
        const cont = document.getElementById('studentContainer');
        cont.innerHTML = '';
        // Bangun semua kartu dalam DocumentFragment dulu supaya browser hanya
        // melakukan satu kali reflow/layout, bukan 36 kali (satu per kartu).
        const fragment = document.createDocumentFragment();
        const cardEls = [];
        students.forEach((s) => {
            const el = document.createElement('div');
            el.className = 'jewel-card';
            el.innerHTML = `
                <div class="avatar-wrapper"><img src="${s.photo}" loading="lazy" decoding="async" class="avatar-img"></div>
                <h3 class="jewel-name">${s.name}</h3>
                <span class="jewel-role">${s.organization || 'SISWA'}</span>
                <p class="jewel-desc">${s.description}</p>
                <button class="btn-detail" onclick="openStudentModal('${s.name}')"><i class="fas fa-eye"></i> Profil</button>
            `;
            fragment.appendChild(el);
            cardEls.push(el);
        });
        cont.appendChild(fragment);

        // Inisialisasi VanillaTilt setelah semua kartu masuk DOM (desktop saja)
        if (window.innerWidth > 900 && window.VanillaTilt) {
            cardEls.forEach(el => VanillaTilt.init(el, { max: 5, speed: 400, glare: true, "max-glare": 0.1 }));
        }
        
        // GSAP Animation
        if (window.gsap) {
            gsap.to(".jewel-card", { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: ".grid-jewels", start: "top 85%" } });
        }
    }

    function renderMarquee() {
        const track = document.getElementById('marqueeContent');
        const activeQuotes = students.filter(s => s.quote && s.quote.length > 3);
        // Duplicate list for infinite scroll feel
        const items = [...activeQuotes, ...activeQuotes]; 
        
        track.innerHTML = items.map(s => `
            <div class="student-quote-card" onclick="openStudentModal('${s.name}')">
                <div class="sq-text">"${s.quote}"</div>
                <div style="text-align:right; font-size:0.8rem; color:var(--c-coral); font-weight:bold;">- ${s.name}</div>
            </div>
        `).join('');
    }

    window.filterStudents = () => {
        const term = document.getElementById('searchInput').value.toLowerCase();
        document.querySelectorAll('.jewel-card').forEach(card => {
            const name = card.querySelector('.jewel-name').textContent.toLowerCase();
            if (name.includes(term)) {
                card.style.display = 'flex';
                // Trigger reflow/anim
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // STUDENT MODAL & INTERACTION
    let currentStudent = null;
    let interactionListener = null;

    window.openStudentModal = async (name) => {
        const s = students.find(x => x.name === name);
        if(!s) return;
        currentStudent = s;
        document.getElementById('mPhoto').src = s.photo;
        document.getElementById('mName').textContent = s.name;
        document.getElementById('mRole').textContent = s.organization || 'SISWA';
        document.getElementById('mAge').textContent = s.age + " Tahun";
        document.getElementById('mHobby').textContent = s.hobby;
        document.getElementById('mOrg').textContent = s.organization;
        document.getElementById('mBirth').textContent = s.birthDate || "-";
        document.getElementById('mQuote').textContent = `"${s.quote}"`;
        document.getElementById('mDesc').textContent = s.description;

        switchTab('tab-bio');
        
        // Gallery logic
        const gGrid = document.getElementById('mGalleryGrid');
        gGrid.innerHTML = '';
        if(s.gallery && s.gallery.length > 0) {
            document.getElementById('noGalleryMsg').style.display='none';
            s.gallery.forEach((src, idx) => {
                const img = document.createElement('img');
                img.src = src; img.style.width='100%'; img.style.height='80px'; img.style.objectFit='cover'; img.style.borderRadius='8px';
                img.onclick = () => {
                     document.getElementById('lbImg').src = src;
                     document.getElementById('lightboxOverlay').classList.add('active');
                }
                gGrid.appendChild(img);
            });
        } else {
            document.getElementById('noGalleryMsg').style.display='block';
        }

        loadInteractions(s.name);
        document.getElementById('studentModalOverlay').classList.add('active');
    };

    window.closeStudentModal = () => {
        document.getElementById('studentModalOverlay').classList.remove('active');
        if(interactionListener) interactionListener();
    };

    function loadInteractions(name) {
        // Reset UI first
        const likeIcon = document.getElementById('likeIconAction');
        const isLiked = localStorage.getItem(`liked_${name}`);
        likeIcon.className = isLiked ? 'fas fa-heart' : 'far fa-heart';
        likeIcon.style.color = isLiked ? 'red' : 'inherit';

        // Realtime Listener
        interactionListener = db.collection('student_interactions').doc(name).onSnapshot(doc => {
            const data = doc.data() || { likes:0, comments: [] };
            document.getElementById('likeCountDisplay').textContent = data.likes;
            
            const box = document.getElementById('mChatBox');
            box.innerHTML = '';
            const cmts = data.comments || [];
            if(cmts.length === 0) box.innerHTML = '<p style="text-align:center; opacity:0.6;">Belum ada komentar.</p>';
            
            cmts.sort((a,b) => a.timestamp - b.timestamp).forEach(c => {
                const b = document.createElement('div');
                b.className = 'chat-bubble';
                b.innerHTML = `<div class="cb-user">${c.user}</div><div>${c.text}</div>`;
                box.appendChild(b);
            });
            box.scrollTop = box.scrollHeight;
        });
    }

    window.handleLike = () => {
        if(!currentStudent) return;
        const name = currentStudent.name;
        const ref = db.collection('student_interactions').doc(name);
        const isLiked = localStorage.getItem(`liked_${name}`);
        
        if(isLiked) {
            ref.set({ likes: firebase.firestore.FieldValue.increment(-1) }, { merge: true });
            localStorage.removeItem(`liked_${name}`);
            document.getElementById('likeIconAction').className = 'far fa-heart';
            document.getElementById('likeIconAction').style.color = 'inherit';
        } else {
            ref.set({ likes: firebase.firestore.FieldValue.increment(1) }, { merge: true });
            localStorage.setItem(`liked_${name}`, 'true');
            document.getElementById('likeIconAction').className = 'fas fa-heart';
            document.getElementById('likeIconAction').style.color = 'red';
        }
    };

    window.sendComment = () => {
        if(!currentStudent) return;
        const inp = document.getElementById('mCommentInput');
        const val = inp.value.trim();
        if(val.length < 2) return;
        
        db.collection('student_interactions').doc(currentStudent.name).set({
            comments: firebase.firestore.FieldValue.arrayUnion({ user: 'Siapa ya?', text: val, timestamp: Date.now() })
        }, { merge: true });
        inp.value = '';
    };

    window.switchTab = (id) => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
        const btns = document.querySelectorAll('.tab-btn');
        if(id === 'tab-bio') btns[0].classList.add('active');
        if(id === 'tab-gallery') btns[1].classList.add('active');
        if(id === 'tab-chat') btns[2].classList.add('active');
        document.getElementById(id).classList.add('active');
    };

    // UTILS
    function renderStats() {
        document.getElementById('statTotalStudents').textContent = students.length;
    }
    function renderDailyQuote() {
        const i = new Date().getDay() % quotesCollection.length;
        document.getElementById('dailyQuoteText').textContent = `"${quotesCollection[i].text}"`;
        document.getElementById('dailyAuthor').textContent = quotesCollection[i].author;
    }
    function updateClock() {
        const now = new Date();
        document.getElementById('realTimeClock').textContent = 
            String(now.getHours()).padStart(2,'0') + ':' + String(now.getMinutes()).padStart(2,'0');
    }
    setInterval(updateClock, 1000); updateClock();

    window.scrollToContent = () => document.getElementById('contentStart').scrollIntoView({behavior:'smooth'});
    window.scrollToTop = () => window.scrollTo({top:0, behavior:'smooth'});
    window.closeLightbox = () => document.getElementById('lightboxOverlay').classList.remove('active');

    // MENFESS
    function loadMenfess() {
        const track = document.getElementById('menfessTrack');
        db.collection('menfess').orderBy('timestamp','desc').limit(12).onSnapshot(snap => {
            track.innerHTML = '';
            if(snap.empty) { track.innerHTML = '<p style="grid-column:1/-1; text-align:center;">Laut sedang sunyi...</p>'; return; }
            snap.forEach(doc => {
                const d = doc.data();
                const el = document.createElement('div');
                el.className = 'mf-ticket';
                el.innerHTML = `
                    <div class="mf-to">To: ${d.to}</div>
                    <div class="mf-msg">"${d.content}"</div>
                    <div class="mf-from">From: ${d.from}</div>
                `;
                track.appendChild(el);
            });
        });
    }

    window.openMenfessModal = () => document.getElementById('menfessModalOverlay').classList.add('active');
    window.closeMenfessModal = () => document.getElementById('menfessModalOverlay').classList.remove('active');

    document.getElementById('menfessForm').addEventListener('submit', (e) => {
        e.preventDefault();
        db.collection('menfess').add({
            to: document.getElementById('mfTo').value,
            content: document.getElementById('mfContent').value,
            from: document.getElementById('mfFrom').value || 'Anonim',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => { alert("Pesan dihanyutkan!"); closeMenfessModal(); e.target.reset(); });
    });

    // ADMIN
    window.openAdminModal = () => document.getElementById('adminModalOverlay').classList.add('active');
    window.closeAdminModal = () => { document.getElementById('adminModalOverlay').classList.remove('active'); logoutAdmin(); };
    window.loginAdmin = () => {
        if(document.getElementById('adminPass').value === ADMIN_PW) {
            document.getElementById('adminLoginSection').style.display='none';
            document.getElementById('adminPanel').style.display='block';
            loadAdminList();
        } else { alert("Salah sandi!"); }
    };
    window.logoutAdmin = () => {
        document.getElementById('adminPanel').style.display='none';
        document.getElementById('adminLoginSection').style.display='block';
        document.getElementById('adminPass').value = '';
    };
    function loadAdminList() {
        const list = document.getElementById('adminList');
        db.collection('menfess').orderBy('timestamp','desc').limit(50).get().then(snap => {
            list.innerHTML = '';
            snap.forEach(doc => {
                const d = doc.data();
                const item = document.createElement('div');
                item.style.borderBottom = '1px solid #444'; item.style.padding = '10px';
                item.innerHTML = `<small>${d.to}</small><br>"${d.content}" <button onclick="delMsg('${doc.id}')" style="float:right; color:red;">X</button>`;
                list.appendChild(item);
            });
        });
    }
    window.delMsg = (id) => { if(confirm("Hapus?")) db.collection('menfess').doc(id).delete().then(loadAdminList); };

    // EXTRAS
    window.toggleMusic = () => {
        const p = document.getElementById('musicPlayer');
        if(p.style.display === 'none') {
            p.style.display = 'block';
            if(!p.innerHTML.trim()) {
                p.innerHTML = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DWXe9gFZP0gtP?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
            }
        } else { p.style.display = 'none'; }
    };

    window.toggleTidoreMode = () => {
        document.body.classList.toggle('tidore-mode');
        const icon = document.querySelector('.dock-item[title="Mode Malam/Siang"] i');
        icon.classList.toggle('fa-moon'); icon.classList.toggle('fa-sun');
    };

    // CONFETTI
    let confettiId;
    function startConfetti() {
        const c = document.getElementById('bdayConfetti');
        const ctx = c.getContext('2d');
        c.width = c.clientWidth; c.height = c.clientHeight;
        const pieces = Array.from({length:60}, () => ({
            x: Math.random()*c.width, y: Math.random()*c.height - c.height,
            color: `hsl(${Math.random()*50 + 40}, 100%, 50%)`, size: Math.random()*5+3, speed: Math.random()*3+2
        }));
        function loop() {
            ctx.clearRect(0,0,c.width,c.height);
            pieces.forEach(p => {
                p.y += p.speed;
                if(p.y > c.height) p.y = -10;
                ctx.fillStyle = p.color; ctx.fillRect(p.x, p.y, p.size, p.size);
            });
            confettiId = requestAnimationFrame(loop);
        }
        loop();
    }
    window.closeBirthdayModal = () => {
        document.getElementById('birthdayModalOverlay').classList.remove('active');
        cancelAnimationFrame(confettiId);
    };