export default (error: any) => {
    const errorMessage = error.response.data.message;
    console.log(error);
    if (errorMessage instanceof Array) {
        return errorMessage
            .map((string: string) => string.charAt(0).toUpperCase() + string.slice(1))
            .join("\n");
    } else {
        return errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
    }
};
