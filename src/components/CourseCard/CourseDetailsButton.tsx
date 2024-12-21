'use client'

import React from "react";
import { useRouter } from "next/navigation";

const CourseDetailsButton = () => {
  const router = useRouter();
  const handleCourseDetails = () => {
    router.push("/course-details");
  };
  return (
    <div>
      <button
        className="text-sm px-4 py-2 text-[#2A327D] bg-white rounded shadow hover:bg-slate-100"
        onClick={handleCourseDetails}
      >
        Details
      </button>
    </div>
  );
};

export default CourseDetailsButton;
