import Home from '../components/Home';
import Mentorias from '../components/Mentorias';
import Calendario from '../components/Calendario';
import Agendas from '../components/Calendario/Agendas';
import CalendarioHome from '../components/Calendario/CalendarioHome';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
    createStackNavigator({
        Home: Home,
        Mentorias: Mentorias,
        Calendario: Calendario,
        Agendas: Agendas,
        CalendarioHome: CalendarioHome,
    })
);

export default Routes;
