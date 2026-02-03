import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/student/Loading";
import { assets } from "../../assets/assets";
import humanizeDuration from "humanize-duration";


const CourseDetails = () => {
  const { id } = useParams();
  const { allCourses, calculateRating,calculateNoOfLectures, calculateCourseDuration,calculateChapterTime } = useContext(AppContext);
  const [courseData, setCourseData] = useState(null);
  const [openSections, setOpenSections] = useState({})

  useEffect(() => {
    if (allCourses.length > 0) {
      const findCourse = allCourses.find(
        (course) => String(course._id) === String(id)   // handles string/number id
      );
      setCourseData(findCourse);
    }
  }, [allCourses, id]);

  if (!courseData) return <Loading />;

  const toggleSection = (index) => {
    setOpenSections((prev) => (
      {
        ...prev,
        [index]:!prev[index],
      }
    ))
  }

  return (
    <div className="flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left">
      
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-section-height -z-10 bg-gradient-to-b from-cyan-100/70" />

      {/* LEFT COLUMN */}
      <div className="max-w-xl z-10 text-gray-500">
        <h1 className="md:text-course-details-heading-large text-course-details-heading-small font-semibold text-gray-800">
          {courseData.courseTitle}
        </h1>

        <p
          className="pt-4 md:text-base text-sm"
          dangerouslySetInnerHTML={{
            __html: courseData.courseDescription.slice(0, 200),
          }}
        />
        {/* review & rating */}
        <div className="flex items-center space-x-2 pt-3 pb-1 text-sm">
          <p>{calculateRating(courseData)}</p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (<img key={i} src={i < Math.floor(calculateRating(courseData)) ? assets.star : assets.star_blank } alt="" className="w-3.5 h-3.5" />))}

          </div>
          <p className="text-gray-500">{courseData.courseRatings.length} {courseData.courseRatings.length > 1 ? 'ratings' : 'rating' }</p>
          <p>{courseData.enrolledStudents.length}{courseData.enrolledStudents.length > 1 ? 'students' :'student' }</p>

        </div>
        <p className="text-sm">Product by <span className="text-blue-600 underline">ManGuu</span></p>
        <div className="pt-8 text-gray-800">
          <h2 className="text-xl font-semibold ">Course Structure</h2>
          <div className="pt-5">
            {courseData.courseContent.map((chapter, index) => (
              <div key={index} className="border border-gray-300 bg-white mb-2 rounded">
                <div className="flex items-center justify-between px-4 py-3 cursor-pointer select-none" onClick={()=>toggleSection(index)}>
                  <div className="flex items-center gap-2">
                    <img className={`transform transition-transform ${openSections[index] ? 'rotate-180' : ''}`}
                      src={assets.down_arrow_icon} alt="arrow icon" />
                    <p className="font-medium md:text-base text-sm">{chapter.chapterTitle }</p>
                  </div>
                  <p className="text-sm md:text-default">{chapter.chapterContent.length} lectures - {calculateChapterTime(chapter) }</p>
                </div>
                <div className={`overflow-hidden transition-all  duration-300  ${openSections[index] ? 'max-h-96' : 'max-h-0'}`}>
                  <ul className="list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300">
                    {chapter.chapterContent.map((lecture, i) => (
                      <li key={i}  className="flex items-start gap-2 py-1">
                        <img src={assets.play_icon} alt="play icon" className="w-4 h-4 mt-1" />
                        <div className="flex items-center justify-between w-full text-gray-800 text-xs md:text-default">
                          <p>{lecture.lectureTitle}</p>
                          <div className="flex gap-2">
                            {lecture.isPreviewFree && <p className="text-blue-500 cursor-pointer">Preview</p>}

                            <p>{humanizeDuration(lecture.lectureDuration * 60 * 1000, {units:['h','m']}) }</p>
                          </div>
                        </div>

                      </li>
                    ))}
                  </ul>
                  </div>
                </div>
            ))}

          </div>

        </div>
        <div className="py-20 text-sm md:text-default">
          <h3 className="text-xl font-semibold text-gray-800">Course Description</h3>
             <p
          className="pt-3"
          dangerouslySetInnerHTML={{
            __html: courseData.courseDescription
          }}
        />

        </div>
      </div>

      {/* RIGHT COLUMN (future content like price, enroll button, etc.) */}
      <div className="w-full md:w-[500px] z-10 shadow-custom-card rounded bg-white">
        <img src={courseData.courseThumbnail} alt=""
          className="w-full h-[180px] object-cover"
        />
        <div className="pt-5">
          <div className="flex items-center gap-2">
            <img className="w-3.5" src={assets.time_left_clock_icon} alt="time left clock icon" />
            <p className="text-red-500"><span className="font-medium">5 days</span>left at this price!</p>
          </div>
          <div className="flex gap-3 items-center pt-2">
            <p className="text-gray-800 md:text-4xl text-2xl font-semibold">{(courseData.coursePrice - courseData.discount * courseData.coursePrice / 100).toFixed(2)}</p>
            <p className="md:text-lg text-gray-500 line-through">{courseData.coursePrice}</p>
            <p className="md:text-lg text-gray-500">{courseData.discount}% off</p>
          </div>
          <div className="flex items-center text-sm md:text-default gap-4 pt-2 md:pt-4 text-gray-500 ">
            <div className="flex items-center gap-1">
              <img src={assets.star} alt="star icon" />
              <p>{calculateRating(courseData) }</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
