import Image from 'next/image';
import { Facebook, Instagram } from '../icons';
import style from './style.module.scss'

export const Footer = () => {
   return (
      <footer className={style.container}>
         <div className={style.content}>
            <div>
               <h5>INSTITUCIONAL</h5>
               <ul>

                  <li>
                     <a>
                        Página Inicial
                     </a>
                  </li>
                  <li>
                     <a>
                        Fale Conosco
                     </a>
                  </li>
                  <li>
                     <a>
                        Mapa do Site
                     </a>
                  </li>
                  <li>
                     <a>
                        Quem Somos
                     </a>
                  </li>
                  <li>
                     <a>
                        Onde estamos
                     </a>
                  </li>
                  <li>
                     <a>
                        Indique nossa Loja
                     </a>
                  </li>



               </ul>
            </div>
            <div>
               <h5>Informações uis</h5>
               <ul>

                  <li>
                     <a>
                        Como comprar
                     </a>
                  </li>
                  <li>
                     <a>
                        Termos de uso
                     </a>
                  </li>
                  <li>
                     <a>
                        frete e entrega
                     </a>
                  </li>
                  <li>
                     <a>
                        Garantia dos produtos
                     </a>
                  </li>
                  <li>
                     <a>
                        Segurança
                     </a>
                  </li>
                  <li>
                     <a>
                        Politica de privacidade
                     </a>
                  </li>
               </ul>

            </div>
            <div>
               <h5>Atendimento</h5>

               <p>19 98919-1570 (whatsapp)</p>
               <p>19 99218-3649</p>
               <p>segunda - sexta 09:00 as 18:00</p>
               <span>contato@castorbrinquedos.com.br</span>
            </div>
            <div>
               <h5>Rede social</h5>

               <div>
                  <Facebook width="40px" fill="#fff" />
                  <Instagram width="40" fill="#fff" />
               </div>


            </div>
            <div>
               <h5>Endereço</h5>
               <p>Rua Antonio fonsechi, 391 Satelite ires 2 Campinas.</p>
               <p>CEP: 13059643</p>
               <p>segunda - sexta 09:00 as 18:00</p>
               <span>contato@castorbrinquedos.com.br</span>

            </div>
            <div>
               <h5>Formas de pagamento</h5>
               <p>Crédito </p>
               <p>Débito</p>
               <p>Boleto Bancario</p>
               <p>Deposito em conta / pix</p>

            </div>
            <div>
               <h5>Certificado</h5>
               <Image
                  width="150px"
                  height="50px"
                  src="/certificado.gif"

               />

            </div>
            <div>
               <h5>NEWSLETTER</h5>
               <p>Inscrevase para receber promoções esclusivas.</p>
               <form >
                  <input
                     type="text"
                     placeholder="Seu nome"
                     name=""
                     id="" />
                  <input
                     type="email"
                     placeholder="Seu E-mail"
                     name=""
                     id="" />
                  <button>Eu quero promoção</button>
               </form>

            </div>
            <div className={style.teste}>
               <p>Castor Brinquedos - CNPJ:  xx.xxx.xxx/xxxx-xx</p>
            </div>

         </div>

      </footer>
   );
}

// INSTITUCIONAL
// Página Inicial
// Fale Conosco
// Mapa do Site
// Quem Somos
// Onde estamos
// Indique nossa Loja