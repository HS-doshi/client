import React from 'react'
// import { useNavigate } from 'react-router'

import './AskQuestions.css'

const AskQuestions = () => {

    return (
        <div className='ask-question'>
            <div className="ask-ques-container">
                <h1>Ask a Public Question</h1>
                <form>
                    <div className='ask-form-container'>
                        <label htmlFor='ask-ques-title'>
                            <h4>Title</h4>
                            <p>Be Specific & imagine you're asking a question to another person.</p>
                            <input type="text" name='questionTitle' id='ask-ques-title' />


                        </label>
                        <label htmlFor="ask-ques-body">
                            <h4>Body</h4>

                            <p>Include all the information someone would need to answer your question.</p>
                            <textarea name="" id="ask-ques-body" cols="30" rows="10"></textarea>
                        </label>
                        <label htmlFor="ask-ques-tags">
                            <h4>Tags</h4>

                            <p>Add up to 5 tags to describe what your question is about.</p>
                            <input type="text" placeholder='e.g(xml typescript wordpress)' id='ask-ques-tags' />
                        </label>

                    </div>
                    <input type="submit" className='review-btn' value='Review Your Application' />
                </form>
            </div>
        </div>
    )
}
export default AskQuestions