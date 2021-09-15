import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class GalaxiesService {
  async getGalaxyById(galaxyId) {
    const galaxy = await dbContext.Galaxy.findById(galaxyId)
    if (!galaxy) {
      throw new BadRequest('Invalid Galaxy ID')
    }
    return galaxy
  }

  async getGalaxies() {
    const galaxies = await dbContext.Galaxy.find()
    return galaxies
  }

  async getGalaxy(galaxyId) {
    const galaxy = await dbContext.Galaxy.findById(galaxyId)
    if (!galaxy) {
      throw new BadRequest('No Galaxies by that ID')
    }
    return galaxy
  }

  async createGalaxy(galaxyData) {
    const galaxy = dbContext.Galaxy.create(galaxyData)
    return galaxy
  }

  async removeGalaxy(galaxyId) {
    const galaxy = dbContext.Galaxy.findById(galaxyId)
    if (!galaxy) {
      throw new BadRequest('Galaxy not Found with that ID')
    }
    await galaxy.remove()
  }
}
export const galaxiesService = new GalaxiesService()
