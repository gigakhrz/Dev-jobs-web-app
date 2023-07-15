import { styled } from "styled-components";
import locationIcon from "../../public/assets/desktop/icon-location.svg";
import { useSelector } from "react-redux";
import { RootState } from "../features/store";

const Filter = (): JSX.Element => {
  // lightmode state
  const mode = useSelector((store: RootState) => store.lightMode.dark);

  //mobile filter open/close state
  const mobileFilter = useSelector(
    (store: RootState) => store.setFilter.filter
  );
  return (
    <FilterContainer mode={mode} filter={mobileFilter}>
      <div className="location">
        <img src={locationIcon} alt="location icon" />
        <input
          className="filterLocatin"
          type="text"
          placeholder="Filter by location…"
        />
      </div>

      <hr />

      <div className="fullTime">
        <input className="checkbox" type="checkbox" />
        <h3>Full Time Only</h3>
      </div>

      <button>Search</button>
    </FilterContainer>
  );
};

export default Filter;

const FilterContainer = styled.div<{ mode: boolean; filter: boolean }>`
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
      background: none;
      border: none;
      outline: none;
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
