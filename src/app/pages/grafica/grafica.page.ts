import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.page.html',
  styleUrls: ['./grafica.page.scss'],
})
export class GraficaPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.generateCart();
  }

  generateCart(){
    var ctx = 'myChart';
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: [
              'I. Política', 
              'II. Identificación de peligros y riesgos ambientales', 
              'III. Requisitos legales', 
              'IV. Objetivos, metas e indicadores', 
              'V.Funciones Responsabilidades y Autoridad', 
              'VI. Competencia del personal, capacitación y entretenimiento', 
              'VII. Comunicación, Participación y Consulta', 
              'VIII. Control de Documentos y Registros', 
              'IX. Mejores Prácticas y Estándares', 
              'X. Control de actividades y procesos.', 
              'XI. Integridad Mecanica', 
              'XII. Seguridad de Contratistas', 
              'XIII. Preparacion y respuesta a emergencias', 
              'XIV. Monitoreo verificacion y evaluacion', 
              'XV. Auditorías', 
              'XVI. Investigacion de incidentes y accidentes', 
              'XVII. Revisión de la dirección', 
              'XVIII. Informes de desempeño'
            ],
            datasets: [{
                label: '% de progreso de implementacion del SASISOPA',
                data: [100,10, 20, 3, 5, 2, 100, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,],
                backgroundColor: [
                    'rgba(204, 107, 58, 1)',
                    'rgba(204, 107, 58, 1)',
                    'rgba(204, 107, 58, 1)',
                    'rgba(204, 107, 58, 1)',
                    'rgba(204, 107, 58, 1)',
                    'rgba(204, 107, 58, 1)',
                    'rgba(204, 107, 58, 1)',
                    'rgba(204, 107, 58, 1)',
                    'rgba(204, 107, 58, 1)',
                    'rgba(204, 107, 58, 1)',
                    'rgba(204, 107, 58, 1)',
                    'rgba(204, 107, 58, 1)',
                    'rgba(204, 107, 58, 1)',
                    'rgba(204, 107, 58, 1)',
                    'rgba(204, 107, 58, 1)',
                    'rgba(204, 107, 58, 1)',
                    'rgba(204, 107, 58, 1)',
                    'rgba(204, 107, 58, 1)',
                    'rgba(204, 107, 58, 1)',
                    'rgba(204, 107, 58, 1)',
                ],
                borderColor: [
                    'rgba(7, 29, 61, 1)',
                    'rgba(7, 29, 61, 1)',
                    'rgba(7, 29, 61, 1)',
                    'rgba(7, 29, 61, 1)',
                    'rgba(7, 29, 61, 1)',
                    'rgba(7, 29, 61, 1)',
                    'rgba(7, 29, 61, 1)',
                    'rgba(7, 29, 61, 1)',
                    'rgba(7, 29, 61, 1)',
                    'rgba(7, 29, 61, 1)',
                    'rgba(7, 29, 61, 1)',
                    'rgba(7, 29, 61, 1)',
                    'rgba(7, 29, 61, 1)',
                    'rgba(7, 29, 61, 1)',
                    'rgba(7, 29, 61, 1)',
                    'rgba(7, 29, 61, 1)',
                    'rgba(7, 29, 61, 1)',
                    'rgba(7, 29, 61, 1)',
                    'rgba(7, 29, 61, 1)',
                ],
                borderWidth: 1,
                //borderSkipped:'bottom',
                hoverBorderColor:'rgba(0, 0, 255)',
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            } ,
        }
    });
  }
}
