import React from "react";

const FilterQuestions = ({ questions, filterTag}) => (
    <div>
        <h2>{ "Filtered questions by:"}</h2>
        <h2>{ filterTag}</h2>
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
    </div>
);

export default FilterQuestions;