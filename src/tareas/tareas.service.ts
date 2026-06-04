import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TareasService {
    
    constructor(private prisma: PrismaService) {}

    obtenerTodas() {
        return this.prisma.tarea.findMany();
    }

    crear(titulo: string) {
        return this.prisma.tarea.create({
            data: {titulo}
        });
    }

    actualizar(id: number, hecha: boolean) {
        return this.prisma.tarea.update({
            where: {id},
            data: {hecha}
        });
    }

    eliminar(id: number) {
        return this.prisma.tarea.delete({
            where: {id}
        });
    }
}
