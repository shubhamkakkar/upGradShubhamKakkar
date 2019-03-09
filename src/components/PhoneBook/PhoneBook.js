import React from "react"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
    Button, Divider,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelActions,
    ExpansionPanelDetails,
    Typography,
    Grid
} from '@material-ui/core'

import TypoGraphyComp from "../TypoGraphyComp/TypoGraphyComp"

export default props => (
    <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" color="primary"> {props.contactInfo[0]} </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Grid container>
                <TypoGraphyComp header="First Name" detail={props.contactInfo[0]} />
                {
                    props.contactInfo[1] ? <TypoGraphyComp header="Last Name" detail={props.contactInfo[2]} /> : null
                }
                <TypoGraphyComp header="Phone Number" detail={props.contactInfo[2]} />
                {
                    props.contactInfo[3] ? <TypoGraphyComp header="Email" detail={props.contactInfo[2]} /> : null
                }
                {
                    props.contactInfo[4] ? <TypoGraphyComp header="Company" detail={props.contactInfo[2]} /> : null
                }
                {
                    props.contactInfo[5] ? <TypoGraphyComp header="Misc" detail={props.contactInfo[2]} /> : null
                }
            </Grid>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
            <Button color="secondary" onClick={() => props.editFunction(props.index)}>Edit</Button>
            <Button variant="outlined" color="primary" onClick={() => props.deleteFunction(props.index)}>Delete</Button>
        </ExpansionPanelActions>
    </ExpansionPanel>
)