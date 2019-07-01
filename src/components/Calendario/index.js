import React, { Component } from 'react'

import { View } from 'react-native';

import { Provider } from 'react-redux';
import store from '../../store';

import { CalendarList } from 'react-native-calendars';

import {LocaleConfig} from 'react-native-calendars';

import { connect } from 'react-redux';

LocaleConfig.locales['br'] = {
  monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
  monthNamesShort: ['Jan','Feb','Mai','Abr','Mai','Jun','Jul','Ago','Set.','Out.','Nov','Dez'],
  dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado'],
  dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab']
};
LocaleConfig.defaultLocale = 'br';


const Calendario = ({ navigation }) => (
            <Provider store={store}>           
                <View>
                <CalendarList
                    minDate={'2019-01-01'}
                    maxDate={'2019-12-31'}
                    pastScrollRange={0}
                    onDayPress={() => { navigation.navigate('Agendas') } }
                    markedDates={this.props.eventosmarker}
                />
                </View>
            </Provider>
        );

Calendario.navigationOptions = {
    title: 'Calendário',
}
const mapStateToProps = state => ({
    eventosmarker: state.eventosmarker,
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendario);
