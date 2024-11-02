import prisma from '../../prismaClient.js';

class UrlModel {
    static async findUrlByOriginal (url) {
        try {
            return await prisma.link.findUnique({ where: { url } })
        } catch (error) {
            console.error('Error finding URL by original: ', error)
            throw error
        }
    }

    static async findUrlByShortId (shortUrl) {
        try {
            return await prisma.link.findUnique({ where: { shortUrl } })
        } catch (error) {
            console.error('Error finding URL by short ID: ', error)
            throw error
        }
    }

    static async createShortUrl (url, shortUrl) {
        try {
            return await prisma.link.create({ data: { url, shortUrl } })
        } catch (error) {
            console.error('Error creating short URL: ', error)
        }
    }
}

export default UrlModel