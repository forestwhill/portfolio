import React, { Fragment } from 'react'
import { Fade, Typography } from '@material-ui/core'

import { Navbar } from '../../../components/blocks'
import { Background, TextContainer, Text } from './style'

export default () =>
  <Fragment>
    <Navbar landing />
    <Background>
      <TextContainer>
        <Typography variant="h2"><Text>Forest Hill</Text></Typography>
        <br />
        <Fade in timeout={3000}>
          <Typography variant="h3"><Text>Training to be a full-stack developer</Text></Typography>
        </Fade>
        <Fade in timeout={5000}>
          <Typography variant="h3"><Text>and putting the "F" in "ASDF" since 2018</Text></Typography>
        </Fade>
      </TextContainer>
    </Background>
  </Fragment>
