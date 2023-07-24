import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { RootState } from "../features/store";

const JobInfo = (): JSX.Element => {
  const jobId = useSelector((store: RootState) => store.moreInfo.jobId);
  const jobs = useSelector((store: RootState) => store.devJob.jobs);
  const job = jobs.filter((job) => job.id === jobId);
  const mode = useSelector((store: RootState) => store.lightMode.dark);

  //apply job info
  const infoForJob = job[0];

  return (
    <InfoContainer mode={mode} bg={infoForJob.logoBackground}>
      <div className="company">
        <div className="logo">
          <img src={infoForJob.logo} alt="" />
        </div>

        <div className="textCont">
          <h3>{infoForJob.company}</h3>
          <h4>{infoForJob.company + ".com"}</h4>
        </div>

        <a href={infoForJob.website}>
          <p>Company site</p>
        </a>
      </div>
    </InfoContainer>
  );
};

export default JobInfo;

const InfoContainer = styled.div<{ mode: boolean; bg: string }>`
  margin-top: -15px;
  width: 100%;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;

  .company {
    width: 100%;
    padding: 50px 0 32px;
    border-radius: 6px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: ${(props) => (props.mode ? "#19202D" : "white")};
    text-decoration: none;
    gap: 27px;

    .logo {
      position: absolute;
      width: 50px;
      height: 50px;
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${(props) => props.bg};
      left: 42%;
      top: -25px;
    }

    .textCont {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 13px;

      h3 {
        color: ${(props) => (props.mode ? "white" : "#19202d")};
        font-size: 20px;
        font-weight: 700;
      }

      h4 {
        color: #6e8098;
        font-size: 16px;
        font-weight: 400;
      }
    }

    a {
      width: 147px;
      height: 48px;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      background-color: rgba(89, 100, 224, 0.1);

      p {
        color: #5964e0;
        text-align: center;
        font-size: 16px;
        font-weight: 700;
      }
    }
  }
`;
