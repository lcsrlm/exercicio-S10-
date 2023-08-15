export const captureErroYup = (error) => {
    error.inner.reduce((acc, currentValue) => {
        const data = {...acc}
        data[currentValue.path] = currentValue.message
    }, {})
    return data
}