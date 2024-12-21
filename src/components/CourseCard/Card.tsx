import Image from "next/image";
import { Course } from "@/types/courseTypes";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/24/outline";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import CourseDetailsButton from "@/components/CourseCard/CourseDetailsButton";
import EnrollButton from "@/components/CourseCard/EnrollButton";

interface CardProps {
  course: Course;
}

const Card: React.FC<CardProps> = ({ course }) => {
  return (
    <div className="bg-[#2A327D] rounded-lg shadow-lg overflow-hidden">
      {/* Course Image */}
      <div className="relative h-52 group mb-4">
        <Image
          src={course.image}
          alt={course.courseName}
          layout="fill"
          objectFit="cover"
          className="h-full transition duration-300 group-hover:scale-110"
        />
      </div>
      {/* Course Details */}
      <div className="p-4 ">
        <h2 className="text-lg bg-white p-2 rounded-md font-bold text-center text-[#2A327D]">
          {course.courseName}
        </h2>
        <div className="flex justify-center items-center border-b">
          <ul className="grid grid-cols-2 gap-4 px-2 mt-4 text-sm text-gray-200">
            <li className="flex items-center p-2">
              <span className="bg-white p-1 rounded-full mr-2">
                <UserGroupIcon className="w-5 h-5 text-[#2A327D] " />
              </span>
              {course.courseDetail.seats}
            </li>
            <li className="flex items-center p-2">
              <span className="bg-white p-1 rounded-full mr-2">
                <ClockIcon className="w-5 h-5 text-[#2A327D] " />
              </span>
              {course.courseDetail.duration}
            </li>
            <li className="flex items-center p-2">
              <span className="bg-white p-1 rounded-full mr-2">
                <AcademicCapIcon className="w-5 h-5 text-[#2A327D] " />
              </span>
              {course.courseDetail.certificate}
            </li>
            <li className="flex items-center p-2">
              <span className="bg-white p-1 rounded-full mr-2">
                <CurrencyDollarIcon className="w-5 h-5 text-[#2A327D] " />
              </span>
              {course.courseDetail.price}
            </li>
          </ul>
        </div>
        {/* Buttons */}
        <div className="flex justify-between items-center mt-4 px-4">
          <CourseDetailsButton />
          <EnrollButton />
        </div>
      </div>
    </div>
  );
};

export default Card;
