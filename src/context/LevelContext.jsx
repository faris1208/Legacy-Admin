"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import http from "@/utils/axiosInstance";

const LevelContext = createContext();

export const LevelProvider = ({ children }) => {
  const [filterType, setFilterType] = useState("");
  const [editItem, setEditItem] = useState(null);
  const [activity, setActivity] = useState(false);
  const [token, setToken] = useState("");

  const [assist, setAssist] = useState(false);
  const [active, setActive] = useState(false);
  const [isActive, setIsActive] = useState(0);
  const [elite, setElite] = useState()
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if(filterType != ''){
      localStorage.setItem("filterType", filterType)
    }
    
  }, [filterType])
  useEffect(() => {
    let cat
    cat = localStorage.getItem("filterType")
    if(filterType == '' && cat != ''){
      setFilterType(cat)
    }else if(filterType != '' && cat == '') {
      setFilterType('exercise')
    }
  }, [filterType])

  const toggleMenu = () => {
    setActive(!active);
    activeLevel(6)
  };

  const activeLevel = (key) =>{
    setIsActive(key)
  }

  const router = useRouter();

  const generateMonthlyStructure = () => {
    const days = {};
    for (let i = 1; i <= 30; i++) {
      days[i] = [];
    }
    return days;
  };


  const [admin, setAdmin] = useState({
    beginners: {
      exercise: generateMonthlyStructure(),
      drills: generateMonthlyStructure(),
      moves: generateMonthlyStructure(),
    },
    intermediate: {
      exercise: generateMonthlyStructure(),
      drills: generateMonthlyStructure(),
      moves: generateMonthlyStructure(),
    },
    expert: {
      exercise: generateMonthlyStructure(),
      drills: generateMonthlyStructure(),
      moves: generateMonthlyStructure(),
    },
    elite: {
      exercise: generateMonthlyStructure(),
      drills: generateMonthlyStructure(),
      moves: generateMonthlyStructure(),
    },
  });

  async function loginAdmin(email, password) {
    const params = {
      email: email,
      password: password,
    };
    setIsLoading(true)
    try {
      await http
        .post("/admin/login", params)
        .then((response) => {
          if (response.data.token !== "") {
            localStorage.setItem("userToken", response.data.token);
            router.push("/dashboard");
            setIsLoading(false)
          }
          
        });
    } catch (error) {
      console.error(error, "this is the error");
    }
  }

  function getTokenFromLocalStorage() {
    return localStorage.getItem("userToken");
  }

  async function fetchAllExercises(day, type, level) {
    try {
      setIsLoading(true);
      const params = {
        day: day,
        trainingSection: type,
        skillLevel: level
      };
  
      const response = await http.get("/training/allExercise", {
        params: params,
      });
      if(response.data == ""){
        setElite([])
      } else {
        setElite(response.data[0].trainingDescription);

      }
    } catch (error) {
      console.error("Error fetching exercises:", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function createExercises(params) {
    try {
      setIsLoading(true);
      await http.post("/training/create", 
        params)
    } catch (error) {
      console.error(error, "Error fetching exercises");
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteActivity(id) {
    try {
      setIsLoading(true);
      const response = await http.delete(`/training/${id}`);
      
      if (response.status === 200) {
      } else {
        console.error('Failed to delete the activity.');
      }
    } catch (error) {
      console.error(`Error deleting activity: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  }

  async function editActivity(id, item){
    try {
      setIsLoading(true);
      await http.patch(`training/description/${id}`, item)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false);
    }
  }

  const addDayItem = (level, activityType, day, newActivity) => {
    setAdmin((prevAdmin) => {
      const newState = { ...prevAdmin };

      newState[level] = {
        ...newState[level],
        [activityType]: {
          ...newState[level][activityType],
          [day]: [...newState[level][activityType][day], newActivity],
        },
      };
      return newState;
    });
  };

  const updateDayItem = (level, activityType, day, updatedItem) => {
    setAdmin((prevAdmin) => {
      const newState = { ...prevAdmin };

      const updatedActivities = newState[level][activityType][day].map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      );

      newState[level] = {
        ...newState[level],
        [activityType]: {
          ...newState[level][activityType],
          [day]: updatedActivities,
        },
      };

      return newState;
    });
    setEditItem(null);
    setActivity(false);
  };

  const deleteDayItem = (level, activityType, day, id) => {
    // setAdmin((prevAdmin) => {
    //   const newState = { ...prevAdmin };

    //   const updatedActivities = newState[level][activityType][day].filter(
    //     (item) => item.id !== id
    //   );

    //   newState[level] = {
    //     ...newState[level],
    //     [activityType]: {
    //       ...newState[level][activityType],
    //       [day]: updatedActivities,
    //     },
    //   };

    //   return newState;
    // });
    // setEditItem(null);
    // setActivity(false);
  };

  const logout =() => {
    localStorage.removeItem("userToken");
    router.push("/");
  }

  return (
    <LevelContext.Provider
      value={{
        admin,
        setAdmin,
        filterType,
        setFilterType,
        deleteDayItem,
        updateDayItem,
        setEditItem,
        editItem,
        activity,
        setActivity,
        addDayItem,
        loginAdmin,
        active,
        toggleMenu,
        isActive,
        activeLevel,
        fetchAllExercises,
        elite,
        logout,
        getTokenFromLocalStorage,
        token,
        createExercises,
        fetchAllExercises,
        isLoading,
        deleteActivity,
        editActivity
      }}
    >
      {children}
    </LevelContext.Provider>
  );
};

export default LevelContext;
