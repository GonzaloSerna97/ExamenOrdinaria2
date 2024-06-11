import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../empleado.service';

interface Empleado {
  id: number;
  nombre: string;
  puesto: string;
  telefono: string;
}

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  empleados: Empleado[] = [];
  nuevoEmpleado: Empleado = { id: 0, nombre: '', puesto: '', telefono: '' };
  empleadoSeleccionado: Empleado | null = null;

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  obtenerEmpleados(): void {
    this.empleados = this.empleadoService.getEmpleados();
  }

  anadirEmpleado(): void {
    this.empleadoService.anadirEmpleado(this.nuevoEmpleado);
    this.nuevoEmpleado = { id: 0, nombre: '', puesto: '', telefono: '' };
    this.obtenerEmpleados();
  }

  editarEmpleado(empleado: Empleado): void {
    this.empleadoSeleccionado = { ...empleado };
  }

  actualizarEmpleado(): void {
    if (this.empleadoSeleccionado) {
      this.empleadoService.actualizarEmpleado(this.empleadoSeleccionado);
      this.empleadoSeleccionado = null;
      this.obtenerEmpleados();
    }
  }

  eliminarEmpleado(id: number): void {
    this.empleadoService.eliminarEmpleado(id);
    this.obtenerEmpleados();
  }
}
