import styled from "styled-components";
import { RootState } from "../features/store";
import { useSelector, useDispatch } from "react-redux";
import Search from "./Search";
import { setPage } from "../features/pageSlice";

const Home = (): JSX.Element => {
  // lightmode state
  const mode = useSelector((store: RootState) => store.lightMode.dark);
  const jobs = useSelector((store: RootState) => store.devJob.jobs);

  const dispatch = useDispatch();

  // load more button for to fetch more data
  const LoadMoreJob = (): void => {
    dispatch(setPage(1));
  };
  return (
    <HomeContainer mode={mode}>
      <Search />
      {jobs.map((job, index) => (
        <Job key={index} bg={job.logoBackground} mode={mode}>
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
      ))}

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

const HomeContainer = styled.form<{ mode: boolean }>`
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

  .more {
    border: none;
    border-radius: 5px;
    background: #5964e0;
    width: 141px;
    height: 48px;
    font-size: 16px;
    font-weight: 700;
    color: white;
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
