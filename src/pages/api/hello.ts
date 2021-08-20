// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: number,
  name: string,
  price: number,
  main_image: string,
  description: string,
  stock: number,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([
    {
      id: 1,
      name: " Play a1",
      price: 4100,
      main_image: "/play/playground-infantil-madeira-a10.jpg",
      description: " Descrição em desenvolvimento",
      stock: 10
    },
    {
      id: 2,
      name: " Play a2",
      price: 8000,
      main_image: "/play/playground-infantil-madeira-a11.jpg",
      description: " Descrição em desenvolvimento",
      stock: 10
    },
    {
      id: 3,
      name: " Play a3",
      price: 4300,
      main_image: "/play/playground-infantil-madeira-a12.jpg",
      description: " Descrição em desenvolvimento",
      stock: 10
    },
    {
      id: 4,
      name: " Play a4",
      price: 4600,
      main_image: "/play/playground-infantil-madeira-a13.jpg",
      description: " Descrição em desenvolvimento",
      stock: 10
    },
    {
      id: 5,
      name: "play a5",
      price: 4500,
      main_image: "/play/playground-infantil-eucalipto-a01.png",
      description: " Descrição em desenvolvimento",
      stock: 10
    },
    {
      id: 6,
      name: "play a6",
      price: 8000,
      main_image: "/play/playground-infantil-eucalipto-a02.png",
      description: " Descrição em desenvolvimento",
      stock: 10
    },
    {
      id: 7,
      name: "play a7",
      price: 3500,
      main_image: "/play/playground-infantil-eucalipto-a03.jpeg",
      description: " Descrição em desenvolvimento",
      stock: 10
    },
    {
      id: 8,
      name: "play a8",
      price: 2800,
      main_image: "/play/min-play.png",
      description: " Descrição em desenvolvimento",
      stock: 10
    },
    {
      id: 9,
      name: "PlayGround Colorido",
      price: 6600,
      main_image: "/play/play-colorido.jpg",
      description: " Descrição em desenvolvimento",
      stock: 10
    }
  ])
}
