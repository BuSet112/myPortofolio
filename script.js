document.addEventListener("DOMContentLoaded", () => {

    const safeGet = (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } };
    const safeSet = (k, v) => { try { localStorage.setItem(k, v); } catch (e) { /* diabaikan */ } };

    const experiences = [
        {
            role: "Committee Member & Referee, URRC Robotics Competition",
            company: "Universitas Dinamika Bangsa",
            type: "Organization",
            period: "October 2025 – February 2026",
            location: "Jambi, Indonesia",
            points: [
                "Actively contributed to the organization of the URRC Robotics Competition as a Field Division member, preparing and ensuring competition areas were ready for smooth event operations.",
                "Served as a referee, monitoring matches, enforcing competition rules, and maintaining fairness, discipline, and sportsmanship. Also supported the Event Division in planning, preparing, and executing activities according to the established schedule.",
                "Developed coordination, communication, attention to detail, decision-making, and teamwork skills through on-site operations, match supervision, and event management."
            ],
            tech: ["Excel", "Timer"]
        }
    ];

    const education = [
        {
            degree: "Sistem Komputer / Computer Systems (S.Kom)",
            institution: "Universitas Dinamika Bangsa",
            period: "2022 – 2026",
            gpa: "GPA 4.00 / 4.00",
            note: "I am a fast learner, responsible, adaptable, and capable of managing time effectively. I also possess strong problem-solving and critical-thinking skills, along with a passion for learning new things and continuously improving my abilities to meet the challenges of the professional world."
        }
    ];

    let lang = safeGet("portfolio-lang") === "id" ? "id" : "en";
    const ID = {
        "Home": "Beranda",
        "About": "Tentang",
        "Experience": "Pengalaman",
        "Skills": "Keahlian",
        "Journey": "Perjalanan",
        "Training": "Pelatihan",
        "Certificates": "Sertifikat",
        "Projects": "Proyek",
        "Contact": "Kontak",
        "Hello, I'm": "Halo, saya",
        "Open to work": "Terbuka untuk bekerja",
        "I'm into": "Saya tertarik pada",
        "I am interested in technology, electronics, Internet of Things, computer vision, and artificial intelligence.": "Saya tertarik pada teknologi, elektronika, Internet of Things, computer vision, dan kecerdasan buatan.",
        "View My Projects": "Lihat Proyek Saya",
        "Contact Me": "Hubungi Saya",
        "Download CV": "Unduh CV",
        "Projects Built": "Proyek Dibuat",
        "Technologies": "Teknologi",
        "Focus Areas": "Bidang Fokus",
        "Networking": "Jaringan",
        "Projects Completed": "Proyek Selesai",
        "Technologies Used": "Teknologi Digunakan",
        "Certificates Earned": "Sertifikat Diraih",
        "GET TO KNOW ME": "KENALI SAYA",
        "About Me": "Tentang Saya",
        "I am a technology enthusiast with an academic background in Computer Systems and a strong interest in developing technology-based systems. I enjoy exploring the integration of hardware and software to create practical and innovative solutions.": "Saya penggemar teknologi dengan latar belakang akademik Sistem Komputer dan minat besar pada pengembangan sistem berbasis teknologi. Saya senang mengeksplorasi integrasi perangkat keras dan perangkat lunak untuk menciptakan solusi yang praktis dan inovatif.",
        "My main areas of interest include Internet of Things (IoT), embedded systems, electronics, computer vision, and artificial intelligence. I have experience working with microcontrollers such as ESP32 and Arduino, sensors, Python programming, OpenCV, and YOLO-based object detection.": "Minat utama saya meliputi Internet of Things (IoT), sistem tertanam, elektronika, computer vision, dan kecerdasan buatan. Saya berpengalaman menggunakan mikrokontroler seperti ESP32 dan Arduino, sensor, pemrograman Python, OpenCV, dan deteksi objek berbasis YOLO.",
        "Through academic and personal projects, I have developed systems that combine computer vision and embedded technology, including real-time object detection using YOLO and IoT systems using ESP32 and sensors.": "Melalui proyek akademik dan pribadi, saya telah membangun sistem yang menggabungkan computer vision dan teknologi tertanam, termasuk deteksi objek real-time dengan YOLO dan sistem IoT dengan ESP32 dan sensor.",
        "I am continuously improving my skills in programming, artificial intelligence, computer vision, and system development while building projects that can be applied to real-world problems.": "Saya terus meningkatkan kemampuan di bidang pemrograman, kecerdasan buatan, computer vision, dan pengembangan sistem sambil membangun proyek yang dapat diterapkan pada masalah nyata.",
        "Artificial Intelligence": "Kecerdasan Buatan",
        "Education": "Pendidikan",
        "Computer Systems": "Sistem Komputer",
        "Interests": "Minat",
        "Technology": "Teknologi",
        "Networking • IoT • AI • Computer Vision": "Jaringan • IoT • AI • Computer Vision",
        "WHERE I'VE WORKED & STUDIED": "TEMPAT SAYA BEKERJA & BELAJAR",
        "Experience & Education": "Pengalaman & Pendidikan",
        "Work Experience": "Pengalaman Kerja",
        "WHAT I WORK WITH": "YANG SAYA KUASAI",
        "Programming": "Pemrograman",
        "ESP32, Arduino, sensors, microcontrollers, and IoT systems": "ESP32, Arduino, sensor, mikrokontroler, dan sistem IoT",
        "Image processing, object detection, OpenCV, and YOLO": "Pengolahan citra, deteksi objek, OpenCV, dan YOLO",
        "Dataset preparation, model training, evaluation, and deployment": "Penyiapan dataset, pelatihan model, evaluasi, dan deployment",
        "Electronics": "Elektronika",
        "Electronic circuits, sensors, microcontrollers, and hardware integration": "Rangkaian elektronik, sensor, mikrokontroler, dan integrasi perangkat keras",
        "Tools & Platforms": "Alat & Platform",
        "Beginner": "Pemula",
        "Intermediate": "Menengah",
        "Advanced": "Mahir",
        "HOW I GOT HERE": "BAGAIMANA SAYA SAMPAI DI SINI",
        "My Journey": "Perjalanan Saya",
        "First Steps into Electronics": "Langkah Pertama di Elektronika",
        "Began exploring electronic circuits and microcontrollers, laying the foundation for a growing interest in embedded systems.": "Mulai mengeksplorasi rangkaian elektronik dan mikrokontroler, yang menjadi dasar minat pada sistem tertanam.",
        "Diving into IoT & Embedded Systems": "Mendalami IoT & Sistem Tertanam",
        "Started building projects with ESP32, Arduino, and sensors, learning to connect hardware with real-world data.": "Mulai membuat proyek dengan ESP32, Arduino, dan sensor, belajar menghubungkan perangkat keras dengan data dunia nyata.",
        "Exploring Computer Vision": "Menjelajahi Computer Vision",
        "Began working with OpenCV and YOLO, building object detection systems for real-world use cases.": "Mulai menggunakan OpenCV dan YOLO untuk membangun sistem deteksi objek bagi kasus nyata.",
        "Bridging AI & Hardware": "Menjembatani AI & Perangkat Keras",
        "Combined computer vision, artificial intelligence, and embedded systems into complete end-to-end projects.": "Menggabungkan computer vision, kecerdasan buatan, dan sistem tertanam menjadi proyek utuh dari awal hingga akhir.",
        "Building This Portfolio": "Membangun Portofolio Ini",
        "Bringing everything learned so far together into a growing collection of IoT, AI, and computer vision projects.": "Menyatukan semua yang telah dipelajari ke dalam kumpulan proyek IoT, AI, dan computer vision yang terus bertambah.",
        "CONTINUOUS LEARNING": "BELAJAR TERUS-MENERUS",
        "Completed": "Selesai",
        "25 Hours": "25 Jam",
        "51 Hours": "51 Jam",
        "56 Hours": "56 Jam",
        "Completed the Microsoft Office Excel, Word & PowerPoint Specialist Bootcamp by Karirnex (PT Ebiz Karisma Internasional), earning an Expert designation after 25 hours of training. Covered Excel formulas and functions, data validation, VLOOKUP, INDEX MATCH, Pivot Tables, interactive dashboards, and VBA Macros, alongside document processing in Word and professional presentation design in PowerPoint.": "Menyelesaikan Bootcamp Microsoft Office Excel, Word & PowerPoint Specialist dari Karirnex (PT Ebiz Karisma Internasional) dengan predikat Expert setelah 25 jam pelatihan. Materi mencakup rumus dan fungsi Excel, validasi data, VLOOKUP, INDEX MATCH, Pivot Table, dashboard interaktif, dan VBA Macro, serta pengolahan dokumen di Word dan desain presentasi profesional di PowerPoint.",
        "Completed training in Deep Learning, covering neural networks using TensorFlow and Keras, Natural Language Processing (NLP), time series analysis, image classification, recommendation systems, reinforcement learning, machine learning model deployment, and Generative AI for text, image, and multimodal content generation.": "Menyelesaikan pelatihan Deep Learning yang mencakup jaringan saraf dengan TensorFlow dan Keras, Natural Language Processing (NLP), analisis deret waktu, klasifikasi citra, sistem rekomendasi, reinforcement learning, deployment model machine learning, dan Generative AI untuk pembuatan teks, gambar, dan konten multimodal.",
        "Completed Python programming training covering Python fundamentals, data manipulation, expressions, sequential actions, control flow, arrays, matrices, functions and procedures, Object-Oriented Programming (OOP), PEP 8 coding standards, unit testing, and popular Python libraries for data processing, web scraping, machine learning, and web development.": "Menyelesaikan pelatihan pemrograman Python yang mencakup dasar Python, manipulasi data, ekspresi, aksi berurutan, alur kontrol, array, matriks, fungsi dan prosedur, Object-Oriented Programming (OOP), standar kode PEP 8, unit testing, serta pustaka Python populer untuk pengolahan data, web scraping, machine learning, dan pengembangan web.",
        "CREDENTIALS": "KREDENSIAL",
        "Certifications": "Sertifikasi",
        "View Certificate": "Lihat Sertifikat",
        "February 2026": "Februari 2026",
        "January 2026": "Januari 2026",
        "October 2026": "Oktober 2026",
        "Score: [EDIT]": "Skor: [EDIT]",
        "MY WORK": "KARYA SAYA",
        "All Projects": "Semua Proyek",
        "View Details": "Lihat Detail",
        "Embedded System": "Sistem Tertanam",
        "Object detection system for identifying electronic components using computer vision and artificial intelligence.": "Sistem deteksi objek untuk mengidentifikasi komponen elektronik menggunakan computer vision dan kecerdasan buatan.",
        "IoT-based system using ESP32 and sensors for monitoring, measurement, and data collection.": "Sistem berbasis IoT dengan ESP32 dan sensor untuk pemantauan, pengukuran, dan pengumpulan data.",
        "Real-time IoT-based monitoring system for soil moisture and plant temperature using ESP32 to track environmental conditions and support efficient plant care.": "Sistem pemantauan IoT real-time untuk kelembapan tanah dan suhu tanaman menggunakan ESP32 guna memantau kondisi lingkungan dan mendukung perawatan tanaman yang efisien.",
        "Real-time computer vision system developed using YOLO to detect motorcycle safety attributes, including helmets and mirrors, and recognize motorcycle license plates in empty parking lots.": "Sistem computer vision real-time berbasis YOLO untuk mendeteksi atribut keselamatan sepeda motor, termasuk helm dan spion, serta mengenali pelat nomor sepeda motor di area parkir kosong.",
        "Computer vision system for detecting and classifying raw rambak crackers into normal and moldy conditions using YOLOv8.": "Sistem computer vision untuk mendeteksi dan mengklasifikasikan kerupuk rambak mentah menjadi kondisi normal dan berjamur menggunakan YOLOv8.",
        "Autonomous line-following robot designed to detect and follow predefined paths using sensors and microcontroller-based control systems, ensuring accurate navigation and movement.": "Robot pengikut garis otonom yang dirancang untuk mendeteksi dan mengikuti jalur yang telah ditentukan menggunakan sensor dan sistem kendali berbasis mikrokontroler, sehingga navigasi dan gerakannya akurat.",
        "GET IN TOUCH": "HUBUNGI SAYA",
        "Interested in working together, discussing a project, or connecting with me? Feel free to reach out through any of the channels below.": "Tertarik bekerja sama, membahas proyek, atau sekadar terhubung dengan saya? Silakan hubungi saya melalui salah satu kanal di bawah ini.",
        "Location": "Lokasi",
        "Name": "Nama",
        "Message": "Pesan",
        "Send Message": "Kirim Pesan",
        "Budi Setiawan. All rights reserved.": "Budi Setiawan. Hak cipta dilindungi.",
        "View Source / Demo": "Lihat Kode / Demo",
        "Committee Member & Referee, URRC Robotics Competition": "Panitia & Wasit, Lomba Robot URRC",
        "Organization": "Organisasi",
        "October 2025 – February 2026": "Oktober 2025 – Februari 2026",
        "Actively contributed to the organization of the URRC Robotics Competition as a Field Division member, preparing and ensuring competition areas were ready for smooth event operations.": "Berkontribusi aktif dalam penyelenggaraan Lomba Robot URRC sebagai anggota Divisi Lapangan, menyiapkan dan memastikan area lomba siap agar acara berjalan lancar.",
        "Served as a referee, monitoring matches, enforcing competition rules, and maintaining fairness, discipline, and sportsmanship. Also supported the Event Division in planning, preparing, and executing activities according to the established schedule.": "Bertugas sebagai wasit, memantau pertandingan, menegakkan aturan lomba, serta menjaga keadilan, disiplin, dan sportivitas. Juga mendukung Divisi Acara dalam merencanakan, menyiapkan, dan melaksanakan kegiatan sesuai jadwal.",
        "GPA 4.00 / 4.00": "IPK 4.00 / 4.00",
        "Result:": "Hasil:",
        "Developed coordination, communication, attention to detail, decision-making, and teamwork skills through on-site operations, match supervision, and event management.": "Mengembangkan keterampilan koordinasi, komunikasi, ketelitian, pengambilan keputusan, dan kerja sama tim melalui operasional di lokasi, pengawasan pertandingan, dan manajemen acara.",
        "I am a fast learner, responsible, adaptable, and capable of managing time effectively. I also possess strong problem-solving and critical-thinking skills, along with a passion for learning new things and continuously improving my abilities to meet the challenges of the professional world.": "Saya cepat belajar, bertanggung jawab, mudah beradaptasi, dan mampu mengatur waktu dengan baik. Saya juga memiliki kemampuan pemecahan masalah dan berpikir kritis yang kuat, serta semangat mempelajari hal baru dan terus meningkatkan kemampuan untuk menghadapi tantangan dunia profesional.",
        "Score: 587": "Skor: 587",
        "Collected and annotated an electronic component dataset consisting of resistors, capacitors, transistors, diodes, and integrated circuits (ICs). Performed image preprocessing, trained a YOLOv8 object detection model, and evaluated its performance using Precision, Recall, and mAP metrics. Developed a real-time detection system using Python, PyTorch, Ultralytics, and OpenCV.": "Mengumpulkan dan menganotasi dataset komponen elektronik berupa resistor, kapasitor, transistor, dioda, dan integrated circuit (IC). Melakukan prapemrosesan citra, melatih model deteksi objek YOLOv8, dan mengevaluasi kinerjanya dengan metrik Precision, Recall, dan mAP. Mengembangkan sistem deteksi real-time menggunakan Python, PyTorch, Ultralytics, dan OpenCV.",
        "Designed and assembled the electronic control circuit for a chick brooding enclosure, integrated temperature sensors with the ESP32 microcontroller, developed the ESP32 firmware for real-time temperature monitoring and automatic control, and conducted system testing to evaluate temperature regulation performance.": "Merancang dan merakit rangkaian kendali elektronik untuk kandang pemanas anak ayam, mengintegrasikan sensor suhu dengan mikrokontroler ESP32, membuat firmware ESP32 untuk pemantauan suhu real-time dan kontrol otomatis, serta melakukan pengujian sistem untuk mengevaluasi kinerja pengaturan suhu.",
        "Designed and assembled the electronic circuit, integrated soil moisture and temperature sensors with the ESP32 microcontroller, developed the ESP32 firmware for real-time monitoring of soil moisture and plant temperature, and conducted system testing to ensure accurate sensor readings and reliable data collection.": "Merancang dan merakit rangkaian elektronik, mengintegrasikan sensor kelembapan tanah dan suhu dengan mikrokontroler ESP32, membuat firmware ESP32 untuk pemantauan kelembapan tanah dan suhu tanaman secara real-time, serta melakukan pengujian sistem agar pembacaan sensor akurat dan pengumpulan data andal.",
        "Assisted a friend in developing a thesis project by designing and implementing a motorcycle safety detection and license plate recognition system. Contributed to dataset preparation and annotation, YOLO model training, and integration of EasyOCR for license plate recognition. Also developed the real-time detection system using Python and OpenCV, integrated the ESP32 with an HC-SR04 ultrasonic sensor and buzzer for violation alerts, and participated in system testing and performance evaluation.": "Membantu seorang teman mengerjakan proyek skripsi dengan merancang dan mengimplementasikan sistem deteksi keselamatan berkendara dan pengenalan pelat nomor sepeda motor. Berkontribusi pada penyiapan dan anotasi dataset, pelatihan model YOLO, dan integrasi EasyOCR untuk pengenalan pelat nomor. Juga mengembangkan sistem deteksi real-time dengan Python dan OpenCV, mengintegrasikan ESP32 dengan sensor ultrasonik HC-SR04 dan buzzer untuk peringatan pelanggaran, serta ikut dalam pengujian dan evaluasi kinerja sistem.",
        "Assisted a friend in developing a thesis project focused on detecting moldy raw rambak crackers using computer vision. Contributed to dataset collection and annotation, image preprocessing and augmentation, YOLO model training, and performance evaluation using precision, recall, and mAP metrics. Also assisted in developing and testing the object detection system using Python and OpenCV.": "Membantu seorang teman mengerjakan proyek skripsi tentang deteksi kerupuk rambak mentah berjamur menggunakan computer vision. Berkontribusi pada pengumpulan dan anotasi dataset, prapemrosesan dan augmentasi citra, pelatihan model YOLO, serta evaluasi kinerja dengan metrik precision, recall, dan mAP. Juga membantu mengembangkan dan menguji sistem deteksi objek dengan Python dan OpenCV.",
        "Independently designed and developed a line follower robot, including electronic circuit assembly, sensor integration, and microcontroller programming. Implemented the control logic for line detection and autonomous navigation, and conducted testing and troubleshooting to improve the robot's movement accuracy and performance.": "Merancang dan membuat robot line follower secara mandiri, mencakup perakitan rangkaian elektronik, integrasi sensor, dan pemrograman mikrokontroler. Menerapkan logika kendali untuk deteksi garis dan navigasi otonom, serta melakukan pengujian dan pemecahan masalah untuk meningkatkan akurasi dan kinerja gerak robot.",
        "My Contribution:": "Kontribusi Saya:",
        "Please fill in every field before sending.": "Mohon isi semua kolom sebelum mengirim.",
        "Opening your email app to send this message...": "Membuka aplikasi email untuk mengirim pesan ini...",
        "Your name": "Nama Anda",
        "Tell me about your project or question...": "Ceritakan proyek atau pertanyaan Anda..."
};
    const norm = (t) => String(t).replace(/\s+/g, " ").trim();
    const tr = (t) => (lang === "id" && ID[norm(t)]) || t;

    const esc = (v) => String(v ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

    function renderList(id, items, tpl) {
        const el = document.getElementById(id);
        if (!el) return;
        el.innerHTML = items.map(tpl).join("");
        el.querySelectorAll(".exp-item").forEach(i => i.classList.add("reveal"));
    }

    renderList("experienceList", experiences, (e) => `
        <article class="exp-item">
            <div class="exp-top"><h4 class="exp-role">${esc(e.role)}</h4><span class="exp-type">${esc(e.type)}</span></div>
            <p class="exp-company">${esc(e.company)}</p>
            <div class="exp-meta">
                <span><i class="fa-regular fa-calendar"></i>${esc(e.period)}</span>
                ${e.location ? `<span><i class="fa-solid fa-location-dot"></i>${esc(e.location)}</span>` : ""}
            </div>
            <ul class="exp-points">${(e.points || []).map(p => `<li>${esc(p)}</li>`).join("")}</ul>
            <div class="project-tech">${(e.tech || []).map(t => `<span>${esc(t)}</span>`).join("")}</div>
        </article>`);

    renderList("educationList", education, (e) => `
        <article class="exp-item">
            <div class="exp-top"><h4 class="exp-role">${esc(e.degree)}</h4>${e.gpa ? `<span class="exp-type">${esc(e.gpa)}</span>` : ""}</div>
            <p class="exp-company">${esc(e.institution)}</p>
            <div class="exp-meta"><span><i class="fa-regular fa-calendar"></i>${esc(e.period)}</span></div>
            ${e.note ? `<p class="exp-note">${esc(e.note)}</p>` : ""}
        </article>`);

    if (!experiences.length) document.getElementById("experienceCol")?.remove();
    if (!education.length) document.getElementById("educationCol")?.remove();
    if (!experiences.length && !education.length) {
        document.getElementById("experience")?.remove();
        document.querySelector('.nav-menu a[href="#experience"]')?.remove();
    }


    /* ---------- PRELOADER ---------- */
    const preloader = document.getElementById("preloader");
    function hidePreloader() {
        if (preloader) preloader.classList.add("hidden");
        if (!introPlayed) playHeroIntro();
    }
    window.addEventListener("load", () => setTimeout(hidePreloader, 300));
    setTimeout(hidePreloader, 2500); // fallback


    /* ---------- MOBILE NAV ---------- */
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            const isOpen = navMenu.classList.contains("active");
            menuToggle.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
            document.body.style.overflow = isOpen ? "hidden" : "";
        });

        document.querySelectorAll(".nav-menu a").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
                document.body.style.overflow = "";
            });
        });
    }


    /* ---------- DARK MODE ---------- */
    const themeToggle = document.getElementById("themeToggle");
    const root = document.documentElement;
    const savedTheme = safeGet("portfolio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
        root.setAttribute("data-theme", "dark");
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const isDark = root.getAttribute("data-theme") === "dark";
            if (isDark) {
                root.removeAttribute("data-theme");
                safeSet("portfolio-theme", "light");
            } else {
                root.setAttribute("data-theme", "dark");
                safeSet("portfolio-theme", "dark");
            }
        });
    }


    /* ---------- SCROLL PROGRESS BAR ---------- */
    const scrollProgress = document.getElementById("scrollProgress");
    function updateScrollProgress() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        if (scrollProgress) scrollProgress.style.width = percent + "%";
        const nav = document.querySelector(".navbar");
        if (nav) nav.classList.toggle("scrolled", scrollTop > 20);
    }


    /* ---------- NAVBAR ACTIVE LINK ON SCROLL ---------- */
    const sections = document.querySelectorAll("main section[id]");
    const navLinksAll = document.querySelectorAll(".nav-menu a");

    function updateActiveNav() {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });
        navLinksAll.forEach(link => {
            link.classList.toggle("active", link.getAttribute("href") === "#" + current);
        });
    }


    /* ---------- BACK TO TOP ---------- */
    const backToTop = document.getElementById("backToTop");
    function updateBackToTop() {
        if (!backToTop) return;
        backToTop.classList.toggle("visible", window.scrollY > 500);
    }
    if (backToTop) {
        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }


    /* ---------- COMBINED SCROLL LISTENER ---------- */
    window.addEventListener("scroll", () => {
        updateScrollProgress();
        updateActiveNav();
        updateBackToTop();
    });
    updateScrollProgress();
    updateActiveNav();
    updateBackToTop();


    /* ---------- TYPING EFFECT (HERO ROLE) ---------- */
    document.documentElement.classList.add("js-anim");
    const typingEl = document.getElementById("typingRole");
    const roles = ["Computer Systems Graduate", "IoT Developer", "Computer Vision Engineer", "AI Enthusiast"];
    let roleIndex = 0, charIndex = 0, isDeleting = false, typingTimer = null;

    function typeLoop() {
        const currentRole = roles[roleIndex];
        charIndex += isDeleting ? -1 : 1;
        typingEl.textContent = currentRole.substring(0, charIndex);
        let speed = isDeleting ? 45 : 90;
        if (!isDeleting && charIndex === currentRole.length) {
            speed = 1600; isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; speed = 300;
        }
        typingTimer = setTimeout(typeLoop, speed);
    }
    function restartTyping() {
        if (!typingEl) return;
        clearTimeout(typingTimer);
        roleIndex = 0; charIndex = 0; isDeleting = false;
        typingEl.textContent = "";
        typeLoop();
    }

    const hero = document.getElementById("home");
    let introPlayed = false;
    let heroLeft = false;

    function playHeroIntro() {
        introPlayed = true;
        if (hero) {
            hero.classList.remove("intro-play");
            void hero.offsetWidth; 
            hero.classList.add("intro-play");
        }
        restartTyping();
    }

    if (hero) {
        new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.intersectionRatio === 0) heroLeft = true;
                else if (entry.intersectionRatio >= 0.35 && heroLeft) {
                    heroLeft = false;
                    playHeroIntro();
                }
            });
        }, { threshold: [0, 0.35] }).observe(hero);
    }

    const revealEls = document.querySelectorAll(".reveal");
    revealEls.forEach(el => {
        const sibs = [...el.parentElement.children].filter(c => c.classList.contains("reveal"));
        el.style.transitionDelay = Math.min(sibs.indexOf(el), 5) * 0.09 + "s";
    });
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio >= 0.15) entry.target.classList.add("in-view");
            else if (entry.intersectionRatio === 0) entry.target.classList.remove("in-view");
        });
    }, { threshold: [0, 0.15] });
    revealEls.forEach(el => revealObserver.observe(el));


    /* ---------- STAT COUNTERS (berulang) ---------- */
    function runCounter(el) {
        if (el._done) return;
        el._done = true;
        const target = parseInt(el.dataset.count, 10) || 0;
        const suffix = el.dataset.suffix || "";
        const startTime = performance.now();
        function step(now) {
            const progress = Math.min((now - startTime) / 1400, 1);
            el.textContent = Math.round((1 - Math.pow(1 - progress, 3)) * target) + suffix;
            if (progress < 1) el._raf = requestAnimationFrame(step);
        }
        el._raf = requestAnimationFrame(step);
    }
    function resetCounter(el) {
        cancelAnimationFrame(el._raf);
        el._done = false;
        el.textContent = "0" + (el.dataset.suffix || "");
    }
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio >= 0.4) runCounter(entry.target);
            else if (entry.intersectionRatio === 0) resetCounter(entry.target);
        });
    }, { threshold: [0, 0.4] });
    document.querySelectorAll(".stat-number").forEach(el => statObserver.observe(el));


    /* ---------- SKILL PROGRESS BARS (berulang) ---------- */
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio >= 0.3) entry.target.style.width = entry.target.dataset.percent + "%";
            else if (entry.intersectionRatio === 0) entry.target.style.width = "0%";
        });
    }, { threshold: [0, 0.3] });
    document.querySelectorAll(".skill-bar-fill").forEach(bar => skillObserver.observe(bar));


    /* ---------- IMAGE FALLBACK (foto proyek belum diisi) ---------- */
    document.querySelectorAll("img[data-fallback]").forEach(img => {
        img.addEventListener("error", () => {
            img.classList.add("broken");
        });
    });


    /* ---------- PROJECT FILTER ---------- */
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.dataset.filter;

            projectCards.forEach(card => {
                const cats = (card.dataset.category || "").split(" ");
                const show = filter === "all" || cats.includes(filter);
                card.classList.toggle("hidden-by-filter", !show);
            });
        });
    });


    /* ---------- PROJECT MODAL ---------- */
    const modalOverlay = document.getElementById("projectModal");
    const modalImage = modalOverlay ? modalOverlay.querySelector(".modal-image img") : null;
    const modalFallback = modalOverlay ? modalOverlay.querySelector(".modal-image .img-fallback") : null;
    const modalCategory = modalOverlay ? modalOverlay.querySelector(".modal-category") : null;
    const modalTitle = modalOverlay ? modalOverlay.querySelector(".modal-title") : null;
    const modalDesc = modalOverlay ? modalOverlay.querySelector(".modal-desc") : null;
    const modalTech = modalOverlay ? modalOverlay.querySelector(".modal-tech") : null;
    const modalClose = modalOverlay ? modalOverlay.querySelector(".modal-close") : null;

    function openModal(card) {
        if (!modalOverlay) return;

        const title = card.dataset.title || "";
        const desc = card.dataset.desc || "";
        const tech = (card.dataset.tech || "").split(",").map(t => t.trim()).filter(Boolean);
        const img = card.dataset.img || "";
        const catLabel = card.querySelector(".project-category") ? card.querySelector(".project-category").textContent.trim() : "";
        const catClass = card.querySelector(".project-category") ? card.querySelector(".project-category").className.replace("project-category", "").trim() : "";

        if (modalImage) {
            modalImage.src = img;
            modalImage.alt = title;
            modalImage.classList.remove("broken");
        }
        if (modalCategory) {
            modalCategory.textContent = tr(catLabel);
            modalCategory.className = "project-category modal-category " + catClass;
        }
        if (modalTitle) modalTitle.textContent = title;
        if (modalDesc) modalDesc.textContent = tr(desc);

        const modalResult = modalOverlay.querySelector(".modal-result");
        const modalLink = modalOverlay.querySelector(".modal-link");
        if (modalResult) modalResult.textContent = card.dataset.result ? tr("Result:") + " " + card.dataset.result : "";
        const modalRole = modalOverlay.querySelector(".modal-role");
        if (modalRole) modalRole.innerHTML = card.dataset.role ? "<strong>" + esc(tr("My Contribution:")) + "</strong> " + esc(tr(card.dataset.role)) : "";
        if (modalLink) {
            modalLink.hidden = !card.dataset.link;
            modalLink.href = card.dataset.link || "#";
        }
        if (modalTech) {
            modalTech.innerHTML = "";
            tech.forEach(t => {
                const span = document.createElement("span");
                span.textContent = t;
                modalTech.appendChild(span);
            });
        }

        modalOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        if (!modalOverlay) return;
        modalOverlay.classList.remove("active");
        document.body.style.overflow = "";
    }

    document.querySelectorAll("[data-open-modal]").forEach(btn => {
        btn.addEventListener("click", () => {
            const card = btn.closest(".project-card");
            if (card) openModal(card);
        });
    });

    if (modalClose) modalClose.addEventListener("click", closeModal);
    if (modalOverlay) {
        modalOverlay.addEventListener("click", (e) => {
            if (e.target === modalOverlay) closeModal();
        });
    }
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
    });


    /* ---------- CERTIFICATE VIEWER ---------- */
    const certModal = document.getElementById("certModal");
    if (certModal) {
        const certImg = certModal.querySelector("img");
        const certTitle = certModal.querySelector(".modal-title");
        const certInfo = certModal.querySelector(".modal-desc");
        const closeCert = () => {
            certModal.classList.remove("active");
            document.body.style.overflow = "";
        };
        document.querySelectorAll("[data-open-cert]").forEach(btn => {
            btn.addEventListener("click", () => {
                const card = btn.closest(".cert-card");
                certImg.classList.remove("broken");
                certImg.src = card.dataset.img || "";
                certImg.alt = card.dataset.title || "";
                certTitle.textContent = card.dataset.title || "";
                certInfo.textContent = card.dataset.issuer || "";
                certModal.classList.add("active");
                document.body.style.overflow = "hidden";
            });
        });
        certModal.querySelector(".modal-close").addEventListener("click", closeCert);
        certModal.addEventListener("click", (e) => { if (e.target === certModal) closeCert(); });
        document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeCert(); });
    }


    if (window.matchMedia("(hover: hover)").matches) {
        document.querySelectorAll(".skill-card, .project-card, .cert-card, .train-card").forEach(card => {
            let delay = "";
            card.addEventListener("mouseenter", () => {
                delay = card.style.transitionDelay;
                card.style.transitionDelay = "0s";
                card.classList.add("tilting");
            });
            card.addEventListener("mousemove", (e) => {
                const r = card.getBoundingClientRect();
                const x = (e.clientX - r.left) / r.width - 0.5;
                const y = (e.clientY - r.top) / r.height - 0.5;
                card.style.transform = `perspective(900px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateY(-6px)`;
            });
            card.addEventListener("mouseleave", () => {
                card.style.transform = "";
                card.style.transitionDelay = delay;
                card.classList.remove("tilting");
            });
        });
    }


    /* ---------- CONTACT FORM ---------- */
    const contactForm = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("cfName").value.trim();
            const email = document.getElementById("cfEmail").value.trim();
            const message = document.getElementById("cfMessage").value.trim();

            if (!name || !email || !message) {
                if (formStatus) {
                    formStatus.textContent = tr("Please fill in every field before sending.");
                    formStatus.className = "form-status";
                }
                return;
            }

            const subject = encodeURIComponent("Portfolio Contact from " + name);
            const body = encodeURIComponent(message + "\n\n— " + name + " (" + email + ")");

            window.location.href = `mailto:budisetiawan.tebo@gmail.com?subject=${subject}&body=${body}`;

            if (formStatus) {
                formStatus.textContent = tr("Opening your email app to send this message...");
                formStatus.className = "form-status success";
            }
        });
    }


    /* ---------- LANGUAGE SWITCH ---------- */
    const langToggle = document.getElementById("langToggle");
    const textOrig = new WeakMap();

    function applyLang() {
        document.documentElement.lang = lang;
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode(n) {
                const p = n.parentElement;
                if (!p || p.closest("script, style, #typingRole, #preloader") || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
                return NodeFilter.FILTER_ACCEPT;
            }
        });
        const nodes = [];
        while (walker.nextNode()) nodes.push(walker.currentNode);
        nodes.forEach(n => {
            if (!textOrig.has(n)) textOrig.set(n, n.nodeValue);
            const orig = textOrig.get(n);
            const t = ID[norm(orig)];
            if (lang === "id" && t) {
                n.nodeValue = orig.match(/^\s*/)[0] + t + orig.match(/\s*$/)[0];
            } else {
                n.nodeValue = orig;
            }
        });
        document.querySelectorAll("[placeholder]").forEach(el => {
            if (!el.dataset.ph) el.dataset.ph = el.placeholder;
            el.placeholder = (lang === "id" && ID[el.dataset.ph]) || el.dataset.ph;
        });
        if (langToggle) langToggle.textContent = lang === "id" ? "EN" : "ID";
    }

    if (langToggle) {
        langToggle.addEventListener("click", () => {
            lang = lang === "id" ? "en" : "id";
            safeSet("portfolio-lang", lang);
            applyLang();
        });
    }
    applyLang();


    /* ---------- FOOTER YEAR ---------- */
    const yearEl = document.getElementById("currentYear");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

});