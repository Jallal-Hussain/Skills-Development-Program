import Image from "next/image";
import { Course } from "@/types/courseTypes";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/solid";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { UserGroupIcon } from "@heroicons/react/24/solid";

interface CardProps {
  course: Course;
}

const Card: React.FC<CardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Course Image */}
      <div className="relative h-52">
        <Image
          src={course.image}
          alt={course.courseName}
          layout="fill"
          objectFit="cover"
          className="w-full"
        />
      </div>
      {/* Course Details */}
      <div className="p-4 bg-[#2A327D]">
        <h2 className="text-lg bg-white p-2 rounded-md font-bold text-center text-[#2A327D]">
          {course.courseName}
        </h2>
        <ul className="grid grid-cols-2 gap-6 px-4 mt-4 space-y-2 text-sm text-gray-200">
          <li className="flex items-center">
            <UserGroupIcon className="w-5 h-5 text-white mr-2" />
            {course.courseDetail.seats}
          </li>
          <li className="flex items-center">
            <ClockIcon className="w-5 h-5 text-white mr-2" />
            {course.courseDetail.duration}
          </li>
          <li className="flex items-center">
            <AcademicCapIcon className="w-5 h-5 text-white mr-2" />
            {course.courseDetail.certificate}
          </li>
          <li className="flex items-center">
            <CurrencyDollarIcon className="w-5 h-5 text-white mr-2" />
            {course.courseDetail.price}
          </li>
        </ul>
        {/* Buttons */}
        <div className="flex justify-between items-center mt-4 px-4">
          <button className="text-sm px-4 py-2 bg-[#2A327D] text-white rounded shadow hover:bg-[#1d255f]">
            Details
          </button>
          <button className="flex items-center text-sm px-4 py-2 bg-[#D0E23B] text-[#2A327D] rounded shadow hover:bg-[#c3d934]">
            Enroll Now
            <ChevronRightIcon className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
