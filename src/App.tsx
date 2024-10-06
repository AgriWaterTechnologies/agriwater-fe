import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./app/routes/router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "react-hot-toast"

function App() {
  const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }   
  })

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Toaster
          containerStyle={{
            fontSize: "14px",
          }}
        />
        <AppRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
