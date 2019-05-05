import React from "react";

const CreateQuestion = ({ title, text, tags, onCreate, onChange }) => (
    <div class = "container-fluid">
     <div class = "Jumbotron">
        <h2>Ask a Question</h2>
        <div>
            <label>Title: </label>
            <input value={title} 
                onChange={ e => onChange("title", e.target.value) } />
            <br />
            <label>Text: </label>
            <input value={text} 
                onChange={ e => onChange("text", e.target.value) } />
            <br />
            <label>Tags: </label>
            <input value={tags} 
                onChange={ e => onChange("tags", e.target.value) } />
            <br />
            <button onClick={onCreate}>Ask!</button>
        </div>
    </div>
    </div>
);

export default CreateQuestion;