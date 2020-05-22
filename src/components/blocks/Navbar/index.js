import React from 'react'
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'

// This does not work when importing from the elements section,
// but I am only using them here anyway.
const NavButton = ({ children, href }) =>
  <Button href={href} color="inherit" style={{ margin: '0 5px' }}>{children}</Button>

export default ({ landing }) =>
  <AppBar
    position={landing ? "absolute" : "sticky"}
    style={landing ? { background: 'transparent' } : null}
  >
    <Toolbar color="primary">
      {
        !landing
          ? <Button href="/" color="inherit">
            <Typography variant="h6" color="inherit">Forest Hill</Typography>
          </Button>
          : null
      }
      <div style={{ marginLeft: 'auto' }}>
        <NavButton href="/story">About</NavButton>
        <NavButton href="/projects">Work</NavButton>
        <NavButton href="/resume">Resume</NavButton>
      </div>
    </Toolbar>
  </AppBar>