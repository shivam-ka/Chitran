class ApiResponse {
    constructor(stasusCode, data, message = "Success") {
        this.stasusCode = stasusCode
        this.data = data
        this.message = message
        this.success = stasusCode < 400
    }
}

export { ApiResponse }