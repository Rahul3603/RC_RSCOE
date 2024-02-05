import React from "react";
import PropTypes from "prop-types";

export default function CardStats({
  statBgColor,
  statTextColor,
  statSubtitle,
  statTitle,
  statIconName,
  statIconColor,
}) {
  return (
    <>
      <div
        className={
          " relative flex flex-col min-w-0 break-words rounded mb-6 xl:mb-0 shadow-lg " +
          statBgColor
        }
      >
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className={" uppercase font-bold text-xs " + statTextColor}>
                {statSubtitle}
              </h5>
              <span
                className={
                  " font-semibold text-xl " + statTextColor
                }
              >
                {statTitle}
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div
                className="bg-rc-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full text-lg ">
                <i className={statIconName +"  "+ statIconColor }></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

CardStats.defaultProps = {
  statBgColor: "bg-rc-red",
  statTextColor: "text-rc-white",
  statSubtitle: "ROTARACTORS",
  statTitle: "350,897",
  statIconName: "far fa-chart-bar",
  statIconColor: "bg-red-500",
};

CardStats.propTypes = {
  statBgColor: PropTypes.string,
  statTextColor: PropTypes.string,
  statSubtitle: PropTypes.string,
  statTitle: PropTypes.string,
  statIconName: PropTypes.string,
  statIconColor: PropTypes.string,
};
