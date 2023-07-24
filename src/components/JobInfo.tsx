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

      <div className="aboutJob">
        <div className="description">
          <div className="titles">
            <p>{infoForJob.postedAt + " . " + infoForJob.contract}</p>
            <h2>{infoForJob.position}</h2>
            <h5>{infoForJob.location}</h5>
          </div>
          <a href={infoForJob.website}>Apply Now</a>

          <p>{infoForJob.description}</p>
        </div>

        <div className="wrapper requirements">
          <h2>requirements</h2>
          <p>{infoForJob.requirements.content}</p>

          <div className="wrapper-list">
            {infoForJob.requirements.items.map((item, i) => {
              return (
                <div key={i} className="item">
                  <div className="dot"></div>
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="wrapper role">
          <h2>What You Will Do</h2>
          <p>{infoForJob.requirements.content}</p>

          <div className="wrapper-list">
            {infoForJob.requirements.items.map((item, i) => {
              return (
                <div key={i} className="item">
                  <span>{i}</span>
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <footer>
        {" "}
        <a href={infoForJob.website}>Apply Now</a>
      </footer>
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

  .aboutJob {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    background: ${(props) => (props.mode ? "#19202D" : "white")};
    border-radius: 6px;
    padding: 40px 24px;

    p {
      font-size: 16px;
      font-weight: 400;
      color: #6e8098;
    }

    h2 {
      font-size: 20px;
      font-weight: 700;
      color: ${(props) => (props.mode ? "white" : "#19202d")};
    }

    .description {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 32px;

      .titles {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 11px;

        h5 {
          font-size: 14px;
          font-weight: 700;
          color: #5964e0;
        }
      }

      a {
        width: 279px;
        height: 48px;
        border-radius: 5px;
        background: #5964e0;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 22px;

        text-decoration: none;
        font-size: 16px;
        font-weight: 700;
        color: white;
      }

      p {
        line-height: 26px;
      }
    }

    .wrapper {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 28px;

      p {
        line-height: 26px;
        margin-bottom: 4px;
      }

      .wrapper-list {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 8px;

        .item {
          display: flex;
          gap: 32px;
        }
      }
    }

    .requirements {
      .wrapper-list {
        .dot {
          min-width: 4px;
          height: 4px;
          background-color: #5964e0;
          border-radius: 50%;
          margin-top: 10px;
        }
      }
    }

    .role {
      .wrapper-list {
        .item {
          gap: 28px;
        }
        span {
          font-size: 16px;
          font-weight: 700;
          color: #5964e0;
          margin-top: 10px;
        }
      }
    }
  }

  footer {
    //es qmnis margvin arasachiro sivrces 500pxdan
    width: 110%;
    background: ${(props) => (props.mode ? "#19202D" : "white")};
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      width: 279px;
      height: 48px;
      border-radius: 5px;
      background: #5964e0;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 22px;

      text-decoration: none;
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
`;
