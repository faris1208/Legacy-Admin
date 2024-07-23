"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

const LevelContext = createContext();

export const LevelProvider = ({ children }) => {
  const [filterType, setFilterType] = useState("exercise");
  const [editItem, setEditItem] = useState(null);
  const [activity, setActivity] = useState(false);
  const [token, setToken] = useState("");

  const [active, setActive] = useState(false);
  const [isActive, setIsActive] = useState(0);
  const [elite, setElite] = useState()
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(elite)
  }, [elite])

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
      await axios
        .post("https://legacy-backend-zmmd.onrender.com/admin/login", params)
        .then((response) => {
          if (response.data.token !== "") {
            localStorage.setItem("userToken", response.data.token);
            // document.cookie = `userToken=${response.data.token}; path=/;`;
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
      setIsLoading(true); // Set isLoading state to true before making the request
  
      const token = getTokenFromLocalStorage();
      const params = {
        day: day,
        trainingSection: type,
        skillLevel: level
      };
  
      const response = await axios.get("https://legacy-backend-zmmd.onrender.com/training/allExercise", {
        params: params,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      setElite(response.data[0].trainingDescription);
    } catch (error) {
      console.error("Error fetching exercises:", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function createExercises(params) {
    const token = getTokenFromLocalStorage()
    try {
      await axios.post("https://legacy-backend-zmmd.onrender.com/training/create", 
        params,
        {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(params, "detailcontext")
    } catch (error) {
      console.error(error, "Error fetching exercises");
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
    setAdmin((prevAdmin) => {
      const newState = { ...prevAdmin };

      const updatedActivities = newState[level][activityType][day].filter(
        (item) => item.id !== id
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
        isLoading
      }}
    >
      {children}
    </LevelContext.Provider>
  );
};

export default LevelContext;
