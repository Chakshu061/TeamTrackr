import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './components/Layout/AppLayout';
import AuthLayout from './components/Layout/AuthLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Board from './pages/Board';


function App() {
  const theme = createTheme({
    palette: { mode: 'dark' }
  })


  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthLayout/>}>
             <Route path='/login' element={<Login/>}/>
             <Route path='/signup' element={<Signup/>}/>
          </Route>
          <Route path='/' element={<AppLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='boards' element={<Home/>}/>
            <Route path='boards/:boardId' element={<Board/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
        
      
    </ThemeProvider>
  )
}

export default App
