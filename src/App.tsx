import styled from 'styled-components'
import { Slider } from './components/Slider'

const MainStyled = styled.main`
  padding: 60px;
`

function App() {
  const imagesData = [
    {
      id: 1,
      url: 'https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpqp0IsBbQ6gziP_9tjHM1hk2O08WZ_o3xSGJ7GJpAYzRktrN1UpoffvaORwv_DNFu2o0NsH.Wz8GEjthCjcegQKbN9JE6_50h9Ggr_nr0SLeNc6YlUdm7N36NmKG3UG4pmCCig7Nc.iMja_3FqdgtRfI_Ytohc2yvZZ05loToq9eA-&h=1080',
    },
    {
      id: 2,
      url: 'https://images-eds-ssl.xboxlive.com/image?url=w5xFvB2JQY3nPgHSW13QQjeIjj.ADgKg7d02rTQVV.9UX4eu_c7Ngwq1Alh7tw_nd2T0xRg.llNOfmyWOdn5ubAJFYMClG735abZFYYwrQQ-&h=1080',
    },
    {
      id: 3,
      url: 'https://images-eds-ssl.xboxlive.com/image?url=qitYpaWI4rA4q5qG2AjZyppiNRjTCv4tLDfYlg.uMBcee9EnGDGvvZ7eC.FuUUY7hq4TusVuO3dyKUCR571hKsBfJ.ZC.AB8Aul4ywH9VaoGNIXWZLVd.Z4K6c5tAN1B&h=1080',
    },
    {
      id: 4,
      url: 'https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpqEUXgymysQJzSVEF_MdgAzuFiz8UgtK2l.IGaVWbpkH_y9T2sfWgTI.m5gFwyQ2FSk8nVgVCMrkqz3sYVz96.tpfoOHEGhMI.7ImAtDhJQlAMs1kQ7dVOOxlHYDjNuT28Sgr8QJJi7MUueKG8yv8eVUf_98_jl6D43oRYps3rhQI-&h=1080',
    },
    {
      id: 5,
      url: 'https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpqtbQP42WdG7N4u739i2qCoq5_2jUePIi9rvhcFCIx6EB1cQG6iZGNDZlewlYt.MEoR2fb.CIV.0KSft3V2YvJ2i3ZHRT0cbEsaqRlQFzx5lmbvWA8aizRv96y3CywoB1MONDBzaBZs5goSAXsDPOXNA--&h=1080',
    },
    {
      id: 6,
      url: 'https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpqlYSJ0ZWi96t7LOw7qeUtUDKPYkjHwmHh06xCFxGVA9kQe2Z8Bc6m19MviePnwsG0mTU.g.5r5VdoF_zoxrkn1SnfQjBpXtwkzSYYCWgvjD8-&h=1080',
    },
    {
      id: 7,
      url: 'https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpqli2CJkk5.OHBnaJsCLOKUucouv__efGoXjQw_0YSM3GONbPCUhtJjXvmTJUy9piJyYP5zZBrLZ3APxNM6GoEe9KHAa_wOdbCyaVkq_MestIWBY1luvtNv.p_ipxCBzOrPBMH2sgI6rBxiBYo45_a2W4HXE3RWC.q60Gr.b3BIyQ-&h=1080',
    },
    {
      id: 8,
      url: 'https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpqsyKnkjN1IPFblzNdo6FAop4DoFNT9749nQB5ULhE1XreZRHdryFms3eZEOozhY6lYW5Wb9zbPXxhpX3CiVTgvbkZKufK8Z3dJr9TKKVIAAEQ_mbeOpdkwcq9Zn9nYNZyvkhhXenYgpiXZePbeQtAdg--&h=1080',
    },
    {
      id: 9,
      url: 'https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpqWwg8.y0NIYlPBD5au_RrTlAFtDsC6noqC1zxR80FzCvb.ivJsgGTnYXKhzvPV_0ZCYveKxacpfHxswD9l9M8r9T2wsng9c3kRZBDMUIR3EVka5WfGNjze.TjRmIyNsf23HykJrkYuRG6p1ygSU64_Q--&h=1080',
    },
  ]
  return (
    <MainStyled>
      <Slider imagesData={imagesData} />
    </MainStyled>
  )
}

export default App
