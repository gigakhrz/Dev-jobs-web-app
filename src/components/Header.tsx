import styled from "styled-components";
import logo from "../../public/assets/desktop/logo.svg";
import moon from "../../public/assets/desktop/icon-moon.svg";
import sun from "../../public/assets/desktop/icon-sun.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../features/store";
import { setDark } from "../features/lightModeSLice";

const Header = (): JSX.Element => {
  const mode = useSelector((store: RootState) => store.lightMode.dark);

  const dispatch = useDispatch();

  const handleChangeLight = (): void => {
    dispatch(setDark(!mode));
  };

  return (
    <HeaderCont>
      <img
        src={logo}
        alt="Logo img"
        onClick={() => {
          location.reload;
        }}
      />
      <LightMode>
        <img src={sun} alt="Sun img" />
        <label>
          <input type="checkbox" onChange={handleChangeLight} />
          <span className="slider"></span>
        </label>
        <img src={moon} alt="moon img" />
      </LightMode>
    </HeaderCont>
  );
};

export default Header;

const HeaderCont = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #5964e0;
  padding: 32px 24px 72px;

  img {
    cursor: pointer;
  }
`;

const LightMode = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 112px;

  label {
    appearance: none;
    width: 44px;
    height: 24px;
    outline: none;
    background-color: #dfdfdf;
    border-radius: 16px;
    position: relative;
    display: inline-block;
    :hover {
      opacity: 0.5;
    }
  }

  label input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 16px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: #5964e0;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
    background-color: #5964e0;
  }
`;
