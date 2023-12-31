import { styled } from "styled-components";
import locationIcon from "../../public/assets/desktop/icon-location.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../features/store";
import { closeFilter } from "../features/mobileFilterSlice";

interface FilterProps {
  setSecondInputValue: (secondInputValue: string) => void;
  setIsFullTime: (isFullTime: boolean) => void;
  isFulltime: boolean;
}

const Filter = ({
  setSecondInputValue,
  setIsFullTime,
  isFulltime,
}: FilterProps): JSX.Element => {
  // lightmode state
  const mode = useSelector((store: RootState) => store.lightMode.dark);
  //mobile filter open/close state
  const mobileFilter = useSelector(
    (store: RootState) => store.setFilter.filter
  );

  //to close filter when search button clicked
  const dispatch = useDispatch();

  return (
    <FilterContainer mode={mode} filter={mobileFilter} isFullTime={isFulltime}>
      <div className="location">
        <img src={locationIcon} alt="location icon" />
        <input
          className="filterLocation"
          type="text"
          placeholder="Filter by location…"
          onChange={(e) => setSecondInputValue(e.target.value)}
        />
      </div>

      <hr />

      <div className="fullTime">
        <input
          className="checkbox"
          type="checkbox"
          onChange={() => setIsFullTime(!isFulltime)}
        />
        <h3>Full Time Only</h3>
      </div>

      <button type="submit" onClick={() => dispatch(closeFilter())}>
        Search
      </button>
    </FilterContainer>
  );
};

export default Filter;

const FilterContainer = styled.div<{
  mode: boolean;
  filter: boolean;
  isFullTime: boolean;
}>`
  width: 327px;
  padding: 24px;
  background-color: ${(props) => (props.mode ? "#19202D" : "white")};
  position: absolute;
  display: ${(props) => (props.filter ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  gap: 27px;
  left: 50%;
  top: 225px;
  transform: translateX(-50%);
  z-index: 2;
  border-radius: 6px;

  @media screen and (min-width: 768px) {
    display: none;
  }

  .location {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 16px;
    justify-content: start;
  }

  .filterLocation {
    min-width: 220px;
    color: ${(props) => (props.mode ? "white" : "#19202d")};
    font-size: 16px;
    font-weight: 400;
    background: none;
    border: none;
    outline: none;
    background: none;
  }

  hr {
    border: none;
    outline: none;
    width: 100%;
    height: 1px;
    background: #6e8098;
    opacity: 0.2;
  }

  .fullTime {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 16px;
    justify-content: start;

    .checkbox {
      width: 24px;
      height: 24px;
      background: ${(props) => (props.mode ? "white" : "#19202d")};
      opacity: ${(props) => (props.isFullTime ? "" : "0.1")};
      border: none;
      outline: none;
      border-radius: 3px;
    }

    h3 {
      color: ${(props) => (props.mode ? "white" : "#19202d")};
      font-size: 16px;
      font-weight: 700;
    }
  }

  button {
    width: 279px;
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
`;
