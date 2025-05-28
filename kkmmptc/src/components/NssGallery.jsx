import React from 'react';
import { Container, Carousel } from 'react-bootstrap';

// Manually import images
import nssphoto from '../assets/images/nss/nssphoto.jpg';
import nssphoto1 from '../assets/images/nss/nssphoto1.jpeg';
import nssphoto2 from '../assets/images/nss/nssphoto2.jpg';
import nssphoto3 from '../assets/images/nss/nssphoto3.JPG';
import nssphoto4 from '../assets/images/nss/nssphoto4.jpg';
import nssphoto5 from '../assets/images/nss/nssphoto5.jpg';
import nssphoto6 from '../assets/images/nss/nssphoto6.jpg';
import nssphoto7 from '../assets/images/nss/nssphoto7.jpg';
import nssphoto8 from '../assets/images/nss/nssphoto8.jpg';
import nssphoto9 from '../assets/images/nss/nssphoto9.jpg';
import nssphoto10 from '../assets/images/nss/nssphoto10.jpg';
import nssphoto11 from '../assets/images/nss/nssphoto11.jpg';
import nssphoto12 from '../assets/images/nss/nssphoto12.jpg';
import nssphoto13 from '../assets/images/nss/nssphoto13.jpg';
import nssphoto14 from '../assets/images/nss/nssphoto14.jpg';
import nssphoto15 from '../assets/images/nss/nssphoto15.jpg';
import nssphoto16 from '../assets/images/nss/nssphoto16.jpg';
import nssphoto17 from '../assets/images/nss/nssphoto17.jpg';
import nssphoto18 from '../assets/images/nss/nssphoto18.jpg';
import nssphoto19 from '../assets/images/nss/nssphoto19.jpg';
import nssphoto20 from '../assets/images/nss/nssphoto20.jpg';
import nssphoto21 from '../assets/images/nss/nssphoto21.jpeg';
import nssphoto22 from '../assets/images/nss/nssphoto22.jpg';
import nssphoto23 from '../assets/images/nss/nssphoto23.jpg';
import nssphoto24 from '../assets/images/nss/nssphoto24.jpg';
import nssphoto25 from '../assets/images/nss/nssphoto25.jpg';
import nssphoto26 from '../assets/images/nss/nssphoto26.jpeg';
import nssphoto27 from '../assets/images/nss/nssphoto27.jpeg';
import nssphoto28 from '../assets/images/nss/nssphoto28.jpeg';
import nssphoto29 from '../assets/images/nss/nssphoto29.jpeg';
import nssphoto30 from '../assets/images/nss/nssphoto30.jpeg';

const galleryImages = [
  nssphoto, nssphoto1, nssphoto2, nssphoto3, nssphoto4, nssphoto5,
  nssphoto6, nssphoto7, nssphoto8, nssphoto9, nssphoto10,
  nssphoto11, nssphoto12, nssphoto13, nssphoto14, nssphoto15,
  nssphoto16, nssphoto17, nssphoto18, nssphoto19, nssphoto20,
  nssphoto21, nssphoto22, nssphoto23, nssphoto24, nssphoto25,
  nssphoto26, nssphoto27, nssphoto28, nssphoto29, nssphoto30
].map((src, idx) => ({
  src,
  alt: `NSS Photo ${idx + 1}`,
  caption: `NSS Activity ${idx + 1}`
}));

export default function NssGallery() {
  return (
    <Container fluid className="py-5 px-0">
      <Carousel fade>
        {galleryImages.map((img, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100"
              src={img.src}
              alt={img.alt}
              style={{ height: '500px',width:'auto', objectFit: 'cover' }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}
