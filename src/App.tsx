import { styled } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import { useEffect } from "react";
import axios from "axios";
import DevJob from "../type";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./features/store";
import { setJobs } from "./features/DevJobsSlice";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import JobInfo from "./components/JobInfo";
import { setFilter } from "./features/mobileFilterSlice";
import { setAllJobs } from "./features/allJobSlice";

//Api address
export const API_BASE_URL = `http://localhost:3001/jobs/`;
const size = 6;

function App() {
  // page state
  const currentPage = useSelector((store: RootState) => store.page.page); // Rename to currentPage

  const dispatch = useDispatch();

  // lightmode state
  const mode = useSelector((store: RootState) => store.lightMode.dark);

  // mobile filter open/close state
  const mobileFilter = useSelector(
    (store: RootState) => store.setFilter.filter
  );

  // fetching jobs from api
  const fetchJobs = async (): Promise<void> => {
    const url = `${API_BASE_URL}${size}/${currentPage}`;

    try {
      const response = await axios.get<DevJob[]>(url);
      dispatch(setJobs(response.data));
    } catch (error) {
      // Handle error
    }

    //to fetch all Devjob array
    try {
      const response = await axios.get<DevJob[]>(
        `http://localhost:3001/getAll`
      );
      dispatch(setAllJobs(response.data));
    } catch (error) {
      console.log("can't fetch data");
    }
  };

  // when changing page
  useEffect(() => {
    fetchJobs();
  }, [currentPage]);

  return (
    <Router>
      <Main mode={mode}>
        <GlobalStyles />
        <BlackDiv filter={mobileFilter} onClick={() => dispatch(setFilter())} />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<JobInfo />} />
        </Routes>
      </Main>
    </Router>
  );
}

export default App;
const Main = styled.div<{ mode: boolean }>`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => (props.mode ? "#121721" : "#f4f6f8")};
  position: relative;
`;

//for when mobile filter is open to have opacity

const BlackDiv = styled.div<{ filter: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  background: black;
  opacity: 0.5;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  display: ${(props) => (props.filter ? "block" : "none")};
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
