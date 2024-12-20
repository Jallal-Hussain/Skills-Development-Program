" use client"
import Link from "next/link";

function CoursesCard() {
  return (
    <div className="courses-card">
      <div className="courses-card__image">
        {/* <Image src="" alt="image" /> */}
      </div>
      <div className="courses-card__content">
        <h3 className="courses-card__title">Course Title</h3>
        <p className="courses-card__description">Course Description</p>
        <Link href="/courses">Details</Link>
      </div>
    </div>
  );
}

export default CoursesCard;
