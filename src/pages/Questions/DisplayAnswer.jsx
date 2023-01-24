import React from 'react'
import { Link } from 'react-router-dom'
import QuestionList from '../../components/HomeMainbar/QuestionList'
import Avatar from '../../components/Avatar/Avatar'

const DisplayAnswer = () => {
    return (
        <div>
            {
                QuestionList.answer.msp((ans) => (
                    <div className='display-ans' ket={ans._id}>
                        <p>{ans.answerBody}</p>
                        <div className='question-actions-user'>
                            <div>
                                <button type='button'>Share</button>
                                <button type='button'>Delete</button>
                            </div>
                            <div>
                                <p>answer { }ans.answeredOn</p>
                                <Link to={`/User/${question.userId}`} className='user-link' style={{ color: '#0086d8' }}>
                                    <Avatar backgroundColor="orange" px="8px" py="" >{answer.userAnswered.charAt(0).toUpperCase()}</Avatar>
                                    <div>
                                        {ans.userAnswered}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayAnswer