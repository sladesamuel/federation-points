import styled from "@emotion/styled"

const Container = styled.div`
  max-width: 1028px;
  margin-left: auto;
  margin-right: auto;
  padding: 25px;
`

const Page = ({ children }) => <Container>{children}</Container>

export default Page
