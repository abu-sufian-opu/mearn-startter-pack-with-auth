

//create custom error

const createError = (status, msg) => {
    const error = new Error();
    error.status = status;
    error.message = msg;
    return error;
}

//export create error

export default createError;