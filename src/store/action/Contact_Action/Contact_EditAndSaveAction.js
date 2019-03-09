export const EDITANDSAVE = "EDITANDSAVE"

export default (editAndSave, index) => {
    return {
        editAndSave,
        index,
        type: EDITANDSAVE
    };
}