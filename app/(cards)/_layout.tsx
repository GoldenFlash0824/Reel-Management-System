import { SetStateAction, createContext, useContext, useState } from "react";
import { Stack } from "expo-router";

export type RootContextType = {
  status: number | null,
  setStatus: React.Dispatch<SetStateAction<number | null>>,
  content: string,
  setContent: React.Dispatch<SetStateAction<string>>,
  selectedSelector: string,
  setSelectedSelector: React.Dispatch<SetStateAction<string>>,
  textContent: string,
  setTextContent: React.Dispatch<SetStateAction<string>>,
  selectedTextSelector: string,
  setSelectedTextSelector: React.Dispatch<SetStateAction<string>>,
  footer: string,
  setFooter: React.Dispatch<SetStateAction<string>>,
  selectedCities: any[],
  setSelectedCities: React.Dispatch<SetStateAction<any[]>>
};

export const RootContext = createContext<RootContextType | null>(null);

export default function Layout() {
  const [status, setStatus] = useState<number | null>(null);
  const [content, setContent] = useState<string>('');
  const [selectedSelector, setSelectedSelector] = useState<string>('');
  const [textContent, setTextContent] = useState<string>('Font');
  const [selectedTextSelector, setSelectedTextSelector] = useState<string>('Font');
  const [footer, setFooter] = useState<string>('effect');
  const [selectedCities, setSelectedCities] = useState<any[]>([]);

  return (
    <RootContext.Provider value={{ status, setStatus, content, setContent, selectedSelector, setSelectedSelector, footer, setFooter, textContent, setTextContent, selectedTextSelector, setSelectedTextSelector, selectedCities, setSelectedCities }}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="edit" options={{ headerShown: false }} />
        <Stack.Screen name="preview" options={{ headerShown: false }} />
        <Stack.Screen name="gallery" options={{ headerShown: false }} />
      </Stack>
    </RootContext.Provider>
  )
}

export const useContent = () => {
  const context = useContext(RootContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};