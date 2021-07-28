import styled from "styled-components";

const LeftSide = (props) => {
    return (
        <Container>
            <ArtCard>
                <UserInfo>
                    <CardBackground />
                    <h1>
                        <Photo />
                        <NameCard>Jorge Morais</NameCard>
                    </h1>
                    <a>
                        <LinkCard>@jorgemorais</LinkCard>
                    </a>
                    <p>
                        <TitleCardPro>Front-end Developer</TitleCardPro>
                    </p>
                </UserInfo>
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
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 6px;
    transition: box-shadow 83ms:
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgba(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const UserInfo = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding: 12px 12px 16px;
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
    background-image: url("/images/fotocv.jpg");
    width: 120px;
    height: 120px;
    box-sizing: border-box;
    background-clip: content-box;
    background-color: white;
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    border: 3px solid black;
    margin: -38px auto 12px;
    border-radius: 50%;
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


export default LeftSide;
