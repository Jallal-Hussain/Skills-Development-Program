import Card from "@/components/CourseCard/Card";
import { coursesData } from "@/data/coursesData";
import { Course } from "@/types/courseTypes";

function CoursesPage() {
  return (
    <main className="bg-white min-h-screen py-8">
      <header className="flex items-center justify-center mb-8">
        <div className="w-1/2 md:w1/3 py-4 px-2 rounded-lg text-center bg-[#2A327D] text-white">
          <h1 className="text-xl md:text-2xl font-bold">OUR COURSES</h1>
        </div>
      </header>
      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {coursesData.map((course: Course) => (
          <Card key={course.id} course={course} />
        ))}
      </section>
    </main>
  );
}

export default CoursesPage;
