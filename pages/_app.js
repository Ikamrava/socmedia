import { ThemeProvider } from "next-themes"
import '@/styles/globals.css'
import { AuthContext, AuthContextProvider } from "@/context/authContext"

export default function App({ Component, pageProps }) {
  return (
  <ThemeProvider attribute="class">
    <AuthContextProvider>
      <Component {...pageProps} />
   </AuthContextProvider>

    </ThemeProvider>
 )
  
}
