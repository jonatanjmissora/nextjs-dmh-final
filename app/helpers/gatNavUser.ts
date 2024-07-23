export const getNavUser = (username: string) => {
  const [firstname, lastname] = username.split(" ")
  const avatar = `${firstname.charAt(0).toUpperCase()} ${lastname.charAt(0).toUpperCase()}`
  const capitalName = `${firstname.charAt(0).toUpperCase()}${firstname.slice(1)} ${lastname.charAt(0).toUpperCase()}${lastname.slice(1)}`
  return [avatar, capitalName]
}