import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client/extension';
const prisma = new PrismaClient()

async function main() {
  for (let i = 0; i < 50; i++) {
    await prisma.game.create({
      data: {
        name: faker.string.
      }
    })
  }
}
