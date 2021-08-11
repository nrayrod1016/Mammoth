import { Profile } from "../models/profile.js"

export {
  userProfile,
  update
}

function update(req, res) {
  Profile.findByIdAndUpdate(req.user.profile, req.body, {new: true})
  .then(profile => {
    res.json(profile)
  })
}

function userProfile(req, res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    res.json(profile)
  })
}