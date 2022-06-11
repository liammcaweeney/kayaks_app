import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Home from './Pages/Home'
import Liam from './Pages/Liam'
import Dosh from './Pages/Dosh'
import { Navbar } from './Components'
import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  background: red;
`
const Router = () => (
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="info/liam" element={<Liam/>} />
      <Route path="info/dosh" element={<Dosh/>} />
    </Routes>
)


const App = () => {
  return (
    <BrowserRouter basename="/kayaks_app">
      <Container>
        <Navbar tabs={[
          {label: 'Home', link: '/'},
          {label: 'Dosh', link: '/info/dosh'},
          {label: 'Liam', link: '/info/liam'}
        ]}/>
        <Router />
      </Container>
    </BrowserRouter>
  )
}

export default App
