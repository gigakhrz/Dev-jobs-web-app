import styled from "styled-components";
import { setDark } from "../features/lightModeSLice";
import { RootState } from "../features/store";
import { useDispatch, useSelector } from "react-redux";

const Home = (): JSX.Element => {
  // lightmode state
  const mode = useSelector((store: RootState) => store.lightMode.dark);

  const dispatch = useDispatch();

  //change lightmode state
  const handleChangeLight = (): void => {
    dispatch(setDark(!mode));
  };

  return <></>;
};

export default Home;

const HomeContainer = styled.form`
  width: 100%;
  padding: 0 24px 62px;
`;
