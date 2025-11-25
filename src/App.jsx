import Sidebar from "./components/Sidebar/Sidebar"
import Main from "./components/Main/Main"
import { gemini } from "./config/gemini"
import { useEffect } from "react"


const App = () => {
  const text = "Why does a model with very high accuracy still fail in the real world?"
  
  
  useEffect(() => {
    gemini(text)
  }, []);

  return (
    <>
      <Sidebar/>
      <Main />
    </>
  )
}

export default App