import { Route, Routes } from "react-router-dom"
import FloatingShape from "./components/FloatingShape"
import SignUpPage from "./pages/SignUpPage"
import LogInPage from "./pages/LogInPage"
import EmailVerificationPage from "./pages/EmailVerificationPage"

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-blue-500 flex items-center justify-center relative overflow-hidden">
      <FloatingShape color="bg-blue-100" size="w-64 h-64" top="-5%" left="10%" delay={0} />
      <FloatingShape color="bg-blue-100" size="w-48 h-48" top="70%" left="80%" delay={5} />
      <FloatingShape color="bg-blue-100" size="w-32 h-32" top="40%" left="-10%" delay={2} />

      <Routes>
        <Route path='/' element={"Home"}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/login' element={<LogInPage/>}/>
        <Route path='/verify-email' element={<EmailVerificationPage/>}/>
      </Routes>
    </div>
  )
}

export default App