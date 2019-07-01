import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

import Adicionar from '../Adicionar';

import { connect } from 'react-redux';
import MentoriasAdicionadas from '../MentoriasAdicionadas';

function showAddCard(){
    return {
        type: 'SHOW_ADDCARD'
    }
}

class MentoriasHome extends Component {
    render() {
        return (
                <View style={{ flex: 1 }}>
                    { this.props.addCard && (
                        <Adicionar style={{ zIndex: 1 }}/>
                    )}
                    <MentoriasAdicionadas style={{ zIndex: 1 }}/>
                    <TouchableOpacity
                        onPress={() => this.props.showAddCard()}
                        style={styles.addButton}
                    >
                        <Text style={{ fontSize: 40, color: '#FFF', marginBottom: '10%' }}>+</Text>
                    </TouchableOpacity>
                </View>
        );
    }
}

const mapStateToProps = state => ({
    addCard: state.addCard,
});

const mapDispatchToProps = dispatch => ({
    showAddCard: () => dispatch(showAddCard())
})

export default connect(mapStateToProps, mapDispatchToProps)(MentoriasHome);

const styles = StyleSheet.create({
    addButton: {
        borderRadius: 60,
        height: 60,
        width: 60,
        position: 'absolute',
        backgroundColor: '#000',
        top: "87%",
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2
    }
});
