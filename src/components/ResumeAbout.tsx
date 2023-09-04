import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface ResumeAboutProps {
  /**
   * Determines whether the icon should be hidden
   */
  hideIcon?: boolean;
}

const ResumeAbout = ({ hideIcon }: ResumeAboutProps) => {
  let icon: any = "";

  if (!hideIcon) {
    icon = (
      <Link href="/resume/print">
        <FontAwesomeIcon icon="print" />
      </Link>
    );
  }

  return (
    <div className="ResumeAbout">
      <h2>
        About me
        {icon}
      </h2>

      <p>
        I have a diverse skill set complemented by having worked in a wide range
        of environments, ranging from large teams to small teams and freelance
        work. This diversity has helped me understand the web development
        process from start to finish having held many roles with multiple skill
        sets ranging from client services, design, front end and backend
        programming. This has helped me create better, well rounded applications
        that are both extensible and easy to use while also being aesthetically
        pleasing.
      </p>

      <p>
        I've created sophisticated web apps to help my clients manage complex
        process flows and increase productivity by bringing simplifying multiple
        processes through automation and building a web application to handle
        all of those requirements.
      </p>

      <p>
        Specialties: front end development, ui/ux, php, angularjs, JavaScript,
        jQuery, html5, css, design, emberjs, photoshop, ionic, backbone &amp;
        laravel.
      </p>
    </div>
  );
};

export default ResumeAbout;
