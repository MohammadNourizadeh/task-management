import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Admin from "./layOut/admin/Admin"
import CheckedTaskPage from "./pages/checkedTaskpage/CheckedTaskPage"
import ImportantTaskPage from "./pages/importantTaskPage/ImportantTaskPage"
import MyDayPage from "./pages/myDayPage/MyDayPage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={'/admin/my-day'} />} />
        <Route path="/admin" element={<Admin />} >
          <Route path="/admin/my-day" element={<MyDayPage />} />
          <Route path="/admin/important" element={<ImportantTaskPage />} />
          <Route path="/admin/checked" element={<CheckedTaskPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
