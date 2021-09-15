import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
class PlanetsService {
  async getPlanets() {
    const planets = await dbContext.Planet.find()
    return planets
  }

  async getPlanet(query) {
    const planet = await dbContext.Planet.find(query)
    if (!planet) {
      throw new BadRequest('No Planets by that ID')
    }
    return planet
  }

  async createPlanet(starId, planetData) {
    const star = await dbContext.Star.findById(starId)
    if (!star) {
      throw new BadRequest('No Star by ID')
    }
    const planet = await dbContext.Planet.create(planetData)
    return planet
  }

  async removePlanet(planetId) {
    const planet = dbContext.Planet.findById(planetId)
    if (!planet) {
      throw new BadRequest('Planet not Found with that ID')
    }
    await planet.remove()
  }
}
export const planetsService = new PlanetsService()
