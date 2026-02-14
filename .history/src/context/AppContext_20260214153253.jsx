import { createContext, useEffect, useState } from "react";
import { dummyProducts } from "../data/products";
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
  const [products, setProducts] = useState(dummyProducts || []);

  // Product functions
  const addProduct = (product) => setProducts((prev) => [...prev, { ...product, id: Date.now() }]);
  const deleteProduct = (id) => setProducts((prev) => prev.filter((item) => item.id !== id));
  const updateProduct = (updatedProduct) =>
    setProducts((prev) => prev.map((item) => (item.id === updatedProduct.id ? updatedProduct : item)));

  // Fetch all courses
  const fetchAllCourses = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/course/all`);
      if (data.success) {
        setAllCourses(data.course || []); // fallback to empty array
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Fetch user data
  const fetchUserData = async () => {
    if (user?.publicMetadata?.role === "educator") setIsEducator(true);

    try {
      const token = await getToken();
      const { data } = await axios.get(`${backendUrl}/api/user/data`, {
        headers: { Authorization: `Bearer ${token}` },
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

  // Fetch enrolled courses
  const fetchUserEnrolledCourses = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get(`${backendUrl}/api/user/enrolled-courses`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (data.success) {
        setEnrolledCourse(data.enrolledCourse || []); // fallback to empty array
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Course utilities
  const calculateRating = (course) => {
    if (!course?.courseRatings?.length) return 0;
    const total = course.courseRatings.reduce((sum, r) => sum + r.rating, 0);
    return total / course.courseRatings.length;
  };

  const calculateChapterTime = (chapter) => {
    if (!chapter?.chapterContent?.length) return "0m";
    const totalMinutes = chapter.chapterContent.reduce((sum, lec) => sum + lec.lectureDuration, 0);
    return humanizeDuration(totalMinutes * 60 * 1000, { units: ["h", "m"] });
  };

  const calculateCourseDuration = (course) => {
    if (!course?.courseContent?.length) return "0m";
    const totalMinutes = course.courseContent.reduce(
      (chapterSum, chapter) =>
        chapterSum + (chapter.chapterContent?.reduce((lecSum, lec) => lecSum + lec.lectureDuration, 0) || 0),
      0
    );
    return humanizeDuration(totalMinutes * 60 * 1000, { units: ["h", "m"] });
  };

  const calculateNoOfLectures = (course) => {
    if (!course?.courseContent?.length) return 0;
    return course.courseContent.reduce((total, chapter) => total + (chapter.chapterContent?.length || 0), 0);
  };

  // Effects
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
    allCourses,
    navigate,
    calculateRating,
    isEducator,
    setIsEducator,
    calculateNoOfLectures,
    calculateCourseDuration,
    calculateChapterTime,
    enrolledCourse,
    fetchUserEnrolledCourses,
    products,
    addProduct,
    deleteProduct,
    updateProduct,
    backendUrl,
    userData,
    setUserData,
    getToken,
    fetchAllCourses,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
