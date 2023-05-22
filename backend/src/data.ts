import bcrypt from 'bcryptjs'
import { User } from './models/userModel'
import { Product } from './models/productModel'

export const sampleProducts: Product[] = [
    {
        name: 'Kith Cupro Linen Thompson Crossover Shirt',
        slug: 'kith-cupro-linen-thompson-crossover-shirt',
        image: '../images/p1.jpg',
        category: 'Shirts',
        brand: 'Kith',
        price: 180.00,
        countInStock: 10,
        rating: 4.7,
        numReviews: 10,
        description: 'The Cupro Linen Thompson Crossover Shirt is made from a lightweight seasonal fabric, with an all-over tonal paisley print exclusive to Kith Summer 2023. It has a shawl collar shape, with a cross front design and hidden functional button. Finished with one visible exterior button, and sandwashed for a soft hand-feel.'
    },
    {
        name: 'Kith Washed Cotton Apollo Shirt',
        slug: 'kith-washed-cotton-apollo-shirt',
        image: '../images/p2.jpg',
        category: 'Shirts',
        brand: 'Kith',
        price: 170.00,
        countInStock: 15,
        rating: 4.6,
        numReviews: 8,
        description: 'Cotton blend fabric Kith branded buttons at front Patch pockets at chest Pigment garment dyed and stone washed for textured color effect and soft hand-feel Scooped hem shape Kith Citrus satin label branding at side seam True to size Oversized fit Dropped shoulder Machine wash separately '
    },
    {
        name: 'Kith Denim Barrow Pant',
        slug: 'kith-denim-barrow-pant',
        image: '../images/p3.jpg',
        category: 'Pants',
        brand: 'Kith',
        price: 190.00,
        countInStock: 10,
        rating: 4.8,
        numReviews: 11,
        description: 'The Denim Barrow Pant is crafted of a premium, lightweight denim fabric, garment dyed and washed for a soft hand-feel. It has an elasticated, drawcord-adjustable waistband with Kith branded aglets, side seam pockets, and a single back pocket.'
    },
    {
        name: 'Kith Jacquard Faille Cedar Short',
        slug: 'kith-jacquard-faille-cedar-short',
        image: '../images/p4.jpg',
        category: 'Pants',
        brand: 'Kith',
        price: 150.00,
        countInStock: 5,
        rating: 4.7,
        numReviews: 4,
        description: 'The Jacquard Faille Cedar Short is made from a woven jacquard fabric, with Kith script logo branding woven throughout. It has an elasticated, drawcord adjustable waistband, and Kith branded hardware, finished with secure zippered front and back pockets.'
    },
]

export const sampleUsers: User[] = [
    {
      name: 'Joe',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ]