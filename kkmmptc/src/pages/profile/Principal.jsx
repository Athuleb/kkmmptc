import React from 'react';
import { Container, Typography, Card, CardMedia, CardContent, Box,Link } from '@mui/material';
import principalImage from '../../assets/images/principal.jpeg';

export default function Principal() {
  return (
    <Container className="my-5 d-flex justify-content-center">
      <Card
        sx={{
          maxWidth: 600,
          boxShadow: 5,
          borderRadius: 4,
          p: 2,
          textAlign: 'center'
        }}
      >
        <CardMedia
          component="img"
          height="auto"
          image={principalImage}
          alt="Principal"
          sx={{ objectFit: 'cover', borderRadius: 2 }}
        />
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Smt.Asha R
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Principal, K. Karunakaran Memorial Model Polytechnic College Kallettumkara
          </Typography>

          <Box mt={2}>
            <Typography variant="body1">
              📧 Email:{' '}
              <Link href="mailto:ashashivin1@gmail.com" underline="hover">
                ashashivin1@gmail.com
              </Link>
            </Typography>
            <Typography variant="body1" mt={1}>
              📞 Phone: 94469 58471
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
