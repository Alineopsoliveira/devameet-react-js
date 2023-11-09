
import { useState } from 'react';
import logo from '../assets/images/logo.svg';
import emailIcon from '../assets/images/email.svg';
import passwordIcon from '../assets/images/key.svg';
import { PublicInput } from '../components/general/publicInput';

export const Login = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const doLogin = async() => {
        try  {   
            setLoading(true);
            if(!login || login.length < 5 || !password || password.length <4){
                setError('Favor preencher os campos corretamente.');
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="container-public">
            <img src={logo} alt="Logo devameet" className='logo' />

            <form >
                {error && <p className='error'>{error}</p>}
                <PublicInput icon={emailIcon} alt='Email' name ='Email'
                    type='text' modelValue={login} setValue={setLogin} />


                <PublicInput icon={passwordIcon} alt='Senha' name = 'Senha'
                    type='text' modelValue={password} setValue={setPassword} />


                <button type='button' onClick={doLogin} disabled = {loading}>
                    {loading ? '...Carregando' : 'Login'}
                    </button>

                <div className='link'>
                    <p>Não possui uma conta?</p>
                    <a>Faça seu cadastro agora!</a>
                </div>
            </form>

        </div>
    );
}