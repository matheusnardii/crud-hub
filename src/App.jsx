import { ToastContainer } from "react-toastify"
import { RouterMain } from "./routes/RouterMain"
import "./styles/styles.scss"
import 'react-toastify/dist/ReactToastify.css';



const App = () => {

  return (
    <>
      <RouterMain />
      <ToastContainer autoClose={ 1.5 * 1000 } theme= {"dark"} />
    </>
  )
}

export default App
