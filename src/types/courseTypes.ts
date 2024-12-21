// Define the Course type
export interface Course {
  id: number;
  courseName: string;
  image: string;
  courseDetail: {
    seats: string;
    duration: string;
    certificate: string;
    price: string;
  };
}
