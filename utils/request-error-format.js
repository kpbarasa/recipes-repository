function responseErrorFormat(status, resPonseStatus, error ) {
  return {
    status,
    resPonseStatus,
    error
  };
}

module.exports = responseErrorFormat;