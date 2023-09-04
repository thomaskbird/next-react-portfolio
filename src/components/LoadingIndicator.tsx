import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

interface LoadingIndicatorProps {
  /**
   * if true the loading indicator should display
   */
  isLoading: boolean;
}

const LoadingIndicator = ({ isLoading }: LoadingIndicatorProps) => {
  const [loadingDecimalDisplay, setLoadingDecimalDisplay] = useState(0);
  const [loadingIntervalRunner, setLoadingIntervalRunner] = useState(undefined);

  const intervalRunner = () => {
    setLoadingDecimalDisplay(
      loadingDecimalDisplay < 3 ? loadingDecimalDisplay + 1 : 0
    );
  };

  useEffect(() => {
    const loadingIntervalRunner = setInterval(intervalRunner.bind(this), 1000);
    setLoadingIntervalRunner(loadingIntervalRunner);

    return () => clearInterval(loadingIntervalRunner);
  }, []);

  const loadingDecimals = [".", "..", "..."];

  return (
    <div className="loading">
      {isLoading && (
        <div className={"loading-holder"}>
          <h2>Loading{loadingDecimals[loadingDecimalDisplay]}</h2>
          <i className="fa fa-spin">
            <FontAwesomeIcon icon={"circle-notch"} />
          </i>
        </div>
      )}
    </div>
  );
};

export default LoadingIndicator;
