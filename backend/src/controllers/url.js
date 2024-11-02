import UrlModel from '../models/url.js';

class UrlController {
    static async createShortUrl (req, res) {
        const { url } = req.body
        const shortUrl = Math.random().toString(36).substring(2, 7)

        try {
            const existingLink = await UrlModel.findUrlByOriginal(url)

            if (existingLink) {
                return res.status(200).json(existingLink)
            }

            const data = await UrlModel.createShortUrl(url, shortUrl)
            return res.status(201).json(data)

        } catch (error) {
            console.error('Error creating URL: ', error)
            return res.status(500).json({ error: 'Internal server error' })
        }
    }

    static async redirectToOriginalUrl (req, res) {
        const { shortId } = req.params

        try {
            const data = await UrlModel.findUrlByShortId(shortId)

            if (!data) {
                return res.status(404).json({ error: 'URL not found' })
            }
            return res.redirect(302, data.url)

        } catch (error) {
            console.error('Error fetching URL: ', error)
            return res.status(500).json({ error: 'Internal server error' })
        }
    }
}

export default UrlController