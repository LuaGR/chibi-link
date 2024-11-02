import express from 'express'
import UrlController from '../controllers/url.js'

const router = express.Router()

router.post('/', UrlController.createShortUrl)
router.get('/:shortId', UrlController.redirectToOriginalUrl)

export default router