import Head from 'next/head';
import Image from 'next/image';
import { Banner } from '../components/Banner';
import styles from '../styles/Home.module.scss';
import api from '../services/api';
import { useEffect } from 'react';
import { GetStaticProps } from 'next';
import { Footer } from '../components/Footer';

type Data = {
  id: number,
  name: string,
  price: number,
  main_image: string,
  description: string,
  stock: number,
}
type HomeProps = {
  playAmericano: Data[],
  playDetora: Data[],
  featuredProduct: Data[]

}

export default function Home({ playAmericano, playDetora, featuredProduct }: HomeProps) {
  const destaque = featuredProduct[0];
  let desconto = destaque.price - 600;
  return (
    <div>
      <Banner />
     
        <h3 className={styles.title_service}>Serviços</h3>
     
      <section className={styles.services}>
        <div className={styles.card}>
          <div className={styles.carImg}>

          </div>
          <div className={styles.cardCall}>
            <p>Fabricação</p>
            <button>Solicitar orçamento</button>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardCall}>
            <p>Reforma</p>
            <button>Solicitar orçamento</button>
          </div>
          <div className={styles.carImg}>

          </div>
        </div>
      </section>

      <section className={styles.containerProducts}>
        <div className={styles.contet_products}>
          <div className={styles.titleSection}>
            <h1>O mais vendido</h1>
          </div>
          <div className={styles.container_featured}>
            <div>
              <Image
                src={featuredProduct[0].main_image}
                width='400'
                height="300"
              />
            </div>
            <div className={styles.productInfo}>
              <h1>{featuredProduct[0].name}</h1>
              <span> de R${destaque.price.toLocaleString('pt-br', {minimumFractionDigits: 2})}</span>
              <p> por <strong>R${desconto.toLocaleString('pt-br', {minimumFractionDigits: 2})}</strong></p>
              <ul>
                <li>11 brinquedos</li>
                <li>2 anos de garantia <small>* Consulte condições</small> </li>
                <li>Produto a pronta entrega</li>
                <li>Instalação em 24H</li>
              </ul>
              <button>Colocar no carrinho</button>
            </div>
          </div>
        </div>
        <div className={styles.contet_products}>
          <div className={styles.titleSection}>
            <h1>Playground estilo americano</h1>
          </div>
          <div className={styles.row}>
            {playAmericano.map(content => {
              return (
                <div key={content.id} className={styles.card}>
                  <div className={styles.imgProduct}>
                    <Image
                      src={content.main_image}
                      width='300px'
                      height='250px'

                    />
                  </div>
                  <div className={styles.productInfo}>
                    <p>{content.name}</p>
                    <span>R$ {content.price.toLocaleString('pt-br', {minimumFractionDigits: 2})}</span>
                    <button>Colocar no carrinho</button>
                  </div>
                </div>
              )
            })}




          </div>
        </div>
        <div className={styles.contet_products}>
          <div className={styles.titleSection}>
            <h1>Playground em eucalipto</h1>
          </div>
          <div className={styles.row}>
            {playDetora.map(content => {
              return (
                <div key={content.id} className={styles.card}>
                  <div className={styles.imgProduct}>
                    <Image
                      src={content.main_image}
                      width='300px'
                      height='250px'

                    />
                  </div>
                  <div className={styles.productInfo}>
                    <p>{content.name}</p>
                    <span>R$ {content.price.toLocaleString('pt-br', {minimumFractionDigits: 2})}</span>
                    <button>Colocar no carrinho</button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </section>
      <Footer/>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('hello', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    },
  })

  const product = data.map((content: Data) => {
    return {
      id: content.id,
      name: content.name,
      price: content.price,
      main_image: content.main_image,
      description: content.description,
      stock: content.stock

    }
  })
  const playAmericano = product.slice(0, 4);
  const playDetora = product.slice(4, 8);
  const featuredProduct = product.slice(8, 9)
  return {
    props: {
      playAmericano,
      playDetora,
      featuredProduct
    },
    revalidate: 60 * 60 * 8,
  }
}