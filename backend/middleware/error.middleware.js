export const errorHandler = (err, req, res, next) => {
    return res.status(err.status || 500).json({
        success: false,
        status: res.statusCode,
        message: err.message || "Something went wrong",
    });
};


export const notFoundHandler = (req, res, next) => {
    return res.status(404).json({
        success: false,
        status: res.statusCode,
        message: "Not found",
    });
};