import { NextPage } from "next";
import { useEffect, useState } from "react";
import SidebarView from "../components/SidebarView";
import { Api } from "../services/Api";
import LoadingIndicator from "../components/LoadingIndicator";
import { Job } from "../types/types";
import ResumeItem from "../components/ResumeItem";
import ResumeAbout from "../components/ResumeAbout";
import { getDocs, QuerySnapshot } from "firebase/firestore";
import { queryAllJobsOrdered } from "~/services/firebase";
import { makeArrayFromSnapshot } from "~/utils/makeNewArray";

interface ResumeViewProps {
  /**
   * Fires when element has rendered
   */
  onReady(): void;
}

const Resume: NextPage<ResumeViewProps> = (onReady) => {
  const [api, setApi] = useState(undefined);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentReady, setCurrentReady] = useState(0);

  const retrieveAllJobs = async () => {
    const jobsSnapshot: QuerySnapshot = await getDocs(queryAllJobsOrdered);
    setIsLoading(false);
    const jobRecordsFromDb = makeArrayFromSnapshot(jobsSnapshot);
    setJobs(jobRecordsFromDb);
  };

  useEffect(() => {
    retrieveAllJobs();
  }, []);

  return (
    <div className="container-outer">
      <div className="container-inner row">
        <div className="content-main">
          <ResumeAbout />

          <div className="resume-experience">
            <h2>Experience</h2>

            {jobs.map((item: Job, idx: number) => {
              return (
                <ResumeItem
                  key={idx}
                  resume={item}
                  idx={idx}
                  onReady={() => {
                    setCurrentReady((prev) => prev++);
                    if (currentReady === jobs.length) {
                      onReady();
                    }
                  }}
                />
              );
            })}
          </div>
        </div>
        <SidebarView />
      </div>
    </div>
  );
};

export default Resume;
