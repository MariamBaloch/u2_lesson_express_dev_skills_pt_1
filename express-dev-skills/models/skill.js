const skills = [
  { id: 10, skillName: 'HTML', learned: true },
  { id: 20, skillName: 'CSS', learned: true },
  { id: 30, skillName: 'Javascript', learned: true },
  { id: 40, skillName: 'Python', learned: false }
]

const getAll = () => {
  return skills
}
const getOne = (id) => {
  let skill = skills.find((skill) => {
    return skill.id === parseInt(id)
  })
  return skill
}

const create = (skill) => {
  skill.id = Date.now() % 100000
  skill.learned = false
  skills.push(skill)
}

const deleteSkill = (id) => {
  const index = skills.findIndex((skill) => skill.id === parseInt(id))
  skills.splice(index, 1)
}

const updateOne = (id, updatedSkill) => {
  const skilltoUpdate = skills.find((skill) => skill.id === parseInt(id))
  skilltoUpdate.skillName = updatedSkill
}
module.exports = { getAll, getOne, create, deleteSkill, updateOne }
