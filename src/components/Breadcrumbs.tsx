// src/components/Breadcrumb.tsx
import Link from "next/link";
import React from "react";

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center text-sm text-gray-600">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-blue-600 text-light_blue"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-800 text-xl text-light_blue">
              {item.label}
            </span>
          )}
          {index < items.length - 1 && (
            <span className="mx-2 text-gray-400">/</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
