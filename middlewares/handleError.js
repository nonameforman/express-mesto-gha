const handleError = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Ошибка в работе сервера';
  res.status(statusCode).send({ message });
  next();
};

module.exports = handleError;
