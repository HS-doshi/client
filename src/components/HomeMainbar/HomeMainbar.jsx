import React from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './HomeMainbar.css'
// import Questions from '../../pages/Questions/Questions'
import QuestionList from './QuestionList'

const HomeMainbar = () => {

    const location = useLocation()
    const user = null;
    const navigate = useNavigate()

    // const questionsList = useSelector(state => state.questionsReducer)
    var questionsList = [{
        _id: 1,
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 2,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["java", "node js", "react js", "mongo db", "express js"],
        userPosted: "mano",
        userId: 1,
        askedOn: "jan 1",
        answer: [{
            answerBody: "Answer",
            userAnswered: 'kumar',
            answeredOn: "jan 2",
            userId: 2,
        }]
    }, {
        _id: 2,
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 0,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["javascript", "R", "python"],
        userPosted: "mano",
        askedOn: "jan 1",
        userId: 1,
        answer: [{
            answerBody: "Answer",
            userAnswered: 'kumar',
            answeredOn: "jan 2",
            userId: 2,
        }]
    },
    {
        _id: 3,
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 0,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["javascript", "R", "python"],
        userPosted: "mano",
        askedOn: "jan 1",
        userId: 1,
        answer: [{
            answerBody: "Answer",
            userAnswered: 'kumar',
            answeredOn: "jan 2",
            userId: 2,
        }]
    }]

    // const redirect = () => {
    //     alert("login or Signup to ask questions! ");
    //     navigate('/Auth')
    // }

    const checkAuth = () => {
        if (user === null) {
            alert("login or Signup to ask a question")
            navigate('/Auth')
        }
        else {
            navigate('/AskQuestion');
        }
    }

    return (
        <div className='main-bar'>
            <div className='main-bar-header'>
                {
                    location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
                }
                {/* <button to='/AskQuestion' className='ask-btn'>Ask a Question</button> */}
                <button to='/AskQuestion' onclick={checkAuth} className='ask-btn'>Ask Questions</button>
                {/* ={user === null ? redirect() : */}
            </div>
            <div>
                {
                    questionsList.data === null ?
                        <h1>Loading...</h1> :
                        <>
                            <p>{questionsList.data.length} questions</p>
                            <QuestionList questionsList={questionsList.data} />
                        </>

                }
            </div>
        </div >
    )
}

export default HomeMainbar