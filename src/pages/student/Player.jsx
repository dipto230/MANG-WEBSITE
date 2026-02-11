import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { useParams } from 'react-router-dom'
import { assets } from '../../assets/assets'
import humanizeDuration from 'humanize-duration'
import YouTube from 'react-youtube'
import Footer from '../../components/student/Footer'
import Rating from '../../components/student/Rating'

const Player = () => {
  const { enrolledCourse, calculateChapterTime } = useContext(AppContext)
  const { courseId } = useParams()

  const [courseData, setCourseData] = useState(null)
  const [openSection, setOpenSection] = useState({})
  const [playerData, setPlayerData] = useState(null)

  // Get selected course
  useEffect(() => {
    if (enrolledCourse && enrolledCourse.length > 0) {
      const course = enrolledCourse.find(
        (course) => course._id === courseId
      )
      setCourseData(course || null)
    }
  }, [enrolledCourse, courseId])

  // Toggle chapter open/close
  const toggleSection = (index) => {
    setOpenSection((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  // ✅ Loading state
  if (!courseData) {
    return <div className="p-10 text-center text-lg">Loading course...</div>
  }

  return (
    <>
    <div className="p-4 sm:p-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:px-36">
      
      {/* Left Column */}
      <div className="text-gray-800">
        <h2 className="text-xl font-semibold">Course Structure</h2>

        <div className="pt-5">
          {courseData.courseContent.map((chapter, index) => (
            <div
              key={index}
              className="border border-gray-300 bg-white mb-2 rounded"
            >
              {/* Chapter Header */}
              <div
                className="flex items-center justify-between px-4 py-3 cursor-pointer select-none"
                onClick={() => toggleSection(index)}
              >
                <div className="flex items-center gap-2">
                  <img
                    className={`transform transition-transform ${
                      openSection[index] ? 'rotate-180' : ''
                    }`}
                    src={assets.down_arrow_icon}
                    alt="arrow icon"
                  />
                  <p className="font-medium md:text-base text-sm">
                    {chapter.chapterTitle}
                  </p>
                </div>

                <p className="text-sm md:text-default">
                  {chapter.chapterContent.length} lectures -{' '}
                  {calculateChapterTime(chapter)}
                </p>
              </div>

              {/* Chapter Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openSection[index] ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <ul className="list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300">
                  {chapter.chapterContent.map((lecture, i) => (
                    <li key={i} className="flex items-start gap-2 py-1">
                      <img
                        src={assets.play_icon}
                        alt="play icon"
                        className="w-4 h-4 mt-1"
                      />

                      <div className="flex items-center justify-between w-full text-gray-800 text-xs md:text-default">
                        <p>{lecture.lectureTitle}</p>

                        <div className="flex gap-2 items-center">
                          {lecture.isPreviewFree && (
                            <p
                              onClick={() =>
                                setPlayerData({
                                  videoId: lecture.lectureUrl
                                    .split('/')
                                    .pop(),
                                })
                              }
                              className="text-blue-500 cursor-pointer"
                            >
                              Preview
                            </p>
                          )}

                          <p>
                            {humanizeDuration(
                              lecture.lectureDuration * 60 * 1000,
                              { units: ['h', 'm'] }
                            )}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          </div>
          <div className='flex items-center gap-2 py-3 mt-10'>
            <h1 className='text-xl font-bold'>Rate this Course:</h1>
            <Rating initialRating={0}/>
          </div>
      </div>

      {/* Right Column (Video Player Section) */}
      <div>
        {
          playerData ? (
            <div className='md:mt-10'>
              <YouTube videoId={playerData.lectureUrl.split('/').pop()} iframeClassName='w-full aspect-video' />
              <div className='flex justify-between items-center mt-1'>
                <p>{playerData.chapter}.{playerData.lecture}{playerData.lectureTitle}</p>
                <button className='text-blue-600'>Mark Complete</button>
              </div>
            </div>
          )
            :
            <img src={courseData ? courseData.courseThumbnail : '' } alt=''

            />
        }
     </div>
      </div>
      <Footer/>
      </>
  )
}

export default Player
