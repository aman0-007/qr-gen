/**
 * QR-Gen - Professional QR Code Generator
 * Enhanced JavaScript functionality with real-time preview and advanced features
 */

class QRGenerator {
    constructor() {
        this.qrCode = null;
        this.currentStyle = 'square';
        this.currentLogo = null;
        this.isGenerating = false;
        
        this.init();
    }

    init() {
        this.setupElements();
        this.setupEventListeners();
        this.createInitialQR();
        this.updateQRInfo('Ready to generate', 'Select a style and click generate');
    }

    setupElements() {
        this.elements = {
            qrText: document.getElementById('qrText'),
            qrCodeContainer: document.getElementById('qrCode'),
            styleButtons: document.querySelectorAll('.style-btn'),
            logoUpload: document.getElementById('logoUpload'),
            generateBtn: document.getElementById('generateBtn'),
            downloadBtn: document.getElementById('downloadBtn'),
            qrStatus: document.querySelector('.qr-status'),
            qrDetails: document.querySelector('.qr-details')
        };
    }

    setupEventListeners() {
        // Style button selection
        this.elements.styleButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleStyleSelection(e));
        });

        // Generate button
        this.elements.generateBtn.addEventListener('click', () => this.generateQR());

        // Real-time text input (with debounce)
        let textInputTimeout;
        this.elements.qrText.addEventListener('input', () => {
            clearTimeout(textInputTimeout);
            textInputTimeout = setTimeout(() => {
                if (this.elements.qrText.value.trim()) {
                    this.generateQR(true); // Silent generation for real-time preview
                }
            }, 500);
        });

        // Logo upload
        this.elements.logoUpload.addEventListener('change', (e) => this.handleLogoUpload(e));

        // Download button
        this.elements.downloadBtn.addEventListener('click', () => this.downloadQR());

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => this.handleKeyboardShortcuts(e));
    }

    createInitialQR() {
        const initialData = "https://qr-gen.example.com";
        
        this.qrCode = new QRCodeStyling({
            width: 300,
            height: 300,
            type: 'svg',
            data: initialData,
            dotsOptions: {
                color: '#e5e7eb',
                type: 'square'
            },
            backgroundOptions: {
                color: '#ffffff',
            },
            cornersSquareOptions: {
                color: '#e5e7eb',
                type: 'square'
            },
            cornersDotOptions: {
                color: '#e5e7eb',
                type: 'square'
            }
        });

        this.elements.qrCodeContainer.innerHTML = '';
        this.qrCode.append(this.elements.qrCodeContainer);
    }

    handleStyleSelection(event) {
        // Remove active class from all buttons
        this.elements.styleButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        // Add active class to clicked button
        event.currentTarget.classList.add('active');
        this.currentStyle = event.currentTarget.dataset.style;

        // Add visual feedback
        this.addButtonFeedback(event.currentTarget);

        // Auto-generate if text exists
        if (this.elements.qrText.value.trim()) {
            this.generateQR(true);
        }
    }

    addButtonFeedback(button) {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 150);
    }

    handleLogoUpload(event) {
        const file = event.target.files[0];
        if (file) {
            // Validate file type
            if (!file.type.startsWith('image/')) {
                this.showNotification('Please select a valid image file', 'error');
                return;
            }

            // Validate file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                this.showNotification('Image size should be less than 5MB', 'error');
                return;
            }

            this.currentLogo = URL.createObjectURL(file);
            this.showNotification('Logo uploaded successfully', 'success');

            // Auto-generate if text exists
            if (this.elements.qrText.value.trim()) {
                this.generateQR(true);
            }
        }
    }

    async generateQR(silent = false) {
        if (this.isGenerating) return;

        const textValue = this.elements.qrText.value.trim() || "https://qr-gen.example.com";
        
        if (!silent) {
            this.isGenerating = true;
            this.updateGenerateButton(true);
            this.updateQRInfo('Generating...', 'Please wait while we create your QR code');
        }

        try {
            // Get style configuration
            const styleConfig = this.getStyleConfig(this.currentStyle);
            
            // Update QR code
            const updateOptions = {
                data: textValue,
                dotsOptions: {
                    color: '#2563eb',
                    type: styleConfig.dotsType
                },
                cornersSquareOptions: {
                    color: '#1d4ed8',
                    type: styleConfig.cornersType
                },
                cornersDotOptions: {
                    color: '#1e40af',
                    type: styleConfig.cornerDotsType
                }
            };

            // Add logo if available
            if (this.currentLogo) {
                updateOptions.image = this.currentLogo;
                updateOptions.imageOptions = {
                    crossOrigin: "anonymous",
                    margin: 10,
                    imageSize: 0.3
                };
            }

            this.qrCode.update(updateOptions);

            if (!silent) {
                // Show success state
                setTimeout(() => {
                    this.updateQRInfo('QR Code Generated!', 'Your QR code is ready for download');
                    this.elements.downloadBtn.style.display = 'flex';
                    this.updateGenerateButton(false);
                    this.isGenerating = false;
                    this.showNotification('QR code generated successfully!', 'success');
                }, 500);
            } else {
                this.elements.downloadBtn.style.display = 'flex';
            }

        } catch (error) {
            console.error('Error generating QR code:', error);
            this.updateQRInfo('Generation Failed', 'Please try again with different settings');
            this.updateGenerateButton(false);
            this.isGenerating = false;
            this.showNotification('Failed to generate QR code', 'error');
        }
    }

    getStyleConfig(style) {
        const configs = {
            'square': {
                dotsType: 'square',
                cornersType: 'square',
                cornerDotsType: 'square'
            },
            'dots': {
                dotsType: 'dots',
                cornersType: 'dot',
                cornerDotsType: 'dot'
            },
            'rounded': {
                dotsType: 'rounded',
                cornersType: 'extra-rounded',
                cornerDotsType: 'dot'
            },
            'extra-rounded': {
                dotsType: 'extra-rounded',
                cornersType: 'extra-rounded',
                cornerDotsType: 'dot'
            },
            'classy': {
                dotsType: 'classy',
                cornersType: 'square',
                cornerDotsType: 'square'
            },
            'classy-rounded': {
                dotsType: 'classy-rounded',
                cornersType: 'extra-rounded',
                cornerDotsType: 'dot'
            },
            'diamond': {
                dotsType: 'square',
                cornersType: 'square',
                cornerDotsType: 'square'
            },
            'star': {
                dotsType: 'dots',
                cornersType: 'dot',
                cornerDotsType: 'dot'
            },
            'heart': {
                dotsType: 'rounded',
                cornersType: 'extra-rounded',
                cornerDotsType: 'dot'
            },
            'hexagon': {
                dotsType: 'classy',
                cornersType: 'extra-rounded',
                cornerDotsType: 'dot'
            }
        };

        return configs[style] || configs['square'];
    }

    updateGenerateButton(isGenerating) {
        const btn = this.elements.generateBtn;
        const icon = btn.querySelector('.btn-icon');
        const text = btn.querySelector('span') || btn.childNodes[2];

        if (isGenerating) {
            btn.disabled = true;
            btn.style.opacity = '0.7';
            icon.style.animation = 'spin 1s linear infinite';
            if (text) text.textContent = 'Generating...';
        } else {
            btn.disabled = false;
            btn.style.opacity = '1';
            icon.style.animation = '';
            if (text) text.textContent = 'Generate QR Code';
        }
    }

    updateQRInfo(status, details) {
        if (this.elements.qrStatus) {
            this.elements.qrStatus.textContent = status;
        }
        if (this.elements.qrDetails) {
            this.elements.qrDetails.textContent = details;
        }
    }

    downloadQR() {
        if (!this.qrCode) return;

        try {
            const fileName = this.generateFileName();
            this.qrCode.download({ 
                name: fileName, 
                extension: 'png' 
            });
            this.showNotification('QR code downloaded successfully!', 'success');
        } catch (error) {
            console.error('Download error:', error);
            this.showNotification('Failed to download QR code', 'error');
        }
    }

    generateFileName() {
        const text = this.elements.qrText.value.trim();
        const style = this.currentStyle;
        const timestamp = new Date().toISOString().slice(0, 10);
        
        let baseName = 'qr-code';
        
        if (text && text !== 'https://qr-gen.example.com') {
            // Extract domain or create safe filename from text
            try {
                const url = new URL(text);
                baseName = url.hostname.replace(/[^a-zA-Z0-9]/g, '-');
            } catch {
                baseName = text.substring(0, 20).replace(/[^a-zA-Z0-9]/g, '-');
            }
        }
        
        return `${baseName}-${style}-${timestamp}`;
    }

    handleKeyboardShortcuts(event) {
        // Ctrl/Cmd + Enter to generate
        if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
            event.preventDefault();
            this.generateQR();
        }
        
        // Ctrl/Cmd + D to download
        if ((event.ctrlKey || event.metaKey) && event.key === 'd') {
            event.preventDefault();
            if (this.elements.downloadBtn.style.display !== 'none') {
                this.downloadQR();
            }
        }
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.75rem;
            box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
            max-width: 400px;
        `;

        // Add to DOM
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => this.removeNotification(notification));

        // Auto remove after 5 seconds
        setTimeout(() => {
            this.removeNotification(notification);
        }, 5000);
    }

    removeNotification(notification) {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }
}

// Add CSS for spinning animation
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background-color 0.2s;
    }
    
    .notification-close:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
`;
document.head.appendChild(style);

// Initialize the QR Generator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new QRGenerator();
    
    // Add smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
    });
});