import React, { Component, Fragment } from 'react'
import { GridList, GridListTile, GridListTileBar, Typography } from '@material-ui/core'

import { Content, Navbar, Title } from '../../../components/blocks'
import { Paper } from '../../../components/elements'
import { forestHill } from '../../../resources/images'
import aboutMe from './items'

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Content>
          <Title image={forestHill} alt="Forest Hill" >About Me</Title>
          <Paper elevation={10} style={{ marginBottom: 20 }}>
            <Typography align="center">
              Before we get to the work stuff,
              I should let you know a little bit about the man behind the code.
            </Typography>
            <Typography align="center" paragraph>
              See below for my personal life in a box!
            </Typography>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              overflow: 'hidden'
            }}>
              <GridList
                cellHeight={220}
                style={{
                  flexWrap: 'nowrap',
                  transform: 'translateZ(0)'
                }}
              >
                {aboutMe.map(({ title, image, description }) =>
                  <GridListTile>
                    <img
                      src={image}
                      alt={title}
                    />
                    <GridListTileBar
                      title={description}
                    />
                  </GridListTile>
                )}
              </GridList>
            </div>
          </Paper>
          <Title>My Story</Title>
          <Paper elevation={10}>
            <Typography paragraph>
              My adulthood has been a bit unorthodox so far. Upon graduating high school I purchased my childhood home
              from my parents. While learning how to take care of a house (and also managing a long term relationship),
              I worked part time and took some time to figure out what I wanted to do with my career.
            </Typography>
            <Typography paragraph>
              By 2013 I had started down two paths.
              First, I began attending a local community college to pursue a degree in Business Administration.
              Second, I started working at my first full-time job.
            </Typography>
            <Typography paragraph>
              When I started at Clinical Ink, I knew a little bit about programming
              but hadn't yet made much use of it. It wouldn't be long before I learned a lot about it,
              as my job was now to write code in C# and JavaScript.
            </Typography>
            <Typography paragraph>
              It didn't take long for me to become comfortable enough with our code that I started to see
              things we could be doing better. So I wrote a library of code which my team would eventually
              use to replace the tedious chunks of copy-pasted code which we had incorporated throughout our forms.
              Following that I wrote a few Python scripts which replaced another large chunk of manual effort
              for our testing team.
            </Typography>
            <Typography>
              Somewhere in that time I completed my degree, learned SQL for a contract position
              and picked up a few new hobbies.
              But I continued to look for ways to build my skills.
              Before long I found Cook Systems and joined their full stack Java developer bootcamp.
              Since then I have learned a ton about being a full stack developer and feel more ready
              than ever to take on new challenges and write some great code!
            </Typography>
          </Paper>
        </Content>
      </Fragment>
    )
  }
}
