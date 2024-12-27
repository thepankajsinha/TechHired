import React from "react";
import { useFirebase } from "../context/Firebase";
import { Wallet, CalendarDays, MapPin, Mail, Factory} from "lucide-react";

function getFormattedDate() {
  const { isLoggedIn } = useFirebase();

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed, so add 1
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function calculateDaysBetweenDates(date1, date2) {
  const diffTime = Math.abs(new Date(date2) - new Date(date1)); // Difference in milliseconds
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
  return diffDays;
}

function JobCard(props) {
  const today = getFormattedDate();
  const targetDate = props.postedOn;
  const duration = calculateDaysBetweenDates(today, targetDate);

  return (
    <div className="mx-4 md:mx-20 mb-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-6 py-4 mt-5 bg-white rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-105 transition-all duration-200">
        {/* Job Details */}
        <div className="flex flex-col items-start gap-3 w-full">
          <h1 className="text-lg md:text-xl font-semibold">
            {props.title} - {props.company}
          </h1>

          <p className="flex flex-wrap text-sm md:text-base gap-2">
            <CalendarDays className="text-blue-600" /> {props.duration} &#x2022;{" "}
            <MapPin className="text-blue-600" /> {props.location} &#x2022;{" "}
            <Wallet className="text-blue-600" /> {props.salary} &#x2022;{" "}
            <Factory className="text-blue-600" />{props.jobType}
          </p>

          {props.contact && (
            <p className="flex text-sm md:text-base gap-2">
              <Mail className="text-red-600" /> {props.contact}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-2">
            {props.skills.map((skill, index) => (
              <p
                key={index}
                className="text-white bg-black py-1 px-2 rounded-md text-xs md:text-sm"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full md:w-auto mt-4 md:mt-0">
          <p className="text-sm md:text-base">
            Posted{" "}
            {duration > 30
              ? `${Math.round(duration / 30)} months`
              : `${Math.round(duration)} days`}{" "}
            ago
          </p>
          <a href={props.jobLink} target="_blank" rel="noopener noreferrer">
            <button className="text-white border bg-blue-700 px-6 py-2 rounded-md text-sm md:text-base w-full md:w-auto">
              Apply
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default JobCard;

