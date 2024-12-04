import {faker} from "@faker-js/faker"
import { PrismaClient } from "@prisma/client";
import { create } from 'domain';
const prisma = new PrismaClient()

async function main() {
  for (let i = 0; i < 20; i++) {
    await prisma.game.create({
      data: {
        name      : faker.string.alphanumeric(),
        material  : faker.helpers.arrayElement(['wood', 'metal', 'plastic', 'other']),
        weight    : faker.number.float({min : 0, max : 15}),
      },
    });
  };

  for (let i = 0; i < 10; i++) {
    await prisma.child.create({
      data: {
        name: faker.person.fullName(),
        address: faker.location.secondaryAddress() + ", " + faker.location.country(),
        isGood: faker.datatype.boolean(),
        gameId: faker.number.int({min: 1, max:20}),
      }
    });
  };
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
