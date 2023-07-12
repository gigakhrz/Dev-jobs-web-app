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

//Api adress
export const API_BASE_URL = `http://localhost:3001/jobs/6/`;

function App() {
  //page state
  const page = useSelector((store: RootState) => store.page.page);

  //filter state
  const filters = useSelector((store: RootState) => store.devJob.filters);

  const dispatch = useDispatch();

  //fetching jobs from api
  const fetchJobs = async (): Promise<void> => {
    try {
      const response = await axios.get<DevJob[]>(`${API_BASE_URL}${page}`);
      dispatch(setJobs(response.data));
    } catch (error) {}
  };

  const jobs = useSelector((store: RootState) => store.devJob.jobs);

  //apply filters

  const applyFilters = (): DevJob[] => {
    const { title, location, fullTime } = filters;

    let filteredJob = jobs;

    if (title) {
      filteredJob = filteredJob.filter((job) => {
        job.position.toLowerCase().includes(title.toLowerCase());
      });
    }

    if (location) {
      filteredJob = filteredJob.filter((job) => {
        job.location.toLowerCase().includes(location.toLowerCase());
      });
    }

    if (fullTime) {
      filteredJob = filteredJob.filter((job) => job.contract === "Full Time");
    }

    return filteredJob;
  };

  // when changing filter
  useEffect(() => {
    const filteredJobs = applyFilters();
    dispatch(setJobs(filteredJobs));
  }, [filters]);

  //when changing page
  useEffect(() => {
    fetchJobs();
  }, [page]);

  return (
    <Router>
      <Main>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Main>
    </Router>
  );
}

export default App;

const Main = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f4f6f8;
`;
