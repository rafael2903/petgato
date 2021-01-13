import draw from '../../assets/undraw_building_websites.svg';
import Main from '../Main';
import { Figure } from './styles';

function Building() {
    return (
        <Main>
            <Figure>
                <img src={draw}></img>
                <p>Site em construção...</p>
            </Figure>
        </Main>

    );
}

export default Building;