import React, { Fragment } from 'react'
import { GridList, GridListTile, GridListTileBar, Tooltip, Typography } from '@material-ui/core'

import { Content, Navbar, Title } from '../../../components/blocks'
import { GithubButton, Paper } from '../../../components/elements'
import projects from './items'

export default () =>
  <Fragment>
    <Navbar />
    <Content>
      <Title>My Projects</Title>
      <Paper elevation={10}>
        <Typography align="center">
          Check out some of my development projects below. For a little more info, hover over the image.
        </Typography>
        <Typography align="center" paragraph>
          To see even more, click the link in the bottom right corner for the Github page!
        </Typography>
        <GridList cellHeight={300}>
          {projects.map(({ title, image, link, description }, index) =>
            <Tooltip title={<span style={{ fontSize: '1.5em' }}>{description}</span>} placement={index < 2 ? "top" : "bottom"}>
              <GridListTile >
                {/* Used inline styling because Styled Components caused images to look weird here. */}
                <img src={image} alt={title} style={{ opacity: 0.8 }} tooltip='test' />
                <GridListTileBar
                  title={title}
                  actionIcon={
                    <GithubButton href={link} />
                  }
                />
              </GridListTile>
            </Tooltip>
          )}
        </GridList>
      </Paper>
    </Content>
  </Fragment>
