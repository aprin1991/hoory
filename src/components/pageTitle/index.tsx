import { FC } from "react";
import { TitleContainer } from "./Title.style";
type IProps = {
  title: string;
};
const Title: FC<IProps> = ({ title }) => {
  return <TitleContainer>{title}</TitleContainer>;
};

export default Title;
