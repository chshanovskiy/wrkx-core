import { MantineProvider } from '@mantine/core'
import { createHistoryRouter } from 'atomic-router'
import { Route, RouterProvider } from 'atomic-router-react'
import { createBrowserHistory } from 'history'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { HomePage, routeHome } from '~/wrkx-client/pages'

const history = createBrowserHistory()
export const router = createHistoryRouter({
  routes: [{ path: '/', route: [routeHome] }],
})
router.setHistory(history)

const App = () => (
  <RouterProvider router={router}>
    <Route route={routeHome} view={HomePage} />
  </RouterProvider>
)

createRoot(document.querySelector('#wrkx') as HTMLElement).render(
  <StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  </StrictMode>
)
