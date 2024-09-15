import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { CreateFreightDto, UpdateFreightDto, FreightDto } from '../dto/feright.dto'; // Importar os DTOs necessários

@Injectable()
export class FreightService {
    constructor(private prisma: PrismaService) {}

    async getAll(): Promise<FreightDto[]> {
        return await this.prisma.freight.findMany();
    }

    async create(data: CreateFreightDto): Promise<FreightDto> {
        return await this.prisma.freight.create({ data });
    }

    async update(id: string, data: UpdateFreightDto): Promise<FreightDto> {
        return await this.prisma.freight.update({ where: { id }, data });
    }

    async delete(id: string): Promise<FreightDto> {
        return await this.prisma.freight.delete({ where: { id } });
    }

    async getById(id: string): Promise<FreightDto> { 
        return await this.prisma.freight.findUnique({ where: { id } });
    }

    async getByCEP(cep: string): Promise<FreightDto> { 
        return await this.prisma.freight.findUnique({ where: { cep } });
    }
}
