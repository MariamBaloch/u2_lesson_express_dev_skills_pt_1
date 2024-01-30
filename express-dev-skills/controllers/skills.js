const Skill = require('../models/skill')

const index = (req, res) => {
  const skills = Skill.getAll()
  const title = 'Skills'
  res.render('skills/index', { skills, title })
}

const show = (req, res) => {
  const skill = Skill.getOne(req.params.id)
  res.render('skills/show', {
    skill
  })
}
const add = (req, res) => {
  res.render('skills/add')
}
const create = (req, res) => {
  Skill.create(req.body)
  res.redirect('/skills')
}
const deleteSkill = (req, res) => {
  Skill.deleteSkill(req.params.id)
  res.redirect('/skills')
}
const edit = (req, res) => {
  const skill = Skill.getOne(req.params.id)
  res.render('skills/edit', { skill })
}
const update = (req, res) => {
  const skillId = req.params.id
  const updatedSkill = req.body.skillName
  Skill.updateOne(skillId, updatedSkill)
  res.redirect('/skills')
}
module.exports = { index, show, add, create, deleteSkill, edit, update }
