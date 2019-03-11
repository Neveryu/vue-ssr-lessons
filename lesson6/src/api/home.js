const allData = {
  totalRegister: 44,
  totalActiver: 33,
  topMouthActiver: 22,
  todayLogin: 11
}

export function getAll() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, allData)
  })
}
