import prod1 from '/public/images/productos/agurPicsSegundaTanda.png'
import prod2 from '/public/images/productos/agurPicsSegundaTanda-22.png'
import prod3 from '/public/images/productos/agurPicsSegundaTanda-16.png'
import prod4 from '/public/images/productos/agurPicsSegundaTanda-5.png'
import prod5 from '/public/images/productos/agurPicsSegundaTanda-17.png'
import prod6 from '/public/images/productos/agurPicsSegundaTanda-10.png'
import prod7 from '/public/images/productos/agurPicsSegundaTandaB.png'
import prod8 from '/public/images/productos/agurPicsSegundaTanda-13.png'



const PRODUCTOS = [
    
    {
      
      "nombre": 'Bombacha Trusa',
      "precio": 10000,
      "descripcion": 'Bombacha trusa negra de tul y encaje',
      "talle": '3',
      "color": 'Negro',
      "stock": 5,
      "coleccion": 'Trasluz',
      "categoria": ['Bombacha', "Trusa"],
      "imagen": 'https://agurProducts.s3.us-east-005.backblazeb2.com/products/main-trusaNegra01.jpg',
      "galeria": ['https://agurProducts.s3.us-east-005.backblazeb2.com/"galeria"s/trusaNegra02.jpg', 'https://agurProducts.s3.us-east-005.backblazeb2.com/"galeria"s/trusaNegra03.jpg'],
    },
    {
      
      "nombre": 'Bombacha Trusa',
      "precio": 10000,
      "descripcion": 'Bombacha trusa roja y fucsia de tul y encaje',
      "talle": '3',
      "color": 'Rojo',
      "stock": 5,
      "coleccion": 'Trasluz',
      "categoria": ['Bombacha', "Trusa"],
      "imagen": 'https://agurProducts.s3.us-east-005.backblazeb2.com/products/main-conjuntoRojoFucsia01.jpg',
      "galeria": ['https://agurProducts.s3.us-east-005.backblazeb2.com/"galeria"s/conjuntoRojoFucsia02.jpg', 'https://agurProducts.s3.us-east-005.backblazeb2.com/"galeria"s/conjuntoRojoFucsia03.jpg', ],
    },
    {
      
      "nombre": 'Bombacha Trusa',
      "precio": 10000,
      "descripcion": 'Bombacha trusa rosa y natural de tul y encaje',
      "talle": '3',
      "color": 'Rosa',
      "stock": 5,
      "coleccion": 'Trasluz',
      "categoria": ['Bombacha', "Trusa"],
      "imagen": 'https://agurProducts.s3.us-east-005.backblazeb2.com/products/main-conjuntoRosado04.jpg',
      "galeria": ['https://agurProducts.s3.us-east-005.backblazeb2.com/"galeria"s/conjuntoRosado02.jpg', 'https://agurProducts.s3.us-east-005.backblazeb2.com/"galeria"s/conjuntoRosado03.jpg'],
    },
    {
      
      "nombre": 'Bombacha Trusa',
      "precio": 15000,
      "descripcion": 'Bombacha trusa natural y violeta de algodon y encaje',
      "talle": '3',
      "color": 'Natural',
      "stock": 5,
      "coleccion": 'Trasluz',
      "categoria": ['Bombacha', 'Trusa'],
      "imagen": 'https://agurProducts.s3.us-east-005.backblazeb2.com/products/main-trusaAlgodonEncaje03.jpg',
      "galeria": ['https://agurProducts.s3.us-east-005.backblazeb2.com/"galeria"s/trusaAlgodonEncaje01.jpg', 'https://agurProducts.s3.us-east-005.backblazeb2.com/"galeria"s/trusaAlgodonEncaje02.jpg', 'https://agurProducts.s3.us-east-005.backblazeb2.com/"galeria"s/trusaAlgodonEncaje04.jpg'],
    },
    {
      
      "nombre": 'Corpiño Triangulos',
      "precio": 20000,
      "descripcion": 'Corpiño de triangulos negro de tul y encaje con elastico en el escote',
      "talle": '3',
      "color": 'Negro',
      "stock": 5,
      "coleccion": 'Trasluz',
      "categoria": ['Corpiño', 'Triangulos'],
      "imagen": 'https://agurProducts.s3.us-east-005.backblazeb2.com/products/main-corpiNegro01.jpg',
      "galeria": ['https://agurProducts.s3.us-east-005.backblazeb2.com/"galeria"s/corpiNegro02.jpg', 'https://agurProducts.s3.us-east-005.backblazeb2.com/"galeria"s/corpiNegro03.jpg'],
    },
    {
      
      "nombre": 'Corpiño Triangulos',
      "precio": 20000,
      "descripcion": 'Corpiño rojo de triangulos de tul',
      "talle": '3',
      "color": 'Rojo',
      "stock": 5,
      "coleccion": 'Trasluz',
      "categoria": ['Corpiño', 'Triangulos'],
      "imagen": 'https://agurProducts.s3.us-east-005.backblazeb2.com/products/main-corpiEncajeRojo02.jpg',
      "galeria": ['https://agurProducts.s3.us-east-005.backblazeb2.com/"galeria"s/corpiEncajeRojo01.jpg' ],
    },
    {
      
      "nombre": 'Corpiño Triangulos',
      "precio": 25000,
      "descripcion": 'Corpiño de algodon y puntilla rojo y negro',
      "talle": '3',
      "color": 'Negro',
      "stock": 5,
      "coleccion": 'Ensueños',
      "categoria": ['Corpiño', 'Triangulos'],
      "imagen": 'https://agurProducts.s3.us-east-005.backblazeb2.com/products/main-corpiAlgodonRojo01.jpg',
      "galeria": ['https://agurProducts.s3.us-east-005.backblazeb2.com/"galeria"s/corpiEncajeRojo01.jpg'],
    },
    {
      
      "nombre": 'Corpiño Cruzado',
      "precio": 20000,
      "descripcion": 'Corpiño cruzado de tul y encaje en rosa y natural',
      "talle": '3',
      "color": 'Natural',
      "stock": 5,
      "coleccion": 'Trasluz',
      "categoria": ['Corpiño', 'Triangulos'],
      "imagen": 'https://agurProducts.s3.us-east-005.backblazeb2.com/products/main-conjuntoRosado01.jpg',
      "galeria": ['https://agurProducts.s3.us-east-005.backblazeb2.com/"galeria"s/conjuntoRosado02.jpg', 'https://agurProducts.s3.us-east-005.backblazeb2.com/"galeria"s/conjuntoRosado03.jpg'],
    },
  ];

  export default PRODUCTOS;