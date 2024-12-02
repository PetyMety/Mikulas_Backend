import { Injectable } from '@nestjs/common';
import { CreateChildDto } from './dto/create-child.dto';
//import { UpdateChildDto } from './dto/update-child.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ChildService {
  constructor(private readonly prisma: PrismaService){}
  
  create(createChildDto: CreateChildDto) {
    return this.prisma.child.create({ data : createChildDto});
  }

  findAll() {
    return this.prisma.child.findMany();
  }

  findOne(id: number) {
    return this.prisma.child.findUnique({where : {id}});
  }

  async assignGame(childId: number, gameId: number){
    const child = await this.prisma.child.findUnique({ where : { id : childId}})
    if (!child) {
      throw new Error('Child not found');
    }
    if (!child.isGood) {
      throw new Error('Child is not good, cannot assign game');
    }
    return this.prisma.game.update({
      where : { id : gameId},
      data : { childId : childId}
    })
  }

  update(id: number, updateData: Partial<CreateChildDto>) {
    return this.prisma.child.update({ where : {id}, data : updateData});
  }

  remove(id: number) {
    return this.prisma.child.delete({where : {id}});;
  }
}
