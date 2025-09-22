# QR-Gen - Professional QR Code Generator

![QR-Gen Logo](https://via.placeholder.com/200x100/2563eb/ffffff?text=QR-Gen)

A modern, responsive, and feature-rich QR code generator that creates professional-quality QR codes with multiple styling options and custom logo integration.

## 🚀 Features

### Core Functionality
- **Instant QR Code Generation** - Create QR codes in real-time as you type
- **10+ Unique Styles** - Choose from Classic, Dots, Rounded, Diamond, Star, Heart, and more
- **Custom Logo Integration** - Add your brand logo to the center of any QR code
- **High-Quality Downloads** - Export QR codes as PNG files with customizable names
- **Real-time Preview** - See changes instantly as you modify settings

### Design & User Experience
- **Fully Responsive** - Perfect experience on mobile, tablet, and desktop
- **Modern UI/UX** - Clean, professional interface with smooth animations
- **Accessibility First** - WCAG compliant with keyboard navigation support
- **Dark/Light Theme Support** - Adapts to user preferences
- **Professional Branding** - Cohesive visual identity throughout

### Technical Features
- **Performance Optimized** - Fast loading and smooth interactions
- **Browser Compatible** - Works on all modern browsers
- **Keyboard Shortcuts** - Power user features for efficiency
- **Error Handling** - Graceful error management with user feedback
- **File Validation** - Smart validation for uploaded logos

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **QR Generation**: QR-Code-Styling library
- **Styling**: Custom CSS with CSS Grid/Flexbox
- **Icons**: Custom SVG icons
- **Fonts**: Inter font family
- **Build Tools**: Native web technologies (no build process required)

## 📦 Installation

### Quick Start
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/qr-gen.git
   cd qr-gen
   ```

2. Open `index.html` in your browser or serve with a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. Navigate to `http://localhost:8000` in your browser

### No Build Process Required
QR-Gen is built with vanilla web technologies and doesn't require any build tools or package managers. Simply download and open!

## 🎯 Usage

### Basic QR Code Generation
1. Enter your URL or text in the input field
2. Select your preferred style from the style grid
3. Click "Generate QR Code"
4. Download your QR code

### Adding Custom Logos
1. Click "Add Center Logo" and select an image file
2. Supported formats: PNG, JPG, GIF, SVG
3. Maximum file size: 5MB
4. The logo will be automatically centered and sized

### Keyboard Shortcuts
- `Ctrl/Cmd + Enter` - Generate QR code
- `Ctrl/Cmd + D` - Download QR code (when available)

### Available Styles
- **Classic** - Traditional square dots
- **Dots** - Circular dots for a modern look
- **Rounded** - Rounded square corners
- **Smooth** - Extra rounded for elegance
- **Classy** - Sophisticated angular design
- **Elegant** - Classy with rounded corners
- **Diamond** - Diamond-shaped pattern
- **Star** - Star-shaped dots
- **Heart** - Heart-shaped pattern
- **Hexagon** - Hexagonal dot pattern

## 🎨 Customization

### Color Scheme
The application uses a comprehensive color system defined in CSS custom properties:

```css
:root {
    --primary-600: #2563eb;
    --secondary-900: #0f172a;
    /* ... more colors */
}
```

### Adding New Styles
To add a new QR code style:

1. Add a new button to the style grid in `index.html`
2. Define the style configuration in `script.js` in the `getStyleConfig` method
3. Add appropriate SVG preview in the button

### Responsive Breakpoints
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 767px and below

## 🔧 Configuration

### File Size Limits
- Logo files: Maximum 5MB
- Supported formats: PNG, JPG, GIF, SVG

### QR Code Settings
- Default size: 300x300 pixels
- Output format: PNG
- Error correction: Medium level
- Logo size: 30% of QR code area

## 🚀 Deployment

### Static Hosting
Deploy to any static hosting service:

- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Enable in repository settings
- **Firebase Hosting**: Use Firebase CLI

### CDN Deployment
All external dependencies are loaded via CDN:
- QR-Code-Styling library
- Tailwind CSS (for utility classes)
- Inter font from Google Fonts

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Getting Started
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Test thoroughly across different devices and browsers
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Contribution Guidelines
- Follow the existing code style and structure
- Test on multiple browsers and devices
- Update documentation for new features
- Add comments for complex functionality
- Ensure accessibility compliance

### Areas for Contribution
- New QR code styles
- Additional export formats (SVG, PDF)
- Color customization options
- Batch QR code generation
- API integration
- Performance optimizations

## 📱 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile browsers**: iOS Safari 14+, Chrome Mobile 90+

## 🐛 Known Issues

- Large logo files may slow down generation on older devices
- Some QR code readers may have difficulty with very stylized codes
- File download naming may vary across browsers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 QR-Gen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🙏 Acknowledgments

- [QR-Code-Styling](https://github.com/kozakdenys/qr-code-styling) - Excellent QR code generation library
- [Inter Font](https://rsms.me/inter/) - Beautiful and readable font family
- [Heroicons](https://heroicons.com/) - Inspiration for icon designs
- The open-source community for continuous inspiration and support

## 📞 Support

- **Documentation**: Check this README and inline code comments
- **Issues**: Report bugs via GitHub Issues
- **Feature Requests**: Submit via GitHub Issues with the "enhancement" label
- **Security Issues**: Email security@qr-gen.com

## 🔮 Roadmap

### Version 2.0 (Planned)
- [ ] Batch QR code generation
- [ ] SVG export option
- [ ] Color customization
- [ ] QR code analytics
- [ ] API endpoints
- [ ] User accounts and saved codes

### Version 2.1 (Future)
- [ ] QR code templates
- [ ] Advanced logo positioning
- [ ] Custom error correction levels
- [ ] Integration with cloud storage
- [ ] Mobile app versions

---

**Made with ❤️ by the QR-Gen Team**

*Creating beautiful QR codes, one scan at a time.*