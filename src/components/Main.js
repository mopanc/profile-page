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
              <img src="https://avatars.githubusercontent.com/u/45471030?v=4" alt="" />
              <div>
                <h3>
                  mopanc
                  <br></br>
                  <div>
                    <img src="/images/clock.png" alt="" />
                    <span>about 2 hours ago</span>
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
              🚀 Working on a new React project with modern best practices. Implementing clean architecture and focusing on user experience. This project showcases my evolution as a developer!
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
              <img src="https://avatars.githubusercontent.com/u/45471030?v=4" alt="" />
              <div>
                <h3>
                  mopanc
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
            <span>
              💻 Just deployed a new feature to production! The team collaboration was amazing and we delivered ahead of schedule.
              Always learning something new in this journey as a developer. #webdevelopment #react #javascript
            </span>
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

      <div>
        <Article>
          <SharedActor>
            <a>
              <img src="https://avatars.githubusercontent.com/u/45471030?v=4" alt="" />
              <div>
                <h3>
                  mopanc
                  <br></br>
                  <div>
                    <img src="/images/clock.png" alt="" />
                    <span>about 3 days ago</span>
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
            <span>
              🎯 Excited to share that I've been exploring the latest trends in web development! Currently diving deep into
              Next.js 14 and the new App Router. The developer experience keeps getting better and better.
              What new technologies are you most excited about?
            </span>
          </MessageBox>

          <ActionsPub>
            <div>
              <img src="/images/like.png" alt=""></img>
              <span>
                <b>28</b> likes
              </span>
            </div>
            <div>
              <span>12 coments</span>
              <span>5 shares</span>
            </div>
          </ActionsPub>

          <ArticleButtons>
            <button>
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
              <img src="https://avatars.githubusercontent.com/u/45471030?v=4" alt="" />
              <div>
                <h3>
                  mopanc
                  <br></br>
                  <div>
                    <img src="/images/clock.png" alt="" />
                    <span>about 5 days ago</span>
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
            <span>
              📚 Just finished reading "Clean Code" by Robert C. Martin for the second time.
              Every time I read it, I discover new insights that make me a better developer.
              The principles of writing maintainable and readable code are timeless!
              #cleancode #programming #softwaredevelopment
            </span>
          </MessageBox>

          <ActionsPub>
            <div>
              <img src="/images/like.png" alt=""></img>
              <span>
                <b>45</b> likes
              </span>
            </div>
            <div>
              <span>18 coments</span>
              <span>8 shares</span>
            </div>
          </ActionsPub>

          <ArticleButtons>
            <button>
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
              <img src="https://avatars.githubusercontent.com/u/45471030?v=4" alt="" />
              <div>
                <h3>
                  mopanc
                  <br></br>
                  <div>
                    <img src="/images/clock.png" alt="" />
                    <span>about 1 week ago</span>
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
            <span>
              🌟 Grateful for the amazing developer community! Open source has taught me so much over the years.
              Today I contributed to a React component library that helps thousands of developers.
              It's incredible how we can all learn and grow together. Keep building amazing things! 🚀
            </span>
          </MessageBox>

          <ActionsPub>
            <div>
              <img src="/images/like.png" alt=""></img>
              <span>
                <b>67</b> likes
              </span>
            </div>
            <div>
              <span>24 coments</span>
              <span>15 shares</span>
            </div>
          </ActionsPub>

          <ArticleButtons>
            <button>
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
  margin-bottom: 15px;
  background-color: #fff;
  border-radius: 12px;
  position: relative;
  border: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
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
          padding: 15px 20px;
          img{
              margin-right: 8px;
          }
          button {
              flex-grow: 1;
              border-radius: 25px;
              padding: 15px 20px;
              font-size: 14px;
          }
      }
      &:nth-child(2) {
          color: rgba(0, 0, 0, 0.6)
      }
  }

`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 20px 0;
  overflow: visible;
  background: linear-gradient(145deg, #ffffff, #f8f9fa);
  border: 1px solid rgba(0, 0, 0, 0.05);
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 20px 24px 0;
  margin-bottom: 12px;
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
  padding: 15px 24px;
  margin: 0;
  text-align: left;
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.6;
`;

const ActionsPub = styled.div`
  display: flex;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.5);
  align-items: center;
  margin: 0;
  padding: 8px 24px 20px 24px;

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
  padding: 15px 24px 20px 24px;
  button {
    text-align: center;
    padding: 10px 36px;
    margin-bottom: 16px;
    border: none;
    border-radius: 25px;
    font-weight: 600;
    transition: all 0.3s ease;
    background: linear-gradient(145deg, #f8f9fa, #e9ecef);
    color: #495057;
    cursor: pointer;

    &:hover {
      background: linear-gradient(145deg, #e9ecef, #dee2e6);
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    &:active {
      transform: translateY(0);
    }

    img {
      border: none;
      width: 16px;
      height: 16px;
      margin-right: 8px;
    }
  }
`;

export default Main;
