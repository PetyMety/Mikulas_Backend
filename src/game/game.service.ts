import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GameService {
  constructor(private readonly prisma: PrismaService){}

  create(createGameDto: CreateGameDto) {
    return this.prisma.game.create({ data : createGameDto});
  }

  findAll() {
    return this.prisma.game.findMany();
  }

  findOne(id: number) {
      return this.prisma.game.findUniqueOrThrow({where : {id}});
  }

  async update(id: number, updateData: UpdateGameDto) {
    try {
      return await this.prisma.game.update({ where : {id}, data : updateData});
    } catch {
      return undefined;
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.game.delete({where : {id}});;
    } catch {
      return undefined;
    }
  }
}
