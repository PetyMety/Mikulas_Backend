import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post()
  create(@Body() createGameDto: CreateGameDto) {
    return this.gameService.create(createGameDto);
  }

  @Get()
  findAll() {
    return this.gameService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.gameService.findOne(+id);
    } catch {
       throw new NotFoundException('Game not found');;
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateGameDto: UpdateGameDto) {
    const child = await this.gameService.update(+id, updateGameDto);
    if (!child) {
      throw new NotFoundException('Game not found');
    }
    return child;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const child = await this.gameService.remove(+id);
    if (!child) {
      throw new NotFoundException('Game not found');
    }
    return child;
  }
  
}
