// Modern Post verileri - Buraya yeni postlar ekleyebilirsiniz
const posts = [
    {
        id: 1,
        title: "first text",
        excerpt: "hello world this is my first blog text.",
        date: "August 7, 2025",
        content: `<h1>First Text</h1><p>Hello world, this is my first blog text. Welcome to my personal space where I share my thoughts and experiences.</p><p>This is just the beginning of my journey in sharing my perspective on life, technology, and everything in between.</p>`
    }
];

// Modern Sayaç değerleri - Bu değerleri değiştirebilirsiniz
const stats = {
    posts: posts.length,
    experience: 3,
    readers: 1250
};

// Modern DOM yüklendiğinde çalışacak fonksiyonlar
document.addEventListener('DOMContentLoaded', function() {
    // Modern scroll progress indicator
    createScrollProgressIndicator();
    
    // Modern mobil menü toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Modern hamburger menü toggle
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            const isActive = hamburger.classList.contains('active');
            
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Modern accessibility attributes
            hamburger.setAttribute('aria-expanded', !isActive);
            
            // Modern body scroll lock
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }

    // Modern menü linklerine tıklandığında menüyü kapat
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (hamburger) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Modern Navbar scroll efekti
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(0, 0, 0, 0.95)';
                navbar.style.backdropFilter = 'blur(25px)';
                navbar.style.webkitBackdropFilter = 'blur(25px)';
                navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
            } else {
                navbar.style.background = 'rgba(0, 0, 0, 0.8)';
                navbar.style.backdropFilter = 'blur(20px)';
                navbar.style.webkitBackdropFilter = 'blur(20px)';
                navbar.style.boxShadow = 'none';
            }
        }
        
        // Update scroll progress
        updateScrollProgress();
    });

    // Modern Sayaçları güncelle
    updateCounters();

    // Modern Postları yükle
    loadPosts();

    // Modern Galeri filtreleme
    initGalleryFilters();
    
    // Modern Photos filtreleme
    initPhotosFilters();

    // Modern Fotoğraf yükleme özelliği
    initPhotoUpload();

    // Modern İstatistik sayaç animasyonu
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

    // Modern Typing efekti için hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        typeWriter(heroTitle, text, 0, 80);
    }

    // Modern Parallax efekti
    initParallaxEffects();

    // Modern Keyboard shortcuts
    initKeyboardShortcuts();

    // Modern Lazy loading
    initLazyLoading();
});

// Modern Scroll Progress Indicator
function createScrollProgressIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'scroll-indicator';
    indicator.innerHTML = '<div class="scroll-progress"></div>';
    document.body.appendChild(indicator);
}

function updateScrollProgress() {
    const scrollProgress = document.querySelector('.scroll-progress');
    if (scrollProgress) {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    }
}

// Modern Galeri filtreleme fonksiyonu
function initGalleryFilters() {
    const filterBtns = document.querySelectorAll('.gallery-filters .filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Modern aktif buton stilini güncelle
            filterBtns.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-pressed', 'false');
            });
            this.classList.add('active');
            this.setAttribute('aria-pressed', 'true');

            // Modern filtreleme
            const filter = this.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeInScale 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Modern Photos filtreleme fonksiyonu
function initPhotosFilters() {
    const filterBtns = document.querySelectorAll('.photos-filters .filter-btn');
    const photoItems = document.querySelectorAll('.photo-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Modern aktif buton stilini güncelle
            filterBtns.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-pressed', 'false');
            });
            this.classList.add('active');
            this.setAttribute('aria-pressed', 'true');

            // Modern filtreleme
            const filter = this.getAttribute('data-filter');
            
            photoItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeInScale 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Modern Fotoğraf yükleme özelliği
function initPhotoUpload() {
    // Modern Profil fotoğrafı için
    const profilePhoto = document.getElementById('profile-image');
    const photoPlaceholder = document.getElementById('photo-placeholder');
    
    if (profilePhoto && photoPlaceholder) {
        // Modern Profil fotoğrafı yüklendiğinde placeholder'ı gizle
        profilePhoto.addEventListener('load', function() {
            this.style.display = 'block';
            photoPlaceholder.style.display = 'none';
        });

        // Modern Profil fotoğrafı yüklenemediğinde placeholder'ı göster
        profilePhoto.addEventListener('error', function() {
            this.style.display = 'none';
            photoPlaceholder.style.display = 'flex';
        });
    }

    // Modern Galeri fotoğrafları için
    const galleryImages = document.querySelectorAll('.gallery-image');
    const imagePlaceholders = document.querySelectorAll('.image-placeholder');

    galleryImages.forEach((img, index) => {
        const placeholder = imagePlaceholders[index];
        
        if (img && placeholder) {
            // Modern Fotoğraf yüklendiğinde placeholder'ı gizle
            img.addEventListener('load', function() {
                this.style.display = 'block';
                placeholder.style.display = 'none';
            });

            // Modern Fotoğraf yüklenemediğinde placeholder'ı göster
            img.addEventListener('error', function() {
                this.style.display = 'none';
                placeholder.style.display = 'flex';
            });
        }
    });
}

// Modern Sayaçları güncelle
function updateCounters() {
    // Modern Ana sayfa sayaçları
    const postsCount = document.getElementById('posts-count');
    const experienceYears = document.getElementById('experience-years');
    const readersCount = document.getElementById('readers-count');

    if (postsCount) postsCount.textContent = stats.posts;
    if (experienceYears) experienceYears.textContent = stats.experience;
    if (readersCount) readersCount.textContent = stats.readers;

    // Modern About sayfası sayaçları
    const aboutPostsCount = document.getElementById('about-posts-count');
    const aboutExperienceYears = document.getElementById('about-experience-years');
    const aboutReadersCount = document.getElementById('about-readers-count');

    if (aboutPostsCount) aboutPostsCount.textContent = stats.posts;
    if (aboutExperienceYears) aboutExperienceYears.textContent = stats.experience;
    if (aboutReadersCount) aboutReadersCount.textContent = stats.readers;
}

// Modern Postları yükle
function loadPosts() {
    const container = document.getElementById('thoughts-container');
    if (!container) return;

    posts.forEach(post => {
        const postElement = createPostElement(post);
        container.appendChild(postElement);
    });
}

// Modern Post elementi oluştur
function createPostElement(post) {
    const article = document.createElement('article');
    article.className = 'thought-card';
    article.innerHTML = `
        <div class="thought-date">${post.date}</div>
        <h3 class="thought-title">${post.title}</h3>
        <p class="thought-excerpt">${post.excerpt}</p>
        <a href="#" class="read-more" data-post-id="${post.id}">Read More</a>
    `;

    // Modern Read More linkine tıklama
    const readMoreLink = article.querySelector('.read-more');
    readMoreLink.addEventListener('click', function(e) {
        e.preventDefault();
        showPostModal(post);
    });

    return article;
}

// Modern Post modal'ı göster
function showPostModal(post) {
    // Modern Mevcut modal'ı kaldır
    const existingModal = document.querySelector('.post-modal');
    if (existingModal) {
        existingModal.remove();
    }

    // Modern Yeni modal oluştur
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

    // Modern Modal stilleri
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
        background: rgba(0, 0, 0, 0.9);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
    `;

    const content = modal.querySelector('.modal-content');
    content.style.cssText = `
        background: rgba(0, 0, 0, 0.95);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 20px;
        padding: 3rem;
        max-width: 800px;
        width: 100%;
        max-height: 85vh;
        overflow-y: auto;
        position: relative;
        z-index: 1;
        box-shadow: 0 25px 80px rgba(0, 0, 0, 0.9);
        transform: scale(0.9);
        opacity: 0;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
    `;

    const header = modal.querySelector('.modal-header');
    header.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    `;

    header.querySelector('h2').style.cssText = `
        color: #fff;
        font-size: 2rem;
        font-weight: 800;
        margin: 0;
        text-transform: capitalize;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    `;

    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.style.cssText = `
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        color: #fff;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        width: 45px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        font-weight: 300;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
    `;

    const date = modal.querySelector('.modal-date');
    date.style.cssText = `
        color: #a0a0a0;
        font-size: 0.95rem;
        margin-bottom: 2rem;
        font-weight: 500;
    `;

    const body = modal.querySelector('.modal-body');
    body.style.cssText = `
        color: #e0e0e0;
        line-height: 1.8;
        font-size: 1.1rem;
        font-weight: 400;
    `;
    
    // Modern İçerik stillerini düzenle
    const bodyContent = body.querySelector('p');
    if (bodyContent) {
        bodyContent.style.cssText = `
            color: #e0e0e0;
            line-height: 1.8;
            font-size: 1.1rem;
            margin-bottom: 1.5rem;
            font-weight: 400;
        `;
    }
    
    // Modern Başlık stillerini düzenle
    const bodyH1 = body.querySelector('h1');
    if (bodyH1) {
        bodyH1.style.cssText = `
            color: #fff;
            font-size: 2.2rem;
            font-weight: 800;
            margin-bottom: 1.5rem;
            margin-top: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        `;
    }

    // Modern Modal'ı sayfaya ekle
    document.body.appendChild(modal);

    // Modern Kapatma işlevleri
    closeBtn.addEventListener('click', () => modal.remove());
    overlay.addEventListener('click', () => modal.remove());
    
    // Modern Hover efektleri
    closeBtn.addEventListener('mouseenter', () => {
        closeBtn.style.background = 'rgba(255, 255, 255, 0.2)';
        closeBtn.style.transform = 'scale(1.1) rotate(90deg)';
    });
    
    closeBtn.addEventListener('mouseleave', () => {
        closeBtn.style.background = 'rgba(255, 255, 255, 0.1)';
        closeBtn.style.transform = 'scale(1) rotate(0deg)';
    });

    // Modern ESC tuşu ile kapatma
    document.addEventListener('keydown', function closeOnEsc(e) {
        if (e.key === 'Escape') {
            modal.remove();
            document.removeEventListener('keydown', closeOnEsc);
        }
    });

    // Modern Animasyon
    setTimeout(() => {
        content.style.transform = 'scale(1)';
        content.style.opacity = '1';
    }, 50);
}

// Modern Sayaç animasyon fonksiyonu
function animateCounter(element, start, end, duration) {
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Modern easing function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        const current = Math.floor(start + (end - start) * easeOutQuart);
        element.textContent = current + (element.textContent.includes('+') ? '+' : '');
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Modern Typewriter efekti
function typeWriter(element, text, index, speed) {
    if (index < text.length) {
        element.textContent += text.charAt(index);
        setTimeout(() => typeWriter(element, text, index + 1, speed), speed);
    }
}

// Modern Parallax efektleri
function initParallaxEffects() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.abstract-shape');
        
        parallaxElements.forEach(element => {
            const speed = 0.3;
            element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.02}deg)`;
        });
    });
}

// Modern Keyboard shortcuts
function initKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Modern ESC tuşu ile mobil menüyü kapat
        if (e.key === 'Escape') {
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-menu');
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
        
        // Modern Space tuşu ile scroll
        if (e.key === ' ' && e.target === document.body) {
            e.preventDefault();
            window.scrollBy(0, window.innerHeight);
        }
    });
}

// Modern Lazy loading
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Modern Sayfa yüklendiğinde loading efekti
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Modern Scroll to top butonu
function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'scroll-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: #fff;
        border: none;
        cursor: pointer;
        font-size: 24px;
        font-weight: 600;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 1000;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
    `;

    document.body.appendChild(button);

    // Modern Scroll event listener
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
            button.style.transform = 'translateY(0)';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
            button.style.transform = 'translateY(20px)';
        }
    });

    // Modern Click event
    button.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Modern Hover effects
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.1)';
        this.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.4)';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
    });
}

// Modern Scroll to top butonunu oluştur
createScrollToTopButton();

// Modern Yeni post ekleme fonksiyonu (geliştirici için)
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
    
    // Modern Sayaçları güncelle
    updateCounters();
    
    // Modern Eğer thoughts sayfasındaysak, yeni postu ekle
    const container = document.getElementById('thoughts-container');
    if (container) {
        const postElement = createPostElement(newPost);
        container.insertBefore(postElement, container.firstChild);
    }
    
    console.log('New post added:', newPost);
}

// Modern Fotoğraf ekleme fonksiyonu (geliştirici için)
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

// Modern Örnek kullanım:
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