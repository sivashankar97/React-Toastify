import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export default function App() {
  const notify = () => toast("Wow so easy !", { autoClose: 3000 });

  return (
    <div>
      <button onClick={notify}>Notify !</button>
      <ToastContainer     
        position="top-left"
        autoClose={3000}
      />
    </div>
  );
}
