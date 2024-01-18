import { Component, OnInit } from '@angular/core';
import { ArduinoService } from './arduino.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  arduinoData: any;

  constructor(private arduinoService: ArduinoService) {}

  ngOnInit() {
    console.log("Cargando pagina...")
    this.getArduinoData();
    console.log("Pagina cargada")
  }

  getArduinoData() {
    this.arduinoService.getDataFromArduino().subscribe(
      data => {
        this.arduinoData = data;
        console.log('Datos recibidos desde Arduino:', this.arduinoData);
      },
      error => console.error('Error al obtener datos desde Arduino:', error)
    );
  }
