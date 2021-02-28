import { useEffect, useState } from "react";
import {
  useFonts,
  SourceSansPro_700Bold,
  SourceSansPro_400Regular,
} from "@expo-google-fonts/source-sans-pro";
import { Lato_700Bold } from "@expo-google-fonts/lato";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [fontsLoaded] = useFonts({
    SourceSansPro_700Bold,
    SourceSansPro_400Regular,
    Lato_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      setLoadingComplete(true);
    }
  }, [fontsLoaded]);

  return isLoadingComplete;
}
