import "./App.css";
import { Routes, Route, Outlet } from "react-router";
import IndexPage from "@/pages/index-page.tsx";
import SignInPage from "@/pages/sign-in-page.tsx";
import SignUpPage from "@/pages/sign-up-page.tsx";
import CounterPage from "@/pages/counter-page";
import TodoListPage from "@/pages/todo-list-page";
import TodoDetailPage from "@/pages/todo-detail-page";

function AuthLayout() {
  return (
    <div>
      <header>Auth Layout</header>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/counter" element={<CounterPage />} />
      <Route path="/todolist" element={<TodoListPage />} />
      <Route path="/todolist/:id" element={<TodoDetailPage />} />
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Route>
    </Routes>
  );
}

export default App;
