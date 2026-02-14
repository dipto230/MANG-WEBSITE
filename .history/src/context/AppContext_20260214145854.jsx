import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";
import { dummyProducts } from "../data/products";
import { useAuth, useUser } from "@clerk/clerk-react"
import axios from "axios";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const currency = import.meta.env.VITE_CURRENCY
  const navigate = useNavigate()
  const [allCourses, setAllCourses] = useState([])
  const [isEducator, setIsEducator] = useState(true)
  const [enrolledCourse, setEnrolledCourse] = useState([])

  const { getToken } = useAuth()
  const {user} = useUser()



  const [products, setProducts] = useState(dummyProducts || []);

  // ADD PRODUCT
const addProduct = (product) => {
  setProducts((prev) => [
    ...prev,
    { ...product, id: Date.now() }
  ]);
};

// DELETE PRODUCT
const deleteProduct = (id) => {
  setProducts((prev) =>
    prev.filter((item) => item.id !== id)
  );
};

// UPDATE PRODUCT
const updateProduct = (updatedProduct) => {
  setProducts((prev) =>
    prev.map((item) =>
      item.id === updatedProduct.id
        ? updatedProduct
        : item
    )
  );
};


  
  //fetch all course
  const fetchAllCourses = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/course/all')
      
    } catch (error) {
      
    }
    
  }
  //function to calculate average rating of course 
  const calculateRating = (course) => {
    if (course.courseRatings.length === 0) {
      return 0;
    }
    let totalRating = 0;
    course.courseRatings.forEach(rating => {
      totalRating += rating.rating
    })
    return totalRating / course.courseRatings.length
  }
  //Function to calculate course chapter time
  const calculateChapterTime = (chapter) => {
    let time = 0
    chapter.chapterContent.map((lecture) => time += lecture.lectureDuration)
    return humanizeDuration(time * 60 * 1000, {units:["h" ,"m"]})
    
  }
  //function to calculate course duration
  const calculateCourseDuration = (course) => {
    let time = 0
    course.courseContent.map((chapter) => chapter.chapterContent.map(
      (lecture) => time += lecture.lectureDuration
    ))
    return humanizeDuration(time * 60 * 1000, {units:["h" ,"m"]})
  }
  // Function calculate to No of Lectures in the course
const calculateNoOfLectures = (course) => {
  let totalLectures = 0;

  course.courseContent.forEach(chapter => {
    if (Array.isArray(chapter.chapterContent)) {
      totalLectures += chapter.chapterContent.length;
    }
  });

  return totalLectures;
  };
  const fetchUserEnrolledCourses = async () => {
    setEnrolledCourse(dummyCourses)
      }

  useEffect(() => {
    fetchAllCourses()
    fetchUserEnrolledCourses()
  }, [])
  
  const logToken = async () => {
    console.log(await getToken())
  }

  useEffect(() => {
    if (user) {
      logToken()
    }
  },[user])
  const value = {
    currency,allCourses,navigate, calculateRating, isEducator, setIsEducator, calculateNoOfLectures, calculateCourseDuration, calculateChapterTime, enrolledCourse, fetchUserEnrolledCourses,products,addProduct,deleteProduct,updateProduct
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
