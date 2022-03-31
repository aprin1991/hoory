import Title from "./../../components/pageTitle";
import React, { useEffect, useRef } from "react";
import { HomePageContainer, ButtonWrapper } from "./components/Home.style";
import { useDispatch, useSelector } from "react-redux";
import { RippleButton } from "./../../components/button";
import { RootState } from "./../../redux/reducers";
import { setColor } from "./../../redux/background/background.action";
const HomePage = () => {
  const { color } = useSelector((state: RootState) => state.color);
  const dispatch = useDispatch();
  const timerRef = useRef(0);

  useEffect(() => {
    changeBodyBg(color);
    return () => {
      handleRemoveTimer();
    };
  }, []);

  const changeBodyBg = (randomColor: string) => {
    document.body.style.backgroundColor = randomColor;
  };

  const handleChangeBackGround = () => {
    handleRemoveTimer();
    timerRef.current = window.setInterval(() => {
      const randomColor = generateRandomColor();
      changeBodyBg(randomColor);
      dispatch(setColor(randomColor));
    }, 1000);
  };

  const generateRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  const clearBackground = () => {
    handleRemoveTimer();
    changeBodyBg("white");
    dispatch(setColor("white"));
  };
  const handleRemoveTimer = () => {
    clearInterval(timerRef.current);
  };

  return (
    <HomePageContainer>
      <Title title="Hoory 🎉"></Title>
      <ButtonWrapper>
        <RippleButton
          classes="btn btn-primary"
          onClick={handleChangeBackGround}
        >
          Start ⏱
        </RippleButton>
        <RippleButton classes="btn btn-error" onClick={handleRemoveTimer}>
          Stop ⛔
        </RippleButton>
        <RippleButton classes="btn btn-cancel" onClick={clearBackground}>
          Remove
        </RippleButton>
      </ButtonWrapper>
    </HomePageContainer>
  );
};

export default HomePage;
