interface inputPropertiesInterface {
  id: string
  classes: string
}

export default function ScrollHelper(
  inputProperties: inputPropertiesInterface
) {
  return (
    <input
      className={inputProperties.classes}
      type="text"
      id={inputProperties.id}
    />
  )
}
