import styled from "styled-components";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Main from "./Main";

const Homepage = (props) => {
  return (
    <Container>
      <Layout>
        <LeftSide />
        <Main />
        <RightSide />
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 20px;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(350px, 1fr) minmax(500px, 2fr) minmax(350px, 1fr);
  column-gap: 20px;
  row-gap: 30px;
  margin: 30px 20px;
  @media (max-width: 1200px) {
    grid-template-columns: minmax(320px, 1fr) minmax(450px, 1.8fr) minmax(320px, 1fr);
    column-gap: 15px;
    margin: 20px 15px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 20px 10px;
    column-gap: 0;
    row-gap: 20px;
  }
`;

export default Homepage;
