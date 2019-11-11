export default {
    state: {
        username1: '',
        password1: '',
        searchText: ''
    },
    setusername(newValue) {
        this.state.username1 = newValue
    },
    setpassword(newValue) {
        this.state.password1 = newValue
    },
    setsearchText(newValue) {
        this.state.searchText = newValue
    }
}