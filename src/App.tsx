import "./styles/global.css";
import "./styles/theme.css";
import TaskContextProvider from "./contexts/taskContext/TaskContextProvider";
import PageHome from "./pages/pageHome/PageHome";



export default function App() {

  return (
    <TaskContextProvider>
      <PageHome />
    </TaskContextProvider>
  );
}
