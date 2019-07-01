import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import { Card, Button } from 'react-native-elements';

import { Dropdown } from 'react-native-material-dropdown';
import { TextField } from 'react-native-material-textfield';

import { connect } from 'react-redux';

import DateTimePicker from "react-native-modal-datetime-picker";

function showDateTimePicker(){
    return {
        type: 'SHOW_DATEPICKER',
    }
}

function hideDateTimePicker(){
    return {
        type: 'HIDE_DATEPICKER',
    }
}

function handleDatePicked(date){
    return {
        type: 'HANDLE_DATE',
        date,
    }
}

function hideAddCard(){
    return {
        type: 'HIDE_ADDCARD'
    }
}

class Adicionar extends Component {
    render() {
        return (
            <Card title='QUERO UMA MENTORIA'>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 3, marginRight: "3%" }}>
                            <TextField
                                autoCapitalize='words'     
                                label='Nome'
                                labelHeight={10}
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Dropdown
                                label='Série'
                                labelHeight={10}
                                data={[
                                    {
                                        value: '3 ano',
                                    },
                                    {
                                        value: '2 ano',
                                    }
                                ]}
                            />
                        </View>
                    </View>
                    <Dropdown
                        label='Escolha a Matéria'
                        data={[
                            {
                                value: 'Matemática',
                            },
                            {
                                value: 'Física',
                            }
                        ]}
                    />
                    <TextField    
                        label='Especifique um pouco mais'
                    />
                    <TouchableOpacity onPress={this.props.showDateTimePicker}>
                        <TextField   
                            label='Quando?'
                            value={this.props.date}
                            editable={false}
                        />
                    </TouchableOpacity>
                    <DateTimePicker
                        isVisible={this.props.isDateTimePickerVisible}
                        onConfirm={this.props.handleDatePicked}
                        onCancel={this.props.hideDateTimePicker}
                        mode='datetime'
                        is24Hour={true}
                    />
                    <View style={{ flexDirection: 'row', marginTop: '2%' }}>
                        <View style={{ flex: 1, marginRight: "3%" }}>
                            <Button title="Cancelar" buttonStyle={{ backgroundColor: 'red' }} onPress={this.props.hideAddCard}/>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Button title="Confirmar" buttonStyle={{ backgroundColor: 'green' }}/>
                        </View>
                    </View>
                </Card>
        )
    }
}

const mapStateToProps = state => ({
    isDateTimePickerVisible: state.isDateTimePickerVisible,
    date: state.date,
});

const mapDispatchToProps = dispatch => ({
    showDateTimePicker: () => dispatch(showDateTimePicker()),
    hideDateTimePicker: () => dispatch(hideDateTimePicker()),
    handleDatePicked: (date) => dispatch(handleDatePicked(date)),
    hideAddCard: () => dispatch(hideAddCard()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Adicionar);

const styles = StyleSheet.create({
    card: {
        width: "80%"
    }
});
