import React from 'react'
import { Avatar, Typography } from '@material-ui/core'
import styled from 'styled-components'

import { Line } from '../../elements'

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default ({ alt, image, children }) =>
  <div>
    <Title>
      {alt && image
        ? <Avatar src={image} alt={alt} style={{ width: 75, height: 75, marginRight: 20, transform: 'rotate(90deg)' }} />
        : null
      }
      <Typography variant="h3" align="center">
        {children}
      </Typography>
    </Title>
    <Line />
  </div>