import React, { use, useState } from 'react';
import AllIssues from './AllIssues';

const MainLayout = ({ dataPromise }) => {
  const allData = use(dataPromise);
  const [completedIssues, setCompletedIssues] = useState([]);

  const handleAddToStack = (issue) => {
    if (!completedIssues.some((item) => item.id === issue.id)) {
      setCompletedIssues((prev) => [...prev, issue]);
    }
  };

  const handleRemoveItem = (id) => {
    setCompletedIssues((prev) => prev.filter((item) => item.id !== id));
  };

  const handleRemoveAll = () => {
    setCompletedIssues([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center w-full">
      <AllIssues 
        completedIssues={completedIssues} 
        allIssues={allData}
        onAddStack={handleAddToStack}
        onRemoveItem={handleRemoveItem}
        onRemoveAll={handleRemoveAll}
      />
    </div>
  );
};

export default MainLayout;