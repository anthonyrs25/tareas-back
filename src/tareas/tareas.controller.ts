import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { TareasService } from './tareas.service'

@Controller('tareas')
export class TareasController {

    constructor(private readonly tareasService: TareasService) {}

    @Get()
    obtenerTodas() {
        return this.tareasService.obtenerTodas();
    }

    @Post()
    crear(@Body('titulo') titulo: string) {
        return this.tareasService.crear(titulo);
    }

    @Patch(':id')
    actualizar(@Param('id', ParseIntPipe) id: number, @Body('hecha') hecha: boolean) {
        return this.tareasService.actualizar(id, hecha);
    }

    @Delete(':id')
    eliminar(@Param('id', ParseIntPipe) id: number) {
        return this.tareasService.eliminar(id);
    }

}
