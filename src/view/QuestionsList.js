import React from "react";

const QuestionsList = ({ questions, onCreateQuestion, onFilterByTag, onFilterByTitle, onChangeFilter, filterTag }) => (
    <div class = "container-fluid">
     <div class = "Jumbotron">
        <h2>{ "Questions" }</h2>
        <table class="table-hover table-dark">
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
        <br/>
        <button class="btn btn-primary" onClick={onCreateQuestion}>Ask a question</button>
        <br />
        <br/>
        <label>Filter by keyword</label>
        &emsp;
            <input value={filterTag} 
                onChange={ e => onChangeFilter("filterTag", e.target.value) } />
            <br />
        <button class="btn btn-primary" onClick={onFilterByTag}>Filter by tag</button>
        <br/>
        <button class="btn btn-primary" onClick={onFilterByTitle}>Filter by title</button>
    </div>
    </div>
);

export default QuestionsList;