import { Separator, Card } from "./"
import salon from '../assets/salon.webp';
import place from '../assets/place.svg';
import staCruz from '../assets/sta_cruz.webp';

export const Location = () => {
  return (
    <section className='relative text-(--color-palette-four) flex gap-3 flex-col p-4 items-center'>
              <Separator src={place} title='Cuándo y dónde' />
              <Card
                title='Ceremonia'
                subtitle='Parroquia de la Santa Cruz Tlacotepec de Benito Juárez Puebla'
                location='C. 5 Nte. 15, Primera Centro, 75680 Tlacotepec de Benito Juárez, Pue.'
                date='14 Junio, 01:00 PM'
                description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, velit rerum illo perferendis praesentium numquam eum, facilis suscipit et mollitia voluptatibus quasi nulla excepturi! Tenetur modi atque animi laborum eaque.'
                link='maps'
                src={staCruz}
              />
              <br />
              <Card
                title='Recepción'
                subtitle='Salón -bungambilias-'
                location='Calle 5 Pte. 51, Segunda Centro, 75680 Tlacotepec de Benito Juárez, Pue.'
                date='14 Junio 2025, 03:00 PM'
                description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis ratione aspernatur, inventore amet deserunt id, possimus quis maxime aut saepe aliquid vel mollitia tenetur quibusdam velit, rerum minima voluptas soluta.'
                link='maps'
                src={salon}
              />
            </section>
  )
}
