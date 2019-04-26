import React from "react";

const QuestionsList = ({ questions, onCreateQuestion, onFilterByTag, onFilterByTitle, onChangeFilter, filterTag }) => (
    <div>
        <h2>{ "Questions" }</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Title</th>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Tags</th>
                </tr>
            </thead>
            <tbody>
                {
                    questions.map(
                        (question, index) =>(
                            <tr key={index}>
                            <td>{question.author}</td>
                            <td>{question.title}</td>
                            <td>{question.text}</td>
                            <td>{question.date}</td>
                            <td>{question.tags}</td>
                        </tr>   
                        ))
                }
            </tbody>
        </table>
        <button onClick={onCreateQuestion}>Ask a question</button>
        <br />
        <label>Filter by keyword</label>
            <input value={filterTag} 
                onChange={ e => onChangeFilter("filterTag", e.target.value) } />
            <br />
        <button onClick={onFilterByTag}>Filter by tag</button>
        <button onClick={onFilterByTitle}>Filter by title</button>
    </div>
);

export default QuestionsList;