
import { starsService } from '../services/StarsService'
import BaseController from '../utils/BaseController'
export class StarsController extends BaseController {
  constructor() {
    super('/api/galaxies/:galaxyId/stars')
    this.router
      .get('', this.getStars)
      .get('/:starId', this.getStar)
      .post('', this.createStar)
      // .put('/:starId', this.editStar)
      .delete('/:starId', this.removeStar)
  }

  async removeStar(req, res, next) {
    try {
      const star = await starsService.removeStar(req.params.starId)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }

  // async editStar(req, res, next) {
  //   try {
  //     const star = await starsService.editStar(req.params.starId, req.body.starData)
  //     res.send(star)
  //   } catch (error) {
  //     next(error)
  //   }
  // }

  async createStar(req, res, next) {
    try {
      req.body.galaxyId = req.params.galaxyId
      const star = await starsService.createStar(req.params.galaxyId, req.body)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async getStar(req, res, next) {
    try {
      const star = await starsService.getStar(req.query)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async getStars(req, res, next) {
    try {
      const stars = await starsService.getStars()
      res.send(stars)
    } catch (error) {
      next(error)
    }
  }
}
