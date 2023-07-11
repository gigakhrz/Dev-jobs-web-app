import styled from "styled-components";
import { setDark } from "../features/lightModeSLice";
import { RootState } from "../features/store";
import { useDispatch, useSelector } from "react-redux";

const Search = (): JSX.Element => {
  // lightmode state
  const mode = useSelector((store: RootState) => store.lightMode.dark);

  return (
    <SearchContainer mode={mode}>
      <input type="text" placeholder="Filter by title…" />
    </SearchContainer>
  );
};

export default Search;

const SearchContainer = styled.form<{ mode: boolean }>`
  width: 100%;
  background-color: ${(props) => (props.mode ? "#19202D" : "white")};
  border-radius: 6px;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 60%;
    color: #19202d;
    font-size: 16px;
    font-weight: 400;
  }
`;
