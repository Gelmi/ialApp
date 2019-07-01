import React, { Component } from 'react'

import { Provider } from 'react-redux';
import store from '../../store';

import MentoriasHome from '../Mentorias/MentoriasHome';


class Mentorias extends Component {
    async componentDidMount(){
        console.log(Date());
    }

    render() {
        return (
            <Provider store={store}>
                <MentoriasHome/>
            </Provider>
        );
    }
}

Mentorias.navigationOptions = {
    title: 'Mentorias',
}

export default Mentorias;
