import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
class StarsService {
  async getStars() {
    const stars = await dbContext.Star.find()
    return stars
  }

  async getStar(query) {
    const star = await dbContext.Star.find(query)
    if (!star) {
      throw new BadRequest('No Stars by that ID')
    }
    return star
  }

  async createStar(galaxyId, starData) {
    const galaxy = await dbContext.Galaxy.findById(galaxyId)
    if (!galaxy) {
      throw new BadRequest('No Galaxy by ID')
    }
    const star = await dbContext.Star.create(starData)
    return star
  }

  async removeStar(starId) {
    const star = dbContext.Star.findById(starId)
    if (!star) {
      throw new BadRequest('Star not Found with that ID')
    }
    await star.remove()
  }
}
export const starsService = new StarsService()
