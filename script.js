document.addEventListener('DOMContentLoaded', () => {
    // Initial placeholder QR code
    const initialQrCodeData = "https://www.example.com";
    const qrCode = new QRCodeStyling({
        width: 300,
        height: 300,
        type: 'svg',
        data: initialQrCodeData,
        dotsOptions: {
            color: '#d1d5db',
            type: 'square'
        },
        backgroundOptions: {
            color: '#ffffff',
        }
    });

    const qrCodeContainer = document.getElementById('qrCode');
    qrCode.append(qrCodeContainer);

    const qrText = document.getElementById('qrText');
    const styleButtons = document.querySelectorAll('.style-btn');
    const logoUpload = document.getElementById('logoUpload');
    const generateBtn = document.getElementById('generateBtn');
    const downloadBtn = document.getElementById('downloadBtn');

    // Handle style selection
    styleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            styleButtons.forEach(b => {
                b.classList.remove('active');
            });
            btn.classList.add('active');
        });
    });

    // Handle generate button click
    generateBtn.addEventListener('click', async () => {
        const textValue = qrText.value || "https://www.example.com";
        const selectedStyle = document.querySelector('.style-btn.active').dataset.style;
        
        let logo = null;
        if (logoUpload.files.length > 0) {
            logo = URL.createObjectURL(logoUpload.files[0]);
        }

        qrCode.update({
            data: textValue,
            dotsOptions: {
                color: '#2563eb', // Use the brand color for the QR code dots
                type: selectedStyle
            },
            image: logo
        });

        downloadBtn.style.display = 'block';
        downloadBtn.onclick = () => qrCode.download({ name: 'qr-code', extension: 'png' });
    });
});
