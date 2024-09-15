import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { FreightService } from "../services/freight.service";
import { CreateFreightDto } from "../dto/feright.dto";

@ApiTags('freight')
@Controller('freight')
export class FreightController {
    constructor(private FreightService: FreightService) {}

    @Get('getAll')
    @ApiOperation({ summary: 'Get all freights' })
    @ApiResponse({ status: 200, description: 'The freights have been successfully retrieved.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 404, description: 'Not found.' })
    @ApiResponse({ status: 500, description: 'Internal server error.' })
    async getAll() {
        return await this.FreightService.getAll();
    }

    @Get('getByCEP/:cep')
    @ApiOperation({ summary: 'Get freight by CEP' })
    @ApiResponse({ status: 200, description: 'The freights have been successfully retrieved.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 404, description: 'Not found.' })
    @ApiResponse({ status: 500, description: 'Internal server error.' })
    async getByCEP(@Param('cep') cep: string) {
        return await this.FreightService.getByCEP(cep);
    }

    @Get('getById/:id')
    @ApiOperation({ summary: 'Get freight by ID' })
    @ApiResponse({ status: 200, description: 'The freights have been successfully retrieved.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 404, description: 'Not found.' })
    @ApiResponse({ status: 500, description: 'Internal server error.' })
    async getById(@Param('id') id: string) {
        return await this.FreightService.getById(id);
    }

    @Post('create')
    @ApiOperation({ summary: 'Create a new freight' })
    @ApiResponse({ status: 200, description: 'The freights have been successfully created.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 404, description: 'Not found.' })
    @ApiResponse({ status: 500, description: 'Internal server error.' })
    async create(@Body() data: CreateFreightDto) {
        return await this.FreightService.create(data);
    }
    
    @Put('update/:id')
    @ApiOperation({ summary: 'Update a freight' })
    @ApiResponse({ status: 200, description: 'The freights have been successfully updated.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 404, description: 'Not found.' })
    @ApiResponse({ status: 500, description: 'Internal server error.' })
    async update(@Param('id') id: string, @Body() data: any) {
        return await this.FreightService.update(id, data);
    }

    @Delete('delete/:id')
    @ApiOperation({ summary: 'Delete a freight' })
    @ApiResponse({ status: 200, description: 'The freights have been successfully deleted.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 404, description: 'Not found.' })
    @ApiResponse({ status: 500, description: 'Internal server error.' })
    async delete(@Param('id') id: string) {
        return await this.FreightService.delete(id);
    }
}