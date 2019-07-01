import React, { Component, Fragment } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import { Card, Button } from 'react-native-elements';

import { TextField } from 'react-native-material-textfield';

import { connect } from 'react-redux';

class MentoriasAdicionadas extends Component {
    render() {
        return (
            <Fragment>
            { this.props.cardsMentorias.map(cardsMentoria => (
                <Card key={cardsMentoria.id}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 3, marginRight: "3%" }}>
                                <TextField
                                    autoCapitalize='words'     
                                    label='Nome'
                                    labelHeight={10}
                                    value={cardsMentoria.name}
                                    editable={false}
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <TextField
                                    label='Série'
                                    labelHeight={10}
                                    value={cardsMentoria.grade}
                                    editable={false}
                                />
                            </View>
                        </View>
                        <TextField
                            label='Escolha a Matéria'
                            value={cardsMentoria.subject}
                            editable={false}
                        />
                        <TextField    
                            label='Especifique um pouco mais'
                            value={cardsMentoria.subjectInfo}
                            editable={false}
                        />
                        <TextField   
                                label='Quando?'
                                value={cardsMentoria.datetime}
                                editable={false}
                        />
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 2, marginRight: "3%" }}>
                                <TextField
                                    autoCapitalize='words'     
                                    label='Nome'
                                    labelHeight={10}
                                />
                            </View>
                            <View style={{ flex: 1, marginTop: '1.5%' }}>
                                <Button title='Posso Ajudar' titleStyle={{ fontSize: 12 }}/>
                            </View>
                        </View>
                    </Card>
            ))}
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    cardsMentorias: state.cardsMentorias,
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(MentoriasAdicionadas);

const styles = StyleSheet.create({
    card: {
        width: "80%"
    }
});
