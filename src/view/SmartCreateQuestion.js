import React, { Component } from "react";
import model from "../model/questionModel";

import CreateQuestion from "./CreateQuestion";
import createQuestionPresenter from "../presenter/createQuestionPresenter";

const mapModelStateToComponentState = modelState => ({
    author: modelState.newQuestion.author,
    title: modelState.newQuestion.title,
    text: modelState.newQuestion.text,
    date: modelState.newQuestion.date,
    tags: modelState.newQuestion.tags
});

export default class SmartCreateStudent extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState(model.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        model.addListener("change", this.listener);
    }

    componentWillUnmount() {
        model.removeListener("change", this.listener);
    }

    render() {
        return (
            <CreateQuestion 
                onCreate={createQuestionPresenter.onCreate}
                onChange={createQuestionPresenter.onChange}
                title={this.state.title}
                text={this.state.text}
                tags={this.state.tags}
                />
        );
    }
}
