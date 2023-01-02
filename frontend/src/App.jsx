import { useRef } from "react";
import axios from "axios";
import logo from "./assets/logo.svg";
import "./App.css";

function App() {
  const inputRef = useRef(null);

  const hSubmit = (evt) => {
    evt.preventDefault();

    const formData = new FormData();
    if (inputRef) {
      formData.append("avatar", inputRef.current.files[0]);
      axios.post("http://localhost:5000/api/avatar", formData);
      inputRef.current.value = null;
      alert("Uploaded");
    } else {
      alert("Failed to upload");
    }
  };

  return (
    <div className="App">
      <img src={logo} className="App-logo m-auto" alt="logo" />

      <form encType="multipart/form-data" onSubmit={hSubmit}>
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="file_input"
        >
          Upload file
        </label>
        <input
          className="block w-1/2 p-2 m-auto text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          type="file"
          name="monfichier"
          ref={inputRef}
        />

        <button
          type="submit"
          className="mt-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Upload
        </button>
      </form>
    </div>
  );
}

export default App;
