import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import { ChildModule } from './child/child.module';

@Module({
  imports: [GameModule, ChildModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
