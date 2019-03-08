export const EDITANDSAVE = "EDITANDSAVE"

export default (editAndSave, index) => {
    console.log(editAndSave, index)
    return {
        editAndSave,
        index,
        type: EDITANDSAVE
    };
}