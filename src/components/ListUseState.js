import React, { useRef, useState } from "react";

function ListUseState() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const stograe = JSON.parse(localStorage.getItem("jobs")) ?? [];
    return stograe;
  });
  const inputRef = useRef();
  const handleSubmit = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];
      localStorage.setItem("jobs", JSON.stringify(newJobs));
      return newJobs;
    });
    setJob("");
  };
  const handleDeleteJob = (id) => {
    const data = [...jobs];
    data.splice(id, 1);
    setJobs(data);
    localStorage.setItem("jobs", JSON.stringify(data));
    inputRef.current.focus();
  };
  return (
    <>
      <input
        ref={inputRef}
        value={job}
        onChange={(e) => setJob(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((item, index) => (
          <li key={index}>
            {item}
            <span onClick={() => handleDeleteJob(index)}>x</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default React.memo(ListUseState);
