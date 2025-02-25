import { Separator, Card } from "./"
import salon from '../assets/salon.webp';
import staCruz from '../assets/sta_cruz.webp';
import { PlaceHeart } from "../icons/PlaceHeart";

export const Location = () => {
  return (
    <section className='relative text-(--color-palette-four) flex gap-3 flex-col p-4 items-center'>
              <Separator element={<PlaceHeart className={{ className: 'w-[2rem] h-[2rem] animate-bounce-infinite' }}/>} title='Cuándo y dónde' />
              <Card
                title='Boda relijiosa'
                subtitle='Parroquia de la Santa Cruz Tlacotepec de Benito Juárez Puebla'
                location='C. 5 Nte. 15, Primera Centro, 75680 Tlacotepec de Benito Juárez, Pue.'
                date='14 Junio, 01:00 PM'
                description=''
                link={{google:'https://maps.app.goo.gl/VUqhA8xXXGyfwNwv9',apple:'https://maps.apple.com/?address=Calle%205%20Norte%2015,%20Segunda,%2075680%20Tlacotepec%20de%20Benito%20Ju%C3%A1rez,%20Pue.,%20Mexico&auid=5648043473343090001&ll=18.682458,-97.653516&lsp=9902&q=Parroquia%20de%20la%20Santa%20Cruz%20Tlacotepec%20de%20Benito%20Juarez&t=m'}}
                src={staCruz}
              />
              <br />
              <Card
                title='Recepción'
                subtitle='Salón Campestre'
                location='16 de Septiembre 216, Cuarta Barrio la Columna, 75687 Tlacotepec de Benito Juárez, Pue.'
                date='14 Junio 2025, 03:00 PM'
                description=''
                link={{google:'https://maps.app.goo.gl/ufRYb3AZAPuwRRxF6',apple:'https://maps.apple.com/?ll=18.658264,-97.651444&q=Marked%20Location&t=h'}}
                src={salon}
              />
            </section>
  )
}
