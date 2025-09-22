import styled from "styled-components";

const RightSide = (props) => {
  return (
    <Container>
      <DashboardCard>
        <div>
          <Activities>
            <div>
              <h3>
                Activities <br></br>
                <span>23/100</span>
              </h3>
            </div>
            <div>
              <p>50%</p>
            </div>
          </Activities>
          <Projects>
            <h3>
              Projects<br></br>
              <span>23/100</span>
            </h3>
            <p>50%</p>
          </Projects>
        </div>
        <TotalCard>
          <h3>
            Total<br></br>
            <span>23/100</span>
          </h3>
          <p>50%</p>
        </TotalCard>

        <div>
          <ActivitieMetrics>
            <h5>Activities</h5>
            <div>
              <p>To do</p>
              <span>5</span>
            </div>
            <div>
              <p>Pending </p>
              <span>5</span>
            </div>
            <div>
              <p>Done </p>
              <span>5</span>
            </div>
          </ActivitieMetrics>
          <ProjectMetrics>
            <h5>Projects</h5>
            <div>
              <p>To do</p>
              <span>5</span>
            </div>
            <div>
              <p>Pending </p>
              <span>5</span>
            </div>
            <div>
              <p>Done </p>
              <span>5</span>
            </div>
          </ProjectMetrics>
          <TotalMetrics>
            <h5>Total</h5>
            <div>
              <p>To do</p>
              <span>5</span>
            </div>
            <div>
              <p>Pending </p>
              <span>5</span>
            </div>
            <div>
              <p>Done </p>
              <span>5</span>
            </div>
          </TotalMetrics>
        </div>
      </DashboardCard>

      <BirthdayCard>
        <div>
          <img src="/images/bolo-de-aniversario.png" alt="" />
          <span>Birthdays</span>
        </div>
      </BirthdayCard>
      <BirthdayInfo>
        <p>None of your friends have their birthday today</p>
      </BirthdayInfo>

      <PendencesCard>
        <div>
          <img src="/images/flexible.png" alt="" />
          <span>Pendences</span>
        </div>
      </PendencesCard>
      <DateLine>
        <p>Qua, 28 de Jul 2021</p>
      </DateLine>
      <PendencesInfo>
        <p>You have no pending issues</p>
      </PendencesInfo>
    </Container>
  );
};

const Container = styled.div`
  grid-area: rightside;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
`;

const DashboardCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 15px;
  background-color: #fff;
  border-radius: 12px;
  position: relative;
  border: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 25px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }

  & > div {
    display: flex;
    justify-content: space-between;
  }
`;

const Activities = styled.div`
  display: flex;
  width: 50%;
  height: 25px;
  background-color: #649ed9;
  text-decoration: none;
  text-align: left;
  font-size: 14px;
  color: #fff;
  border-radius: 8px;
  padding: 25px;
  margin-right: 6px;
  margin-bottom: 6px;
  align-items: center;

  & p {
    display: flex;
    font-size: 18px;
    margin-left: 20px;
    align-items: center;
  }
`;

const Projects = styled.div`
  display: flex;
  width: 50%;
  height: 25px;
  background-color: #505559;
  text-decoration: none;
  text-align: left;
  font-size: 14px;
  color: #fff;
  border-radius: 8px;
  padding: 25px;
  margin-bottom: 6px;
  align-items: center;

  & p {
    display: flex;
    font-size: 18px;
    margin-left: 20px;
    align-items: center;
  }
`;

const TotalCard = styled.div`
  display: flex;
  height: 25px;
  background-color: #6383a6;
  text-decoration: none;
  text-align: left;
  font-size: 14px;
  color: #fff;
  border-radius: 8px;
  padding: 25px;
  align-items: center;

  & p {
    display: flex;
    font-size: 18px;
    margin-left: 30px;
    align-items: center;
  }
`;

const ActivitieMetrics = styled.div`
  display: flex;
  width: 33%;
  flex-direction: column;
  border: 2px solid #649ed9;
  border-radius: 6px;
  margin-top: 4px;
  margin-right: 4px;
  position: relative;
  font-size: 12px;
  padding-bottom: 15px;

  div {
    display: flex;
    justify-content: space-between;
  }

  & h5 {
    display: flex;
    padding: 10px;
    justify-content: center;
  }
  & p {
    display: flex;
    text-align: left;
    line-height: 2;
    margin-left: 5px;
    align-items: center;
  }

  & span {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 5px;
  }
`;

const ProjectMetrics = styled.div`
  display: flex;
  width: 33%;
  flex-direction: column;
  border: 2px solid #505559;
  border-radius: 6px;
  margin-top: 4px;
  margin-right: 4px;
  font-size: 12px;
  padding-bottom: 15px;

  div {
    display: flex;
    justify-content: space-between;
  }

  & h5 {
    display: flex;
    padding: 10px;
    justify-content: center;
  }
  & p {
    display: flex;
    text-align: left;
    line-height: 2;
    margin-left: 5px;
  }
  & span {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 5px;
  }
`;

const TotalMetrics = styled.div`
  display: flex;
  width: 33%;
  flex-direction: column;
  border: 2px solid #6383a6;
  border-radius: 6px;
  margin-top: 4px;
  font-size: 12px;
  padding-bottom: 15px;

  div {
    display: flex;
    justify-content: space-between;
  }

  & h5 {
    display: flex;
    justify-content: center;
    padding: 10px;
  }

  & p {
    display: flex;
    text-align: left;
    line-height: 2;
    margin-left: 5px;
  }
  & span {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 5px;
  }
`;

const BirthdayCard = styled.div`
  display: flex;
  text-align: center;
  overflow: hidden;
  background-color: #fff;
  border-radius: 12px 12px 0px 0px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 22px;
  border-bottom: 3px solid rgba(0, 0, 0, 0.1);
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }

  & div {
    display: flex;
    align-items: center;
  }

  & span {
    margin-left: 8px;
    font-weight: 600;
  }
`;

const BirthdayInfo = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 15px;
  background-color: #fff;
  border-radius: 0px 0px 12px 12px;
  border-top: none;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 25px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const PendencesCard = styled.div`
  display: flex;
  text-align: center;
  overflow: hidden;
  background-color: #fff;
  border-radius: 12px 12px 0px 0px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 22px;
  margin-bottom: 1px;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }

  & div {
    display: flex;
    align-items: center;
  }

  & span {
    margin-left: 8px;
    font-weight: 600;
  }
`;

const PendencesInfo = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 15px;
  background-color: #fff;
  border-radius: 0px 0px 12px 12px;
  border-top: none;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 25px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const DateLine = styled.div`
  display: flex;
  text-align: left;
  height: 30px;
  overflow: hidden;
  position: relative;
  border: 3px rgba rgba(0, 0, 0, 0.09);
  align-items: center;
  background-color: rgba(0, 0, 0, 0.09);

  & p {
    margin-left: 5px;
  }
`;

export default RightSide;
