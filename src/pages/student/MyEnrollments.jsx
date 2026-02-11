import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import {Line} from 'rc-progress'
import Footer from '../../components/student/Footer'
const MyEnrollments = () => {
  const { enrolledCourse, calculateCourseDuration, navigate } = useContext(AppContext)

  const [progressArray, setProgressArray] = useState([
    { lectureCompleted: 2, totalLectures: 4 },
    { lectureCompleted: 1, totalLectures: 5 },
    { lectureCompleted: 3, totalLectures: 6 },
    { lectureCompleted: 4, totalLectures: 4 },
    { lectureCompleted: 0, totalLectures: 3 },
    { lectureCompleted: 5, totalLectures: 7 },
    { lectureCompleted: 6, totalLectures: 8 },
    { lectureCompleted: 2, totalLectures: 6 },
    { lectureCompleted: 4, totalLectures: 10 },
    { lectureCompleted: 3, totalLectures: 5 },
    { lectureCompleted: 7, totalLectures: 7 },
     {lectureCompleted:1, totalLectures:4}
              
    
  ])

  if (!enrolledCourse) {
    return <p className="md:px-36 px-8 pt-10">Loading enrollments...</p>
  }

  return (
    <>
    <div className='md:px-36 px-8 pt-10'>
      <h1 className='text-2xl font-semibold'>My Enrollments</h1>

      <table className='md:table-auto table-fixed w-full overflow-hidden border mt-10'>
        <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left max-sm:hidden'>
          <tr>
            <th className='px-4 py-3 font-semibold'>Course</th>
            <th className='px-4 py-3 font-semibold'>Duration</th>
            <th className='px-4 py-3 font-semibold'>Completed</th>
            <th className='px-4 py-3 font-semibold'>Status</th>
          </tr>
        </thead>

        <tbody className='text-gray-700'>
          {enrolledCourse.map((course, index) => (
            <tr key={index} className="border-b border-gray-500/20">
              
              <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3">
                <div className="flex items-center gap-4">
                  <img
                    src={course.courseThumbnail}
                    alt=""
                    className="w-14 sm:w-24 md:w-28 rounded"
                  />
                  <p className="font-medium">{course.courseTitle}</p>
                  <Line strokeWidth={2} percent={progressArray[index] ? (progressArray[index].lectureCompleted * 100)/ progressArray[index].totalLectures : 0} className='bg-gray-300 rounded-full'/>
                </div>
              </td>

              <td className="px-4 py-3 text-gray-600">
                {calculateCourseDuration(course)}
              </td>

              <td className="px-4 py-3 text-gray-600">
                {progressArray[index] &&
  `${progressArray[index].lectureCompleted} / ${progressArray[index].totalLectures}`
}
 <span className="text-sm">Lectures</span> </td>

              <td className="px-4 py-3">
                <button
                  onClick={()=>navigate('/player/' + course._id)}
                  className="px-3 py-1 text-sm rounded bg-blue-100 text-blue-600">
                  {progressArray[index] && progressArray[index].lectureCompleted / progressArray[index].totalLectures == 1 ? 'Completed' :'On Going'}
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <Footer/>
      </>
  )
}

export default MyEnrollments
