/* eslint import/newline-after-import: "off" */
import { useEffect } from 'react';
import styled from 'styled-components';

// 전체 영역
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

// 마중 상단 영역
const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 25px;
  height: 15%;
  background-color: #f3f3f3;
`;

// 상단 툴바
const Toolbar = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  margin-left: auto;
  justify-content: center;
  align-items: center;
`;

const IconCoffe = styled.div`
  margin-left: auto;
`;
const IconSort = styled.div`
  margin-left: 5px;
`;

// 상단 타이틀
const TopTitleWrapper = styled.div`
  h3 {
    margin: 0;
    font-size: 1.5rem;
  }
  p {
    font-size: 1rem;
    margin-top: 8px;
  }
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// 하단 카페리스트 영역
const CafeCardListWrapper = styled.div`
  height: 20%;
  padding: 20px 25px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
`;

const CafeCardWrpper = styled.div`
  margin: 5px;
  flex: 0 0 auto;
  width: 140px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  border: 0.6px solid #e3e7e9;
  box-shadow: 0 10px 20px #e3e7e9, 0 6px 6px #e3e7e9;
`;

const CafeCardTop = styled.div`
  flex: 0.4;
  border-radius: 20px 20px 0px 0px;
  display: flex;
  padding: 8px;
  align-items: center;
  justify-content: space-between;
`;

const CafeCardName = styled.div`
  flex: 1.2;
  display: flex;
  padding: 0px 10px;
  align-items: center;
`;
const CafeCardImg = styled.div`
  flex: 1.8;
  border-radius: 0px 0px 20px 20px;
  overflow: hidden;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const CafeTag = styled.div`
  background-color: blueviolet;
  border-radius: 15px;
  padding: 5px 15px;
  font-size: 13px;
  color: white;
`;

const testArr = [1, 2, 3, 4, 5, 6];

declare global {
  interface Window {
    kakao: any;
  }
}

function Home() {
  return (
    <Wrapper>
      <TopWrapper>
        <Toolbar>
          <IconCoffe>검색</IconCoffe>
          <IconSort>정렬</IconSort>
        </Toolbar>
        <TopTitleWrapper>
          <h3>마중</h3>
          <p>☕️ 따뜻한 오후, 커피 한 잔 어떠세요?</p>
        </TopTitleWrapper>
      </TopWrapper>

      <CafeCardListWrapper>
        {testArr.map((item, index) => (
          <CafeCardWrpper>
            <CafeCardTop>
              <CafeTag>친절한</CafeTag>
              <div>하틍</div>
            </CafeCardTop>

            <CafeCardName>카페 우드진</CafeCardName>

            <CafeCardImg>
              <Img alt="write_icon" src="https://www.thinkfood.co.kr/news/photo/202007/88177_114044_267.jpg" />
            </CafeCardImg>
          </CafeCardWrpper>
        ))}
      </CafeCardListWrapper>
    </Wrapper>
  );
}

export default Home;
