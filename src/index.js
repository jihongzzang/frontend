import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { RecoilRoot } from 'recoil';
import ShimmerPage from './pages/Shimmer/ShimmerPage';

ReactDOM.render(
  <RecoilRoot>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Suspense fallback={<ShimmerPage />}>
        <Router />
      </Suspense>
    </ThemeProvider>
  </RecoilRoot>,
  document.getElementById('root')
);
