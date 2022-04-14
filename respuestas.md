Elias Berumen de Haro 

¿Has aplicado los principios SOLID?

La verdad es que intento aplicarlos lo mejor que puedo trato de mejorar mi manera de codificar, cada dia,
y aun sigo aprendiendo a utilizarlos.

¿Cuánto tiempo has estado pensando y escribiendo los tests del código? Si hubieras tenido mucho más tiempo... ¿que habrías añadido?

Los hice pensando en las funcionalidades que iba a agregar en la api, asi que la verdad primero hice las funcionalidades y despues 
hice las pruebas, lo que iba a hacer lo pense unos minutos, teniendo mucho mas tiempo hubiera añadido pruebas para cada filtro, y sus 
combinaciones, tambien hubiera añadido mas pruebas para validacion de la obtencion de datos, pruebas para cada uno de los campos
al momento de agruparlos.

¿Por qué motivo has elegido el lenguaje que has usado para este test?
Por la rapidez con la que se puede desarrollar la api, ademas de su ligereza hablando de librerias, solo instalo las que usare.

¿Cómo mejorarías la API que has usado?
Falta agregarle configuracion de cors, autenticacion de usuario, para que no cualquiera pueda hacer peticiones a la api.

¿Qué framework y lenguaje crees que se ha usado para exponer esta API REST? Consejo: En el protocolo HTTP viaja mucha información
La verdad no lo se

¿Crees que esta API soporta peticiones CORS? ¿Cómo has llegado a esa conclusión?
Si soporta peticiones cors porque permite que se le hagan peticiones de distintos origenes, que deben de estar
en una whitelist.

¿En qué infraestructura crees que está alojada la API? ¿Por qué crees que hemos tomado esa decisión?
Creo que se uso algun servicio de cloud de amazon para el backend, pienso que se ha tomado esa decision, porque
los servidores de amazon son muy rapidos, y no te tienes que preocupar por seguridad, ellos mismos manejan 
todos esos temas.

¿Cómo rastrearías un problema de rendimiento en producción? ¿Alguna vez has tenido que hacerlo?
En mi experiencia los problemas de rendimiento que he visto ha sido por hacer malas consultas a la base de datos
o hacer procesamiento de datos que involucran muchos datos y las funciones son lentas, por ejemplo funciones donde
utilizan loops for anidados y cosas por el estilo.
Para darle solucion lo que hice fue cambiar la función mejorando la consulta a la base de datos porque la obtencion
de datos directo de postgres o sql es mucho mas rapida, entonces mi solucion seria o cambiar las funciones en el backend
o cambiar la consulta que se esta utilizando.

Descríbete a ti mismo usando JSON.
{
    yo:{
        nombre:"Elias Berumen de Haro",
        edad:31
        carreraUniversitaria: "Ingenierio en electrónica",
        ocupacionActual: "Desarrollador de Backend",
        pros:["gusto por aprender nuevas tecnologias","perseverancia","tolerancia", "responsabilidad","respeto"],
        metas:["seguir mejorando como programador", "tener una buena economia", "aprender machine learning"],
        lenguajesProgramacionUtilizados:["javascript","python","C#","php","C++"],
        hobbies:["leer","ver peliculas y series","futbol","video juegos","tecnología"]
    }
}