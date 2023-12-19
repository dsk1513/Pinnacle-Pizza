'use client'
const Footer = () => {
    return (
        <footer style={{ 
            backgroundColor: '#FFA500', // Orange background
            color: '#000000', // Black text color
            padding: '20px 0', // Vertical padding 20px, horizontal padding 0
            display: 'flex', 
            justifyContent: 'space-between', // Space out child elements evenly
            alignItems: 'center', // Align items vertically in the center
            fontSize: '16px', // Base font size
            fontFamily: 'Arial, sans-serif', // Font family
            width: '100%', // Full width
            boxSizing: 'border-box' // Ensure padding does not add to the width
        }}>
            {/* Left Side - Find Our Restaurants */}
            <div style={{ 
                textAlign: 'left', // Align text to the left
                paddingLeft: '20px' // Padding on the left
            }}>
                <h3 style={{
    fontWeight: 'bold', 
    marginBottom: '5px',
    paddingLeft: '40px' // Adjust the pixel value as needed
}}>Find Our Restaurants</h3>

                <p>150 Belmont Avenue jersey city, 10001</p>
                <p>850 6th avenue new york, 10001</p>
            </div>
            
            {/* Center - Pinnacle Pizza */}
            <div style={{ 
                textAlign: 'center', // Center text
                padding: '0 30px' // Padding on the sides
            }}>
                <div style={{ 
                    fontWeight: 'bold',
                    fontSize: '24px', // Larger font size for Pinnacle Pizza
                   
                }}>
                    Pinnacle Pizza
                </div>
                <div style={{ 
                    color: '#494DAB', // Red text color for copyright notice
                    fontSize: '14px', // Smaller font size for copyright notice
                }}>
                    © 500degreespizzeria 2016 • All rights reserved.
                </div>
            </div>

            {/* Right Side - Working Hours */}
            <div style={{ 
                textAlign: 'right', // Align text to the right
                paddingRight: '20px' // Padding on the right
            }}>
                <h3 style={{ fontWeight: 'bold', marginBottom: '5px' }}>Working Hours</h3>
                <p>Mon-Fri: 10-6</p>
                <p>Sat-Sun: 11-9</p>
            </div>
        </footer>
    );
};

export default Footer;
