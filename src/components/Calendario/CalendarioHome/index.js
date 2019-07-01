import React, { Component } from 'react'
import { View } from 'react-native'
import { CalendarList } from 'react-native-calendars';

import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['br'] = {
  monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
  monthNamesShort: ['Jan','Feb','Mai','Abr','Mai','Jun','Jul','Ago','Set.','Out.','Nov','Dez'],
  dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado'],
  dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab']
};
LocaleConfig.defaultLocale = 'br';

const CalendarioHome = ({ navigation }) => (
    <View>
        <CalendarList
            minDate={'2019-01-01'}
            maxDate={'2019-12-31'}
            pastScrollRange={0}
            onDayPress={() => { navigation.navigate('Agendas') } }
        />
    </View>
);

CalendarioHome.navigationOptions = {
    title: 'CalendarioHome',
}
 
export default CalendarioHome;