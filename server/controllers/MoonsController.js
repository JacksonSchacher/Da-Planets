import { moonsService } from '../services/MoonsService'
import BaseController from '../utils/BaseController'

export class MoonsController extends BaseController {
  constructor() {
    super('/api/galaxies/:galaxyId/stars/:starId/planets/:planetId/moons')
    this.router
      .get('', this.getMoons)
      .get('/:moonId', this.getMoon)
      .post('', this.createMoon)
      .get('/:moonId/species', this.getSpecies)
      .get('/:moonId/species/:speciesId', this.getASpecies)
      .post('/:moonId/species', this.createSpecies)
  }

  async createSpecies(req, res, next) {
    try {
      req.body.galaxyId = req.params.galaxyId
      req.body.starId = req.params.starId
      req.body.planetId = req.params.planetId
      req.body.moonId = req.params.moonId
      const species = await moonsService.createSpecies(req.params.moonId, req.body)
      res.send(species)
    } catch (error) {
      next(error)
    }
  }

  async getASpecies(req, res, next) {
    try {
      const species = await moonsService.getASpecies(req.params.speciesId)
      res.send(species)
    } catch (error) {
      next(error)
    }
  }

  async getSpecies(req, res, next) {
    try {
      const species = await moonsService.getSpecies()
      res.send(species)
    } catch (error) {
      next(error)
    }
  }

  async createMoon(req, res, next) {
    try {
      req.body.galaxyId = req.params.galaxyId
      req.body.starId = req.params.starId
      req.body.planetId = req.params.planetId
      const moon = await moonsService.createMoon(req.params.planetId, req.body)
      res.send(moon)
    } catch (error) {
      next(error)
    }
  }

  async getMoon(req, res, next) {
    try {
      const moon = await moonsService.getMoon(res.query)
      res.send(moon)
    } catch (error) {
      next(error)
    }
  }

  async getMoons(req, res, next) {
    try {
      const moons = await moonsService.getMoons()
      res.send(moons)
    } catch (error) {
      next(error)
    }
  }
}
