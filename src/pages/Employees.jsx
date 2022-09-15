import React from "react";
import {
  GridComponent,
  Inject,
  ColumnsDirective,
  ColumnDirective,
  Search,
  Page,
  Toolbar,
} from "@syncfusion/ej2-react-grids";

import { employeesData, employeesGrid } from "../data/dummy";
import { Header } from "../components";
import { useStateContext } from "../context/ContextProvider";

const Employees = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:text-gray-200 dark:bg-secondary-dark-bg">
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={employeesData}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        toolbar={["Search"]}
      >
        <ColumnsDirective
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
        >
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Search, Page, Toolbar]}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
        />
      </GridComponent>
    </div>
  );
};
export default Employees;
