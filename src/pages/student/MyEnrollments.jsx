import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const MyEnrollments = () => {
  const { enrolledCourse, calculateCourseDuration } = useContext(AppContext)

  if (!enrolledCourse) {
    return <p className="md:px-36 px-8 pt-10">Loading enrollments...</p>
  }

  return (
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

        <tbody>
          {enrolledCourse.map((course, index) => (
            <tr key={index} className="border-b">
              
              <td className="px-4 py-3">
                <div className="flex items-center gap-4">
                  <img
                    src={course.courseThumbnail}
                    alt=""
                    className="w-14 sm:w-24 md:w-28 rounded"
                  />
                  <p className="font-medium">{course.courseTitle}</p>
                </div>
              </td>

              <td className="px-4 py-3 text-gray-600">
                {calculateCourseDuration(course)}
              </td>

              <td className="px-4 py-3 text-gray-600">
                4 / 10 <span className="text-sm">Lectures</span>
              </td>

              <td className="px-4 py-3">
                <span className="px-3 py-1 text-sm rounded bg-blue-100 text-blue-600">
                  Ongoing
                </span>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MyEnrollments
