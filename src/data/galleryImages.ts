import gal01 from '../assets/images/gal01.jpeg'
import gal02 from '../assets/images/gal02.jpeg'
import gal03 from '../assets/images/gal03.jpeg'
import gal04 from '../assets/images/gal04.jpeg'
import gal05 from '../assets/images/gal05.jpeg'


export interface GalleryImage {
  id: string
  title: string
  description: string
  imageUrl: string
}

export const images: GalleryImage[] = [
  { id: '1', title: 'Gal01', description: 'C# project team 2025', imageUrl: gal01 },
  { id: '2', title: 'Gal02', description: 'In Software Engineering LAB', imageUrl: gal02 },
  { id: '3', title: 'Gal03', description: 'Me and my Best Friend during field practical at TERNET-UDSM', imageUrl: gal03 },
  { id: '4', title: 'Gal04', description: 'A snap with Prof.Ibisi from Dubai Tech', imageUrl: gal04 },
  { id: '5', title: 'Gal05', description: '2 Happies with passion in Computer science and Engineering', imageUrl: gal05 },

]
