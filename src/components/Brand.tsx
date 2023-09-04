import * as React from 'react';
import Link from 'next/link'


interface BrandProps {
  linked?: boolean;
}

const Brand = ({ linked = true }: BrandProps) => {
  return linked ? (
    <Link href="/" className="brand-wrap">
      <span className="brand">
        <span className="brand-name">ThomasBird</span>
        <span className="brand-title">FullStackDeveloper</span>
      </span>
    </Link>
  ) : (
    <span className="brand">
      <span className="brand-name">ThomasBird</span>
      <span className="brand-title">FullStackDeveloper</span>
    </span>
  );
}

export default Brand;
