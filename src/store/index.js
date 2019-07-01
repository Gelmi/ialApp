import { createStore } from 'redux';

const INITIAL_STATE = {
    isDateTimePickerVisible: false,
    date: " ",
    addCard: false,
    cardsMentorias: [
        {
            id: 0,
            name: 'Guilherme Gelmi',
            grade: '3 ano',
            subject: 'História',
            subjectInfo: 'Primeira Guerra',
            datetime: '22/5/2019 19:40',
            isMentored: false,
            mentorName: '',
        }
    ],
    eventosinfo: [
        {
            id: 0,
            name: '3 fase',
            description: '3 fase',
            data: '27/06/2019'
        }
    ],
    eventosmarker: {
            '27-06-2019': {marked: true, dotColor: 'red'}
        }
};

function reducer(state = INITIAL_STATE, action) {
    if (action.type === 'SHOW_DATEPICKER') {
        return { ...state,
            isDateTimePickerVisible: true
        }
    }

    if (action.type === 'HIDE_DATEPICKER') {
        return { ...state,
            isDateTimePickerVisible: false
        }
    }

    if (action.type === 'HANDLE_DATE') {
        day   = action.date.getDate();
        month = action.date.getMonth();
        year  = action.date.getFullYear();
        hours = action.date.getHours();
        minutes = action.date.getMinutes();
        if( hours <= 9 ){
            hoursfixed = '0'+ hours;
        } else {
            hoursfixed = hours;
        }
        if( minutes <= 9 ){
            minutesfixed = '0'+ minutes;
        } else {
            minutesfixed = minutes;
        }
        return { ...state,
            isDateTimePickerVisible: false,
            date: day + '/' + month + '/' + year + ' ' + hoursfixed + ':' + minutesfixed
        }
    }

    if(action.type === 'SHOW_ADDCARD'){
        return { ...state,
            addCard: true,
        }
    }

    if(action.type === 'HIDE_ADDCARD'){
        return { ...state,
            addCard: false,
        }
    }

    return state;
};

const store = createStore(reducer);

export default store;