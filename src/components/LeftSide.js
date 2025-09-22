import styled from "styled-components";

const LeftSide = (props) => {
    return (
        <Container>
            <ArtCard>
                <UserInfo>
                    <CardBackground />
                    <h1>
                        <Photo />
                        <NameCard>mopanc</NameCard>
                    </h1>
                    <a href="https://github.com/mopanc">
                        <LinkCard>@mopanc</LinkCard>
                    </a>
                    <p>
                        <TitleCardPro>Full-stack Developer</TitleCardPro>
                    </p>
                </UserInfo>
                <Widget>
                    <a>
                        <div>
                            <img src="/images/adress-icon.png" alt="" />
                            <span>Braga, Portugal</span>
                        </div>
                    </a>
                    <StatusCard>
                        <div>
                            <img src="/images/company-icon.png" alt="" />
                            <span>InCicle</span>
                        </div>
                        <div>
                            <img src="/images/university-icon.png" alt="" />
                            <span>Minho University</span>
                        </div>
                        
                    </StatusCard>
                    
                </Widget>
            </ArtCard>
        </Container>
    )
}

const Container = styled.div`
    grid-area: leftside;
`; 


const ArtCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 15px;
    background-color: #fff;
    border-radius: 12px;
    transition: all 0.3s ease;
    position: relative;
    border: none;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    }
`;

const UserInfo = styled.div`
    border-bottom: 2px solid rgba(0, 0, 0, 0.15);
    padding: 20px 20px 24px;
    word-wrap: break-word;
    word-break: break-word;

`;

const CardBackground = styled.div`
    background: url("/images/OIP.jpeg");
    background-position: center;
    background-size: 482px;
    height: 224px;
    margin: -12px -12px 0;
`;

const Photo = styled.div`
    box-shadow: none;
    background-image: url("https://avatars.githubusercontent.com/u/45471030?v=4");
    width: 150px;
    height: 150px;
    box-sizing: border-box;
    background-clip: content-box;
    background-color: white;
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    border: 3px solid #0366d6;
    margin: -38px auto 12px;
    border-radius: 50%;
    transition: all 0.3s ease;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 20px rgba(3, 102, 214, 0.3);
    }
`;

const NameCard = styled.div`
    font-family: Arial;
    font-size: 24px;
    font-styled: bold;
    color: #5ab2da;
    line-height: 1.5;
`;

const LinkCard = styled.div`
    font-size: 14px;
    line-height: 1.5;
`;

const TitleCardPro = styled.div`
    font-size: 12px;
    color: #808080;
`;

const Widget = styled.div`
    padding: 25px 20px;
    color: #808080;
    margin: 0;

    & > a {
        text-decoration: none;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        padding: 4px 12px;

        &:hover {
            background-color: rgba(0, 0, 0, 0.08);
        }

        div {
            display: flex;
            align-items: center;
        }
    }
    
    & span {
        margin-left: 10px;
    }
`;

const StatusCard = styled.div`
    text-decoration: none;
    display: flex;
    font-size: 14px;
    padding: 10px 10px 10px 10px;
    align-items: center;
    justify-content: space-between;
    word-wrap: none;
    word-break: none;
    

    div {
        display: flex;
        align-items: center;
        &:hover {
            background-color: rgba(0, 0, 0, 0.08);
        }
    }

    span {
        align-items: center;

    }



`;


export default LeftSide;
