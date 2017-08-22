import React, { Component } from 'react';

import history from '../routing/history';

import BackButton from './BackButton';

import '../styles/Compose.css';

export default class Compose extends Component {
    handleSubmit(event) {
        event.preventDefault();
        const { refs } = this;
        const to = refs.to.value;
        const subject = refs.subject.value;
        const text = refs.text.value;

        // clear input fields
        refs.to.value = '';
        refs.subject.value = '';
        refs.text.value = '';

        this.props.sendMail({
            to, subject, text
        });
        history.push('/inbox/');
    }
    render() {
        const handleSubmit = this.handleSubmit.bind(this);
        return (
            <div className="composeContainer">
                <BackButton />
                <h1>Compose Mail</h1>
                    <div className="compose">
                        <form>
                            <div>
                                <input
                                    placeholder="To..."
                                    type="text"
                                    ref="to"
                                />
                            </div>
                            <div>
                                <input
                                    placeholder="Subject..."
                                    type="text"
                                    ref="subject"
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Text..."
                                    type="text"
                                    ref="text"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                onClick={handleSubmit}
                            >
                                Send
                            </button>
                        </form>
                    </div>
            </div>
        )
    };
}
