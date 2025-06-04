import { Stack, useRouter, useSegments } from "expo-router";
import React, { useEffect } from 'react';
import "./global.css";
import { AuthProvider, useAuth } from "./authContext";

// This component handles the core navigation logic.
function RootNavigation() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const segments = useSegments(); // Get current route segments

  useEffect(() => {
    const isAppRoute = segments.length > 0 && segments[0] !== 'login';

    if (!isAuthenticated && isAppRoute) {
      // If not authenticated and trying to access a protected app route, redirect to login
      router.replace('/login');
    } else if (isAuthenticated && (segments.length === 0 || segments[0] === 'login')) {
      // If authenticated and on the login page or at the root, redirect to index (main app screen)
      router.replace('/index');
    }
  }, [isAuthenticated, segments, router]); // Re-run effect when auth state or segments change

  // The Stack navigator defines available screens.
  // Redirection is handled by the useEffect hook above.
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" options={{ presentation: 'modal' }} />
      <Stack.Screen name="index" />
      {/* Other app screens will be implicitly available here and protected by the useEffect logic */}
    </Stack>
  );
}

// The main layout component wraps the navigation with the AuthProvider.
export default function RootLayout() {
  return (
    <AuthProvider>
      <RootNavigation />
    </AuthProvider>
  );
}
