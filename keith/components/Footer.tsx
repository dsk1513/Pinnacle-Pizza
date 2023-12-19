const Footer = () => {
    return (
        <footer style={{ 
            backgroundColor: '#FFA500', // This is the orange color you provided
            color: '#000000', // Text color set to black
            padding: '30px 20px', // Vertical and horizontal padding
            display: 'flex', 
            flexDirection: 'column', // Stack children vertically
            alignItems: 'center', // Center children horizontally
            justifyContent: 'center', // Center children vertically
            fontSize: '16px', // Base font size for the footer
            fontFamily: 'Arial, sans-serif', // Font family for the footer
        }}>
            {/* Top part with addresses, Pinnacle Pizza, and working hours */}
            <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                width: '100%', // Take the full width of the footer
                marginBottom: '20px', // Space between the top and bottom parts
            }}>
                {/* Find Our Restaurants */}
                <div style={{ 
                    textAlign: 'left', // Align text to the left
                }}>
                    <h3 style={{ fontWeight: 'bold' }}>Find Our Restaurants</h3>
                    <p>150 Belmont Avenue jersey city, 10001</p>
                    <p>850 6th avenue new york, 10001</p>
                </div>
                
                {/* Pinnacle Pizza in the center */}
                <div style={{ 
                    fontWeight: 'bold',
                    fontSize: '24px', // Font size for Pinnacle Pizza
                    textAlign: 'center', // Center the text
                }}>
                    Pinnacle Pizza
                </div>

                {/* Working Hours */}
                <div style={{ 
                    textAlign: 'right', // Align text to the right
                }}>
                    <h3 style={{ fontWeight: 'bold' }}>Working Hours</h3>
                    <p>Mon-Fri: 10-6</p>
                    <p>Sat-Sun: 11-9</p>
                </div>
            </div>

            {/* Bottom part with copyright text */}
            <div style={{ 
                color: '#FF0000', // Red color text
                fontSize: '18px', // Font size for copyright
                textAlign: 'center', // Center the text
            }}>
                © 500degreespizzeria 2016 • All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
