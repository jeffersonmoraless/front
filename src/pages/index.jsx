
import Link from "next/link";
import Input from "../../components/input/Input";
import PaginaDesconectada from "../../components/layout/layoutPaginaDesconectada/PaginaDesconectada";
import styles from "../styles/Home.module.css"
import Axios  from "axios";
import Button from "../../components/buttons/Button";
import Cookies from 'js-cookie';

export default function Home() {
  
  const login = async (e)=>{
    e.preventDefault()
    const dados = {};
    if(e.target.elements.email.value){
        dados.email = e.target.elements.email.value;
    }else{
        return alert("email obrigatorio");
    }
    if(e.target.elements.password.value){
        dados.senha = e.target.elements.password.value; 
    }else{
        return alert("senha obrigatorio");
    } 
    try {
        const {data} = await Axios.post('http://localhost:5008/funcionario/login',dados) 
       /*setTokenUser(data, navigate)*/
        console.log(data)
        Cookies.set('token', 'fake-token', { expires: 1 }); // Expira em 1 dia
        router.push('/prescricao/listaPrescricao');
    } catch (error) {
      console.log(error.response.data)
    } 
  }
  return (
    <PaginaDesconectada>
      <div className={styles.boxLogin}>
        <div className={styles.boxForm}>
            <h1>Login</h1>
            <form onSubmit={login}>
              <Input name='email' text='E-mail' type='email'placeholder='informe um e-mail valido'/>
              <Input name='password' text='Password' type='password'placeholder='informe sua senha'/>
              <div className={styles.esqueceuSenha}>
                  <Input name='lembreDeMim' text='Lembre-se de mim' type='checkbox' custonClass='checkbox'/>
                  <Link href='/esquecisenha' className={styles.link}> esqueceu a senha?</Link>
              </div>
              <Button type='submit' text='enviar'/>
              <p className={styles.p}>Ainda não possui uma conta? <Link href='/cadastro' className={styles.link}>Cadastre-se</Link></p>
            </form>
        </div>
        
      </div>
      
    </PaginaDesconectada>
  );
}
