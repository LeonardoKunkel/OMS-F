import { Component, OnInit } from '@angular/core';
import { Cell, PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';

@Component({
  selector: 'app-e9-listado-codigos-estandares',
  templateUrl: './e9-listado-codigos-estandares.page.html',
  styleUrls: ['./e9-listado-codigos-estandares.page.scss'],
})
export class E9ListadoCodigosEstandaresPage implements OnInit {

  constructor() { }

  listado:any=[
    {
      normas:[
        {
          org:'NOM-001-SEDE-2012',
          nom:'Instalaciones eléctricas (utilización).',
          emision:'2012',
          aplicacion:'Instalaciones eléctricas'
        },
        {
          org:'NOM-005-SCFI-2011',
          nom:'Instrumentos de medición-Sistema para medición y despacho de gasolina y otros combustibles líquidos Especificaciones, métodos de prueba y de verificación.',
          emision:'2011',
          aplicacion:'Dispensarios y medidores'
        },
        {
          org:'NOM-063-SCFI-2001',
          nom:'Productos eléctricos - Conductores - Requisitos de seguridad',
          emision:'2001',
          aplicacion:'Instalación eléctrica'
        },
        {
          org:'NOM-185-SCFI-2012',
          nom:'Programas informáticos y sistemas electrónicos que controlan el funcionamiento de los sistemas para medición y despacho de gasolina y otros combustibles líquidos - Especificaciones, métodos de prueba y de verificación.',
          emision:'2012',
          aplicacion:''
        },
        {
          org:'NOM-003-SEGOB-2011',
          nom:'Señales y avisos para protección civil - Colores, formas y símbolos a utilizar.',
          emision:'2011',
          aplicacion:'Señalamientos de seguridad'
        },
        {
          org:'NOM-001-SEMARNAT-1996',
          nom:'Que establece los límites máximos permisibles de contaminantes en las descargas de aguas residuales en aguas y bienes nacionales.',
          emision:'1996',
          aplicacion:'Descarga de aguas residuales'
        },
        {
          org:'NOM-002-SEMARNAT-1996',
          nom:'Que establece los límites máximos permisibles de contaminantes en las descargas de aguas residuales a los sistemas de alcantarillado',
          emision:'1996',
          aplicacion:'Descarga de aguas residuales'
        },
        {
          org:'NOM-052-SEMARNAT-2005',
          nom:'Que establece las características, el procedimiento de identificación, clasificación y los listados de los residuos peligrosos.',
          emision:'2005',
          aplicacion:'Residuos peligrosos'
        },
        {
          org:'NOM-059-SEMARNAT-2010',
          nom:'Protección ambiental - Especies nativas de México de flora y fauna silvestres - Categorías de riesgo y especificaciones para su inclusión, exclusión o cambio - Lista de especies en riesgo.',
          emision:'2010',
          aplicacion:'Flora y Fauna'
        },
        {
          org:'NOM-138-SEMARNAT/SSA1-2012',
          nom:'Límites máximos permisibles de hidrocarburos en suelos y lineamientos para el muestreo en la caracterización y especificaciones para la remediación.',
          emision:'2012',
          aplicacion:'Caracterización de suelo'
        },
        {
          org:'NOM-001-STPS-2008',
          nom:'Edificios, locales, instalaciones y áreas en los centros de trabajo - Condiciones de seguridad',
          emision:'2008',
          aplicacion:'Seguridad en edificios'
        },
        {
          org:'NOM-002-STPS-2010',
          nom:'Condiciones de Seguridad - Prevención y protección contra incendios en los centros de trabajo.',
          emision:'2010',
          aplicacion:'Prevención contra incendio'
        },
        {
          org:'NOM-005-STPS-1998',
          nom:'Relativa a las condiciones de seguridad e higiene en los centros de trabajo para el manejo, transporte y almacenamiento de sustancias químicas peligrosas',
          emision:'1998',
          aplicacion:'Condiciones de seguridad e higiene para el manejo, transporte y almacenamiento de sustancias químicas peligrosas.'
        },
        {
          org:'NOM-009-STPS-2011',
          nom:'Condiciones de seguridad para realizar trabajos en altura.',
          emision:'2011',
          aplicacion:'Trabajos en altura'
        },
        {
          org:'NOM-017-STPS-2008',
          nom:'Equipo de protección personal - Selección, uso y manejo en los centros de trabajo.',
          emision:'2008',
          aplicacion:'Selección de equipo de protección personal'
        },
        {
          org:'NOM-018-STPS-2000',
          nom:'Sistema para la identificación y comunicación de peligros y riesgos por sustancias químicas peligrosas en los centros de trabajo.',
          emision:'2000',
          aplicacion:'Comunicación de peligros'
        },
        {
          org:'NOM-020-STPS-2011',
          nom:'Recipientes sujetos a presión, recipientes criogénicos y generadores de vapor o calderas - Funcionamiento - Condiciones de Seguridad.',
          emision:'2011',
          aplicacion:'Recipientes sujetos a presión, compresor.'
        },
        {
          org:'NOM-022-STPS-2008',
          nom:'Electricidad estática en los Centros de Trabajo - Condiciones de Seguridad',
          emision:'2008',
          aplicacion:'Tierras físicas y pararrayos'
        },
        {
          org:'NOM-025-STPS-2008',
          nom:'Condiciones de iluminación en los centros de trabajo.',
          emision:'2008',
          aplicacion:'Iluminación'
        },
        {
          org:'NOM-026-STPS-2008',
          nom:'Colores y señales de seguridad e higiene, e identificación de riesgos por fluidos conducidos en tuberías',
          emision:'2008',
          aplicacion:'Señales de seguridad e identificación de riesgos'
        },
        {
          org:'NOM-027-STPS-2008',
          nom:'Actividades de soldadura y corte - Condiciones de seguridad e higiene.',
          emision:'2008',
          aplicacion:'Corte y soldadura'
        },
        {
          org:'NOM-028-STPS-2012',
          nom:'Sistema para la administración del trabajo-Seguridad en los procesos y equipos críticos que manejen sustancias químicas peligrosas.',
          emision:'2012',
          aplicacion:'Sistema de la administración de la seguridad'
        },
        {
          org:'NOM-031-STPS-2011',
          nom:'Construcción - Condiciones de seguridad y salud en el trabajo.',
          emision:'2011',
          aplicacion:'Construcción'
        },
        {
          org:'NOM-033-STPS-2015',
          nom:'Condiciones de seguridad para realizar trabajos en espacios confinados.',
          emision:'2015',
          aplicacion:'Trabajos en espacios confinados'
        }
      ],
      comunicaciones:[
        {
          org:'S/N',
          nom:'Manual de Proyecto Geométrico de Carreteras',
          emision:'1991',
          aplicacion:'Accesos a la estación de servicio'
        }
      ],
      laboratorios:[
        {
          org:'UL-58',
          nom:'Standard for Safety for Steel Underground Tanks for Flammable and Combustible Liquids',
          emision:'2018',
          aplicacion:'Estándar para la Seguridad para Tanques Subterráneos de Acero para Líquidos Inflamables y Combustibles,'
        },
        {
          org:'UL-79',
          nom:'Standard for Power-Operated Pumps for Petroleum Dispensing Products',
          emision:'2016',
          aplicacion:'Estándar para Bombas Operadas por Energía para Productos de Distribución de Petróleo, (bombas de tanques)'
        },
        {
          org:'UL-87',
          nom:'Power-Operated Dispensing Devices for Petroleum Products',
          emision:'2016',
          aplicacion:'Dispensarios'
        },
        {
          org:'UL-142',
          nom:'Steel Aboveground Tanks for Flammable and Combustible Liquids',
          emision:'2006',
          aplicacion:'Tanques superficiales de acero'
        },
        {
          org:'UL-340',
          nom:'Standard for Tests for Comparative Flammability of Liquids',
          emision:'2017',
          aplicacion:'Standard para Pruebas de Inflamabilidad Comparativa de Líquidos'
        },
        {
          org:'UL-525',
          nom:'Standard for Safety for Flame Arrester',
          emision:'',
          aplicacion:''
        },
        {
          org:'UL-971',
          nom:'Standard for Nonmetallic Underground Piping for Flammable Liquids',
          emision:'1995',
          aplicacion:'Standard para tuberías subterráneas no metálicas para líquidos inflamables.'
        },
        {
          org:'UL-1316',
          nom:'Standard for Safety for Glass-Fiber-Reinforced Plastic Underground Storage Tanks for Petroleum Products, Alcohols, and Alcohol-Gasoline Mixtures',
          emision:'1994',
          aplicacion:'Estándar para la seguridad de los tanques de almacenamiento subterráneo de plástico reforzado con fibra de vidrio para productos petrolíferos, alcoholes y mezclas alcohol-gasolina'
        },
        {
          org:'UL-1746',
          nom:'External Corrosion Protection Systems for Steel Underground Storage Tanks',
          emision:'2007',
          aplicacion:'Sistemas externos de protección contra la corrosión para tanques de almacenamiento subterráneo de acero'
        },
        {
          org:'UL-2080',
          nom:'Standard for Fire Resistant Tanks for Flammable and Combustible Liquids',
          emision:'2000',
          aplicacion:'Tanques resistentes a líquidos inflamables.'
        },
        {
          org:'UL-2085',
          nom:'Standard for Safety for Protected Aboveground Tanks for Flammable and Combustible Liquids',
          emision:'1997',
          aplicacion:'Estándar para la seguridad de los tanques superficiales protegidos para líquidos inflamables y combustibles'
        },
        {
          org:'UL-2244',
          nom:'Standard for Safety Aboveground Flammable Liquid Tank Systems',
          emision:'1999',
          aplicacion:'Estándar de seguridad para sistemas de tanques superficiales de líquidos inflamables.'
        }

      ],
      construccion:[
        {
          org:'S/N',
          nom:'Manual of steel construction 3rd edition',
          emision:'2009',
          aplicacion:''
        },
      ],
      petroleo:[
        {
          org:'RP100-UST',
          nom:'Recommended Practices for Installation of Underground Liquid Storage Systems',
          emision:'2017',
          aplicacion:'Prácticas recomendadas para la instalación de sistemas de almacenamiento de líquidos subterráneos'
        },
        {
          org:'RP200-AST',
          nom:'Recommended Practices for Installation of Aboveground Storage Systems for Motor Vehicle Fueling',
          emision:'2003',
          aplicacion:'Prácticas Recomendadas para la Instalación de Sistemas de Almacenamiento superficial para el Abastecimiento de Vehículos Motorizados'
        },
        {
          org:'RP-300',
          nom:'Recommended Practices for Installation and Testing of Vapor Recovery Systems at Vehicle Fueling Sites',
          emision:'2003',
          aplicacion:'Prácticas recomendadas para la instalación y prueba de sistemas de recuperación de vapor en los sitios de abastecimiento de vehículos'
        },
        {
          org:'RP-400',
          nom:'Recommended Procedure for Testing of Electrical Continuity of Fuel-Dispensing Hanging Hardware',
          emision:'2012',
          aplicacion:'Procedimiento recomendado para la comprobación de la continuidad eléctrica del equipo de suspensión dispensador de combustible'
        },
        {
          org:'PEI-RP-100',
          nom:'Recommended Practices for Installation of Underground Liquid Storage Systems',
          emision:'2017',
          aplicacion:'Prácticas recomendadas para la instalación de sistemas de almacenamiento de líquidos subterráneos'
        },
        {
          org:'PEI/RP-800',
          nom:'Prácticas Recomendadas por el Petroleum Equipment Institute.',
          emision:'2013',
          aplicacion:''
        },
        {
          org:'TP-201.1E',
          nom:'Leak Rate and Cracking Pressure of Pressure/Vacuum Vent Valves.',
          emision:'2003',
          aplicacion:'Velocidad de fuga y presión de fisuración de las válvulas de ventilación de presión / vacío'
        },
        {
          org:'TP-201.2B',
          nom:'Flow and Pressure Measurement of Vapor Recovery Equipment.',
          emision:'2003',
          aplicacion:'Medición de caudal y presión del equipo de recuperación de vapor.'
        },
        {
          org:'TP-201.3',
          nom:'Determination of 2 Inch WC Static Pressure Performance of Vapor Recovery Systems of Dispensing Facilities.',
          emision:'2012',
          aplicacion:'Determinación del rendimiento de presión estática de 2 pulgadas de agua de los sistemas de recuperación de vapor de las instalaciones de dispensación.'
        },
        {
          org:'TP-201.3A',
          nom:'Determination of 5 Inch WC Static Pressure Performance of Vapor Recovery Systems of Dispensing Facilities.',
          emision:'',
          aplicacion:'Determinación de la Presión Estática de 5 Pulgadas de agua Rendimiento de los Sistemas de Recuperación de Vapor de Instalaciones de Dispensación'
        },
        {
          org:'TP-201.3C',
          nom:'Determination of Piping Connections to Underground Gasoline Storage Tanks (Tie-Tank Test).',
          emision:'1999',
          aplicacion:'Determinación de Conexiones de Tubería a Tanques de Almacenamiento de Gasolina Subterráneos (Prueba de Tanque de Unión).'
        },
        {
          org:'TP-201.4',
          nom:'Dynamic Back Pressure.',
          emision:'2002',
          aplicacion:'Contrapresión Dinámica.'
        }
      ],
      testMaterials:[
        {
          org:'ASTM A36',
          nom:'Standard Specification for Carbon Structural Steel',
          emision:'2014',
          aplicacion:'Área de dispensarios y tanques de almacenamiento. - Aplicable a los elementos constructivos que usan acero de carbón estructural (Instalaciones, soportes y tanques).'
        },
        {
          org:'ASTM A53',
          nom:'Standard Specification for Pipe, Steel, Black and Hot-Dipped, Zinc-Coated, Welded and Seamless',
          emision:'2012',
          aplicacion:'Área de dispensarios y tanques de almacenamiento. - Aplicable para tuberías de acero sumergías en caliente, recubiertas de zinc, con soldadura y sin soldadura (Instalaciones, tuberías de producto)'
        },
        {
          org:'ASTM B62',
          nom:'Standard Specification for Composition Bronze or Ounce Metal Castings',
          emision:'2017',
          aplicacion:'Cuarto eléctrico. - Especificación de composición de bronce o metal fundido.'
        },
        {
          org:'ASTM A105',
          nom:'Standard Specification for Carbon Steel Forgings for Piping Applications',
          emision:'2014',
          aplicacion:'Especificación de forjas de acero al carbón para aplicaciones en tuberías. (Instalaciones).'
        },
        {
          org:'ASTM A216',
          nom:'Standard Specification for Steel Castings, Carbon, Suitable for Fusion Welding, for High-Temperature Service',
          emision:'2016',
          aplicacion:'Área de dispensarios y tanques de almacenamiento. - Estándares de especificación para fundición de acero, carbón, adecuado para la soldadura de fusión, para servicios a alta temperatura (Instalaciones tuberías de producto, agua de servicio)'
        },
        {
          org:'ASTM A 234',
          nom:'Standard Specification for Pipes Fittings of Wrought Carbon Steel and Alloy Steel for Moderate and High Temperature Service',
          emision:'2018',
          aplicacion:'Área de dispensarios y tanques de almacenamiento. - Estándares de especificación para tuberías, accesorios forjados de acero al carbón y aleación de acero para moderadas y altas temperaturas de servicio (Instalaciones- tuberías)'
        },
        {
          org:'ASTM 1785',
          nom:'Standard Specification for Poly (Vinyl Chloride) (PVC) Plastic Pipe, Schedules 40, 80, and 120',
          emision:'2015',
          aplicacion:'Área de oficinas y sanitarios. - Especificaciones para tuberías de plástico (PVC) de cedula 40, 80 y 120.'
        }
      ],
      south:[
        {
          org:'SWRI 93-01',
          nom:'Testing Requirements for Protected Aboveground Flammable Liquid Fuel Storage Tanks',
          emision:'1993',
          aplicacion:'Requisitos de las pruebas para los tanques de almacenamiento de combustible líquido inflamable superficiales protegidos'
        }
      ],
      nationalFire:[
        {
          org:'S/N',
          nom:'Fire protection handbook',
          emision:'2008',
          aplicacion:'Manual de protección contra incendios'
        },
        {
          org:'NFPA 14',
          nom:'Standard for the Installation of Standpipe, Private Hydrants, and Hose Systems',
          emision:'2016',
          aplicacion:'Aplica a sistemas contra incendios de contar con ellos. - Estándares para la instalación de torres de agua, hidrantes y sistemas de mangueras.'
        },
        {
          org:'NFPA 20',
          nom:'Standard for The Installation of Stationary Pumps for Fire Protection',
          emision:'2016',
          aplicacion:'Estándar para la instalación de bombas estacionarias para protección contra incendios'
        },
        {
          org:'NFPA 30',
          nom:'Flammable and Combustible Liquids Code',
          emision:'2015',
          aplicacion:'Código de Líquidos Inflamables y Combustibles'
        },
        {
          org:'NFPA 30A',
          nom:'Code for Motor Fuel Dispensing Facilities and Repair Garages',
          emision:'2018',
          aplicacion:'Código para Instalaciones de Distribución de Combustible de Motor y Talleres de Reparación'
        },
        {
          org:'NFPA 70',
          nom:'National Electrical Code',
          emision:'2017',
          aplicacion:'Código Eléctrico Nacional'
        },
        {
          org:'NFPA 90A',
          nom:'Standard for the Installation of Air-Conditioning and Ventilating Systems;',
          emision:'2018',
          aplicacion:'Instalación de sistemas de aire acondicionado y ventilación'
        },
        {
          org:'NFPA 303',
          nom:'Fire Protection Standard for Marinas and Boatyards',
          emision:'2016',
          aplicacion:'Norma de Protección contra Incendios para Marinas y Astilleros'
        },
        {
          org:'NFPA 780',
          nom:'Standard for the installation of Lightning Protection Systems',
          emision:'2017',
          aplicacion:'nstalación de sistemas de protección contra rayos.'
        }
      ],
      internationalStandard:[
        {
          org:'ISO-15874-1:2013',
          nom:'Plastics piping systems for hot and cold-water installations-Polypropylene (PP)-Part 1: General',
          emision:'2013',
          aplicacion:'Sistemas de tuberías de plástico para instalaciones de agua caliente y fría -Polipropileno (PP) -Parte 1: General'
        },
        {
          org:'ISO 10628-1:2014',
          nom:'Diagrams for the chemical and petrochemical industry - Part 1: Specification of diagrams.',
          emision:'2014',
          aplicacion:'Diagramas para la industria química y petroquímica - Parte 1: Especificación de diagramas.'
        },
        {
          org:'ISO 10628-2:2012',
          nom:'Diagrams for the chemical and petrochemical industry - Part 2: Graphical symbols.',
          emision:'2012',
          aplicacion:'Diagramas para la industria química y petroquímica - Parte 2: Símbolos gráficos.'
        }
      ],
      steelTanks:[
        {
          org:'R891-91',
          nom:'Recommended Practice for Hold Down Strap Isolation; Steel Tanks Institute',
          emision:'',
          aplicacion:'Práctica recomendada para el aislamiento de la correa de sujeción'
        },
        {
          org:'R892-91',
          nom:'Recommended Practice for Corrosion Protection of Underground Piping Networks Associated With Liquid Storage And Dispensing Systems',
          emision:'',
          aplicacion:'Práctica recomendada para la protección contra la corrosión de redes de tuberías subterráneas asociadas con sistemas de almacenamiento y dispensación de líquidos'
        },
        {
          org:'R893-89',
          nom:'Recommended Practice for External Corrosion Protection of Shop Fabricated Aboveground Tank Floors',
          emision:'',
          aplicacion:'Práctica recomendada para la protección externa contra la corrosión de los pisos de depósitos fabricados en tiendas superiores'
        },
        {
          org:'RP011-01',
          nom:'Recommended Practice for Anchoring Of Steel Underground Storage Tanks',
          emision:'',
          aplicacion:'Práctica recomendada para el anclaje de tanques de almacenamiento subterráneos de acero'
        }
      ],
      normasMexicanas:[
        {
          org:'NMX-E-181-CNCP-2006',
          nom:'Industria del plástico-Tubos y conexiones de poli (cloruro de vinilo clorado) (CPVC) para sistemas de distribución de agua caliente y fría-Especificaciones y métodos de ensayo.',
          emision:'2006',
          aplicacion:''
        },
        {
          org:'NMX-E-226/1-SCFI-1999',
          nom:'Industria del plástico-Tubos de polipropileno (PP) para unión roscada empleados para la conducción de agua caliente y fría en edificaciones-Especificaciones',
          emision:'1999',
          aplicacion:''
        },
        {
          org:'NMX-E-226/2-CNCP-2007',
          nom:'Industria del plástico-Tubos de polipropileno (PP) para unión por termofusión empleados para la conducción de agua caliente o fría-Serie Métrica-Especificaciones.',
          emision:'2007',
          aplicacion:''
        },
        {
          org:'NMX-R-050-SCFI-2006',
          nom:'Accesibilidad de las personas con discapacidad a espacios construidos de servicio al público - Especificaciones de Seguridad.',
          emision:'2006',
          aplicacion:''
        },
      ],
      americanPetroleo:[
        {
          org:'API RP 1621',
          nom:'Bulk Liquid Stock Control at Retail Outlets',
          emision:'1993',
          aplicacion:'Control de inventarios'
        },
      ],
      nationalElectrical:[
        {
          org:'S/N',
          nom:'NEMA Standards Publication',
          emision:'',
          aplicacion:'Instalaciones eléctricas'
        }
      ],
      uniformFire:[
        {
          org:'Appendix II-F',
          nom:'Protected Aboveground Tanks for Motor Vehicle Fuel-Dispensing Stations Outside Buildings',
          emision:'1999',
          aplicacion:'Tanques superficiales'
        }
      ],
      institutoMexicano:[
        {
          org:'IMCA',
          nom:'Manual de construcción en acero. Diseño por esfuerzos permisibles IMCA',
          emision:'2014',
          aplicacion:'Estructuras'
        }
      ],
      secretariaEnergia:[
        {
          org:'S/N',
          nom:'Acuerdo de la Secretaría de Energía que determina los lugares de concentración pública para la verificación de las instalaciones eléctricas.',
          emision:'2017',
          aplicacion:'Instalaciones eléctricas'
        }
      ],
      normasReferencia:[
        {
          org:'NRF-028-PEMEX-2010',
          nom:'Diseño y construcción de recipientes a presión.',
          emision:'2010',
          aplicacion:''
        },
        {
          org:'NRF-137-PEMEX-2012',
          nom:'Diseño de estructuras de acero terrestres.',
          emision:'2012',
          aplicacion:''
        }
      ]
    }
  ]

  

  
  ngOnInit() {
  }

  pdf(){
    const pdf = new PdfMakeWrapper();
    pdf.add([
      new Table([
        [
          new Cell(new Txt('CÓDIGO O ESTÁNDAR').end).fillColor('#ababab').alignment('center').end,
          new Cell(new Txt('DESCRIPCIÓN').end).fillColor('#ababab').alignment('center').end,
          new Cell(new Txt('AÑO DE EMISIÓN').end).fillColor('#ababab').alignment('center').end,
          new Cell(new Txt('APLICACIÓN').end).fillColor('#ababab').alignment('center').end,
        ],
        [
          new Cell(new Txt('ORGANIZACIÓN').end).fillColor('#ababab').alignment('center').end,
          new Cell(new Txt('NORMAS OFICIALES MEXICANAS').end).fillColor('#ababab').alignment('center').colSpan(3).end,
          new Cell(new Txt('dd').end).fillColor('#ababab').end,
          new Cell(new Txt('dd').end).fillColor('#ababab').end,
        ]
      ]).widths([175, 350, 75, 160]).end
    ])

    for (let i = 0; i < this.listado[0].normas.length; i++) {
      pdf.add(
        new Table([
          [
            new Cell(new Txt(`${this.listado[0].normas[i].org}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].normas[i].nom}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].normas[i].emision}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].normas[i].aplicacion}`).end).alignment('justify').end,
          ]
        ]).widths([175, 350, 75, 160]).end
      )
    }

    pdf.add([
      new Table([
        [
          new Cell(new Txt('ORGANIZACIÓN').end).fillColor('#ababab').alignment('center').end,
          new Cell(new Txt('SECRETARIA DE COMUNICACIONES Y TRANSPORTES').end).fillColor('#ababab').alignment('center').colSpan(3).end,
          new Cell(new Txt('').end).fillColor('#ababab').end,
          new Cell(new Txt('').end).fillColor('#ababab').end,
        ]
      ]).widths([175, 350, 75, 160]).end
    ]) //FOR

    for (let i = 0; i < this.listado[0].comunicaciones.length; i++) {
      pdf.add(
        new Table([
          [
            new Cell(new Txt(`${this.listado[0].comunicaciones[i].org}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].comunicaciones[i].nom}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].comunicaciones[i].emision}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].comunicaciones[i].aplicacion}`).end).alignment('justify').end,
          ]
        ]).widths([175, 350, 75, 160]).end
      )
    }

    pdf.add([
      new Table([
        [
          new Cell(new Txt('ORGANIZACIÓN').end).fillColor('#ababab').alignment('center').end,
          new Cell(new Txt('UNDERWRITERS LABORATORIES INC.   UL').end).fillColor('#ababab').alignment('center').colSpan(3).end,
          new Cell(new Txt('').end).fillColor('#ababab').end,
          new Cell(new Txt('').end).fillColor('#ababab').end,
        ]
      ]).widths([175, 350, 75, 160]).end
    ]) //FOR
    
    for (let i = 0; i < this.listado[0].laboratorios.length; i++) {
      pdf.add(
        new Table([
          [
            new Cell(new Txt(`${this.listado[0].laboratorios[i].org}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].laboratorios[i].nom}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].laboratorios[i].emision}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].laboratorios[i].aplicacion}`).end).alignment('justify').end,
          ]
        ]).widths([175, 350, 75, 160]).end
      )
    }

    pdf.add([
      new Table([
        [
          new Cell(new Txt('ORGANIZACIÓN').end).fillColor('#ababab').alignment('center').end,
          new Cell(new Txt('AMERICAN INSTITUTE OF STEEL CONSTRUCTION, INC').end).fillColor('#ababab').alignment('center').colSpan(3).end,
          new Cell(new Txt('').end).fillColor('#ababab').end,
          new Cell(new Txt('').end).fillColor('#ababab').end,
        ]
      ]).widths([175, 350, 75, 160]).end
    ]) //FOR

    for (let i = 0; i < this.listado[0].construccion.length; i++) {
      pdf.add(
        new Table([
          [
            new Cell(new Txt(`${this.listado[0].construccion[i].org}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].construccion[i].nom}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].construccion[i].emision}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].construccion[i].aplicacion}`).end).alignment('justify').end,
          ]
        ]).widths([175, 350, 75, 160]).end
      )
    }

    pdf.add([
      new Table([
        [
          new Cell(new Txt('ORGANIZACIÓN').end).fillColor('#ababab').alignment('center').end,
          new Cell(new Txt('PETROLEUM EQUIPMENT INSTITUTE').end).fillColor('#ababab').alignment('center').colSpan(3).end,
          new Cell(new Txt('').end).fillColor('#ababab').end,
          new Cell(new Txt('').end).fillColor('#ababab').end,
        ]
      ]).widths([175, 350, 75, 160]).end
    ]) //FOR


    for (let i = 0; i < this.listado[0].petroleo.length; i++) {
      pdf.add(
        new Table([
          [
            new Cell(new Txt(`${this.listado[0].petroleo[i].org}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].petroleo[i].nom}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].petroleo[i].emision}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].petroleo[i].aplicacion}`).end).alignment('justify').end,
          ]
        ]).widths([175, 350, 75, 160]).end
      )
    }

    pdf.add([
      new Table([
        [
          new Cell(new Txt('ORGANIZACIÓN').end).fillColor('#ababab').alignment('center').end,
          new Cell(new Txt('AMERICAN ESTÁNDAR FOR TESTING MATERIALS ASTM').end).fillColor('#ababab').alignment('center').colSpan(3).end,
          new Cell(new Txt('').end).fillColor('#ababab').end,
          new Cell(new Txt('').end).fillColor('#ababab').end,
        ]
      ]).widths([175, 350, 75, 160]).end
    ]) //FOR


    for (let i = 0; i < this.listado[0].testMaterials.length; i++) {
      pdf.add(
        new Table([
          [
            new Cell(new Txt(`${this.listado[0].testMaterials[i].org}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].testMaterials[i].nom}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].testMaterials[i].emision}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].testMaterials[i].aplicacion}`).end).alignment('justify').end,
          ]
        ]).widths([175, 350, 75, 160]).end
      )
    }

    pdf.add([
      new Table([
        [
          new Cell(new Txt('ORGANIZACIÓN').end).fillColor('#ababab').alignment('center').end,
          new Cell(new Txt('SOUTHWEST RESEARCH INSTITUTE').end).fillColor('#ababab').alignment('center').colSpan(3).end,
          new Cell(new Txt('').end).fillColor('#ababab').end,
          new Cell(new Txt('').end).fillColor('#ababab').end,
        ]
      ]).widths([175, 350, 75, 160]).end
    ]) //FOR


    for (let i = 0; i < this.listado[0].south.length; i++) {
      pdf.add(
        new Table([
          [
            new Cell(new Txt(`${this.listado[0].south[i].org}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].south[i].nom}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].south[i].emision}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].south[i].aplicacion}`).end).alignment('justify').end,
          ]
        ]).widths([175, 350, 75, 160]).end
      )
    }

    pdf.add([
      new Table([
        [
          new Cell(new Txt('ORGANIZACIÓN').end).fillColor('#ababab').alignment('center').end,
          new Cell(new Txt('NATIONAL FIRE PROTECTION ASSOCIATION    NFPA').end).fillColor('#ababab').alignment('center').colSpan(3).end,
          new Cell(new Txt('').end).fillColor('#ababab').end,
          new Cell(new Txt('').end).fillColor('#ababab').end,
        ]
      ]).widths([175, 350, 75, 160]).end
    ]) //FOR


    for (let i = 0; i < this.listado[0].nationalFire.length; i++) {
      pdf.add(
        new Table([
          [
            new Cell(new Txt(`${this.listado[0].nationalFire[i].org}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].nationalFire[i].nom}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].nationalFire[i].emision}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].nationalFire[i].aplicacion}`).end).alignment('justify').end,
          ]
        ]).widths([175, 350, 75, 160]).end
      )
    }

    pdf.add([
      new Table([
        [
          new Cell(new Txt('ORGANIZACIÓN').end).fillColor('#ababab').alignment('center').end,
          new Cell(new Txt('INTERNATIONAL STANDARDS ORGANIZATION').end).fillColor('#ababab').alignment('center').colSpan(3).end,
          new Cell(new Txt('').end).fillColor('#ababab').end,
          new Cell(new Txt('').end).fillColor('#ababab').end,
        ]
      ]).widths([175, 350, 75, 160]).end
    ]) //FOR


    for (let i = 0; i < this.listado[0].internationalStandard.length; i++) {
      pdf.add(
        new Table([
          [
            new Cell(new Txt(`${this.listado[0].internationalStandard[i].org}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].internationalStandard[i].nom}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].internationalStandard[i].emision}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].internationalStandard[i].aplicacion}`).end).alignment('justify').end,
          ]
        ]).widths([175, 350, 75, 160]).end
      )
    }

    pdf.add([
      new Table([
        [
          new Cell(new Txt('ORGANIZACIÓN').end).fillColor('#ababab').alignment('center').end,
          new Cell(new Txt('STEEL TANKS INSTITUTE').end).fillColor('#ababab').alignment('center').colSpan(3).end,
          new Cell(new Txt('').end).fillColor('#ababab').end,
          new Cell(new Txt('').end).fillColor('#ababab').end,
        ]
      ]).widths([175, 350, 75, 160]).end
    ]) //FOR


    for (let i = 0; i < this.listado[0].steelTanks.length; i++) {
      pdf.add(
        new Table([
          [
            new Cell(new Txt(`${this.listado[0].steelTanks[i].org}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].steelTanks[i].nom}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].steelTanks[i].emision}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].steelTanks[i].aplicacion}`).end).alignment('justify').end,
          ]
        ]).widths([175, 350, 75, 160]).end
      )
    }

    pdf.add([
      new Table([
        [
          new Cell(new Txt('ORGANIZACIÓN').end).fillColor('#ababab').alignment('center').end,
          new Cell(new Txt('NORMAS MEXICANAS').end).fillColor('#ababab').alignment('center').colSpan(3).end,
          new Cell(new Txt('').end).fillColor('#ababab').end,
          new Cell(new Txt('').end).fillColor('#ababab').end,
        ]
      ]).widths([175, 350, 75, 160]).end
    ]) //FOR.


    for (let i = 0; i < this.listado[0].normasMexicanas.length; i++) {
      pdf.add(
        new Table([
          [
            new Cell(new Txt(`${this.listado[0].normasMexicanas[i].org}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].normasMexicanas[i].nom}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].normasMexicanas[i].emision}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].normasMexicanas[i].aplicacion}`).end).alignment('justify').end,
          ]
        ]).widths([175, 350, 75, 160]).end
      )
    }

    pdf.add([
      new Table([
        [
          new Cell(new Txt('ORGANIZACIÓN').end).fillColor('#ababab').alignment('center').end,
          new Cell(new Txt('AMERICAN PETROLEUM INSTITUTE').end).fillColor('#ababab').alignment('center').colSpan(3).end,
          new Cell(new Txt('').end).fillColor('#ababab').end,
          new Cell(new Txt('').end).fillColor('#ababab').end,
        ]
      ]).widths([175, 350, 75, 160]).end
    ]) //FOR


    for (let i = 0; i < this.listado[0].americanPetroleo.length; i++) {
      pdf.add(
        new Table([
          [
            new Cell(new Txt(`${this.listado[0].americanPetroleo[i].org}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].americanPetroleo[i].nom}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].americanPetroleo[i].emision}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].americanPetroleo[i].aplicacion}`).end).alignment('justify').end,
          ]
        ]).widths([175, 350, 75, 160]).end
      )
    }

    pdf.add([
      new Table([
        [
          new Cell(new Txt('ORGANIZACIÓN').end).fillColor('#ababab').alignment('center').end,
          new Cell(new Txt('NATIONAL ELECTRICAL MANUFACTURERS ASSOCIATION.').end).fillColor('#ababab').alignment('center').colSpan(3).end,
          new Cell(new Txt('').end).fillColor('#ababab').end,
          new Cell(new Txt('').end).fillColor('#ababab').end,
        ]
      ]).widths([175, 350, 75, 160]).end
    ]) //FOR


    for (let i = 0; i < this.listado[0].nationalElectrical.length; i++) {
      pdf.add(
        new Table([
          [
            new Cell(new Txt(`${this.listado[0].nationalElectrical[i].org}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].nationalElectrical[i].nom}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].nationalElectrical[i].emision}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].nationalElectrical[i].aplicacion}`).end).alignment('justify').end,
          ]
        ]).widths([175, 350, 75, 160]).end
      )
    }

    pdf.add([
      new Table([
        [
          new Cell(new Txt('ORGANIZACIÓN').end).fillColor('#ababab').alignment('center').end,
          new Cell(new Txt('UNIFORM FIRE CODE').end).fillColor('#ababab').alignment('center').colSpan(3).end,
          new Cell(new Txt('').end).fillColor('#ababab').end,
          new Cell(new Txt('').end).fillColor('#ababab').end,
        ]
      ]).widths([175, 350, 75, 160]).end
    ]) //FOR


    for (let i = 0; i < this.listado[0].uniformFire.length; i++) {
      pdf.add(
        new Table([
          [
            new Cell(new Txt(`${this.listado[0].uniformFire[i].org}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].uniformFire[i].nom}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].uniformFire[i].emision}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].uniformFire[i].aplicacion}`).end).alignment('justify').end,
          ]
        ]).widths([175, 350, 75, 160]).end
      )
    }

    pdf.add([
      new Table([
        [
          new Cell(new Txt('ORGANIZACIÓN').end).fillColor('#ababab').alignment('center').end,
          new Cell(new Txt('INSTITUTO MEXICANO DE LA CONSTRUCCIÓN EN ACERO.').end).fillColor('#ababab').alignment('center').colSpan(3).end,
          new Cell(new Txt('').end).fillColor('#ababab').end,
          new Cell(new Txt('').end).fillColor('#ababab').end,
        ]
      ]).widths([175, 350, 75, 160]).end
    ]) //FOR


    for (let i = 0; i < this.listado[0].institutoMexicano.length; i++) {
      pdf.add(
        new Table([
          [
            new Cell(new Txt(`${this.listado[0].institutoMexicano[i].org}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].institutoMexicano[i].nom}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].institutoMexicano[i].emision}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].institutoMexicano[i].aplicacion}`).end).alignment('justify').end,
          ]
        ]).widths([175, 350, 75, 160]).end
      )
    }

    pdf.add([
      new Table([
        [
          new Cell(new Txt('ORGANIZACIÓN').end).fillColor('#ababab').alignment('center').end,
          new Cell(new Txt('SECRETARIA DE ENERGIA').end).fillColor('#ababab').alignment('center').colSpan(3).end,
          new Cell(new Txt('').end).fillColor('#ababab').end,
          new Cell(new Txt('').end).fillColor('#ababab').end,
        ]
      ]).widths([175, 350, 75, 160]).end
    ]) //FOR


    for (let i = 0; i < this.listado[0].secretariaEnergia.length; i++) {
      pdf.add(
        new Table([
          [
            new Cell(new Txt(`${this.listado[0].secretariaEnergia[i].org}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].secretariaEnergia[i].nom}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].secretariaEnergia[i].emision}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].secretariaEnergia[i].aplicacion}`).end).alignment('justify').end,
          ]
        ]).widths([175, 350, 75, 160]).end
      )
    }

    pdf.add([
      new Table([
        [
          new Cell(new Txt('ORGANIZACIÓN').end).fillColor('#ababab').alignment('center').end,
          new Cell(new Txt('NORMAS DE REFERENCIA DE PEMEX').end).fillColor('#ababab').alignment('center').colSpan(3).end,
          new Cell(new Txt('').end).fillColor('#ababab').end,
          new Cell(new Txt('').end).fillColor('#ababab').end,
        ]
      ]).widths([175, 350, 75, 160]).end
    ]) //FOR

    for (let i = 0; i < this.listado[0].normasReferencia.length; i++) {
      pdf.add(
        new Table([
          [
            new Cell(new Txt(`${this.listado[0].normasReferencia[i].org}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].normasReferencia[i].nom}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].normasReferencia[i].emision}`).end).alignment('justify').end,
            new Cell(new Txt(`${this.listado[0].normasReferencia[i].aplicacion}`).end).alignment('justify').end,
          ]
        ]).widths([175, 350, 75, 160]).end
      )
    }

    pdf.pageMargins([20, 30, 30, 20]);
    pdf.pageOrientation('landscape');
    pdf.create().open(); 
  }

}
