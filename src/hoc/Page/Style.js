import { createMuiTheme } from '@material-ui/core'
import green from '@material-ui/core/colors/green'
import styled from 'styled-components'

const Page = styled.div`
  background-color: #eee;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[700]
    }
  }
})

export { Page, theme }