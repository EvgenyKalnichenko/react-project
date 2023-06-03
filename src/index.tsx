import { render } from 'react-dom';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundaruy';
import { PageError } from 'widgets/PageError/';
import App from './app/App';
import 'shared/config/i18n/i18n';

render(
    <BrowserRouter>
        <ErrorBoundary fallback={(
            <Suspense fallback="">
                <PageError />
            </Suspense>
        )}
        >
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
);
