import { useState, useEffect } from "react";


const useReadyEffect = (callback, dependencies = []) => {

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {

    if (!callback) {
      console.error("useReadyEffect: callback is required");
      return;
    }

    let isMounted = true;

    async function executeCallback() {
      await callback();
      if (isMounted) setIsReady(true);
    }

    executeCallback();

    return () => {
      isMounted = false;
      setIsReady(false);
    }
    
  }, [callback, ...dependencies]);

  return isReady;
}


export default useReadyEffect;