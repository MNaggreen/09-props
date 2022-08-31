function PetInfo(props) {
  const { animal, age } = props
  // проводим деструктуризацию чтобы для переменных выше
  console.log(props)
  return (
    <h1>
      My {animal} is {age} years old
    </h1>
  )
}

export default PetInfo
// тут мы принимаем это свойство и вставляем в h1
