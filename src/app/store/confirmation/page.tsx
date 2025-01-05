'use client';
// import React, { useState } from 'react';

// const Confirmation = () => {
//     const [isBlocking, setIsBlocking] = useState(false);
    
//     return (
//         <div>
//             <h3>Order Confirmation</h3>
//         </div>
//     );
// };

// export default Confirmation;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PreventBackButton = () => {
  const [isBlocking, setIsBlocking] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleBeforeUnload = (event: { returnValue: string; }) => {
      if (isBlocking) {
        const message = "Are you sure you want to leave this page?";
        event.returnValue = message; // Standard for modern browsers
        return message; // For older browsers
      }
    };

    // Add event listener to block page unload (back button)
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup event listener when the component is unmounted
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isBlocking]);

  const handleLeavePage = () => {
    const confirmation = window.confirm("Are you sure you want to leave this page?");
    if (confirmation) {
      setIsBlocking(false);
      navigate('/somewhere-else'); // Navigate to another page after confirmation
    }
  };

  return (
    <div>
      <button onClick={() => setIsBlocking(true)}>Start blocking navigation</button>
      <button onClick={handleLeavePage}>Leave Page</button>
    </div>
  );
};

export default PreventBackButton;

