import styles from './talles.module.css'
import Image from 'next/image';
import busto from '../../public/images/contornoBusto.png'
import bajoBusto from '../../public/images/bajoBusto.png'
import tiro from '../../public/images/tiro.png'
import radio from '../../public/images/radio.png'
import cadera from '../../public/images/cadera.png'
import Container from 'Components/Container/Container';


const TablaTalles = () => {

  return (

    <div className={styles.divTalles}>
      <h3>Cual es mi talle?</h3>
      <p>Esta es mi propuesta de talles, sirve a modo de guía para saber qué talle es para vos dentro de los productos del sitio</p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Medidas</th>
            <th>Talle 1</th>
            <th>Talle 2</th>
            <th>Talle 3</th>
            <th>Talle 4</th>
            <th>Talle 5</th>
            <th>Talle 6</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Busto</th>
            <td>80-85</td>
            <td>90-95</td>
            <td>100-105</td>
            <td>110-115</td>
            <td>120-125</td>
            <td>130-135</td>
          </tr>
          <tr>
            <th>Bajo Busto</th>
            <td>75-85</td>
            <td>80-90</td>
            <td>85-95</td>
            <td>85-95</td>
            <td>90-100</td>
            <td>95-105</td>
          </tr>
          <tr>
            <th>Radio</th>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
            <td>13</td>
          </tr>
          <tr>
            <th>Cadera</th>
            <td>90-95</td>
            <td>100-105</td>
            <td>110-115</td>
            <td>120-125</td>
            <td>130-135</td>
            <td>140-145</td>
          </tr>
          <tr>
            <th>Alto de Tiro</th>
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td>30</td>
            <td>31</td>
            <td>32</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.tallesContainer}>
        <div>
          <h4>Busto se mide así:</h4>
          <Image
            src={bajoBusto}
            alt='Imagen no disponible' />

        </div>
        <div>
          <h4>Bajo busto se mide así:</h4>
          <Image
            src={busto}
            alt='Imagen no disponible' />
        </div>
        <div>
          <h4>Cadera se mide así:</h4>
          <Image
            src={cadera}
            alt='Imagen no disponible' />
        </div>
      </div>
      <div className={styles.tallesContainerB}>
        <div>
          <h4>Radio se mide así:</h4>
          <Image
            src={radio}
            alt='Imagen no disponible' />
        </div>
        <div>
          <h4>Alto de tiro se mide así:</h4>
          <Image
            src={tiro}
            alt='Imagen no disponible' />
        </div>
      </div>
    </div>

  )
}

export default TablaTalles;