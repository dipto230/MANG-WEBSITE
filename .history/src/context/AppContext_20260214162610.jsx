import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";
import { useAuth, useUser } from "@clerk/clerk-react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();

  const { getToken } = useAuth();
  const { user } = useUser();

  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(false);
  const [enrolledCourse, setEnrolledCourse] = useState([]);
  const [userData, setUserData] = useState(null);
  const [products, setProducts] = useState([]);

  // =============================
  // Fetch All Courses
  // =============================
  const fetchAllCourses = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/course/all`);

      if (data.success) {
        // ✅ FIXED (courses not course)
        setAllCourses(data.courses || []);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // =============================
  // Fetch User Data
  // =============================
  const fetchUserData = async () => {
    try {
      if (user?.publicMetadata?.role === "educator") {
        setIsEducator(true);
      }

      const token = await getToken();

      const { data } = await axios.get(`${backendUrl}/api/user/data`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (data.success) {
        setUserData(data.user || null);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // =============================
  // Fetch Enrolled Courses
  // =============================
  const fetchUserEnrolledCourses = async () => {
    try {
      const token = await getToken();

      const { data } = await axios.get(
        `${backendUrl}/api/user/enrolled-courses`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.success) {
        // ✅ FIXED (enrolledCourses not enrolledCourse)
        setEnrolledCourse(data.enrolledCourses || []);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // =============================
  // Course Utilities
  // =============================
  const calculateRating = (course) => {
    if (!course?.courseRatings?.length) return 0;
    const total = course.courseRatings.reduce(
      (sum, r) => sum + r.rating,
      0
    );
    return total / course.courseRatings.length;
  };

  const calculateChapterTime = (chapter) => {
    if (!chapter?.chapterContent?.length) return "0m";

    const totalMinutes = chapter.chapterContent.reduce(
      (sum, lec) => sum + lec.lectureDuration,
      0
    );

    return humanizeDuration(totalMinutes * 60 * 1000, {
      units: ["h", "m"],
    });
  };

  const calculateCourseDuration = (course) => {
    if (!course?.courseContent?.length) return "0m";

    const totalMinutes = course.courseContent.reduce(
      (chapterSum, chapter) =>
        chapterSum +
        (chapter.chapterContent?.reduce(
          (lecSum, lec) => lecSum + lec.lectureDuration,
          0
        ) || 0),
      0
    );

    return humanizeDuration(totalMinutes * 60 * 1000, {
      units: ["h", "m"],
    });
  };

  const calculateNoOfLectures = (course) => {
    if (!course?.courseContent?.length) return 0;

    return course.courseContent.reduce(
      (total, chapter) =>
        total + (chapter.chapterContent?.length || 0),
      0
    );
  };

  // =============================
  // Effects
  // =============================
  useEffect(() => {
    fetchAllCourses();
  }, []);

  useEffect(() => {
    if (user) {
      fetchUserData();
      fetchUserEnrolledCourses();
    }
  }, [user]);

  const value = {
    currency,
    backendUrl,
    allCourses,
    enrolledCourse,
    userData,
    isEducator,
    navigate,
    setUserData,
    setIsEducator,
    getToken,
    fetchAllCourses,
    fetchUserEnrolledCourses,
    calculateRating,
    calculateChapterTime,
    calculateCourseDuration,
    calculateNoOfLectures,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
