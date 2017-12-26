const initialState = {
    name: "Test",
    count: 0
}

const reducer = (store = initialState, action) => {
    switch (action.type) {
        case "test":
            let newCount = store.count + action.payload;
            return {
                ...store,
                count: newCount
            }
        default:
            return store;
    }
}

export default reducer;