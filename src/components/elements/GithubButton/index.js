import React from 'react'
import { IconButton } from '@material-ui/core'
import { GoMarkGithub } from 'react-icons/go'

export default ({ href }) => {
  return (
    // Used inline styling here because of order of operations issues
    <IconButton href={href} style={{ color: '#fff' }}>
      <GoMarkGithub />
    </IconButton>
  )
}