import { styled } from "styled-components";
import locationIcon from "../../public/assets/desktop/icon-location.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../features/store";
import searchIcon from "../../public/assets/desktop/icon-search.svg";

interface NavBarProps {
  inputValue: string;
  setInputValue: (inputValue: string) => void;
  setSecondInputValue: (secondInputValue: string) => void;
  setIsFullTime: (isFullTime: boolean) => void;
  isFulltime: boolean;
}

//this component is for tablet and desktop
const Navbar = ({
  inputValue,
  setInputValue,
  setSecondInputValue,
  isFulltime,
  setIsFullTime,
}: NavBarProps): JSX.Element => {
  // lightmode state
  const mode = useSelector((store: RootState) => store.lightMode.dark);

  const dispatch = useDispatch();
  return (
    <NavBarContainer mode={mode}>
      <div className="wrapper">
        <img src={searchIcon} alt="" />
        <input
          className="filterText"
          value={inputValue}
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Filter by title…"
        />
      </div>

      <hr />

      <div className="wrapper">
        <img src={searchIcon} alt="" />
        <input
          className="filterText"
          type="text"
          placeholder="Filter by location…"
          onChange={(e) => setSecondInputValue(e.target.value)}
        />
      </div>

      <hr />

      <div className="secondWrapper">
        <div className="fullTime">
          <input
            className="checkbox"
            type="checkbox"
            onChange={() => setIsFullTime(!isFulltime)}
          />
          <h3>Full Time</h3>
        </div>

        <button type="submit">Search</button>
      </div>
    </NavBarContainer>
  );
};

export default Navbar;

const NavBarContainer = styled.div<{ mode: boolean }>`
  display: none;
  align-items: center;
  justify-content: center;
  gap: 24px;
  @media screen and (min-width: 768px) {
    display: flex;
    width: 100%;
    height: 80px;
  }
  .wrapper {
    width: 175px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }
  .filterText {
    width: 100%;
    height: 16px;
    color: ${(props) => (props.mode ? "white" : "#19202d")};
    font-size: 16px;
    font-weight: 400;
    background: none;
    border: none;
    outline: none;
  }

  hr {
    border: none;
    min-width: 1px;
    height: 100%;
    background: #6e8098;
    opacity: 0.2;
  }

  .secondWrapper {
    display: flex;
    gap: 28px;
    align-items: center;
    justify-content: center;

    .fullTime {
      display: flex;
      align-items: center;
      gap: 16px;
      justify-content: start;
      width: 110px;

      .checkbox {
        width: 24px;
        height: 24px;
        background: none;
        border: none;
        outline: none;
      }

      h3 {
        color: ${(props) => (props.mode ? "white" : "#19202d")};
        font-size: 16px;
        font-weight: 700;
        min-width: 68px;
        display: inline-block;
      }
    }

    button {
      min-width: 80px;
      height: 48px;
      color: #fff;
      text-align: center;
      font-family: Kumbh Sans;
      font-size: 16px;
      font-weight: 700;
      background-color: #5964e0;
      border: none;
      border-radius: 5px;
    }
  }
`;
