import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

import { Stacked, Pie, Button, LineChart, SparkLine } from "../components";
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";
import product9 from "../data/product9.jpg";
import woman from "../data/woman.jpg";

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent
      id="time"
      fields={{ text: "Time", value: "Id" }}
      style={{ border: "none", color: currentMode === "Dark" && "white" }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>
);

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center bg-gray-100 ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center	">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$63,448.78</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: "red" }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <BsCurrencyDollar />
            </button>
            {/* <img className="object-cover h-25 w-60" src={woman} alt="" /> */}
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor="blue"
              text="Download"
              borderRadius="10px"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-40 p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-gray-400 mt-1 text-sm">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-10 flex-wrap justify-center bg-neutral-600">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
          <div className="flex justify-between ">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4 ">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadown-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-600 hover:drop-shadown-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center ">
            <div className="border-r-1  border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,087</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                  <p className="text-gray-500 mt-1">Budget</p>
                </p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">$48,087</p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>
              <div className="mt-5">
                <SparkLine
                  currentColor="blue"
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color="blue"
                />
              </div>
            </div>
          </div>
          {/* <div class="grid grid-cols-4 gap-4">
            <div className="bg-green-400 md:col-span-2 lg:col-span-1 w-96 sm:col-span-4">
              01
            </div>
            <div className="bg-green-400 md:col-span-2 lg:col-span-1 sm:col-span-4">
              09
            </div>
            <div className="bg-green-400 md:col-span-2 lg:col-span-1 sm:col-span-4">
              09
            </div>
            <div className="bg-green-400 md:col-span-2 lg:col-span-1 sm:col-span-4">
              09
            </div>
            <div className="bg-green-400 md:col-span-2 lg:col-span-1 sm:col-span-4">
              09
            </div>
            <div className="bg-green-400 md:col-span-2 lg:col-span-1 sm:col-span-4">
              09
            </div>
            <div className="bg-green-400 lg:col-span-1">09</div>
            <div className="bg-green-400 lg:col-span-1">09</div>
            <div className="bg-green-400 lg:col-span-1">01</div>
            <div className="bg-green-400 lg:col-span-1">09</div>
            <div className="bg-green-400 lg:col-span-1">09</div>
            <div className="bg-green-400 lg:col-span-1">09</div>
            <div className="bg-green-400 lg:col-span-1">09</div>
            <div className="bg-green-400">09</div>
            <div className="bg-green-400">09</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
