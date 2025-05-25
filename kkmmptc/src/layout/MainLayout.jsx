import { Outlet } from 'react-router-dom';
import NavbarComponent from '../components/NavbarComponent';
import Footer from '../components/Footer';
import React, { Suspense } from 'react';
import { Skeleton, Box, Typography } from '@mui/material';
export default function MainLayout() {
  return (
    <div className="d-flex flex-column min-vh-100 ">
      <header className='sticky-top shadow'>
        <NavbarComponent />
      </header>
      <main className="flex-grow-1 d-flex align-items-center justify-content-center p-0 w-100">
        <Suspense
          fallback={
            <Box
              width="100%"
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={2}
              padding={2}
            >
              <Skeleton variant="rectangular" width="100%" height={300} animation="wave" />
              <Typography variant="h6" color="textSecondary">
                Loading...
              </Typography>
              <Skeleton variant="text" width="60%" animation="wave" />
              <Skeleton variant="text" width="80%" animation="wave" />
              <Skeleton variant="text" width="40%" animation="wave" />
            </Box>
          }
        >
          <Outlet />
        </Suspense>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

