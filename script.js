// Section data - you can customize this with your actual catalog sections
const sectionData = {
    1: {
        title: "Electronics & Technology",
        content: `
            <div class="section-content">
                <h4>Featured Products:</h4>
                <ul>
                    <li>Smartphones and Tablets</li>
                    <li>Laptops and Computers</li>
                    <li>Audio Equipment</li>
                    <li>Smart Home Devices</li>
                </ul>
                <p>Explore our latest technology products with competitive pricing and warranty coverage.</p>
            </div>
        `
    },
    2: {
        title: "Home & Garden",
        content: `
            <div class="section-content">
                <h4>Featured Products:</h4>
                <ul>
                    <li>Furniture and Decor</li>
                    <li>Garden Tools</li>
                    <li>Outdoor Equipment</li>
                    <li>Kitchen Appliances</li>
                </ul>
                <p>Transform your living space with our home and garden collection.</p>
            </div>
        `
    },
    3: {
        title: "Fashion & Accessories",
        content: `
            <div class="section-content">
                <h4>Featured Products:</h4>
                <ul>
                    <li>Clothing for All Ages</li>
                    <li>Shoes and Footwear</li>
                    <li>Jewelry and Watches</li>
                    <li>Bags and Accessories</li>
                </ul>
                <p>Stay stylish with our fashion and accessories collection.</p>
            </div>
        `
    },
    4: {
        title: "Sports & Recreation",
        content: `
            <div class="section-content">
                <h4>Featured Products:</h4>
                <ul>
                    <li>Fitness Equipment</li>
                    <li>Outdoor Sports Gear</li>
                    <li>Team Sports Equipment</li>
                    <li>Recreation Accessories</li>
                </ul>
                <p>Get active with our sports and recreation products.</p>
            </div>
        `
    },
    5: {
        title: "Health & Beauty",
        content: `
            <div class="section-content">
                <h4>Featured Products:</h4>
                <ul>
                    <li>Skincare Products</li>
                    <li>Health Supplements</li>
                    <li>Beauty Tools</li>
                    <li>Personal Care Items</li>
                </ul>
                <p>Take care of yourself with our health and beauty selection.</p>
            </div>
        `
    },
    6: {
        title: "Automotive",
        content: `
            <div class="section-content">
                <h4>Featured Products:</h4>
                <ul>
                    <li>Car Accessories</li>
                    <li>Maintenance Tools</li>
                    <li>Electronics for Vehicles</li>
                    <li>Safety Equipment</li>
                </ul>
                <p>Keep your vehicle in top condition with our automotive products.</p>
            </div>
        `
    },
    7: {
        title: "Office & Business",
        content: `
            <div class="section-content">
                <h4>Featured Products:</h4>
                <ul>
                    <li>Office Supplies</li>
                    <li>Business Equipment</li>
                    <li>Furniture and Storage</li>
                    <li>Technology Solutions</li>
                </ul>
                <p>Enhance your workspace with our office and business products.</p>
            </div>
        `
    }
};

// Function to view a specific section
function viewSection(sectionNumber) {
    const modal = document.getElementById('sectionModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    const section = sectionData[sectionNumber];
    
    if (section) {
        modalTitle.textContent = section.title;
        modalContent.innerHTML = section.content;
        modal.style.display = 'block';
    }
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('sectionModal');
    modal.style.display = 'none';
}

// Function to download PDF
function downloadPDF() {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = 'catalog.pdf';
    link.download = 'company-catalog.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('sectionModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Handle logo upload (if needed)
function handleLogoUpload() {
    const logoInput = document.createElement('input');
    logoInput.type = 'file';
    logoInput.accept = 'image/*';
    logoInput.onchange = function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const logoImg = document.getElementById('companyLogo');
                logoImg.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };
    logoInput.click();
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Catalog website loaded successfully!');
    
    // Add click event to logo for easy replacement (optional)
    const logo = document.getElementById('companyLogo');
    if (logo) {
        logo.addEventListener('dblclick', handleLogoUpload);
    }
});