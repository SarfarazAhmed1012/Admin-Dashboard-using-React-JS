import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  StackingStepAreaSeries,
  Category,
  StackingColumnSeries,
} from "@syncfusion/ej2-react-charts";
import {
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
  stackedCustomSeries,
} from "../../data/dummy";
import { Header } from "../../components";
import { useStateContext } from "../../context/ContextProvider";
import { Tooltip } from "@syncfusion/ej2-react-popups";

const Stacked = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="bg-white dark:bg-main-dark-bg rounded-3xl m-4 md:m-10 mt-24 p-10">
      <Header category="Stacked Area Chart" title="Inflation Rate" />
      <div className=" w-full text-center">
        <ChartComponent
          id="charts"
          primaryXAxis={stackedPrimaryXAxis}
          primaryYAxis={stackedPrimaryYAxis}
          height="420px"
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
          legendSettings={{ background: "white" }}
        >
          <Inject
            services={[StackingColumnSeries, Legend, Tooltip, Category]}
          />
          <SeriesCollectionDirective>
            {stackedCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Stacked;
