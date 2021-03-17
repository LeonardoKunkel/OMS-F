import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e11-plan-mantenimiento',
  templateUrl: './e11-plan-mantenimiento.page.html',
  styleUrls: ['./e11-plan-mantenimiento.page.scss'],
})
export class E11PlanMantenimientoPage implements OnInit {

  array:any=[
    {
      topic:'Plan de Mantenimiento del Sistema de Almacenamiento',
      team:{
        first:'Tanque',
        second:[
          {
            name:'Contenedor Primario',
            item:[
              {
                act:'Medir agua físicamente y drenar el agua cuando se detecte',
                frec:'Mensual'
              },
              {
                act:'Realizar Limpieza de tanque cuando presente alto contenido de sólidos el producto.',
                frec:'10 años'
              },
              {
                act:'Pruebas de hermeticidad laboratorio de pruebas acreditado',
                frec:'Anual'
              },
              {
                act:'Realizar calibración volumétrica del tanque',
                frec:'10 años'
              }
            ]
          },
          {
            name:'Contenedor secundario',
            item:[
              {
                act:'Probar el sensor de líquidos (Alarma visual y sonora)',
                frec:'30 días'
              }
            ]
          },
          {
            name:'Contenedor Espacio Anular',
            item:[
              {
                act:'Verificar que sea hermético y que no esté fracturado, que cuente con tapa y empaque, el tubo del sensor con tapa y empaque.',
                frec:'30 días'
              },
              {
                act:'Verificar estado de tubería Conduit, cajas de conexiones con tapas y glándula, los sellos EYS con tapón y cemento sellador.',
                frec:'30 días'
              }
            ]
          },
          {
            name:'Motobombas y bombas de transferencia',
            item:[
              {
                act:'Revisar condiciones de operación, voltajes, estado de capacitor, limpieza de conexiones y caja registros eléctricos, y la conexión a tierra física.',
                frec:'30 días'
              },
              {
                act:'Revisar integridad mecánica (pintura, oxidación) y contención de producto.',
                frec:'30 días'
              },
              {
                act:'Verificar que el sensor mecánico de fugas esté conectado',
                frec:'30 días'
              },
              {
                act:'Verificar que no presente ruidos extraños o vibración durante la operación.',
                frec:'30 días'
              }
            ]
          },
          {
            name:'Contenedor de bomba sumergible y de accesorios',
            item:[
              {
                act:'Revisar que esté limpio y seco, que los, empaques (botas), estén ajustados, que sea hermético (que no presente fracturas).',
                frec:'30 días'
              },
              {
                act:'Probar el sensor de líquidos (verificar alarma visual y sonora) y que se esté a 1 cm. del piso.',
                frec:'30 días'
              },
              {
                act:'La válvula de cierre rápido debe mantener la contención y no debe presentar oxidación.',
                frec:'30 días'
              },
              {
                act:'La válvula de cierre rápido debe mantener la contención y no debe presentar oxidación.',
                frec:'30 días'
              },
              {
                act:'La tubería flexible no debe estar deformada, oxidada y debe mantener la contención.',
                frec:'30 días'
              },
              {
                act:'Verificar del estado de la tapa metálica hermética ',
                frec:'30 días'
              },
              {
                act:'Pintura y rotulado de acuerdo con el producto.',
                frec:'6 meses'
              }
            ]
          },
          {
            name:'Válvula de prevención de sobrellenado',
            item:[
              {
                act:'Verificar que la válvula esté completa y que tenga el tubo de extensión hasta el fondo.',
                frec:'6 meses'
              },
              {
                act:'Verificar funcionamiento de flotador interno',
                frec:'6 meses'
              },
              {
                act:'Verificar que la válvula esté hermética',
                frec:'6 meses'
              },
              {
                act:'Verificar que su ubicación impida que el tanque se sobrellene arriba del 95% de su capacidad total.',
                frec:'6 meses'
              }
            ]
          },
          {
            name:'Contenedor de derrame en boquilla de llenado',
            item:[
              {
                act:'Verificar que sea hermético y que no esté fracturado, que cuente con tapa y empaque, el tubo del sensor con tapa y empaque',
                frec:'30 días'
              },
              {
                act:'Verificar que cuente con sus respectiva tapa y empaque que permita el sellado hermético',
                frec:'30 días'
              },
              {
                act:'Verificar que la válvula de drenado se encuentre funcionando.',
                frec:'30 días'
              },
              {
                act:'Verificar que el cople de bronce cuente con su tapa Duratuf de 4" completa con empaque y hermética.',
                frec:'30 días'
              },
              {
                act:'Pintura y rotulado de acuerdo con el producto.',
                frec:'6 meses'
              }
            ]
          },
          {
            name:'Contenedor del sistema de Control de inventarios',
            item:[
              {
                act:'Verificar que sea hermético y que no esté fracturado, que cuente con tapa y empaque, el tubo del sensor con tapa y empaque,',
                frec:'30 días'
              },
              {
                act:'Verificar que el tubo de la sonda cuente con su tapa y empaque.',
                frec:'30 días'
              },
              {
                act:'Verificar estado de tubería Conduit, cajas de conexiones con tapas y glándula, los sellos EYS con tapón y cemento sellador.',
                frec:'30 días'
              }
            ]
          },
          {
            name:'Registro de purga',
            item:[
              {
                act:'Verificar que sea hermético y que no esté fracturado, que cuente con tapa y empaque, el tubo del sensor con tapa y empaque.',
                frec:'30 días'
              }
            ]
          },
          {
            name:'Entrada hombre',
            item:[
              {
                act:'Verificar empaque y tornillería completa, y que esté pintada.',
                frec:'30 días'
              }
            ]
          }
        ]
      }
    }, //Second Topic
    {
      topic:'Sistema de Almacenamiento.',
      team:{
        first:'Tanque',
        second:[
          {
            name:'Contenedor de derrame conector recuperación de vapores',
            item:[
              {
                act:'Verificar que sea hermético y que no esté fracturado, que cuente con tapa y empaque, el tubo del sensor con tapa y empaque,',
                frec:'30 días'
              },
              {
                act:'Verificar válvula check de 3" que cierre herméticamente, que cuente con su tapa y empaque.',
                frec:'30 días'
              },
              {
                act:'Pintura y rotulado de acuerdo con el producto.',
                frec:'30 días'
              },
              {
                act:'Pintura y rotulado de acuerdo con el producto',
                frec:'90 días'
              }
            ]
          },
          {
            name:'Venteo normal',
            item:[
              {
                act:'Verificar que mantenga su integridad mecánica, que se encuentre conectado a tierra',
                frec:''
              },
              {
                act:'Verificar que las válvulas de presión y vació estén limpias, libres de obstrucciones y que mantengan su integridad mecánica.',
                frec:'120 días'
              },
              {
                act:'Verificar que las válvulas de presión y vació estén limpias, libre de obstrucciones y que mantengan su integridad mecánica.',
                frec:'120 días'
              }
            ]
          },
          {
            name:'Equipo sistema de control de inventarios',
            item:[
              {
                act:'Obtener un reporte impreso de los datos de los tanques que la consola del equipo señale, respecto a nivel de producto y agua. ',
                frec:'30 días'
              },
              {
                act:'Se verifica que el equipo del sistema de control de inventarios identifique correctamente el tanque de almacenamiento',
                frec:'30 días'
              },
              {
                act:'Verificar que indique el nivel del producto y de agua.',
                frec:'30 días'
              }
            ]
          },
          {
            name:'Pozos de observación',
            item:[
              {
                act:'Verifica que el sello que se localiza alrededor del tubo, en la parte superior del pozo sea hermético y no presente filtraciones.',
                frec:'30 días'
              },
              {
                act:' Verificar que la parte superior metálica del registro esté sellada con cemento pulido y material epóxico para evitar la infiltración de agua o líquido.',
                frec:'30 días'
              },
              {
                act:'Si cuenta con sensor de líquidos realizar prueba de funcionamiento (Alarma visual y sonora) ',
                frec:'30 días'
              },
              {
                act:'Si cuenta con sensor verificar estado de tubería Conduit, cajas de conexiones con tapas y glándula, los sellos EYS con tapón y cemento sellador.',
                frec:''
              },
              {
                act:'Que la tapa esté pintada y rotulada.',
                frec:'90 días'
              }
            ]
          },
          {
            name:'Conectores rápidos y mangueras ',
            item:[
              {
                act:'Verificar que las mangueras y conectores no estén golpeados o dañados y que esté   ensambladas conforme a las recomendaciones y especificaciones del fabricante. ',
                frec:'30 días'
              },
              {
                act:'Verificar que los accesorios estén completos y se ajusten herméticamente a las boquillas de las mangueras.',
                frec:'30 días'
              }
            ]
          }
        ]
      }
    },//new topic //Second Topic
    {
      topic:'Plan de Mantenimiento de Sistemas de Conducción.',
      team:{
        first:'Conducción de agua',
        second:[
          {
            name:'Tubería',
            item:[
              {
                act:'Verificar que esté libre de fugas',
                frec:'30 días'
              }
            ]
          },
          {
            name:'Bombas de agua',
            item:[
              {
                act:'Las bombas de agua para servicio o diversas instalaciones deben funcionar conforme a las especificaciones del fabricante.',
                frec:'30 días'
              },
              {
                act:'Cuando aplique, las bombas de Agua del sistema contra incendio deben funcionar conforme a las especificaciones del fabricante y lo establecido en el Código NFPA 20, o Código o Norma que lo modifique o sustituya.',
                frec:'1 día'
              }
            ]
          },
          {
            name:'Tinacos y cisternas',
            item:[
              {
                act:'Realizar limpieza ',
                frec:'365 días'
              },
              {
                act:'Verificar que no presenten fugas y se comprueba el funcionamiento.',
                frec:'30 días'
              }
            ]
          },
          {
            name:'Válvula de bloqueo',
            item:[
              {
                act:'Verificar cierre, hermeticidad y que no presente fugas.',
                frec:'30 días'
              }
            ]
          },
          {
            name:'Trincheras',
            item:[
              {
                act:'Verificar condiciones, libre de basura y agua',
                frec:'30 días'
              }
            ]
          },
          {
            name:'Toma de la red',
            item:[
              {
                act:'Verificar que no presenten fugas.',
                frec:'30 días'
              }
            ]
          },
          {
            name:'Válvula Check',
            item:[
              {
                act:'Verificar cierre, hermeticidad y que no presente fugas.',
                frec:'30 días'
              }
            ]
          }
        ]
      }
    },//new topic //Second Topic
    {
      topic:'Plan de Mantenimiento del Sistema de Despacho',
      team:{
        first:'',
        second:[
          {
            name:'Filtros',
            item:[
              {
                act:'Verificar condiciones y sustituir los filtros cuando se encuentran saturados. (perdida de flujo)',
                frec:'30 días'
              }
            ]
          },
          {
            name:'Gabinete accesorio, Mangueras de despacho y Válvulas de corte rápido (break-away',
            item:[
              {
                act:'Limpieza de dispensarios por el exterior, mangueras y pistolas de despacho.',
                frec:'1 día'
              },
              {
                act:'Verificar que se encuentre conectado a tierra',
                frec:'30 días'
              },
              {
                act:'Verificar que la instalación eléctrica a prueba de explosión mantenga su integridad eléctrica.',
                frec:'30 días'
              },
              {
                act:'Verificar que la tubería flexible, tubería rígida y válvula de cierre rápido mantenga su integridad mecánica y la contención del producto.',
                frec:'30 días'
              },
              {
                act:'Comprobar que no presentan daños, o cuarteaduras que permitan fuga de producto o vapores, así como falta de integridad mecánica en sus conexiones.',
                frec:'30 días'
              },
              {
                act:'Comprobar que al presurizar las líneas de combustibles no existan falta de contención en conexiones y mangueras.',
                frec:'30 días'
              },
              {
                act:'Comprobar que no tengan aire las líneas y mangueras de combustibles.',
                frec:'30 días'
              },
              {
                act:'Se verificar que funcionen de acuerdo con las recomendaciones y especificaciones del fabricante, si es reconectable realizar cambio de o-rings de acuerdo con recomendaciones de fabricante',
                frec:'30 días'
              }
            ]
          },
          {
            name:'Pistolas para el despacho de combustibles',
            item:[
              {
                act:'Verificar que las pistolas no presenten fuga por la boquilla al suspender el despacho de combustible',
                frec:'30 días'
              },
              {
                act:'Verificar que realice paro automático, en caso de que no ocurra, proceder a sustituir la boquilla.',
                frec:'30 días'
              },
              {
                act:'Verificar que la guarda se encuentre en buen estado sin daños.',
                frec:'30 días'
              }
            ]
          },
          {
            name:'Destorcedor',
            item:[
              {
                act:'Verificar que no existan fugas y que mantenga su integridad mecánica.',
                frec:'30 días'
              }
            ]
          },
          {
            name:'Anclaje en basamento',
            item:[
              {
                act:'Verificar el sistema de anclaje y los elementos de sujeción, constatando que no esté suelto el dispensario.',
                frec:'30 días'
              }
            ]
          },
          {
            name:'Válvula de corte rápido shut off y termo fusible de acción mecánica, Contenedor de derrames',
            item:[
              {
                act:'Accionar el brazo para verificar sellos en compuerta. Revisar que el punto de ruptura esté correctamente colocado y que opere adecuadamente.',
                frec:'30 días'
              },
              {
                act:'Verificar que retirar el seguro de la válvula shut-off de la tubería, deje de fluir combustible al dispensario.',
                frec:'30 días'
              },
              {
                act:'Verificar que se encuentre debidamente anclada, soportaría completa y tornillos en buen estado.',
                frec:'30 días'
              },
              {
                act:'Verificar que mantenga su integridad mecánica.',
                frec:'30 días'
              },
              {
                act:'Realizar limpieza del interior',
                frec:'30 días'
              },
              {
                act:'Verificar que esté libre de líquidos y de basura.',
                frec:'30 días'
              },
              {
                act:'Verificar que las conexiones eléctricas y mecánicas estén en buen estado.',
                frec:'30 días'
              },
              {
                act:'Sellos mecánicos (botas) bien colocados, completos y herméticos.',
                frec:'30 días'
              },
              {
                act:'Verificar el funcionamiento del sensor y comprobar que alarme en el equipo de control de inventarios, limpieza y que se encuentre en posición correcta a 1 cm. Del piso del contenedor.',
                frec:'30 días'
              }
            ]
          },
          {
            name:'Protectores ',
            item:[
              {
                act:'Verificar que no se encuentren dañados o golpeados',
                frec:'30 días'
              }
            ]
          }
        ]
      }
    },//new topic //Second Topic
    {
      topic:'Plan de Mantenimiento de Señalamientos',
      team:{
        first:'Señales y avisos',
        second:[
          {
            name:'Verticales',
            item:[
              {
                act:'Verificar ubicación correcta',
                frec:'120 días'
              },
              {
                act:'Verificar que estén fijos',
                frec:'120 días'
              },
              {
                act:'Verificar que estén visibles, completos y en buen estado.',
                frec:'120 días'
              }
            ]
          },
          {
            name:'Marcaje horizontal en pavimentos',
            item:[
              {
                act:'Verificar que el marcaje horizontal esté visibles y completos',
                frec:'120 días'
              }
            ]
          }
        ]
      }
    },//new topic //Second Topic
    {
      topic:'Plan de Mantenimiento de Señalamientos',
      team:{
        first:'Señales y avisos',
        second:[
          {
            name:'Verticales',
            item:[
              {
                act:'Verificar ubicación correcta',
                frec:'120 días'
              },
              {
                act:'Verificar que estén fijos',
                frec:'120 días'
              },
              {
                act:'Verificar que estén visibles, completos y en buen estado.',
                frec:'120 días'
              }
            ]
          },
          {
            name:'Marcaje horizontal en pavimentos',
            item:[
              {
                act:'Verificar que el marcaje horizontal esté visibles y completos',
                frec:'120 días'
              }
            ]
          }
        ]
      }
    },//new topic //Second Topic
    {
      topic:'Plan de mantenimiento del Sistema Eléctrico',
      team:{
        first:'Instalaciones eléctricas',
        second:[
          {
            name:'Sistema de Pararrayos (tanques no confinados)',
            item:[
              {
                act:'En la revisión de las conexiones y cableado, se debe vigilar que estén libres de óxido, pintura y grasa, que sean de material conductor y no presenten daños mecánicos, y que mantengan la continuidad eléctrica.',
                frec:'1 año'
              },
              {
                act:'Realiza las mediciones sistema de pararrayos.',
                frec:'1 año'
              },
              {
                act:'Realizar medición de resistividad de la red de puesta a tierra que se obtengan en esta prueba deben estar comprendidos entre 0 y 25 ohm.',
                frec:'1 año'
              }
            ]
          },
          {
            name:'Tablero del centro de control de motores',
            item:[
              {
                act:'Verificar que no falte tornillería y limpieza con dieléctrico, que cuente con sus tapas y tornilleria, que se encuentre conectado a tierra.',
                frec:'30 días'
              }
            ]
          },
          {
            name:'Interruptores manuales',
            item:[
              {
                act:'Verificar el funcionamiento de interruptores de circuitos de fuerza e iluminación desde los tableros. Corregir en caso de falla.',
                frec:'30 días'
              }
            ]
          },
          {
            name:' Relevadores, arrancadores, capacitores y reguladores',
            item:[
              {
                act:'Verificar funcionamiento',
                frec:'30 días'
              }
            ]
          },
          {
            name:'Fotoceldas',
            item:[
              {
                act:'Verificar funcionamiento',
                frec:'30 días'
              }
            ]
          },
          {
            name:'Contactos',
            item:[
              {
                act:'Verificar estado y comprobar voltaje',
                frec:'30 días'
              }
            ]
          },
          {
            name:'Contactos Control eléctrico de sistemas de medición ',
            item:[
              {
                act:'Verificar estado y comprobar voltaje',
                frec:'30 días'
              }
            ]
          },
          {
            name:'Control sistema electrónico de detección de fugas',
            item:[
              {
                act:'Verificar funcionamiento de los sensores',
                frec:'30 días'
              },
              {
                act:'Verificar que las alimentaciones eléctricas son las adecuadas de acuerdo con el diseño de la ingeniería y sean acordes a la clasificación de áreas',
                frec:'30 días'
              },
              {
                act:'Verificar que operen las alarmas audibles y/o visibles',
                frec:'30 días'
              }
            ]
          },
          {
            name:'Alumbrado',
            item:[
              {
                act:'Verificar focos fundidos reemplazar en caso necesario',
                frec:'30 días'
              }
            ]
          },
          {
            name:'Iluminación',
            item:[
              {
                act:'Verificar focos fundidos reemplazar en caso necesario',
                frec:'30 días'
              }
            ]
          },
          {
            name:'Anuncios',
            item:[
              {
                act:'Verificar focos fundidos reemplazar en caso necesario',
                frec:'30 días'
              }
            ]
          },
          {
            name:'Interruptores de emergencia',
            item:[
              {
                act:'Verificar que se encuentre firmemente sujeto en el lugar donde está instalado y que el pulsador o botón tipo hongo no esté flojo o roto.',
                frec:'30 días'
              },
              {
                act:'Verificar el paro de emergencia esté operable, que, al activar los interruptores de emergencia, se corte el suministro de energía eléctrica a todos los circuitos de fuerza.',
                frec:'30 días'
              },
              {
                act:'Verificar que la falla eléctrica el de Paro de Emergencia sus elementos se vayan a posición segura.',
                frec:'30 días'
              }
            ]
          },
          {
            name:'Tierras físicas',
            item:[
              {
                act:'Verificar que las conexiones y cableado estén libres de óxido, pintura y grasa, que sean de material conductor y no presenten daños mecánicos, y que mantengan la continuidad eléctrica.',
                frec:'1 año'
              },
              {
                act:'Realiza las mediciones del sistema de puesta a tierra.',
                frec:'1 año'
              },
              {
                act:'Verificar que los valores de la resistencia de la red de puesta a tierra que se obtengan en esta prueba sean de un valor no mayor a 10 ohm, con objeto de drenar a tierra las corrientes generadas por las cargas eléctricas estáticas.',
                frec:'1 año'
              }
            ]
          }
        ]
      }
    },//new topic //Second Topic
    {
      topic:'Sistema de mantenimiento eléctrico',
      team:{
        first:'Instalación a prueba de explosión',
        second:[
          {
            name:'Tubería Conduit',
            item:[
              {
                act:'Verificar condiciones ',
                frec:'150 días'
              }
            ]
          },
          {
            name:'Tapas y cajas',
            item:[
              {
                act:'Verificar condiciones, empaques en buen estado y la correcta colocación de tornillos.',
                frec:'150 días'
              }
            ]
          },
          {
            name:'Conexión de equipos',
            item:[
              {
                act:'Verificar condiciones ',
                frec:'150 días'
              }
            ]
          },
          {
            name:'Coples flexibles',
            item:[
              {
                act:'Verificar condiciones ',
                frec:'150 días'
              },
            ]
          },
          {
            name:'Sellos de EYE´s',
            item:[
              {
                act:'Verificar condiciones, (rellenos con cemento compound) que no falten tapas, tapones y sellos.',
                frec:'150 días'
              }
            ]
          },
        ]
      }
    },//new topic //Second Topic
    {
      topic:'Sistema de mantenimiento eléctrico',
      team:{
        first:'Instalaciones especiales (opcionales)',
        second:[
          {
            name:'Aire acondicionado',
            item:[
              {
                act:'limpieza de serpentín evaporador y condensadora, cambio de filtros y revisión de presiones ',
                frec:'90 días'
              }
            ]
          },
          {
            name:'Teléfono',
            item:[
              {
                act:'Verificación de funcionamiento de aparatos telefónicos',
                frec:'30 días'
              }
            ]
          },
          {
            name:'Circuito cerrado de televisión',
            item:[
              {
                act:'Verificación de funcionamiento de cámaras y monitores',
                frec:'30 días'
              }
            ]
          },
        ]
      }
    },
    {
      topic:'Sistema de mantenimiento eléctrico',
      team:{
        first:'Acometida',
        second:[
          {
            name:'Acometida',
            item:[
              {
                act:'Verificación de puntas y esto de conexiones.',
                frec:''
              }
            ]
          },
          {
            name:'Transformador',
            item:[
              {
                act:'Verificación de puntas y calentamiento.',
                frec:'anual'
              }
            ]
          }
        ]
      }
    },
    {
      topic:'Plan de Mantenimiento de Pavimentos',
      team:{
        first:'Pavimentos',
        second:[
          {
            name:'Pisos de circulación',
            item:[
              {
                act:'Verificar que no existan fracturas o fisuras en pisos de zonas de carga y descarga ',
                frec:'90 días'
              },
              {
                act:'Verificar que exista el material sellador en las juntas de expansión',
                frec:'90 días'
              },
              {
                act:'Verificar que no existan baches, los cuales deben ser reparados.',
                frec:'90 días'
              }
            ]
          },
          {
            name:'Rampas',
            item:[
              {
                act:'Verificar que no existan fracturas o fisuras en pisos de zonas de carga y descarga  ',
                frec:'90 días'
              },
              {
                act:'Verificar que exista el material sellador en las juntas de expansión',
                frec:'90 días'
              },
              {
                act:'Verificar que estén señaladas',
                frec:'90 días'
              }
            ]
          },
          {
            name:'Guarniciones',
            item:[
              {
                act:'Verificar integridad (que no estén dañadas)',
                frec:'90 días'
              },
              {
                act:'Aplicación de recubrimiento',
                frec:'90 días'
              }
            ]
          },
          {
            name:'Estacionamientos',
            item:[
              {
                act:'Verificar que no existan baches, los cuales deben ser reparados.',
                frec:'90 días'
              },
              {
                act:'Verificar que estén señalados',
                frec:'90 días'
              }
            ]
          },
          {
            name:'carriles de acceso y salida (carreteras)',
            item:[
              {
                act:'Verificar que no existan baches, los cuales deben ser reparados.',
                frec:'90 días'
              },
              {
                act:'Verificar que estén señalados',
                frec:'90 días'
              }
            ]
          },
          {
            name:'Islas ',
            item:[
              {
                act:'Verificar que exista el material sellador en las juntas de expansión',
                frec:'90 días'
              },
              {
                act:'Aplicación de recubrimiento en guarnición',
                frec:'90 días'
              },
              {
                act:'Verificar que no existan fracturas o fisuras en pisos ',
                frec:'90 días'
              }
            ]
          }
        ]
      }
    },
    {
      topic:'Plan de Mantenimiento del Sistema de Drenajes',
      team:{
        first:'Aceitoso',
        second:[
          {
            name:'Tubería',
            item:[
              {
                act:'Mantener limpios y libres de cualquier obstrucción, y que permita el flujo hacia los sistemas de drenaje municipal o pozos de absorción.',
                frec:'30 días'
              }
            ]
          },
          {
            name:'Registros',
            item:[
              {
                act:'Mantener limpios y libres de cualquier obstrucción, y que permita el flujo hacia los sistemas de drenaje municipal o pozos de absorción.',
                frec:'30 días'
              },
              {
                act:'Desazolvar drenajes.',
                frec:'90 días'
              }
            ]
          },
          {
            name:'Rejillas metálicas',
            item:[
              {
                act:'Revisión que no estén dañados, que estén a la medida del registro.',
                frec:'30 días'
              },
              {
                act:'Retirar rejillas y lavar con agua y productos biodegradables.',
                frec:'30 días'
              }
            ]
          },
          {
            name:'Trampas de combustibles',
            item:[
              {
                act:'Verificar que la trampa de gasolina y diésel se conserve libre de Hidrocarburos y se encuentre en condiciones de operación. ',
                frec:'1 día'
              },
              {
                act:' Realizar revisión y hacer limpieza de trampas de combustibles y de grasas, cuando se requiera lavar con agua y productos biodegradables y recolectar los residuos flotantes en un tambor cerrado, el cual debe de tener un letrero señalando el producto que contiene en uno de sus costados y la leyenda o aviso que alerte de la peligrosidad del mismo y lodos en depósitos de cierre hermético.',
                frec:'1 día'
              }
            ]
          },
          {
            name:'Sistema separador de grasas y combustibles (opcional)',
            item:[
              {
                act:'Realizar revisión y hacer limpieza al sistema separador de grasas y combustibles, cuando se requiera lavar con agua y productos biodegradables y recolectar los residuos flotantes en un tambor cerrado, el cual debe de tener un letrero señalando el producto que contiene en uno de sus costados y la leyenda o aviso que alerte de la peligrosidad de este y lodos en depósitos de cierre hermético.',
                frec:'1 día'
              }
            ]
          },
          {
            name:'Sistema de aprovechamiento y reúso de aguas residuales',
            item:[
              {
                act:'Verificar que las diversas instalaciones deben funcionar conforme a las especificaciones del fabricante.',
                frec:'1 día'
              }
            ]
          },
          {
            name:'Colector Municipal',
            item:[
              {
                act:'Verificar que el colector municipal se conserve libre de Hidrocarburos y se encuentre en condiciones de operación. ',
                frec:'1 día'
              }
            ]
          }
        ]
      }
    },
    {
      topic:'Plan de Mantenimiento del Sistema de Drenajes',
      team:{
        first:'Pluvial',
        second:[
          {
            name:'Tubería ',
            item:[
              {
                act:'Mantener limpios y libres de cualquier obstrucción, y que permita el flujo hacia los sistemas de drenaje municipal o pozos de absorción.',
                frec:'30 días'
              }
            ]
          },
          {
            name:'Registros',
            item:[
              {
                act:'Mantener limpios y libres de cualquier obstrucción, y que permita el flujo hacia los sistemas de drenaje municipal o pozos de absorción.',
                frec:'30 días'
              }
            ]
          },
          {
            name:'Rejillas metálicas',
            item:[
              {
                act:'Revisión que no estén dañados, que estén a la medida del registro.',
                frec:'30 días'
              },
              {
                act:'Retirar rejillas y lavar con agua y productos biodegradables.',
                frec:'30 días'
              }
            ]
          },
        ]
      }
    },
    {
      topic:'Plan de Mantenimiento de áreas verdes',
      team:{
        first:'Áreas verdes',
        second:[
          {
            name:'Plantas árboles',
            item:[
              {
                act:'Se podan plantas y árboles para que no obstruyan cables, canaletas, ni presionen sobre techos o muros, ni sean un peligro para la zona de seguridad.',
                frec:'30 días'
              }
            ]
          },
          {
            name:'Jardinería',
            item:[
              {
                act:'Verificación a jardineras, limpieza en general, remoción de tierra, plantas, flores secas y riego con agua',
                frec:'30 días'
              }
            ]
          }
        ]
      }
    },
    {
      topic:'Edificios',
      team:{
        first:'Edificios',
        second:[
          {
            name:'Oficinas',
            item:[
              {
                act:'Aplicación de recubrimiento a interiores y exteriores',
                frec:'365 días'
              },
              {
                act:'Verificar estado de Impermeabilización de azoteas',
                frec:'365 días'
              },
              {
                act:'Verificar canaletas y bajadas de agua pluvial no estén obstruidas o dañadas',
                frec:'90 días'
              },
              {
                act:'Verificar que los elementos metálicos no presenten oxidación',
                frec:'90 días'
              },
              {
                act:'Verificar el funcionamiento de puertas y ventanas (cerraduras y herrajes).',
                frec:'90 días'
              }
            ]
          },
          {
            name:'Casetas',
            item:[
              {
                act:'Aplicación de recubrimiento interiores y exteriores',
                frec:'365 días'
              },
              {
                act:'Impermeabilización de azoteas',
                frec:'365 días'
              },
              {
                act:'Verificar canaletas y bajadas de agua pluvial no estén obstruidas o dañadas',
                frec:'90 días'
              },
              {
                act:'Verificar que los elementos metálicos no presenten oxidación',
                frec:'90 días'
              },
              {
                act:'Verificar el funcionamiento de puertas y ventanas (cerraduras y herrajes).',
                frec:'90 días'
              }
            ]
          },
          {
            name:'Cuarto de sucios',
            item:[
              {
                act:'Aplicación de recubrimiento a interiores y exteriores',
                frec:'365 días'
              },
              {
                act:'Impermeabilización de azoteas',
                frec:'365 días'
              },
              {
                act:'Verificar canaletas y bajadas de agua pluvial no estén obstruidas o dañadas',
                frec:'90 días'
              },
              {
                act:'Verificar que los elementos metálicos no presenten oxidación',
                frec:'90 días'
              },
              {
                act:'Verificar el funcionamiento de puertas y ventanas incluyendo cerraduras y herrajes.',
                frec:'365 días'
              }
            ]
          },
          {
            name:'Almacén de residuos peligrosos',
            item:[
              {
                act:'Aplicación de recubrimiento a interiores y exteriores',
                frec:'365 días'
              },
              {
                act:'Impermeabilización de azoteas',
                frec:'365 días'
              },
              {
                act:'Verificar canaletas y bajadas de agua pluvial no estén obstruidas o dañadas',
                frec:'90 días'
              },
              {
                act:'Verificar que los elementos metálicos no presenten oxidación',
                frec:'90 días'
              },
              {
                act:'Verificar el funcionamiento de puertas y ventanas incluyendo cerraduras y herrajes.',
                frec:'90 días'
              }
            ]
          },
          {
            name:'Cuarto de control eléctrico',
            item:[
              {
                act:'Aplicación de recubrimiento a interiores y exteriores',
                frec:'365 días'
              },
              {
                act:'Impermeabilización de azoteas',
                frec:'365 días'
              },
              {
                act:'Verificar canaletas y bajadas de agua pluvial no estén obstruidas o dañadas',
                frec:'90 días'
              },
              {
                act:'Verificar que los elementos metálicos no presenten oxidación',
                frec:'90 días'
              },
              {
                act:'Verificar el funcionamiento de puertas y ventanas incluyendo cerraduras y herrajes.',
                frec:'90 días'
              }
            ]
          },
          {
            name:'Cuarto de máquinas',
            item:[
              {
                act:'Aplicación de recubrimiento a interiores y exteriores',
                frec:'365 días'
              },
              {
                act:'Impermeabilización de azoteas',
                frec:'365 días'
              },
              {
                act:'Verificar canaletas y bajadas de agua pluvial no estén obstruidas o dañada',
                frec:'90 días'
              },
              {
                act:'Verificar que los elementos metálicos no presenten oxidación',
                frec:'90 días'
              },
              {
                act:'Verificar el funcionamiento de puertas y ventanas incluyendo cerraduras y herrajes.',
                frec:'90 días'
              }
            ]
          },
          {
            name:'Baños',
            item:[
              {
                act:'Aplicación de recubrimiento a interiores y exteriores',
                frec:'365 días'
              },
              {
                act:'mpermeabilización de azoteas',
                frec:'365 días'
              },
              {
                act:'Verificar canaletas y bajadas de agua pluvial no estén obstruidas o dañadas',
                frec:'90 días'
              },
              {
                act:'Verificar que los elementos metálicos no presenten oxidación',
                frec:'90 días'
              },
              {
                act:'Verificar el funcionamiento de puertas y ventanas incluyendo cerraduras y herrajes.',
                frec:'90 días'
              },
              {
                act:'Verificación la no existencia de fugas de agua en WC´s mingitorios y lavabos',
                frec:'90 días'
              }
            ]
          }
        ]
      }
    },
    {
      topic:'',
      team:{
        first:'Techumbre',
        second:[
          {
            name:'Estructuras',
            item:[
              {
                act:'Verificar que los elementos metálicos no presenten oxidación',
                frec:'90 días'
              }
            ]
          },
          {
            name:'Columnas',
            item:[
              {
                act:'Verificar que los elementos metálicos no presenten oxidación',
                frec:'90 días'
              }
            ]
          },
          {
            name:'Láminas',
            item:[
              {
                act:'Verificar que no están sueltas o dañadas',
                frec:'90 días'
              }
            ]
          },
        ]
      }
    },
    {
      topic:'Plan de Mantenimiento de extintores',
      team:{
        first:'Seguridad',
        second:[
          {
            name:'Extintores',
            item:[
              {
                act:'Verificar que se encuentren en la ubicación asignada en plano',
                frec:'30 días'
              },
              {
                act:'Verificar que estén instalados a una altura máxima de 1.50 m.  y mínima de 0.10 m.  de nivel de piso terminado.',
                frec:'30 días'
              },
              {
                act:'Verificar que se encuentren señalizados',
                frec:'30 días'
              },
              {
                act:'Verificar que cuenten con el sello o fleje de garantía sin violar',
                frec:'30 días'
              },
              {
                act:'Verificar que la aguja del manómetro indique la presión en la zona verde (operable)',
                frec:'30 días'
              },
              {
                act:'Verificar que no existan daños físicos evidentes, tales como corrosión, escape de presión, obstrucción, golpes o deformaciones',
                frec:'30 días'
              },
              {
                act:'Verificar que no existan daños físicos, tales como roturas, desprendimientos, protuberancias o perforaciones, en mangueras, boquillas o palanca de accionamiento',
                frec:'30 días'
              },
              {
                act:'Verificar que la etiqueta indique la vigencia, después de cada mantenimiento',
                frec:'30 días'
              },
              {
                act:'Mantenimiento general y recarga, con personal especializado',
                frec:'365 días'
              },
              {
                act:'Realizar prueba hidrostática al cilindro',
                frec:'5 años'
              }
            ]
          }
        ]
      }
    }
  ]


  constructor() { }

  ngOnInit() {
    console.log(this.array);
    
  }

}
