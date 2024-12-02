import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { ChildService } from './child.service';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';


@Controller('child')
export class ChildController {
  constructor(private readonly childService: ChildService) {}

  @Post()
  create(@Body() createChildDto: CreateChildDto) {
    return this.childService.create(createChildDto);
  }

  @Get()
  findAll() {
    return this.childService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.childService.findOne(+id);
  }

  @Post('childId/assign/:gameId')
  assignGame(@Param('childId') childId: string, @Param('gameId') gameId: string) {
    return this.childService.assignGame(+childId, +gameId);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateChildDto: UpdateChildDto) {
    const child = await this.childService.update(+id, updateChildDto)
    if (!child) {
      throw new NotFoundException('Child not found')
    }
    return child;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const child = await this.childService.remove(+id)
    if (!child) {
      throw new NotFoundException('Child not found')
    }
    return child;
  }
}
