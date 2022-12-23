import { AuthProvider } from "./contexts/AuthContext";
import { RoutesMain } from "./routes/routes";

function App() {
  return (
    <>
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </>
  );
}

export default App;
