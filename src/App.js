import { Routes, Route } from 'react-router-dom'
import Topbar from './pages/global/Topbar'
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Dashboard from './pages/Dashboard'
import Team from './pages/Team'
import Contacts from './pages/Contacts'
import Invoices from './pages/Invoices'
import Form from './pages/Form'
import Bar from './pages/Bar'
import Pie from './pages/Pie'
import Line from './pages/Line'
import Faq from './pages/Faq'
import Calendar from './pages/Calendar'
import Geography from './pages/Geography'
import Sidebar from './pages/global/Sidebar'

function App() {
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <Sidebar />
          <main className='content'>
            <Topbar />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/team' element={<Team />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/invoices' element={<Invoices />} />
              <Route path='/form' element={<Form />} />
              <Route path='/bar' element={<Bar />} />
              <Route path='/pie' element={<Pie />} />
              <Route path='/line' element={<Line />} />
              <Route path='/faq' element={<Faq />} />
              <Route path='/calendar' element={<Calendar />} />
              <Route path='/geography' element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
