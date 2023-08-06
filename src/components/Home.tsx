import styled from "styled-components";
import { RootState } from "../features/store";
import { useSelector, useDispatch } from "react-redux";
import Search from "./Search";
import { setPage } from "../features/pageSlice";
import { setInfo } from "../features/moreInfo";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

const Home = (): JSX.Element => {
  //states for filter
  const [title, setTitle] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [fullTime, setFullTime] = useState<boolean>(false);

  // lightmode state
  const mode = useSelector((store: RootState) => store.lightMode.dark);
  const jobs = useSelector((store: RootState) => store.devJob.jobs);
  //all jobs
  const allJobs = useSelector((store: RootState) => store.allDevjob.allJobs);
  // pageSlice
  const currentPage = useSelector((store: RootState) => store.page.page);
  const dispatch = useDispatch();

  // load more button for to fetch more data
  const LoadMoreJob = (): void => {
    dispatch(setPage(1));
  };

  // Memoize the getJobId function with useCallback to prevent re-rendering and state reset
  const getJobId = useCallback(
    (x: number): void => {
      dispatch(setInfo(x));
    },
    [dispatch]
  );

  //to filter jobs
  function filterJobs(title: string, fullTime: boolean, location: string) {
    let filteredJobs = allJobs;

    if (title) {
      filteredJobs = filteredJobs.filter((job) =>
        job.position.toLowerCase().includes(title)
      );
    }

    if (fullTime) {
      filteredJobs = filteredJobs.filter((job) => job.contract === "Full Time");
    }

    if (location) {
      filteredJobs = filteredJobs.filter((job) =>
        job.location.toLowerCase().includes(location)
      );
    }

    return filteredJobs;
  }

  const filteredJobs = filterJobs(title, fullTime, location);

  // to increase visibleFilteredJobs when user click load more button
  const visibleJobs = 6 * currentPage;

  //Only 6 items should appear the first time.
  const visibleFilteredJobs = filteredJobs.slice(0, visibleJobs);
  return (
    <HomeContainer mode={mode}>
      <Search
        setTitle={setTitle}
        setLocation={setLocation}
        setFullTime={setFullTime}
      />
      <div className="cardWrapper">
        {(title !== ""
          ? visibleFilteredJobs
          : location !== ""
          ? visibleFilteredJobs
          : fullTime !== false
          ? visibleFilteredJobs
          : jobs
        ).map((job, index) => (
          <Link className="info" to="/info" key={index}>
            <Job
              onClick={() => {
                getJobId(job.id);
              }}
              key={index}
              bg={job.logoBackground}
              mode={mode}
            >
              <div className="company">
                <img src={job.logo} alt="company logo" />
              </div>

              <div className="titleContainer">
                <h3 className="contract">{`${job.postedAt} . ${job.contract}`}</h3>
                <h2>{job.position}</h2>
                <h3>{job.company}</h3>

                <h4>{job.location}</h4>
              </div>
            </Job>
          </Link>
        ))}
      </div>

      <button
        className="more"
        onClick={(e: any) => {
          e.preventDefault();
          LoadMoreJob();
        }}
      >
        Load More
      </button>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div<{ mode: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 0 24px 62px;
  background-color: ${(props) => (props.mode ? "#121721" : "#f4f6f8")};
  position: relative;
  gap: 50px;
  margin-top: 100px;
  position: relative;
  @media screen and (min-width: 768px) {
    padding: 0 39px 61px;
  }

  .more {
    border: none;
    border-radius: 5px;
    background: #5964e0;
    width: 141px;
    height: 48px;
    font-size: 16px;
    font-weight: 700;
    color: white;
    cursor: pointer;
  }

  .info {
    width: 100%;
    text-decoration: none;
    @media screen and (min-width: 768px) {
      width: 339px;
    }
  }

  .cardWrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 49px;
    flex-direction: column;

    @media screen and (min-width: 768px) {
      flex-wrap: wrap;
      flex-direction: row;
      row-gap: 65px;
      column-gap: 11px;
    }
    @media screen and (min-width: 768px) {
      max-width: 1110px;
      column-gap: 30px;
    }
  }
`;

const Job = styled.div<{ bg: string; mode: boolean }>`
  width: 100%;
  padding: 50px 32px 32px;
  border-radius: 6px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${(props) => (props.mode ? "#19202D" : "white")};
  text-decoration: none;

  .company {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.bg};
    left: 32px;
    top: -25px;
  }

  .titleContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 16px;

    h3 {
      font-size: 16px;
      font-weight: 400;
      color: #6e8098;
    }

    h2 {
      color: ${(props) => (props.mode ? "white" : "#19202D")};
      font-size: 19px;
      font-weight: 700;
    }

    h4 {
      margin-top: 28px;
      color: #5964e0;
      font-size: 14px;
      font-weight: 700;
    }
  }
`;
