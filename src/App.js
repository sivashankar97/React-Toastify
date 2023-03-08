// import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export default function App(){
  const notify = () => toast("Wow so easy !",{autoClose:1000});

  return (
    <div>
      <button onClick={notify}>Notify !</button>
      <ToastContainer 
      autoClose={1000}/>
    </div>
  );
}