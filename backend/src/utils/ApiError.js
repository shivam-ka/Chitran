class ApiError {
    constructor(stasusCode,  message = "Request Faild") {
        this.stasusCode = stasusCode
        this.message = message
        this.success = false
        this.error = true
    }
}

export { ApiError}