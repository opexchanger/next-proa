import { useState, useEffect } from 'react';
import { Router } from 'next/router';

export default function useChangingRoutesLoader({ onChangeStart }) {
  const [isLoading, setLoader] = useState(true);

  useEffect(() => {
    setLoader(false);
    Router.events.on("routeChangeStart", () => {
      setLoader(true);
      onChangeStart();
    });

    Router.events.on("routeChangeComplete", () => {
      setLoader(false);
    });

    return () => {
      Router.events.off("routeChangeStart", () => {
        onChangeStart();
        setLoader(true);
      });
      Router.events.off("routeChangeComplete", () => {
        setLoader(false);
      });
    }
  }, []);

  return [isLoading, setLoader];
}

