import { useState } from "react";
import "./App.css";
import HomeScreen from "./Screens/Home/HomeScreen";
import { ThemeContext } from "./context/ThemeContext";
import AddNewScreen from "./Screens/NewIdea/AddNewScreen";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/new",
    element: <AddNewScreen />,
  },
]);

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className="flex flex-col items-center p-4 md:p-10 w-full min-h-screen tracking-tightest"
        data-theme={theme}
      >
        <div className="max-w-5xl w-full items-center ">
          <RouterProvider router={router} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
