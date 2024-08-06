/*import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
import styles from "../../src/styles/ConteudoPrincipal.module.css"
import { useState } from "react";

const ConteudoPrincipal = ({children}) => {
    const [estado,setEstado]=useState('desconecatado')
    return (
     <>
        <NavBar/>
        <div className={`${styles.conteudoPrincipal} ${styles[estado]} `}>
            {children}
        </div>
        <Footer/>
     </>   
    );
}

export default ConteudoPrincipal;*/
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
import styles from "../../../src/styles/ConteudoPrincipal.module.css";
import { useState } from "react";

const ConteudoPrincipal = ({ children }) => {
                                        //'desconectado'||'conectado'
    const [estado, setEstado] = useState('desconectado');

    return (
        <>
            <NavBar statusNav={estado} />
            <div className={`${styles[estado]}`}>

                {children}
            </div>
            <Footer statusFot={estado}/>
        </>
    );
}

export default ConteudoPrincipal;

