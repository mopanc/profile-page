import styled from "styled-components";
import { useState } from "react";

function Main() {
  const [like1, setLike1] = useState(0);

  function funcAumentar() {
    setLike1(like1 + 1);
  }

  const [like2, setLike2] = useState(0);
  function funcAumentar2() {
    setLike2(like2 + 1);
  }

  return (
    <Container>
      <ShareBox>
        <div>
          <img src="/images/publicacao.png" alt="" />
          <button>Start a new post...</button>
        </div>
        <div>
          <button>
            <img src="/images/photos.png" alt="" />
          </button>
          <button>
            <img src="/images/video-camera.png" alt="" />
          </button>
        </div>
      </ShareBox>
      <div>
        <Article>
          <SharedActor>
            <a>
              <img src="/images/fotocv.jpg" alt="" />
              <div>
                <h3>
                  Jorge Morais
                  <br></br>
                  <div>
                    <img src="/images/clock.png" alt="" />
                    <span>about 3 hours ago</span>
                    <img src="/images/unlock.png" alt="" />
                    <span>just me</span>
                  </div>
                </h3>
              </div>

              <button>
                <img src="/images/expand_more_black_24dp (1).svg" alt=""></img>
              </button>
            </a>
          </SharedActor>
          <MessageBox>
            <span>
              This publication is set up in private mode, only I can see!
            </span>
          </MessageBox>

          <ActionsPub>
            <div>
              <img src="/images/like.png" alt=""></img>
              <span>
                <b>{like1}</b> likes
              </span>
            </div>
            <div>
              <span>0 coments</span>
              <span>0 shares</span>
            </div>
          </ActionsPub>

          <ArticleButtons>
            <button onClick={funcAumentar}>
              <img src="/images/like.png" alt=""></img>
              <span>Like</span>
            </button>
            <button>
              <img src="/images/comente.png" alt=""></img>
              <span>Comment</span>
            </button>
            <button>
              <img src="/images/share.png" alt=""></img>
              <span>Share</span>
            </button>
          </ArticleButtons>
        </Article>
      </div>

      <div>
        <Article>
          <SharedActor>
            <a>
              <img src="/images/fotocv.jpg" alt="" />
              <div>
                <h3>
                  Jorge Morais
                  <br></br>
                  <div>
                    <img src="/images/clock.png" alt="" />
                    <span>about 1 day ago</span>
                    <img src="/images/language.png" alt="" />
                    <span>Public</span>
                  </div>
                </h3>
              </div>

              <button>
                <img src="/images/expand_more_black_24dp (1).svg" alt=""></img>
              </button>
            </a>
          </SharedActor>
          <MessageBox>
            <span>This publication is public, everyone can see!</span>
          </MessageBox>

          <ActionsPub>
            <div>
              <img src="/images/like.png" alt=""></img>
              <span>
                <b>{like2}</b> likes
              </span>
            </div>
            <div>
              <span>55 coments</span>
              <span>12 shares</span>
            </div>
          </ActionsPub>

          <ArticleButtons>
            <button onClick={funcAumentar2}>
              <img src="/images/like.png" alt=""></img>
              <span>Like</span>
            </button>
            <button>
              <img src="/images/comente.png" alt=""></img>
              <span>Comment</span>
            </button>
            <button>
              <img src="/images/share.png" alt=""></img>
              <span>Share</span>
            </button>
          </ArticleButtons>
        </Article>
      </div>
    </Container>
  );
}

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgba(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  align-items: center;
  color: #958b7b;
  margin 0 0 8px;
  background: white;
  justify-content: space-between;

  div {
      button {
          outline: none;
          color: rgba(0, 0, 0, 0.6);
          font-size: 12px;
          line-height: 1;
          min-height: 60px;
          background: transparent;
          border: none;
          display: inline-flex;
          align-items: center;
          font-weight: 600;

          
          &:hover {
            background-color: rgba(0, 0, 0, 0.09);
          }
      }
      &:first-child {
          display: flex;
          align-items: center;
          padding: 8px 10px 0px 10px;
          img{
              margin-right: 4px;
          }
          button {
              flex-grow: 1;
              border-radius: 20px;
              padding-left: 10px;
              
          }
      }
      &:nth-child(2) {
          color: rgba(0, 0, 0, 0.6)
      }
  }

`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 18px 0 18px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;
    justify-content: space-between;
    align-items: center;

    img {
      width: 48px;
      height: 48px;
      border: 2px solid #000;
      border-radius: 50%;
    }
    & > div {
      display: flex;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      justify-content: column;

      h3 {
        text-align: left;
        font-size: 18px;
        font-weight: 800;
        color: #5ab2da;

        div {
          display: flex;
          align-items: center;
        }
        img {
          width: 16px;
          height: 16px;
          border: none;
          margin-right: 2px;
        }
        span {
          margin-left: 0px;
          margin-right: 15px;
          font-size: 14px;
          color: rgba(0, 0, 0, 0.4);
          align-items: center;
        }
      }
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;

    &:hover {
      background-color: rgba(0, 0, 0, 0.09);
    }
    img {
      border: none;
      width: 24px;
      height: 24px;
    }
  }
`;

const MessageBox = styled.div`
  font-family: Arial;
  font-size: 16px;
  display: flex;
  padding: 10px;
  margin-left: 8px;
  text-align: left;
  color: rgba(0, 0, 0, 0.5);
`;

const ActionsPub = styled.div`
  display: flex;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.5);
  align-items: center;
  margin-right: 10px;
  padding: 0px 8px 16px 16px;

  img {
    border: none;
    width: 16px;
    height: 16px;
    margin-right: 5px;
  }
  div {
    display: flex;
    span {
      margin-right: 8px;
    }
  }
`;

const ArticleButtons = styled.div`
  display: flex;
  justify-content: space-around;
  text-decoration: none;
  button {
    text-align: center;
    padding: 5px 36px 5px 36px;
    margin-bottom: 16px;
    border: none;
    border-radius: 20px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.09);
    }

    img {
      border: none;
      width: 16px;
      height: 16px;
      margin-right: 6px;
    }
  }
`;

export default Main;
