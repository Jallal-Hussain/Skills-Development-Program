'use client'

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useRouter } from "next/navigation";

const EnrollButton = () => {
  const router = useRouter();
  const handleEnrollButton = () => {
    router.push("/course-enrollement-form");
  };
  return (
    <div>
      <button
        className="flex items-center text-sm px-4 py-2 bg-[#D0E23B] text-[#2A327D] rounded shadow hover:bg-[#c3d934]"
        onClick={handleEnrollButton}
      >
        Enroll Now
        <ChevronRightIcon className="w-4 h-4 ml-2" />
      </button>
    </div>
  );
};

export default EnrollButton;
