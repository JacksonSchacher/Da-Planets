import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
class MoonsService {
  async getMoons() {
    const moons = await dbContext.Moon.find()
    return moons
  }

  async getMoon(query) {
    const moon = await dbContext.Moon.find(query)
    if (!moon) {
      throw new BadRequest('No Moons by that ID')
    }
    return moon
  }

  async createMoon(planetId, moonData) {
    const planet = await dbContext.Planet.findById(planetId)
    if (!planet) {
      throw new BadRequest('No Planet by ID')
    }
    const moon = await dbContext.Moon.create(moonData)
    return moon
  }
}
export const moonsService = new MoonsService()
