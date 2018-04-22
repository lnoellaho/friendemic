import React, { Component } from 'react';
import QuestionCount from '../components/QuestionCount'
import Result from '../components/Result'
import Question from '../components/Question'
import AnswerOptions from '../components/AnswerOptions'


export default class Quiz extends Component {
    render() {
        return (
            <div>
                <p>This is the quiz</p>
                <QuestionCount />
                <Result />
                <Question />
                <AnswerOptions />
            </div>
        );
    }
}
