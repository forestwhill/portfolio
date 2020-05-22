import React, { Fragment } from 'react'
import Iframe from 'react-iframe'

import { Content, Navbar } from '../../../components/blocks'
import { Paper } from '../../../components/elements'

export default () =>
  <Fragment>
    <Navbar />
    <Content>
      <Paper elevation={10}>
        <Iframe
          url="https://goo.gl/y81u4B"
          height="88vh"
          position="relative"
        />
      </Paper>
    </Content>
  </Fragment>