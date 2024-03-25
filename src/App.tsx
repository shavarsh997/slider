import styled from 'styled-components'
import { Slider } from './components/Slider'
import { devices } from './assets/constant'
import { imagesData } from './assets/data'

const MainStyled = styled.main`
  padding: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media ${devices['md']} {
    padding: 20px;
  }
`

function App() {
  return (
    <MainStyled>
      <Slider imagesData={imagesData} />
    </MainStyled>
  )
}

export default App
