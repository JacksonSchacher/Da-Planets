import { planetsService } from '../services/PlanetsService'
import BaseController from '../utils/BaseController'

export class PlanetsController extends BaseController {
  constructor() {
    super('/api/galaxies/:galaxyId/stars/:starId/planets')
    this.router
      .get('', this.getPlanets)
      .get('/:planetId', this.getPlanet)
      .post('', this.createPlanet)
      // .put('/:planetId', this.editPlanet)
      .delete('/:planetId', this.removePlanet)
  }

  async removePlanet(req, res, next) {
    try {
      const planet = await planetsService.removePlanet(req.params.planetId)
      res.send(planet)
    } catch (error) {
      next(error)
    }
  }

  // async editPlanet(req, res, next) {
  //   try {
  //     const planet = await planetsService.editPlanet(req.params.planetId, req.body.planetData)
  //     res.send(planet)
  //   } catch (error) {
  //     next(error)
  //   }
  // }

  async createPlanet(req, res, next) {
    try {
      req.body.galaxyId = req.params.galaxyId
      req.body.starId = req.params.starId
      const planet = await planetsService.createPlanet(req.params.starId, req.body)
      res.send(planet)
    } catch (error) {
      next(error)
    }
  }

  async getPlanet(req, res, next) {
    try {
      const planet = await planetsService.getPlanet(req.query)
      res.send(planet)
    } catch (error) {
      next(error)
    }
  }

  async getPlanets(req, res, next) {
    try {
      const planets = await planetsService.getPlanets()
      res.send(planets)
    } catch (error) {
      next(error)
    }
  }
}
