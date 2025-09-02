function validateId(param) {
  const id = Number(param);
  if (isNaN(id)) {
    return null;
  }
  return id;
}

module.exports = validateId;
