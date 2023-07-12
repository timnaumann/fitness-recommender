export const getSelectArray = (label, value, itemsToSelect) => {
  if (
    itemsToSelect === null
    || itemsToSelect === undefined
    || itemsToSelect === ''
  ) {
    return []
  }
  return itemsToSelect.map((item) => ({
    label: item[label],
    value: item[value],
  }))
}

export const arraysEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b)

export const checkIfAValidValueIsSelected = (arrayOfSelectedValues) => {
  const arrayOfSelected = arrayOfSelectedValues.map((selectedValue) => {
    if (
      selectedValue === 'Select option'
      || selectedValue === ''
      || selectedValue === null
    ) {
      // eslint-disable-next-line no-alert
      alert('Please choose an valid value in the dropdown-menue.')
      return null
    }

    return selectedValue
  })

  if (arraysEqual(arrayOfSelectedValues, arrayOfSelected)) {
    return true
  }

  return false
}

export const getNumericArrayForSelect = (arrayLength) => {
  const numericArray = []
  let counter = 0
  for (let i = 0; i < arrayLength + 2; i += 1) {
    numericArray[i] = {
      label: counter.toString(),
      value: counter,
    }
    counter += 1
  }
  return numericArray
}

export const getLastFlowPosition = (qStages) => {
  const flowPositions = qStages.map((qStage) => qStage.questionFlowPosition)

  if (!flowPositions.length) {
    return 0
  }
  return Math.max(...flowPositions)
}

export const getRessourceStatus = (ressources) => ressources
  .filter((element) => element.array.length === 0)
  .map((element) => element.name)

export const checkIfRessourceIsAvailableAndAlert = (arrayOfRessourceStatus) => {
  if (!arrayOfRessourceStatus.length) {
    return true
  }
  arrayOfRessourceStatus.forEach((ressourceStatus) => {
    // eslint-disable-next-line no-alert
    alert(`Ressource with name ${ressourceStatus} is missing.`)
  })

  return false
}

export const createRessourcesArray = (array, name) => [{
  array,
  name,
}]
