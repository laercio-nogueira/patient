const errorHandlers = {
  400: data => data.error.message,
  404: data => data,
  401: () => { location.href = '/signup' },
  500: () => {}
}

const handleResponseError = (error) => {
  const { status, data } = error.response || { status: 500, data: 'Unknown' }

  const errorHandler = errorHandlers[status]

  if (!errorHandler) {
    return Promise.reject(data)
  }

  return Promise.reject(errorHandler(data))
}

export default handleResponseError
