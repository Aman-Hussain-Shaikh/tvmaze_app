// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowList from "../src/Components/ShowList";
import ShowDetails from "../src/Components/ShowDetails";
import BookingForm from "../src/Components/BookingForm";
import "./App.css";
import SuccessPage from "../src/Components/SuccessPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowList />} />
        <Route path="/show/:id" element={<ShowDetails />} />
        <Route path="/booking/:id" element={<BookingForm />} />

        <Route path="/booking/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
