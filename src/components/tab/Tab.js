/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./index.css";

const Tab = ({ children, active = 0 }) => {
  const [activeTab, setACtiveTab] = useState(active);
  const [tabsData, setTabsData] = useState([]);
  useEffect(() => {
    let data = [];
    React.Children.forEach(children, (el) => {
      if (!React.isValidElement(el)) return;
      const {
        props: { tab, children },
      } = el;
      data.push({ tab, children });
    });
    setTabsData(data);
  }, [children]);
  console.log(children);
  return (
    <div className="w-full">
      <ul className="nav flex flex-wrap list-none border-b-[#dee2e6]">
        {tabsData.map(({ tab }, idx) => (
          <li className="nav-item" key={idx}>
            <a
              href="#"
              className={`block border-transparent rounded-t px-2 py-4 nav-link ${
                idx === activeTab ? "active" : ""
              }`}
              onClick={() => setACtiveTab(idx)}
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
      <div className="p-4 border-gray-600 border-t-0">
        {tabsData[activeTab] && tabsData[activeTab].children}
      </div>
    </div>
  );
};

const TabPane = ({ children }) => {
  return { children };
};
Tab.TabPane = TabPane;
export default Tab;
