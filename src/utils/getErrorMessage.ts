export default (error: any) => {
    return error instanceof Error ? error.message : "Something went wrong";
};
