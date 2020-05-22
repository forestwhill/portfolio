import styled from 'styled-components'

const Background = styled.div`
  background:
    /* top, overlay color */
    linear-gradient(
      rgba(0, 0, 0, 0.7), 
      rgba(0, 0, 0, 0.7)
    ),
    /* bottom, image */
    url(https://images.pexels.com/photos/226653/pexels-photo-226653.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 120px;
  margin-right: 40%;
`

const Text = styled.span`
  color: #ccc;
`

export { Background, TextContainer, Text }