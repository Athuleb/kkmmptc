import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import notFoundImage from '../../assets/images/404page.webp'; 

function CollegeSenate() {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        setShowPopup(true);
    }, []);

    return (
        <div style={{ position: 'relative' }}>
            <img
                src={notFoundImage}
                alt="Under Development"
                style={{ width: '100%', height: '90vh', objectFit: 'cover', opacity: '40%' }}
            />

            {showPopup && (
                <div
                    style={{
                        position: 'absolute',
                        top: '20%',
                        left: '50%',
                        transform: 'translate(-50%, -20%)',
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        padding: '2rem',
                        borderRadius: '10px',
                        color: 'white',
                        textAlign: 'center',
                        maxWidth: '90%',
                    }}
                >
                    <h3>🚧 Section Under Development</h3>
                    <p>This section is coming soon!</p>
                    <Link
                        to="/"
                        style={{
                            marginTop: '1rem',
                            display: 'inline-block',
                            padding: '10px 20px',
                            backgroundColor: '#17a2b8',
                            color: 'white',
                            textDecoration: 'none',
                            borderRadius: '5px',
                        }}
                    >
                        Go Back Home
                    </Link>
                </div>
            )}
        </div>
    );
}

export default CollegeSenate