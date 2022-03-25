import React, { useState, useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";
import axios from "axios";
import "chart.js/auto";
import { motion } from "framer-motion";

const CountryCount = () => {
  const [emp, setEmp] = useState({});

  const data = {
    labels: Object.keys(emp),
    datasets: [
      {
        label: "Number of Employees working on different number of projects",
        data: Object.values(emp),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
      },
    ],
  };
  useEffect(() => {
    const getEmp = async () => {
      await axios
        .get("http://localhost:5000/api/countryCount")
        .then((res) => {
          setEmp(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getEmp();
  }, []);
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className='rounded-2xl p-3 shadow-gray-400 shadow-lg'
    >
      <Pie data={data} />
      <div className='text-center mt-2'> Number of Projects per Employee</div>
    </motion.div>
  );
};

export default CountryCount;
