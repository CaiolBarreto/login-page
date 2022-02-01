import { ThemeProvider } from 'styled-components';
import { Routes } from './routes';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';
import { Login } from './components';

export const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Login />
  </ThemeProvider>
);
