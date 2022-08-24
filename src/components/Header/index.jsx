import { RiShutDownLine } from 'react-icons/ri';
import {Container,Profile,Logout} from './styles';

export function Header(){
    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/edmilsonhdr.png" alt="foto perfil" />

                <div>
                    <span>bem-vindo</span>
                    <strong>Edmilson Henrique</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}