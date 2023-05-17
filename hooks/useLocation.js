import { useEffect, useState } from 'react';
import Geolocation from 'react-native-geolocation-service';

const useLocation = () => {
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    Geolocation.requestAuthorization('whenInUse').then((granted) => {
      if (granted) {
        Geolocation.getCurrentPosition(
          (position) => {
            setLocation(position.coords);
          },
          (err) => {
            setError(err);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      }
    });
  }, []);

  return { location, error };
};

export default useLocation