import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

interface WidgetViewProps {
  /**
   * Widget title
   */
  title: string;
  /**
   * open
   */
  isOpenProp?: boolean;

  children: any;
}

const WidgetView = ({ title, isOpenProp, children }: WidgetViewProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpenProp) {
      setIsOpen(true);
    }
  }, []);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className="widget">
      <div className="widget-title" onClick={() => toggleOpen()}>
        {title}:
        <FontAwesomeIcon
          className="widget-title-icon"
          icon={isOpen ? "chevron-up" : "chevron-down"}
        />
      </div>
      <div className={isOpen ? "widget-body open" : "widget-body"}>
        {children}
      </div>
    </div>
  );
};

export default WidgetView;
