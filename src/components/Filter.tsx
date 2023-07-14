import { styled } from "styled-components";
import locationIcon from "../../public/assets/desktop/icon-location.svg";
import { useSelector } from "react-redux";
import { RootState } from "../features/store";

const Filter = (): JSX.Element => {
  // lightmode state
  const mode = useSelector((store: RootState) => store.lightMode.dark);
  return (
    <FilterContainer mode={mode}>
      <div className="location">
        <img src={locationIcon} alt="location icon" />
        <input type="text" placeholder="Filter by location…" />
      </div>

      <hr />
      <h3>Full Time Only</h3>
      <div className="fullTime"></div>
    </FilterContainer>
  );
};

export default Filter;

const FilterContainer = styled.div<{ mode: boolean }>`
  width: 327px;
  padding: 24px;
  background-color: ${(props) => (props.mode ? "#19202D" : "white")};
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 27px;

  .location {
    width: 100%;
    display: flex;
    align-items: start;
    gap: 16px;
    justify-content: center;
  }

  input {
    min-width: 220px;
    color: ${(props) => (props.mode ? "white" : "#19202d")};
    font-size: 16px;
    font-weight: 400;
    background: none;
    border: none;
    outline: none;
  }

  .fulltime {
    width: 100%;
    display: flex;
    align-items: start;
    gap: 16px;
    justify-content: center;

    h3 {
      color: ${(props) => (props.mode ? "white" : "#19202d")};
      font-size: 16px;
      font-weight: 700;
    }
  }
`;
