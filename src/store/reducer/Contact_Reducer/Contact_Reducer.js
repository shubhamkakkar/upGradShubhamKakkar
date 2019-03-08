import { CONTACT } from "../../action/Contact_Action/Contact_Create"
import { DELETE } from "../../action/Contact_Action/Contact_Delete"
import { EDITANDSAVE } from "../../action/Contact_Action/Contact_EditAndSaveAction"

export default (state = [], action) => {
    switch (action.type) {
        case CONTACT: {
            return [
                ...state, action.contact

            ]
        }

        case EDITANDSAVE: {
            state[action.index] = action.editAndSave;
            return state
        }

        case DELETE: {
            return state.splice(action.index, 0);
        }

        default: {
            return state;
        }
    }
}