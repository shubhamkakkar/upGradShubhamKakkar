import React, { Component } from "react"
import { connect } from "react-redux";
import { Grid } from "@material-ui/core"
import PhoneBookPanel from "../../components/PhoneBook/PhoneBook";

import EditModal from "../EditModal/EditModal"
import Contact_EditAndSaveAction from "../../store/action/Contact_Action/Contact_EditAndSaveAction";
import Contact_Delete from "../../store/action/Contact_Action/Contact_Delete";
class PhoneBook extends Component {
    state = {
        openEditModal: false,
        index: undefined

    }

    deleteFunction = index => this.props.onDelete(index)

    editFunction = index => this.setState({ openEditModal: true, index })
    closeFunction = () => this.setState({ openEditModal: false })

    saveAction = (value, index) => {
        this.props.onEditAndSave(value, index)
        this.closeFunction()
    }
    render() {

        return (
            <div>
                {
                    this.props.contacts.length ? (
                        <Grid container>
                            {
                                this.props.contacts.map((res, index) => (
                                    <Grid key={index} item xs={12} style={{ padding: "1.25mm" }}>
                                        <PhoneBookPanel
                                            deleteFunction={this.deleteFunction}
                                            editFunction={this.editFunction}
                                            contactInfo={res}
                                            index={index} />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    ) : <div> No contacts </div>
                }
                {
                    this.state.openEditModal ? <EditModal
                        open={this.state.openEditModal}
                        handleClose={this.closeFunction}
                        saveAction={this.saveAction}
                        index={this.state.index} /> : null
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.Contact_Reducer
    }
}

const mapDispatchStateToProps = dispatch => {
    return {
        onEditAndSave: (newContactInfo, index) => dispatch(Contact_EditAndSaveAction(newContactInfo, index)),
        onDelete: index => dispatch(Contact_Delete(index))
    }
}

export default connect(mapStateToProps, mapDispatchStateToProps)(PhoneBook)
