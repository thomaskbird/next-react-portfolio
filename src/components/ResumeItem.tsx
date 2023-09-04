import * as moment from "moment";

import { Job } from "../types/types";
import { useEffect } from "react";

interface ResumeItemProps {
  /**
   * All of the pages data
   */
  resume: Job;
  /**
   * index of item
   */
  idx: number;
  /**
   * Defines whether this is the print view
   */
  isPrintView?: boolean;
  /**
   * Fires when element has rendered
   */
  onReady?(): void;
}

const ResumeItem = ({ resume, idx, isPrintView, onReady }: ResumeItemProps) => {
  useEffect(() => {
    onReady();
  }, []);

  const createMarkup = (content) => {
    return { __html: content };
  };

  const classList = ["ResumeItem"];

  if (idx % 2 === 0) {
    classList.push("alt");
  }

  if (onReady) {
    classList.push("hidden");
  }

  return (
    <div className={classList.join(" ")}>
      <div className="ResumeItem-img">
        <img
          src={`http://api.thomaskbird.com/img/${resume.logo}`}
          alt={resume.title}
        />
      </div>
      <div className="ResumeItem-content">
        <div className="ResumeItem-content-header">
          <div className="ResumeItem-content-header-left">
            <h3 className="ResumeItem-content-header-left-company">
              {resume.company}
              <span className="ResumeItem-content-header-left-title">
                {resume.title}
              </span>
            </h3>
          </div>
          <div className="ResumeItem-content-header-right">
            <span className="ResumeItem-content-header-right-type">
              {resume.type}
            </span>
            {moment(resume.start_at).format("MMM, YYYY")} -{" "}
            {moment(resume.end_at).isAfter()
              ? "Present"
              : moment(resume.end_at).format("MMM, YYYY")}
          </div>
        </div>
        <div
          className="ResumeItem-content-body"
          dangerouslySetInnerHTML={createMarkup(resume.body)}
        />
      </div>
    </div>
  );
};

export default ResumeItem;
