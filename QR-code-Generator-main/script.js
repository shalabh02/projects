function generateQRCode() {
    var inputText = document.getElementById("inputText").value;
    if (!inputText) {
        alert("Please enter a message or URL.");
        return;
    }

    var qrCodeImage = document.getElementById("qrCodeImage");
    qrCodeImage.innerHTML = ""; // Clear previous QR code if any

    // Create a new QR code instance
    var qr = new QRCode(qrCodeImage, {
        text: inputText,
        width: 256,
        height: 256,
    });
}
