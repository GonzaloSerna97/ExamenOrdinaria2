import { Injectable } from '@angular/core';

interface Empleado {
  id: number;
  nombre: string;
  puesto: string;
  telefono: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private empleados: Empleado[] = [
    { id: 1, nombre: 'Gonzalo Serna', puesto: 'Principiante', telefono: '123456789' },
    { id: 2, nombre: 'Juan José Galán', puesto: 'Experto', telefono: '987654321' }
  ];

  getEmpleados(): Empleado[] {
    return this.empleados;
  }

  anadirEmpleado(empleado: Empleado): void {
    empleado.id = this.empleados.length ? Math.max(...this.empleados.map(e => e.id)) + 1 : 1;
    this.empleados.push(empleado);
  }

  actualizarEmpleado(empleado: Empleado): void {
    const index = this.empleados.findIndex(e => e.id === empleado.id);
    if (index !== -1) {
      this.empleados[index] = empleado;
    }
  }

  eliminarEmpleado(id: number): void {
    this.empleados = this.empleados.filter(e => e.id !== id);
  }
}
