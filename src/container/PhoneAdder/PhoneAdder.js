import React, { Component } from "react"
import { connect } from "react-redux"

import { Grid, TextField, Button } from "@material-ui/core";
import Contact_Create from "../../store/action/Contact_Action/Contact_Create"
import phoneDetailArr from "../../components/PhoneDetailArr"
class PhoneAdder extends Component {
    state = {
        disabledButtonBool: true,
        value: ["", "", "", "", "", ""]
    }
    handleChange = (index, e) => {
        const valueText = e.target.value
        if (valueText.trim().length) {
            this.setState({ value: { ...this.state.value, [index]: valueText } }, () => {
                const { value } = this.state

                if (value[0].trim().length &&
                    value[2].trim().length) {
                    this.setState({ disabledButtonBool: false })
                }
            })
        } else {
            this.setState({ value: { ...this.state.value, [index]: "" } }, () => this.setState({ disabledButtonBool: true }))
        }
    }

    submit = () => {
        this.setState({ value: ["", "", "", "", "", ""], disabledButtonBool: true })
        this.props.onContactSubmit(this.state.value)
    }

    render() {
        return (
            <Grid container spacing={24}>
                {
                    phoneDetailArr.map((res, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                            <TextField
                                id="outlined-dense"
                                label={res.label}
                                margin="dense"
                                variant="outlined"
                                value={this.state.value[index]}
                                required={res.required}
                                onChange={e => this.handleChange(index, e)}
                            />
                        </Grid>
                    ))
                }

                <Grid item xs={12}>
                    <Button onClick={this.submit} variant="contained" color="primary" disabled={this.state.disabledButtonBool}>
                        Submit
                    </Button>
                </Grid>

            </Grid>
        )
    }
}

const mapDispatchStateToProps = dispatch => {
    return {
        onContactSubmit: contactInfo => dispatch(Contact_Create(contactInfo))
    }
}
export default connect(null, mapDispatchStateToProps)(PhoneAdder)