import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { RootState } from "../features/store";

const JobInfo = (): JSX.Element => {
  const jobId = useSelector((store: RootState) => store.moreInfo.jobId);
  const jobs = useSelector((store: RootState) => store.devJob.jobs);
  const job = jobs.filter((job) => job.id === jobId);

  console.log(jobId);
  return <></>;
};

export default JobInfo;
