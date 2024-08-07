import "@/styles/globals.css";
import ConteudoPrincipal from "../../components/layout/conteudoPrincipal/ConteudoPrincipal";

export default function App({ Component, pageProps }) {
  return (
      <ConteudoPrincipal>
          <Component {...pageProps} />

      </ConteudoPrincipal>
  )
}
