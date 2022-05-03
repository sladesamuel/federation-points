import styled from "@emotion/styled"

const Container = styled.div`
  max-width: 1028px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
`

const Children = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  width: 100vw;
`

const Page = ({ children }) => (
  <Container>
    <Children>{children}</Children>
  </Container>
)

export default Page
