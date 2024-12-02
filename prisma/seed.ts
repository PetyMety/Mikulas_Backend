import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client/extension';
import { create } from 'domain';
const prisma = new PrismaClient()

async function main() {
  for (let i = 0; i < 50; i++) {
    await prisma.game.create({
      data: {
        name      : faker.string.alphanumeric(),
        material  : faker.string.alpha(),
        weight    : faker.number.float({min : 0, max : 15}),
        child: {
          create {
            name : faker.person.fullName(),
            address : faker.location.streetAddress() + ' ' + faker.location.country()
          }
        }
      }
    })
  }
}
