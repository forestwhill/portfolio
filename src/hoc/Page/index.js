import React from 'react'
import { CssBaseline, } from '@material-ui/core'
import { MuiThemeProvider } from '@material-ui/core/styles'

import { Page, theme } from './Style'

export default ({ children }) => {
  return (
    <Page>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </Page>
  )
}
