import developer1 from '../assets/images/developer1.jpeg'
import developer2 from '../assets/images/developer2.jpeg'
import developer3 from '../assets/images/developer3.jpeg'
import developer4 from '../assets/images/developer4.jpeg'
import oddity from '../assets/images/oddity.png'
import tucasa from '../assets/images/tucasa.png'
import simukiganjan from '../assets/images/simukiganjan.png'
import blog from '../assets/images/blog.png'
import hotel from '../assets/images/hotel.jpg'
import evangelism from '../assets/images/evangelism.jpg'

export interface GalleryImage {
  id: string
  title: string
  description: string
  imageUrl: string
}

export const images: GalleryImage[] = [
  { id: '1', title: 'Developer 2', description: 'Project image', imageUrl: developer2 },
  { id: '2', title: 'Oddity', description: 'Oddity artwork', imageUrl: oddity },
  { id: '3', title: 'Tucasa', description: 'Tucasa screenshot', imageUrl: tucasa },
  { id: '4', title: 'Simukiganjan', description: 'Artwork', imageUrl: simukiganjan },
  { id: '5', title: 'Blog', description: 'Blog cover', imageUrl: blog },
  { id: '6', title: 'Hotel', description: 'Hotel project', imageUrl: hotel },
  { id: '7', title: 'Evangelism', description: 'Evangelism artwork', imageUrl: evangelism },
  { id: '8', title: 'Developer 1', description: 'Dev image', imageUrl: developer1 },
  { id: '9', title: 'Developer 3', description: 'Dev image', imageUrl: developer3 },
  { id: '10', title: 'Developer 4', description: 'Dev image', imageUrl: developer4 },
]
