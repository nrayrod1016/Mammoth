import { Profile } from "../models/profile.js"

export {
  userProfile
}

function userProfile(req, res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    res.json(profile)
  })
}