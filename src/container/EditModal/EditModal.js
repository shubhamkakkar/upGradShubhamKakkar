import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    TextField,
    withMobileDialog
} from '@material-ui/core';
import phoneDetailArr from "../../components/PhoneDetailArr/";
class ResponsiveDialog extends Component {
    state = {
        value: ["", "", "", "", "", ""]
    }
    handleChange = (index, e) => {
        const valueText = e.target.value
        this.setState({ value: { ...this.state.value, [index]: valueText } })
    }



    render() {
        const { fullScreen } = this.props;

        return (
            <Grid container>
                <Dialog
                    fullScreen={fullScreen}
                    open={this.props.open}
                    onClose={this.props.handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">{"Edit Contact"}</DialogTitle>
                    <DialogContent>
                        <Grid container>
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
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.handleClose} color="secondary">
                            Close
                      </Button>
                        <Button onClick={() => this.props.saveAction(this.state.value, this.props.index)} color="primary">
                            Save
                      </Button>
                    </DialogActions>
                </Dialog>
            </Grid>
        );
    }
}

ResponsiveDialog.propTypes = {
    fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(ResponsiveDialog);