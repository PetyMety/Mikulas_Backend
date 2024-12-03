import { Injectable } from '@nestjs/common';
import { CreateChildDto } from './dto/create-child.dto';
//import { UpdateChildDto } from './dto/update-child.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ChildService {
  constructor(private readonly prisma: PrismaService){}
  
  // Data-val baja van
  create(createChildDto: CreateChildDto) {
    return this.prisma.child.create({ data : createChildDto});
  }

  findAll() {
    return this.prisma.child.findMany();
  }

  findOne(id: number) {
    return this.prisma.child.findUnique({where : {id}});
  }

  async assignGame(childId: number, gameId: number) {
    return this.prisma.child.update({
      where: { id: childId },
      data: { gameId },
    });
  }

  async update(id: number, updateData: Partial<CreateChildDto>) {
    try {
      return this.prisma.child.update({ where : {id}, data : updateData});
    } catch {
      return undefined;
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.child.delete({where : {id}});
    } catch {
      return undefined;
    }
  }
}
