function endpointError(req, res, next) {
    res.status(404).json({
        error: 'Endpoint inesistente',
        status: 404
    });
};

module.exports = endpointError