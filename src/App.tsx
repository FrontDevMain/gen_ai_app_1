import { BrowserRouter } from 'react-router-dom';
import { SettingsProvider, ThemeSettings } from './components/settings';
import ThemeProvider from './theme';
import Router from './layouts/Router';
import { AuthProvider } from './auth/AuthContext';

function App() {
  return (
    <AuthProvider>
      <SettingsProvider>
        <ThemeProvider>
          <ThemeSettings>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </ThemeSettings>
        </ThemeProvider>
      </SettingsProvider>
    </AuthProvider>
  );
}

export default App;
