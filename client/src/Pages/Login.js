import React, { Component } from "react";
class Login extends Component {
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="email">Valid input</Label>
                    <Input type="email" name="email" />
                    <FormFeedback valid>Sweet! that name is available</FormFeedback>
                    <FormText>If you are not registered, please contact your admin</FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="password">Invalid input</Label>
                    <Input type="password" name="password" />
                </FormGroup>
            </Form>
        );
    }
}