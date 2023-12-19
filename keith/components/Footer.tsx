const Footer = () => {
    return (
        <footer style={{ 
            backgroundColor: '#FFA500',
            color: '#000000',
            padding: '20px 0',
            display: 'flex',
            justifyContent: 'flex-start', // Changed to 'flex-start' to align items to the start
            alignItems: 'center',
            fontSize: '16px',
            fontFamily: 'Arial, sans-serif',
            width: '100%',
            boxSizing: 'border-box'
        }}>
            {/* Left Side - Find Our Restaurants */}
            <div style={{ 
                textAlign: 'left',
                paddingLeft: '20px', // Adjust this value if you need more space on the left
                flex: '1 0 auto' // Added flex property to allow it to grow
            }}>
                <h3 style={{
                    fontWeight: 'bold', 
                    marginBottom: '5px',
                    paddingLeft: '40px'
                }}>Find Our Restaurants</h3>

                <p>150 Belmont Avenue jersey city, 10001</p>
                <p>850 6th avenue new york, 10001</p>
            </div>
            
            {/* Center - Pinnacle Pizza */}
            <div style={{ 
                textAlign: 'center',
                padding: '0 10px', // Reduced side paddings to move the content to the left
                flex: '0 1 auto' // Changed flex property to prevent it from growing
            }}>
                <div style={{ 
                    fontWeight: 'bold',
                    fontSize: '24px',
                }}>
                    Pinnacle Pizza
                </div>
                <div style={{ 
                    color: '#494DAB',
                    fontSize: '14px',
                }}>
                    © 500degreespizzeria 2016 • All rights reserved.
                </div>
            </div>

            {/* Right Side - Working Hours */}
            <div style={{ 
                textAlign: 'right',
                paddingRight: '20px',
                flex: '1 0 auto' // Added flex property to allow it to grow
            }}>
                <h3 style={{ fontWeight: 'bold', marginBottom: '5px' }}>Working Hours</h3>
                <p>Mon-Fri: 10-6</p>
                <p>Sat-Sun: 11-9</p>
            </div>
        </footer>
    );
};

export default Footer;
