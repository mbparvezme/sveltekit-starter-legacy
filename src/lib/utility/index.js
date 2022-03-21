export let formData = (formInputs) => {
  const data = {}
  for (let field of formInputs) {
    const [key, value] = field
    data[key] = value
  }
  return data
}

export let randomNum = (min = 10, max = 99) => {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
