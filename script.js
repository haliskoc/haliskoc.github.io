// Post verileri - Buraya yeni postlar ekleyebilirsiniz
const posts = [
    {
        id: 1,
        title: "first text",
        excerpt: "hello world this is my first blog text.",
        date: "August 7, 2025",
        content: `<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>first text</title></head><body><h1>first text</h1><p>hello world this is my first blog text.</p><a href='index.html'>turn the homepage</a></body></html>`
    }
];

// Sayaç değerleri - Bu değerleri değiştirebilirsiniz
const stats = {
    posts: posts.length,
    experience: 3,
    readers: 1250
};

// DOM yüklendiğinde çalışacak fonksiyonlar
document.addEventListener('DOMContentLoaded', function() {
    // Mobil menü toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Hamburger menü toggle
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Menü linklerine tıklandığında menüyü kapat
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (hamburger) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Navbar scroll efekti
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(0, 0, 0, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(255, 255, 255, 0.1)';
            } else {
                navbar.style.background = 'rgba(0, 0, 0, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        }
    });

    // Sayaçları güncelle
    updateCounters();

    // Postları yükle
    loadPosts();

    // Galeri filtreleme
    initGalleryFilters();

    // Fotoğraf yükleme özelliği
    initPhotoUpload();

    // İstatistik sayaç animasyonu
    const statElements = document.querySelectorAll('.stat-card h3, .stat-item h3');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.textContent);
                animateCounter(target, 0, finalValue, 2000);
                statsObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    statElements.forEach(stat => {
        statsObserver.observe(stat);
    });

    // Typing efekti için hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        typeWriter(heroTitle, text, 0, 100);
    }
});

// Galeri filtreleme fonksiyonu
function initGalleryFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Aktif buton stilini güncelle
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Filtreleme
            const filter = this.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeInUp 0.6s ease-out';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Fotoğraf yükleme özelliği
function initPhotoUpload() {
    // Profil fotoğrafı için
    const profilePhoto = document.getElementById('profile-image');
    const photoPlaceholder = document.getElementById('photo-placeholder');
    
    if (profilePhoto && photoPlaceholder) {
        // Profil fotoğrafı yüklendiğinde placeholder'ı gizle
        profilePhoto.addEventListener('load', function() {
            this.style.display = 'block';
            photoPlaceholder.style.display = 'none';
        });

        // Profil fotoğrafı yüklenemediğinde placeholder'ı göster
        profilePhoto.addEventListener('error', function() {
            this.style.display = 'none';
            photoPlaceholder.style.display = 'flex';
        });
    }

    // Galeri fotoğrafları için
    const galleryImages = document.querySelectorAll('.gallery-image');
    const imagePlaceholders = document.querySelectorAll('.image-placeholder');

    galleryImages.forEach((img, index) => {
        const placeholder = imagePlaceholders[index];
        
        if (img && placeholder) {
            // Fotoğraf yüklendiğinde placeholder'ı gizle
            img.addEventListener('load', function() {
                this.style.display = 'block';
                placeholder.style.display = 'none';
            });

            // Fotoğraf yüklenemediğinde placeholder'ı göster
            img.addEventListener('error', function() {
                this.style.display = 'none';
                placeholder.style.display = 'flex';
            });
        }
    });
}

// Sayaçları güncelle
function updateCounters() {
    // Ana sayfa sayaçları
    const postsCount = document.getElementById('posts-count');
    const experienceYears = document.getElementById('experience-years');
    const readersCount = document.getElementById('readers-count');

    if (postsCount) postsCount.textContent = stats.posts;
    if (experienceYears) experienceYears.textContent = stats.experience;
    if (readersCount) readersCount.textContent = stats.readers;

    // About sayfası sayaçları
    const aboutPostsCount = document.getElementById('about-posts-count');
    const aboutExperienceYears = document.getElementById('about-experience-years');
    const aboutReadersCount = document.getElementById('about-readers-count');

    if (aboutPostsCount) aboutPostsCount.textContent = stats.posts;
    if (aboutExperienceYears) aboutExperienceYears.textContent = stats.experience;
    if (aboutReadersCount) aboutReadersCount.textContent = stats.readers;
}

// Postları yükle
function loadPosts() {
    const container = document.getElementById('thoughts-container');
    if (!container) return;

    posts.forEach(post => {
        const postElement = createPostElement(post);
        container.appendChild(postElement);
    });
}

// Post elementi oluştur
function createPostElement(post) {
    const article = document.createElement('article');
    article.className = 'thought-card';
    article.innerHTML = `
        <div class="thought-date">${post.date}</div>
        <h3 class="thought-title">${post.title}</h3>
        <p class="thought-excerpt">${post.excerpt}</p>
        <a href="#" class="read-more" data-post-id="${post.id}">Read More</a>
    `;

    // Read More linkine tıklama
    const readMoreLink = article.querySelector('.read-more');
    readMoreLink.addEventListener('click', function(e) {
        e.preventDefault();
        showPostModal(post);
    });

    return article;
}

// Post modal'ı göster
function showPostModal(post) {
    // Mevcut modal'ı kaldır
    const existingModal = document.querySelector('.post-modal');
    if (existingModal) {
        existingModal.remove();
    }

    // Yeni modal oluştur
    const modal = document.createElement('div');
    modal.className = 'post-modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h2>${post.title}</h2>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-date">${post.date}</div>
            <div class="modal-body">
                <p>${post.content}</p>
            </div>
        </div>
    `;

    // Modal stilleri
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
    `;

    const overlay = modal.querySelector('.modal-overlay');
    overlay.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(5px);
    `;

    const content = modal.querySelector('.modal-content');
    content.style.cssText = `
        background: #000;
        border: 1px solid #333;
        border-radius: 12px;
        padding: 2rem;
        max-width: 600px;
        width: 100%;
        max-height: 80vh;
        overflow-y: auto;
        position: relative;
        z-index: 1;
    `;

    const header = modal.querySelector('.modal-header');
    header.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid #333;
    `;

    header.querySelector('h2').style.cssText = `
        color: #fff;
        font-size: 1.5rem;
        font-weight: 600;
        margin: 0;
    `;

    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: #fff;
        font-size: 2rem;
        cursor: pointer;
        padding: 0;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    const date = modal.querySelector('.modal-date');
    date.style.cssText = `
        color: #999;
        font-size: 0.9rem;
        margin-bottom: 1.5rem;
    `;

    const body = modal.querySelector('.modal-body');
    body.style.cssText = `
        color: #ccc;
        line-height: 1.8;
        font-size: 1.1rem;
    `;

    // Modal'ı sayfaya ekle
    document.body.appendChild(modal);

    // Kapatma işlevleri
    closeBtn.addEventListener('click', () => modal.remove());
    overlay.addEventListener('click', () => modal.remove());

    // ESC tuşu ile kapatma
    document.addEventListener('keydown', function closeOnEsc(e) {
        if (e.key === 'Escape') {
            modal.remove();
            document.removeEventListener('keydown', closeOnEsc);
        }
    });

    // Animasyon
    setTimeout(() => {
        content.style.transform = 'scale(1)';
        content.style.opacity = '1';
    }, 10);
}

// Sayaç animasyon fonksiyonu
function animateCounter(element, start, end, duration) {
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (end - start) * progress);
        element.textContent = current + (element.textContent.includes('+') ? '+' : '');
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Typewriter efekti
function typeWriter(element, text, index, speed) {
    if (index < text.length) {
        element.textContent += text.charAt(index);
        setTimeout(() => typeWriter(element, text, index + 1, speed), speed);
    }
}

// Sayfa yüklendiğinde loading efekti
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Scroll to top butonu
function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'scroll-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #fff;
        color: #000;
        border: none;
        cursor: pointer;
        font-size: 20px;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
    `;

    document.body.appendChild(button);

    // Scroll event listener
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });

    // Click event
    button.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Scroll to top butonunu oluştur
createScrollToTopButton();

// Parallax efekti için
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.abstract-shape');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Klavye kısayolları
document.addEventListener('keydown', function(e) {
    // ESC tuşu ile mobil menüyü kapat
    if (e.key === 'Escape') {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Yeni post ekleme fonksiyonu (geliştirici için)
function addNewPost(title, excerpt, content, date) {
    const newPost = {
        id: posts.length + 1,
        title: title,
        excerpt: excerpt,
        content: content,
        date: date
    };
    
    posts.push(newPost);
    stats.posts = posts.length;
    
    // Sayaçları güncelle
    updateCounters();
    
    // Eğer thoughts sayfasındaysak, yeni postu ekle
    const container = document.getElementById('thoughts-container');
    if (container) {
        const postElement = createPostElement(newPost);
        container.insertBefore(postElement, container.firstChild);
    }
    
    console.log('New post added:', newPost);
}

// Fotoğraf ekleme fonksiyonu (geliştirici için)
function addGalleryImage(imageSrc, category, title, description) {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid) return;

    const newItem = document.createElement('div');
    newItem.className = 'gallery-item';
    newItem.setAttribute('data-category', category);
    newItem.innerHTML = `
        <img src="${imageSrc}" alt="${title}" class="gallery-image">
        <div class="gallery-overlay">
            <h3>${title}</h3>
            <p>${description}</p>
        </div>
        <div class="image-placeholder">
            <span>📸</span>
            <p>Add Your Photo</p>
        </div>
    `;

    galleryGrid.appendChild(newItem);
    console.log('New gallery image added:', { imageSrc, category, title, description });
}

// Örnek kullanım:
// addNewPost(
//     "New Post Title",
//     "This is the excerpt of the new post...",
//     "This is the full content of the new post. You can write as much as you want here.",
//     "March 20, 2024"
// );

// addGalleryImage(
//     "images/new-gallery-image.jpg",
//     "travel",
//     "New Adventure",
//     "Exploring new horizons"
// ); 