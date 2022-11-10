import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Header } from "./Coponents/Header";
import { GlobalStyle } from "./global";
import { Router } from "./Router";
import { AppContainer } from './styles';
import { defaultTheme } from './themes/default';

function App() {
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppContainer>
        <GlobalStyle />
        <Header />
        <BrowserRouter>
          <Router />
        </BrowserRouter>      
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
