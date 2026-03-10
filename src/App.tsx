import { RouterProvider } from 'react-router';
import { router } from './navigation';
import { AuthProvider, ThemeProvider } from './contexts';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
