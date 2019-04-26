import React, { Component } from "react";
import model from "../model/questionModel";
import FilterQuestions from "./FilterQuestions";

const mapModelStateToComponentState = modelState => ({
    filterTag: modelState.filterTag,
    filteredQuestions: modelState.filteredQuestions
});

export default class SmartQuestionsList extends Component {
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
            <FilterQuestions 
                filterTag = {this.state.filterTag}
                questions={this.state.filteredQuestions}
                />
        );
    }
}
